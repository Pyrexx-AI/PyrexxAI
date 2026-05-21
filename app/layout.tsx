import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pyrexxai.com"),
  title: {
    default: "PyrexxAI | AI Voice Receptionists for MedSpas & Dental Clinics",
    template: "%s | PyrexxAI",
  },
  description:
    "PyrexxAI deploys custom-trained AI voice receptionists for MedSpas, dental clinics, and therapy practices. Capture every call 24/7, book appointments automatically, and eliminate missed revenue — HIPAA-compliant.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "AI receptionist for medspa",
    "AI voice agent dental clinic",
    "AI front desk healthcare",
    "HIPAA compliant AI receptionist",
    "automated appointment booking clinic",
    "AI lead intake medical practice",
    "24/7 AI phone answering medspa",
    "voice AI for therapy clinic",
  ],
  authors: [{ name: "PyrexxAI" }],
  creator: "PyrexxAI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pyrexxai.com",
    siteName: "PyrexxAI",
    title: "PyrexxAI — AI Voice Receptionists That Never Miss a Patient Call",
    description:
      "Stop losing $67K+ per year to missed calls. PyrexxAI deploys fully custom AI receptionists for MedSpas, dental, and therapy clinics — HIPAA-compliant, live in 14 days.",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
    creator: "@pyrexxai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://pyrexxai.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org structured data JSON objects
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PyrexxAI",
    url: "https://pyrexxai.com",
    logo: "https://pyrexxai.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      email: "clifford.pyrexxai@gmail.com",
      contactType: "sales",
      availableLanguage: "English",
    },
    sameAs: [],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Voice Receptionist & Lead Intake Automation",
    provider: {
      "@type": "Organization",
      name: "PyrexxAI",
    },
    areaServed: "US",
    description:
      "Custom-trained AI voice agents for MedSpas, dental clinics, and therapy practices. Handles inbound calls, books appointments, qualifies leads, and integrates with EMR systems — HIPAA-compliant.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "PyrexxAI Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Receptionist",
            description:
              "24/7 inbound call handling, appointment booking, and EMR integration for healthcare clinics.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Lead Intake Specialist",
            description:
              "Automated SMS, web chat, and social lead qualification and booking for MedSpas and clinics.",
          },
        },
      ],
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How PyrexxAI Deploys Your AI Receptionist",
    description: "From kickoff to live AI receptionist in under 14 days.",
    step: [
      {
        "@type": "HowToStep",
        name: "Connect",
        text: "We integrate securely with your existing EMR, phone system, and CRM.",
      },
      {
        "@type": "HowToStep",
        name: "Train",
        text: "We train your AI agent on your clinic's FAQs, pricing, tone, and procedures.",
      },
      {
        "@type": "HowToStep",
        name: "Deploy",
        text: "Your AI agent goes live — answering calls, booking appointments, and qualifying leads 24/7.",
      },
      {
        "@type": "HowToStep",
        name: "Optimize",
        text: "We monitor performance and continuously improve your agent's accuracy and conversion rate.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of clinics does PyrexxAI work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MedSpas, dental practices, and therapeutic or mental health clinics. We specialize in high-ticket, high-touch healthcare environments where missing a call means losing significant revenue.",
        },
      },
      {
        "@type": "Question",
        name: "Is your AI voice agent HIPAA compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, absolutely. Our entire architecture is HIPAA compliant by design. We provide a Business Associate Agreement (BAA) and ensure zero Protected Health Information (PHI) is stored beyond the active session.",
        },
      },
    ],
  };

  // Added suppressHydrationWarning to squelch extension-based warnings like "js-focus-visible"
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-gray-900 bg-white dark:bg-gray-950 dark:text-gray-50 transition-colors duration-300`}>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Script
          id="schema-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <Script
          id="schema-howto"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}