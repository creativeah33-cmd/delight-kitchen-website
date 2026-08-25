import { Star } from "lucide-react";

interface StarsProps {
  rating: number;
  size?: number;
  showValue?: boolean;
}

/** Star rating with amber fill per the brand palette. */
export function Stars({ rating, size = 14, showValue = true }: StarsProps) {
  return (
    <div className="inline-flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            fill={i < Math.floor(rating) ? "#E39A3B" : "none"}
            stroke="#E39A3B"
            strokeWidth={1.5}
          />
        ))}
      </div>
      {showValue && (
        <span className="text-sm font-semibold tabular" style={{ color: "var(--color-primary)" }}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
