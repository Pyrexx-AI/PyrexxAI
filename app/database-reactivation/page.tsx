import Link from "next/link";
import { CalendarCheck2, MessageSquare, Search } from "lucide-react";
import type { Metadata } from "next";
import CtaBand from "@/components/ui/CtaBand";
import IconTile, { toneAt } from "@/components/ui/IconTile";
import JsonLd from "@/components/ui/JsonLd";
import PageHeader from "@/components/ui/PageHeader";
import { Section, SectionHead } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { APP_SIGNUP_HREF, BOOK_DEMO_HREF } from "@/lib/site";

const DESCRIPTION =
  "Turn your dormant patient list into immediate booked appointments. Included free with every active Pyrexx AI Receptionist subscription.";

export const metadata: Metadata = buildMetadata({
  title: "Patient Database Reactivation for Clinics",
  description: DESCRIPTION,
  path: "/database-reactivation",
});

const STEPS = [
  { icon: Search, title: "We Segment Your EMR", desc: "We securely identify patients who haven't visited your clinic in 6+ months for routine cleanings, follow-ups, evaluations, or top-off treatments." },
  { icon: MessageSquare, title: "AI Initiates Outreach", desc: "Our conversational AI launches personalized SMS or voice reactivation, answers treatment and insurance FAQs, and offers real-time openings." },
  { icon: CalendarCheck2, title: "Direct EMR Bookings", desc: "Confirmed patients book straight back onto your schedule. Included as a free add-on with every active Pyrexx AI subscription." },
];

export default function DatabaseReactivationPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: "Patient Database Reactivation", description: DESCRIPTION, path: "/database-reactivation" })} />
      <PageHeader
        trail={[{ name: "Database Reactivation", path: "/database-reactivation" }]}
        eyebrow="Free Add-On With Active Subscription"
        title={<>Unlock Hidden Revenue from Your <span className="text-gradient">Dormant Patient List.</span></>}
        actions={
          <>
            <a href={APP_SIGNUP_HREF} className="btn btn--primary">Get Started With Free Add-On &rarr;</a>
            <Link href={BOOK_DEMO_HREF} className="btn btn--ghost">Book a Demo</Link>
          </>
        }
      >
        You already spent money acquiring past patients. Included free with every active Pyrexx AI Receptionist subscription, our AI re-engages your dormant patient roster and fills empty schedule gaps automatically.
      </PageHeader>

      <Section aria-labelledby="steps-title">
        <SectionHead id="steps-title" eyebrow="How it works" title="Three steps. Included free." />
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