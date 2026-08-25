import { Star } from "lucide-react";
import { SITE } from "@/data/site";
import { OpenIndicator } from "./OpenIndicator";

/**
 * TrustRibbon — horizontal bar below hero showing:
 * Rating · Hours · Dietary tags · Open indicator
 */
export function TrustRibbon() {
  return (
    <div className="border-y py-4" style={{ borderColor: "var(--color-border)" }}>
      <div className="container-x">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < Math.floor(SITE.rating.score) ? "#E39A3B" : "none"}
                  stroke="#E39A3B"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <span className="text-sm font-semibold tabular" style={{ color: "var(--color-text)" }}>
              {SITE.rating.score}
            </span>
            <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              ({SITE.rating.count}+ reviews)
            </span>
          </div>

          {/* Divider */}
          <div className="hidden h-4 w-px sm:block" style={{ background: "var(--color-border)" }} />

          {/* Open indicator */}
          <OpenIndicator />

          {/* Divider */}
          <div className="hidden h-4 w-px sm:block" style={{ background: "var(--color-border)" }} />

          {/* Dietary tags */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="tag-cognac">
              Halal Kitchen
            </span>
            <span className="tag-cognac">
              Vegan Friendly
            </span>
            <span className="tag-cognac">
              Family Run
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
