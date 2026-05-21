import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bot, Instagram, Linkedin, Facebook } from "lucide-react";
import { CAL_LINK } from "@/lib/utils";

const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-9 h-9 rounded-full bg-brand-600 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shadow-sm">
                <Image src="/logo.png" alt="PyrexxAI Logo" fill sizes="36px" quality={100} className="object-cover z-10" />
                <Bot className="text-white w-5 h-5 absolute z-0" />
              </div>
              <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">PyrexxAI</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 max-w-xs">
              Intelligent voice AI implementations for MedSpas, Dental & Therapy Clinics. Stop missing calls, start scaling.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" aria-label="X (formerly Twitter)" className="text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"><XIcon className="w-5 h-5" /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#solutions" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">AI Receptionist</a></li>
              <li><a href="#solutions" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Lead Intake Agent</a></li>
              <li><a href="#how-it-works" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">EMR Integration</a></li>
              <li><a href="#how-it-works" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Custom AI Training</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#roi" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">ROI Calculator</a></li>
              <li><a href="#results" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Client Results</a></li>
              <li><a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">HIPAA Compliance</a></li>
              <li><a href="#faq" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Help & FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="mailto:clifford.pyrexxai@gmail.com" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 dark:text-gray-500">© {new Date().getFullYear()} PyrexxAI. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-sm text-gray-400 dark:text-gray-500">Engineered for seamless patient experiences.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}