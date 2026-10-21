import Link from "next/link";
import { CalendarClock, CheckCircle2, Link2, RefreshCw, Target } from "lucide-react";
import type { Metadata } from "next";
import CtaBand from "@/components/ui/CtaBand";
import IconTile, { toneAt } from "@/components/ui/IconTile";
import JsonLd from "@/components/ui/JsonLd";
import PageHeader from "@/components/ui/PageHeader";
import { Section, SectionHead } from "@/components/ui/Section";
import { INTEGRATIONS } from "@/lib/content/integrations";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { BOOK_DEMO_HREF } from "@/lib/site";

const DESCRIPTION =
  "Deploy a custom AI voice receptionist that integrates directly with your clinical EMR. Answer every call 24/7, book appointments automatically, and eliminate missed patient revenue.";

export const metadata: Metadata = buildMetadata({
  title: "AI Voice Receptionist for Medical Clinics",
  description: DESCRIPTION,
  path: "/ai-receptionist",
});

const AT_A_GLANCE = [
  "24/7 inbound call coverage",
  "Handles 100% of inbound call volume",
  "Native EMR API bridges, no fragile webhooks",
  "HIPAA compliant, BAA provided",
  "Live in 14 days",
];

const EMR_FEATURES = [
  { icon: RefreshCw, title: "Real-Time Schedule Sync", desc: "Zero double-bookings. The AI reads live practitioner availability." },
  { icon: CalendarClock, title: "Instant Rescheduling", desc: "Patients can call after hours to adjust or move appointments, freeing up front-desk bandwidth." },
  { icon: Target, title: "Service-Specific Routing", desc: "The AI intelligently books distinct durations based on the procedure (e.g., Botox vs. New Patient Consultation)." },
];

export default function AIReceptionistPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: "AI Voice Receptionist", description: DESCRIPTION, path: "/ai-receptionist" })} />
      <PageHeader
        trail={[{ name: "AI Voice Receptionist", path: "/ai-receptionist" }]}
        eyebrow="AI Voice Receptionist"
        title={<>The World&apos;s Most Advanced <span className="text-gradient">AI Voice Receptionist</span></>}
        actions={
          <>
            <Link href={BOOK_DEMO_HREF} className="btn btn--primary">Book a Free Demo &rarr;</Link>
            <Link href="/dashboard" className="btn btn--ghost">Try Live Dashboard</Link>
          </>
        }
      >
        Stop losing patients to voicemail. PyrexxAI provides a lifelike, HIPAA-compliant voice agent that handles 100% of your inbound call volume, books appointments directly into your EMR, and answers complex patient FAQs in real-time.
      </PageHeader>

      <Section aria-labelledby="what-title">
        <div className="split">
          <div data-reveal>
            <h2 id="what-title">What is a PyrexxAI Receptionist?</h2>
            <p className="lead">
              PyrexxAI is an enterprise-grade AI voice agent custom-engineered for MedSpas, Dental Clinics, and Therapy Practices. It utilizes advanced Natural Language Processing (NLP) to converse seamlessly with patients, verify pricing and procedures, and write scheduled appointments directly into clinical management systems like Jane, Boulevard, and Mindbody without human intervention.
            </p>
          </div>
          <div className="card" data-reveal>
            <h3 style={{ marginTop: 0 }}>At a glance</h3>
            <ul className="check-list">
              {AT_A_GLANCE.map((x) => (
                <li key={x}><CheckCircle2 className="icon" aria-hidden="true" />{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section alt aria-labelledby="emr-title">
        <div className="split">
          <div>
            <div data-reveal>
              <h2 id="emr-title">How does PyrexxAI integrate with your EMR?</h2>
              <p className="lead">
                Unlike DIY AI builders that rely on fragile webhooks, PyrexxAI builds native API bridges to your existing Electronic Medical Record (EMR) or booking software. The AI reads your real-time availability calendar, offers open slots to the patient over the phone, and instantly writes the confirmed appointment into your system.
              </p>
            </div>
            <div className="stack" style={{ marginTop: 18 }}>
              {EMR_FEATURES.map((f, i) => (
                <article key={f.title} className="card" data-reveal>
                  <IconTile icon={f.icon} tone={toneAt(i)} />
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="card" data-reveal aria-label="Example call">
            <span className="tag tag--muted">Sample call</span>
            <div className="transcript" style={{ marginTop: 14 }}>
              <div className="bubble bubble--in" style={{ maxWidth: "90%" }}>&ldquo;Hi, I need to book a follow-up for my dermal fillers next Tuesday.&rdquo;</div>
              <div className="bubble bubble--out" style={{ maxWidth: "92%" }}>&ldquo;I&apos;d be happy to help with that. Dr. Smith has an opening at 10:00 AM or 2:30 PM next Tuesday. Which works better for you?&rdquo;</div>
              <div className="sync-card" style={{ marginTop: 6 }}>
                <CheckCircle2 aria-hidden="true" />
                <div><b>Appointment written to EMR</b></div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section aria-labelledby="works-with">
        <SectionHead id="works-with" eyebrow="Integrations" title="Works with your scheduling stack" />
        <div className="grid grid--3">
          {Object.values(INTEGRATIONS).map((i, k) => (
            <Link key={i.slug} href={`/integrations/${i.slug}`} className="card" data-reveal>
              <IconTile icon={Link2} tone={toneAt(k)} />
              <h3>{i.emrName}</h3>
              <p>{i.category}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
