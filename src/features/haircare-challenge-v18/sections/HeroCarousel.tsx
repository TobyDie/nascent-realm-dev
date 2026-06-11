import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  chapter: string;
  headline: string;
  caption: string;
  image?: string; // optional real R2 url; if missing -> placeholder
  alt: string;
};

const SLIDES: Slide[] = [
  {
    chapter: "the proof",
    headline: "120cm of bleached hair. Two products. About $10 a month.",
    caption:
      "Healthy hair was never about more products. Once I figured that out, I never went back — and I've been teaching it since.",
    image:
      "https://pub.hairqare.co/cdn-cgi/image/width=900,quality=80,format=auto/Sarah%20ATF%205%20(1).webp",
    alt: "Sarah showing her long bleached hair in natural light.",
  },
  {
    chapter: "the search",
    headline: "I tried twelve shampoos in twelve months. None of them were the problem.",
    caption:
      "By the time most women find us, they've tried five, ten, twenty things. That's not a coincidence.",
    alt: "Sarah at her bathroom counter.",
  },
  {
    chapter: "the founder",
    headline: "Brands paid me $20,000 to promote products that were destroying my hair.",
    caption:
      "When I figured out what my hair actually needed, I walked away from the deals and started teaching what they wouldn't.",
    alt: "Sarah, founder of HairQare.",
  },
  {
    chapter: "the method",
    headline: "On day 3 you make your own shampoo. The one you'll still use in five years.",
    caption:
      "It's not a routine you buy — it's a method you keep. Two products, your kitchen, about $10 a month from here on.",
    alt: "Sarah making her DIY shampoo at her kitchen counter.",
  },
  {
    chapter: "the community",
    headline: "250,000 women. 149 countries. The same two products on the counter.",
    caption:
      "This isn't a launch. It's a community that's been doing this for years. Sunday's cohort is the next one in.",
    alt: "Sarah with HairQare community members.",
  },
  {
    chapter: "the start",
    headline: "14 days. Two products. A method you keep for life.",
    caption:
      "Sunday's cohort is the next one in. 30-day money-back guarantee, no questions asked.",
    alt: "Sarah at home with her two-product routine.",
  },
];

function Placeholder({ index, alt }: { index: number; alt: string }) {
  return (
    <div className="hq-v18-hc-ph" role="img" aria-label={alt}>
      <span>[ Slide {index + 1} — {alt} ]</span>
    </div>
  );
}

export function HeroCarousel({ onCta }: { onCta?: () => void }) {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });
  const [active, setActive] = useState(0);
  const liveRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const reachedRef = useRef<number>(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    const idx = embla.selectedScrollSnap();
    setActive(idx);
    reachedRef.current = Math.max(reachedRef.current, idx);
    if (liveRef.current) {
      liveRef.current.textContent = `${SLIDES[idx].chapter}, slide ${idx + 1} of ${SLIDES.length}`;
    }
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla, onSelect]);

  // Keyboard arrows when section focused
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!embla) return;
    if (e.key === "ArrowRight") { embla.scrollNext(); e.preventDefault(); }
    if (e.key === "ArrowLeft") { embla.scrollPrev(); e.preventDefault(); }
  };

  // Dropoff tracking
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (!en.isIntersecting && reachedRef.current < SLIDES.length - 1) {
            el.setAttribute("data-hero-dropoff", String(reachedRef.current));
          }
        }
      },
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scrollTo = (i: number) => embla?.scrollTo(i);

  return (
    <section
      id="hero-carousel"
      ref={sectionRef}
      className="hq-v18-hc"
      aria-label="HairQare story"
      aria-roledescription="carousel"
      role="region"
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <div ref={liveRef} aria-live="polite" className="hq-v18-hc-sr" />

      <div className="hq-v18-hc-inner">
        {/* IMAGE / SLIDES */}
        <div className="hq-v18-hc-stage">
          <div className="hq-v18-hc-viewport" ref={emblaRef}>
            <div className="hq-v18-hc-track">
              {SLIDES.map((s, i) => (
                <div
                  key={i}
                  className="hq-v18-hc-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Slide ${i + 1} of ${SLIDES.length}`}
                  data-analytics="hero_slide_view"
                  data-slide={i + 1}
                >
                  {s.image ? (
                    <img
                      src={s.image}
                      alt={s.alt}
                      className="hq-v18-hc-img"
                      loading={i === 0 ? "eager" : "lazy"}
                      // @ts-ignore react attr name
                      fetchpriority={i === 0 ? "high" : "auto"}
                      decoding={i === 0 ? "sync" : "async"}
                    />
                  ) : (
                    <Placeholder index={i} alt={s.alt} />
                  )}
                  <span className="hq-v18-hc-chip hq-v18-hc-chip-tl">{s.chapter}</span>
                  <span className="hq-v18-hc-chip hq-v18-hc-chip-tr">
                    {i + 1} of {SLIDES.length}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* desktop arrow controls */}
          <button
            type="button"
            className="hq-v18-hc-arrow hq-v18-hc-arrow-prev"
            aria-label="Previous slide"
            onClick={() => embla?.scrollPrev()}
            disabled={active === 0}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className="hq-v18-hc-arrow hq-v18-hc-arrow-next"
            aria-label="Next slide"
            onClick={() => embla?.scrollNext()}
            disabled={active === SLIDES.length - 1}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* COPY + CTA */}
        <div className="hq-v18-hc-copy">
          <div className="hq-v18-hc-text">
            {active === 0 ? (
              <h1 className="hq-v18-hc-headline">{SLIDES[active].headline}</h1>
            ) : (
              <h2 className="hq-v18-hc-headline">{SLIDES[active].headline}</h2>
            )}
            <p className="hq-v18-hc-caption">{SLIDES[active].caption}</p>
          </div>

          <div className="hq-v18-hc-cta-wrap">
            <button
              type="button"
              className="hq-v18-hc-cta"
              onClick={onCta}
              data-analytics="hero_cta_click"
              data-slide={active + 1}
            >
              Start the 14-Day Challenge
            </button>
            <button
              type="button"
              className="hq-v18-hc-secondary"
              onClick={onCta}
              data-analytics="hero_secondary_click"
              data-slide={active + 1}
            >
              See real results →
            </button>
          </div>

          <div className="hq-v18-hc-trust">
            <span>★ 4.9</span>
            <span aria-hidden="true">·</span>
            <span>250,000+ women</span>
            <span aria-hidden="true">·</span>
            <span>149 countries</span>
          </div>

          {/* Desktop thumbnails */}
          <div className="hq-v18-hc-thumbs" role="tablist" aria-label="Jump to slide">
            {SLIDES.map((s, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={active === i}
                className={`hq-v18-hc-thumb ${active === i ? "is-active" : ""}`}
                onClick={() => scrollTo(i)}
                data-analytics="hero_advance"
                data-from={active + 1}
                data-to={i + 1}
                data-method="thumb"
              >
                <span className="hq-v18-hc-thumb-img">
                  {s.image ? (
                    <img src={s.image} alt="" loading="lazy" decoding="async" />
                  ) : (
                    <span className="hq-v18-hc-thumb-ph">{i + 1}</span>
                  )}
                </span>
                <span className="hq-v18-hc-thumb-label">{s.chapter}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;