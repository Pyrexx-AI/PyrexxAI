import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Minimal, XSS-safe renderer for the assistant's output: **bold** and [label](url) only.
 * Everything is emitted as React nodes (no dangerouslySetInnerHTML). Only same-site paths
 * and https links are linkified; anything else is shown as plain text.
 */
const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g;

export function renderSafeMarkdown(text: string): ReactNode[] {
  return text.split(TOKEN).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;

    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      const [, label, href] = link;
      if (href.startsWith("/") && !href.startsWith("//")) {
        return (
          <Link key={i} href={href}>
            {label}
          </Link>
        );
      }
      if (/^https:\/\//i.test(href)) {
        return (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        );
      }
      return <span key={i}>{label}</span>;
    }
    return <span key={i}>{part}</span>;
  });
}
