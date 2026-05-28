"use client";

import React, { useState, useRef } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function clientAction(formData: FormData) {
    setIsPending(true);
    const result = await submitContactForm(null, formData);
    
    if (result.success) {
      toast.success("Inquiry Submitted", {
        description: result.message,
      });
      formRef.current?.reset(); // Clear the form smoothly
    } else {
      toast.error("Submission Failed", {
        description: result.message,
      });
    }
    
    setIsPending(false);
  }

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
      <form ref={formRef} action={clientAction} className="space-y-6">
        {/* Honeypot Field for Spam Bots */}
        <input 
          type="text" 
          name="website" 
          tabIndex={-1} 
          autoComplete="off" 
          style={{ display: "none" }} 
          aria-hidden="true" 
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-gray-900 dark:text-gray-200">Full Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
              placeholder="Dr. Sarah Jenkins"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-900 dark:text-gray-200">Work Email *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
              placeholder="sarah@eliteclinic.com"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="clinic" className="text-sm font-semibold text-gray-900 dark:text-gray-200">Clinic / Organization Name</label>
          <input 
            type="text" 
            id="clinic" 
            name="clinic" 
            className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
            placeholder="Elite MedSpa"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-semibold text-gray-900 dark:text-gray-200">Project Scope or Question *</label>
          <textarea 
            id="message" 
            name="message" 
            required 
            rows={5}
            className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow resize-none"
            placeholder="We are currently missing around 40 calls a week and use Jane App for our EMR. Looking for..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isPending}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-4 rounded-xl transition-all shadow-cta hover:shadow-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin mr-2" /> Processing...
            </>
          ) : (
            "Submit Inquiry"
          )}
        </button>
      </form>
    </div>
  );
}