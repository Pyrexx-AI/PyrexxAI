export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "What types of clinics does PyrexxAI work with?",
    a: "MedSpas, dental practices, and therapeutic or mental health clinics. We specialize in high-ticket, high-touch healthcare environments where missing a call means losing significant revenue.",
  },
  {
    q: "How is PyrexxAI different from a general AI chatbot?",
    a: "We are a full-service technical partner, not a DIY software platform. We custom-train voice AI specific to your practice, integrate it directly with your existing EMR, and continually optimize its performance.",
  },
  {
    q: "Is your AI voice agent HIPAA compliant?",
    a: "Yes, absolutely. Our entire architecture is HIPAA compliant by design. We provide a Business Associate Agreement (BAA) and ensure zero Protected Health Information (PHI) is ever used to train public AI foundation models.",
  },
  {
    q: "How long does it take to go live?",
    a: "From our initial kickoff call to your AI receptionist handling live patient calls, the standard timeline is exactly 14 days. This includes mapping your workflows, voice training, and EMR integration.",
  },
  {
    q: "Does the AI book directly into my EMR/practice management system?",
    a: "Yes. We build custom integrations to read your real-time availability and write appointments directly into your existing schedule (Jane App, Boulevard, Mindbody). No manual data entry is required from your staff.",
  },
  {
    q: "What happens if the AI can't answer a patient's question?",
    a: "If a query falls outside the AI's training or involves a complex medical question, it elegantly escalates the interaction. It takes a detailed message and immediately routes it to your human staff via SMS, email, or your CRM.",
  },
  {
    q: "How does PyrexxAI handle after-hours emergencies?",
    a: "We configure custom routing rules for your practice. Routine inquiries are answered and booked, while calls flagged by the caller as medical emergencies are immediately forwarded to your designated on-call doctor.",
  },
  {
    q: "What is the pricing model?",
    a: "We operate on a transparent $1,000 monthly retainer following a $1,500 implementation setup. Because we replace expensive after-hours answering services and capture lost patient leads, most clinics see positive ROI in the first 30 days.",
  },
  {
    q: "Can the AI handle multiple calls simultaneously?",
    a: "Yes. Your PyrexxAI receptionist can handle an unlimited number of concurrent inbound calls. Whether you receive two calls at once or fifty, no patient is ever put on hold or sent to voicemail.",
  },
  {
    q: "Do I need to change my existing phone number or system?",
    a: "No. You keep your current phone numbers and VOIP system. We simply set up conditional forwarding so that missed calls, or calls during specific hours, are instantly routed to your AI agent.",
  },
];
