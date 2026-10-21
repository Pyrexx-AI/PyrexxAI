/**
 * Best-effort sliding-window limiter, per runtime instance.
 * It stops accidental loops and casual abuse. For hard guarantees across instances
 * add a Vercel Firewall rate-limit rule on POST /api/chat (see MIGRATION.md).
 */
const hits = new Map<string, number[]>();
let lastSweep = 0;

export function rateLimit(key: string, windowMs: number, max: number) {
  const now = Date.now();

  if (now - lastSweep > windowMs) {
    lastSweep = now;
    hits.forEach((stamps, k) => {
      const fresh = stamps.filter((t) => now - t < windowMs);
      if (fresh.length) hits.set(k, fresh);
      else hits.delete(k);
    });
  }

  const stamps = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (stamps.length >= max) {
    return { ok: false as const, retryAfter: Math.max(1, Math.ceil((windowMs - (now - stamps[0])) / 1000)) };
  }
  stamps.push(now);
  hits.set(key, stamps);
  return { ok: true as const, retryAfter: 0 };
}

export function clientKey(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return fwd || req.headers.get("x-real-ip") || "anonymous";
}

/** Short, non-reversible id for Gateway spend attribution (no raw IPs leave the app). */
export async function anonymousId(key: string): Promise<string> {
  const data = new TextEncoder().encode(`pyrexxai:${key}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .slice(0, 8)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
