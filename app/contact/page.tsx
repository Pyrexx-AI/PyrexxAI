import { Calendar, Mail, Phone } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import IconTile, { toneAt } from "@/components/ui/IconTile";
import JsonLd from "@/components/ui/JsonLd";
import PageHeader from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { BOOK_DEMO_HREF, SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us: Enterprise Voice AI Solutions",
  ogTitle: "Contact Us | PyrexxAI Enterprise Solutions",
  description:
    "Get in touch with PyrexxAI. Request an audit, ask about EMR integrations, or secure a custom AI voice receptionist for your clinic.",
  path: "/contact",
});

const CHANNELS = [
  { icon: Mail, title: "Email Us", detail: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, title: "Call Our AI Agent", detail: SITE.phone, href: SITE.phoneHref },
  { icon: Calendar, title: "Live Discovery Demo", detail: "Schedule 15-Minute Session", href: BOOK_DEMO_HREF },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact PyrexxAI",
          url: absoluteUrl("/contact"),
          mainEntity: { "@id": `${SITE.url}/#organization` },
        }}
      />
      <PageHeader
        trail={[{ name: "Contact", path: "/contact" }]}
        eyebrow="Contact"
        title={<>Let&apos;s modernize your <span className="text-gradient">patient intake operations.</span></>}
      >
        Whether you need a custom EMR integration or a full-scale AI phone deployment, our engineering team is ready to assist.
      </PageHeader>

      <Section>
        <div className="split">
          <div className="stack">
            <h2 style={{ fontSize: 20 }} data-reveal>Direct Channels</h2>
            {CHANNELS.map((c, i) => {
              const Wrapper = c.href.startsWith("/") ? Link : "a";
              return (
                <Wrapper key={c.title} href={c.href} className="card contact-channel" data-reveal>
                  <IconTile icon={c.icon} tone={toneAt(i)} />
                  <div>
                    <b>{c.title}</b>
                    <span>{c.detail}</span>
                  </div>
                </Wrapper>
              );
            })}
            <p className="lead" style={{ fontSize: 13 }}>Serving Medical Clinics &amp; MedSpas Nationwide (Delaware Incorporated)</p>
          </div>
          <div className="card" data-reveal>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
