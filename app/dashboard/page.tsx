import type { Metadata } from "next";
import DashboardClient from "./DashboardClient";
import PageHeader from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Live Dashboard Demo",
  description:
    "Explore the PyrexxAI Command Center. View live call logs, intent maps, EMR integrations, and real-time patient acquisition analytics.",
  path: "/dashboard",
});

export default function DashboardDemoPage() {
  return (
    <>
      <PageHeader
        trail={[{ name: "Live Dashboard", path: "/dashboard" }]}
        eyebrow="Live Dashboard"
        title={<>Your front desk, <span className="text-gradient">in one view.</span></>}
      >
        Explore the client command center with sample data. No credit card required.
      </PageHeader>
      <Section flushTop>
        <div style={{ height: 24 }} />
        <DashboardClient />
      </Section>
    </>
  );
}
