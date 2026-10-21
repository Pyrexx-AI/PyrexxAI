import Link from "next/link";
import { Globe, Lock, Smartphone, Zap } from "lucide-react";
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
  "Custom, blazing-fast, HIPAA-compliant websites designed specifically for MedSpas, Dental Clinics, and Medical Practices to maximize patient conversions.";

export const metadata: Metadata = buildMetadata({
  title: "High-Converting Medical Websites",
  description: DESCRIPTION,
  path: "/website-building",
});

const FEATURES = [
  { icon: Zap, title: "Sub-Second Load Times", desc: "Built with Next.js and deployed to global edge networks. Your site loads instantly, preventing prospective patients from bouncing to competitors." },
  { icon: Globe, title: "Technical SEO & GEO", desc: "Outrank local competitors on Google and get cited by AI answer engines. We implement rich JSON-LD medical schemas and structured meta-tags." },
  { icon: Lock, title: "HIPAA-Compliant Forms", desc: "Standard web forms create compliance vulnerabilities. We build secure, encrypted lead-capture pipelines with dual-write backup storage." },
  { icon: Smartphone, title: "Flawless Mobile UX", desc: "Over 70% of clinical searches occur on mobile devices. We design mobile-first, ensuring smooth navigation and one-tap calling functionality." },
];

export default function WebsiteBuildingPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: "Medical Website Design", description: DESCRIPTION, path: "/website-building" })} />
      <PageHeader
        trail={[{ name: "Website Building", path: "/website-building" }]}
        eyebrow="Premium Clinical Web Design"
        title={<>Websites Engineered for <span className="text-gradient">Patient Conversion.</span></>}
        actions={<Link href={BOOK_DEMO_HREF} className="btn btn--primary">Request a Website Audit &rarr;</Link>}
      >
        Your website is your digital front door. We build blazing-fast, SEO-optimized, and fully HIPAA-compliant websites designed exclusively to turn your web traffic into booked appointments.
      </PageHeader>

      <Section aria-labelledby="beyond-title">
        <SectionHead id="beyond-title" eyebrow="Beyond Generic Templates" title="Built differently">
          We abandon slow, bloated page builders. Your clinic&apos;s site is custom-coded using the same enterprise tech stack used by leading tech companies.
        </SectionHead>
        <div className="grid grid--4">
          {FEATURES.map((f, i) => (
            <article key={f.title} className="card" data-reveal>
              <IconTile icon={f.icon} tone={toneAt(i)} />
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section alt aria-labelledby="voice-title">
        <div className="callout" data-reveal>
          <div>
            <span className="eyebrow">Included</span>
            <h3 id="voice-title">Seamless AI Voice Integration</h3>
            <p>
              Every website we build comes natively prepared for PyrexxAI integration. From intelligent web-chat lead qualification to direct EMR booking portals, your site becomes a living extension of your front desk.
            </p>
          </div>
          <Link href="/ai-receptionist" className="btn btn--inverse">See the AI Receptionist &rarr;</Link>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
