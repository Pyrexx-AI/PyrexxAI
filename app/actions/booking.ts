"use server";

import { Resend } from "resend";
import { persistBooking, persistLead } from "@/lib/supabase";
import { syncLeadToSharedCrm } from "@/lib/crm-sync";

export interface BookingPayload {
  name: string;
  email: string;
  clinic: string;
  phone?: string;
  emr?: string;
  callVolume?: string;
  slotTime: string;
  timezone?: string;
}

const getResend = () => {
  const key = process.env.RESEND_API_KEY;
  return key ? new Resend(key.trim()) : null;
};

function formatAppointmentDate(isoString: string): { formattedDate: string; formattedTime: string } {
  try {
    const d = new Date(isoString);
    const formattedDate = d.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "America/New_York",
    });
    const formattedTime = d.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/New_York",
      timeZoneName: "short",
    });
    return { formattedDate, formattedTime };
  } catch {
    return { formattedDate: isoString, formattedTime: "Scheduled Time" };
  }
}

function generateBookingConfirmationHtml(payload: BookingPayload, bookingId: string): string {
  const { formattedDate, formattedTime } = formatAppointmentDate(payload.slotTime);

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

          <div style="display: inline-block; background: #ECFDF5; border: 1px solid #A7F3D0; color: #065F46; font-size: 12px; font-weight: 700; text-transform: uppercase; padding: 4px 12px; border-radius: 99px; margin-bottom: 16px;">
            Confirmed Discovery Call
          </div>

          <h2 style="font-size: 24px; color: #111827; margin: 0 0 12px 0;">Your technical consultation is confirmed, ${escapeHtml(payload.name.split(" ")[0])}.</h2>
          
          <p style="font-size: 15px; line-height: 1.6; color: #4B5563; margin: 0 0 24px 0;">
            We have reserved a 15-minute technical discovery session for <strong>${escapeHtml(payload.clinic)}</strong> to review your EMR workflow (${escapeHtml(payload.emr || "Jane App")}) and evaluate our custom AI voice agent.
          </p>

          <div style="background: #F3F4F6; border-radius: 12px; padding: 20px; margin-bottom: 24px; border: 1px solid #E5E7EB;">
            <div style="margin-bottom: 12px;">
              <span style="display: block; font-size: 12px; text-transform: uppercase; color: #6B7280; font-weight: 700;">Date & Time</span>
              <strong style="font-size: 16px; color: #111827;">${formattedDate} · ${formattedTime}</strong>
            </div>
            <div style="margin-bottom: 12px;">
              <span style="display: block; font-size: 12px; text-transform: uppercase; color: #6B7280; font-weight: 700;">Meeting Format</span>
              <span style="font-size: 14px; color: #111827;">Google Meet (Video Conference) — Link will activate at session start</span>
            </div>
            <div>
              <span style="display: block; font-size: 12px; text-transform: uppercase; color: #6B7280; font-weight: 700;">Reference ID</span>
              <span style="font-family: monospace; font-size: 13px; color: #2563EB;">${escapeHtml(bookingId)}</span>
            </div>
          </div>

          <h4 style="font-size: 14px; color: #111827; margin: 0 0 10px 0;">Discovery Agenda (15 Minutes):</h4>
          <ul style="font-size: 14px; line-height: 1.6; color: #4B5563; padding-left: 20px; margin: 0 0 24px 0;">
            <li>Live demonstration of PyrexxAI taking patient calls and handling pricing questions</li>
            <li>Technical mapping into your ${escapeHtml(payload.emr || "Jane App")} calendar without double-bookings</li>
            <li>Review of the HIPAA Business Associate Agreement (BAA) and our 14-day deployment protocol</li>
          </ul>

          <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 24px 0;" />
          <p style="font-size: 12px; color: #9CA3AF; margin: 0;">
            Need to reschedule? Reply directly to this email or reach us at <a href="mailto:hello@pyrexxai.com" style="color: #2563EB;">hello@pyrexxai.com</a>.<br />
            PyrexxAI · AI Voice Receptionists for Healthcare · Delaware Incorporated
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

export async function submitBookingAction(payload: BookingPayload): Promise<{
  success: boolean;
  bookingId?: string;
  message?: string;
}> {
  const startTime = Date.now();
  try {
    if (!payload || typeof payload !== "object") {
      return { success: false, message: "Invalid booking payload." };
    }

    const {
      name = "",
      email = "",
      clinic = "",
      phone = "",
      emr = "Jane App",
      callVolume = "100-500",
      slotTime = "",
      timezone = "America/New_York",
    } = payload;

    if (!name.trim() || !email.trim() || !slotTime.trim()) {
      return { success: false, message: "Missing required booking details (name, email, or time slot)." };
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();
    const cleanClinic = clinic.trim() || "Medical Practice";

    console.log(`[AUDIT_TELEMETRY] [booking_attempt] Lead: ${cleanName} (${cleanEmail}) | Slot: ${slotTime} | EMR: ${emr}`);

    // Tier 1: Lead persistence
    await persistLead({
      name: cleanName,
      email: cleanEmail,
      clinic: cleanClinic,
      practice_type: emr,
      call_volume: callVolume,
      source: "booking_widget",
      status: "booked",
      metadata: { phone, slotTime, timezone },
    });

    let calBookingId = `px-book-${Date.now()}`;

    // Tier 2: Cal.com API v2 reservation
    const calApiKey = process.env.CAL_API_KEY;
    const eventTypeId = process.env.CAL_EVENT_TYPE_ID;

    if (calApiKey && eventTypeId) {
      try {
        const calRes = await fetch("https://api.cal.com/v2/bookings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${calApiKey.trim()}`,
            "cal-api-version": "2024-08-13",
          },
          body: JSON.stringify({
            eventTypeId: Number(eventTypeId),
            start: slotTime,
            attendee: {
              name: cleanName,
              email: cleanEmail,
              timeZone: timezone,
              phoneNumber: phone,
            },
            metadata: { clinic: cleanClinic, emr, callVolume },
          }),
        });

        if (calRes.ok) {
          const calData = await calRes.json();
          calBookingId = calData?.data?.id || calBookingId;
        } else {
          console.warn("[CAL_COM_API_WARNING] Non-200 upstream response:", await calRes.text());
        }
      } catch (err) {
        console.warn("[CAL_COM_API_EXCEPTION] Cal reservation fallback applied:", err);
      }
    }

    // Tier 3: Record confirmed booking in Supabase
    await persistBooking({
      lead_name: cleanName,
      lead_email: cleanEmail,
      clinic_name: cleanClinic,
      phone,
      slot_time: slotTime,
      status: "confirmed",
      cal_booking_id: String(calBookingId),
    });
		
		await syncLeadToSharedCrm({
			name: cleanName,
			email: cleanEmail,
			clinic: cleanClinic,
			phone,
			emr,
			callVolume,
			slotTime,
			source: "booking_widget",
			message: `Booked discovery session for ${slotTime}. Ref: ${calBookingId}`,
		});

    // Tier 4: Direct prospect calendar confirmation email
    const resend = getResend();
    if (resend) {
      try {
        await resend.emails.send({
          from: "PyrexxAI Discovery <hello@pyrexxai.com>",
          to: [cleanEmail],
          subject: `Discovery Call Confirmed: PyrexxAI & ${cleanClinic}`,
          html: generateBookingConfirmationHtml(payload, String(calBookingId)),
        });
        console.log(`[AUDIT_TELEMETRY] [booking_confirmation_emailed] Dispatched to ${cleanEmail}`);
      } catch (err) {
        console.error("[BOOKING_EMAIL_EXCEPTION] Failed to send prospect confirmation:", err);
      }
    }

    console.log(`[AUDIT_TELEMETRY] [booking_resolved] Duration: ${Date.now() - startTime}ms | BookingID: ${calBookingId}`);

    return {
      success: true,
      bookingId: String(calBookingId),
      message: "Discovery call confirmed successfully.",
    };
  } catch (error) {
    console.error("[BOOKING_CRITICAL_ERROR]:", error);
    return {
      success: false,
      message: "An unexpected error occurred while scheduling your appointment.",
    };
  }
}