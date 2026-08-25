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
        <div className="p-4 xs:p-6 md:col-span-7 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4" style={{ borderColor: "var(--color-border)" }}>
            <div className="flex items-center gap-2">
              <span
                className="grid h-8 w-8 place-items-center rounded-full"
                style={{ background: "var(--color-accent)", color: "var(--color-primary)" }}
              >
                <Utensils size={14} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-primary)" }}>
                  Plate Configurator
                </p>
                <p className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>
                  Customise your morning feast
                </p>
              </div>
            </div>

            {/* Diet filter */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-medium" style={{ color: "var(--color-text-muted)" }}>
                Filter:
              </span>
              {(["all", "halal", "vegan"] as DietFilter[]).map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setDietFilter(f)}
                  className={cn(
                    "rounded-pill px-3 py-1 text-xs font-medium transition-all",
                    dietFilter === f ? "shadow-soft" : "border",
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
          </div>

          {/* Step 1: Base */}
          <fieldset className="mt-6">
            <legend className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-primary)" }}>
              <span className="grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold" style={{ background: "rgba(227,154,59,0.2)", color: "var(--color-accent)" }}>
                1
              </span>
              Choose Your Base
            </legend>
            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {BASES.map((b) => {
                const active = base === b.id;
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setBase(b.id)}
                    className={cn(
                      "group flex min-h-[48px] items-center justify-between gap-3 rounded-xl border px-3.5 py-3 text-left transition-all",
                      active ? "shadow-soft ring-1" : "hover:border-accent/50",
                    )}
                    style={{
                      borderColor: active ? "var(--color-accent)" : "var(--color-border)",
                      background: active ? "rgba(227,154,59,0.1)" : "var(--color-surface)",
                      boxShadow: active ? "0 0 0 1px var(--color-accent)" : undefined,
                    }}
                    aria-pressed={active}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className="grid h-4 w-4 shrink-0 place-items-center rounded-full border transition-colors"
                        style={{
                          borderColor: active ? "var(--color-accent)" : "var(--color-border)",
                          background: active ? "var(--color-accent)" : "transparent",
                        }}
                      >
                        {active && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                      </span>
                      <span className="text-sm font-medium leading-snug truncate" style={{ color: "var(--color-primary)" }}>
                        {b.name}
                      </span>
                    </div>
                    <span
                      className="shrink-0 text-xs font-semibold tabular"
                      style={{ color: active ? "var(--color-accent)" : "var(--color-text-muted)" }}
                    >
                      £{b.price.toFixed(2)}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* Step 2: Eggs */}
          <fieldset className="mt-6">
            <legend className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-primary)" }}>
              <span className="grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold" style={{ background: "rgba(227,154,59,0.2)", color: "var(--color-accent)" }}>
                2
              </span>
              Add Free-Range Eggs?
            </legend>
            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setWithEggs(true)}
                className={cn(
                  "flex min-h-[48px] items-center justify-between gap-3 rounded-xl border px-3.5 py-3 text-left transition-all",
                  withEggs ? "shadow-soft ring-1" : "hover:border-accent/50",
                )}
                style={{
                  borderColor: withEggs ? "var(--color-accent)" : "var(--color-border)",
                  background: withEggs ? "rgba(227,154,59,0.1)" : "var(--color-surface)",
                  boxShadow: withEggs ? "0 0 0 1px var(--color-accent)" : undefined,
                }}
                aria-pressed={withEggs}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="grid h-4 w-4 shrink-0 place-items-center rounded-full border"
                    style={{
                      borderColor: withEggs ? "var(--color-accent)" : "var(--color-border)",
                      background: withEggs ? "var(--color-accent)" : "transparent",
                    }}
                  >
                    {withEggs && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "var(--color-primary)" }}>
                    Yes, 2 eggs (any way)
                  </span>
                </div>
                <span
                  className="shrink-0 text-xs font-semibold tabular"
                  style={{ color: withEggs ? "var(--color-accent)" : "var(--color-text-muted)" }}
                >
                  +£{EGG_BASE.price.toFixed(2)}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setWithEggs(false)}
                className={cn(
                  "flex min-h-[48px] items-center justify-between gap-3 rounded-xl border px-3.5 py-3 text-left transition-all",
                  !withEggs ? "shadow-soft ring-1" : "hover:border-accent/50",
                )}
                style={{
                  borderColor: !withEggs ? "var(--color-accent)" : "var(--color-border)",
                  background: !withEggs ? "rgba(227,154,59,0.1)" : "var(--color-surface)",
                  boxShadow: !withEggs ? "0 0 0 1px var(--color-accent)" : undefined,
                }}
                aria-pressed={!withEggs}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="grid h-4 w-4 shrink-0 place-items-center rounded-full border"
                    style={{
                      borderColor: !withEggs ? "var(--color-accent)" : "var(--color-border)",
                      background: !withEggs ? "var(--color-accent)" : "transparent",
                    }}
                  >
                    {!withEggs && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "var(--color-primary)" }}>
                    No eggs today
                  </span>
                </div>
                <span className="shrink-0 text-xs" style={{ color: "var(--color-text-muted)" }}>
                  Skip
                </span>
              </button>
            </div>
          </fieldset>

          {/* Step 3: Extras */}
          <fieldset className="mt-6">
            <div className="flex items-center justify-between">
              <legend className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-primary)" }}>
                <span className="grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold" style={{ background: "rgba(227,154,59,0.2)", color: "var(--color-accent)" }}>
                  3
                </span>
                Add Extras ({extras.length} selected)
              </legend>
              {extras.length > 0 && (
                <button
                  type="button"
                  onClick={() => setExtras([])}
                  className="text-xs font-medium hover:underline"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Clear all
                </button>
              )}
            </div>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2" role="group" aria-label="Breakfast extras">
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
                      "flex min-h-[44px] items-center justify-between gap-2.5 rounded-xl border px-3.5 py-2.5 text-left text-sm transition-all",
                      on ? "shadow-soft ring-1" : "hover:border-accent/50",
                    )}
                    style={{
                      borderColor: on ? "var(--color-accent)" : "var(--color-border)",
                      background: on ? "rgba(227,154,59,0.12)" : "var(--color-surface)",
                      boxShadow: on ? "0 0 0 1px var(--color-accent)" : undefined,
                    }}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className="grid h-4 w-4 shrink-0 place-items-center rounded border transition-colors"
                        style={{
                          borderColor: on ? "var(--color-accent)" : "var(--color-border)",
                          background: on ? "var(--color-accent)" : "transparent",
                          color: on ? "#fff" : "transparent",
                        }}
                      >
                        {on ? <Trash2 size={10} strokeWidth={2.5} /> : <Plus size={10} style={{ color: "var(--color-text-muted)" }} />}
                      </span>
                      <span className="truncate text-xs font-medium sm:text-sm" style={{ color: "var(--color-primary)" }}>
                        {e.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {e.halal && (
                        <span className="rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider" style={{ background: "rgba(34,197,94,0.12)", color: "#16a34a" }}>
                          Halal
                        </span>
                      )}
                      {e.vegan && (
                        <span className="rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider" style={{ background: "rgba(168,85,247,0.12)", color: "#9333ea" }}>
                          Vegan
                        </span>
                      )}
                      <span
                        className="text-xs font-semibold tabular"
                        style={{ color: on ? "var(--color-accent)" : "var(--color-text-muted)" }}
                      >
                        £{e.price.toFixed(2)}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </fieldset>
        </div>

        {/* Right — receipt summary panel */}
        <div className="relative md:col-span-5">
          <div className="steel-line md:hidden" />
          <div
            className="relative flex h-full flex-col justify-between p-5 pt-6 xs:p-6 xs:pt-7 md:p-8 marble-surface"
            style={{ borderLeft: "1px solid var(--color-border)" }}
          >
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-accent)" }}>
                    Your Custom Plate
                  </p>
                  <p className="font-display text-xl" style={{ color: "var(--color-primary)" }}>
                    Delight Kitchen
                  </p>
                </div>
                <span className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider" style={{ background: "rgba(227,154,59,0.15)", color: "var(--color-accent)" }}>
                  Live Total
                </span>
              </div>
              <p className="text-[10px] mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                337 Ballards Lane · North Finchley
              </p>

              {/* Running summary breakdown */}
              <div className="mt-5 space-y-2 text-sm border-t pt-4" style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}>
                <Row
                  name={BASES.find((b) => b.id === base)?.name ?? "Base"}
                  price={BASES.find((b) => b.id === base)?.price ?? 0}
                  isBase
                />
                {withEggs && <Row name={EGG_BASE.name} price={EGG_BASE.price} />}
                {extras.length > 0 && (
                  <>
                    <div className="steel-line my-3" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-accent)" }}>
                      Extras ({extras.length})
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
            </div>

            {/* Bottom calculation + CTA */}
            <div className="mt-6 border-t border-dashed pt-4" style={{ borderColor: "var(--color-border)" }}>
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-text-muted)" }}>
                    Estimated Total
                  </p>
                  <p className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>
                    Includes selected base &amp; toppings
                  </p>
                </div>
                <p className="text-3xl font-semibold tabular" style={{ color: "var(--color-primary)" }}>
                  £{total.toFixed(2)}
                </p>
              </div>

              <a
                href={SITE.uberEatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 w-full justify-center py-3 text-sm font-semibold shadow-soft"
              >
                Send to Kitchen on Uber Eats
              </a>

              <p className="mt-2 text-center text-[10px]" style={{ color: "var(--color-text-muted)" }}>
                Opens Uber Eats · Walk-in orders also welcome
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ name, price, isBase }: { name: string; price: number; isBase?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className={cn("truncate", isBase && "font-medium")} style={{ color: isBase ? "var(--color-primary)" : undefined }}>
        {name}
      </span>
      <span className="shrink-0 tabular font-medium" style={{ opacity: 0.85 }}>
        £{price.toFixed(2)}
      </span>
    </div>
  );
}
