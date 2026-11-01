import { getSupabaseClient } from "@/lib/supabase";

export interface KnowledgeItem {
  id: string;
  category: "pricing" | "integrations" | "hipaa" | "timeline" | "telephony" | "services";
  title: string;
  content: string;
  keywords: string[];
}

/**
 * Built-in authoritative knowledge base.
 * Acts as the high-speed baseline and offline fallback.
 */
export const EMBEDDED_KNOWLEDGE_BASE: KnowledgeItem[] = [
  {
    id: "pricing_structure",
    category: "pricing",
    title: "Pricing & Retainer Structure",
    content: "PyrexxAI requires a $1,500 one-time setup and onboarding fee, followed by a flat $1,000 per month platform management retainer. This covers 24/7 unlimited concurrent calls with zero hold times, weekly voice logic tuning, custom EMR integration, and complete HIPAA compliance.",
    keywords: ["cost", "price", "pricing", "fee", "setup", "how much", "rate", "expensive", "monthly", "retainer", "budget", "package"],
  },
  {
    id: "database_reactivation_pricing",
    category: "pricing",
    title: "Database Reactivation Commercials",
    content: "Database reactivation is 100% commission-only with zero upfront fees. The clinic only pays a pre-agreed commission when a dormant patient actually books and shows up for their treatment.",
    keywords: ["reactivation", "dormant", "commission", "risk-free", "past patients", "shows"],
  },
  {
    id: "timeline_sla",
    category: "timeline",
    title: "Implementation Timeline",
    content: "PyrexxAI goes live in exactly 14 business days from the kickoff call. During these 14 days, we map your clinical intake workflows, train your custom voice agent on your procedures, and build native API bridges directly into your EMR.",
    keywords: ["timeline", "how long", "go live", "live", "duration", "fast", "deploy", "setup time", "schedule", "when"],
  },
  {
    id: "emr_integrations",
    category: "integrations",
    title: "EMR & Practice Management Integrations",
    content: "PyrexxAI builds native read/write API bridges with Jane App, Boulevard, Mindbody, eClinicalWorks, and AthenaHealth. The voice agent reads real-time practitioner availability, verifies procedure durations, and writes confirmed bookings directly to your schedule with zero double-bookings. No fragile webhooks are used.",
    keywords: ["emr", "ehr", "jane", "jane app", "boulevard", "mindbody", "athena", "eclinicalworks", "software", "calendar", "integration", "sync", "double booking"],
  },
  {
    id: "hipaa_compliance",
    category: "hipaa",
    title: "HIPAA Security & BAA Commitment",
    content: "PyrexxAI is 100% HIPAA and HITECH compliant. We execute a signed Business Associate Agreement (BAA) with every clinic before deployment. All voice and text data is encrypted in transit using TLS 1.3 and at rest using AES-256. Zero Protected Health Information (PHI) is ever used to train public foundation models.",
    keywords: ["hipaa", "compliance", "baa", "security", "privacy", "phi", "encryption", "safe", "legal", "protect", "confidential"],
  },
  {
    id: "telephony_capacity",
    category: "telephony",
    title: "Concurrent Calls & Phone Forwarding",
    content: "PyrexxAI handles unlimited concurrent inbound calls simultaneously, completely eliminating hold music and voicemail. Clinics keep their existing phone numbers and VOIP systems; we configure conditional call forwarding for after-hours or when staff are busy.",
    keywords: ["concurrent", "multiple calls", "busy", "phone number", "voip", "forwarding", "hold time", "voicemail", "simultaneous"],
  },
  {
    id: "triage_and_rescheduling",
    category: "services",
    title: "Emergency Triage & Rescheduling",
    content: "Patients can call 24/7 to reschedule or cancel existing appointments automatically. For medical emergencies, custom routing rules instantly forward urgent callers to an on-call physician or provide emergency bypass protocols.",
    keywords: ["emergency", "reschedule", "cancel", "after hours", "triage", "urgent", "doctor", "move appointment"],
  },
];

// In-memory cache for live database overrides (5-minute TTL)
let dbKnowledgeCache: KnowledgeItem[] | null = null;
let lastCacheFetch = 0;
const CACHE_TTL_MS = 5 * 60 * 1000;

/**
 * Fetches dynamic overrides from the shared Supabase `company_knowledge` table if present.
 */
async function fetchDatabaseKnowledge(): Promise<KnowledgeItem[]> {
  const now = Date.now();
  if (dbKnowledgeCache && now - lastCacheFetch < CACHE_TTL_MS) {
    return dbKnowledgeCache;
  }

  const supabase = getSupabaseClient();
  if (!supabase) return EMBEDDED_KNOWLEDGE_BASE;

  try {
    const { data, error } = await supabase
      .from("company_knowledge")
      .select("id, category, title, content, keywords")
      .eq("is_active", true)
      .abortSignal(AbortSignal.timeout(1200));

    if (error || !data || data.length === 0) {
      return EMBEDDED_KNOWLEDGE_BASE;
    }

    dbKnowledgeCache = data.map((d: any) => ({
      id: d.id,
      category: d.category,
      title: d.title,
      content: d.content,
      keywords: Array.isArray(d.keywords) ? d.keywords : [],
    }));
    lastCacheFetch = now;
    return dbKnowledgeCache;
  } catch {
    return EMBEDDED_KNOWLEDGE_BASE;
  }
}

/**
 * Dynamic Knowledge Retrieval Engine.
 * Tokenizes the user's latest query, ranks relevant knowledge items,
 * and compiles dynamic factual context for prompt grounding.
 */
export async function getRelevantKnowledge(userQuery: string): Promise<string> {
  const knowledgeBase = await fetchDatabaseKnowledge();
  const normalizedQuery = userQuery.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
  const queryTokens = normalizedQuery.split(/\s+/).filter((t) => t.length > 2);

  const scoredItems = knowledgeBase.map((item) => {
    let score = 0;
    // Check keyword matches
    for (const kw of item.keywords) {
      if (normalizedQuery.includes(kw.toLowerCase())) {
        score += 3;
      }
    }
    // Check token overlap in title and content
    for (const token of queryTokens) {
      if (item.title.toLowerCase().includes(token)) score += 2;
      if (item.content.toLowerCase().includes(token)) score += 1;
    }
    return { item, score };
  });

  // Sort by relevance score
  scoredItems.sort((a, b) => b.score - a.score);

  // Take top items with score > 0, or default to pricing + timeline if score is 0
  let selected = scoredItems.filter((s) => s.score > 0).slice(0, 3).map((s) => s.item);

  if (selected.length === 0) {
    selected = knowledgeBase.filter((k) => k.id === "pricing_structure" || k.id === "timeline_sla");
  }

  return selected
    .map((k) => `[VERIFIED KNOWLEDGE: ${k.title.toUpperCase()}]\n${k.content}`)
    .join("\n\n");
}