export type IntegrationDetail = {
  slug: string;
  name: string;
  category: string;
  emrName: string;
  description: string;
  heroHeadline: string;
  benefits: string[];
  features: { title: string; desc: string }[];
};

export const INTEGRATIONS: Record<string, IntegrationDetail> = {
  "jane-app-medspa": {
    slug: "jane-app-medspa",
    name: "Jane App AI Receptionist for MedSpas",
    category: "Medical Spa / Aesthetics",
    emrName: "Jane App",
    heroHeadline: "Seamless Jane App EMR Voice Automation for MedSpas",
    description:
      "Connect PyrexxAI natively to your Jane App calendar. Our custom voice receptionist handles 100% of inbound phone calls, checks practitioner openings in real-time, and writes Botox & dermal filler bookings directly into your schedule.",
    benefits: [
      "Zero double bookings: Reads live Jane App availability.",
      "Custom service treatment duration routing.",
      "Instant patient SMS text-back on missed calls.",
      "Signed HIPAA Business Associate Agreement (BAA) included.",
    ],
    features: [
      { title: "Real-Time Jane App API Sync", desc: "Instantly creates or updates patient appointment profiles without manual front-desk entry." },
      { title: "Treatment FAQ & Pricing Agent", desc: "Answers precise patient questions regarding Botox units, syringe pricing, and pre-care guidelines." },
      { title: "24/7 After-Hours Intake", desc: "Captures evening and weekend calls when your clinic is closed, driving up monthly client retention." },
    ],
  },
  "boulevard-aesthetics": {
    slug: "boulevard-aesthetics",
    name: "Boulevard EMR AI Receptionist for Aesthetic Clinics",
    category: "Aesthetic Surgery & Clinics",
    emrName: "Boulevard",
    heroHeadline: "Enterprise Boulevard Integration for High-Volume Aesthetic Clinics",
    description:
      "Automate your front desk with a lifelike AI receptionist designed specifically for Boulevard EMR users. Elevate client experience and increase lifetime revenue.",
    benefits: [
      "Direct Boulevard calendar & client management sync.",
      "Automated deposit payment reminder workflows.",
      "Custom voice training tailored to luxury aesthetics.",
      "Full HIPAA compliance and encrypted PHI transmission.",
    ],
    features: [
      { title: "Boulevard Schedule Optimization", desc: "Intelligently fills practitioner schedule gaps to maximize clinic hourly revenue." },
      { title: "Pre-Treatment Consultation Screening", desc: "Qualifies high-intent cosmetic leads before placing them directly into your calendar." },
      { title: "Multi-Location Support", desc: "Routes inbound calls seamlessly across multiple aesthetic clinic locations." },
    ],
  },
  "mindbody-dental": {
    slug: "mindbody-dental",
    name: "Mindbody AI Voice Agent for Dental & Wellness Practices",
    category: "Dental & Wellness Practices",
    emrName: "Mindbody",
    heroHeadline: "Eliminate Unanswered Dental Calls with Mindbody AI Voice Automation",
    description:
      "Never send a dental emergency or teeth whitening lead to voicemail again. PyrexxAI connects directly into Mindbody to schedule patient visits 24/7.",
    benefits: [
      "24/7 emergency triage call routing.",
      "Automated cleaning & checkup reactivation.",
      "Mindbody appointment availability read & write API bridge.",
      "Sub-second AI response voice engine.",
    ],
    features: [
      { title: "Dental Emergency Triage", desc: "Differentiates routine checkups from urgent toothache calls and alerts on-call dentists immediately." },
      { title: "Mindbody Schedule Maintenance", desc: "Allows callers to re-book or move hygiene appointments effortlessly without calling back during business hours." },
      { title: "Patient Contact Sync", desc: "Verifies patient insurance coverage and personal details before finalizing booking." },
    ],
  },
};

export const INTEGRATION_SLUGS = Object.keys(INTEGRATIONS);
