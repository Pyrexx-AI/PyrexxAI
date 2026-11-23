import { getSupabaseClient } from "@/lib/supabase";

export interface KnowledgeItem {
  id: string;
  category: "pricing" | "integrations" | "hipaa" | "timeline" | "telephony" | "services";
  title: string;
  content: string;
  keywords: string[];
}

interface DbKnowledgeRow {
  id: string;
  category: KnowledgeItem["category"];
  title: string;
  content: string;
  keywords: unknown;
}

export const EMBEDDED_KNOWLEDGE_BASE: KnowledgeItem[] = [
  {
    id: "pricing_structure",
    category: "pricing",
    title: "Pricing & Plans (Overflow vs Full-Time)",
    content:
      "Pyrexx AI offers two core AI Receptionist plans, both with a $1,000 one-time initial implementation and EMR integration setup fee: (1) Overflow AI Receptionist at $1,000/month for after-hours, weekend, and staff-break coverage; and (2) Full-Time AI Receptionist at $1,500/month covering 100% of inbound calls 24/7 with zero hold times, weekly voice tuning, and HIPAA compliance.",
    keywords: ["cost", "price", "pricing", "fee", "setup", "how much", "rate", "monthly", "retainer", "overflow", "full time", "package"],
  },
  {
    id: "database_reactivation_pricing",
    category: "pricing",
    title: "Database Reactivation (Free Subscription Add-On)",
    content:
      "Database reactivation is included as a FREE add-on for clinics on an active Pyrexx AI Receptionist subscription. Our AI reaches out to dormant patients who haven't visited in 6+ months to fill empty schedule slots automatically.",
    keywords: ["reactivation", "dormant", "free", "add-on", "past patients", "shows"],
  },
  {
    id: "timeline_sla",
    category: "timeline",
    title: "Implementation Timeline",
    content:
      "Pyrexx AI goes live in 14 business days from kickoff. During these 14 business days, we map your clinical intake workflows, train your custom voice agent on your procedures and insurance policies, and integrate directly with your EMR.",
    keywords: ["timeline", "how long", "go live", "live", "duration", "fast", "deploy", "setup time", "schedule", "when"],
  },
  {
    id: "emr_integrations",
    category: "integrations",
    title: "EMR & Practice Management Integrations",
    content:
      "Pyrexx AI supports private practice healthcare and wellness EMR/PMS platforms including Jane App, Boulevard, Mindbody, Open Dental, Dentrix, Eaglesoft, SimplePractice, TherapyNotes, ChiroTouch, ModMed, DrChrono, Cliniko, eClinicalWorks, and AthenaHealth. If a clinic uses another system, we engineer custom integration bridges during onboarding.",
    keywords: ["emr", "ehr", "pms", "jane", "boulevard", "mindbody", "dentrix", "open dental", "eaglesoft", "simplepractice", "therapynotes", "chirotouch", "athena", "eclinicalworks", "integration", "sync"],
  },
  {
    id: "hipaa_compliance",
    category: "hipaa",
    title: "HIPAA Security & BAA Commitment",
    content:
      "Pyrexx AI is HIPAA compliant by design and executes a signed Business Associate Agreement (BAA) before launch. Voice calls run on BAA-covered telephony and AI infrastructure encrypted with TLS 1.3 in transit and AES-256 at rest, with zero Protected Health Information (PHI) ever used to train public models.",
    keywords: ["hipaa", "compliance", "baa", "security", "privacy", "phi", "encryption", "safe", "legal", "protect"],
  },
  {
    id: "telephony_capacity",
    category: "telephony",
    title: "Concurrent Calls & Conditional Call Forwarding",
    content:
      "Pyrexx AI handles concurrent inbound calls simultaneously, eliminating hold music and voicemail. Clinics keep their existing phone numbers and VoIP systems; we configure Conditional Call Forwarding (CCF) for after-hours, busy lines, or full-time reception.",
    keywords: ["concurrent", "multiple calls", "busy", "phone number", "voip", "forwarding", "hold time", "voicemail"],
  },
  {
    id: "triage_and_rescheduling",
    category: "services",
    title: "Emergency Triage, 988 & Rescheduling",
    content:
      "Patients can call 24/7 to book, reschedule, or cancel appointments. Deterministic escalation rules forward urgent calls to a designated staff escalation line (never looping back to the main line), and behavioral health agents enforce immediate 988 crisis guardrails.",
    keywords: ["emergency", "reschedule", "cancel", "after hours", "triage", "urgent", "988", "crisis"],
  },
];

let cachedItems: KnowledgeItem[] | null = null;
let lastCacheFetch = 0;
const CACHE_TTL_MS = 5 * 60 * 1000;

async function fetchAgencyKnowledge(): Promise<KnowledgeItem[]> {
  const now = Date.now();
  if (cachedItems && now - lastCacheFetch < CACHE_TTL_MS) {
    return cachedItems;
  }

  const supabase = getSupabaseClient();
  if (!supabase) return EMBEDDED_KNOWLEDGE_BASE;

  try {
    const { data: agencyOrg } = await supabase
      .from("organizations")
      .select("id")
      .eq("type", "agency")
      .order("created_at", { ascending: true })
      .limit(1)
      .abortSignal(AbortSignal.timeout(1000))
      .maybeSingle();

    if (!agencyOrg?.id) {
      return EMBEDDED_KNOWLEDGE_BASE;
    }

    const [kbRes, profileRes] = await Promise.all([
      supabase
        .from("company_knowledge")
        .select("id, category, title, content, keywords")
        .eq("org_id", agencyOrg.id)
        .eq("is_active", true)
        .abortSignal(AbortSignal.timeout(1200)),
      supabase
        .from("company_profiles")
        .select("company_name, setup_fee, monthly_retainer, timeline_days, supported_emrs, support_email")
        .eq("org_id", agencyOrg.id)
        .abortSignal(AbortSignal.timeout(1200))
        .maybeSingle(),
    ]);

    const items: KnowledgeItem[] = [];

    if (profileRes.data) {
      const p = profileRes.data;
      const emrs = Array.isArray(p.supported_emrs) ? p.supported_emrs.join(", ") : "major EMR platforms";
      items.push({
        id: "company_profile_live",
        category: "pricing",
        title: `${p.company_name || "Pyrexx AI"} Live Commercial Profile`,
        content: `Initial implementation fee: $${p.setup_fee ?? 1000}. Plans: Overflow ($1,000/mo) and Full-Time ($1,500/mo, baseline $${p.monthly_retainer ?? 1000}/mo). Go-live SLA: ${p.timeline_days ?? 14} business days. Supported EMRs: ${emrs}. Support email: ${p.support_email || "support@pyrexxai.com"}.`,
        keywords: ["price", "pricing", "setup", "timeline", "emr", "support", "email", "days"],
      });
    }

    if (kbRes.data && kbRes.data.length > 0) {
      for (const d of kbRes.data as DbKnowledgeRow[]) {
        items.push({
          id: d.id,
          category: d.category,
          title: d.title,
          content: d.content,
          keywords: Array.isArray(d.keywords) ? d.keywords.map(String) : [],
        });
      }
    } else {
      items.push(...EMBEDDED_KNOWLEDGE_BASE);
    }

    cachedItems = items;
    lastCacheFetch = now;
    return items;
  } catch {
    return EMBEDDED_KNOWLEDGE_BASE;
  }
}

export async function getRelevantKnowledge(userQuery: string): Promise<string> {
  const knowledgeBase = await fetchAgencyKnowledge();
  const normalizedQuery = userQuery.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
  const queryTokens = normalizedQuery.split(/\s+/).filter((t) => t.length > 2);

  const scoredItems = knowledgeBase.map((item) => {
    let score = 0;
    for (const kw of item.keywords) {
      if (normalizedQuery.includes(kw.toLowerCase())) {
        score += 3;
      }
    }
    for (const token of queryTokens) {
      if (item.title.toLowerCase().includes(token)) score += 2;
      if (item.content.toLowerCase().includes(token)) score += 1;
    }
    return { item, score };
  });

  scoredItems.sort((a, b) => b.score - a.score);

  let selected = scoredItems.filter((s) => s.score > 0).slice(0, 3).map((s) => s.item);
  if (selected.length === 0) {
    selected = knowledgeBase
      .filter((k) => k.id === "company_profile_live" || k.id === "pricing_structure" || k.id === "timeline_sla")
      .slice(0, 3);
  }

  return selected
    .map((k) => `[VERIFIED KNOWLEDGE: ${k.title.toUpperCase()}]\n${k.content}`)
    .join("\n\n");
}