import { Clock, MessageSquare, Stethoscope, TrendingUp } from "lucide-react";
import IconTile from "@/components/ui/IconTile";
import { Section, SectionHead } from "@/components/ui/Section";

const RESULTS = [
  { icon: TrendingUp, tone: "brand" as const, wide: true, title: "40% Fewer No-Shows", desc: "Automated appointment reminders and instant rebooking for cancellations keep your schedule full and eliminate dead time." },
  { icon: Clock, tone: "green" as const, title: "$0 After-Hours Cost", desc: "Your AI agent works nights, weekends, and holidays at zero overtime charge." },
  { icon: MessageSquare, tone: "violet" as const, title: "<60s Response Time", desc: "Every web inquiry, SMS, and missed call gets an immediate, intelligent clinical response." },
  { icon: Stethoscope, tone: "brand" as const, wide: true, title: "Patients Report Higher Satisfaction Scores", desc: "No hold music. No voicemail. Patients get answers instantly — making your practice feel premium even before they walk in." },
];

export default function Results() {
  return (
    <Section id="results" alt aria-labelledby="results-title">
      <SectionHead id="results-title" eyebrow="Results" title="Transform Your Bottom Line" />
      <div className="grid grid--bento">
        {RESULTS.map((r) => (
          <article key={r.title} className={`card${r.wide ? " span-2" : ""}`} data-reveal>
            <IconTile icon={r.icon} tone={r.tone} />
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
