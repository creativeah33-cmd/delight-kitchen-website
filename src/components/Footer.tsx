import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { HOURS, NAV, SITE } from "@/data/site";
import { EncausticBand } from "./EncausticBand";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-20 md:mt-24" style={{ background: "var(--color-primary)", color: "var(--color-secondary)" }}>
      {/* Encaustic tile band at top */}
      <EncausticBand className="opacity-30 invert" />

      <div className="container-x grid gap-10 py-14 xs:grid-cols-2 md:grid-cols-12 md:gap-12 md:py-20">
        <div className="xs:col-span-2 md:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(230,217,196,0.5)" }}>
            Est. 2019 · North Finchley
          </p>
          <h2 className="mt-3 font-display text-3xl leading-[1.05] tracking-tight md:text-5xl">
            Good food, great coffee,{" "}
            <br />
            <span style={{ color: "var(--color-accent)" }}>every day.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed" style={{ color: "rgba(230,217,196,0.7)" }}>
            Drop in for a coffee, stay for lunch. We're at 337 Ballards Lane,
            open early, walk-ins always welcome.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={SITE.uberEatsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Order on Uber Eats
              <ArrowUpRight size={16} />
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 rounded-pill border px-6 py-3 text-sm font-semibold tracking-wide transition-colors"
              style={{ borderColor: "rgba(230,217,196,0.3)", color: "var(--color-secondary)" }}
            >
              See the menu
            </Link>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(230,217,196,0.5)" }}>
            Visit
          </p>
          <ul className="mt-3 space-y-2 text-sm" style={{ color: "rgba(230,217,196,0.85)" }}>
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }} strokeWidth={1.75} />
              <span>
                {SITE.address.line1}
                <br />
                {SITE.address.line2}
              </span>
            </li>
            <li>
              <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-2.5 transition-colors hover:text-accent">
                <Phone size={15} style={{ color: "var(--color-accent)" }} strokeWidth={1.75} />
                <span className="tabular">{SITE.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2.5 transition-colors hover:text-accent">
                <Mail size={15} style={{ color: "var(--color-accent)" }} strokeWidth={1.75} />
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(230,217,196,0.5)" }}>
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm" style={{ color: "rgba(230,217,196,0.85)" }}>
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(230,217,196,0.5)" }}>
            Hours
          </p>
          <ul className="mt-3 space-y-1.5 text-xs" style={{ color: "rgba(230,217,196,0.85)" }}>
            {HOURS.map((h) => (
              <li key={h.day} className="flex items-center justify-between gap-3">
                <span className="uppercase tracking-widest" style={{ color: "rgba(230,217,196,0.5)" }}>
                  {h.day.slice(0, 3)}
                </span>
                <span className="tabular" style={{ color: "rgba(230,217,196,0.9)" }}>
                  {h.open}–{h.close}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: "rgba(230,217,196,0.1)" }}>
        <div className="container-x flex flex-col items-start justify-between gap-4 py-5 xs:flex-row xs:items-center">
          <p className="text-xs" style={{ color: "rgba(230,217,196,0.5)" }}>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-pill border transition-colors"
              style={{ borderColor: "rgba(230,217,196,0.2)", color: "rgba(230,217,196,0.7)" }}
            >
              <Instagram size={15} strokeWidth={1.75} />
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-pill border transition-colors"
              style={{ borderColor: "rgba(230,217,196,0.2)", color: "rgba(230,217,196,0.7)" }}
            >
              <Facebook size={15} strokeWidth={1.75} />
            </a>
            <a
              href={SITE.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="grid h-9 w-9 place-items-center rounded-pill border transition-colors"
              style={{ borderColor: "rgba(230,217,196,0.2)", color: "rgba(230,217,196,0.7)" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
