import Link from "next/link";
import { Lock, Mic, Target } from "lucide-react";
import type { Metadata } from "next";
import CtaBand from "@/components/ui/CtaBand";
import IconTile, { toneAt } from "@/components/ui/IconTile";
import JsonLd from "@/components/ui/JsonLd";
import PageHeader from "@/components/ui/PageHeader";
import { Section, SectionHead } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { BOOK_DEMO_HREF, SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Us: The Team Behind PyrexxAI",
  ogTitle: "About Us | The Team Behind PyrexxAI",
  description:
    "Learn why PyrexxAI was founded. We are a technical partner dedicated to bringing enterprise-grade voice AI and EMR integration to medical clinics.",
  path: "/about",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.founder,
  jobTitle: SITE.founderTitle,
  worksFor: { "@type": "Organization", name: SITE.name },
  url: absoluteUrl("/about"),
};

const PILLARS = [
  { icon: Target, text: "Map your exact clinical workflows" },
  { icon: Mic, text: "Custom-train models on your procedures" },
  { icon: Lock, text: "HIPAA-compliant API bridges into your scheduling software" },
];

export default function AboutPage() {
  const initials = SITE.founder.split(" ").map((n) => n[0]).join("");
  return (
    <>
      <JsonLd data={personSchema} />
      <PageHeader
        trail={[{ name: "About Us", path: "/about" }]}
        eyebrow="About"
        title={<>Bridging the Gap Between <span className="text-gradient">Healthcare and Intelligence.</span></>}
        actions={
          <>
            <Link href={BOOK_DEMO_HREF} className="btn btn--primary">Book a Free Demo &rarr;</Link>
            <Link href="/contact" className="btn btn--ghost">Contact Us</Link>
          </>
        }
      >
        PyrexxAI was founded with a singular mission: to eliminate the operational bottlenecks that prevent medical practices from scaling. We believe that no patient seeking care should ever be sent to voicemail.
      </PageHeader>

      <Section aria-labelledby="philosophy-title">
        <div className="split">
          <div data-reveal>
            <span className="eyebrow">Our Technical Philosophy</span>
            <h2 id="philosophy-title">A dedicated technical partner, not a DIY tool.</h2>
            <p className="lead">
              The healthcare industry has been historically underserved by modern technology. While other sectors adopted seamless automation, medical clinics were left with disjointed EMR systems, expensive after-hours answering services, and overwhelmed front-desk staff.
            </p>
            <p className="lead">
              We built PyrexxAI not as a DIY software tool, but as a dedicated technical partner. When you partner with us, we map your exact clinical workflows, custom-train conversational language models on your procedures, and build secure, HIPAA-compliant API bridges directly into your scheduling software.
            </p>
          </div>
          <div className="stack">
            {PILLARS.map((p, i) => (
              <div key={p.text} className="card" style={{ display: "flex", gap: 14, alignItems: "center" }} data-reveal>
                <IconTile icon={p.icon} tone={toneAt(i)} />
                <b style={{ fontSize: 14 }}>{p.text}</b>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section alt aria-labelledby="leadership-title">
        <SectionHead id="leadership-title" eyebrow="Leadership" title="The team" center={false} />
        <div className="grid grid--3">
          <article className="card" data-reveal>
            <div className="avatar" style={{ width: 56, height: 56, fontSize: 18 }} aria-hidden="true">{initials}</div>
            <h3>{SITE.founder}</h3>
            <p>{SITE.founderTitle}</p>
          </article>
          <article className="card span-2" data-reveal>
            <h3 style={{ marginTop: 0 }}>PyrexxAI</h3>
            <p>Serving Medical Clinics &amp; MedSpas Nationwide (Delaware Incorporated).</p>
            <ul className="check-list">
              <li>AI voice receptionists for MedSpas, Dental Clinics, and Therapy Practices</li>
              <li>Native EMR integrations: Jane App, Boulevard, Mindbody</li>
              <li>HIPAA compliant by design, BAA provided</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section>
        <p className="big-quote" data-reveal>No patient seeking care should ever be sent to voicemail.</p>
      </Section>

      <CtaBand />
    </>
  );
}
