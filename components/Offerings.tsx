import { CheckCircle2, MessageSquare, PhoneCall, Smartphone, TrendingUp } from "lucide-react";
import IconTile from "@/components/ui/IconTile";
import { Section, SectionHead } from "@/components/ui/Section";

const OFFERS = [
  {
    icon: PhoneCall,
    tone: "brand" as const,
    title: "AI Receptionist",
    desc: "A lifelike voice AI that answers every call 24/7. It books appointments directly into your EMR, answers FAQs, and recovers missed calls instantly.",
    features: ["24/7 Inbound Call Handling", "Direct EMR/EHR Booking Integration", "Missed-Call Text-Back in 60s", "Custom Voice & Personality Training"],
    stat: { icon: TrendingUp, text: "Average practice captures 38% more bookings in month 1." },
  },
  {
    icon: MessageSquare,
    tone: "violet" as const,
    title: "AI Lead Intake Specialist",
    desc: "Instantly responds to website inquiries, SMS, and DMs. Qualifies leads, answers pricing questions, and funnels high-intent prospects to booking.",
    features: ["Sub-60s Response on Web & SMS", "Smart Lead Qualification & Scoring", "Auto-Routing to Booking Calendar", "Conversion-Optimized Clinical Scripts"],
    stat: { icon: Smartphone, text: "64% of leads call the next clinic if you don't respond. We fix that." },
    sample: "What's the price for Botox?",
  },
];

export default function Offerings() {
  return (
    <Section id="solutions" alt aria-labelledby="solutions-title">
      <SectionHead id="solutions-title" eyebrow="Services" title="The Complete AI Front Desk">
        We deploy intelligent agents that handle your highest friction tasks, allowing your staff to focus entirely on the patients in front of them.
      </SectionHead>
      <div className="grid grid--2">
        {OFFERS.map((o) => (
          <article key={o.title} className="card" data-reveal>
            <IconTile icon={o.icon} tone={o.tone} />
            <h3>{o.title}</h3>
            <p>{o.desc}</p>
            {o.sample && (
              <div className="bubble bubble--in" style={{ marginTop: 12, maxWidth: "70%", fontSize: 13 }} aria-hidden="true">
                {o.sample}
              </div>
            )}
            <ul className="check-list">
              {o.features.map((f) => (
                <li key={f}>
                  <CheckCircle2 className="icon" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="pull-quote" style={{ fontSize: 13, display: "flex", gap: 8, alignItems: "center" }}>
              <o.stat.icon className="icon" aria-hidden="true" /> {o.stat.text}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
