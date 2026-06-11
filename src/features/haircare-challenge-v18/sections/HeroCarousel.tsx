import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../primitives";

type Slide = {
  alt: string;
  imageBrief: string;
  pinText: string;
  pinRotate: number;
  pinPos?: "tl" | "tr" | "bl" | "br";
  scriptText: string;
};

const SLIDES: Slide[] = [
  {
    alt: "Sarah in her kitchen, hair down past her shoulders in soft morning light.",
    imageBrief:
      "Sarah in her kitchen · hair past shoulders · soft morning light · phone-shot, no styling · hair is the focal point.",
    pinText: "★ best hair of my life",
    pinRotate: -4,
    pinPos: "tl",
    scriptText: "best hair of your 30s",
  },
  {
    alt: "Stacked DM-style screenshot quotes pinned like sticky notes.",
    imageBrief:
      "Stacked overlay of real DM-style screenshots, pinned like sticky notes. No Sarah, her audience's voice reflected back.",
    pinText: "not your age",
    pinRotate: 5,
    pinPos: "tr",
    scriptText: "not your age. not your genes.",
  },
  {
    alt: "Split visual: cluttered counter of 20+ products vs Sarah's simple DIY ingredients.",
    imageBrief:
      "Split image, LEFT: cluttered bathroom counter, 20+ designer bottles, caption 'My old routine.'  RIGHT: Sarah in her kitchen with DIY shampoo ingredients (aloe, oils, glass jar), caption 'What replaced it.'",
    pinText: "less, not more",
    pinRotate: -3,
    pinPos: "tl",
    scriptText: "i did less, not more",
  },
  {
    alt: "Pinterest-style grid of customer before-and-afters with an anchor stat.",
    imageBrief:
      "Pinterest-style grid of 6-9 real customer before-and-afters, slightly overlapping, camera-roll feel. One large anchor stat layered on top. One floating selfie-style testimonial.",
    pinText: "250,000 women",
    pinRotate: 4,
    pinPos: "tr",
    scriptText: "250,000 women, already",
  },
  {
    alt: "Notes-app style Q&A thread on cream background, Sarah's portrait at top.",
    imageBrief:
      "DM / notes-app mock-up on soft cream. Looks like Sarah is texting back. Small portrait of her at the top of the thread makes it her voice.",
    pinText: "real Qs, real As",
    pinRotate: -5,
    pinPos: "tl",
    scriptText: "every question, answered",
  },
  {
    alt: "Sarah outside in golden-hour light, hair loose, candid smile.",
    imageBrief:
      "Sarah outside in golden-hour light · hair loose · candid smile · the 'after' frame for the viewer.",
    pinText: "see you on day 1",
    pinRotate: 3,
    pinPos: "br",
    scriptText: "see you on day one",
  },
];

function SlideMedia({ slide, index }: { slide: Slide; index: number }) {
  const posClass =
    slide.pinPos === "tr"
      ? "is-tr"
      : slide.pinPos === "bl"
      ? "is-bl"
      : slide.pinPos === "br"
      ? "is-br"
      : "is-tl";
  return (
    <div className="hq-v18-hc-ph" role="img" aria-label={slide.alt}>
      <span className="hq-v18-hc-ph-brief">
        [ Slide {index + 1} image · {slide.imageBrief} ]
      </span>
      <span
        className={`hq-v18-hc-pin ${posClass}`}
        style={{ transform: `rotate(${slide.pinRotate}deg)` }}
      >
        {slide.pinText}
      </span>
      <span className="hq-v18-hc-shade" aria-hidden="true" />
      <span className="hq-v18-hc-script">{slide.scriptText}</span>
    </div>
  );
}

export function HeroCarousel({ onCta }: { onCta?: () => void }) {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: false,
    align: "center",
    containScroll: "trimSnaps",
    dragThreshold: 12,
  });
  const [active, setActive] = useState(0);
  const liveRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const reachedRef = useRef<number>(0);
  const prevIdxRef = useRef<number>(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    const idx = embla.selectedScrollSnap();
    const from = prevIdxRef.current;
    setActive(idx);
    reachedRef.current = Math.max(reachedRef.current, idx);
    if (liveRef.current) {
      liveRef.current.textContent = `Slide ${idx + 1} of ${SLIDES.length}`;
    }
    if (from !== idx && sectionRef.current) {
      sectionRef.current.setAttribute("data-hero-advance-from", String(from + 1));
      sectionRef.current.setAttribute("data-hero-advance-to", String(idx + 1));
    }
    prevIdxRef.current = idx;
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla, onSelect]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!embla) return;
    if (e.key === "ArrowRight") { embla.scrollNext(); e.preventDefault(); }
    if (e.key === "ArrowLeft") { embla.scrollPrev(); e.preventDefault(); }
  };

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
      className={`hq-v18-hc ${active === 0 ? "is-first" : ""}`}
      aria-label="HairQare story"
      aria-roledescription="carousel"
      role="region"
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <div ref={liveRef} aria-live="polite" className="hq-v18-hc-sr" />

      <div className="hq-v18-hc-inner">
        <h2 className="hq-v18-hc-h1">
          <span className="lead">The best hair of your life,</span>{" "}
          <span className="accent">in your 30s. And beyond.</span>
        </h2>

        <div className="hq-v18-hc-stage">
          <div className="hq-v18-hc-viewport" ref={emblaRef}>
            <div className="hq-v18-hc-track">
              {SLIDES.map((s, i) => (
                <article
                  key={i}
                  className="hq-v18-hc-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Slide ${i + 1} of ${SLIDES.length}`}
                  data-analytics="hero_slide_view"
                  data-slide={i + 1}
                >
                  <div className="hq-v18-hc-media">
                    <SlideMedia slide={s} index={i} />
                  </div>
                </article>
              ))}
            </div>
          </div>

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

        <div className="hq-v18-hc-thumbs" role="tablist" aria-label="Jump to slide">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={`Go to slide ${i + 1}`}
              className={`hq-v18-hc-thumb ${active === i ? "is-active" : ""}`}
              onClick={() => scrollTo(i)}
              data-analytics="hero_advance"
              data-from={active + 1}
              data-to={i + 1}
              data-method="thumb"
            >
              <span className="hq-v18-hc-thumb-img">
                <span className="hq-v18-hc-thumb-ph">{i + 1}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="hq-v18-hc-cta-wrap">
          <Button id="cta-hero-carousel" onClick={onCta} icon="arrow-right">
            Join the challenge
          </Button>
          <div className="hq-v18-hc-trust">
            <span>★ 4.9</span>
            <span aria-hidden="true">·</span>
            <span>250,000+ women</span>
            <span aria-hidden="true">·</span>
            <span>149 countries</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
