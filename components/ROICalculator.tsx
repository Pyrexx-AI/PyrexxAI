"use client";

import { useState } from "react";
import Link from "next/link";
import { APP_SIGNUP_HREF, BOOK_DEMO_HREF } from "@/lib/site";

const PLANS = {
  overflow: { label: "Overflow ($1,000/mo)", cost: 1000 },
  full_time: { label: "Full-Time ($1,500/mo)", cost: 1500 },
} as const;

const fmt = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function Slider({
  id, label, value, min, max, step, display, onChange,
}: {
  id: string; label: string; value: number; min: number; max: number; step: number; display: string; onChange: (v: number) => void;
}) {
  return (
    <div className="field">
      <div className="field__row">
        <label htmlFor={id}>{label}</label>
        <output htmlFor={id}>{display}</output>
      </div>
      <input
        id={id}
        className="range"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ "--fill": `${((value - min) / (max - min)) * 100}%` } as React.CSSProperties}
      />
    </div>
  );
}

export default function ROICalculator() {
  const [calls, setCalls] = useState(200);
  const [missedRate, setMissedRate] = useState(35);
  const [ltv, setLtv] = useState(3000);
  const [planKey, setPlanKey] = useState<keyof typeof PLANS>("full_time");

  const retainer = PLANS[planKey].cost;
  const missedCalls = Math.round((calls * missedRate) / 100);
  const monthlyRisk = missedCalls * ltv;
  const netMonthlyROI = Math.max(0, monthlyRisk - retainer);

  return (
    <section id="roi" className="section" aria-labelledby="roi-title">
      <div className="wrap">
        <div className="roi" data-reveal>
          <div>
            <span className="eyebrow">ROI calculator</span>
            <h2 id="roi-title" style={{ marginBottom: 8 }}>Calculate Your Lost Revenue</h2>
            <p style={{ color: "var(--muted)", marginBottom: 18, fontSize: 14 }}>
              See exactly how much revenue walks out the door when calls go unanswered.
            </p>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }} role="group" aria-label="Select plan tier">
              {(Object.keys(PLANS) as Array<keyof typeof PLANS>).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setPlanKey(key)}
                  className={planKey === key ? "btn btn--primary" : "btn btn--ghost"}
                  style={{ height: 34, fontSize: 12.5 }}
                >
                  {PLANS[key].label}
                </button>
              ))}
            </div>
            <Slider id="calls-slider" label="Monthly Inbound Calls" value={calls} min={50} max={2000} step={10} display={calls.toLocaleString()} onChange={setCalls} />
            <Slider id="missed-slider" label="Missed Call Rate (%)" value={missedRate} min={10} max={70} step={1} display={`${missedRate}%`} onChange={setMissedRate} />
            <Slider id="ltv-slider" label="Avg. Patient Lifetime Value" value={ltv} min={500} max={15000} step={100} display={fmt.format(ltv)} onChange={setLtv} />
          </div>

          <div className="roi__result" aria-live="polite">
            <small>Missed Calls</small>
            <b>{missedCalls.toLocaleString()} <span style={{ fontSize: 14, fontWeight: 500, opacity: 0.8 }}>/mo</span></b>
            <small>Revenue at Risk</small>
            <b>{fmt.format(monthlyRisk)}</b>
            <hr />
            <small>Estimated Net Monthly ROI</small>
            <b style={{ fontSize: "clamp(26px,4vw,34px)" }}>+{fmt.format(netMonthlyROI)} <span style={{ fontSize: 13, fontWeight: 500, opacity: 0.8 }}>/ month</span></b>
            <em>*Based on {PLANS[planKey].label} (+ $1,000 initial setup).</em>
            <div style={{ display: "grid", gap: 8 }}>
              <Link href={BOOK_DEMO_HREF} className="btn btn--inverse btn--block" style={{ color: "#1d4ed8" }}>
                Book a Discovery Demo &rarr;
              </Link>
              <a href={`${APP_SIGNUP_HREF}?plan=${planKey}`} className="btn btn--block" style={{ color: "#fff", boxShadow: "inset 0 0 0 1px #ffffff55" }}>
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}