import { useState, useEffect } from "react";

export type ThemeMode = "day" | "golden";

/**
 * Golden Hour theme hook.
 * Swaps a `data-theme` attribute on <html> for CSS custom property switching.
 * Persists in localStorage.
 */
export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem("delight-theme") as ThemeMode;
      if (saved === "day" || saved === "golden") return saved;
    } catch {
      // Ignore localStorage errors
    }
    return "day";
  });

  useEffect(() => {
    const el = document.documentElement;
    if (theme === "golden") {
      el.setAttribute("data-theme", "golden");
    } else {
      el.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem("delight-theme", theme);
    } catch {
      // Ignore localStorage errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "day" ? "golden" : "day"));
  };

  return {
    theme,
    toggleTheme,
    isGolden: theme === "golden",
  };
}