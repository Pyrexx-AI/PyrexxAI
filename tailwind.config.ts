import type { Config } from "tailwindcss";

const config: Config = {
  // Automatically use the system's light/dark mode preference
  darkMode: 'media', 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        accent: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37, 99, 235, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(37, 99, 235, 0)" },
        },
      },
      boxShadow: {
        "cta": "0 4px 14px 0 rgba(37, 99, 235, 0.39)",
        "cta-hover": "0 6px 20px rgba(37, 99, 235, 0.23)",
        "card": "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)",
        "card-hover": "0 8px 30px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;