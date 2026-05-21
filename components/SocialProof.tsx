import React from "react";

export default function SocialProof() {
  return (
    <section className="py-16 bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
          Trusted by growth-focused clinics across the US
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 dark:opacity-40 grayscale">
          {['Luxe Aesthetics', 'Smile Dental Studio', 'Renew Therapy Center', 'Elite MedSpa', 'Vitality Clinic'].map((logo, i) => (
            <div key={i} className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-gray-300 dark:bg-gray-600 flex-shrink-0" />
              <span className="whitespace-nowrap">{logo}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-8">
          * Client names shown for illustrative purposes. Real case studies shared on discovery call.
        </p>
      </div>
    </section>
  );
}