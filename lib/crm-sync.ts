import { getSupabaseClient } from "@/lib/supabase";

export interface CrmSyncPayload {
  name: string;
  email: string;
  clinic: string;
  phone?: string;
  practiceType?: string;
  practice_type?: string;
  callVolume?: string;
  call_volume?: string;
  message?: string;
  source: "contact_form" | "booking_widget";
  slotTime?: string;
  emr?: string;
  hasCallSoftware?: boolean;
  has_call_software?: boolean;
  callSoftwareName?: string;
  call_software_name?: string;
  [key: string]: any; // Prevents excess property check errors during compilation
}

export async function syncLeadToSharedCrm(payload: CrmSyncPayload): Promise<{
  success: boolean;
  contactId?: string;
  dealId?: string;
  threadId?: string;
  eventId?: string;
  error?: string;
}> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return { success: false, error: "Database client unavailable" };
  }

  try {
    // 1. Resolve Master Agency Organization ID
    const { data: agencyOrg, error: orgError } = await supabase
      .from("organizations")
      .select("id, name, slug")
      .eq("type", "agency")
      .order("created_at", { ascending: true })
      .limit(1)
      .maybeSingle();

    if (orgError || !agencyOrg) {
      console.warn("[CRM_SYNC_WARN] No master agency organization found. Skipping CRM link:", orgError?.message);
      return { success: false, error: "Master agency org not found" };
    }

    const orgId = agencyOrg.id;
    const cleanEmail = payload.email.toLowerCase().trim();
    const parts = payload.name.trim().split(/\s+/);
    const firstName = parts[0] || "Prospect";
    const lastName = parts.slice(1).join(" ") || "Lead";
    const resolvedPracticeType = payload.practiceType || payload.practice_type || "MedSpa";
    const resolvedCallVolume = payload.callVolume || payload.call_volume || "100-500";
    const resolvedCallSoftware = payload.hasCallSoftware ?? payload.has_call_software ?? false;
    const resolvedCallSoftwareName = payload.callSoftwareName || payload.call_software_name || null;

    // 2. Upsert Contact in CRM
    let contactId: string | null = null;
    const { data: existingContact } = await supabase
      .from("contacts")
      .select("id, custom_fields")
      .eq("org_id", orgId)
      .eq("email", cleanEmail)
      .maybeSingle();

    if (existingContact) {
      contactId = existingContact.id;
      await supabase
        .from("contacts")
        .update({
          phone: payload.phone || undefined,
          custom_fields: {
            ...(existingContact.custom_fields || {}),
            clinic_name: payload.clinic,
            practice_type: resolvedPracticeType,
            emr_target: payload.emr || "Jane App",
            monthly_call_volume: resolvedCallVolume,
            has_call_software: resolvedCallSoftware,
            call_software_name: resolvedCallSoftwareName,
          },
        })
        .eq("id", contactId);
    } else {
      const { data: newContact, error: contactInsertErr } = await supabase
        .from("contacts")
        .insert({
          org_id: orgId,
          first_name: firstName,
          last_name: lastName,
          email: cleanEmail,
          phone: payload.phone || null,
          type: "lead",
          stage: payload.source === "booking_widget" ? "Demo Scheduled" : "New Lead",
          custom_fields: {
            clinic_name: payload.clinic,
            practice_type: resolvedPracticeType,
            emr_target: payload.emr || "Jane App",
            monthly_call_volume: resolvedCallVolume,
            has_call_software: resolvedCallSoftware,
            call_software_name: resolvedCallSoftwareName,
          },
        })
        .select("id")
        .single();

      if (contactInsertErr || !newContact) {
        console.error("[CRM_SYNC_ERROR] Contact insert failure:", contactInsertErr);
        return { success: false, error: contactInsertErr?.message };
      }
      contactId = newContact.id;
    }

    // 3. Upsert / Create Deal in CRM Pipeline
    let dealId: string | null = null;
    const dealStage = payload.source === "booking_widget" ? "Demo Scheduled" : "New Lead";
    const dealName = `${payload.clinic} - Voice Intake (${resolvedPracticeType})`;

    const { data: newDeal } = await supabase
      .from("deals")
      .insert({
        org_id: orgId,
        contact_id: contactId,
        name: dealName,
        value: 1500, // Standard Implementation Fee
        stage: dealStage,
        next_action: payload.source === "booking_widget" 
          ? `Host 15-min discovery call on ${payload.slotTime}` 
          : "Review scope and dispatch voice integration proposal",
      })
      .select("id")
      .maybeSingle();

    if (newDeal) dealId = newDeal.id;

    // 4. Create Inbox Thread & Inbound Message in CRM
    let threadId: string | null = null;
    const { data: existingThread } = await supabase
      .from("threads")
      .select("id")
      .eq("org_id", orgId)
      .eq("contact_id", contactId)
      .eq("channel", "email")
      .maybeSingle();

    if (existingThread) {
      threadId = existingThread.id;
    } else {
      const { data: createdThread } = await supabase
        .from("threads")
        .insert({
          org_id: orgId,
          contact_id: contactId,
          channel: "email",
          subject: payload.source === "booking_widget" 
            ? `Discovery Call: ${payload.clinic}` 
            : `Web Inquiry: ${payload.clinic}`,
          is_unread: true,
          preview: payload.message?.slice(0, 100) || "New clinic lead submission",
        })
        .select("id")
        .maybeSingle();

      if (createdThread) threadId = createdThread.id;
    }

    if (threadId && payload.message) {
      await supabase.from("messages").insert({
        thread_id: threadId,
        direction: "inbound",
        content: payload.message,
      });
    }

    // 5. If Booking, Insert into Shared calendar_events Table
    let eventId: string | null = null;
    if (payload.source === "booking_widget" && payload.slotTime) {
      const startTime = new Date(payload.slotTime);
      const endTime = new Date(startTime.getTime() + 15 * 60 * 1000);

      const { data: calendarEvent } = await supabase
        .from("calendar_events")
        .insert({
          org_id: orgId,
          contact_id: contactId,
          deal_id: dealId,
          title: `Discovery Call: ${payload.clinic}`,
          description: `15-minute technical discovery session with ${payload.name} (${payload.clinic}). EMR: ${payload.emr || "Jane App"}.`,
          location: "Google Meet",
          start_time: startTime.toISOString(),
          end_time: endTime.toISOString(),
          status: "confirmed",
        })
        .select("id")
        .maybeSingle();

      if (calendarEvent) eventId = calendarEvent.id;
    }

    console.info(`[AUDIT_TELEMETRY] [crm_sync_success] Contact: ${contactId} | Deal: ${dealId} | Thread: ${threadId} | Event: ${eventId}`);

    return {
      success: true,
      contactId: contactId || undefined,
      dealId: dealId || undefined,
      threadId: threadId || undefined,
      eventId: eventId || undefined,
    };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "CRM sync exception";
    console.error("[CRM_SYNC_EXCEPTION]:", msg);
    return { success: false, error: msg };
  }
}