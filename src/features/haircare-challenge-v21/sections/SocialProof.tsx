import {
  Anno,
  Button,
  Carousel,
  Divider,
  Eyebrow,
  GuaranteeBadge,
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
      initials="K"
      context="Shedding every wash · hair loss"
      text="I think I lost maybe half of the amount of hair I normally lose every time I wash."
      image="ba-1.webp"
    />,
    <TestimonialCard
      key={1}
      name="Andrea Burns"
      initials="A"
      context="Hair loss · dry, itchy scalp"
      text="By the end of 14 days, I was losing like maybe, maybe a palm size amount when I would shower and wash my hair. And that is like a third of what I would normally lose."
      image="ba-2.webp"
    />,
    <TestimonialCard
      key={2}
      name="Anna Koval"
      initials="A"
      context="Thinning · hair felt lifeless"
      text="I can tell you that my hair definitely looks so better. Feels softer. There's some life you know was added into my hair."
      image="ba-3.webp"
    />,
    <TestimonialCard
      key={3}
      name="Yer Yang"
      initials="Y"
      context="New mother · postpartum hair loss"
      text="My hair felt lighter and it just… it does not feel as oily, it does not feel as weighed down, it feels like there's more volume and it just looks much better than before I started."
      image="ba-5.webp"
    />,
    <TestimonialCard
      key={4}
      name="Karen Patdu"
      initials="M"
      context="Thinning · hair loss"
      text="You can see hair growing right here in the front. Usually, it doesn't grow this much, but slowly, but surely, I can see where it's coming from. My hair feels a lot healthier, cleaner, not so oily."
      image="ba-13.webp"
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
            {cards.map((c, i) => (
              <Reveal key={i} delay={i % 2 === 0 ? 0 : 90}>{c}</Reveal>
            ))}
          </div>
        )}

        <Reveal className="center" style={{ marginTop: 30, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <Button id="cta-social-proof" onClick={onCta} icon="arrow-right">Join 250,000+ women</Button>
          <GuaranteeBadge size="sm" />
          <Button id="cta-social-proof-more" onClick={onCta} icon="arrow-right" style={{ padding: "10px 20px", fontSize: 14 }}>
            See more stories
          </Button>
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