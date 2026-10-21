import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import CtaBand from "@/components/ui/CtaBand";
import IconTile, { toneAt } from "@/components/ui/IconTile";
import JsonLd from "@/components/ui/JsonLd";
import PageHeader from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { INTEGRATIONS, INTEGRATION_SLUGS } from "@/lib/content/integrations";
import { buildMetadata } from "@/lib/seo";
import { BOOK_DEMO_HREF } from "@/lib/site";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return INTEGRATION_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const data = INTEGRATIONS[params.slug];
  if (!data) return {};
  return buildMetadata({ title: data.name, description: data.description, path: `/integrations/${data.slug}` });
}

export default function IntegrationPage({ params }: Props) {
  const data = INTEGRATIONS[params.slug];
  if (!data) notFound();

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `PyrexxAI ${data.emrName} Integration`,
    operatingSystem: "Cloud / Web",
    applicationCategory: "HealthApplication",
    description: data.description,
    offers: { "@type": "Offer", price: "1500.00", priceCurrency: "USD" },
  };

  return (
    <>
      <JsonLd data={appSchema} />
      <PageHeader
        trail={[{ name: `${data.emrName} Integration`, path: `/integrations/${data.slug}` }]}
        eyebrow={`${data.emrName} Native Integration`}
        title={data.heroHeadline}
        actions={<Link href={BOOK_DEMO_HREF} className="btn btn--primary">Deploy For {data.emrName} &rarr;</Link>}
      >
        {data.description}
      </PageHeader>

      <Section aria-labelledby="why-title">
        <h2 id="why-title" style={{ marginBottom: 20 }} data-reveal>
          Why {data.category} Choose PyrexxAI for {data.emrName}
        </h2>
        <div className="grid grid--2">
          <article className="card" data-reveal>
            <h3 style={{ marginTop: 0 }}>Core Integration Advantages</h3>
            <ul className="check-list">
              {data.benefits.map((b) => (
                <li key={b}>
                  <CheckCircle2 className="icon" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
          <div className="stack">
            <article className="card" data-reveal>
              <IconTile icon={ShieldCheck} tone="green" />
              <h3>100% HIPAA-Compliant Architecture</h3>
              <p>
                Every interaction processed through our {data.emrName} API connection is fully encrypted at rest and in transit. We sign a Business Associate Agreement (BAA) before launch.
              </p>
            </article>
            <article className="card" data-reveal>
              <span className="eyebrow" style={{ marginBottom: 4 }}>Standard Launch SLA</span>
              <b style={{ fontSize: 18 }}>Live in 14 Days Guaranteed</b>
            </article>
          </div>
        </div>
        <div className="grid grid--3" style={{ marginTop: 12 }}>
          {data.features.map((f, i) => (
            <article key={f.title} className="card" data-reveal>
              <IconTile icon={CheckCircle2} tone={toneAt(i)} />
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
