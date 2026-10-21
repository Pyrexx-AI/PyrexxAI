"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, Building, Calendar as CalendarIcon, CheckCircle2, Clock, Layers, Loader2, Mail, Phone, ShieldCheck, User,
} from "lucide-react";
import { submitBookingAction } from "@/app/actions/booking";

type Day = { dayName: string; dayNumber: number; fullDate: string };
const FALLBACK_SLOTS = ["09:00", "10:30", "11:30", "13:00", "14:30", "15:30"];

/** Local YYYY-MM-DD (toISOString() would shift the day for users west of UTC late in the evening). */
const ymd = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export default function CalEmbed() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [dates, setDates] = useState<Day[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [slots, setSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
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
      if (res.success) setStep(3);
      else setError(res.message || "Please try again.");
    } catch {
      setError("Network error. Please try again.");
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
              {step === 3 && "Booking Confirmed"}
            </h3>
            <p>
              {step === 1 && "Live EMR demonstration & architecture map"}
              {step === 2 && "Step 2 of 2: Custom integration intake"}
              {step === 3 && "Calendar invitation dispatched"}
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
            <input type="text" required value={form.name} onChange={set("name")} placeholder="Dr. Jenkins" autoComplete="name" />
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
              {submitting ? (<><Loader2 className="icon" style={{ animation: "spin 1s linear infinite" }} aria-hidden="true" /> Confirming Reservation...</>) : <>Confirm Discovery Call &rarr;</>}
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <div className="success-state" role="status">
          <div className="icon-tile icon-tile--green"><CheckCircle2 className="icon" aria-hidden="true" /></div>
          <h3>Discovery Call Reserved</h3>
          <p>Calendar invitation and Google Meet details dispatched.</p>
          <div className="summary" style={{ marginTop: 18 }}>
            <div><span>Date</span><b>{selectedDate}</b></div>
            <div><span>Time (ET)</span><b>{selectedSlot}</b></div>
            <div><span>Clinic</span><b>{form.clinic}</b></div>
          </div>
          <Link href="/" className="btn btn--ghost" style={{ marginTop: 16 }}>Back to Home</Link>
        </div>
      )}
    </div>
  );
}
