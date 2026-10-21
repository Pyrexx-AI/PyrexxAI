import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * GEO policy: AI *search / retrieval* agents may crawl (so PyrexxAI can be cited in AI answers);
 * bulk *training* crawlers are blocked. Change the lists below to alter that policy.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      {
        userAgent: [
          "OAI-SearchBot",
          "ChatGPT-User",
          "Claude-SearchBot",
          "Claude-User",
          "Claude-Web",
          "PerplexityBot",
          "Perplexity-User",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: ["GPTBot", "CCBot", "ClaudeBot", "FacebookBot", "AI2Bot", "Bytespider", "Google-Extended"],
        disallow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
