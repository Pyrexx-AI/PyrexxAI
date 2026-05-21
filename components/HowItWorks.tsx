"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { getFadeUpVariants } from "@/lib/utils";

export default function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();
  const fadeUp = getFadeUpVariants(prefersReducedMotion);

  const steps =[
    { num: "01", title: "Audit", desc: "We map your current phone, booking, and lead workflows to identify every revenue leak." },
    { num: "02", title: "Train", desc: "We build and train your AI agent on your clinic's exact services, pricing, FAQs, and brand voice." },
    { num: "03", title: "Integrate", desc: "We connect your AI agent securely to your phone system and EMR — zero disruption." },
    { num: "04", title: "Optimize", desc: "Your agent goes live. We monitor calls, analyze performance, and retrain weekly." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Effortless Implementation</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">From kickoff to live AI receptionist in under 14 days.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-gray-200 dark:bg-gray-800 -z-10" />
          {steps.map((step, i) => (
            <motion.div key={i} whileInView="visible" initial="hidden" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative bg-white dark:bg-gray-950 md:bg-transparent md:dark:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none shadow-sm dark:shadow-none md:shadow-none border dark:border-gray-800 md:border-none border-gray-100">
              <div className="w-16 h-16 bg-white dark:bg-gray-800 border-2 border-brand-100 dark:border-brand-900/50 rounded-2xl flex items-center justify-center text-2xl font-bold text-brand-600 dark:text-brand-400 mb-6 shadow-sm mx-auto md:mx-0 transition-colors">
                {step.num}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center md:text-left">{step.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-center md:text-left leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}