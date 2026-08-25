import type { Review } from "@/data/types";
import { Stars } from "./Stars";

interface ReviewCardProps {
  review: Review;
  index?: number;
}

/** Alternating rotation + width so the postcard strip doesn't read as a repeated grid tile. */
const ROTATIONS = ["-rotate-1", "rotate-1", "-rotate-[0.5deg]", "rotate-[0.5deg]"];
const WIDTHS = ["w-[280px]", "w-[240px]", "w-[300px]", "w-[260px]"];

/**
 * ReviewCard — a pinned "postcard" for the horizontal review strip.
 * Slight per-card rotation and varied width, cream surface, amber star rating.
 */
export function ReviewCard({ review, index = 0 }: ReviewCardProps) {
  const rotate = ROTATIONS[index % ROTATIONS.length];
  const width = WIDTHS[index % WIDTHS.length];

  return (
    // The fade-in (.reveal) and the postcard tilt both animate `transform` —
    // on the same element the higher-specificity `.reveal.in` rule silently
    // wins and cancels the tilt. Split them onto outer/inner elements so
    // neither transform can stomp the other.
    <div
      className={`postcard reveal ${width} shrink-0`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className={`${rotate} flex h-full flex-col gap-4 rounded-2xl border p-6 shadow-soft transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}
        style={{
          borderColor: "var(--color-border)",
          background: "var(--color-surface)",
        }}
      >
        <Stars rating={review.rating} size={13} showValue={false} />
        <p className="flex-1 text-sm leading-relaxed italic" style={{ color: "var(--color-text-muted)" }}>
          "{review.text}"
        </p>
        <div className="flex items-center gap-3">
          {/* Avatar circle */}
          <span
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-semibold"
            style={{
              background: "rgba(227,154,59,0.12)",
              color: "var(--color-accent)",
            }}
          >
            {review.author.charAt(0)}
          </span>
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--color-primary)" }}>
              {review.author}
            </p>
            <p className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>
              {review.source}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
