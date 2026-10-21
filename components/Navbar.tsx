"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { BOOK_DEMO_HREF } from "@/lib/site";

const SERVICES = [
  { label: "AI Receptionist", href: "/ai-receptionist" },
  { label: "Website Building", href: "/website-building" },
  { label: "Database Reactivation", href: "/database-reactivation" },
];
const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Help & Support", href: "/#faq" },
  { label: "Careers", href: "/careers" },
];

type MenuKey = "services" | "company" | null;

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobile, setMobile] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Close everything on navigation
  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [pathname]);

  // Outside click + Escape
  useEffect(() => {
    const onPointer = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const servicesActive = SERVICES.some((s) => pathname.startsWith(s.href));
  const companyActive = ["/about", "/careers", "/contact"].some((p) => pathname.startsWith(p));
  const current = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <header className="site-header">
      <div className="wrap site-header__inner" ref={rootRef}>
        <Link href="/" className="brand" aria-label="PyrexxAI home">
          <span className="brand__mark">
            <Image src="/logo.png" alt="" fill sizes="28px" priority />
          </span>
          PyrexxAI
        </Link>

        <nav className="nav-links" aria-label="Main">
          <div className="nav-item">
            <button
              type="button"
              className="nav-trigger"
              aria-expanded={open === "services"}
              aria-haspopup="true"
              aria-controls="menu-services"
              data-active={servicesActive}
              onClick={() => setOpen(open === "services" ? null : "services")}
            >
              Services <ChevronDown className="icon" aria-hidden="true" />
            </button>
            <div id="menu-services" className="nav-menu" data-open={open === "services"}>
              {SERVICES.map((s) => (
                <Link key={s.href} href={s.href} aria-current={current(s.href)} tabIndex={open === "services" ? 0 : -1}>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/#how-it-works" className="nav-link">
            How it Works
          </Link>
          <div className="nav-item">
            <button
              type="button"
              className="nav-trigger"
              aria-expanded={open === "company"}
              aria-haspopup="true"
              aria-controls="menu-company"
              data-active={companyActive}
              onClick={() => setOpen(open === "company" ? null : "company")}
            >
              Company <ChevronDown className="icon" aria-hidden="true" />
            </button>
            <div id="menu-company" className="nav-menu" data-open={open === "company"}>
              {COMPANY.map((s) => (
                <Link key={s.href} href={s.href} aria-current={current(s.href)} tabIndex={open === "company" ? 0 : -1}>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/dashboard" className="nav-link" aria-current={current("/dashboard")}>
            Dashboard
          </Link>
        </nav>

        <div className="nav-actions">
          <Link href="/dashboard" className="btn btn--ghost">
            Live Dashboard
          </Link>
          <Link href={BOOK_DEMO_HREF} className="btn btn--primary">
            Book a Demo
          </Link>
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn menu-toggle"
            aria-expanded={mobile}
            aria-controls="mobile-nav"
            aria-label={mobile ? "Close menu" : "Open menu"}
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X className="icon" aria-hidden="true" /> : <Menu className="icon" aria-hidden="true" />}
          </button>
        </div>

        <nav id="mobile-nav" className="mobile-nav" data-open={mobile} aria-label="Mobile">
          <span className="group-label">Services</span>
          {SERVICES.map((s) => (
            <Link key={s.href} href={s.href} aria-current={current(s.href)}>
              {s.label}
            </Link>
          ))}
          <span className="group-label">Explore</span>
          <Link href="/#how-it-works">How it Works</Link>
          <Link href="/dashboard">Dashboard</Link>
          <span className="group-label">Company</span>
          {COMPANY.map((s) => (
            <Link key={s.href} href={s.href} aria-current={current(s.href)}>
              {s.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
