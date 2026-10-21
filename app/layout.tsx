import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
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

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
  adjustFontFallback: true,
});

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
    default: "PyrexxAI | AI Voice Receptionists for MedSpas & Dental Clinics",
    template: "%s | PyrexxAI",
  },
  description:
    "PyrexxAI deploys custom-trained AI voice receptionists for MedSpas, dental clinics, and therapy practices. Capture every call 24/7, book appointments automatically, and eliminate missed revenue — HIPAA-compliant.",
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
  appleWebApp: { title: "PyrexxAI", statusBarStyle: "default" },
  keywords: [
    "AI receptionist for medspa",
    "AI voice agent dental clinic",
    "AI front desk healthcare",
    "HIPAA compliant AI receptionist",
    "automated appointment booking clinic",
    "AI lead intake medical practice",
    "24/7 AI phone answering medspa",
    "Jane App AI integration",
    "Boulevard EMR AI voice agent",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "PyrexxAI — AI Voice Receptionists That Never Miss a Patient Call",
    description:
      "Stop losing revenue to missed calls. PyrexxAI deploys fully custom AI receptionists for MedSpas, dental, and therapy clinics — HIPAA-compliant, live in 14 days.",
    images: [
      {
        url: "/api/og?title=AI%20Voice%20Receptionist%20for%20Clinics",
        width: 1200,
        height: 630,
        alt: "PyrexxAI — AI Voice Receptionists for Healthcare Clinics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PyrexxAI — AI Receptionists for MedSpas & Clinics",
    description:
      "Custom AI voice agents that answer every call, book appointments 24/7, and integrate with your EMR. HIPAA-compliant. Live in 14 days.",
    images: ["/api/og?title=AI%20Voice%20Receptionist%20for%20Clinics"],
    creator: "@pyrexxai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  // NOTE: no site-wide canonical here. Each page sets its own via buildMetadata(),
  // otherwise every page would inherit the home page canonical.
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
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
