/** Single source of truth for site-wide constants. */
export const SITE = {
  name: "PyrexxAI",
  url: "https://pyrexxai.com",
  email: "hello@pyrexxai.com",
  privacyEmail: "privacy@pyrexxai.com",
  phone: "+1 (302) 337-6310",
  phoneHref: "tel:+13023376310",
  founder: "Clifford Bulya",
  founderTitle: "Founder & CEO",
  tagline: "AI Voice Receptionists for MedSpas & Dental Clinics",
  social: [
    { label: "GitHub", href: "https://github.com/PyrexxAI" },
    { label: "LinkedIn", href: "https://linkedin.com/company/pyrexxai" },
    { label: "X (formerly Twitter)", href: "https://x.com/pyrexxai" },
    { label: "Facebook", href: "https://facebook.com/share/1LXRSNNjPR/?mibextid=wwXlfr" },
    { label: "Instagram", href: "https://instagram.com/pyrexxai" },
    { label: "YouTube", href: "https://youtube.com/@pyrexxai" },
    { label: "TikTok", href: "https://tiktok.com/@pyrexx_ai" },
  ],
} as const;

export const BOOK_DEMO_HREF = "/book-demo";

/** ISO date the marketing content was last reviewed (drives sitemap lastModified). */
export const CONTENT_UPDATED = "2026-10-19";
export const LEGAL_UPDATED = "2026-08-20";

export function absoluteUrl(path = "/"): string {
  return path === "/" ? SITE.url : `${SITE.url}${path}`;
}
