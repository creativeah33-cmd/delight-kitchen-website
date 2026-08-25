import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";
import { useTimeOfDay } from "@/hooks/useTimeOfDay";
import { useOpenNow } from "@/hooks/useOpenNow";

interface HeroProps {
  variant?: "home" | "compact";
}

/**
 * Hero — full-bleed photograph of the dining room on home,
 * compact version on inner pages.
 *
 * Home variant features:
 * - Full-bleed room photo with gradient overlay
 * - Fraunces headline: "Good food, great coffee..."
 * - Amber primary CTA + ghost secondary CTA
 * - On-load: arch LED edge warm fade-in (~800ms)
 */
export function Hero({ variant = "home" }: HeroProps) {
  if (variant === "compact") {
    return <CompactHero />;
  }
  return <HomeHero />;
}

function CompactHero() {
  return (
    <section className="relative pt-28 pb-10 md:pt-36 md:pb-14">
      <div className="container-x">
        <div className="grid items-end gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <p className="eyebrow inline-flex items-center gap-2">
              <span className="inline-block h-px w-6" style={{ background: "var(--color-accent)" }} />
              {SITE.name}
            </p>
            <h1
              className="mt-3 font-display text-display-md tracking-tightest"
              style={{ color: "var(--color-primary)" }}
            >
              {SITE.tagline}
            </h1>
          </div>
          <div className="md:col-span-4">
            <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Family-run English &amp; Turkish bistro on Ballards Lane, North Finchley.
              Halal kitchen, vegan-friendly. Open 7am daily.
            </p>
          </div>
        </div>
      </div>
      <div className="steel-line mt-10 md:mt-12" />
    </section>
  );
}

function HomeHero() {
  const { message } = useTimeOfDay();
  const { isOpen, today } = useOpenNow();

  return (
    <section className="relative overflow-hidden" style={{ background: "var(--color-primary)" }}>
      <div className="grid grid-cols-1 pt-16 md:min-h-[88vh] md:grid-cols-12 md:pt-20">
        {/* ── Text panel — dark steel, no photo behind it ── */}
        <div className="relative order-2 flex min-w-0 flex-col justify-center gap-8 px-4 py-14 xs:px-5 sm:px-6 md:order-1 md:col-span-6 md:py-0 md:pl-10 lg:col-span-5 lg:pl-12 xl:pl-16">
          {/* Live status strip */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-white/80">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium">
              <span
                className={`h-2 w-2 rounded-full shrink-0 ${
                  isOpen ? "bg-green-400 animate-warm-pulse" : "bg-red-400"
                }`}
              />
              {isOpen ? "Open now" : "Closed"} · {today.day} · {today.open}–{today.close}
            </span>
            <span className="hidden h-3 w-px bg-white/30 sm:inline-block" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/70">
              {message}
            </span>
          </div>

          {/* Headline */}
          <div className="max-w-lg">
            <h1
              className="font-display text-4xl leading-[1.05] tracking-tight text-white animate-rise sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.1s" }}
            >
              Good food, great coffee, and an atmosphere you{" "}
              <span style={{ color: "#E39A3B" }}>won't want to leave.</span>
            </h1>

            <p
              className="mt-5 max-w-md text-base leading-relaxed text-white/75 animate-rise md:text-lg"
              style={{ animationDelay: "0.25s" }}
            >
              Turkish eggs at seven, sourdough smashed avo at nine, shakshuka at
              noon — and a regulars' table that always has your name on it.
            </p>

            {/* CTAs */}
            <div
              className="mt-8 flex flex-wrap items-center gap-3 animate-rise"
              style={{ animationDelay: "0.4s" }}
            >
              <Link to="/menu" className="btn-primary">
                See the Menu
                <ArrowRight size={16} />
              </Link>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-pill border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-primary-800"
              >
                Visit Us
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* ── Arch photo panel — bleeds to the viewport edge ── */}
        <div className="relative order-1 aspect-[5/6] overflow-hidden xs:aspect-[4/5] md:order-2 md:col-span-6 md:aspect-auto md:h-full lg:col-span-7">
          <HeroArch />
        </div>
      </div>
    </section>
  );
}

/** The hero photo, masked into a shallow arch dome that "switches on" on load. */
function HeroArch() {
  return (
    <div className="hero-arch-mask relative h-full w-full">
      <img
        src="/images/hero-room.jpg"
        alt="Inside Delight Kitchen — marble tables and cane chairs beneath the gallery wall, looking toward the counter"
        className="absolute inset-0 h-full w-full object-cover golden-warmth"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Cool-to-warm room tone */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(28,24,21,0.05) 0%, rgba(28,24,21,0.35) 100%)",
        }}
      />

      {/* Amber glow — fades in on load */}
      <motion.div
        className="pointer-events-none absolute inset-0 mix-blend-soft-light"
        style={{ background: "radial-gradient(ellipse 70% 45% at 50% 18%, rgba(227,154,59,0.65) 0%, transparent 70%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
      />

      {/* LED trace along the dome edge */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M 3 100 L 3 24 Q 3 3 50 3 Q 97 3 97 24 L 97 100"
          fill="none"
          stroke="#E39A3B"
          strokeWidth="0.6"
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 3px rgba(227,154,59,0.9))" }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.85 }}
          transition={{ pathLength: { duration: 1.3, delay: 0.2, ease: "easeOut" }, opacity: { duration: 0.4, delay: 0.2 } }}
        />
      </svg>
    </div>
  );
}
