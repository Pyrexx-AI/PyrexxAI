import { createClient, SupabaseClient } from "@supabase/supabase-js";

export interface LeadRecord {
  id?: string;
  name: string;
  email: string;
  clinic: string;
  practice_type?: string;
  call_volume?: string;
  message?: string;
  source: "contact_form" | "booking_widget" | "ai_assistant";
  status: "new" | "qualified" | "contacted" | "booked" | "abandoned";
  created_at?: string;
  metadata?: Record<string, unknown>;
}

export interface BookingRecord {
  id?: string;
  lead_email: string;
  lead_name: string;
  clinic_name: string;
  phone?: string;
  slot_time: string;
  status: "confirmed" | "cancelled" | "pending";
  cal_booking_id: string;
  created_at?: string;
}

export interface PersistenceResult {
  success: boolean;
  id?: string;
  error?: string;
}

let supabaseInstance: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key || typeof url !== "string" || !url.startsWith("http")) {
    return null;
  }

  try {
    if (!supabaseInstance) {
      supabaseInstance = createClient(url.trim(), key.trim(), {
        auth: { persistSession: false },
      });
    }
    return supabaseInstance;
  } catch (err) {
    console.error("[SUPABASE_INIT_ERROR] Client instantiation failed:", err);
    return null;
  }
}

export async function persistLead(lead: LeadRecord): Promise<PersistenceResult> {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) {
      console.error("[SUPABASE_CONFIG_ERROR] Missing valid Supabase environment variables.");
      return { success: false, error: "Database client configuration missing" };
    }

    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          name: lead.name.trim(),
          email: lead.email.toLowerCase().trim(),
          clinic: lead.clinic.trim(),
          practice_type: lead.practice_type || "MedSpa",
          call_volume: lead.call_volume || "100-500",
          message: lead.message?.trim() || "",
          source: lead.source,
          status: lead.status || "new",
          metadata: lead.metadata || {},
          created_at: new Date().toISOString(),
        },
      ])
      .select("id")
      .single();

    if (error) {
      console.error("[SUPABASE_WRITE_ERROR] leads insert failure:", error.message, error.details);
      return { success: false, error: error.message };
    }

    return { success: true, id: data?.id };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown database error";
    console.error("[SUPABASE_EXCEPTION] Error during persistLead:", message);
    return { success: false, error: message };
  }
}

export async function persistBooking(booking: BookingRecord): Promise<PersistenceResult> {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) {
      console.error("[SUPABASE_CONFIG_ERROR] Missing valid Supabase environment variables.");
      return { success: false, error: "Database client configuration missing" };
    }

    const { data, error } = await supabase
      .from("bookings")
      .insert([
        {
          lead_email: booking.lead_email.toLowerCase().trim(),
          lead_name: booking.lead_name.trim(),
          clinic_name: booking.clinic_name.trim(),
          phone: booking.phone?.trim() || "",
          slot_time: booking.slot_time,
          status: booking.status,
          cal_booking_id: booking.cal_booking_id,
          created_at: new Date().toISOString(),
        },
      ])
      .select("id")
      .single();

    if (error) {
      console.error("[SUPABASE_WRITE_ERROR] bookings insert failure:", error.message, error.details);
      return { success: false, error: error.message };
    }

    return { success: true, id: data?.id };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown database error";
    console.error("[SUPABASE_EXCEPTION] Error during persistBooking:", message);
    return { success: false, error: message };
  }
}