import Link from "next/link";
import { BOOK_DEMO_HREF } from "@/lib/site";

/** Closing call-to-action used at the bottom of the home page and every inner page. */
export default function CtaBand() {
  return (
    <section className="section section--flush-top" aria-labelledby="cta-title">
      <div className="wrap">
        <div className="cta-band" data-reveal>
          <h2 id="cta-title">Every missed call is a patient choosing your competitor.</h2>
          <p>
            Book a free 15-minute discovery call. We will show you exactly how PyrexxAI sounds, how it books, and how
            much revenue you are currently losing.
          </p>
          <Link href={BOOK_DEMO_HREF} className="btn btn--primary btn--lg">
            Book My Free Demo &rarr;
          </Link>
          <small>No credit card. No long-term contracts. Cancel anytime.</small>
        </div>
      </div>
    </section>
  );
}
