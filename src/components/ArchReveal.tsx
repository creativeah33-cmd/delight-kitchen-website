import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * ArchReveal — Element A: "The Arch Lights Up"
 * Scroll-scrubbed interaction for the Our Space section.
 *
 * The arch's light doesn't just switch on once — it tracks scroll position
 * the whole time the arch is on screen, like walking past it in the room:
 * - Background shifts from cool muted grey to warm cream-and-amber glow
 * - The LED strip traces the arch's inner edge in step with scroll
 * - The photo drifts (parallax) and settles as the arch comes fully into view
 *
 * Built on useScroll + useTransform so the effect is continuous, not a
 * one-shot threshold trigger. Static fully-lit fallback under
 * prefers-reduced-motion.
 */
interface ArchRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function ArchReveal({ children, className = "" }: ArchRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [reduced] = useState(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 30%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  const dashOffset = useTransform(progress, [0, 1], [1500, 0]);
  const glowOpacity = useTransform(progress, [0, 0.5, 1], [0, 0.4, 1]);
  const traceOpacity = useTransform(progress, [0, 0.15, 1], [0, 0.7, 0.7]);
  const bgFrom = useTransform(
    progress,
    [0, 1],
    ["rgba(180,177,172,0.3)", "rgba(230,217,196,0.6)"],
  );
  const bgTo = useTransform(
    progress,
    [0, 1],
    ["rgba(210,208,204,0.5)", "rgba(245,242,236,0.9)"],
  );
  const imgY = useTransform(progress, [0, 1], [reduced ? 0 : 18, 0]);
  const imgScale = useTransform(progress, [0, 1], [reduced ? 1 : 1.08, 1]);
  const bgGradient = useTransform([bgFrom, bgTo], ([from, to]) => `linear-gradient(180deg, ${from} 0%, ${to} 100%)`);

  return (
    <div ref={ref} className={`relative w-full ${className}`}>
      {/* Arch container — fixed vertical radius (clamp), not 50% of box
          height, so tall photo crops get a shallow archway cap instead of
          an elongated dome that swallows half the image. */}
      <motion.div
        className="relative w-full overflow-hidden"
        style={{
          borderRadius: "50% 50% 12px 12px / clamp(40px, 16%, 140px) clamp(40px, 16%, 140px) 12px 12px",
          background: reduced
            ? "linear-gradient(180deg, rgba(230,217,196,0.6) 0%, rgba(245,242,236,0.9) 100%)"
            : bgGradient,
        }}
      >
        {/* Photo — subtle parallax settle */}
        <motion.div
          className="relative z-0"
          style={reduced ? undefined : { y: imgY, scale: imgScale }}
        >
          {children}
        </motion.div>

        {/* Warm glow overlay — sits above the photo so the arch visibly warms */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 mix-blend-soft-light"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(227,154,59,0.55) 0%, transparent 70%)",
            opacity: reduced ? 1 : glowOpacity,
          }}
          aria-hidden="true"
        />

        {/* LED light strip along the arch edge — on top, clearly visible */}
        <svg
          className="pointer-events-none absolute inset-0 z-20 h-full w-full"
          viewBox="0 0 400 500"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M 20 490 L 20 100 C 20 40 90 10 200 10 C 310 10 380 40 380 100 L 380 490"
            fill="none"
            stroke="#E39A3B"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              filter: "drop-shadow(0 0 4px rgba(227,154,59,0.9))",
              ...(reduced
                ? { opacity: 0.85, strokeDasharray: 1500, strokeDashoffset: 0 }
                : { opacity: traceOpacity, strokeDasharray: 1500, strokeDashoffset: dashOffset }),
            }}
          />
        </svg>
      </motion.div>

      {/* Shadow glow beneath the arch */}
      <motion.div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-8 w-3/4 rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(227,154,59,0.15) 0%, transparent 70%)",
          opacity: reduced ? 1 : glowOpacity,
        }}
        aria-hidden="true"
      />
    </div>
  );
}
