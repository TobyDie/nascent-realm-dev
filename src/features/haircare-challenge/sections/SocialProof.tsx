import {
  Anno,
  Button,
  Carousel,
  Divider,
  Eyebrow,
  Icon,
  Reveal,
  Stat,
  TestimonialCard,
  useIsMobile,
} from "../primitives";

export function SocialProof({ onCta }: { onCta?: () => void }) {
  const isMobile = useIsMobile();

  const cards = [
    <TestimonialCard
      key={0}
      name="Kim"
      age={36}
      flag="🇺🇸"
      initials="K"
      context="Shedding every wash · hair loss"
      text="I think I lost maybe half of the amount of hair I normally lose every time I wash. Half. That was after two weeks."
    />,
    <TestimonialCard
      key={1}
      name="Andrea"
      age={38}
      flag="🇺🇸"
      initials="A"
      context="Hair loss · dry, itchy scalp"
      text="By the end of 14 days, I was losing maybe a palm-size amount when I washed my hair. That's about a third of what I would normally lose."
    />,
    <TestimonialCard
      key={2}
      name="Anna"
      age={37}
      flag="🇺🇦"
      initials="A"
      context="Thinning · hair felt lifeless"
      text="My hair definitely looks so much better. It feels softer. There's some life — you know — that was added back into my hair."
    />,
    <TestimonialCard
      key={3}
      name="Yer"
      age={32}
      flag="🇺🇸"
      initials="Y"
      context="Postpartum · oily, weighed-down hair"
      text="My hair felt lighter. It doesn't feel as oily, it doesn't feel as weighed down. It feels like there's more volume — it just looks so much better than before I started."
    />,
  ];

  return (
    <section className="bg-white" id="results">
      <Anno>Section 5 — Social proof / ICP-matched results</Anno>
      <div className="wrap-wide">
        <Reveal style={{ textAlign: "center", marginBottom: 32 }}>
          <Eyebrow>Real results</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12 }}>
            Women in their 30s achieved better hair than they had in their 20s after learning how to care for it properly.
          </h2>
          <p className="mobile-only" style={{ marginTop: 12, fontSize: 14, color: "var(--slate)" }}>
            Swipe through the stories →
          </p>
        </Reveal>

        {isMobile ? (
          <Carousel peek={0.88} ariaLabel="testimonials">
            {cards}
          </Carousel>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 22 }} className="testi-grid">
            <Reveal delay={0}>{cards[0]}</Reveal>
            <Reveal delay={90}>{cards[1]}</Reveal>
            <Reveal delay={0}>{cards[2]}</Reveal>
            <Reveal delay={90}>{cards[3]}</Reveal>
          </div>
        )}

        <Reveal className="center" style={{ marginTop: 30, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <Button onClick={onCta} icon="arrow-right">Join 250,000+ women</Button>
          <button className="btn btn-ghost" style={{ padding: "10px 20px", fontSize: 14 }}>
            See more stories <Icon name="chevron-right" size={16} />
          </button>
        </Reveal>

        <Reveal style={{ marginTop: 44 }}>
          <div className="trust-bar" style={{ background: "var(--lavender)", borderRadius: 24, padding: "32px 24px", justifyContent: "space-around" }}>
            <Stat num="4.8/5" label="Trustpilot rating" size={56} />
            <Divider />
            <Stat num="250K+" label="women completed the challenge" size={56} />
            <Divider />
            <Stat num="92%" label="saw results by day 14" size={56} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default SocialProof;