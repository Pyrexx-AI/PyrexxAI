import Image from "next/image";
import Link from "next/link";
import { Facebook, Github, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import { INTEGRATIONS } from "@/lib/content/integrations";
import { SITE } from "@/lib/site";

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M18.9 2H22l-7.2 8.3L23 22h-6.6l-5.2-6.8L5.2 22H2l7.7-8.8L1.5 2h6.8l4.7 6.2L18.9 2Zm-1.2 18h1.8L6.4 3.9H4.5L17.7 20Z" />
  </svg>
);
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M16.6 3a5.5 5.5 0 0 0 4.4 4.9v3.2a8.6 8.6 0 0 1-4.4-1.3v6.2a6.4 6.4 0 1 1-6.4-6.4c.3 0 .6 0 .9.1v3.3a3.2 3.2 0 1 0 2.3 3.1V3h3.2Z" />
  </svg>
);

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  GitHub: <Github className="icon" aria-hidden="true" />,
  LinkedIn: <Linkedin className="icon" aria-hidden="true" />,
  "X (formerly Twitter)": <XIcon />,
  Facebook: <Facebook className="icon" aria-hidden="true" />,
  Instagram: <Instagram className="icon" aria-hidden="true" />,
  YouTube: <Youtube className="icon" aria-hidden="true" />,
  TikTok: <TikTokIcon />,
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand" aria-label="PyrexxAI home">
              <span className="brand__mark">
                <Image src="/logo.png" alt="" fill sizes="28px" />
              </span>
              PyrexxAI
            </Link>
            <p style={{ marginTop: 12, maxWidth: 300 }}>
              Intelligent voice AI implementations for MedSpas, Dental &amp; Therapy Clinics. Stop missing calls, start scaling.
            </p>
            <div className="social">
              {SITE.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  {SOCIAL_ICONS[s.label]}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Services">
            <h4>Services</h4>
            <ul>
              <li><Link href="/ai-receptionist">AI Receptionist</Link></li>
              <li><Link href="/website-building">Website Building</Link></li>
              <li><Link href="/database-reactivation">Database Reactivation</Link></li>
              <li><Link href="/dashboard">Live Dashboard</Link></li>
            </ul>
          </nav>

          <nav aria-label="Integrations">
            <h4>Integrations</h4>
            <ul>
              {Object.values(INTEGRATIONS).map((i) => (
                <li key={i.slug}>
                  <Link href={`/integrations/${i.slug}`}>{i.emrName}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/book-demo">Book a Demo</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service">Terms of Service</Link></li>
              <li><Link href="/hipaa-compliance">HIPAA Compliance</Link></li>
            </ul>
          </nav>

          <div>
            <h4>Get in Touch</h4>
            <ul>
              <li>
                <a href={`mailto:${SITE.email}`}><Mail className="icon" aria-hidden="true" /> {SITE.email}</a>
              </li>
              <li>
                <a href={SITE.phoneHref}><Phone className="icon" aria-hidden="true" /> {SITE.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} PyrexxAI. All rights reserved.</p>
          <span>Engineered for seamless patient experiences.</span>
        </div>
      </div>
    </footer>
  );
}
