import { SITE, absoluteUrl } from "@/lib/site";

/** schema.org builders. Each returns a plain object for <JsonLd data={...} />. */

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: absoluteUrl("/logo.png"),
  founder: { "@type": "Person", name: SITE.founder },
  sameAs: SITE.social.map((s) => s.href),
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE.email,
    telephone: "+13023376310",
    contactType: "sales",
    availableLanguage: "English",
    areaServed: "US",
  },
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  publisher: { "@id": `${SITE.url}/#organization` },
  inLanguage: "en-US",
});

export const softwareSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PyrexxAI Voice Receptionist Engine",
  operatingSystem: "Cloud / Web",
  applicationCategory: "HealthApplication",
  sameAs: ["https://www.wikidata.org/wiki/Q356350", "https://www.wikidata.org/wiki/Q1140323"],
  offers: { "@type": "Offer", price: "1500.00", priceCurrency: "USD" },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const serviceSchema = (s: { name: string; description: string; path: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  description: s.description,
  url: absoluteUrl(s.path),
  provider: { "@id": `${SITE.url}/#organization` },
  areaServed: "US",
  audience: { "@type": "Audience", audienceType: "MedSpas, Dental Clinics, Therapy Practices" },
});

export const webPageSchema = (p: { name: string; description: string; path: string; dateModified: string }) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: p.name,
  description: p.description,
  url: absoluteUrl(p.path),
  dateModified: p.dateModified,
  isPartOf: { "@id": `${SITE.url}/#website` },
});
