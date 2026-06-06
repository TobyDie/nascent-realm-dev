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
      text="I think I lost maybe half of the amount of hair I normally lose every time I wash."
      image="https://bhc-surveys-api.dndgroup.workers.dev/api/media/7a36e9d9-a9fa-403a-b097-0815c341328d/thumbnails/13fb46af-fa14-4a34-97fc-9a583ae13e77_frame_2.jpg"
    />,
    <TestimonialCard
      key={1}
      name="Andrea Burns"
      age={38}
      flag="🇺🇸"
      initials="A"
      context="Hair loss · dry, itchy scalp"
      text="By the end of 14 days, I was losing like maybe a palm size amount when I would shower and wash my hair. And that is like a third of what I would normally lose."
      image="https://bhc-surveys-api.dndgroup.workers.dev/api/media/210951f5-2d60-49ac-bf13-d0d02191e543/thumbnails/9a855fdd-bfec-4b0c-a339-d6b4a3855e18_frame_2.jpg"
    />,
    <TestimonialCard
      key={2}
      name="Anna Koval"
      age={37}
      flag="🇺🇦"
      initials="A"
      context="Thinning · hair felt lifeless"
      text="I can tell you that my hair definitely looks so better. Feels softer. There's some life you know was added into my hair."
      image="https://bhc-surveys-api.dndgroup.workers.dev/api/media/ded001f9-b5ff-4f5a-a4a7-6017a1e3affb/thumbnails/896105c0-6b0e-4c1f-9230-0dd73fc1a646_frame_2.jpg"
    />,
    <TestimonialCard
      key={3}
      name="Yer Yang"
      age={32}
      flag="🇺🇸"
      initials="Y"
      context="Postpartum · oily, weighed-down hair"
      text="My hair felt lighter and it just… it does not feel as oily, it does not feel as weighed down, it feels like there's more volume and it just looks much better than before I started."
      image="https://bhc-surveys-api.dndgroup.workers.dev/api/media/24fd7040-c91b-42a2-ae11-3104ad8ccead/thumbnails/26944b38-0062-40c5-9874-6017763bfdb7_frame_2.jpg"
    />,
    <TestimonialCard
      key={4}
      name="Daniela Fendt"
      age={39}
      flag="🇩🇪"
      initials="D"
      context="Hair loss · regrowth"
      text="Especially here in the front, where you see a few tiny baby hairs are growing out now."
      image="https://bhc-surveys-api.dndgroup.workers.dev/api/media/7418f59d-429e-4731-9205-bda862d86fab/thumbnails/a119dadd-eb4c-4e01-a60f-e215bd0140ad_frame_2.jpg"
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