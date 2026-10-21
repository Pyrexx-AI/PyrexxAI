import { z } from "zod";
import type { ModelMessage } from "ai";
import { CHAT_CONFIG } from "@/lib/chat/config";

/** Accepts the legacy client shape ({ id, role: "ai" | "user", content }) as well as "assistant". */
export const chatRequestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant", "ai"]),
        content: z.string().min(1).max(4000),
      })
    )
    .min(1)
    .max(60),
});

/** Normalises to a valid alternating user/assistant window that starts with a user turn. */
export function toModelMessages(input: z.infer<typeof chatRequestSchema>["messages"]): ModelMessage[] {
  const recent = input.slice(-CHAT_CONFIG.maxMessages).map((m) => ({
    role: m.role === "user" ? ("user" as const) : ("assistant" as const),
    content: m.content.trim().slice(0, CHAT_CONFIG.maxCharsPerMessage),
  }));

  const merged: { role: "user" | "assistant"; content: string }[] = [];
  for (const m of recent) {
    if (!m.content) continue;
    const last = merged[merged.length - 1];
    if (last && last.role === m.role) last.content += `\n${m.content}`;
    else merged.push({ ...m });
  }
  while (merged.length && merged[0].role !== "user") merged.shift();
  return merged;
}
