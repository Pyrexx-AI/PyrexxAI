"use client";

import { useState } from "react";
import Link from "next/link";
import { BOOK_DEMO_HREF } from "@/lib/site";

const RETAINER = 1000;
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

  const missedCalls = Math.round((calls * missedRate) / 100);
  const monthlyRisk = missedCalls * ltv;
  const netMonthlyROI = Math.max(0, monthlyRisk - RETAINER);

  return (
    <section id="roi" className="section" aria-labelledby="roi-title">
      <div className="wrap">
        <div className="roi" data-reveal>
          <div>
            <span className="eyebrow">ROI calculator</span>
            <h2 id="roi-title" style={{ marginBottom: 8 }}>Calculate Your Lost Revenue</h2>
            <p style={{ color: "var(--muted)", marginBottom: 22, fontSize: 14 }}>
              See exactly how much revenue walks out the door when calls go unanswered.
            </p>
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
            <em>*Based on standard $1,000/mo platform management retainer.</em>
            <div style={{ display: "grid", gap: 8 }}>
              <Link href={BOOK_DEMO_HREF} className="btn btn--inverse btn--block" style={{ color: "#1d4ed8" }}>
                Stop Losing Revenue &rarr;
              </Link>
              <a href="#how-it-works" className="btn btn--block" style={{ color: "#fff", boxShadow: "inset 0 0 0 1px #ffffff55" }}>
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
