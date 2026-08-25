import { useEffect, useState } from "react";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { Hero } from "@/components/Hero";
import { DishCard } from "@/components/DishCard";
import { EncausticBand } from "@/components/EncausticBand";
import { MENU } from "@/data/menu";
import { CATEGORIES, SITE } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";
import type { CategoryId, DietaryTag } from "@/data/types";

const FILTERS: { id: "all" | DietaryTag; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "best", label: "Signature" },
  { id: "popular", label: "Loved" },
  { id: "halal", label: "Halal" },
  { id: "v", label: "V" },
  { id: "vgn", label: "Vegan" },
  { id: "spicy", label: "Spicy" },
];

export default function Menu() {
  useReveal();
  const [activeCat, setActiveCat] = useState<CategoryId>("breakfast");
  const [filter, setFilter] = useState<"all" | DietaryTag>("all");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ids = CATEGORIES.map((c) => c.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = (visible[0].target as HTMLElement).id as CategoryId;
          if (ids.includes(id)) setActiveCat(id);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    CATEGORIES.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="pb-24">
      <Hero variant="compact" />

      {/* Sticky filter bar */}
      <div
        className="sticky top-16 z-30 mt-2 border-b backdrop-blur-md md:top-20"
        style={{ borderColor: "var(--color-border)", background: "rgba(245,242,236,0.9)" }}
      >
        <div className="container-x py-2.5 md:py-3">
          {/* Category nav */}
          <div className="flex overflow-x-auto no-scrollbar -mx-4 px-4 xs:-mx-5 xs:px-5 md:mx-0 md:px-0 md:overflow-visible">
            <nav aria-label="Menu categories" className="flex gap-1.5 flex-nowrap md:flex-wrap">
              {CATEGORIES.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="whitespace-nowrap rounded-pill border px-3.5 py-2 text-sm font-medium transition-colors shrink-0"
                  style={{
                    borderColor: activeCat === c.id ? "var(--color-primary)" : "var(--color-border)",
                    background: activeCat === c.id ? "var(--color-primary)" : "var(--color-surface)",
                    color: activeCat === c.id ? "var(--color-secondary)" : "var(--color-primary)",
                  }}
                >
                  {c.name}
                </a>
              ))}
            </nav>
          </div>
          {/* Dietary filters */}
          <div className="mt-2 flex overflow-x-auto no-scrollbar -mx-4 px-4 xs:-mx-5 xs:px-5 md:mx-0 md:mt-2 md:px-0 md:overflow-visible">
            <div className="flex items-center gap-1.5 flex-nowrap md:flex-wrap">
              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] md:inline shrink-0" style={{ color: "var(--color-text-muted)" }}>
                Filter:
              </span>
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className="whitespace-nowrap rounded-pill px-3 py-1.5 text-xs font-medium transition-colors shrink-0"
                  style={{
                    background: filter === f.id ? "var(--color-accent)" : "transparent",
                    color: filter === f.id ? "var(--color-primary)" : "var(--color-primary)",
                    border: filter === f.id ? "none" : "1px solid var(--color-border)",
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      {CATEGORIES.map((cat, catIdx) => {
        const items = MENU.filter((m) => {
          if (m.category !== cat.id) return false;
          if (filter !== "all" && !m.tags.includes(filter as DietaryTag)) return false;
          return true;
        });
        return (
          <section key={cat.id} id={cat.id} className="container-x scroll-mt-44 py-10 md:py-20">
            <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">
                  {String(catIdx + 1).padStart(2, "0")} · {cat.name}
                </p>
                <h2 className="mt-3 font-display text-display-md tracking-tight" style={{ color: "var(--color-primary)" }}>
                  {cat.name}
                </h2>
                <p className="mt-3 max-w-xl text-base" style={{ color: "var(--color-text-muted)" }}>
                  {cat.blurb}
                </p>
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-text-muted)" }}>
                {items.length} {items.length === 1 ? "dish" : "dishes"}
              </p>
            </div>

            <div className="mt-10 divide-y" style={{ borderColor: "var(--color-border)" }}>
              {items.map((item, i) => (
                <DishCard key={item.id} item={item} variant="row" index={i} />
              ))}
              {items.length === 0 && (
                <p className="py-8 text-center text-sm" style={{ color: "var(--color-text-muted)" }}>
                  No dishes match this filter. Try "Everything."
                </p>
              )}
            </div>

            {catIdx < CATEGORIES.length - 1 && <EncausticBand className="mt-8" />}
          </section>
        );
      })}

      {/* Order online banner — amber-lit counter ticket, not the dark blob from Home */}
      <section className="container-x pt-12">
        <div
          className="reveal relative overflow-hidden rounded-3xl border shadow-card"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div
            className="relative p-8 md:p-12"
            style={{
              background: "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-surface) 70%)",
            }}
          >
            {/* Encaustic band, faint, as texture rather than a blurred blob */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 opacity-30">
              <EncausticBand />
            </div>

            <div className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="eyebrow inline-flex items-center gap-2">
                  <span className="inline-block h-px w-5" style={{ background: "var(--color-accent)" }} />
                  Stay in, we'll cook
                </p>
                <h2 className="mt-3 font-display text-3xl md:text-4xl" style={{ color: "var(--color-primary)" }}>
                  Order for delivery <span style={{ color: "var(--color-accent)" }}>or collection.</span>
                </h2>
                <p className="mt-3 max-w-md text-sm" style={{ color: "var(--color-text-muted)" }}>
                  We deliver across N12, N20 and N3 on Uber Eats. Or call us to
                  skip the queue and collect in 15.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
                <a
                  href={SITE.uberEatsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark"
                >
                  <ShoppingBag size={15} strokeWidth={1.75} />
                  Order on Uber Eats
                </a>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="btn-ghost"
                >
                  Call to collect
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
