import Link from "next/link";
import { Clock, Server, Shield } from "lucide-react";
import PhoneMockup from "@/components/home/PhoneMockup";
import { BOOK_DEMO_HREF } from "@/lib/site";

/** Server component: headline, copy and CTAs are in the initial HTML (fast LCP). Only the phone hydrates. */
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="hero__grid">
          <div>
            <h1 id="hero-title">
              The 24/7 Voice AI <span className="text-gradient">Front Desk for Clinics.</span>
            </h1>
            <p className="hero__lead">
              38% of healthcare calls go unanswered. PyrexxAI deploys lifelike AI receptionists that answer every
              inbound call instantly, verify pricing, and write bookings directly into your EMR.
            </p>
            <div className="hero__cta">
              <Link href={BOOK_DEMO_HREF} className="btn btn--primary">
                Book a Free Demo &rarr;
              </Link>
              <Link href="/dashboard" className="btn btn--ghost">
                Try Live Dashboard
              </Link>
            </div>
          </div>
          <PhoneMockup />
        </div>
        <div className="trust-row">
          <span>
            <Shield className="icon" style={{ color: "var(--green-ink)" }} aria-hidden="true" />
            HIPAA Compliant (BAA Provided)
          </span>
          <span>
            <Server className="icon" style={{ color: "var(--brand-ink)" }} aria-hidden="true" />
            Native EMR API Bridges
          </span>
          <span>
            <Clock className="icon" style={{ color: "var(--violet)" }} aria-hidden="true" />
            14-Day Deployment
          </span>
        </div>
      </div>
    </section>
  );
}
