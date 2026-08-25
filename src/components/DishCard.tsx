import { Link } from "react-router-dom";
import { ArrowUpRight, Star, ShoppingBag } from "lucide-react";
import type { MenuItem } from "@/data/types";
import { DietaryTagPill } from "./DietaryTagPill";
import { SITE } from "@/data/site";

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

  // Derive ingredient highlights from description for featured card
  const FEATURED_INGREDIENTS = [
    "Vanilla pancakes", "Smoked bacon", "Free-range eggs", "Maple syrup", "Berry compote",
  ];

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
        {/* Featured badge */}
        {featured && (
          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-pill px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]"
            style={{ background: "rgba(28,24,21,0.7)", color: "#E39A3B", backdropFilter: "blur(8px)" }}>
            <Star size={9} fill="#E39A3B" strokeWidth={0} />
            Signature dish
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <h3 className={`font-serif ${featured ? "text-3xl" : "text-xl"}`} style={{ color: "var(--color-primary)" }}>
          {item.name}
        </h3>
        <span
          className="mt-1.5 block h-px w-8 origin-left scale-x-100 transition-[width] duration-500 ease-out group-hover:w-16"
          style={{ background: "var(--color-accent)" }}
          aria-hidden="true"
        />
        <p className="mt-2.5 font-serif text-[15px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          {item.description}
        </p>

        {/* ── Featured-only rich content ── */}
        {featured && (
          <>
            {/* Social proof bar */}
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border px-4 py-3"
              style={{ borderColor: "var(--color-border)", background: "rgba(227,154,59,0.06)" }}>
              <div className="flex items-center gap-1.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={12} fill="#E39A3B" strokeWidth={0} />
                ))}
                <span className="ml-1 text-sm font-semibold" style={{ color: "var(--color-primary)" }}>4.9</span>
              </div>
              <span className="h-3 w-px" style={{ background: "var(--color-border)" }} />
              <span className="text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>
                🏆 Most ordered plate
              </span>
              <span className="h-3 w-px" style={{ background: "var(--color-border)" }} />
              <span className="text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>
                96% recommended
              </span>
            </div>

            {/* Ingredient highlights */}
            <div className="mt-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-text-muted)" }}>
                What's in it
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {FEATURED_INGREDIENTS.map(ing => (
                  <span key={ing}
                    className="rounded-pill border px-2.5 py-1 text-xs font-medium"
                    style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}>
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Chef's note */}
            <blockquote className="mt-5 border-l-2 pl-4 italic text-sm leading-relaxed"
              style={{ borderColor: "var(--color-accent)", color: "var(--color-text-muted)" }}>
              "The pancake that put us on the map — ordered by name before customers even sit down."
              <cite className="mt-1 block not-italic text-xs font-semibold" style={{ color: "var(--color-accent)" }}>
                — The Kitchen
              </cite>
            </blockquote>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SITE.uberEatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-pill px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300"
                style={{ background: "var(--color-accent)", color: "var(--color-primary)" }}
              >
                <ShoppingBag size={14} strokeWidth={2} />
                Order on Uber Eats
              </a>
              <Link
                to="/menu"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-pill border px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors"
                style={{ borderColor: "var(--color-border)", color: "var(--color-primary)" }}
              >
                Full menu
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </>
        )}

        {/* Dietary tags — non-featured only (featured has richer content above) */}
        {!featured && item.tags.length > 0 && (
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
