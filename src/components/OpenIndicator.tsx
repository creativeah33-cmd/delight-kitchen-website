import { useOpenNow } from "@/hooks/useOpenNow";

/**
 * OpenIndicator — live "Open Now / Closes at [time]" badge.
 * Computed from real hours in Europe/London time.
 */
export function OpenIndicator({ compact = false }: { compact?: boolean }) {
  const { isOpen, closesAt, opensAt, dayName } = useOpenNow();

  if (compact) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium">
        <span
          className={`h-2 w-2 rounded-full shrink-0 ${
            isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"
          }`}
        />
        {isOpen ? "Open" : "Closed"}
      </span>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-pill border px-3 py-1.5 text-xs font-medium"
         style={{ borderColor: "var(--color-border)" }}>
      <span
        className={`h-2 w-2 rounded-full shrink-0 ${
          isOpen ? "bg-green-500 animate-warm-pulse" : "bg-red-400"
        }`}
      />
      <span style={{ color: "var(--color-text)" }}>
        {isOpen
          ? `Open now · closes ${closesAt}`
          : `Closed · opens ${dayName} ${opensAt}`}
      </span>
    </div>
  );
}
