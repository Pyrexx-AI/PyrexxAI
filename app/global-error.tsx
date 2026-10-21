"use client";

/** Last-resort boundary (errors thrown in the root layout). Must render its own <html>/<body>. */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", display: "grid", placeItems: "center", minHeight: "100vh", background: "#fff", color: "#0b1220" }}>
        <div style={{ textAlign: "center", padding: 24 }}>
          <h1 style={{ fontSize: 28, letterSpacing: "-0.03em" }}>Something went wrong</h1>
          <p style={{ color: "#5b6577" }}>Please reload the page. If this keeps happening, email hello@pyrexxai.com.</p>
          <button
            onClick={reset}
            style={{ marginTop: 12, height: 44, padding: "0 22px", border: 0, borderRadius: 99, background: "#2563eb", color: "#fff", fontWeight: 600, cursor: "pointer" }}
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
