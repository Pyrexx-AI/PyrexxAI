"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Activity, BarChart3, CheckCircle2, Flame, Phone, Search, ShieldCheck, X } from "lucide-react";
import { BOOK_DEMO_HREF } from "@/lib/site";

type ActiveTab = "overview" | "calls" | "intents" | "transcripts" | "health";
type CallLog = {
  id: string;
  caller: string;
  time: string;
  duration: string;
  intent: string;
  sentiment: "Positive" | "Neutral" | "Negative";
  outcome: string;
  transcript: { role: "ai" | "user"; text: string }[];
};

const CALLS: CallLog[] = [
  {
    id: "C-9048", caller: "+1 (302) ***-1284", time: "10 mins ago", duration: "02:14", intent: "Book Appointment", sentiment: "Positive", outcome: "EMR Synced",
    transcript: [
      { role: "ai", text: "Hello! Thank you for calling Luxe Aesthetics. How can I help you today?" },
      { role: "user", text: "Hi, I'd like to book a dermal filler appointment with Dr. Jenkins next Wednesday." },
      { role: "ai", text: "I can absolutely help with that. Looking at our calendar for next Wednesday, June 10th, I have openings at 10:00 AM and 2:30 PM. Do either of those work?" },
      { role: "user", text: "2:30 PM works perfectly for me." },
      { role: "ai", text: "Perfect, I've reserved that slot for you and sent a confirmation text. We look forward to seeing you!" },
    ],
  },
  {
    id: "C-9047", caller: "+1 (415) ***-9821", time: "45 mins ago", duration: "01:05", intent: "Reschedule Booking", sentiment: "Neutral", outcome: "EMR Synced",
    transcript: [
      { role: "ai", text: "Hi there! Welcome to Luxe Aesthetics. What can I adjust for you?" },
      { role: "user", text: "Hey, I need to push my appointment today back by an hour if possible." },
      { role: "ai", text: "Let me check Dr. Jenkins' schedule. Yes, we can move you from 3:00 PM to 4:00 PM today. I've updated this in our system." },
      { role: "user", text: "Awesome, thank you so much." },
    ],
  },
  {
    id: "C-9046", caller: "+1 (646) ***-4432", time: "2 hours ago", duration: "03:45", intent: "HIPAA Queries", sentiment: "Neutral", outcome: "Info Provided",
    transcript: [
      { role: "ai", text: "Hello, Luxe Aesthetics. How may I assist you?" },
      { role: "user", text: "Hi, I'm calling to verify how my medical records are protected when booking online." },
      { role: "ai", text: "Our systems utilize fully HIPAA-compliant architecture. All personal data is fully encrypted at rest using AES-256 and never shared with unauthorized parties." },
      { role: "user", text: "Okay, that's exactly what I needed to hear. Thank you." },
    ],
  },
];

const INTENTS = [
  { name: "Schedule Appointment", count: 484, success: 98.4 },
  { name: "Reschedule / Move Booking", count: 212, success: 94.2 },
  { name: "HIPAA & Compliance Inquiries", count: 184, success: 100 },
  { name: "Treatment & Pricing FAQs", count: 110, success: 88.5 },
];

const TABS: { id: ActiveTab; label: string; icon: typeof Phone }[] = [
  { id: "overview", label: "Overview Metrics", icon: BarChart3 },
  { id: "calls", label: "Call Logger Feed", icon: Phone },
  { id: "intents", label: "Intent Map Analytics", icon: Activity },
  { id: "transcripts", label: "Live Transcripts", icon: Search },
  { id: "health", label: "EMR Pipeline Health", icon: ShieldCheck },
];

const sentimentTag = (s: CallLog["sentiment"]) => (s === "Positive" ? "tag--ok" : s === "Negative" ? "tag--warn" : "");

export default function DashboardClient() {
  const [tab, setTab] = useState<ActiveTab>("overview");
  const [term, setTerm] = useState("");
  const [selected, setSelected] = useState<CallLog | null>(null);

  const filtered = useMemo(() => {
    const q = term.trim().toLowerCase();
    return CALLS.filter((c) => c.caller.includes(term.trim()) || c.intent.toLowerCase().includes(q));
  }, [term]);

  return (
    <>
      <div className="demo-banner" style={{ marginBottom: 14 }}>
        <p style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Flame className="icon" style={{ color: "var(--violet)" }} aria-hidden="true" />
          <span>
            <b>Explore PyrexxAI Command Center (Live Demonstration)</b>
            <span>This is a fully featured model of your future client dashboard. Book a consultation to activate this system for your practice.</span>
          </span>
        </p>
        <Link href={BOOK_DEMO_HREF} className="btn btn--primary">Request Setup &rarr;</Link>
      </div>

      <div className="dash">
        <aside>
          <div className="dash__nav" role="tablist" aria-label="Dashboard sections" aria-orientation="vertical">
            <span className="tag tag--ok" style={{ margin: "6px 8px", flex: "none" }}>
              <i className="live-dot" style={{ width: 8, height: 8 }} aria-hidden="true" /> Voice Agent Engine Live
            </span>
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                role="tab"
                id={`tab-${id}`}
                aria-selected={tab === id}
                aria-controls="dash-panel"
                onClick={() => {
                  setTab(id);
                  setSelected(null);
                }}
              >
                <Icon className="icon" aria-hidden="true" />
                {label}
              </button>
            ))}
          </div>
          <p className="lead" style={{ fontSize: 12, marginTop: 10 }}>Client Demo Node: PX-78241</p>
        </aside>

        <div className="dash__main" id="dash-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
          <div className="kpis">
            {[
              ["Total Calls", "3,842", "+14.2% vs last mo"],
              ["AI Bookings", "1,124", "Jane App synced"],
              ["Avg Duration", "01:54", "-12s latency delta"],
              ["Escalation Rate", "5.8%", "Under standard threshold"],
            ].map(([k, v, d]) => (
              <div key={k} className="card kpi">
                <small>{k}</small>
                <b className="text-gradient">{v}</b>
                <span>{d}</span>
              </div>
            ))}
          </div>

          {tab === "overview" && (
            <div className="card">
              <div className="panel-head">
                <h3>Clinic Performance Overview</h3>
                <span className="tag tag--muted">Metrics sync: Just now</span>
              </div>
              <div className="grid grid--2">
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 600 }}>ROI Conversion Matrix</h4>
                  <p style={{ fontSize: 13, color: "var(--muted)", margin: "6px 0 12px" }}>
                    Comparing estimated monthly revenue at risk against active bookings resolved by the AI voice reception channel.
                  </p>
                  <div className="row-line"><span>Diverted Inbound Value</span><b className="text-gradient" style={{ fontSize: 20 }}>$142,800</b></div>
                </div>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 600 }}>EMR Database Health</h4>
                  <div className="row-line"><span>API Webhook Latency</span><b>12ms</b></div>
                  <div className="row-line"><span>Sync Success Rate</span><b>100%</b></div>
                </div>
              </div>
            </div>
          )}

          {tab === "calls" && (
            <div className="card">
              <div className="panel-head">
                <h3>Inbound Call Logs</h3>
                <label className="search-box">
                  <Search className="icon" aria-hidden="true" />
                  <input type="search" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Search caller or intent..." aria-label="Search caller or intent" />
                </label>
              </div>
              <div className="table-card table-scroll" style={{ boxShadow: "none" }}>
                <table style={{ minWidth: 720 }}>
                  <thead>
                    <tr>
                      {["Caller ID", "Time", "Duration", "Intent", "Sentiment", "Outcome", "Action"].map((h) => (
                        <th key={h} scope="col">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((c) => (
                      <tr key={c.id}>
                        <td>{c.caller}</td>
                        <td>{c.time}</td>
                        <td>{c.duration}</td>
                        <td><span className="tag">{c.intent}</span></td>
                        <td><span className={`tag ${sentimentTag(c.sentiment)}`}>{c.sentiment}</span></td>
                        <td><span className="tag tag--ok">{c.outcome}</span></td>
                        <td><button className="link-btn" onClick={() => setSelected(c)}>View Transcript</button></td>
                      </tr>
                    ))}
                    {!filtered.length && (
                      <tr><td colSpan={7} style={{ textAlign: "center", color: "var(--muted)" }}>No calls match your search.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
              {selected && (
                <div className="card" style={{ marginTop: 14, background: "var(--bg-alt)" }}>
                  <div className="panel-head">
                    <h4 style={{ fontSize: 14, fontWeight: 600 }}>Call Transcript Details ({selected.id})</h4>
                    <button className="icon-btn" onClick={() => setSelected(null)} aria-label="Close transcript"><X className="icon" aria-hidden="true" /></button>
                  </div>
                  <div className="transcript">
                    {selected.transcript.map((m, i) => (
                      <div key={i} style={{ display: "grid", gap: 2 }}>
                        <small style={{ fontWeight: 700, fontSize: 11, color: "var(--muted)", textAlign: m.role === "ai" ? "right" : "left" }}>
                          {m.role === "ai" ? "PyrexxAI" : "Patient"}
                        </small>
                        <div className={`bubble ${m.role === "ai" ? "bubble--out" : "bubble--in"}`} style={{ maxWidth: "88%" }}>{m.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {tab === "intents" && (
            <div className="card">
              <div className="panel-head"><h3>Clinical Intent Resolution</h3></div>
              {INTENTS.map((i) => (
                <div key={i.name} style={{ marginBottom: 16 }}>
                  <div className="row-line" style={{ border: 0, padding: 0 }}>
                    <div>
                      <b>{i.name}</b>
                      <br />
                      <span>Processed: {i.count} cases</span>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span>AI Success Rate</span>
                      <br />
                      <b className="text-gradient">{i.success}%</b>
                    </div>
                  </div>
                  <div className="progress" role="presentation"><i style={{ width: `${i.success}%` }} /></div>
                </div>
              ))}
            </div>
          )}

          {tab === "transcripts" && (
            <div className="card">
              <div className="panel-head"><h3>Full-Text Transcript Archiver</h3></div>
              <p style={{ fontSize: 14, color: "var(--muted)" }}>
                Search and pull recorded audio and transcripts directly from your medical records database. Select a call from the{" "}
                <button className="link-btn" onClick={() => setTab("calls")}>Call Logger Feed</button> to audit individual patient experiences.
              </p>
            </div>
          )}

          {tab === "health" && (
            <div className="card">
              <div className="panel-head"><h3>EMR Sync Status</h3></div>
              <div className="grid grid--2">
                <div className="card" style={{ background: "var(--bg-alt)" }}>
                  <b style={{ display: "flex", gap: 8, alignItems: "center", color: "var(--green-ink)" }}><CheckCircle2 className="icon" aria-hidden="true" /> Active API Hook</b>
                  <p style={{ marginTop: 6 }}>Synced directly with clinic scheduler (Jane App / Boulevard / Mindbody)</p>
                </div>
                <div className="card" style={{ background: "var(--bg-alt)" }}>
                  <b style={{ display: "flex", gap: 8, alignItems: "center", color: "var(--green-ink)" }}><ShieldCheck className="icon" aria-hidden="true" /> Encryption Verified</b>
                  <p style={{ marginTop: 6 }}>End-to-end clinical compliance pipeline is operational.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
