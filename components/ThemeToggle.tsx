"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

/** Icon swap is pure CSS ([data-theme]) so there is no hydration flicker or mounted-state juggling. */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="icon-btn theme-toggle"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
    >
      <Moon className="icon moon" aria-hidden="true" />
      <Sun className="icon sun" aria-hidden="true" />
    </button>
  );
}
