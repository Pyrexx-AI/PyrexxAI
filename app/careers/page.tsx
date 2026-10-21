import Link from "next/link";
import { Code2, Heart, MessageSquare, Mic, ShieldCheck, Target, Users } from "lucide-react";
import type { Metadata } from "next";
import IconTile, { toneAt } from "@/components/ui/IconTile";
import PageHeader from "@/components/ui/PageHeader";
import { Section, SectionHead } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description: "Join the team at PyrexxAI and help us build the future of voice AI for healthcare.",
  path: "/careers",
});

const TEAMS = [
  { icon: Mic, title: "Voice AI Engineering", desc: "Conversational agents, telephony, and EMR bridges." },
  { icon: Code2, title: "Full-Stack Engineering", desc: "Dashboards, integrations, and clinic-facing software." },
  { icon: Users, title: "Sales Engineering", desc: "Discovery, architecture mapping, and onboarding." },
];
const PRINCIPLES = [
  { icon: Heart, title: "Patients first", desc: "Every decision traces back to the patient on the line." },
  { icon: ShieldCheck, title: "Engineering rigor", desc: "Compliance and reliability are design inputs, not afterthoughts." },
  { icon: Target, title: "Own the outcome", desc: "We map, build, integrate, and stay through launch." },
  { icon: MessageSquare, title: "Plain communication", desc: "Clear writing, honest status, no jargon." },
];
const PROCESS = ["Intro conversation", "Role conversation", "Working session", "Offer and onboarding"];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        trail={[{ name: "Careers", path: "/careers" }]}
        eyebrow="Careers"
        title={<>Join the <span className="text-gradient">PyrexxAI</span> Team</>}
        actions={
          <>
            <a href="#roles" className="btn btn--primary">View open roles</a>
            <Link href="/about" className="btn btn--ghost">About PyrexxAI</Link>
          </>
        }
      >
        We are building the future of automated patient intake and intelligent voice reception for medical clinics nationwide.
      </PageHeader>

      <Section>
        <p className="big-quote" data-reveal>Our mission: make sure no patient seeking care is ever sent to voicemail.</p>
      </Section>

      <Section id="roles" alt aria-labelledby="roles-title">
        <SectionHead id="roles-title" eyebrow="Open roles" title="Current openings" center={false} />
        <form className="form" style={{ marginBottom: 14 }} role="search" aria-label="Filter roles">
          <div className="form__row" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
            <input disabled placeholder="Search roles" aria-label="Search roles" />
            <select disabled aria-label="Team"><option>All teams</option></select>
            <select disabled aria-label="Location"><option>All locations</option></select>
          </div>
        </form>
        <div className="card" style={{ textAlign: "center", padding: "clamp(28px,6vw,56px) 20px" }} data-reveal>
          <span className="tag tag--muted">0 open roles</span>
          <h3 style={{ fontSize: "clamp(18px,2.4vw,24px)", margin: "14px 0 8px" }}>No Open Positions</h3>
          <p style={{ maxWidth: 520, margin: "0 auto 20px", fontSize: 14.5 }}>
            Our engineering team is currently at full capacity, but we are always looking to connect with exceptional voice AI, full-stack, and sales engineering talent.
          </p>
          <Link href="/contact" className="btn btn--primary">Get in touch</Link>
        </div>
      </Section>

      <Section aria-labelledby="teams-title">
        <SectionHead id="teams-title" eyebrow="Teams" title="Where we hire" center={false} />
        <div className="grid grid--3">
          {TEAMS.map((t, i) => (
            <article key={t.title} className="card" data-reveal>
              <IconTile icon={t.icon} tone={toneAt(i)} />
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
              <span className="tag tag--muted" style={{ marginTop: 14 }}>0 open roles</span>
            </article>
          ))}
        </div>
      </Section>

      <Section alt aria-labelledby="principles-title">
        <SectionHead id="principles-title" eyebrow="How we work" title="Principles we hire for" center={false} />
        <div className="grid grid--4">
          {PRINCIPLES.map((p, i) => (
            <article key={p.title} className="card" data-reveal>
              <IconTile icon={p.icon} tone={toneAt(i)} />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section aria-labelledby="process-title">
        <SectionHead id="process-title" eyebrow="Hiring process" title="What to expect" center={false} />
        <ol className="grid grid--4" style={{ listStyle: "none", padding: 0 }}>
          {PROCESS.map((p, i) => (
            <li key={p} className="card" data-reveal>
              <IconTile icon={Users} tone={toneAt(i)} />
              <h3><span className="step-num text-gradient">0{i + 1}</span> {p}</h3>
            </li>
          ))}
        </ol>
      </Section>

      <Section flushTop>
        <div className="callout" data-reveal>
          <div>
            <span className="eyebrow">Talent network</span>
            <h3>Don&apos;t see a fit? Stay in touch.</h3>
            <p>We keep every note from voice AI, full-stack, and sales engineering talent on file for when roles open.</p>
          </div>
          <a href={`mailto:${SITE.email}?subject=Talent%20network`} className="btn btn--primary">Introduce yourself</a>
        </div>
      </Section>
    </>
  );
}
