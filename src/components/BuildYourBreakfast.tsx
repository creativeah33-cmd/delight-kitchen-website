import { useMemo, useState } from "react";
import { Plus, Trash2, Utensils } from "lucide-react";
import { BREAKFAST_EXTRAS, SITE } from "@/data/site";
import { cn } from "@/lib/utils";

const BASES = [
  { id: "sourdough", name: "Toasted Sourdough", price: 5.0 },
  { id: "muffin", name: "Toasted English Muffin", price: 5.0 },
  { id: "pide", name: "Warm Pide", price: 6.0 },
];

const EGG_BASE = { id: "eggs", name: "Two free-range eggs (any way)", price: 5.0 };

type DietFilter = "all" | "halal" | "vegan";

/**
 * Build-Your-Breakfast — Element B interactive plate builder.
 * Marble-textured card with black steel borders.
 * Fully keyboard-operable (checkboxes under the hood).
 * ARIA live region announces running total for screen readers.
 */
export function BuildYourBreakfast() {
  const [base, setBase] = useState<string>("sourdough");
  const [withEggs, setWithEggs] = useState(true);
  const [extras, setExtras] = useState<string[]>([]);
  const [dietFilter, setDietFilter] = useState<DietFilter>("all");

  const basePrice = useMemo(
    () => (withEggs ? EGG_BASE.price : 0) + (BASES.find((b) => b.id === base)?.price ?? 0),
    [base, withEggs],
  );

  const extrasTotal = useMemo(
    () =>
      extras.reduce(
        (sum, id) => sum + (BREAKFAST_EXTRAS.find((e) => e.name === id)?.price ?? 0),
        0,
      ),
    [extras],
  );

  const total = basePrice + extrasTotal;

  const toggleExtra = (name: string) =>
    setExtras((p) => (p.includes(name) ? p.filter((n) => n !== name) : [...p, name]));

  const filteredExtras = BREAKFAST_EXTRAS.filter((e) => {
    if (dietFilter === "halal") return e.halal;
    if (dietFilter === "vegan") return e.vegan;
    return true;
  });

  return (
    <div
      className="relative overflow-hidden rounded-3xl border shadow-card"
      style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
    >
      <div className="grid md:grid-cols-12">
        {/* Left — configurator */}
        <div className="md:col-span-7 p-5 xs:p-6 md:p-8">
          <div className="flex items-center gap-2">
            <span
              className="grid h-8 w-8 place-items-center rounded-full"
              style={{ background: "var(--color-accent)", color: "var(--color-primary)" }}
            >
              <Utensils size={14} />
            </span>
            <p className="eyebrow">Build your breakfast</p>
          </div>
          <h3
            className="mt-3 font-display text-2xl tracking-tight xs:text-3xl md:text-4xl"
            style={{ color: "var(--color-primary)" }}
          >
            Your plate, your price.
          </h3>

          {/* Diet filter */}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>
              Filter:
            </span>
            {(["all", "halal", "vegan"] as DietFilter[]).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setDietFilter(f)}
                className={cn(
                  "rounded-pill px-3 py-1 text-xs font-medium transition-all",
                  dietFilter === f
                    ? "shadow-soft"
                    : "border",
                )}
                style={{
                  background: dietFilter === f ? "var(--color-accent)" : "transparent",
                  color: dietFilter === f ? "var(--color-primary)" : "var(--color-text-muted)",
                  borderColor: dietFilter !== f ? "var(--color-border)" : undefined,
                }}
              >
                {f === "all" ? "All" : f === "halal" ? "Halal" : "Vegan"}
              </button>
            ))}
          </div>

          {/* Base */}
          <fieldset className="mt-6 md:mt-7">
            <legend className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-text-muted)" }}>
              1 · Base
            </legend>
            <div className="mt-2 grid grid-cols-1 gap-2 xs:grid-cols-3">
              {BASES.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setBase(b.id)}
                  className={cn(
                    "group flex min-h-[44px] items-center justify-between gap-2 rounded-2xl border px-4 py-3 text-left text-sm transition-all",
                  )}
                  style={{
                    borderColor: base === b.id ? "var(--color-primary)" : "var(--color-border)",
                    background: base === b.id ? "var(--color-primary)" : "var(--color-surface)",
                    color: base === b.id ? "var(--color-secondary)" : "var(--color-primary)",
                  }}
                  aria-pressed={base === b.id}
                >
                  <span className="font-medium">{b.name}</span>
                  <span className="shrink-0 text-xs tabular" style={{ opacity: 0.7 }}>
                    £{b.price.toFixed(2)}
                  </span>
                </button>
              ))}
            </div>
          </fieldset>

          {/* Eggs toggle */}
          <fieldset className="mt-5">
            <legend className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-text-muted)" }}>
              2 · Eggs?
            </legend>
            <div className="mt-2 flex gap-2">
              <button
                type="button"
                onClick={() => setWithEggs(true)}
                className="min-h-[44px] rounded-2xl border px-4 py-2.5 text-sm transition-all"
                style={{
                  borderColor: withEggs ? "var(--color-primary)" : "var(--color-border)",
                  background: withEggs ? "var(--color-primary)" : "var(--color-surface)",
                  color: withEggs ? "var(--color-secondary)" : "var(--color-primary)",
                }}
                aria-pressed={withEggs}
              >
                Yes please · £{EGG_BASE.price.toFixed(2)}
              </button>
              <button
                type="button"
                onClick={() => setWithEggs(false)}
                className="min-h-[44px] rounded-2xl border px-4 py-2.5 text-sm transition-all"
                style={{
                  borderColor: !withEggs ? "var(--color-primary)" : "var(--color-border)",
                  background: !withEggs ? "var(--color-primary)" : "var(--color-surface)",
                  color: !withEggs ? "var(--color-secondary)" : "var(--color-primary)",
                }}
                aria-pressed={!withEggs}
              >
                No, ta
              </button>
            </div>
          </fieldset>

          {/* Extras */}
          <fieldset className="mt-5">
            <legend className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-text-muted)" }}>
              3 · Add as you like
            </legend>
            <div className="mt-2 flex flex-wrap gap-1.5" role="group" aria-label="Breakfast extras">
              {filteredExtras.map((e) => {
                const on = extras.includes(e.name);
                return (
                  <button
                    key={e.name}
                    type="button"
                    role="checkbox"
                    aria-checked={on}
                    onClick={() => toggleExtra(e.name)}
                    className={cn(
                      "group inline-flex min-h-[36px] items-center gap-1.5 rounded-pill border px-3 py-1.5 text-xs font-medium transition-all",
                    )}
                    style={{
                      borderColor: on ? "var(--color-accent)" : "var(--color-border)",
                      background: on ? "var(--color-accent)" : "var(--color-surface)",
                      color: on ? "var(--color-primary)" : "var(--color-primary)",
                    }}
                  >
                    {on ? <Trash2 size={11} /> : <Plus size={11} />}
                    {e.name}
                    <span className="tabular text-[10px]" style={{ opacity: 0.7 }}>
                      £{e.price.toFixed(2)}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        </div>

        {/* Right — marble receipt card */}
        <div className="md:col-span-5 relative">
          <div className="md:hidden steel-line" />
          <div
            className="relative h-full p-5 pt-6 xs:p-6 xs:pt-7 md:p-8 marble-surface"
            style={{ borderLeft: "1px solid var(--color-border)" }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-text-muted)" }}>
              Your order
            </p>
            <p className="mt-1 font-display text-xl" style={{ color: "var(--color-primary)" }}>
              Delight Kitchen
            </p>
            <p className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>
              337 Ballards Lane · N12
            </p>

            {/* ARIA live region for screen readers */}
            <div aria-live="polite" className="sr-only">
              Running total: £{total.toFixed(2)}
            </div>

            <div className="mt-5 space-y-2 text-sm md:mt-6" style={{ color: "var(--color-text-muted)" }}>
              {withEggs && <Row name={EGG_BASE.name} price={EGG_BASE.price} />}
              <Row
                name={BASES.find((b) => b.id === base)?.name ?? ""}
                price={BASES.find((b) => b.id === base)?.price ?? 0}
              />
              {extras.length > 0 && (
                <>
                  <div className="steel-line my-3" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-text-muted)" }}>
                    + extras
                  </p>
                  {extras.map((name) => (
                    <Row
                      key={name}
                      name={name}
                      price={BREAKFAST_EXTRAS.find((e) => e.name === name)?.price ?? 0}
                    />
                  ))}
                </>
              )}
            </div>

            <div className="mt-5 border-t border-dashed pt-4 md:mt-6" style={{ borderColor: "var(--color-border)" }}>
              <div className="flex items-baseline justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-text-muted)" }}>
                  Total
                </p>
                <p className="text-3xl font-semibold tabular" style={{ color: "var(--color-primary)" }}>
                  £{total.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Send to kitchen CTA */}
            <a
              href={SITE.uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5 w-full justify-center md:mt-6"
            >
              Send to the kitchen
            </a>

            <p className="mt-2 text-center text-[10px]" style={{ color: "var(--color-text-muted)" }}>
              Opens Uber Eats · cash &amp; card in-store
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ name, price }: { name: string; price: number }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="truncate">{name}</span>
      <span className="shrink-0 tabular" style={{ opacity: 0.7 }}>
        £{price.toFixed(2)}
      </span>
    </div>
  );
}
