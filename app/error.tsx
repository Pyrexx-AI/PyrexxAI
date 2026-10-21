"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="page-header" style={{ minHeight: "70svh", display: "grid", alignContent: "center" }}>
      <div className="wrap">
        <span className="tag tag--warn">Something went wrong</span>
        <h1 style={{ marginTop: 14 }}>
          We hit an <span className="text-gradient">unexpected error.</span>
        </h1>
        <p>Please try again. If the problem continues, contact our team and we&apos;ll resolve it right away.</p>
        <div className="hero__cta">
          <button type="button" className="btn btn--primary" onClick={reset}>Try again</button>
          <Link href="/contact" className="btn btn--ghost">Contact support</Link>
        </div>
      </div>
    </section>
  );
}
