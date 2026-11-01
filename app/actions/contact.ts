"use server";

import React from "react";
import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactTemplate from "@/components/emails/ContactTemplate";
import { persistLead } from "@/lib/supabase";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getResend = () => {
  const key = process.env.RESEND_API_KEY;
  return key ? new Resend(key.trim()) : null;
};

interface FormSubmissionPayload {
  name: string;
  email: string;
  clinic: string;
  practiceType: string;
  callVolume: string;
  message: string;
  hasCallSoftware: string;
  callSoftwareName: string;
}

function generateProspectAutoresponderHtml(payload: FormSubmissionPayload): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head><meta charset="utf-8" /></head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F9FAFB; padding: 24px; color: #111827; margin: 0;">
        <div style="max-width: 580px; margin: 0 auto; background: #FFFFFF; padding: 36px 32px; border-radius: 16px; border: 1px solid #E5E7EB; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
          <div style="display: flex; align-items: center; margin-bottom: 24px;">
            <div style="background: #2563EB; color: #FFFFFF; font-weight: 800; border-radius: 8px; width: 32px; height: 32px; display: inline-flex; align-items: center; justify-content: center; font-size: 16px; margin-right: 10px;">PX</div>
            <span style="font-weight: 700; font-size: 18px; color: #111827;">PyrexxAI</span>
          </div>

          <h2 style="font-size: 22px; color: #111827; margin: 0 0 12px 0;">We have received your clinical inquiry, ${escapeHtml(payload.name.split(" ")[0])}.</h2>
          
          <p style="font-size: 15px; line-height: 1.6; color: #4B5563; margin: 0 0 20px 0;">
            Thank you for reaching out regarding voice automation for <strong>${escapeHtml(payload.clinic)}</strong>. Our engineering team is currently reviewing your EMR configuration and intake requirements.
          </p>

          <div style="background: #EEF3FF; border-left: 4px solid #2563EB; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
            <h4 style="margin: 0 0 6px 0; font-size: 14px; color: #1D4ED8; text-transform: uppercase; letter-spacing: 0.05em;">What Happens Next</h4>
            <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #374151;">
              A senior voice architecture specialist will analyze your call volume (${escapeHtml(payload.callVolume)} calls/mo) and prepare a dedicated integration blueprint within 24 hours.
            </p>
          </div>

          <p style="font-size: 15px; line-height: 1.6; color: #4B5563; margin: 0 0 28px 0;">
            Need immediate deployment or want to hear how your practice's voice agent sounds live? You can secure your 15-minute technical discovery session below:
          </p>

          <div style="text-align: center; margin-bottom: 28px;">
            <a href="https://pyrexxai.com/book-demo" style="background: #2563EB; color: #FFFFFF; font-weight: 600; font-size: 15px; padding: 14px 28px; border-radius: 99px; text-decoration: none; display: inline-block;">
              Schedule 15-Min Discovery Session &rarr;
            </a>
          </div>

          <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 24px 0;" />
          <p style="font-size: 12px; color: #9CA3AF; margin: 0;">
            PyrexxAI Inc. · HIPAA Compliant Clinical Voice Infrastructure · Delaware Incorporated<br />
            Have questions? Reply directly to this email or contact us at <a href="mailto:hello@pyrexxai.com" style="color: #2563EB;">hello@pyrexxai.com</a>.
          </p>
        </div>
      </body>
    </html>
  `.trim();
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function dispatchWebhookNotification(payload: FormSubmissionPayload): Promise<boolean> {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL || process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) return false;

  try {
    const textMessage = `🚨 *New PyrexxAI Lead Inbound*\n*Name:* ${payload.name}\n*Email:* ${payload.email}\n*Clinic:* ${payload.clinic} (${payload.practiceType})\n*Call Software:* ${payload.hasCallSoftware === "yes" ? payload.callSoftwareName : "None"}\n*Volume:* ${payload.callVolume}\n*Scope:* ${payload.message}`;

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: textMessage, content: textMessage }),
      signal: AbortSignal.timeout(5000),
    });
    return res.ok;
  } catch (err) {
    console.error("[WEBHOOK_ALERT_FAILED] Secondary alert error:", err);
    return false;
  }
}

export async function submitContactForm(_prevState: unknown, formData: FormData): Promise<{
  success: boolean;
  message: string;
}> {
  const startTime = Date.now();
  try {
    const honeypot = formData.get("website") as string;
    if (honeypot) {
      console.log("[AUDIT_TELEMETRY] Honeypot triggered. Bot submission safely absorbed.");
      return { success: true, message: "Your inquiry has been securely submitted." };
    }

    const name = ((formData.get("name") as string) || "").trim();
    const email = ((formData.get("email") as string) || "").trim().toLowerCase();
    const clinic = ((formData.get("clinic") as string) || "").trim();
    const practiceType = ((formData.get("practiceType") as string) || "MedSpa").trim();
    const callVolume = ((formData.get("callVolume") as string) || "100-500").trim();
    const message = ((formData.get("message") as string) || "").trim();
    const hasCallSoftware = ((formData.get("hasCallSoftware") as string) || "no").trim();
    const callSoftwareName = ((formData.get("callSoftwareName") as string) || "").trim();

    if (!name || !email || !clinic || !message) {
      return { success: false, message: "Please fill out all required fields." };
    }

    if (!EMAIL_REGEX.test(email)) {
      return { success: false, message: "Please enter a valid work email address." };
    }

    const payload: FormSubmissionPayload = {
      name,
      email,
      clinic,
      practiceType,
      callVolume,
      message,
      hasCallSoftware,
      callSoftwareName,
    };

    console.log(`[AUDIT_TELEMETRY] [contact_inbound_initiated] Prospect: ${name} (${email}) | Clinic: ${clinic}`);

    // Tier 1: Supabase persistence
    const dbResult = await persistLead({
      name,
      email,
      clinic,
      practice_type: practiceType,
      call_volume: callVolume,
      message,
      source: "contact_form",
      status: "new",
      metadata: {
        has_call_software: hasCallSoftware === "yes",
        call_software_name: callSoftwareName || null,
      },
    });

    // Tier 2: Real-time webhook notification
    const webhookDispatched = await dispatchWebhookNotification(payload);

    // Tier 3: Transactional emails via Resend
    let internalEmailDispatched = false;
    let prospectEmailDispatched = false;
    const resend = getResend();

    if (resend) {
      // Internal sales team alert
      try {
        let internalHtml: string;
        try {
          internalHtml = await render(React.createElement(ContactTemplate, payload));
        } catch {
          internalHtml = `<p>Lead from <b>${escapeHtml(clinic)}</b> (${escapeHtml(name)} - ${escapeHtml(email)})</p><p>${escapeHtml(message)}</p>`;
        }

        const internalRes = await resend.emails.send({
          from: "PyrexxAI Leads <leads@pyrexxai.com>",
          to: ["hello@pyrexxai.com"],
          replyTo: email,
          subject: `New Enterprise Lead: ${clinic} (${practiceType})`,
          html: internalHtml,
        });
        internalEmailDispatched = !internalRes.error;
      } catch (err) {
        console.error("[RESEND_INTERNAL_EXCEPTION]:", err);
      }

      // Prospect confirmation autoresponder
      try {
        const prospectRes = await resend.emails.send({
          from: "PyrexxAI Discovery <hello@pyrexxai.com>",
          to: [email],
          subject: `Inquiry Received: Voice Architecture for ${clinic}`,
          html: generateProspectAutoresponderHtml(payload),
        });
        prospectEmailDispatched = !prospectRes.error;
      } catch (err) {
        console.error("[RESEND_PROSPECT_EXCEPTION]:", err);
      }
    }

    console.log(`[AUDIT_TELEMETRY] [contact_inbound_resolved] Total time: ${Date.now() - startTime}ms | DB: ${dbResult.success} | Webhook: ${webhookDispatched} | InternalAlert: ${internalEmailDispatched} | ProspectOutreach: ${prospectEmailDispatched}`);

    if (dbResult.success || webhookDispatched || internalEmailDispatched || prospectEmailDispatched) {
      return {
        success: true,
        message: "Your inquiry has been recorded. Our engineering team will review your EMR requirements and reach out within 24 hours.",
      };
    }

    return {
      success: false,
      message: "Unable to submit your inquiry at this moment. Please email hello@pyrexxai.com or book a discovery call directly.",
    };
  } catch (err) {
    console.error("[CONTACT_ACTION_CRITICAL] Server action exception:", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again or book a discovery call directly.",
    };
  }
}