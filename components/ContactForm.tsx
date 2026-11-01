"use client";

import { useFormState, useFormStatus } from "react-dom";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

type State = { success: boolean; message: string } | null;

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn--primary btn--lg btn--block" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="icon" aria-hidden="true" style={{ animation: "spin 1s linear infinite" }} /> Processing...
        </>
      ) : (
        "Submit Inquiry"
      )}
    </button>
  );
}

export default function ContactForm() {
  const [state, action] = useFormState<State, FormData>(submitContactForm, null);
  const [dismissed, setDismissed] = useState(false);
  const [hasSoftware, setHasSoftware] = useState<"no" | "yes">("no");

  if (state?.success && !dismissed) {
    return (
      <div className="success-state" role="status">
        <div className="icon-tile icon-tile--green">
          <CheckCircle2 className="icon" aria-hidden="true" />
        </div>
        <h3>Inquiry Successfully Logged</h3>
        <p>Your clinic specifications have been securely recorded. An executive summary has been dispatched to your email address, and our engineering team will reach out within 24 hours.</p>
        <button type="button" className="btn btn--ghost" style={{ marginTop: 16 }} onClick={() => setDismissed(true)}>
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      className="form"
      action={(fd) => {
        setDismissed(false);
        action(fd);
      }}
    >
      {/* Anti-bot Honeypot */}
      <div className="form__hp" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form__row form__row--2">
        <label htmlFor="name">
          Full Name *
          <input id="name" name="name" type="text" required placeholder="Dr. Sarah Jenkins" autoComplete="name" />
        </label>
        <label htmlFor="email">
          Work Email *
          <input id="email" name="email" type="email" required placeholder="sarah@eliteclinic.com" autoComplete="email" />
        </label>
      </div>

      <label htmlFor="clinic">
        Clinic / Organization Name *
        <input id="clinic" name="clinic" type="text" required placeholder="Elite MedSpa" autoComplete="organization" />
      </label>

      <div className="form__row form__row--2">
        <label htmlFor="practiceType">
          Practice Type
          <select id="practiceType" name="practiceType" defaultValue="MedSpa">
            <option value="MedSpa">MedSpa / Aesthetics</option>
            <option value="Dental">Dental Clinic</option>
            <option value="Therapy">Therapy / Mental Health</option>
            <option value="Other">Other Medical Practice</option>
          </select>
        </label>
        <label htmlFor="callVolume">
          Monthly Call Volume
          <select id="callVolume" name="callVolume" defaultValue="100-500">
            <option value="Under 100">Under 100 calls</option>
            <option value="100-500">100 - 500 calls</option>
            <option value="500+">500+ calls</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </label>
      </div>

      {/* New: Call/Text Software Toggle */}
      <div style={{ marginTop: 4, marginBottom: 4 }}>
        <span className="field-label" style={{ marginBottom: 6, display: "block" }}>
          Do you currently use software to handle incoming calls/texts? *
        </span>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontWeight: 500, fontSize: 14 }}>
            <input
              type="radio"
              name="hasCallSoftware"
              value="no"
              checked={hasSoftware === "no"}
              onChange={() => setHasSoftware("no")}
              style={{ width: "auto" }}
            />
            No (Standard phone line / voicemail)
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontWeight: 500, fontSize: 14 }}>
            <input
              type="radio"
              name="hasCallSoftware"
              value="yes"
              checked={hasSoftware === "yes"}
              onChange={() => setHasSoftware("yes")}
              style={{ width: "auto" }}
            />
            Yes
          </label>
        </div>

        {hasSoftware === "yes" && (
          <div style={{ marginTop: 10 }}>
            <label htmlFor="callSoftwareName">
              Software Name *
              <input
                id="callSoftwareName"
                name="callSoftwareName"
                type="text"
                required={hasSoftware === "yes"}
                placeholder="e.g. RingCentral, Weave, Podium, Vonage"
                autoComplete="off"
              />
            </label>
          </div>
        )}
      </div>

      <label htmlFor="message">
        Current EMR &amp; Project Scope *
        <textarea id="message" name="message" required rows={4} placeholder="We use Jane App and want to automate our after-hours booking..." />
      </label>

      {state && !state.success && (
        <p className="form-status form-status--error" role="alert">
          {state.message}
        </p>
      )}
      <Submit />
    </form>
  );
}