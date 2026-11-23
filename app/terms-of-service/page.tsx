import type { Metadata } from "next";
import JsonLd from "@/components/ui/JsonLd";
import PageHeader from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { LEGAL_UPDATED } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { webPageSchema } from "@/lib/schema";

const DESCRIPTION =
  "Terms of service, pricing schedules, healthcare compliance responsibilities, and acceptable use policies for Pyrexx AI.";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: DESCRIPTION,
  path: "/terms-of-service",
});

const TOC = [
  "1. ACCEPTANCE OF TERMS",
  "2. DESCRIPTION OF SERVICES",
  "3. ELIGIBILITY",
  "4. ACCOUNTS & CREDENTIAL SECURITY",
  "5. CALL RECORDING & CONSENT DISCLOSURES",
  "6. HEALTHCARE & AI DISCLOSURES",
  "7. INTELLECTUAL PROPERTY",
  "8. STANDARD PRICING & FEES",
  "9. TERM & TERMINATION",
  "10. DISCLAIMERS",
  "11. LIMITATION OF LIABILITY",
  "12. INDEMNIFICATION",
  "13. GOVERNING LAW & ARBITRATION",
  "14. THIRD-PARTY PLATFORMS",
  "15. FORCE MAJEURE",
  "16. AI ACCURACY & HUMAN OVERSIGHT",
  "17. PUBLICITY",
  "18. GENERAL PROVISIONS",
  "19. CHANGES TO TERMS",
  "20. CONTACT INFORMATION",
];

export default function TermsOfServicePage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: "Terms of Service", description: DESCRIPTION, path: "/terms-of-service", dateModified: LEGAL_UPDATED })} />
      <PageHeader trail={[{ name: "Terms of Service", path: "/terms-of-service" }]} eyebrow="Legal" title="Terms of Service">
        pyrexxai.com · Last Updated: November 23, 2026 | Effective: November 23, 2026
      </PageHeader>

      <Section>
        <div className="legal-layout">
          <nav className="toc" aria-label="Contents">
            {TOC.map((t, i) => (
              <a key={t} href={`#s${i + 1}`}>
                {t}
              </a>
            ))}
          </nav>
          <article className="legal">
            <div className="legal-callout legal-callout--amber">
              <h3>Legally Binding Agreement</h3>
              <p>
                By accessing https://pyrexxai.com, scheduling a demo, or executing a Statement of Work (SOW), you agree to these Terms of Service. Clients with executed Master Service Agreements (MSA) and Business Associate Agreements (BAA) are also governed by those specific agreements.
              </p>
            </div>

            <h2 id="s1">1. ACCEPTANCE OF TERMS</h2>
            <p>
              By accessing the Site or utilizing Pyrexx AI voice intake agents, you (&apos;Client&apos; or &apos;User&apos;) agree to be bound by these Terms. If you are entering into these Terms on behalf of a clinic or entity, you warrant that you possess the legal authority to bind that entity.
            </p>

            <h2 id="s2">2. DESCRIPTION OF SERVICES</h2>
            <p>Pyrexx AI provides enterprise artificial intelligence solutions for private practice healthcare &amp; wellness clinics, including:</p>
            <ul>
              <li><strong>AI Voice Receptionist Implementation:</strong> Custom training and scripting deployed within 14 business days of kickoff;</li>
              <li><strong>24/7 or Overflow Call Handling:</strong> Automated phone triage, FAQ resolution, and appointment scheduling;</li>
              <li><strong>EMR / PMS API Integration:</strong> Custom integration bridges with Jane App, Boulevard, Mindbody, Open Dental, Dentrix, Eaglesoft, SimplePractice, TherapyNotes, ChiroTouch, ModMed, and supported EHRs;</li>
              <li><strong>Included Database Reactivation &amp; Platform Management:</strong> Automated patient reactivation add-on for active subscribers, weekly logic updates, and monitoring.</li>
            </ul>

            <h2 id="s3">3. ELIGIBILITY</h2>
            <p>Our services are intended exclusively for commercial healthcare operators, medical spas, dental practices, and specialty wellness clinics. Users must be at least 18 years of age.</p>

            <h2 id="s4">4. ACCOUNTS &amp; CREDENTIAL SECURITY</h2>
            <p>
              Clients are responsible for maintaining the confidentiality of any EMR API keys, phone SIP credentials, and dashboard access tokens provided to Pyrexx AI. Promptly report any compromised credentials to support@pyrexxai.com.
            </p>

            <h2 id="s5">5. CALL RECORDING &amp; CONSENT DISCLOSURES</h2>
            <div className="legal-callout legal-callout--red">
              <h4>Client Responsibility: Recording Disclosures</h4>
              <p>
                Client is solely responsible for ensuring that all legally required call recording disclosures and consent notifications are provided to callers prior to recording or transcription, including compliance with state two-party consent laws (e.g., California, Florida, Illinois).
              </p>
            </div>

            <h2 id="s6">6. HEALTHCARE &amp; AI DISCLOSURES</h2>
            <p>The AI voice agent is a tool for patient intake and administrative scheduling only:</p>
            <ul>
              <li><strong>Not Medical Advice:</strong> The agent does not provide medical diagnosis, clinical treatment plans, or emergency triage;</li>
              <li><strong>Caller AI Transparency:</strong> Voice agents include standard disclosures informing callers they are speaking with an artificial intelligence assistant;</li>
              <li><strong>Emergency Escalation:</strong> Client must configure a distinct escalation number (separate from their forwarded main line) or 911/988 bypass instructions to handle acute callers.</li>
            </ul>

            <h2 id="s7">7. INTELLECTUAL PROPERTY</h2>
            <p>Pyrexx AI retains all proprietary rights in its core voice orchestration, scheduling workflows, and software infrastructure. Client retains full ownership of their patient health data, booking records, and clinical trademarks.</p>

            <h2 id="s8">8. STANDARD PRICING &amp; FEES</h2>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Service</th><th>Fee Amount</th><th>Billing Timing</th></tr></thead>
                <tbody>
                  <tr><td>Initial Implementation &amp; Custom EMR Setup</td><td>$1,000.00 (one-time)</td><td>Due upon checkout / SOW kickoff</td></tr>
                  <tr><td>Overflow AI Receptionist Plan</td><td>$1,000.00 / month</td><td>Monthly recurring (after-hours, weekends &amp; breaks)</td></tr>
                  <tr><td>Full-Time AI Receptionist Plan</td><td>$1,500.00 / month</td><td>Monthly recurring (100% 24/7 inbound coverage)</td></tr>
                  <tr><td>Patient Database Reactivation Add-On</td><td>Included Free ($0)</td><td>Available with any active AI Receptionist subscription</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="s9">9. TERM &amp; TERMINATION</h2>
            <p>
              Subscriptions operate on a month-to-month basis unless otherwise specified in your SOW. You may cancel service with thirty (30) days&apos; written notice to legal@pyrexxai.com or via your Billing Portal.
            </p>

            <h2 id="s10">10. DISCLAIMERS</h2>
            <p>THE SERVICES ARE PROVIDED &apos;AS IS&apos; AND &apos;AS AVAILABLE&apos; WITHOUT EXPRESS OR IMPLIED WARRANTIES OF ANY KIND. PYREXX AI DISCLAIMS ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.</p>

            <h2 id="s11">11. LIMITATION OF LIABILITY</h2>
            <p>
              PYREXX AI&apos;S TOTAL AGGREGATE LIABILITY FOR CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE TOTAL FEES PAID BY CLIENT IN THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE CLAIM. FOR BAA-RELATED PHI INCIDENTS CAUSED BY PYREXX AI GROSS NEGLIGENCE, THE CAP EQUALS TWELVE (12) MONTHS OF FEES.
            </p>

            <h2 id="s12">12. INDEMNIFICATION</h2>
            <p>Client agrees to indemnify and hold harmless Pyrexx AI from third-party claims arising from Client&apos;s clinical operations, failure to provide compliant call recording disclosures, or use outside the scope of the executed SOW.</p>

            <h2 id="s13">13. GOVERNING LAW &amp; ARBITRATION</h2>
            <p>These Terms are governed by the laws of the State of Delaware. Any dispute not resolved through informal negotiations within 15 days shall be settled by binding arbitration administered by the American Arbitration Association (AAA) in New Castle County, Delaware.</p>

            <h2 id="s14">14. THIRD-PARTY PLATFORMS</h2>
            <p>Pyrexx AI interfaces with third-party EMRs/PMS systems. We are not responsible for outages, rate limits, or schema changes made by third-party EMR software providers.</p>

            <h2 id="s15">15. FORCE MAJEURE</h2>
            <p>Neither party shall be liable for delays resulting from acts of God, telecommunications outages, or third-party infrastructure failures beyond reasonable control.</p>

            <h2 id="s16">16. AI ACCURACY &amp; HUMAN OVERSIGHT</h2>
            <p>While Pyrexx AI agents operate with high transcription fidelity, ambient phone noise and accents may affect comprehension. Clinical staff are responsible for reviewing intake summaries prior to administering treatments.</p>

            <h2 id="s17">17. PUBLICITY</h2>
            <p>Pyrexx AI may identify Client as a customer in marketing materials only with Client authorization, revocable at any time via marketing@pyrexxai.com.</p>

            <h2 id="s18">18. GENERAL PROVISIONS</h2>
            <p>If any provision of these Terms is deemed unenforceable, the remaining terms shall continue in full force. In the event of a direct conflict between these Terms and an executed MSA/BAA, the MSA/BAA governs.</p>

            <h2 id="s19">19. CHANGES TO TERMS</h2>
            <p>Pyrexx AI may revise these Terms from time to time. Continued use of the service following posted notice constitutes acceptance of revisions.</p>

            <h2 id="s20">20. CONTACT INFORMATION</h2>
            <div className="table-wrap">
              <table>
                <tbody>
                  <tr><th>Legal Notices</th><td><a href="mailto:legal@pyrexxai.com">legal@pyrexxai.com</a></td></tr>
                  <tr><th>Client Support</th><td><a href="mailto:support@pyrexxai.com">support@pyrexxai.com</a></td></tr>
                  <tr><th>General Inquiries</th><td><a href="mailto:hello@pyrexxai.com">hello@pyrexxai.com</a></td></tr>
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </Section>
    </>
  );
}