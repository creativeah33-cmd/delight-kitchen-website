import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { EncausticBand } from "@/components/EncausticBand";
import { SITE, HOURS, FAQS } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";

export default function VisitContact() {
  useReveal();

  return (
    <main className="pb-24">
      <Hero variant="compact" />

      <section className="container-x pt-12 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          
          {/* Details (Left) */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Visit & Contact"
              title={
                <>
                  Come and <span style={{ color: "var(--color-accent)" }}>find us.</span>
                </>
              }
            />
            
            <div className="mt-10 space-y-10">
              <div className="reveal flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full" style={{ background: "rgba(227,154,59,0.12)", color: "var(--color-accent)" }}>
                  <MapPin size={18} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-xl" style={{ color: "var(--color-primary)" }}>Address</h3>
                  <p className="mt-2 text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {SITE.address.line1}<br />
                    {SITE.address.line2}<br />
                    {SITE.address.borough}
                  </p>
                  <a
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mt-4 text-sm"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="reveal flex items-start gap-4" style={{ transitionDelay: "100ms" }}>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full" style={{ background: "rgba(227,154,59,0.12)", color: "var(--color-accent)" }}>
                  <Phone size={18} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-xl" style={{ color: "var(--color-primary)" }}>Call</h3>
                  <p className="mt-2 text-base" style={{ color: "var(--color-text-muted)" }}>
                    <a href={`tel:${SITE.phoneTel}`} className="hover:text-accent transition-colors tabular">
                      {SITE.phoneDisplay}
                    </a>
                  </p>
                </div>
              </div>

              <div className="reveal flex items-start gap-4" style={{ transitionDelay: "200ms" }}>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full" style={{ background: "rgba(227,154,59,0.12)", color: "var(--color-accent)" }}>
                  <Mail size={18} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-xl" style={{ color: "var(--color-primary)" }}>Email</h3>
                  <p className="mt-2 text-base" style={{ color: "var(--color-text-muted)" }}>
                    <a href={`mailto:${SITE.email}`} className="hover:text-accent transition-colors">
                      {SITE.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="reveal flex items-start gap-4" style={{ transitionDelay: "300ms" }}>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full" style={{ background: "rgba(227,154,59,0.12)", color: "var(--color-accent)" }}>
                  <Clock size={18} strokeWidth={1.75} />
                </span>
                <div className="w-full">
                  <h3 className="font-display text-xl" style={{ color: "var(--color-primary)" }}>Hours</h3>
                  <ul className="mt-3 space-y-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
                    {HOURS.map((h) => (
                      <li key={h.day} className="flex justify-between border-b pb-2" style={{ borderColor: "var(--color-border)" }}>
                        <span className="font-medium">{h.day}</span>
                        <span className="tabular">{h.open} – {h.close}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs" style={{ color: "var(--color-text-muted)" }}>
                    {SITE.lastSeating}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map (Right) */}
          <div className="reveal lg:col-span-7 h-[400px] lg:h-auto rounded-3xl overflow-hidden border shadow-card" style={{ borderColor: "var(--color-border)" }}>
            <iframe
              title="Delight Kitchen location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.531238622116!2d-0.1764619!3d51.6135249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761922c1514781%3A0xc07ce9b1f7d5494d!2sDelight%20Kitchen%20Bistro%20%26%20Cafe!5e0!3m2!1sen!2suk!4v1714152843073!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "sepia(0.45) hue-rotate(5deg) saturate(1.3) brightness(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

      <EncausticBand className="mt-20 md:mt-32" />

      {/* FAQs */}
      <section className="container-x pt-20 md:pt-32">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Questions?"
            title={
              <>
                Things you might <span style={{ color: "var(--color-accent)" }}>want to know.</span>
              </>
            }
          />
          <div className="mt-12 divide-y" style={{ borderColor: "var(--color-border)" }}>
            {FAQS.map((faq, i) => (
              <FaqRow key={faq.q} q={faq.q} a={faq.a} delay={i * 50} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/** FAQ row with a Framer Motion height-animated answer, replacing the plain <details>. */
function FaqRow({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="reveal p-5 first:pt-0" style={{ transitionDelay: `${delay}ms` }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left font-display text-lg"
        style={{ color: "var(--color-primary)" }}
      >
        {q}
        <span
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-transform duration-300"
          style={{ borderColor: "var(--color-border)", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-4 pr-10 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
