import { streamText } from "ai";
import { CHAT_CONFIG, CHAT_FALLBACK_REPLY } from "@/lib/chat/config";
import { buildDynamicSystemPrompt } from "@/lib/chat/system-prompt";
import { getRelevantKnowledge } from "@/lib/chat/knowledge";
import { chatRequestSchema, toModelMessages } from "@/lib/chat/schema";
import { anonymousId, clientKey, rateLimit } from "@/lib/chat/rate-limit";

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

function isSameOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).host === req.headers.get("host");
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  const startTime = Date.now();
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

  // 1. Extract strictly typed user query from validated schema to satisfy TypeScript
  const rawMessages = parsed.data.messages;
  const lastRawMessage = rawMessages[rawMessages.length - 1];
  const latestUserQuery: string = typeof lastRawMessage?.content === "string" 
    ? lastRawMessage.content.trim() 
    : "";

  if (!latestUserQuery) return json("Please send a short text message and try again.", 400);

  // 2. Prepare model message array for Vercel AI SDK
  const messages = toModelMessages(rawMessages);
  if (!messages.length) return json("Please send a short text message and try again.", 400);

  const user = await anonymousId(key);

  // 3. Dynamically retrieve grounded knowledge snippets
  const dynamicKnowledge = await getRelevantKnowledge(latestUserQuery);
  const systemPrompt = buildDynamicSystemPrompt(dynamicKnowledge);

  console.info(`[AUDIT_TELEMETRY] [chat_query_received] User: ${user} | Query: "${latestUserQuery.slice(0, 80)}"`);

  try {
    const result = streamText({
      model: CHAT_CONFIG.model,
      system: systemPrompt,
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
          console.info(`[AUDIT_TELEMETRY] [chat_stream_completed] Latency: ${Date.now() - startTime}ms`);
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