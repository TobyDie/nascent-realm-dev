import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button, GuaranteeBadge, Icon } from "../primitives";
import { useJoiningCount, formatJoiningCount } from "../useJoiningCount";
import { useStartDate, fmtShort } from "../useStartDate";

type Slide = {
  alt: string;
  imageBrief: string;
  imageFile?: string; // pub.hairqare.co path (after the host), unencoded
  pinText: string;
  pinRotate: number;
  pinPos?: "tl" | "tr" | "bl" | "br";
  topBadge?: string;
  headlineLead: string;
  headlineAccent: string;
  caption: string;
};

const SLIDES: Slide[] = [
  {
    alt: "Sarah in her kitchen, hair down past her shoulders, soft morning light. Hair is the focal point.",
    imageBrief:
      "Sarah in her kitchen · hair down past shoulders · soft morning light · phone-shot, no styling · full, shiny, healthy hair is the focal point.",
    imageFile: "Sarah ATF 5 (1).webp",
    pinText: "This is the best hair I've ever had.",
    pinRotate: -4,
    pinPos: "bl",
    topBadge: "14-Day Challenge",
    headlineLead: "Your best hair",
    headlineAccent: "isn't behind you.",
    caption:
      "Most women think their hair peaks in their 20s. That from 30 on, it just thins out and dulls down. I believed it too… until I figured out what the beauty industry never tells you.",
  },
  {
    alt: "Stacked DM-style screenshot quotes pinned like sticky notes — her audience's voice reflected back.",
    imageBrief:
      "Stacked overlay of real DM-style screenshots, pinned like sticky notes. Quotes: 'My ponytail is half the size it used to be.' / 'Using more products than ever and seeing less.' / 'I wear it up every day now.' / 'My stylist said it's just my age.' / 'I don't recognize my hair in photos.' No Sarah in frame.",
    pinText: "Not your age",
    pinRotate: 5,
    pinPos: "tr",
    headlineLead: "It's not your age. It's not your genes.",
    headlineAccent: "And it's not in your head.",
    caption:
      "Something changed after 30. Maybe pregnancy, stress or hormones. You spent more on your hair than ever, yet have less to show for it. Once you understand why, everything starts to make sense.",
  },
  {
    alt: "Split visual: cluttered counter of 20+ products vs Sarah's simple DIY ingredients.",
    imageBrief:
      "Split image. LEFT: cluttered bathroom counter overflowing with 20+ designer bottles, captioned 'My old routine.' RIGHT: Sarah in her kitchen with DIY shampoo ingredients (aloe, oils, glass jar), captioned 'What replaced it.'",
    pinText: "The answer wasn't in any of those bottles.",
    pinRotate: -3,
    pinPos: "tl",
    headlineLead: "I got this hair by doing less.",
    headlineAccent: "Not more.",
    caption:
      "I spent 15 years chasing better hair with the best products and treatments money could buy. My hair only got worse. So I stopped buying and started learning. I changed my routine, threw most of it away, and my hair came back stronger than it had been in ten years.",
  },
  {
    alt: "Pinterest-style grid of real customer before-and-afters with an anchor stat overlay.",
    imageBrief:
      "Pinterest-style grid of 6-9 real customer before-and-afters, slightly overlapping, camera-roll feel. One large anchor stat layered on top. One floating selfie-caption testimonial: '\"I never thought I'd feel confident about my hair again.\" — Ana, 32'.",
    pinText: "250,000 women. Same method. Same results.",
    pinRotate: 4,
    pinPos: "tr",
    headlineLead: "This isn't theory.",
    headlineAccent: "250,000+ women have already done it.",
    caption:
      "Women in their late 30s who'd written off their hair entirely. They all started exactly where you are right now. You can read their stories in our community before you ever pay a cent.",
  },
  {
    alt: "DM / notes-app style Q&A thread on a soft cream background, Sarah's portrait at the top.",
    imageBrief:
      "DM / notes-app mock-up on soft cream. Looks like Sarah is texting back. Small portrait of her at the top of the thread. Q&A bubbles: 'I've tried everything.' / 'Is 14 days really enough?' / 'Will I need new products?' / 'What if my situation is different?' / 'What if it doesn't work for me?'",
    pinText: "FAQs",
    pinRotate: -5,
    pinPos: "tl",
    headlineLead: "The only thing standing between you and better hair is",
    headlineAccent: "one more \u201Cwhat if.\u201D",
    caption:
      "I get the hesitation. Every woman in this community felt the same. They simply stopped letting doubt steal another year of hair they didn't love.",
  },
  {
    alt: "Sarah outside in golden-hour light, hair loose, candid smile — the 'after' frame for the viewer.",
    imageBrief:
      "Sarah outside in golden-hour light · hair loose · candid smile · the 'after' frame for the viewer.",
    pinText: "Two weeks from now, you'll wish you'd started earlier.",
    pinRotate: 3,
    pinPos: "br",
    headlineLead: "Your hair. Your confidence.",
    headlineAccent: "The way you walk into a room.",
    caption:
      "You can spend the next two weeks the way you spent the last two: same routine, same frustration, same drain. Or you can finally learn what your hair has been trying to tell you. 250,000 women have already made that choice. I'll see you inside on day one.",
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
  const cdn = (file: string, w: number) =>
    `https://pub.hairqare.co/cdn-cgi/image/width=${w},quality=80,format=auto/${encodeURIComponent(file)}`;
  return (
    <div className="hq-v18-hc-ph" role="img" aria-label={slide.alt}>
      {slide.imageFile ? (
        <img
          className="hq-v18-hc-img"
          src={cdn(slide.imageFile, 800)}
          srcSet={`${cdn(slide.imageFile, 500)} 500w, ${cdn(slide.imageFile, 800)} 800w, ${cdn(slide.imageFile, 1200)} 1200w`}
          sizes="(max-width: 720px) 100vw, 720px"
          alt={slide.alt}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
          decoding="async"
        />
      ) : (
        <span className="hq-v18-hc-ph-brief">
          [ Slide {index + 1} image · {slide.imageBrief} ]
        </span>
      )}
      {slide.topBadge && (
        <span className="hq-v18-hc-badge">{slide.topBadge}</span>
      )}
      <span
        className={`hq-v18-hc-pin ${posClass}`}
        style={{ transform: `rotate(${slide.pinRotate}deg)` }}
      >
        {slide.pinText}
      </span>
    </div>
  );
}

export function HeroCarousel({ onCta }: { onCta?: () => void }) {
  const joining = useJoiningCount();
  const startDate = useStartDate();
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
        <h1 className="hq-v18-hc-h1">
          <span className="hc-lead">Achieve the best hair of your life in your</span>{" "}
          <span className="hc-accent">30s and beyond.</span>
        </h1>

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

        <div className="hq-v18-hc-caption" aria-live="polite">
          <h3 className="hq-v18-hc-cap-h">
            <span className="hc-lead">{SLIDES[active].headlineLead}</span>{" "}
            <span className="hc-accent">{SLIDES[active].headlineAccent}</span>
          </h3>
          <p className="hq-v18-hc-cap-p">{SLIDES[active].caption}</p>
        </div>

        <div className="hq-v18-hc-dots" role="tablist" aria-label="Jump to slide">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={`Go to slide ${i + 1}`}
              className={`hq-v18-hc-dot ${active === i ? "is-active" : ""}`}
              onClick={() => scrollTo(i)}
              data-analytics="hero_advance"
              data-from={active + 1}
              data-to={i + 1}
              data-method="thumb"
            />
          ))}
        </div>

        <div className="hq-v18-hc-cta-wrap">
          <Button id="cta-hero-carousel" onClick={onCta} icon="arrow-right">
            Join the challenge
          </Button>
          <span className="small" style={{ fontWeight: 600, color: "var(--orange-700)", marginTop: 6 }}>
            85% off · today only
          </span>
          <GuaranteeBadge size="sm" style={{ marginTop: 8 }} />
          <span className="hero-cohort" style={{ marginTop: 8 }}>
            <Icon name="calendar-heart" size={13} color="var(--orange-600)" />
            Next cohort: <strong className="start-date">{startDate ? fmtShort(startDate) : "Fri, June 6th"}</strong> · {formatJoiningCount(joining)} women joining this week
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
