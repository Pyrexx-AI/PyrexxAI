import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | PyrexxAI",
  description: "PyrexxAI's website privacy policy and data collection practices.",
  alternates: {
    canonical: "https://pyrexxai.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-base text-brand-600 dark:text-brand-400 font-medium">www.pyrexxai.com</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Last Updated: April 21, 2026 | Effective: April 21, 2026
          </p>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-2xl p-6 mb-12">
          <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-500 mb-2 uppercase tracking-wide">Plain-English Summary</h3>
          <p className="text-emerald-900/80 dark:text-emerald-200/80 text-sm leading-relaxed">
            PyrexxAI builds AI voice agents for healthcare businesses. This policy explains what information we collect on our website and through our services, how we use it, who we share it with, and your rights over it. We take privacy seriously, especially because our clients serve patients. We do not sell your data. Ever.
          </p>
        </div>

        {/* 1. WHO WE ARE */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">1. WHO WE ARE</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI ('we', 'our', 'us') is an AI software and services company that provisions custom-tuned voice agents for healthcare businesses, currently specializing in medical spas (medspas). Our registered address and primary contact details are listed below.
        </p>
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 w-1/3">Company Name</th>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">PyrexxAI</td>
              </tr>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Website</th>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"><a href="https://www.pyrexxai.com" className="text-brand-600 dark:text-brand-400 hover:underline">www.pyrexxai.com</a></td>
              </tr>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Privacy Contact</th>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"><a href="mailto:privacy@pyrexxai.com" className="text-brand-600 dark:text-brand-400 hover:underline">privacy@pyrexxai.com</a></td>
              </tr>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Support Contact</th>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"><a href="mailto:support@pyrexxai.com" className="text-brand-600 dark:text-brand-400 hover:underline">support@pyrexxai.com</a></td>
              </tr>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Governing Law</th>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">State of Delaware, USA</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          This Privacy Policy applies to: (a) visitors of our website at www.pyrexxai.com; (b) prospective and current business clients of PyrexxAI; and (c) individuals whose personal data is processed by our services on behalf of our clients. It does not apply to websites or services operated by third parties linked from our website.
        </p>

        {/* 2. INFORMATION WE COLLECT */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">2. INFORMATION WE COLLECT</h2>
        
        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">2.1 Information You Give Us Directly</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          When you visit our website, fill out a contact form, book a demo, or communicate with us, we may collect:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li className="leading-relaxed">Name, business name, job title, and email address;</li>
          <li className="leading-relaxed">Phone number and mailing address;</li>
          <li className="leading-relaxed">Details about your business (e.g., type of clinic, patient volume, current software stack);</li>
          <li className="leading-relaxed">Any other information you voluntarily include in a message or inquiry form.</li>
        </ul>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">2.2 Information We Collect Automatically (Website)</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          When you visit www.pyrexxai.com, we automatically collect certain technical information through cookies and similar technologies, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li className="leading-relaxed">IP address and approximate geographic location (city/region level);</li>
          <li className="leading-relaxed">Browser type, device type, and operating system;</li>
          <li className="leading-relaxed">Pages visited, time spent on pages, links clicked, and referring URL;</li>
          <li className="leading-relaxed">Session identifiers and cookie data (see Section 7 for full cookie details).</li>
        </ul>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          This information is used solely to understand how our website is used, to improve our content and user experience, and to diagnose technical issues. We do not use it to identify individual visitors without their consent.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">2.3 Business Client Information</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          When a business enters into a contract with PyrexxAI, we collect information necessary to provide and bill for our services, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li className="leading-relaxed">Legal entity name, registration details, and business address;</li>
          <li className="leading-relaxed">Names and contact details of authorized representatives and points of contact;</li>
          <li className="leading-relaxed">Billing and payment information (processed securely through Dodo Payments — we do not store full card numbers);</li>
          <li className="leading-relaxed">API credentials, EMR system access details, and integration configuration data provided by the client;</li>
          <li className="leading-relaxed">Communications and correspondence related to the business relationship.</li>
        </ul>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">2.4 Patient and Caller Data (Service Data)</h3>
        
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/50 rounded-2xl p-6 mb-6">
          <h4 className="text-sm font-bold text-red-800 dark:text-red-500 mb-2 uppercase tracking-wide">Important: HIPAA-Protected Information</h4>
          <p className="text-red-900/80 dark:text-red-200/80 text-sm leading-relaxed">
            Patient and caller data processed through our AI voice agent service is Protected Health Information (PHI) under HIPAA. This data is handled under a separate Business Associate Agreement (BAA) with each client, not this Privacy Policy. We are a Business Associate, not a Covered Entity. Patients with questions about their health data should contact their healthcare provider directly.
          </p>
        </div>

        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          In delivering our voice agent services, our systems may process the following categories of data on behalf of our healthcare clients:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li className="leading-relaxed">Caller name, phone number, and contact information;</li>
          <li className="leading-relaxed">Reason for inquiry, appointment preferences, and intake responses;</li>
          <li className="leading-relaxed">Health-related information voluntarily disclosed by callers during intake;</li>
          <li className="leading-relaxed">Call recordings and transcripts (where legally disclosed to callers by the client).</li>
        </ul>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI processes this data solely as a service provider acting on our client's documented instructions. We do not use patient data for our own purposes, sell it, or use it to train AI models accessible to third parties.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">2.5 Information from Third Parties</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          We may receive limited information about prospective clients from publicly available sources (such as LinkedIn or business directories) for the purpose of business outreach. We do not purchase consumer data lists.
        </p>

        {/* 3. HOW WE USE YOUR INFORMATION */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">3. HOW WE USE YOUR INFORMATION</h2>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="bg-brand-50 dark:bg-brand-900/20 px-4 py-3 text-sm font-semibold text-brand-900 dark:text-brand-100 border border-brand-200 dark:border-brand-800">Purpose</th>
                <th className="bg-brand-50 dark:bg-brand-900/20 px-4 py-3 text-sm font-semibold text-brand-900 dark:text-brand-100 border border-brand-200 dark:border-brand-800">Legal Basis / Justification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Responding to inquiries and demo requests</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Legitimate interest / Pre-contractual steps</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Onboarding and delivering services to clients</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Performance of contract</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Processing payments and managing billing</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Performance of contract / Legal obligation</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Sending service-related communications</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Performance of contract / Legitimate interest</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Marketing our services to prospects (with opt-out)</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Legitimate interest / Consent</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Improving our website and platform (anonymized)</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Legitimate interest</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Complying with legal and regulatory obligations</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Legal obligation</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Detecting fraud and ensuring security</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Legitimate interest / Legal obligation</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          We do not use your information to make fully automated decisions that produce legal or similarly significant effects about you without human review.
        </p>

        {/* 4. HOW WE SHARE YOUR INFORMATION */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">4. HOW WE SHARE YOUR INFORMATION</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI does not sell, rent, or trade your personal information to third parties for their own commercial use. We share information only in the following circumstances:
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">4.1 Sub-Processors & Service Providers</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          We engage the following third-party service providers who may access personal data only to the extent necessary to perform their specific function. Each is bound by a data processing agreement with appropriate privacy protections:
        </p>
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Provider</th>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Location</th>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Function</th>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Data Accessed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Retell AI</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">San Carlos, CA</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">AI voice agent infrastructure; processes call audio and transcripts</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Call data, transcripts</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Dodo Payments</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Dover, DE</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Payment processing, subscription management, invoicing</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Billing info, email, name</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Google (Alphabet Inc.)</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Mountain View, CA</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Cloud data storage (Cloud SQL) and analytics visualization (Looker Studio)</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Call logs, performance metrics</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">4.2 Legal Disclosure</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          We may disclose personal information if required to do so by law, court order, or lawful government request, or where we believe in good faith that disclosure is necessary to protect the rights, safety, or property of PyrexxAI, our clients, or the public. Where permitted, we will notify affected parties before complying.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">4.3 Business Transfers</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          If PyrexxAI is involved in a merger, acquisition, asset sale, or corporate reorganization, personal data may be transferred as part of that transaction. We will provide notice before personal data is transferred and becomes subject to a different privacy policy. Any acquirer will be required to honor the commitments made in this Privacy Policy.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">4.4 Consent</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          We may share personal data in ways not described above with your explicit prior consent.
        </p>

        {/* 5. HIPAA, HEALTHCARE DATA & OUR ROLE */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">5. HIPAA, HEALTHCARE DATA & OUR ROLE</h2>
        
        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">5.1 PyrexxAI as a Business Associate</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          When providing voice agent services to healthcare clients, PyrexxAI functions as a HIPAA Business Associate. We do not independently determine the purposes or means of processing patient PHI -- that is the role of our clients (Covered Entities). Our processing is governed by the BAA executed with each client and by applicable HIPAA/HITECH regulations.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">5.2 No Training on PHI</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI warrants that individual patient PHI is processed via secure API connections and is never used to train, fine-tune, or improve any publicly available or third-party AI foundation model. Anonymized and de-identified aggregate data may be used for service performance optimization strictly in accordance with HIPAA de-identification standards (45 CFR Section 164.514).
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">5.3 Patients: How to Exercise Your HIPAA Rights</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          If you are a patient and wish to access, correct, or request deletion of health information held by a PyrexxAI client, you should contact that healthcare provider directly. PyrexxAI will assist clients in responding to such requests as required by our BAA obligations. You may also contact us at privacy@pyrexxai.com if you are unable to identify the relevant provider.
        </p>

        {/* 6. DATA RETENTION */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">6. DATA RETENTION</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          We retain personal data only for as long as necessary for the purposes for which it was collected and to comply with applicable legal obligations. Our standard retention periods are as follows:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Data Category</th>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Retention Period</th>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Website visitor / analytics data</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">13 months</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Industry standard / cookie policy</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Contact / inquiry form data</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">3 years from last contact</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Legitimate interest</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Client account and contract records</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">7 years post-termination</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Legal / tax obligation</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Payment and billing records</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">7 years from invoice date</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Legal / tax obligation</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Service data (call logs, transcripts)</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">90 days post-contract termination</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">BAA / DPA obligation</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Anonymized performance/aggregate data</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Indefinite (no identifiable data)</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Legitimate interest</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          At the end of the applicable retention period, personal data is securely deleted or anonymized using methods that render it unrecoverable. For PHI specifically, return and destruction procedures are governed by Article VI of the BAA.
        </p>

        {/* 7. COOKIES & TRACKING TECHNOLOGIES */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">7. COOKIES & TRACKING TECHNOLOGIES</h2>
        
        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">7.1 What Are Cookies</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Cookies are small text files placed on your device when you visit our website. We also use similar technologies such as web beacons and local storage. You can control cookies through your browser settings, though disabling certain cookies may affect website functionality.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">7.2 Cookies We Use</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Cookie Type</th>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Name / Provider</th>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Duration</th>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 font-semibold">Strictly Necessary</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Session cookie</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Session</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Enables basic website navigation and security. Cannot be opted out.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 font-semibold">Analytics</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Google Analytics (GA4)</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">13 months</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Tracks page visits and user behavior in anonymized form to improve website content. Opt-out available.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 font-semibold">Preference</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Internal preference cookie</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">12 months</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Remembers your cookie consent choice and display preferences.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 font-semibold">Marketing / Retargeting</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Third-party (if enabled)</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">30 days</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Used only with your explicit consent to show relevant ads on other platforms.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          On your first visit, you will be presented with a cookie consent banner giving you the option to accept or decline non-essential cookies. You may withdraw consent at any time by clicking 'Cookie Preferences' in the website footer.
        </p>

        {/* 8. YOUR PRIVACY RIGHTS */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">8. YOUR PRIVACY RIGHTS</h2>
        
        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">8.1 Rights Available to All Users</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          Regardless of where you are located, you may exercise the following rights by contacting us at privacy@pyrexxai.com:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li className="leading-relaxed">Access: Request a copy of the personal data we hold about you;</li>
          <li className="leading-relaxed">Correction: Request that inaccurate or incomplete information be corrected;</li>
          <li className="leading-relaxed">Deletion: Request that we delete your personal data, subject to legal retention obligations;</li>
          <li className="leading-relaxed">Objection: Object to our processing of your data for direct marketing purposes at any time;</li>
          <li className="leading-relaxed">Data Portability: Request your data in a structured, machine-readable format where applicable;</li>
          <li className="leading-relaxed">Withdraw Consent: Where processing is based on consent, withdraw that consent at any time.</li>
        </ul>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          We will respond to all verifiable requests within thirty (30) calendar days. We may ask you to verify your identity before processing a request.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">8.2 California Residents (CCPA/CPRA)</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA):
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li className="leading-relaxed">Right to Know: Request disclosure of the categories and specific pieces of personal information collected, the sources, the business purposes, and the third parties with whom we share it;</li>
          <li className="leading-relaxed">Right to Delete: Request deletion of personal information we hold, subject to exceptions;</li>
          <li className="leading-relaxed">Right to Correct: Request correction of inaccurate personal information;</li>
          <li className="leading-relaxed">Right to Opt-Out of Sale or Sharing: We do not sell or share personal information for cross-context behavioral advertising. If this changes, you will be notified and given a clear opt-out;</li>
          <li className="leading-relaxed">Right to Limit Use of Sensitive Personal Information: We do not use sensitive personal information for purposes beyond those permitted under the CPRA;</li>
          <li className="leading-relaxed">Right to Non-Discrimination: We will not discriminate against you for exercising any CCPA/CPRA right.</li>
        </ul>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          To submit a verifiable consumer request, email privacy@pyrexxai.com with the subject line 'CCPA Request'. We will respond within 45 calendar days.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">8.3 Do Not Track</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Our website does not currently respond to 'Do Not Track' browser signals, as there is no industry-standard protocol for doing so. You may use browser extensions or settings to limit tracking. We honor opt-out of analytics cookies through our cookie consent mechanism.
        </p>

        {/* 9. DATA SECURITY */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">9. DATA SECURITY</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          We implement appropriate technical and organizational security measures to protect personal data against unauthorized access, loss, alteration, or disclosure. These measures include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li className="leading-relaxed">Encryption of data in transit using TLS 1.2 or higher and at rest using AES-256 or equivalent;</li>
          <li className="leading-relaxed">Role-based access controls ensuring data access is limited to personnel with a legitimate need;</li>
          <li className="leading-relaxed">Regular security assessments and vulnerability testing of our platform and infrastructure;</li>
          <li className="leading-relaxed">Incident detection, response, and breach notification procedures aligned with HIPAA requirements;</li>
          <li className="leading-relaxed">Employee security training and confidentiality obligations.</li>
        </ul>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          No method of transmission over the internet or electronic storage is 100% secure. While we use commercially reasonable measures to protect your data, we cannot guarantee absolute security. In the event of a data breach affecting your rights, we will notify affected parties in accordance with applicable law and our BAA obligations.
        </p>

        {/* 10. CHILDREN'S PRIVACY */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">10. CHILDREN'S PRIVACY</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Our website and services are intended for business clients and are not directed at individuals under the age of 18. We do not knowingly collect personal data from children under 18. If we become aware that we have inadvertently collected personal information from a child under 18 without parental consent, we will take steps to delete that information promptly. If you believe we have collected such information, please contact us at privacy@pyrexxai.com.
        </p>

        {/* 11. INTERNATIONAL DATA TRANSFERS */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">11. INTERNATIONAL DATA TRANSFERS</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI operates primarily in the United States. Our sub-processors are also US-based. If you are accessing our website or services from outside the United States, please be aware that your data may be transferred to, stored, and processed in the United States, where data protection laws may differ from those in your country.
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Where we transfer data of individuals located in jurisdictions with specific international transfer requirements (such as the EU/EEA or UK), we will implement appropriate safeguards such as Standard Contractual Clauses (SCCs) or other legally recognized transfer mechanisms. Contact privacy@pyrexxai.com for more information about applicable safeguards.
        </p>

        {/* 12. THIRD-PARTY LINKS */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">12. THIRD-PARTY LINKS</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Our website may contain links to third-party websites, social media platforms, or tools. These third parties have their own privacy policies, and we are not responsible for their content or privacy practices. We encourage you to review the privacy policy of any third-party site you visit.
        </p>

        {/* 13. CHANGES TO THIS PRIVACY POLICY */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">13. CHANGES TO THIS PRIVACY POLICY</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li className="leading-relaxed">Update the 'Last Updated' date at the top of this page;</li>
          <li className="leading-relaxed">Post a notice on our website homepage for at least 30 days after the change takes effect;</li>
          <li className="leading-relaxed">For existing clients, send an email notification to the address on file at least 14 days before the change takes effect for material changes that affect how we process their data.</li>
        </ul>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Your continued use of our website or services after the effective date of a revised Privacy Policy constitutes your acceptance of the changes. If you do not agree to the updated policy, you may discontinue use of our services and request deletion of your data per Section 8.
        </p>

        {/* 14. CONTACT US */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">14. CONTACT US</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 w-1/3">Privacy Inquiries</th>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"><a href="mailto:privacy@pyrexxai.com" className="text-brand-600 dark:text-brand-400 hover:underline">privacy@pyrexxai.com</a></td>
              </tr>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">General Support</th>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"><a href="mailto:support@pyrexxai.com" className="text-brand-600 dark:text-brand-400 hover:underline">support@pyrexxai.com</a></td>
              </tr>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Website</th>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"><a href="https://www.pyrexxai.com" className="text-brand-600 dark:text-brand-400 hover:underline">www.pyrexxai.com</a></td>
              </tr>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Response Time Commitment</th>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Within 5 business days for general inquiries; within 30 calendar days for formal rights requests</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          If you are not satisfied with our response, and you are located in a jurisdiction that provides such rights, you may have the right to lodge a complaint with your local data protection authority.
        </p>

      </section>
      
      <Footer />
    </main>
  );
}