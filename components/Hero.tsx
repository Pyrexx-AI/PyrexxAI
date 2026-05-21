"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, PhoneCall, CalendarCheck, Clock } from "lucide-react";
import { CAL_LINK, getFadeUpVariants, getStaggerContainer } from "@/lib/utils";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const fadeUp = getFadeUpVariants(prefersReducedMotion);
  const stagger = getStaggerContainer(prefersReducedMotion);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 overflow-hidden dark:bg-gray-950 transition-colors duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/40 dark:bg-brand-900/20 blur-[100px] rounded-full" />
        <div className="absolute top-40 left-1/4 w-[600px] h-[300px] bg-accent-50/40 dark:bg-accent-900/20 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto space-y-8">
          <motion.h1 variants={fadeUp} className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
            Your Clinic's Front Desk.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400">
              Reimagined with AI.
            </span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            38% of patient calls go unanswered. PyrexxAI deploys custom voice AI that answers every call 24/7, books directly into your schedule, and qualifies every lead — HIPAA-compliant and live in 14 days.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950">
              Book a Free Demo &rarr;
            </a>
            <a href="#how-it-works" className="w-full sm:w-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-200 px-8 py-4 rounded-full text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950">
              See How It Works
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-6 text-sm font-medium text-gray-500 dark:text-gray-400">
            <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5" /> HIPAA Compliant</span>
            <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5" /> Live in 14 Days</span>
            <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5" /> 24/7 Coverage</span>
          </motion.div>
        </motion.div>

        <motion.div initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-16 lg:mt-24 relative max-w-4xl mx-auto">
          <div className="rounded-3xl border border-gray-200/50 dark:border-gray-800/50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl shadow-[0_25px_60px_rgba(37,99,235,0.08)] p-6 sm:p-10 relative overflow-hidden">
            <div className="max-w-md mx-auto text-left relative z-10 space-y-6">
              <div className="flex items-center space-x-4 bg-white/90 dark:bg-gray-800/90 rounded-2xl p-4 shadow-sm border border-brand-100 dark:border-brand-900/50">
                <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider mb-1">Inbound Call Active</p>
                  <div className="flex items-end space-x-1 h-6 text-brand-600 dark:text-brand-400">
                    <span className="wave-bar"></span><span className="wave-bar"></span><span className="wave-bar"></span>
                    <span className="wave-bar"></span><span className="wave-bar"></span><span className="wave-bar"></span>
                    <span className="wave-bar"></span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tabular-nums">00:23</span>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-card dark:shadow-none border border-gray-100 dark:border-gray-700 p-5 relative">
                <div className="absolute -top-3 -right-3 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> AI Booked
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center shrink-0 mt-1">
                    <CalendarCheck className="text-emerald-600 dark:text-emerald-400 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Appointment Confirmed</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Emily R. — Botox Consultation</p>
                    <div className="inline-flex items-center bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1 rounded-lg border border-gray-200 dark:border-gray-700">
                      <Clock className="w-4 h-4 mr-1.5 text-gray-400 dark:text-gray-500" /> Tomorrow, 2:30 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}