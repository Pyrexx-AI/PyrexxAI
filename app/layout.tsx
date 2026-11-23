import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import AIAssistant from "@/components/AIAssistant";
import RevealObserver from "@/components/ui/RevealObserver";
import JsonLd from "@/components/ui/JsonLd";
import { organizationSchema, softwareSchema, websiteSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f17" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Pyrexx AI | AI Voice Receptionists for Private Practice Healthcare & Wellness",
    template: "%s | Pyrexx AI",
  },
  description:
    "Pyrexx AI deploys sympathetic, emotionally intelligent AI voice receptionists for private practice healthcare & wellness clinics. Capture every call 24/7, book appointments into your EMR, and eliminate missed revenue — HIPAA-compliant, live in 14 business days.",
  applicationName: SITE.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: { title: "Pyrexx AI", statusBarStyle: "default" },
  keywords: [
    "AI receptionist for private practice healthcare",
    "AI receptionist for medspa",
    "AI voice agent dental clinic",
    "AI front desk behavioral health",
    "HIPAA compliant AI receptionist",
    "automated appointment booking clinic",
    "GLP-1 weight loss clinic AI receptionist",
    "Jane App AI integration",
    "Open Dental AI voice receptionist",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Pyrexx AI — AI Voice Receptionists That Never Miss a Patient Call",
    description:
      "Stop losing revenue to missed calls. Pyrexx AI deploys custom AI receptionists for private practice healthcare & wellness clinics — HIPAA-compliant, live in 14 business days.",
    images: [
      {
        url: "/api/og?title=AI%20Voice%20Receptionists%20for%20Clinics",
        width: 1200,
        height: 630,
        alt: "Pyrexx AI — AI Voice Receptionists for Private Practice Clinics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pyrexx AI — AI Receptionists for Private Practice Clinics",
    description:
      "Custom AI voice agents that answer every call, book appointments 24/7, and integrate with your EMR. HIPAA-compliant. Live in 14 business days.",
    images: ["/api/og?title=AI%20Voice%20Receptionists%20for%20Clinics"],
    creator: "@pyrexxai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <JsonLd data={[organizationSchema(), websiteSchema(), softwareSchema()]} />
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <a href="#main" className="skip-link">
            Skip to main content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <RevealObserver />
          <AIAssistant />
          <CookieBanner />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}