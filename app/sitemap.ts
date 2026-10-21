import type { MetadataRoute } from "next";
import { INTEGRATION_SLUGS } from "@/lib/content/integrations";
import { CONTENT_UPDATED, LEGAL_UPDATED, SITE } from "@/lib/site";

/**
 * lastModified uses real content-review dates (not `new Date()` on every build),
 * so crawlers get an honest freshness signal instead of noise.
 */
type Entry = { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"]; updated?: string };

const PAGES: Entry[] = [
  { path: "", priority: 1.0, freq: "weekly" },
  { path: "/ai-receptionist", priority: 0.9, freq: "monthly" },
  { path: "/website-building", priority: 0.9, freq: "monthly" },
  { path: "/database-reactivation", priority: 0.9, freq: "monthly" },
  { path: "/book-demo", priority: 0.95, freq: "monthly" },
  { path: "/dashboard", priority: 0.8, freq: "monthly" },
  { path: "/hipaa-compliance", priority: 0.8, freq: "monthly" },
  { path: "/about", priority: 0.8, freq: "monthly" },
  { path: "/contact", priority: 0.7, freq: "monthly" },
  { path: "/careers", priority: 0.5, freq: "monthly" },
  { path: "/privacy-policy", priority: 0.4, freq: "yearly", updated: LEGAL_UPDATED },
  { path: "/terms-of-service", priority: 0.4, freq: "yearly", updated: LEGAL_UPDATED },
  ...INTEGRATION_SLUGS.map((slug) => ({ path: `/integrations/${slug}`, priority: 0.85, freq: "monthly" as const })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({
    url: `${SITE.url}${p.path}`,
    lastModified: new Date(p.updated ?? CONTENT_UPDATED),
    changeFrequency: p.freq,
    priority: p.priority,
  }));
}
