import type { DietaryTag } from "@/data/types";

const TAG_LABELS: Record<string, string> = {
  halal: "Halal",
  v: "Vegetarian",
  vgn: "Vegan",
  gf: "Gluten-Free",
  spicy: "Spicy",
  new: "New",
  best: "Signature",
  popular: "Popular",
};

/**
 * DietaryTagPill — cognac-toned pill for dietary labels.
 * Warm leather accents per the brief.
 */
export function DietaryTagPill({ tag }: { tag: DietaryTag | string }) {
  const label = TAG_LABELS[tag] ?? tag;

  return (
    <span className="tag-cognac">
      {label}
    </span>
  );
}
