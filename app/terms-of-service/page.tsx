import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | PyrexxAI",
  description: "Terms of service and acceptable use policy for PyrexxAI.",
  alternates: {
    canonical: "https://pyrexxai.com/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">Terms of Service</h1>
          <p className="text-base text-brand-600 dark:text-brand-400 font-medium">www.pyrexxai.com</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Last Updated: April 21, 2026 | Effective: April 21, 2026
          </p>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-2xl p-6 mb-12">
          <h3 className="text-lg font-bold text-amber-800 dark:text-amber-500 mb-2 uppercase tracking-wide">Please Read These Terms Carefully</h3>
          <p className="text-amber-900/80 dark:text-amber-200/80 text-sm leading-relaxed">
            These Terms of Service constitute a legally binding agreement between you and PyrexxAI. By accessing our website, requesting a demo, or using our services, you agree to be bound by these Terms. If you do not agree, do not use our website or services. Clients who have executed a Master Service Agreement (MSA) with PyrexxAI are also bound by that agreement; in the event of a conflict, the MSA governs.
          </p>
        </div>

        {/* 1. ACCEPTANCE OF TERMS */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">1. ACCEPTANCE OF TERMS</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          By accessing or using the PyrexxAI website at www.pyrexxai.com ('Site'), requesting a product demonstration, completing a payment, or executing a Statement of Work (SOW) or Master Service Agreement (MSA), you ('User', 'Client', or 'you') agree to be bound by these Terms of Service ('Terms'), our Privacy Policy, and any additional terms applicable to specific services or promotions. These Terms apply to all visitors, prospective clients, and current clients.
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          If you are accepting these Terms on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms. If you do not have such authority, you must not accept these Terms or use our services on behalf of such entity.
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI reserves the right to update these Terms at any time. Continued use of the Site or services after notice of a change constitutes acceptance. See Section 19 for our change notification process.
        </p>

        {/* 2. ABOUT PYREXXAI & OUR SERVICES */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">2. ABOUT PYREXXAI & OUR SERVICES</h2>
        
        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">2.1 Who We Are</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI is an AI software and services company that provisions custom-tuned AI voice agents for healthcare businesses, currently specializing in medical spas and aesthetic clinics ('medspas'). Our voice agents handle inbound patient intake calls on behalf of our clients.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">2.2 Description of Services</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          PyrexxAI offers the following services (collectively, 'Services'), as further described in applicable Statements of Work:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li className="leading-relaxed"><strong>AI Voice Agent Implementation:</strong> Configuration, scripting, and fine-tuning of a custom AI voice agent aligned to each client's intake workflow, brand voice, and scheduling needs;</li>
          <li className="leading-relaxed"><strong>24/7 Inbound Call Handling:</strong> Deployment of the voice agent to receive inbound calls, triage callers, collect intake information, and route or escalate per configured logic;</li>
          <li className="leading-relaxed"><strong>EMR & Booking Integration:</strong> Integration of the voice agent with the client's electronic medical records (EMR) and scheduling platforms using client-provided API credentials;</li>
          <li className="leading-relaxed"><strong>Platform Management:</strong> Ongoing monitoring, maintenance, optimization, and reporting for active voice agent deployments;</li>
          <li className="leading-relaxed"><strong>Website & Marketing Presence:</strong> The Site provides information about our Services, company, and contact options.</li>
        </ul>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Services are provided on a subscription basis following a one-time implementation fee, as specified in the applicable SOW. Outbound dialing, SMS marketing campaigns, and any services not expressly stated in an executed SOW are outside scope and require a separate agreement.
        </p>

        {/* 3. ELIGIBILITY */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">3. ELIGIBILITY</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          Our Services are intended for business clients only. To use or subscribe to our Services you must:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li className="leading-relaxed">Be a legal business entity (e.g., corporation, LLC, sole proprietorship) or an authorized representative of such an entity;</li>
          <li className="leading-relaxed">Be at least 18 years of age;</li>
          <li className="leading-relaxed">Have the legal authority to enter into binding contracts in your jurisdiction;</li>
          <li className="leading-relaxed">Operate in a business category compatible with our Services (currently, medical spa and healthcare-adjacent businesses);</li>
          <li className="leading-relaxed">Not be located in a jurisdiction where receiving our Services would be prohibited by law.</li>
        </ul>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI reserves the right to refuse service to any entity at its sole discretion, including where we determine the intended use is incompatible with our policies or applicable law.
        </p>

        {/* 4. ACCOUNTS, ACCESS & SECURITY */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">4. ACCOUNTS, ACCESS & SECURITY</h2>
        
        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">4.1 Account Creation</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          To access certain features or enter into a service relationship, you may be required to provide account information including your name, business name, email address, and payment details. You agree to provide accurate, current, and complete information and to update it promptly if it changes.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">4.2 Credential Security</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          You are responsible for maintaining the confidentiality of any access credentials, API keys, and login details associated with your account or provided to PyrexxAI for integration purposes. You agree to notify PyrexxAI immediately at support@pyrexxai.com if you suspect any unauthorized access to your account or any security breach affecting your credentials.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">4.3 Responsibility for Account Activity</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          You are responsible for all activity that occurs under your account or through your provided credentials, whether or not authorized by you. PyrexxAI is not liable for any loss or damage arising from your failure to protect your account credentials.
        </p>

        {/* 5. PERMITTED USE & PROHIBITED CONDUCT */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">5. PERMITTED USE & PROHIBITED CONDUCT</h2>
        
        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">5.1 Permitted Use</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Subject to these Terms and an executed SOW, PyrexxAI grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services solely for your own internal business operations and in accordance with applicable law.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">5.2 Prohibited Conduct</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          You agree not to, and not to permit or enable any third party to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li className="leading-relaxed">Use the Services for any purpose that is unlawful, fraudulent, or in violation of applicable law or regulation, including HIPAA, FTC regulations, or state telemarketing laws;</li>
          <li className="leading-relaxed">Use the AI voice agent for outbound dialing, robocalling, SMS campaigns, or any purpose not authorized in an executed SOW;</li>
          <li className="leading-relaxed">Reverse engineer, decompile, disassemble, copy, or attempt to derive source code or underlying algorithms of the PyrexxAI platform;</li>
          <li className="leading-relaxed">Attempt to probe, scan, test, or breach the security of the PyrexxAI platform or any related infrastructure;</li>
          <li className="leading-relaxed">Transmit malware, viruses, or any code designed to disrupt, damage, or gain unauthorized access to systems;</li>
          <li className="leading-relaxed">Use the Services to discriminate against patients or callers based on protected characteristics, or to violate any individual's rights;</li>
          <li className="leading-relaxed">Misrepresent your identity, business, or qualifications to PyrexxAI or to callers interacting with your AI voice agent;</li>
          <li className="leading-relaxed">Resell, sublicense, or otherwise commercialize access to the Services without PyrexxAI's prior written consent;</li>
          <li className="leading-relaxed">Use the Services in any way that could bring PyrexxAI into disrepute or harm its reputation or that of its other clients.</li>
        </ul>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">5.3 Call Recording & Consent Disclosures</h3>
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/50 rounded-2xl p-6 mb-8">
          <h4 className="text-sm font-bold text-red-800 dark:text-red-500 mb-2 uppercase tracking-wide">Client Responsibility: Call Recording Compliance</h4>
          <p className="text-red-900/80 dark:text-red-200/80 text-sm leading-relaxed">
            Client is solely responsible for ensuring that all legally required call recording disclosures and consent notifications are provided to callers before any recording or transcription begins. This includes compliance with two-party consent laws in applicable states (e.g., California, Florida, Illinois). PyrexxAI will configure the agent per Client's instructions but bears no liability for Client's failure to implement compliant disclosures. We strongly recommend consulting legal counsel on your state-specific obligations.
          </p>
        </div>

        {/* 6. HEALTHCARE COMPLIANCE OBLIGATIONS */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">6. HEALTHCARE COMPLIANCE OBLIGATIONS</h2>
        
        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">6.1 Client as Covered Entity</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          If you are a HIPAA Covered Entity (e.g., a healthcare provider), you acknowledge that:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li className="leading-relaxed">You are responsible for determining the lawfulness of collecting and processing patient PHI through the PyrexxAI voice agent;</li>
          <li className="leading-relaxed">You must ensure that a signed Business Associate Agreement (BAA) with PyrexxAI is in place before any PHI is processed through our Services;</li>
          <li className="leading-relaxed">You are responsible for your patients' Notice of Privacy Practices and any required HIPAA disclosures to patients;</li>
          <li className="leading-relaxed">You must not configure the voice agent to collect PHI categories beyond what is necessary for the intake purpose described in your SOW.</li>
        </ul>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">6.2 AI Disclosure to Callers</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          You acknowledge that callers to your business will interact with an AI-powered voice agent. You agree to disclose, or to configure the voice agent to disclose, the AI nature of the interaction at the start of each call, in a manner that is clear, timely, and in compliance with applicable AI disclosure laws and regulations, including any state-level requirements.
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI's standard voice agent configurations include an AI disclosure prompt. You must not instruct PyrexxAI to remove or suppress this disclosure. If you have specific legal requirements regarding AI disclosure format, you must notify PyrexxAI in writing and we will work with you to configure a compliant disclosure.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">6.3 Scope Limitation</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          The PyrexxAI voice agent is designed for patient intake purposes only. It is not a licensed medical device, does not provide medical advice, diagnosis, or treatment recommendations, and must not be represented or configured to do so. You are responsible for ensuring callers who require urgent medical attention are appropriately routed to emergency services or qualified clinical staff.
        </p>

        {/* 7. INTELLECTUAL PROPERTY */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">7. INTELLECTUAL PROPERTY</h2>
        
        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">7.1 PyrexxAI Intellectual Property</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          All intellectual property rights in the PyrexxAI platform, including software, voice agent configurations, AI models, workflows, algorithms, designs, branding, website content, and documentation, are and remain the exclusive property of PyrexxAI or its licensors. Nothing in these Terms transfers ownership of any PyrexxAI intellectual property to you.
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          The limited license granted under Section 5.1 does not include the right to: copy, modify, or create derivative works from the platform; sublicense access to the platform; or use PyrexxAI's trademarks, logos, or branding without prior written consent.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">7.2 Client Data</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          You retain all ownership rights in data and content you provide to PyrexxAI in connection with the Services, including patient call data, booking information, and EMR records ('Client Data'). You grant PyrexxAI a limited, non-exclusive license to use Client Data solely to provide and improve the Services as described in the applicable SOW and DPA.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">7.3 Feedback</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          If you provide feedback, suggestions, or ideas regarding the Services ('Feedback'), you grant PyrexxAI a perpetual, irrevocable, royalty-free, worldwide license to use such Feedback for any purpose, including incorporating it into our products and services, without obligation or compensation to you.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">7.4 Website Content</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          All content on www.pyrexxai.com, including text, graphics, logos, and images, is the property of PyrexxAI and is protected by applicable intellectual property law. You may not reproduce, distribute, or create derivative works from website content without our express written permission.
        </p>

        {/* 8. FEES, BILLING & PAYMENT */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">8. FEES, BILLING & PAYMENT</h2>
        
        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">8.1 Fee Structure</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Fees for Services are set out in the applicable Statement of Work. Current standard pricing is as follows (subject to change; always confirmed in your SOW):
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Service</th>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Amount</th>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Billing Timing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Implementation & Logic Setup</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">$1,500.00 (one-time)</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Invoiced at SOW execution; due within 14 days</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Monthly Platform Management</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">$1,000.00/month</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Commences on System Launch or 7 days post-credential receipt (later of the two)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">8.2 Payment Processing</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Payments are processed securely through Dodo Payments. By providing payment details, you authorize PyrexxAI to charge the applicable fees on the schedule specified in your SOW. You are responsible for maintaining valid payment credentials throughout the subscription term.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">8.3 Taxes</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          All fees are exclusive of applicable taxes, levies, or duties imposed by taxing authorities. You are responsible for paying all taxes associated with your use of the Services, except for taxes on PyrexxAI's net income.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">8.4 Disputes & Refunds</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          If you believe an invoice is incorrect, you must notify PyrexxAI in writing within ten (10) calendar days of the invoice date with a specific description of the dispute. Undisputed amounts remain due. One-time implementation fees are non-refundable once implementation work has commenced. Monthly fees are not refunded for partial months, except where PyrexxAI fails to meet its SLA commitments as described in the applicable SOW (in which case service credits apply).
        </p>

        {/* 9. TERM & TERMINATION */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">9. TERM & TERMINATION</h2>
        
        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">9.1 Term</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          These Terms remain in effect for as long as you use our website or hold an active service agreement with PyrexxAI. Service agreements are subject to the term and termination provisions of the applicable MSA.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">9.2 Termination by You</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          You may terminate your service subscription by providing thirty (30) calendar days' written notice to PyrexxAI at legal@pyrexxai.com, in accordance with the termination provisions of your MSA. Termination does not relieve you of outstanding payment obligations.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">9.3 Termination by PyrexxAI</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          PyrexxAI may suspend or terminate your access to the Services or this website immediately and without notice if:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li className="leading-relaxed">You materially breach these Terms or your MSA and fail to cure within 15 days of written notice;</li>
          <li className="leading-relaxed">You engage in conduct that poses a legal risk to PyrexxAI or its other clients;</li>
          <li className="leading-relaxed">You use the Services in violation of applicable law, including HIPAA;</li>
          <li className="leading-relaxed">You fail to make undisputed payments when due after written notice and a cure period;</li>
          <li className="leading-relaxed">Continued service is required to be discontinued by applicable law or government order.</li>
        </ul>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">9.4 Effect of Termination</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Upon termination: all licenses granted to you terminate immediately; you must cease using the Services; outstanding fees become immediately due; and each party must return or destroy the other's confidential information per the MSA. Data return and destruction obligations under the BAA and DPA survive termination.
        </p>

        {/* 10. DISCLAIMERS */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">10. DISCLAIMERS</h2>
        
        <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 mb-8">
          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">Not Medical Advice</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            PyrexxAI's AI voice agents are tools for patient intake and scheduling purposes only. Nothing in our Services constitutes medical advice, clinical diagnosis, treatment recommendations, or a substitute for professional medical judgment. PyrexxAI is not a licensed healthcare provider and assumes no clinical responsibility for interactions facilitated through its platform.
          </p>
        </div>
        
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 uppercase">
          THE SITE AND SERVICES ARE PROVIDED 'AS IS' AND 'AS AVAILABLE' WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, PYREXXAI EXPRESSLY DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 uppercase">
          PYREXXAI DOES NOT WARRANT THAT: (A) THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE; (B) THE AI VOICE AGENT WILL CAPTURE ALL CALLER INFORMATION WITH PERFECT ACCURACY IN ALL CIRCUMSTANCES; OR (C) ANY PARTICULAR RESULT OR OUTCOME WILL BE ACHIEVED THROUGH USE OF THE SERVICES. CLIENT IS RESPONSIBLE FOR IMPLEMENTING APPROPRIATE HUMAN REVIEW AND ESCALATION PROCEDURES.
        </p>

        {/* 11. LIMITATION OF LIABILITY */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">11. LIMITATION OF LIABILITY</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 uppercase">
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, PYREXXAI'S TOTAL AGGREGATE LIABILITY TO YOU FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS, THE SITE, OR THE SERVICES SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU TO PYREXXAI IN THE THREE (3) CALENDAR MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 uppercase">
          FOR CLAIMS ARISING FROM GROSS NEGLIGENCE, WILFUL MISCONDUCT, OR UNAUTHORIZED DISCLOSURE OF PHI CAUSED BY PYREXXAI, THE CAP SHALL EQUAL TWELVE (12) MONTHS OF FEES PAID. THIS HIGHER CAP DOES NOT APPLY TO CLAIMS ARISING FROM CLIENT'S OWN NEGLIGENCE OR MISUSE OF THE SERVICES.
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 uppercase">
          IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS OPPORTUNITY, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability. In such jurisdictions, the above limitations apply to the maximum extent permitted by law.
        </p>

        {/* 12. INDEMNIFICATION */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">12. INDEMNIFICATION</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          You agree to defend, indemnify, and hold harmless PyrexxAI and its officers, directors, employees, contractors, and agents from and against any third-party claims, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li className="leading-relaxed">Your breach of these Terms or any applicable SOW or MSA;</li>
          <li className="leading-relaxed">Your failure to implement legally required call recording disclosures or AI disclosure notifications;</li>
          <li className="leading-relaxed">Your misuse of the Services, including use outside the scope of an executed SOW;</li>
          <li className="leading-relaxed">Your violation of any applicable law or regulation, including HIPAA;</li>
          <li className="leading-relaxed">Any claim by a patient or caller arising from your healthcare operations or your failure to provide appropriate clinical oversight;</li>
          <li className="leading-relaxed">Any content, data, or instructions you provide to PyrexxAI that infringe on the rights of any third party.</li>
        </ul>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI will indemnify you against third-party claims arising from PyrexxAI's gross negligence, wilful misconduct, or unauthorized disclosure of PHI caused by PyrexxAI's failure to comply with its BAA obligations, per the terms of the MSA.
        </p>

        {/* 13. GOVERNING LAW & DISPUTE RESOLUTION */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">13. GOVERNING LAW & DISPUTE RESOLUTION</h2>
        
        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">13.1 Governing Law</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          These Terms are governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles. The United Nations Convention on Contracts for the International Sale of Goods does not apply to these Terms.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">13.2 Informal Resolution</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Before initiating formal dispute proceedings, you agree to contact PyrexxAI at legal@pyrexxai.com and attempt to resolve the dispute informally for a period of fifteen (15) calendar days. Many issues can be resolved faster through direct communication.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">13.3 Binding Arbitration</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          If informal resolution fails, all disputes arising out of or relating to these Terms or the Services shall be resolved by final and binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules, except as provided in Section 13.4. The arbitration shall be conducted by a single arbitrator in Wilmington, Delaware (or virtually by mutual agreement). The arbitrator's award may be entered as a judgment in any court of competent jurisdiction.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">13.4 Exceptions to Arbitration</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Either party may seek emergency injunctive or other equitable relief from a court of competent jurisdiction to prevent irreparable harm, without waiving the right to arbitrate the underlying dispute. Claims for non-payment of undisputed fees may also be pursued in court at PyrexxAI's election.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">13.5 Class Action Waiver</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 uppercase">
          YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. IF THIS WAIVER IS FOUND TO BE UNENFORCEABLE, THE ARBITRATION AGREEMENT DOES NOT APPLY AND THE DISPUTE SHALL BE RESOLVED IN COURT.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">13.6 Venue for Non-Arbitrable Claims</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          For any matter not subject to arbitration, each party irrevocably consents to the exclusive jurisdiction and venue of the state and federal courts located in New Castle County, Delaware.
        </p>

        {/* 14. THIRD-PARTY SERVICES & LINKS */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">14. THIRD-PARTY SERVICES & LINKS</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Our Services integrate with third-party platforms including EMR systems, booking software, and the sub-processors listed in our Privacy Policy. PyrexxAI is not responsible for the performance, security, or availability of third-party platforms and shall not be liable for any damages arising from your use of or reliance on such platforms.
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Our website may contain links to third-party websites for informational purposes. These links do not constitute endorsement of any product, service, or organization. PyrexxAI has no control over third-party sites and is not responsible for their content or privacy practices.
        </p>

        {/* 15. FORCE MAJEURE */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">15. FORCE MAJEURE</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI shall not be liable for any delay or failure to perform its obligations (other than payment obligations) arising from circumstances beyond its reasonable control, including acts of God, natural disasters, pandemic, government action, war, civil unrest, internet or infrastructure outages, or third-party provider failures. PyrexxAI will use commercially reasonable efforts to minimize disruption and resume performance as soon as practicable. If a force majeure event continues for more than sixty (60) days, either party may terminate the affected SOW without penalty, except for fees accrued prior to the event.
        </p>

        {/* 16. AI-SPECIFIC DISCLOSURES & LIMITATIONS */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">16. AI-SPECIFIC DISCLOSURES & LIMITATIONS</h2>
        
        <div className="bg-brand-50 dark:bg-brand-900/10 border border-brand-200 dark:border-brand-800/50 rounded-2xl p-6 mb-8">
          <h4 className="text-sm font-bold text-brand-800 dark:text-brand-500 mb-2 uppercase tracking-wide">Understanding AI Limitations</h4>
          <p className="text-brand-900/80 dark:text-brand-200/80 text-sm leading-relaxed">
            Our voice agent uses AI technology and is subject to the inherent limitations of current AI systems. It may occasionally mishear, misinterpret, or fail to capture information accurately. Clients are responsible for implementing appropriate human review of intake data before clinical or operational decisions are made based on that data.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">16.1 AI Accuracy</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI's voice agent is designed to perform reliably under normal operating conditions but does not guarantee 100% accuracy in all interactions. Factors such as background noise, accent variation, call quality, and unusual caller responses may affect performance. We commit to the accuracy and uptime targets specified in the applicable SOW's SLA schedule.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">16.2 Human Oversight Responsibility</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Client is solely responsible for maintaining appropriate human oversight of AI-generated intake data. PyrexxAI strongly recommends that clinical or operational decisions not be made solely on the basis of AI-captured data without human verification, particularly for health-related information.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">16.3 AI Model Updates</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI may update the underlying AI models and platform technology that power your voice agent to improve performance, fix errors, or maintain regulatory compliance. We will provide reasonable advance notice of updates that may materially change agent behavior, and will work with you to re-test configurations where warranted.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">16.4 Compliance with Emerging AI Regulation</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          AI regulation is an evolving area of law. PyrexxAI monitors developments in AI-specific regulation (including FTC guidance, state AI disclosure laws, and sector-specific healthcare AI rules) and will update its practices and notify clients of changes that affect your compliance obligations. Client is ultimately responsible for ensuring that its use of AI-powered tools complies with all laws applicable to its business and jurisdiction.
        </p>

        {/* 17. PUBLICITY & REFERENCES */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">17. PUBLICITY & REFERENCES</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          By entering into a service agreement with PyrexxAI, you grant us a non-exclusive, royalty-free license to identify you as a client in our marketing materials, website, pitch decks, and case studies. We will not misrepresent the scope or results of your engagement. You may revoke this right at any time by written notice to marketing@pyrexxai.com, effective within ten (10) business days of receipt.
        </p>

        {/* 18. GENERAL PROVISIONS */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">18. GENERAL PROVISIONS</h2>
        
        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">18.1 Entire Agreement</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          For website visitors, these Terms constitute the entire agreement between you and PyrexxAI regarding your use of the Site. For clients with executed service agreements, these Terms are supplemented by the MSA, SOW, BAA, and DPA, which together constitute the entire agreement. In the event of a conflict between these Terms and an executed MSA, the MSA governs.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">18.2 Severability</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          If any provision of these Terms is found to be unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in full force.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">18.3 Waiver</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Our failure to enforce any right or provision of these Terms is not a waiver of that right or provision. Waivers must be in writing and signed by an authorized PyrexxAI representative.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">18.4 Assignment</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          You may not assign these Terms or any rights or obligations hereunder without PyrexxAI's prior written consent. PyrexxAI may assign these Terms in connection with a merger, acquisition, or sale of all or substantially all of its assets, with thirty (30) days' prior written notice.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">18.5 Notices</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Notices to PyrexxAI under these Terms should be sent to legal@pyrexxai.com. We will send notices to you at the email address associated with your account or provided in your MSA. Notices are effective upon confirmed receipt.
        </p>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">18.6 Relationship of Parties</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          These Terms do not create any partnership, joint venture, employment, franchise, or agency relationship between you and PyrexxAI. PyrexxAI is an independent contractor.
        </p>

        {/* 19. CHANGES TO THESE TERMS */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">19. CHANGES TO THESE TERMS</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          PyrexxAI may revise these Terms from time to time. When we make changes, we will:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li className="leading-relaxed">Update the 'Last Updated' date at the top of this document;</li>
          <li className="leading-relaxed">Post a notice on our website for at least thirty (30) days after the revised Terms take effect;</li>
          <li className="leading-relaxed">For material changes affecting existing clients, provide at least fourteen (14) days' advance email notice to the address on file.</li>
        </ul>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Your continued use of our website or Services after the effective date of revised Terms constitutes acceptance. If you do not agree to the revised Terms, you must stop using the Services and may terminate per Section 9.2. For clients in an active subscription, termination due solely to a material change in Terms will not trigger early termination fees.
        </p>

        {/* 20. CONTACT INFORMATION */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">20. CONTACT INFORMATION</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          For questions, concerns, or notices related to these Terms of Service, please contact us:
        </p>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Contact Type</th>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Contact Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Legal / Terms Inquiries</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"><a href="mailto:legal@pyrexxai.com" className="text-brand-600 dark:text-brand-400 hover:underline">legal@pyrexxai.com</a></td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Privacy Inquiries</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"><a href="mailto:privacy@pyrexxai.com" className="text-brand-600 dark:text-brand-400 hover:underline">privacy@pyrexxai.com</a></td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">General Support</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"><a href="mailto:support@pyrexxai.com" className="text-brand-600 dark:text-brand-400 hover:underline">support@pyrexxai.com</a></td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Website</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"><a href="https://www.pyrexxai.com" className="text-brand-600 dark:text-brand-400 hover:underline">www.pyrexxai.com</a></td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Response Time</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Within 5 business days for general inquiries</td>
              </tr>
            </tbody>
          </table>
        </div>

      </section>
      
      <Footer />
    </main>
  );
}