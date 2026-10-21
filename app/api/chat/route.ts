import { streamText } from "ai";
import { CHAT_CONFIG, CHAT_FALLBACK_REPLY } from "@/lib/chat/config";
import { SYSTEM_PROMPT } from "@/lib/chat/system-prompt";
import { chatRequestSchema, toModelMessages } from "@/lib/chat/schema";
import { anonymousId, clientKey, rateLimit } from "@/lib/chat/rate-limit";

/**
 * PyrexxAI assistant, served through the Vercel AI Gateway.
 *
 * - Plain model-id strings ("provider/model") route through the Gateway automatically.
 *   Auth: AI_GATEWAY_API_KEY, or OIDC (automatic on Vercel deployments).
 * - Model + provider fallbacks, spend tags and per-user attribution are set via
 *   providerOptions.gateway.
 * - The response is a plain-text token stream (compatible with the existing client).
 */
export const runtime = "edge";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const textHeaders = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "no-store, no-transform",
  "X-Content-Type-Options": "nosniff",
};

const json = (content: string, status: number, extra: Record<string, string> = {}) =>
  new Response(JSON.stringify({ content }), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...extra },
  });

/** Browsers always send Origin on cross-origin POSTs; reject anything not from this host. */
function isSameOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true; // non-browser clients (curl, health checks) – still rate limited
  try {
    return new URL(origin).host === req.headers.get("host");
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  if (!isSameOrigin(req)) return json("Forbidden.", 403);

  const key = clientKey(req);
  const limit = rateLimit(key, CHAT_CONFIG.rateLimit.windowMs, CHAT_CONFIG.rateLimit.max);
  if (!limit.ok) {
    return json(
      "You're sending messages quickly. Please wait a moment, or [book a free demo](/book-demo) to talk with our team directly.",
      429,
      { "Retry-After": String(limit.retryAfter) }
    );
  }

  const raw = await req.json().catch(() => null);
  const parsed = chatRequestSchema.safeParse(raw);
  if (!parsed.success) return json("Please send a short text message and try again.", 400);

  const messages = toModelMessages(parsed.data.messages);
  if (!messages.length) return json("Please send a short text message and try again.", 400);

  const user = await anonymousId(key);

  try {
    const result = streamText({
      model: CHAT_CONFIG.model,
      system: SYSTEM_PROMPT,
      messages,
      maxOutputTokens: CHAT_CONFIG.maxOutputTokens,
      maxRetries: 1,
      abortSignal: AbortSignal.timeout(CHAT_CONFIG.requestTimeoutMs),
      providerOptions: {
        gateway: {
          models: [...CHAT_CONFIG.fallbackModels],
          user,
          tags: [...CHAT_CONFIG.gatewayTags],
        },
        ...(CHAT_CONFIG.anthropicThinking ? { anthropic: { thinking: { type: "disabled" } } } : {}),
      },
      onError: ({ error }) => console.error("[chat] gateway stream error:", error),
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream<Uint8Array>({
      async start(controller) {
        let sent = false;
        try {
          for await (const delta of result.textStream) {
            sent = true;
            controller.enqueue(encoder.encode(delta));
          }
          if (!sent) controller.enqueue(encoder.encode(CHAT_FALLBACK_REPLY));
        } catch (error) {
          console.error("[chat] stream interrupted:", error);
          controller.enqueue(
            encoder.encode(sent ? "\n\nPlease [book a free demo](/book-demo) to continue!" : CHAT_FALLBACK_REPLY)
          );
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, { headers: textHeaders });
  } catch (error) {
    console.error("[chat] route error:", error);
    return new Response(CHAT_FALLBACK_REPLY, { headers: textHeaders });
  }
}
