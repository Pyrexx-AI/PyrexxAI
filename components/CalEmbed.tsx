"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, Building, Calendar as CalendarIcon, CheckCircle2, Clock, 
  Download, Layers, Loader2, Mail, Phone, ShieldCheck, User, Video
} from "lucide-react";
import { submitBookingAction } from "@/app/actions/booking";

type Day = { dayName: string; dayNumber: number; fullDate: string };
const FALLBACK_SLOTS = ["09:00", "10:30", "11:30", "13:00", "14:30", "15:30"];

const ymd = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

function generateClientIcs(clinicName: string, dateStr: string, slotStr: string) {
  const [year, month, day] = dateStr.split("-").map(Number);
  const [hours, minutes] = slotStr.split(":").map(Number);
  
  // Format to UTC string for ICS standard
  const start = new Date(Date.UTC(year, month - 1, day, hours + 4, minutes)); // Approximate ET to UTC
  const end = new Date(start.getTime() + 15 * 60 * 1000);
  
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const icsData = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//PyrexxAI//Discovery Consultation//EN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:px-${Date.now()}@pyrexxai.com`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:PyrexxAI Voice AI Discovery — ${clinicName}`,
    "DESCRIPTION:15-minute technical discovery session and EMR architecture evaluation with PyrexxAI engineering.",
    "LOCATION:Google Meet (link in calendar invite)",
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `PyrexxAI-Consultation-${dateStr}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function CalEmbed() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [dates, setDates] = useState<Day[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [slots, setSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [bookingRefId, setBookingRefId] = useState("");
  const [form, setForm] = useState({ name: "", email: "", clinic: "", phone: "", emr: "Jane App", callVolume: "100-500" });

  useEffect(() => {
    const days: Day[] = [];
    const today = new Date();
    for (let offset = 1; days.length < 10; offset++) {
      const d = new Date(today);
      d.setDate(today.getDate() + offset);
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        days.push({ dayName: d.toLocaleDateString("en-US", { weekday: "short" }), dayNumber: d.getDate(), fullDate: ymd(d) });
      }
    }
    setDates(days);
    setSelectedDate(days[0].fullDate);
  }, []);

  useEffect(() => {
    if (!selectedDate) return;
    const controller = new AbortController();
    setLoadingSlots(true);
    fetch(`/api/calendar/slots?date=${selectedDate}`, { signal: controller.signal })
      .then((r) => r.json())
      .then((data: { slots?: string[] }) => {
        const list = data.slots ?? [];
        setSlots(list);
        setSelectedSlot(list[0] ?? "");
      })
      .catch((e) => {
        if (e.name === "AbortError") return;
        setSlots(FALLBACK_SLOTS);
        setSelectedSlot("10:30");
      })
      .finally(() => setLoadingSlots(false));
    return () => controller.abort();
  }, [selectedDate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await submitBookingAction({ ...form, slotTime: `${selectedDate}T${selectedSlot}:00` });
      if (res.success) {
        setBookingRefId(res.bookingId || `PX-${Date.now().toString().slice(-6)}`);
        setStep(3);
      } else {
        setError(res.message || "Please check your details and try again.");
      }
    } catch {
      setError("Network error occurred while reserving your appointment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [k]: e.target.value });

  return (
    <div className="booking">
      <div className="booking__head">
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div className="booking__step">{step === 3 ? "✓" : `0${step}`}</div>
          <div>
            <h3>
              {step === 1 && "Select Time Slot (15 min)"}
              {step === 2 && "Clinical Workflow Details"}
              {step === 3 && "Consultation Confirmed"}
            </h3>
            <p>
              {step === 1 && "Live EMR demonstration & architecture evaluation"}
              {step === 2 && "Step 2 of 2: Custom integration intake"}
              {step === 3 && "Calendar invitation dispatched to your inbox"}
            </p>
          </div>
        </div>
        <span className="tag tag--ok">
          <ShieldCheck className="icon" style={{ width: 13, height: 13 }} aria-hidden="true" /> HIPAA Safe
        </span>
      </div>

      {step === 1 && (
        <>
          <div>
            <p className="field-label">
              <CalendarIcon className="icon" aria-hidden="true" /> Select Consultation Date
            </p>
            <div className="day-row" role="group" aria-label="Consultation date">
              {dates.map((d) => (
                <button key={d.fullDate} type="button" className="day-btn" aria-pressed={selectedDate === d.fullDate} onClick={() => setSelectedDate(d.fullDate)}>
                  <small>{d.dayName}</small>
                  {d.dayNumber}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="field-label">
              <Clock className="icon" aria-hidden="true" /> Available Slots (Eastern Time)
            </p>
            {loadingSlots ? (
              <div style={{ display: "grid", placeItems: "center", padding: 24 }}>
                <Loader2 className="icon" style={{ animation: "spin 1s linear infinite" }} aria-label="Loading slots" />
              </div>
            ) : slots.length === 0 ? (
              <p style={{ color: "var(--muted)", fontSize: 13 }}>No remaining slots for this date. Please choose another day.</p>
            ) : (
              <div className="slot-grid" role="group" aria-label="Available time slots">
                {slots.map((s) => (
                  <button key={s} type="button" className="slot-btn" aria-pressed={selectedSlot === s} onClick={() => setSelectedSlot(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button type="button" className="btn btn--primary btn--lg btn--block" style={{ marginTop: "auto" }} disabled={!selectedSlot} onClick={() => setStep(2)}>
            Continue to Details <ArrowRight className="icon" aria-hidden="true" />
          </button>
        </>
      )}

      {step === 2 && (
        <form className="form" onSubmit={submit}>
          <label>
            <span className="field-label" style={{ margin: 0 }}><User className="icon" aria-hidden="true" /> Full Name *</span>
            <input type="text" required value={form.name} onChange={set("name")} placeholder="Dr. Sarah Jenkins" autoComplete="name" />
          </label>
          <label>
            <span className="field-label" style={{ margin: 0 }}><Mail className="icon" aria-hidden="true" /> Work Email *</span>
            <input type="email" required value={form.email} onChange={set("email")} placeholder="dr@clinic.com" autoComplete="email" />
          </label>
          <label>
            <span className="field-label" style={{ margin: 0 }}><Building className="icon" aria-hidden="true" /> Clinic Name *</span>
            <input type="text" required value={form.clinic} onChange={set("clinic")} placeholder="Elite Aesthetics" autoComplete="organization" />
          </label>
          <label>
            <span className="field-label" style={{ margin: 0 }}><Phone className="icon" aria-hidden="true" /> Phone Number</span>
            <input type="tel" value={form.phone} onChange={set("phone")} placeholder="+1 (555) 000-0000" autoComplete="tel" />
          </label>
          <div className="form__row form__row--2">
            <label>
              <span className="field-label" style={{ margin: 0 }}><Layers className="icon" aria-hidden="true" /> EMR / Software</span>
              <select value={form.emr} onChange={set("emr")}>
                <option value="Jane App">Jane App</option>
                <option value="Boulevard">Boulevard</option>
                <option value="Mindbody">Mindbody</option>
                <option value="AthenaHealth">AthenaHealth</option>
                <option value="eClinicalWorks">eClinicalWorks</option>
                <option value="Other">Other / Custom</option>
              </select>
            </label>
            <label>
              <span className="field-label" style={{ margin: 0 }}><Clock className="icon" aria-hidden="true" /> Call Volume</span>
              <select value={form.callVolume} onChange={set("callVolume")}>
                <option value="Under 100">Under 100/mo</option>
                <option value="100-500">100 - 500/mo</option>
                <option value="500+">500+ calls/mo</option>
              </select>
            </label>
          </div>
          {error && <p className="form-status form-status--error" role="alert">{error}</p>}
          <div style={{ display: "flex", gap: 8 }}>
            <button type="button" className="btn btn--ghost btn--lg" onClick={() => setStep(1)}>
              <ArrowLeft className="icon" aria-hidden="true" /> Back
            </button>
            <button type="submit" className="btn btn--primary btn--lg" style={{ flex: 1 }} disabled={submitting}>
              {submitting ? (<><Loader2 className="icon" style={{ animation: "spin 1s linear infinite" }} aria-hidden="true" /> Confirming...</>) : <>Confirm Discovery Call &rarr;</>}
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <div className="success-state" role="status" style={{ textAlign: "left", padding: "12px 4px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
            <div className="icon-tile icon-tile--green" style={{ width: 44, height: 44, borderRadius: "50%" }}>
              <CheckCircle2 className="icon" style={{ width: 22, height: 22 }} aria-hidden="true" />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Discovery Session Confirmed</h3>
              <p style={{ margin: 0, fontSize: 13, color: "var(--muted)" }}>Reference Code: <span style={{ fontFamily: "monospace", fontWeight: 700, color: "var(--brand-ink)" }}>{bookingRefId}</span></p>
            </div>
          </div>

          <div className="summary" style={{ marginBottom: 16, borderLeft: "3px solid var(--green-ink)" }}>
            <div><span>Scheduled Date</span><b>{selectedDate}</b></div>
            <div><span>Time (Eastern Time)</span><b>{selectedSlot} ET</b></div>
            <div><span>Clinic</span><b>{form.clinic}</b></div>
            <div><span>EMR Architecture</span><b>{form.emr}</b></div>
            <div><span>Meeting Format</span><b style={{ display: "flex", alignItems: "center", gap: 4 }}><Video className="icon" style={{ width: 14, height: 14 }} /> Google Meet</b></div>
          </div>

          <div style={{ background: "var(--tint)", padding: "14px 16px", borderRadius: 12, marginBottom: 18, fontSize: 13 }}>
            <strong style={{ display: "block", color: "var(--brand-ink)", marginBottom: 4 }}>What Happens Next:</strong>
            <p style={{ margin: 0, color: "var(--ink)", lineHeight: 1.5 }}>
              A calendar invitation with conference credentials has been dispatched to <strong>{form.email}</strong>. Our Senior Voice Architect has begun profiling your clinic&apos;s procedure workflows.
            </p>
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button 
              type="button" 
              className="btn btn--primary" 
              onClick={() => generateClientIcs(form.clinic, selectedDate, selectedSlot)}
              style={{ flex: 1 }}
            >
              <Download className="icon" aria-hidden="true" /> Add to Calendar (.ics)
            </button>
            <Link href="/" className="btn btn--ghost">
              Back to Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}