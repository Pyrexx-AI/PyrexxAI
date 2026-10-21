import { Code2, ShieldCheck, Zap } from "lucide-react";
import type { Metadata } from "next";
import CalEmbed from "@/components/CalEmbed";
import IconTile, { toneAt } from "@/components/ui/IconTile";
import PageHeader from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Book a Discovery Call",
  description:
    "Schedule a free demo with PyrexxAI. Discover how our custom AI voice receptionists eliminate missed calls and integrate directly with your clinical EMR.",
  path: "/book-demo",
});

const EXPECT = [
  { icon: Code2, title: "Custom Architecture Map", desc: "We outline exactly how PyrexxAI connects to your specific scheduling software (Jane App, Boulevard, Mindbody)." },
  { icon: ShieldCheck, title: "HIPAA Compliance Review", desc: "We walk you through our BAA process, zero AI foundation model training policy, and end-to-end data encryption." },
  { icon: Zap, title: "14-Day Launch Protocol", desc: "If we are a good fit, we will have your custom voice agent live and taking calls in 14 business days." },
];

export default function BookDemoPage() {
  return (
    <>
      <PageHeader
        trail={[{ name: "Book a Demo", path: "/book-demo" }]}
        eyebrow="Book a Demo"
        title={<>Let&apos;s modernize your <span className="text-gradient">clinic&apos;s front desk.</span></>}
      >
        Choose a time for a seamless, 15-minute discovery call. We will show you a live demonstration of the AI voice agent and evaluate your current EMR workflows.
      </PageHeader>

      <Section>
        <div className="split">
          <div data-reveal>
            <h2 style={{ fontSize: 20, marginBottom: 6 }}>What to expect on your discovery call:</h2>
            <div className="stack" style={{ marginTop: 14 }}>
              {EXPECT.map((e, i) => (
                <article key={e.title} className="card">
                  <IconTile icon={e.icon} tone={toneAt(i)} />
                  <h3>{e.title}</h3>
                  <p>{e.desc}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="card" id="schedule">
            <CalEmbed />
          </div>
        </div>
      </Section>
    </>
  );
}
