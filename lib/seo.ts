import type { Metadata } from "next";
import { SITE, absoluteUrl } from "@/lib/site";

type PageMeta = {
  /** Page title WITHOUT the brand suffix (the root layout title template appends " | PyrexxAI"). */
  title: string;
  description: string;
  /** Path beginning with "/" */
  path: string;
  /** Optional shorter headline for the social card image. */
  ogTitle?: string;
  noIndex?: boolean;
};

/** Builds complete, consistent metadata (canonical, Open Graph, Twitter) for a page. */
export function buildMetadata({ title, description, path, ogTitle, noIndex }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  const card = ogTitle ?? title;
  const image = `/api/og?title=${encodeURIComponent(card)}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE.name,
      title: `${card} | ${SITE.name}`,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: `${card} | ${SITE.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${card} | ${SITE.name}`,
      description,
      images: [image],
      creator: "@pyrexxai",
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
