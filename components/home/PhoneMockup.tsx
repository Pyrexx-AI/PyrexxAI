"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

/** Isolated so the once-per-second tick re-renders only this tiny node, not the whole phone. */
function CallTimer() {
  const [seconds, setSeconds] = useState(42);
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return <time>{`${mm}:${ss}`}</time>;
}

const BARS = [3, 7, 4.5, 8.5, 3, 6, 4];

/**
 * The hero phone. Every dimension is expressed in container-query units (cqw), so the
 * entire device scales as one object with its column, from ~110px wide up to 320px.
 * It alternates between a live call and an iMessage intake; tapping it switches manually.
 */
export default function PhoneMockup() {
  const [mode, setMode] = useState<"call" | "message">("call");
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    if (timer.current) clearInterval(timer.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(() => setMode((m) => (m === "call" ? "message" : "call")), 9000);
  };

  useEffect(() => {
    start();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const toggle = () => {
    setMode((m) => (m === "call" ? "message" : "call"));
    start();
  };

  return (
    <div className="phone-wrap">
      <button type="button" className="phone" onClick={toggle} aria-label="Switch between the AI call demo and the iMessage demo">
        <div className="phone__bezel">
          <div className="phone__screen">
            <i className="phone__island" />
            <div className="phone__status" aria-hidden="true">
              <span>9:41</span>
              <svg viewBox="0 0 40 10" fill="currentColor">
                <rect x="0" y="6" width="2.4" height="4" rx=".6" />
                <rect x="4" y="4" width="2.4" height="6" rx=".6" />
                <rect x="8" y="2" width="2.4" height="8" rx=".6" />
                <rect x="12" y="0" width="2.4" height="10" rx=".6" />
                <rect x="22" y=".5" width="16" height="9" rx="2.6" fill="none" stroke="currentColor" strokeWidth="1" opacity=".5" />
                <rect x="23.6" y="2.1" width="11" height="5.8" rx="1.4" />
              </svg>
            </div>

            <div className="phone-pane" data-active={mode === "call"}>
              <div className="call-head">
                <div className="avatar">LA</div>
                <div>
                  <b>Luxe Aesthetics</b>
                  <span>
                    <i className="live-dot" />
                    Live Voice Agent Active · <CallTimer />
                  </span>
                </div>
              </div>
              <div className="waveform" aria-hidden="true">
                {BARS.map((h, i) => (
                  <i key={i} style={{ height: `${h}cqw`, animationDelay: `${(i % 5) * 0.1}s` }} />
                ))}
              </div>
              <div className="bubble bubble--in" style={{ "--n": 1 } as React.CSSProperties}>
                <small>Caller (+1 302 ***-1284)</small>“I&apos;d like to book Botox with Dr. Jenkins next Tuesday at 2 PM.”
              </div>
              <div className="bubble bubble--out" style={{ "--n": 2 } as React.CSSProperties}>
                <small>PyrexxAI Voice Agent</small>“Dr. Jenkins has 2:00 PM available! I&apos;ll reserve that slot for you now.”
              </div>
              <div className="sync-card bubble" style={{ "--n": 3 } as React.CSSProperties}>
                <CheckCircle2 aria-hidden="true" />
                <div>
                  <b>Jane App EMR Synced</b>
                  <span>Appointment confirmed &amp; written</span>
                </div>
              </div>
            </div>

            <div className="phone-pane" data-active={mode === "message"}>
              <div className="call-head">
                <div className="avatar">PX</div>
                <div>
                  <b>PyrexxAI iMessage</b>
                  <span>
                    <i className="live-dot" />
                    Sub-60s Auto Reply
                  </span>
                </div>
              </div>
              <div className="bubble bubble--in" style={{ "--n": 1, marginTop: "2cqw" } as React.CSSProperties}>
                Hi, what is the price for dermal fillers?
              </div>
              <div className="bubble bubble--out" style={{ "--n": 2 } as React.CSSProperties}>
                Hello! Dermal fillers start at $650/syringe. Would you like to check Dr. Jenkins&apos; open slots?
              </div>
              <div className="bubble bubble--in" style={{ "--n": 3 } as React.CSSProperties}>
                Yes please, Thursday afternoon works!
              </div>
              <div className="bubble bubble--out" style={{ "--n": 4 } as React.CSSProperties}>
                Reserved for Thursday at 3:30 PM!
              </div>
              <div className="composer">
                <span>iMessage</span>
                <i>↑</i>
              </div>
            </div>
            <i className="home-bar" />
          </div>
        </div>
      </button>

      <span className="floating-chip floating-chip--a" aria-hidden="true">
        <CheckCircle2 className="icon" />
        <span>
          Booked · Tue 2:00 PM<small>Botox · Dr. Jenkins</small>
        </span>
      </span>
      <span className="floating-chip floating-chip--b" aria-hidden="true">
        <CheckCircle2 className="icon" />
        <span>
          100% HIPAA Verified<small>Zero Model Training on PHI</small>
        </span>
      </span>
    </div>
  );
}
