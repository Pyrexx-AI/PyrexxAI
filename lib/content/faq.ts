export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "What types of clinics does Pyrexx AI work with?",
    a: "Private practice healthcare and wellness clinics — including MedSpas, general and cosmetic dentistry, orthodontics, dermatology, chiropractic, physical therapy and sports rehab, behavioral health clinics, audiology, medical weight loss (GLP-1), and hormone replacement therapy (HRT).",
  },
  {
    q: "How is Pyrexx AI different from a general AI chatbot?",
    a: "We are a full-service technical partner, not a DIY software platform. We custom-train voice AI specific to your practice, integrate it directly with your existing EMR/PMS, and continually optimize its performance.",
  },
  {
    q: "Is your AI voice agent HIPAA compliant?",
    a: "Yes, absolutely. Our voice infrastructure is HIPAA compliant by design. We execute a Business Associate Agreement (BAA) before launch and ensure zero Protected Health Information (PHI) is ever used to train public AI foundation models.",
  },
  {
    q: "How long does it take to go live?",
    a: "From kickoff to your AI receptionist handling live patient calls, the standard timeline is 14 business days. This includes mapping your clinical workflows, voice calibration, and custom EMR/PMS integration.",
  },
  {
    q: "Does the AI book directly into my EMR/practice management system?",
    a: "Yes. We build custom integrations to read real-time availability and schedule appointments directly into leading cloud and practice systems (Jane App, Boulevard, Mindbody, Open Dental, Dentrix, Eaglesoft, SimplePractice, TherapyNotes, ChiroTouch, ModMed, and more). If your system isn't listed, we build the bridge for you during onboarding.",
  },
  {
    q: "What happens if the AI can't answer a patient's question?",
    a: "If a query falls outside the AI's training or requires human staff judgment, it escalates cleanly—taking a structured message or warm-transferring directly to your designated staff line.",
  },
  {
    q: "How does Pyrexx AI handle emergencies and mental health crises?",
    a: "We configure deterministic safety rules for your practice. Urgent medical issues route immediately to your on-call staff line (or instruct callers to dial 911), and behavioral health agents enforce immediate 988 Suicide & Crisis Lifeline guidance plus warm supervisor transfer.",
  },
  {
    q: "What is the pricing model?",
    a: "Both plans include a $1,000 one-time initial implementation and EMR integration setup fee: Overflow AI Receptionist is $1,000/month (after-hours, weekends, and staff breaks) and Full-Time AI Receptionist is $1,500/month (100% 24/7 inbound coverage). Every active subscription also includes Patient Database Reactivation as a free add-on.",
  },
  {
    q: "Can the AI handle multiple calls simultaneously?",
    a: "Yes. Your Pyrexx AI receptionist handles concurrent inbound calls simultaneously so callers are never stuck on hold or sent to voicemail during peak morning spikes.",
  },
  {
    q: "Do I need to change my existing phone number or system?",
    a: "No. You keep your existing phone numbers and VoIP system. We configure Conditional Call Forwarding (CCF) so missed calls, after-hours calls, or full-time traffic route seamlessly to your AI agent.",
  },
];