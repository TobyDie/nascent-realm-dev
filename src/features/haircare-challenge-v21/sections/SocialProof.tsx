import {
  Anno,
  Button,
  Carousel,
  Divider,
  GuaranteeBadge,
  RImg,
  Reveal,
  StarRow,
  Stat,
  useIsMobile,
} from "../primitives";
import { BA_WIDTHS } from "../img";

type Testi = {
  name: string;
  initials: string;
  context: string;
  text: string;
  image: string;
};

function CompactTesti({ t }: { t: Testi }) {
  return (
    <div
      className="testi-card-compact"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        border: "1px solid var(--line, #eee)",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 1px 2px rgba(15,23,42,.04)",
      }}
    >
      <div style={{ position: "relative", background: "var(--cream, #faf6f1)" }}>
        <RImg
          file={t.image}
          widths={BA_WIDTHS}
          sizes="(max-width: 860px) 86vw, 360px"
          alt={`Before and after — ${t.name}`}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
      <div style={{ padding: "14px 14px 14px" }}>
        <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, color: "var(--ink)" }}>
          “{t.text}”
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 12 }}>
          <div
            aria-hidden="true"
            style={{
              width: 32,
              height: 32,
              borderRadius: 999,
              background: "var(--orange-100)",
              color: "var(--orange-700)",
              fontWeight: 700,
              fontSize: 13,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "none",
            }}
          >
            {t.initials}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 13.5, lineHeight: 1.2 }}>{t.name}</div>
            <div style={{ fontSize: 11.5, color: "var(--slate)", lineHeight: 1.3 }}>{t.context}</div>
          </div>
          <StarRow size={12} />
        </div>
      </div>
    </div>
  );
}

export function SocialProof({ onCta }: { onCta?: () => void }) {
  const isMobile = useIsMobile();

  const testimonials: Testi[] = [
    { name: "Kim", initials: "K", context: "Shedding every wash · hair loss", text: "I think I lost maybe half of the amount of hair I normally lose every time I wash.", image: "ba-1.webp" },
    { name: "Andrea Burns", initials: "A", context: "Hair loss · dry, itchy scalp", text: "By the end of 14 days, I was losing maybe a palm size amount when I'd wash my hair — about a third of what I used to lose.", image: "ba-2.webp" },
    { name: "Anna Koval", initials: "A", context: "Thinning · hair felt lifeless", text: "My hair definitely looks so much better. Feels softer. There's some life added back into it.", image: "ba-3.webp" },
    { name: "Yer Yang", initials: "Y", context: "New mother · postpartum hair loss", text: "My hair feels lighter — not as oily, not as weighed down. There's more volume and it just looks so much better.", image: "ba-5.webp" },
    { name: "Karen Patdu", initials: "M", context: "Thinning · hair loss", text: "You can see hair growing right here in the front. Slowly but surely it's coming back. My hair feels healthier, cleaner, not so oily.", image: "ba-13.webp" },
  ];
  const cards = testimonials.map((t, i) => <CompactTesti key={i} t={t} />);

  return (
    <section className="bg-white" id="results" style={{ paddingTop: 36, paddingBottom: 40 }}>
      <Anno>Section 5 — Social proof / ICP-matched results</Anno>
      <div className="wrap-wide">
        <Reveal style={{ textAlign: "center", marginBottom: 20, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
          <h2 className="h2" style={{ margin: 0, fontSize: "clamp(22px, 4.6vw, 32px)", lineHeight: 1.2 }}>
            Women in their 30s achieved better hair than they had in their 20s after learning how to care for it properly.&nbsp;&nbsp;&nbsp;
          </h2>
        </Reveal>

        {isMobile ? (
          <Carousel peek={0.78} ariaLabel="testimonials">
            {cards}
          </Carousel>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }} className="testi-grid">
            {cards.map((c, i) => (
              <Reveal key={i} delay={(i % 3) * 80}>{c}</Reveal>
            ))}
          </div>
        )}

        <Reveal className="center" style={{ marginTop: 24, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <Button id="cta-social-proof" onClick={onCta} icon="arrow-right">Join 250,000+ women</Button>
          <GuaranteeBadge size="sm" />
        </Reveal>

        <Reveal style={{ marginTop: 32 }}>
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