import { Hero } from "@/components/Hero";
import { ArchReveal } from "@/components/ArchReveal";
import { ArchFrame } from "@/components/ArchFrame";
import { SectionHeading } from "@/components/SectionHeading";
import { EncausticBand } from "@/components/EncausticBand";
import { useReveal } from "@/hooks/useReveal";

export default function OurSpace() {
  useReveal();

  return (
    <main className="pb-24">
      <Hero variant="compact" />

      {/* Intro & Arch Reveal */}
      <section className="container-x pt-12 md:pt-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div className="reveal md:order-2">
            <ArchReveal>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/arch-niche.jpg"
                  alt="Backlit arched niche over the banquette, marble tables, cane chairs and a ceramic jar"
                  loading="lazy"
                  decoding="async"
                  className="photo-crisp h-full w-full object-cover object-center"
                />
              </div>
            </ArchReveal>
          </div>
          <div className="reveal md:order-1">
            <p className="eyebrow">Our Space</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl lg:text-6xl" style={{ color: "var(--color-primary)" }}>
              Not your typical <br />
              <span style={{ color: "var(--color-accent)" }}>neighbourhood</span> caff.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              <p>
                When we took over the corner of Ballards Lane, we wanted to build
                a space that felt like an extension of our own dining room, but
                better lit.
              </p>
              <p>
                The brief to our designers was simple: warmth without rusticity.
                We stripped the room back to expose the bones, built in the arched
                niches, and washed them in warm lime-plaster.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EncausticBand className="mt-20 md:mt-32" />

      {/* Materials & Details */}
      <section className="container-x pt-20 md:pt-32">
        <SectionHeading
          variant="chapter"
          numeral="02"
          eyebrow="The Materials"
          title={
            <>
              Black steel, marble, and <span style={{ color: "var(--color-accent)" }}>amber glow.</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Featured — The Arches, larger and the only glowing frame */}
          <div className="reveal group lg:col-span-2">
            <ArchFrame className="mx-auto aspect-[3/4] w-full max-w-[380px]" glowing>
              <img
                src="/images/arch-niche.jpg"
                alt="The Arches"
                loading="lazy"
                className="photo-crisp h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,24,21,0.5) 0%, transparent 40%)" }} />
            </ArchFrame>
            <div className="mt-8 max-w-[380px] px-4 text-center">
              <h3 className="font-display text-3xl" style={{ color: "var(--color-primary)" }}>The Arches</h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Three signature backlit niches casting a permanent Golden Hour glow across the dining room.
              </p>
            </div>
          </div>

          {/* Supporting pair, smaller frames */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-3">
            {[
              {
                title: "The Floor",
                desc: "Black-and-white encaustic medallion tiles grounding the space in classic bistro tradition.",
                img: "/images/hero-room.jpg",
              },
              {
                title: "The Furniture",
                desc: "Matte black powder-coated steel paired with white-veined marble for a crisp, tactile contrast.",
                img: "/images/interior-wide.png",
              },
            ].map((item, i) => (
              <div key={item.title} className="reveal group" style={{ transitionDelay: `${(i + 1) * 100}ms` }}>
                <ArchFrame className="mx-auto aspect-[3/4] w-full max-w-[220px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,24,21,0.5) 0%, transparent 40%)" }} />
                </ArchFrame>
                <div className="mt-6 max-w-[220px] mx-auto text-center px-2">
                  <h3 className="font-display text-xl" style={{ color: "var(--color-primary)" }}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Atmosphere */}
      <section className="container-x pt-24 md:pt-40">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="reveal relative aspect-square overflow-hidden rounded-3xl border shadow-card" style={{ borderColor: "var(--color-border)" }}>
             <img
                src="/images/interior-wide.png"
                alt="Wide view of the dining room"
                loading="lazy"
                className="h-full w-full object-cover golden-warmth"
              />
          </div>
          <div className="reveal md:pl-10">
            <h2 className="font-display text-4xl leading-tight md:text-5xl" style={{ color: "var(--color-primary)" }}>
              The regulars'<br />
              <span style={{ color: "var(--color-accent)" }}>table.</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              <p>
                Despite the considered design, the hospitality remains unmistakably
                homely. We are a family-run kitchen first and foremost.
              </p>
              <p>
                Whether you're stopping by for a quick flat white on the way to the tube,
                or settling in for a two-hour Sunday brunch with the kids, there is
                always a table waiting for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
