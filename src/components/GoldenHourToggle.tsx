import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

/**
 * GoldenHourToggle — arch-shaped toggle in the header.
 * "Day" = crisp cream and marble-bright.
 * "Golden Hour" = deeper amber glow behind images, warmer palette.
 * Styled after the real arch lighting in the restaurant.
 */
export function GoldenHourToggle() {
  const { toggleTheme, isGolden } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "group relative flex min-h-[36px] items-center gap-2 rounded-pill border px-3 py-1.5 text-xs font-medium transition-all duration-500",
        isGolden
          ? "border-accent/40 bg-accent/10 text-accent-700"
          : "border-primary/15 bg-surface/70 text-primary",
      )}
      aria-label={`Switch to ${isGolden ? "day" : "golden hour"} mode`}
      title={isGolden ? "Day mode" : "Golden hour mode"}
    >
      {/* Animated icon */}
      <span
        className={cn(
          "flex h-5 w-5 items-center justify-center rounded-full transition-all duration-500",
          isGolden
            ? "bg-accent text-primary shadow-glow"
            : "bg-primary/10 text-primary",
        )}
      >
        {isGolden ? (
          <Moon size={11} strokeWidth={2} />
        ) : (
          <Sun size={11} strokeWidth={2} />
        )}
      </span>

      {/* Label */}
      <span className="hidden sm:inline">
        {isGolden ? "Golden Hour" : "Day"}
      </span>
    </button>
  );
}
