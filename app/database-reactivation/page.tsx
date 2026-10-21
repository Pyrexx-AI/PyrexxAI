import Link from "next/link";
import { DollarSign, MessageSquare, Search } from "lucide-react";
import type { Metadata } from "next";
import CtaBand from "@/components/ui/CtaBand";
import IconTile, { toneAt } from "@/components/ui/IconTile";
import JsonLd from "@/components/ui/JsonLd";
import PageHeader from "@/components/ui/PageHeader";
import { Section, SectionHead } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { BOOK_DEMO_HREF } from "@/lib/site";

const DESCRIPTION =
  "Turn your dormant patient list into immediate appointments. Our AI-driven reactivation campaigns operate on a 100% risk-free, commission-only basis.";

export const metadata: Metadata = buildMetadata({
  title: "Database Reactivation for Clinics",
  description: DESCRIPTION,
  path: "/database-reactivation",
});

const STEPS = [
  { icon: Search, title: "We Mine Your EMR", desc: "We securely export a list of patients who haven't visited your clinic in 6+ months for routine check-ups, follow-ups, or top-off treatments." },
  { icon: MessageSquare, title: "AI Initiates Contact", desc: "Our conversational AI initiates personalized SMS or voice outreach, provides clinical FAQs, and coordinates the appointment booking directly." },
  { icon: DollarSign, title: "You Pay for Shows", desc: "No upfront retainer or ad spend required. We receive a pre-agreed commission only on the patients who successfully complete their appointment." },
];

export default function DatabaseReactivationPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: "Patient Database Reactivation", description: DESCRIPTION, path: "/database-reactivation" })} />
      <PageHeader
        trail={[{ name: "Database Reactivation", path: "/database-reactivation" }]}
        eyebrow="100% Risk-Free Commission Basis"
        title={<>Unlock Hidden Revenue from Your <span className="text-gradient">Dormant Patient List.</span></>}
        actions={<Link href={BOOK_DEMO_HREF} className="btn btn--primary">Start Your Free Campaign &rarr;</Link>}
      >
        You already spent money acquiring them. Let our intelligent AI systems seamlessly reach out to past patients to fill your calendar, and you only pay us when they actually show up.
      </PageHeader>

      <Section aria-labelledby="steps-title">
        <SectionHead id="steps-title" eyebrow="How it works" title="Three steps. Zero upfront risk." />
        <ol className="grid grid--3" style={{ listStyle: "none", padding: 0 }}>
          {STEPS.map((s, i) => (
            <li key={s.title} className="card" data-reveal>
              <IconTile icon={s.icon} tone={toneAt(i)} />
              <h3><span className="step-num text-gradient">0{i + 1}</span> {s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand />
    </>
  );
}
