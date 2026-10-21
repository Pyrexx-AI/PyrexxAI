import { Plus } from "lucide-react";
import JsonLd from "@/components/ui/JsonLd";
import { Section, SectionHead } from "@/components/ui/Section";
import { FAQS } from "@/lib/content/faq";
import { faqSchema } from "@/lib/schema";

/**
 * Server component using native <details>: zero client JS, keyboard + screen-reader accessible,
 * and the FAQPage structured data is generated from the same source as the visible answers.
 */
export default function FAQ() {
  return (
    <Section id="faq" narrow aria-labelledby="faq-title">
      <JsonLd data={faqSchema(FAQS)} />
      <SectionHead id="faq-title" eyebrow="FAQ" title="Frequently Asked Questions" />
      <div className="faq" data-reveal>
        {FAQS.map((f) => (
          <details key={f.q}>
            <summary>
              {f.q}
              <Plus className="icon" aria-hidden="true" />
            </summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
