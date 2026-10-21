import Link from "next/link";
import { BOOK_DEMO_HREF } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="page-header" style={{ minHeight: "70svh", display: "grid", alignContent: "center" }}>
      <div className="wrap">
        <span className="tag tag--warn">404</span>
        <h1 style={{ marginTop: 14 }}>
          This page <span className="text-gradient">couldn&apos;t be found.</span>
        </h1>
        <p>The page you&apos;re looking for has moved or doesn&apos;t exist.</p>
        <div className="hero__cta">
          <Link href="/" className="btn btn--primary">Back to home</Link>
          <Link href={BOOK_DEMO_HREF} className="btn btn--ghost">Book a Demo</Link>
        </div>
      </div>
    </section>
  );
}
