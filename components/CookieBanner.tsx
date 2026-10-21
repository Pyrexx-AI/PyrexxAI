"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "pyrexxai-cookie-consent";

/** Non-blocking consent notice. Delayed so it never competes with LCP. Consent is stored in localStorage. */
export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY)) return;
    } catch {
      return;
    }
    const t = setTimeout(() => setShow(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const choose = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* storage unavailable – dismiss for this session only */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie" role="region" aria-label="Cookie consent banner">
      <div className="cookie__box">
        <div>
          <h4>We value your clinical data privacy</h4>
          <p>
            We use cookies to analyze web traffic and deliver tailored experiences. Read our{" "}
            <Link href="/privacy-policy">Privacy Policy</Link> to learn about our HIPAA-aligned data commitments.
          </p>
        </div>
        <div className="cookie__actions">
          <button type="button" className="btn btn--ghost" onClick={() => choose("declined")}>
            Decline
          </button>
          <button type="button" className="btn btn--primary" onClick={() => choose("accepted")}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
