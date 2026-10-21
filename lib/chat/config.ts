/**
 * Chatbot configuration. Models are Vercel AI Gateway ids ("provider/model").
 * Everything is overridable through environment variables so models can be swapped
 * (or fallbacks reordered) without a code change.
 */
const csv = (value?: string): string[] =>
  (value ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

const envFallbacks = csv(process.env.AI_CHAT_FALLBACK_MODELS);

export const CHAT_CONFIG = {
  /** Primary model: very low cost per token, low time-to-first-token. */
  model: process.env.AI_CHAT_MODEL || "anthropic/claude-haiku-5.5",
  /** Tried in order by the Gateway if the primary model or all of its providers fail. */
  fallbackModels: envFallbacks.length ? envFallbacks : ["amazon/nova-2-lite"],
  /** Replies are capped at ~3 sentences by the prompt; this is a hard cost ceiling. */
  maxOutputTokens: 350,
  /** Conversation window forwarded to the model. */
  maxMessages: 10,
  maxCharsPerMessage: 800,
  requestTimeoutMs: 20_000,
  rateLimit: { windowMs: 60_000, max: 12 },
  gatewayTags: ["pyrexxai-web", "feature:site-assistant"],
  /** "disabled" forces thinking off on Anthropic models for the lowest latency. */
  anthropicThinking: process.env.AI_CHAT_ANTHROPIC_THINKING === "disabled",
} as const;

export const CHAT_FALLBACK_REPLY =
  "I'm having trouble connecting right now. Please [book a free demo](/book-demo) or use our [contact form](/contact) and our team will help right away!";
