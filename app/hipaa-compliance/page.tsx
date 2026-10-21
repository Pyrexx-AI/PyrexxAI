import Link from "next/link";
import { Eye, FileText, Lock, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import CtaBand from "@/components/ui/CtaBand";
import IconTile, { toneAt } from "@/components/ui/IconTile";
import JsonLd from "@/components/ui/JsonLd";
import PageHeader from "@/components/ui/PageHeader";
import { Section, SectionHead } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { BOOK_DEMO_HREF, SITE } from "@/lib/site";

const DESCRIPTION =
  "PyrexxAI maintains strict HIPAA compliance. We provide Business Associate Agreements (BAA), end-to-end encryption, and secure data handling for medical clinics.";

export const metadata: Metadata = buildMetadata({
  title: "HIPAA Compliant AI Receptionist & Data Security",
  description: DESCRIPTION,
  path: "/hipaa-compliance",
  ogTitle: "HIPAA Compliant AI Receptionist",
});

const PILLARS = [
  { icon: FileText, title: "Business Associate Agreements (BAA)", desc: "We enter into formal, legally binding Business Associate Agreements with all our healthcare clients. This guarantees that PyrexxAI assumes strict legal liability for the safeguarding of any PHI processed through our voice or text intake agents." },
  { icon: Lock, title: "End-to-End Encryption", desc: "All voice data, text transcripts, and booking information processed by our AI is encrypted both in transit (using TLS 1.3) and at rest (using AES-256). Data is securely routed directly into your EMR without lingering in vulnerable third-party databases." },
  { icon: ShieldCheck, title: "Zero AI Model Training on PHI", desc: "We strictly enforce isolated LLM environments. None of your patients' sensitive data or conversational transcripts are ever utilized to train public foundation models. Your clinic's data remains entirely proprietary and siloed." },
  { icon: Eye, title: "Access Controls & Auditing", desc: "Your PyrexxAI dashboard includes granular Role-Based Access Control (RBAC). Furthermore, every interaction, system change, and data retrieval is meticulously logged, ensuring full audit readiness for compliance officers." },
];

const SPEC: [string, string][] = [
  ["In transit", "TLS 1.3"],
  ["At rest", "AES-256"],
  ["Business Associate Agreement", "Signed before launch"],
  ["Model training on PHI", "None, isolated LLM environments"],
  ["Access", "Role-Based Access Control with full audit logging"],
];

export default function HipaaCompliancePage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: "HIPAA Compliant AI Voice Receptionist", description: DESCRIPTION, path: "/hipaa-compliance" })} />
      <PageHeader
        trail={[{ name: "HIPAA Compliance", path: "/hipaa-compliance" }]}
        eyebrow="Security & Compliance"
        title={<>Uncompromising Data Security &amp; <span className="text-gradient">HIPAA Compliance</span></>}
        actions={
          <>
            <Link href={BOOK_DEMO_HREF} className="btn btn--primary">Review Our BAA Process &rarr;</Link>
            <Link href="/privacy-policy" className="btn btn--ghost">Privacy Policy</Link>
          </>
        }
      >
        At PyrexxAI, we understand that protecting Patient Health Information (PHI) is the foundation of your clinical practice. Our entire artificial intelligence architecture has been engineered from the ground up to exceed the stringent requirements of the Health Insurance Portability and Accountability Act (HIPAA).
      </PageHeader>

      <Section aria-label="Compliance pillars">
        <div className="grid grid--2">
          {PILLARS.map((p, i) => (
            <article key={p.title} className="card" data-reveal>
              <IconTile icon={p.icon} tone={toneAt(i)} />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section alt aria-labelledby="spec-title">
        <SectionHead id="spec-title" eyebrow="At a glance" title="Security specification" center={false} />
        <div className="table-card" data-reveal>
          <table>
            <tbody>
              {SPEC.map(([k, v]) => (
                <tr key={k}>
                  <th scope="row" style={{ textAlign: "left", fontWeight: 600, width: "40%" }}>{k}</th>
                  <td style={{ color: "var(--ink)", fontWeight: 500 }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="lead">
          Questions about compliance?{" "}
          <a className="text-gradient" href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
