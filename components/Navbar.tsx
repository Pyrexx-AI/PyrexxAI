"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, Calendar, ChevronDown, Menu, X as CloseIcon } from "lucide-react";
import { CAL_LINK } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

/**
 * "Dynamic island" navbar: a floating, glass, fully rounded bar (original PyrexxAI design),
 * with the current v4 navigation options. Animations are CSS-only (no Framer Motion).
 */

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

type Menu = "services" | "company" | null;

const linkFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500";
const dropdownItem =
  "px-4 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-gray-800 hover:text-brand-600 dark:hover:text-white transition-colors";
const dropdownPanel =
  "absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-white/80 dark:border-white/10 rounded-2xl shadow-[0_18px_40px_-16px_rgba(124,58,237,0.35)] dark:shadow-xl overflow-hidden p-1.5 transition-[opacity,transform,visibility] duration-150";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<Menu>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close everything on navigation
  useEffect(() => {
    setIsOpen(false);
    setDesktopMenu(null);
  }, [pathname]);

  // Outside click + Escape
  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      const t = event.target as Node;
      const inServices = servicesRef.current?.contains(t);
      const inCompany = companyRef.current?.contains(t);
      if (!inServices && !inCompany) setDesktopMenu(null);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDesktopMenu(null);
        setIsOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent, trigger: Exclude<Menu, null>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setDesktopMenu(desktopMenu === trigger ? null : trigger);
    }
  };

  const isServiceActive = SERVICES.some((s) => pathname.startsWith(s.href));
  const isCompanyActive = ["/about", "/careers", "/contact"].some((p) => pathname.startsWith(p));
  const isDashboardActive = pathname.startsWith("/dashboard");
  const current = (href: string) => (pathname === href ? "page" : undefined);
  const activeText = "text-brand-600 dark:text-brand-400 font-semibold";

  const desktopTrigger = (
    id: Exclude<Menu, null>,
    label: string,
    active: boolean
  ) => (
    <button
      type="button"
      id={`${id}-menu-trigger`}
      onClick={() => setDesktopMenu(desktopMenu === id ? null : id)}
      onKeyDown={(e) => handleKeyDown(e, id)}
      aria-expanded={desktopMenu === id}
      aria-haspopup="true"
      aria-controls={`${id}-dropdown`}
      className={`flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-400 transition-colors py-2 ${linkFocus} rounded px-1 ${
        active ? activeText : ""
      }`}
    >
      {label}{" "}
      <ChevronDown
        aria-hidden="true"
        className={`w-4 h-4 transition-transform duration-200 ${desktopMenu === id ? "rotate-180" : ""}`}
      />
    </button>
  );

  const dropdownState = (open: boolean) =>
    open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2 pointer-events-none";

  const accordion = (open: boolean) =>
    `grid transition-[grid-template-rows,opacity,visibility] duration-200 ${
      open ? "grid-rows-[1fr] opacity-100 visible" : "grid-rows-[0fr] opacity-0 invisible"
    }`;

  return (
    <header className="fixed top-[calc(1rem+env(safe-area-inset-top))] left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-300">
      <nav
        aria-label="Main"
        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/80 dark:border-white/10 shadow-[0_10px_30px_-12px_rgba(124,58,237,0.35)] dark:shadow-lg dark:shadow-black/20 rounded-full px-4 sm:px-6 h-16 flex items-center justify-between transition-colors duration-300"
      >
        <Link
          href="/"
          className="flex items-center space-x-2.5 shrink-0 group"
          aria-label="PyrexxAI Home"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
            <Image
              src="/logo.png"
              alt="PyrexxAI Logo"
              fill
              sizes="32px"
              quality={100}
              priority
              className="object-cover z-10"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <Bot className="text-white w-5 h-5 absolute z-0" aria-hidden="true" />
          </div>
          <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">PyrexxAI</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <div
            className="relative"
            ref={servicesRef}
            onMouseEnter={() => setDesktopMenu("services")}
            onMouseLeave={() => setDesktopMenu(null)}
          >
            {desktopTrigger("services", "Services", isServiceActive)}
            <div
              id="services-dropdown"
              role="menu"
              aria-labelledby="services-menu-trigger"
              className={`${dropdownPanel} w-56 ${dropdownState(desktopMenu === "services")}`}
            >
              <div className="flex flex-col">
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    role="menuitem"
                    aria-current={current(s.href)}
                    onClick={() => setDesktopMenu(null)}
                    className={dropdownItem}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/#how-it-works"
            className={`hover:text-brand-600 dark:hover:text-brand-400 transition-colors ${linkFocus} rounded px-2 py-1`}
          >
            How it Works
          </Link>

          <div
            className="relative"
            ref={companyRef}
            onMouseEnter={() => setDesktopMenu("company")}
            onMouseLeave={() => setDesktopMenu(null)}
          >
            {desktopTrigger("company", "Company", isCompanyActive)}
            <div
              id="company-dropdown"
              role="menu"
              aria-labelledby="company-menu-trigger"
              className={`${dropdownPanel} w-48 ${dropdownState(desktopMenu === "company")}`}
            >
              <div className="flex flex-col">
                {COMPANY.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    role="menuitem"
                    aria-current={current(s.href)}
                    onClick={() => setDesktopMenu(null)}
                    className={dropdownItem}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/dashboard"
            aria-current={current("/dashboard")}
            className={`hover:text-brand-600 dark:hover:text-brand-400 transition-colors ${linkFocus} rounded px-2 py-1 ${
              isDashboardActive ? activeText : ""
            }`}
          >
            Dashboard
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <div className="hidden md:block h-4 w-[1px] bg-gray-200 dark:bg-gray-800 my-auto" aria-hidden="true" />

          <Link
            href={CAL_LINK}
            aria-label="Book a Discovery Call"
            className={`hidden md:inline-flex lg:hidden p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${linkFocus}`}
          >
            <Calendar className="w-5 h-5" aria-hidden="true" />
          </Link>

          <Link
            href="/dashboard"
            className={`hidden xl:inline-flex items-center text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${linkFocus}`}
          >
            Live Dashboard
          </Link>

          <Link
            href={CAL_LINK}
            className={`hidden lg:inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-[0_8px_18px_-8px_rgba(124,58,237,0.67)] hover:-translate-y-0.5 ${linkFocus}`}
          >
            Book a Demo
          </Link>

          <button
            type="button"
            className={`lg:hidden p-2.5 text-gray-600 dark:text-gray-300 ${linkFocus} rounded-lg active:bg-gray-100 dark:active:bg-gray-800`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <CloseIcon className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu: floating glass sheet */}
      <div
        id="mobile-menu"
        className={`fixed top-[calc(6rem+env(safe-area-inset-top))] left-3 right-3 sm:left-4 sm:right-4 bg-white/95 dark:bg-gray-950/95 backdrop-blur-2xl border border-white/80 dark:border-white/10 shadow-[0_24px_60px_-20px_rgba(124,58,237,0.4)] dark:shadow-2xl rounded-3xl p-5 flex flex-col space-y-3 lg:hidden z-40 max-h-[calc(100dvh-7rem)] overflow-y-auto transition-[opacity,transform,visibility] duration-200 ease-out ${
          isOpen ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible -translate-y-2 scale-[0.98] pointer-events-none"
        }`}
      >
        <div className="py-2 border-b border-gray-100 dark:border-gray-800">
          <button
            type="button"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            aria-expanded={mobileServicesOpen}
            aria-controls="mobile-services"
            className={`flex items-center justify-between w-full text-gray-900 dark:text-white text-base font-semibold py-1 ${linkFocus} rounded`}
          >
            Services{" "}
            <ChevronDown
              aria-hidden="true"
              className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
            />
          </button>
          <div id="mobile-services" className={accordion(mobileServicesOpen)}>
            <div className="overflow-hidden">
              <div className="flex flex-col space-y-2.5 mt-3 pl-3">
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={current(s.href)}
                    className="text-gray-600 dark:text-gray-400 font-medium text-sm py-1"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Link
          href="/#how-it-works"
          onClick={() => setIsOpen(false)}
          className="text-gray-900 dark:text-white text-base font-semibold py-2 border-b border-gray-100 dark:border-gray-800"
        >
          How it Works
        </Link>

        <div className="py-2 border-b border-gray-100 dark:border-gray-800">
          <button
            type="button"
            onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
            aria-expanded={mobileCompanyOpen}
            aria-controls="mobile-company"
            className={`flex items-center justify-between w-full text-gray-900 dark:text-white text-base font-semibold py-1 ${linkFocus} rounded`}
          >
            Company{" "}
            <ChevronDown
              aria-hidden="true"
              className={`w-5 h-5 transition-transform duration-200 ${mobileCompanyOpen ? "rotate-180" : ""}`}
            />
          </button>
          <div id="mobile-company" className={accordion(mobileCompanyOpen)}>
            <div className="overflow-hidden">
              <div className="flex flex-col space-y-2.5 mt-3 pl-3">
                {COMPANY.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={current(s.href)}
                    className="text-gray-600 dark:text-gray-400 font-medium text-sm py-1"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Link
          href="/dashboard"
          onClick={() => setIsOpen(false)}
          className="text-gray-900 dark:text-white text-base font-semibold py-2 border-b border-gray-100 dark:border-gray-800"
        >
          Dashboard
        </Link>

        <div className="pt-3 grid grid-cols-2 gap-3">
          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-3 rounded-full text-center font-bold text-xs flex items-center justify-center"
          >
            Live Dashboard
          </Link>
          <Link
            href={CAL_LINK}
            onClick={() => setIsOpen(false)}
            className="bg-brand-600 text-white py-3 rounded-full text-center font-bold text-xs shadow-[0_8px_18px_-8px_rgba(124,58,237,0.67)] flex items-center justify-center gap-1.5"
          >
            <Calendar className="w-4 h-4" aria-hidden="true" /> Book a Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
