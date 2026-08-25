import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu as MenuIcon, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/useScrolled";
import { NAV, SITE } from "@/data/site";
import { GoldenHourToggle } from "./GoldenHourToggle";
import { OpenIndicator } from "./OpenIndicator";

export function Header() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // The home hero is a solid dark steel + photo panel that sits directly
  // under the transparent header — dark nav text would be invisible over it.
  // Every other hero is a light page background, so dark text stays default.
  const onDarkHero = pathname === "/" && !scrolled;
  const inkColor = onDarkHero ? "#FDFCFA" : "var(--color-primary)";
  const inkBorder = onDarkHero ? "rgba(253,252,250,0.3)" : "rgba(28,24,21,0.15)";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        "pl-safe pr-safe",
        scrolled
          ? "border-b bg-surface/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
      style={{ borderColor: scrolled ? "var(--color-border)" : "transparent" }}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex min-w-0 items-center gap-2.5"
          aria-label="Delight Kitchen home"
        >
          {/* Real hand-drawn logo — a white chip keeps it legible on both the
              dark home hero and every light page background. Fixed px height
              AND width (not h-full/percentage) so the badge can never be
              sized by the source photo's own huge natural dimensions. */}
          <span
            className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-soft transition-transform duration-500 group-hover:-rotate-2"
          >
            <img
              src="/images/logo-real.png"
              alt="Delight Kitchen"
              className="h-full w-full object-cover object-center"
            />
          </span>
          <span
            className="hidden text-[10px] font-medium uppercase tracking-[0.18em] leading-tight xs:block"
            style={{ color: onDarkHero ? "rgba(253,252,250,0.65)" : "var(--color-text-muted)" }}
          >
            Kitchen<br />Bistro &amp; Cafe
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative rounded-pill px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-accent"
                    : "hover:text-accent",
                )
              }
              style={{ color: inkColor }}
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-arc"
                      className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full"
                      style={{
                        background: "#E39A3B",
                        boxShadow: "0 0 8px 2px rgba(227,154,59,0.55)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          {/* Golden Hour toggle */}
          <div className="hidden md:block">
            <GoldenHourToggle />
          </div>

          {/* Open indicator — desktop only */}
          <div className="hidden lg:block">
            <OpenIndicator compact />
          </div>

          <a
            href={`tel:${SITE.phoneTel}`}
            className="hidden items-center gap-2 rounded-pill border px-4 py-2 text-sm font-medium transition-colors md:inline-flex"
            style={{
              borderColor: inkBorder,
              color: inkColor,
            }}
            aria-label={`Call us on ${SITE.phoneDisplay}`}
          >
            <Phone size={14} strokeWidth={1.75} />
            <span className="text-xs tabular">{SITE.phoneDisplay}</span>
          </a>

          <a
            href={SITE.uberEatsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden btn-primary sm:inline-flex"
          >
            Order
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-pill border transition-colors md:hidden"
            style={{ borderColor: inkBorder, color: inkColor }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X size={18} strokeWidth={1.75} /> : <MenuIcon size={18} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={cn(
          "md:hidden",
          "overflow-hidden border-t backdrop-blur-md transition-[max-height,opacity] duration-500",
          open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0",
        )}
        style={{
          borderColor: "var(--color-border)",
          background: "rgba(245,242,236,0.95)",
        }}
        aria-hidden={!open}
      >
        <nav
          className="container-x flex flex-col gap-1 py-4"
          aria-label="Mobile navigation"
        >
          {NAV.map((item, idx) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "flex min-h-[44px] items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-base font-medium transition-all",
                  isActive
                    ? "border-primary/10 text-accent"
                    : "hover:border-primary/10",
                )
              }
              style={{ color: "var(--color-primary)" }}
            >
              <span>{item.label}</span>
              <span className="text-xs tracking-widest" style={{ color: "var(--color-text-muted)" }}>
                {String(idx + 1).padStart(2, "0")}
              </span>
            </NavLink>
          ))}

          {/* Mobile Golden Hour toggle */}
          <div className="mt-2 flex items-center justify-between px-4 py-2">
            <span className="text-sm font-medium" style={{ color: "var(--color-text-muted)" }}>
              Ambience
            </span>
            <GoldenHourToggle />
          </div>

          {/* CTA buttons */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="btn-ghost"
              onClick={() => setOpen(false)}
            >
              <Phone size={14} />
              Call us
            </a>
            <a
              href={SITE.uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={() => setOpen(false)}
            >
              Order
            </a>
          </div>
          <div className="pb-safe" />
        </nav>
      </div>
    </header>
  );
}
