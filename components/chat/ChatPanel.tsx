"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Send, X } from "lucide-react";
import { renderSafeMarkdown } from "@/components/chat/safe-markdown";

type Message = { id: string; role: "ai" | "user"; content: string };

const GREETING: Message = {
  id: "greeting",
  role: "ai",
  content: "Hi there! 👋 I'm the PyrexxAI virtual assistant. Ask me anything about our AI front desk and EMR integrations!",
};

const SUGGESTIONS = [
  { label: "EMR Integrations", query: "What EMR systems does the AI integrate with?" },
  { label: "HIPAA Compliance", query: "Is this voice AI fully HIPAA compliant?" },
  { label: "Pricing Setup", query: "How much does PyrexxAI cost?" },
];

const STORAGE_KEY = "pyrexxai-chat-v2";
const FALLBACK =
  "I'm having trouble connecting to the network right now. Please [book a free demo](/book-demo) directly to speak with our engineering team!";

export default function ChatPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Restore the conversation for this browser session
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) setMessages(JSON.parse(saved) as Message[]);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-30)));
    } catch {
      /* ignore */
    }
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const send = useCallback(
    async (text: string) => {
      const content = text.trim().slice(0, 500);
      if (!content || loading) return;

      const userMsg: Message = { id: crypto.randomUUID(), role: "user", content };
      const aiId = crypto.randomUUID();
      const history = [...messages, userMsg];
      setMessages([...history, { id: aiId, role: "ai", content: "" }]);
      setInput("");
      setLoading(true);

      const controller = new AbortController();
      abortRef.current = controller;
      const patch = (c: string) => setMessages((prev) => prev.map((m) => (m.id === aiId ? { ...m, content: c } : m)));

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history.map(({ role, content: c }) => ({ role, content: c })) }),
          signal: controller.signal,
        });

        if (!res.ok || !res.body) {
          const err = await res.json().catch(() => ({ content: null }));
          patch(err.content || FALLBACK);
          return;
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = "";
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          patch(acc);
        }
        if (!acc.trim()) patch(FALLBACK);
      } catch (e) {
        if ((e as Error).name !== "AbortError") patch(FALLBACK);
      } finally {
        setLoading(false);
      }
    },
    [messages, loading]
  );

  return (
    <section
      id="chat-panel"
      className="chat"
      role="dialog"
      aria-label="PyrexxAI Virtual Assistant Chat"
      hidden={!open}
    >
      <div className="chat__head">
        <div>
          <b>PyrexxAI Assistant</b>
          <span>
            <i className="live-dot" aria-hidden="true" /> Online
          </span>
        </div>
        <button type="button" onClick={onClose} aria-label="Close chat window">
          <X className="icon" aria-hidden="true" />
        </button>
      </div>

      <div className="chat__log" ref={logRef} role="log" aria-live="polite" aria-relevant="additions text">
        {messages.map((m) =>
          m.content === "" ? (
            <div key={m.id} className="chat__msg chat__msg--ai chat__typing" aria-label="Assistant is typing">
              <i />
              <i />
              <i />
            </div>
          ) : (
            <div key={m.id} className={`chat__msg chat__msg--${m.role}`}>
              {m.role === "ai" ? renderSafeMarkdown(m.content) : m.content}
            </div>
          )
        )}
      </div>

      {messages.length <= 1 && (
        <div className="chat__chips">
          {SUGGESTIONS.map((s) => (
            <button key={s.label} type="button" onClick={() => send(s.query)}>
              {s.label}
            </button>
          ))}
        </div>
      )}

      <form
        className="chat__form"
        onSubmit={(e) => {
          e.preventDefault();
          void send(input);
        }}
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          maxLength={500}
          autoComplete="off"
          aria-label="Your message"
        />
        <button type="submit" disabled={loading || !input.trim()} aria-label="Send message">
          <Send className="icon" aria-hidden="true" />
        </button>
      </form>
    </section>
  );
}
