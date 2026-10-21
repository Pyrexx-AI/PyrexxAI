import { CheckCircle2, Lock, Settings } from "lucide-react";
import IconTile from "@/components/ui/IconTile";
import { Section, SectionHead } from "@/components/ui/Section";

const ITEMS = [
  { icon: Lock, tone: "green" as const, title: "HIPAA Compliant Architecture", desc: "End-to-end encryption in transit (TLS 1.3) and at rest (AES-256). Zero Protected Health Information (PHI) is ever used to train public AI models." },
  { icon: CheckCircle2, tone: "brand" as const, title: "Business Associate Agreement", desc: "We provide a signed BAA as a standard legal guarantee before launch, ensuring your practice maintains full HIPAA/HITECH compliance." },
  { icon: Settings, tone: "violet" as const, title: "Voice AI You Control", desc: "Your agent, your voice, your custom protocols. You maintain full visibility into every call transcript and booking via your secure dashboard." },
];

export default function TrustHIPAA() {
  return (
    <Section aria-labelledby="trust-title">
      <SectionHead id="trust-title" eyebrow="Security" title="Built for Healthcare. Compliant by Design." />
      <div className="grid grid--3">
        {ITEMS.map((t) => (
          <article key={t.title} className="card" data-reveal>
            <IconTile icon={t.icon} tone={t.tone} />
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
          </article>
        ))}
      </div>
      <blockquote className="pull-quote" data-reveal style={{ marginTop: 28 }}>
        &ldquo;In 2024, 725 large healthcare data breaches exposed PHI for 276 million Americans. We built PyrexxAI so your clinic isn&apos;t next.&rdquo;
      </blockquote>
    </Section>
  );
}
