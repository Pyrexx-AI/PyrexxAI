"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { MessageSquare, X } from "lucide-react";

/**
 * Only the launcher button ships in the initial bundle. The chat panel (and its logic)
 * is code-split and fetched on first hover/focus/tap, so it costs nothing at page load.
 */
const loadPanel = () => import("@/components/chat/ChatPanel");
const ChatPanel = dynamic(loadPanel, { ssr: false });

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggle = () => {
    setMounted(true);
    setOpen((v) => !v);
  };

  return (
    <>
      {mounted && <ChatPanel open={open} onClose={() => setOpen(false)} />}
      <button
        type="button"
        className="chat-launcher"
        onClick={toggle}
        onPointerEnter={() => void loadPanel()}
        onFocus={() => void loadPanel()}
        aria-label={open ? "Close AI Assistant" : "Open AI Assistant"}
        aria-expanded={open}
        aria-controls="chat-panel"
      >
        {open ? <X className="icon" aria-hidden="true" /> : <MessageSquare className="icon" aria-hidden="true" />}
        {!mounted && <span className="chat-launcher__dot" aria-hidden="true" />}
      </button>
    </>
  );
}
