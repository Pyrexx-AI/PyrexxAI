import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: ["OAI-SearchBot", "ChatGPT-User", "Claude-Web", "PerplexityBot"],
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "CCBot", "ClaudeBot", "FacebookBot", "AI2Bot", "Bytespider"],
        disallow: "/",
      },
    ],
    sitemap: "https://pyrexxai.com/sitemap.xml",
  };
}