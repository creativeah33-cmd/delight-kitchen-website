import type { MenuItem } from "@/data/types";
import { DietaryTagPill } from "./DietaryTagPill";

interface DishCardProps {
  item: MenuItem;
  index?: number;
  variant?: "card" | "row";
  /** Larger treatment for a single hero dish in a bento layout. */
  featured?: boolean;
}

/**
 * DishCard — menu item display in two variants:
 * - "card": stacked with image, used in grids
 * - "row": horizontal, used in menu page listings
 * Styled with marble surface, black steel borders, amber hover.
 */
export function DishCard({ item, index = 0, variant = "card", featured = false }: DishCardProps) {
  if (variant === "row") {
    return <RowDish item={item} index={index} />;
  }

  return (
    <div
      className="reveal group relative flex flex-col overflow-hidden rounded-2xl border shadow-soft transition-shadow duration-300 hover:shadow-card"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-surface)",
        transitionDelay: `${index * 60}ms`,
      }}
    >
      {/* Image */}
      <div className={`relative shrink-0 overflow-hidden golden-warmth ${featured ? "aspect-[16/11]" : "aspect-[5/4]"}`}>
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {/* Warm vignette that deepens on hover — ties back to the arch glow */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: "linear-gradient(to top, rgba(28,24,21,0.62) 0%, transparent 45%), radial-gradient(ellipse 70% 50% at 85% 0%, rgba(227,154,59,0.25) 0%, transparent 60%)",
            opacity: 0.85,
          }}
        />
        {/* Price tag — stub hanging off the top-right corner, not a pill-on-photo */}
        <div className="absolute right-3 top-0">
          <div
            className="rounded-b-lg px-3 py-1.5 text-sm font-semibold tabular shadow-soft"
            style={{ background: "var(--color-accent)", color: "var(--color-primary)" }}
          >
            £{item.price.toFixed(2)}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className={`font-serif ${featured ? "text-3xl" : "text-xl"}`} style={{ color: "var(--color-primary)" }}>
          {item.name}
        </h3>
        <span
          className="mt-1.5 block h-px w-8 origin-left scale-x-100 transition-transform duration-500 ease-out group-hover:w-16"
          style={{ background: "var(--color-accent)" }}
          aria-hidden="true"
        />
        <p className="mt-2.5 flex-1 font-serif text-[15px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          {item.description}
        </p>
        {/* Dietary tags */}
        {item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {item.tags.filter(t => ["halal", "v", "vgn", "spicy"].includes(t)).map((tag) => (
              <DietaryTagPill key={tag} tag={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function RowDish({ item, index }: { item: MenuItem; index: number }) {
  return (
    <div
      className="reveal group flex items-start gap-4 py-5 md:gap-6"
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      {/* Thumbnail */}
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border golden-warmth md:h-20 md:w-20"
           style={{ borderColor: "var(--color-border)" }}>
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-lg md:text-xl" style={{ color: "var(--color-primary)" }}>
            {item.name}
          </h3>
          <span className="shrink-0 text-sm font-semibold tabular" style={{ color: "var(--color-accent)" }}>
            £{item.price.toFixed(2)}
          </span>
        </div>
        <p className="mt-1 font-serif text-[15px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          {item.description}
        </p>
        {item.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {item.tags.filter(t => ["halal", "v", "vgn", "spicy"].includes(t)).map((tag) => (
              <DietaryTagPill key={tag} tag={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
