import type { Metadata } from "next";
import JsonLd from "@/components/ui/JsonLd";
import PageHeader from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { LEGAL_UPDATED } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { webPageSchema } from "@/lib/schema";

const DESCRIPTION =
  "Pyrexx AI's website privacy policy, HIPAA Business Associate commitments, and clinical data protection practices.";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: DESCRIPTION,
  path: "/privacy-policy",
});

const TOC = [
  "1. WHO WE ARE",
  "2. INFORMATION WE COLLECT",
  "3. HOW WE USE YOUR INFORMATION",
  "4. SUB-PROCESSORS & SERVICE PROVIDERS",
  "5. ZERO AI MODEL TRAINING ON PATIENT DATA",
  "6. DATA RETENTION",
  "7. COOKIES & TRACKING",
  "8. YOUR PRIVACY RIGHTS",
  "9. DATA SECURITY & ENCRYPTION",
  "10. CHILDREN'S PRIVACY",
  "11. INTERNATIONAL DATA TRANSFERS",
  "12. THIRD-PARTY LINKS",
  "13. CHANGES TO THIS POLICY",
  "14. CONTACT US",
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: "Privacy Policy", description: DESCRIPTION, path: "/privacy-policy", dateModified: LEGAL_UPDATED })} />
      <PageHeader trail={[{ name: "Privacy Policy", path: "/privacy-policy" }]} eyebrow="Legal" title="Privacy Policy">
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
            <div className="legal-callout">
              <h3>Plain-English Summary</h3>
              <p>
                Pyrexx AI builds AI voice receptionists for private practice healthcare and wellness businesses. This policy explains what information we collect on our website and through our services, how we use it, who we share it with, and your rights over it. We do not sell your data. Ever.
              </p>
            </div>

            <h2 id="s1">1. WHO WE ARE</h2>
            <p>
              Pyrexx AI (&apos;we&apos;, &apos;our&apos;, &apos;us&apos;) is an AI software and services company that provisions custom-tuned voice agents for private practice healthcare businesses. Our registered details and primary contact channels are listed below.
            </p>

            <div className="table-wrap">
              <table>
                <tbody>
                  <tr><th>Company Name</th><td>Pyrexx AI</td></tr>
                  <tr><th>Canonical Website</th><td><a href="https://pyrexxai.com">https://pyrexxai.com</a></td></tr>
                  <tr><th>Privacy Inquiries</th><td><a href="mailto:privacy@pyrexxai.com">privacy@pyrexxai.com</a></td></tr>
                  <tr><th>General &amp; Client Support</th><td><a href="mailto:support@pyrexxai.com">support@pyrexxai.com</a> · <a href="mailto:hello@pyrexxai.com">hello@pyrexxai.com</a></td></tr>
                  <tr><th>Governing Law</th><td>State of Delaware, USA</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="s2">2. INFORMATION WE COLLECT</h2>
            <h3>2.1 Information You Give Us Directly</h3>
            <p>
              When you visit our website, fill out a contact form, subscribe to our newsletter, schedule a discovery call, or communicate with our team, we may collect:
            </p>
            <ul>
              <li>Full name, business name, job title, and work email address;</li>
              <li>Phone number and clinic physical address;</li>
              <li>Clinical infrastructure details (e.g., EMR/PMS used, monthly inbound call volume);</li>
              <li>Any information voluntarily included in contact inquiries or discovery calls.</li>
            </ul>

            <h3>2.2 Information We Collect Automatically</h3>
            <p>When you browse https://pyrexxai.com, our server logs and analytics tools collect technical information including:</p>
            <ul>
              <li>IP address and approximate geographic location (city/region level);</li>
              <li>Browser type, operating system, device viewport dimensions;</li>
              <li>Pages visited, time spent on pages, and referring URL paths.</li>
            </ul>

            <h3>2.3 Patient and Caller Data (Service Data)</h3>
            <div className="legal-callout legal-callout--red">
              <h4>HIPAA-Protected Information &amp; BAA Scope</h4>
              <p>
                Patient and caller data processed through our AI voice agent service constitutes Protected Health Information (PHI) under HIPAA. Call audio and transcripts are maintained strictly inside HIPAA-BAA-covered voice infrastructure (Retell AI) and handled under a legally binding Business Associate Agreement (BAA) executed with each healthcare client. Pyrexx AI functions as a Business Associate, not a Covered Entity.
              </p>
            </div>

            <h2 id="s3">3. HOW WE USE YOUR INFORMATION</h2>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Purpose</th><th>Legal Basis</th></tr></thead>
                <tbody>
                  <tr><td>Responding to discovery call bookings &amp; inquiries</td><td>Legitimate interest / Pre-contractual steps</td></tr>
                  <tr><td>Deploying and configuring AI voice agents for clients</td><td>Performance of contract</td></tr>
                  <tr><td>Processing platform setup fees and monthly subscriptions</td><td>Performance of contract / Legal obligation</td></tr>
                  <tr><td>Complying with HIPAA security and breach notification rules</td><td>Legal &amp; BAA obligation</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="s4">4. SUB-PROCESSORS &amp; SERVICE PROVIDERS</h2>
            <p>
              We engage trusted third-party infrastructure providers with appropriate Data Processing Agreements and BAA commitments:
            </p>

            <div className="table-wrap">
              <table>
                <thead><tr><th>Provider</th><th>Function</th><th>Data Handled</th></tr></thead>
                <tbody>
                  <tr><td>Retell AI Inc.</td><td>HIPAA-BAA voice agent &amp; telephony pipeline</td><td>Inbound clinic call audio, transcripts, booking metadata</td></tr>
                  <tr><td>ElevenLabs Inc.</td><td>Website interactive voice concierge &amp; demo synthesis</td><td>Non-PHI website demo voice sessions</td></tr>
                  <tr><td>Dodo Payments</td><td>Subscription &amp; setup fee billing</td><td>Clinic billing email, payment method, invoice history</td></tr>
                  <tr><td>Supabase Inc.</td><td>Encrypted B2B account, clinic config &amp; audit metadata</td><td>Clinic profiles, B2B lead submissions, booking metadata (zero patient PHI)</td></tr>
                  <tr><td>Cal.com Inc.</td><td>Discovery call scheduling API</td><td>Prospect name, email, selected time slots</td></tr>
                  <tr><td>Resend Inc. / MIDAS</td><td>Transactional emails &amp; permission-based newsletter delivery</td><td>Business contact email, inquiry/support notifications</td></tr>
                  <tr><td>Vercel Inc.</td><td>Application hosting, Edge routing &amp; AI Gateway</td><td>Website request logs, non-PHI assistant chat context</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="s5">5. ZERO AI MODEL TRAINING ON PATIENT DATA</h2>
            <p>
              Pyrexx AI strictly enforces isolated, zero-retention, non-training API configurations for clinical voice pipelines. Individual patient health information, intake transcripts, and phone audio are <strong>never</strong> used to train, fine-tune, or improve any public foundation AI model.
            </p>

            <h2 id="s6">6. DATA RETENTION</h2>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Data Category</th><th>Retention Period</th><th>Basis</th></tr></thead>
                <tbody>
                  <tr><td>Clinical Service Data (Call Logs/Transcripts in Retell)</td><td>Per executed BAA schedule (up to 90 days post-termination)</td><td>BAA / DPA requirements</td></tr>
                  <tr><td>Client Billing &amp; Contract Records</td><td>7 years from invoice date</td><td>Tax &amp; legal compliance</td></tr>
                  <tr><td>Website Inquiries &amp; Demo Submissions</td><td>3 years from last interaction</td><td>Legitimate interest</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="s7">7. COOKIES &amp; TRACKING</h2>
            <p>
              We use strictly necessary session cookies to maintain application state and privacy preferences, along with privacy-preserving analytics to measure aggregated performance. You may decline non-essential cookies at any time via our Cookie Preferences banner.
            </p>

            <h2 id="s8">8. YOUR PRIVACY RIGHTS</h2>
            <p>
              You have the right to request access to, correction of, or deletion of personal data held about you by contacting privacy@pyrexxai.com. We respond to verified consumer requests within thirty (30) calendar days.
            </p>

            <h2 id="s9">9. DATA SECURITY &amp; ENCRYPTION</h2>
            <p>
              All data processed by Pyrexx AI is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We implement Role-Based Access Control (RBAC), multi-factor authentication, and automated audit trails.
            </p>

            <h2 id="s10">10. CHILDREN&apos;S PRIVACY</h2>
            <p>Our services are intended exclusively for healthcare business operators and are not directed to minors under the age of 18.</p>

            <h2 id="s11">11. INTERNATIONAL DATA TRANSFERS</h2>
            <p>
              Pyrexx AI operates primarily within the United States. Where cross-border data transfers occur, we implement Standard Contractual Clauses (SCCs) to ensure equivalent data protection.
            </p>

            <h2 id="s12">12. THIRD-PARTY LINKS</h2>
            <p>Our website may contain links to external partner tools. We encourage you to review their independent privacy policies before submitting data.</p>

            <h2 id="s13">13. CHANGES TO THIS POLICY</h2>
            <p>
              We may update this Privacy Policy periodically. Significant changes affecting active clients will be communicated via email at least 14 days prior to taking effect.
            </p>

            <h2 id="s14">14. CONTACT US</h2>
            <div className="table-wrap">
              <table>
                <tbody>
                  <tr><th>Privacy Email</th><td><a href="mailto:privacy@pyrexxai.com">privacy@pyrexxai.com</a></td></tr>
                  <tr><th>Support Email</th><td><a href="mailto:support@pyrexxai.com">support@pyrexxai.com</a></td></tr>
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