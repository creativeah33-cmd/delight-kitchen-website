import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Hero } from "@/components/Hero";
import { TrustRibbon } from "@/components/TrustRibbon";
import { SectionHeading } from "@/components/SectionHeading";
import { DishCard } from "@/components/DishCard";
import { ReviewCard } from "@/components/ReviewCard";
import { BuildYourBreakfast } from "@/components/BuildYourBreakfast";
import { ArchReveal } from "@/components/ArchReveal";
import { EncausticBand } from "@/components/EncausticBand";
import { MENU } from "@/data/menu";
import { CATEGORIES, REVIEWS, SITE } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";

const FACTS = [
  "Family run since day one",
  "Halal kitchen · vegan-friendly menu",
  "High chairs & kids' colouring sheets",
  "4.8★ · FSA rated Good, May 2026",
];

/**
 * Home — section flow per brief:
 * Hero → Trust Ribbon → Menu Highlights → Build Your Breakfast
 * → Our Space (Arch Reveal) → Reviews → Visit strip
 *
 * Background bands alternate (cream → marble → warm tint → steel-dark → cream)
 * instead of uniform white spacing, so the page has a light-to-golden-hour
 * pace rather than one flat rhythm repeated top to bottom.
 */
export default function Home() {
  useReveal();

  const signature = ["delight-in-london", "turkish-delight", "sourdough-avocado"]
    .map((id) => MENU.find((m) => m.id === id))
    .filter(Boolean) as typeof MENU;

  return (
    <main className="pb-24">
      <Hero />

      {/* Trust Ribbon */}
      <TrustRibbon />

      {/* ───── Signature plates — bento: one featured dish, two stacked ───── */}
      <section className="container-x pt-20 md:pt-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Signature plates"
            title={
              <>
                Three dishes you'll{" "}
                <span style={{ color: "var(--color-accent)" }}>come back</span> for.
              </>
            }
            description="The pancake stack that put us on the map, the brunch regulars order by name, and the smashed avo people ask for before they've even sat down."
          />
          <Link to="/menu" className="link-underline shrink-0">
            See the full menu
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {signature.length === 3 && (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <DishCard item={signature[0]} index={0} featured />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1">
              <DishCard item={signature[1]} index={1} />
              <DishCard item={signature[2]} index={2} />
            </div>
          </div>
        )}
      </section>

      {/* ───── Build Your Breakfast (Element B) — marble band ───── */}
      <section className="marble-surface mt-20 py-20 md:mt-28 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Build your breakfast"
            title={
              <>
                Your plate,{" "}
                <span style={{ color: "var(--color-accent)" }}>your price.</span>
              </>
            }
            description="Pick a base, add eggs, throw on whatever you like. Prices are real — halal and vegan filters included."
          />
          <div className="mt-10">
            <BuildYourBreakfast />
          </div>
        </div>
      </section>

      {/* ───── Our Space — Arch Reveal (Element A) ───── */}
      <section className="container-x pt-20 md:pt-28">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <div className="reveal md:col-span-5">
            <ArchReveal>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/arch-niche.jpg"
                  alt="Backlit arched niche over the banquette with marble tables and a ceramic jar — the signature LED-lit plaster arch at Delight Kitchen"
                  loading="lazy"
                  decoding="async"
                  className="photo-crisp h-full w-full object-cover object-center"
                />
              </div>
            </ArchReveal>
          </div>
          <div className="reveal md:col-span-7 md:pl-6">
            <p className="eyebrow">Our space</p>
            <h2
              className="mt-3 font-display text-display-md tracking-tight"
              style={{ color: "var(--color-primary)" }}
            >
              Considered design.{" "}
              <span style={{ color: "var(--color-accent)" }}>Unpretentious warmth.</span>
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              <p>
                The space is more polished and design-forward than a typical neighbourhood
                caff — arched niches backlit with amber LEDs, black steel furniture,
                white-veined marble tables, rattan pendant lighting.
              </p>
              <p>
                Yet the hospitality is unmistakably homely — a hand-drawn logo, regulars
                greeted by name, generous home-style portions. Walk in and stay longer
                than you meant to.
              </p>
            </div>

            {/* Fact ticker — replaces the generic icon-in-circle grid */}
            <div className="ticker-row mt-8 overflow-hidden border-y py-3" style={{ borderColor: "var(--color-border)" }}>
              <ul className="sr-only">
                {FACTS.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="ticker-track gap-10 pr-10" aria-hidden="true">
                {[...FACTS, ...FACTS].map((f, i) => (
                  <span key={i} className="flex items-center gap-2 whitespace-nowrap text-sm font-medium" style={{ color: "var(--color-text-muted)" }}>
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--color-accent)" }} />
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <Link to="/our-space" className="btn-ghost">
                Explore our space
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EncausticBand className="mt-20 md:mt-28" />

      {/* ───── Reviews — quote heading + postcard strip, warm-tinted band ───── */}
      <section className="mt-16 py-16 md:mt-20 md:py-20" style={{ background: "rgba(230,217,196,0.28)" }}>
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              variant="quote"
              eyebrow="Why locals return"
              title={
                <>
                  People keep{" "}
                  <span style={{ color: "var(--color-accent)" }}>coming back.</span>
                </>
              }
              description="Not our marketing copy — just what people said after they'd already paid and left."
            />
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline shrink-0"
            >
              Read all {SITE.rating.count}+ on Google
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="scroll-x scroll-x-fade -mx-4 mt-10 gap-5 px-4 pb-4 pt-6 xs:-mx-5 xs:px-5 lg:mx-0 lg:px-0">
            {REVIEWS.map((r, i) => (
              <ReviewCard key={r.id} review={r} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── Visit strip ───── */}
      <section className="container-x pt-20 md:pt-28">
        <div
          className="relative grid grid-cols-1 items-stretch overflow-hidden rounded-3xl border shadow-card md:grid-cols-2"
          style={{ borderColor: "var(--color-border)", background: "var(--color-primary)", color: "var(--color-secondary)" }}
        >
          <div className="reveal relative p-8 md:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(230,217,196,0.5)" }}>
              Come and find us
            </p>
            <h2 className="mt-3 font-display text-display-md leading-[1.05]">
              We're a 3-minute walk from{" "}
              <span style={{ color: "var(--color-accent)" }}>West Finchley</span> tube.
            </h2>

            {/* Route motif — the walk from tube to table */}
            <div className="mt-4 flex items-center gap-2" aria-hidden="true">
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: "rgba(230,217,196,0.6)" }} />
              <svg width="56" height="8" viewBox="0 0 56 8" className="shrink-0">
                <line x1="2" y1="4" x2="54" y2="4" stroke="rgba(230,217,196,0.35)" strokeWidth="1.5" strokeDasharray="3 4" strokeLinecap="round" />
              </svg>
              <MapPin size={14} style={{ color: "var(--color-accent)" }} strokeWidth={1.75} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(230,217,196,0.6)" }}>
                337 Ballards Lane
              </span>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed" style={{ color: "rgba(230,217,196,0.8)" }}>
              No booking, no waiting on a slot that suits us — just the door,
              open seven days from 7am to 5pm, and a table that's usually free.
              Bringing 6 or more? Give us a quick call ahead.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full" style={{ background: "rgba(230,217,196,0.1)", color: "var(--color-accent)" }}>
                  <MapPin size={15} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(230,217,196,0.5)" }}>Address</p>
                  <p className="mt-1 text-sm">{SITE.address.line1}<br />{SITE.address.line2}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full" style={{ background: "rgba(230,217,196,0.1)", color: "var(--color-accent)" }}>
                  <MapPin size={15} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(230,217,196,0.5)" }}>Call</p>
                  <a href={`tel:${SITE.phoneTel}`} className="mt-1 inline-block text-sm tabular transition-colors hover:text-accent">
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get directions
                <ArrowUpRight size={16} />
              </a>
              <Link
                to="/visit"
                className="inline-flex items-center justify-center gap-2 rounded-pill border px-6 py-3 text-sm font-semibold tracking-wide transition-colors"
                style={{ borderColor: "rgba(230,217,196,0.3)", color: "var(--color-secondary)" }}
              >
                See full hours
              </Link>
            </div>
          </div>
          <div className="relative min-h-[260px] overflow-hidden golden-warmth">
            <img
              src="/images/interior-wide.png"
              alt="Interior of Delight Kitchen — the dining room from the counter, pendant lights, gallery wall and tiled floor"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(to left, transparent, rgba(28,24,21,0.3))" }} />
          </div>
        </div>
      </section>

      {/* ───── Category grid — bento: one featured chapter, four supporting ───── */}
      <section className="container-x pt-20 md:pt-28">
        <SectionHeading
          eyebrow="The menu, in chapters"
          title={
            <>
              From <span style={{ color: "var(--color-accent)" }}>first coffee</span> to last call.
            </>
          }
        />
        <div className="mt-8 grid auto-rows-[9rem] grid-cols-2 gap-4 sm:auto-rows-[10rem] sm:grid-cols-4 md:mt-10 md:auto-rows-[11rem]">
          {CATEGORIES.map((cat, i) => {
            const sample = MENU.find((m) => m.category === cat.id);
            const featured = i === 0;
            return (
              <Link
                key={cat.id}
                to="/menu"
                className={`reveal group relative flex flex-col overflow-hidden rounded-2xl border shadow-soft ${
                  featured ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
                }`}
                style={{
                  borderColor: "var(--color-border)",
                  background: "var(--color-surface)",
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <div className="relative h-full w-full overflow-hidden golden-warmth">
                  <img
                    src={sample?.image}
                    alt={cat.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,24,21,0.75), transparent 55%)" }} />
                  <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4">
                    <p className="text-[10px] font-medium uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.7)" }}>
                      0{i + 1}
                    </p>
                    <h3 className={`mt-1 font-display leading-tight ${featured ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"}`}>
                      {cat.name}
                    </h3>
                    {featured && (
                      <p className="mt-1.5 hidden max-w-xs text-xs leading-relaxed text-white/75 sm:block">
                        {cat.blurb}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
