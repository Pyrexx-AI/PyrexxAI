import Link from "next/link";
import { ArrowRight, Link2, Mic, Search, TrendingUp } from "lucide-react";
import IconTile, { toneAt } from "@/components/ui/IconTile";
import { Section, SectionHead } from "@/components/ui/Section";

const STEPS = [
  { num: "01", icon: Search, title: "Operational Audit", desc: "We map your current phone, booking, and lead workflows to identify structural leaks." },
  { num: "02", icon: Mic, title: "Custom Training", desc: "We build and train your AI agent on your clinic's exact services, FAQs, and brand tone." },
  { num: "03", icon: Link2, title: "EMR Integration", desc: "We connect your AI agent securely to your phone system and EMR system — zero downtime." },
  { num: "04", icon: TrendingUp, title: "Optimize & Retrain", desc: "Your agent goes live in 14 business days. We evaluate performance and upgrade system logic weekly." },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" aria-labelledby="how-title">
      <SectionHead id="how-title" eyebrow="Process" title="Effortless Implementation">
        From kickoff to live AI receptionist in 14 business days.
      </SectionHead>
      <ol className="grid grid--4" style={{ listStyle: "none", padding: 0 }}>
        {STEPS.map((s, i) => (
          <li key={s.num} className="card" data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
            <IconTile icon={s.icon} tone={toneAt(i)} />
            <h3>
              <span className="step-num text-gradient">{s.num}</span> {s.title}
            </h3>
            <p>{s.desc}</p>
          </li>
        ))}
      </ol>

      <div className="callout" style={{ marginTop: 14 }} data-reveal>
        <div>
          <span className="eyebrow">Included Free With Every Active Subscription</span>
          <h3>Patient Database Reactivation Add-On</h3>
          <p>
            Tapping your dormant list is the fastest way to generate immediate bookings. Every active Pyrexx AI Receptionist plan includes automated AI outreach to past patients who haven&apos;t visited in 6+ months—at zero additional fee.
          </p>
        </div>
        <Link href="/database-reactivation" className="btn btn--inverse">
          Explore Reactivation <ArrowRight className="icon" aria-hidden="true" />
        </Link>
      </div>

      <div style={{ textAlign: "center", marginTop: 28 }} data-reveal>
        <Link href="/dashboard" className="btn btn--primary btn--lg">
          Explore Live Dashboard Demo <ArrowRight className="icon" aria-hidden="true" />
        </Link>
        <p style={{ marginTop: 10, fontSize: 12.5, color: "var(--muted)" }}>No credit card required. Preview the client command center instantly.</p>
      </div>
    </Section>
  );
}