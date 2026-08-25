interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  /**
   * "default" — the eyebrow-line + headline formula.
   * "chapter" — headline set beside an oversized ghost numeral, for section
   *   transitions that deserve more weight (used sparingly).
   * "quote"   — an oversized serif quotation mark stands in for the eyebrow,
   *   for sections built from voices other than the brand's own (reviews).
   */
  variant?: "default" | "chapter" | "quote";
  /** Numeral shown behind the title when variant="chapter". */
  numeral?: string;
  /** Set true on a dark background so ghost text stays visible. */
  onDark?: boolean;
}

/** Section heading — eyebrow/chapter/quote variants so sections stop repeating one formula. */
export function SectionHeading({ eyebrow, title, description, variant = "default", numeral, onDark = false }: SectionHeadingProps) {
  const textMuted = onDark ? "rgba(230,217,196,0.7)" : "var(--color-text-muted)";
  const textPrimary = onDark ? "var(--color-secondary)" : "var(--color-primary)";

  if (variant === "chapter") {
    return (
      <div className="relative max-w-2xl">
        {numeral && (
          <span className={`chapter-numeral pointer-events-none absolute -top-8 -left-2 select-none xs:-top-10 ${onDark ? "on-dark" : ""}`} aria-hidden="true">
            {numeral}
          </span>
        )}
        <div className="relative">
          <p className="eyebrow inline-flex items-center gap-2" style={{ color: textMuted }}>
            <span className="inline-block h-px w-5" style={{ background: "var(--color-accent)" }} />
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-display-md tracking-tight" style={{ color: textPrimary }}>
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-xl text-base leading-relaxed" style={{ color: textMuted }}>
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (variant === "quote") {
    return (
      <div className="max-w-2xl">
        <span
          className="block font-display text-6xl leading-none"
          style={{ color: "var(--color-accent)" }}
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <h2 className="-mt-3 font-display text-display-md tracking-tight" style={{ color: textPrimary }}>
          {title}
        </h2>
        <p className="mt-1 text-eyebrow font-sans uppercase tracking-[0.18em] font-semibold" style={{ color: textMuted }}>
          {eyebrow}
        </p>
        {description && (
          <p className="mt-3 max-w-xl text-base leading-relaxed" style={{ color: textMuted }}>
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <p className="eyebrow inline-flex items-center gap-2" style={{ color: textMuted }}>
        <span className="inline-block h-px w-5" style={{ background: "var(--color-accent)" }} />
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-display-md tracking-tight" style={{ color: textPrimary }}>
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-xl text-base leading-relaxed" style={{ color: textMuted }}>
          {description}
        </p>
      )}
    </div>
  );
}
