import { useEffect, useRef } from "react";
import { Reveal, InlineTestimonial, Icon, Eyebrow } from "../primitives";

/* ===== Inline themed glyphs (one per confession card) ===== */
const GlyphKeratin = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M20 6h8v6l3 4v22a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4V16l3-4V6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <rect x="18" y="20" width="12" height="9" rx="1.5" fill="currentColor" opacity=".18"/>
    <path d="M22 24h4M22 27h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M14 8c1 2 4 2 5 0M30 9c.6 1.4 2.4 1.4 3 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".55"/>
  </svg>
);
const GlyphExtension = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M16 10h16v5a3 3 0 0 1-3 3H19a3 3 0 0 1-3-3v-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M18 10V7M22 10V6M26 10V6M30 10V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M20 18c-1 6-3 10-6 14M24 18c0 7-1 12-2 16M28 18c1 6 3 10 6 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M14 36c2 1 4 1.5 6 1M28 37c2 .5 4 0 6-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".6"/>
  </svg>
);
const GlyphScissors = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="14" cy="34" r="5" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="34" cy="34" r="5" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M18 30L40 8M30 30L8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M23 22l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M40 40l3 4M5 40l-2 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
  </svg>
);
const GlyphDrop = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M24 6c5 7 11 13 11 21a11 11 0 1 1-22 0c0-8 6-14 11-21z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="currentColor" fillOpacity=".12"/>
    <path d="M18 28c.5 3 2.5 5 5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity=".8"/>
    <path d="M38 14c1.5.5 3 .5 4-.5M8 18c-1.5.2-3-.3-3.5-1.4M40 26c1.2.4 2.6.2 3.4-.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
  </svg>
);
const GlyphFade = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="16" r="6" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M12 40c1.5-7 6-11 12-11s10.5 4 12 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M30 12c3-2 6-1 8 1M34 18c2-.5 4 0 5 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".55"/>
    <path d="M6 26c3-1 5-.5 7 1M5 33c3 0 5 1 6 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".55" strokeDasharray="2 3"/>
  </svg>
);
const GLYPHS = [GlyphKeratin, GlyphExtension, GlyphScissors, GlyphDrop, GlyphFade];

/* Hand-drawn arrow from neutral → accent */
const ArrowDoodle = () => (
  <svg viewBox="0 0 40 22" fill="none" aria-hidden="true" className="cycle-arrow-svg">
    <path d="M2 4c6 6 14 9 22 9 4 0 7-1 9-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M28 5l5-2 0 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ITEMS = [
  {
    lead: "You got keratin treatments",
    neutral: "and for a few weeks it looked incredible,",
    accent: "then left your hair worse than before, so you booked the next one. And the next.",
  },
  {
    lead: "You got extensions to fake the length",
    neutral: "but the tension thins the real hair underneath,",
    accent: "so it grows back weaker, and you need them more than before.",
  },
  {
    lead: "You cut off the damage to start fresh",
    neutral: "but the breakage was never really about the ends,",
    accent: "so the new length snapped off in the exact same place.",
  },
  {
    lead: "You loaded on oils, masks and serums",
    neutral: "piling product onto hair that needed less,",
    accent: "coating it and weighing it down instead of fixing why it breaks.",
  },
  {
    lead: "You decided it was just your genetics",
    neutral: "so you quietly gave up,",
    accent: "on length you were actually capable of growing all along.",
  },
];

export function Recognition() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-lav">
      <div className="wrap-wide">
        <Reveal className="center" style={{ marginBottom: 8 }}>
          <Eyebrow>What's actually happening</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12, lineHeight: 1.2 }}>
            You've done all of this. And you're still&nbsp;waiting for your hair to grow?
          </h2>
        </Reveal>
        <Reveal className="center" style={{ marginBottom: 28 }}>
          <p className="lead" style={{ maxWidth: 520, margin: "0 auto" }}>
            You chased every fix and each one took you further from the hair you were actually capable of growing.
          </p>
        </Reveal>

        <div className="cycle-wrap" ref={wrapRef}>
          {/* Background scattered doodles */}
          <svg className="cycle-doodles" viewBox="0 0 400 800" aria-hidden="true" preserveAspectRatio="none">
            <path d="M30 80q10 8 0 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
            <path d="M370 220q-12 6 0 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
            <circle cx="20" cy="420" r="2" fill="currentColor"/>
            <path d="M380 520q-10-4-2-12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
            <path d="M25 660l4 4M29 660l-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>

          {/* The connecting hair-strand that snakes down and loops */}
          <svg className="cycle-rail" viewBox="0 0 60 1000" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="strandG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--orange-500)" stopOpacity=".0"/>
                <stop offset="8%" stopColor="var(--orange-500)" stopOpacity=".9"/>
                <stop offset="92%" stopColor="var(--orange-600)" stopOpacity=".9"/>
                <stop offset="100%" stopColor="var(--orange-600)" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path
              className="cycle-strand"
              d="M30 10 C 10 120, 50 220, 30 320 S 10 540, 30 660 S 50 850, 30 980"
              stroke="url(#strandG)"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="6 4"
            />
          </svg>

          <div className="cycle-list">
            {ITEMS.map((b, i) => {
              const Glyph = GLYPHS[i];
              return (
                <Reveal key={i} delay={i * 80} className={`cycle-card side-${i % 2 === 0 ? "l" : "r"} cycle-v${i + 1}`}>
                  <div className="cycle-card-inner" data-variant={i + 1}>
                    <span className="cycle-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <div className="cycle-node" aria-hidden="true">
                      <Glyph />
                    </div>
                    <div className="cycle-body">
                      <p className="cycle-lead">{b.lead}</p>
                      <p className="cycle-neutral">{b.neutral}</p>
                      <p className="cycle-accent">
                        <span className="cycle-arrow" aria-hidden="true"><ArrowDoodle /></span>
                        <span>{b.accent}</span>
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal style={{ marginTop: 36 }}>
          <InlineTestimonial
            name="Lucía Gonzalo Carabias" age={26} flag="🇪🇸"
            quote="I have used it only once, now you can see it's the fourth day without washing my hair and it looks very clean for me, it's not oily at all and my scalp feels great… and I also feel my ends better, more lubricated."
            avatar="profile-4.webp"
            style={{ margin: "0 auto" }}
          />
        </Reveal>
        <Reveal className="center" style={{ marginTop: 24 }}>
          <a
            id="cta-recognition"
            href="https://join.hairqare.co/40-the-quiz-haircare/"
            style={{ color: "var(--orange-700)", fontWeight: 700, fontSize: 16, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            Show me what to change in my routine <Icon name="arrow-right" size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}