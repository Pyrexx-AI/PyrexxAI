import type { Metadata } from "next";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ROICalculator from "@/components/ROICalculator";
import Offerings from "@/components/Offerings";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import TrustHIPAA from "@/components/TrustHIPAA";
import CustomPositioning from "@/components/CustomPositioning";
import FAQ from "@/components/FAQ";
import CtaBand from "@/components/ui/CtaBand";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: SITE.url },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ROICalculator />
      <Offerings />
      <HowItWorks />
      <Results />
      <TrustHIPAA />
      <CustomPositioning />
      <FAQ />
      <CtaBand />
    </>
  );
}
