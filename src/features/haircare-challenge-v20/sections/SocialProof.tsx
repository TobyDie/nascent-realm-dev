import React from "react";
import {
  Anno,
  Button,
  Carousel,
  Eyebrow,
  GuaranteeBadge,
  RImg,
  Reveal,
  StarRow,
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
          alt={`Before and after - ${t.name}`}
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
    { name: "Andrea Burns", initials: "A", context: "Hair loss · dry, itchy scalp", text: "By the end of 14 days, I was losing like maybe, maybe a palm size amount when I would shower and wash my hair. And that is like a third of what I would normally lose.", image: "ba-2.webp" },
    { name: "Anna Koval", initials: "A", context: "Thinning · hair felt lifeless", text: "I can tell you that my hair definitely looks so better. Feels softer. There's some life you know was added into my hair.", image: "ba-3.webp" },
    { name: "Yer Yang", initials: "Y", context: "New mother · postpartum hair loss", text: "My hair felt lighter and it just… it does not feel as oily, it does not feel as weighed down, it feels like there's more volume and it just looks much better than before I started.", image: "ba-5.webp" },
    { name: "Karen Patdu", initials: "M", context: "Thinning · hair loss", text: "You can see hair growing right here in the front. Usually, it doesn't grow this much, but slowly, but surely, I can see where it's coming from. My hair feels a lot healthier, cleaner, not so oily.", image: "ba-13.webp" },
  ];
  const cards = testimonials.map((t, i) => <CompactTesti key={i} t={t} />);

  return (
    <section className="bg-white" id="results" style={{ paddingTop: 36, paddingBottom: 40 }}>
      <Anno>Section 5 - Social proof / ICP-matched results</Anno>
      <div className="wrap-wide">
        <Reveal style={{ textAlign: "center", marginBottom: 20, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
          <Eyebrow>The plateau wasn't real</Eyebrow>
          <h2 className="h2" style={{ margin: "12px 0 0", lineHeight: 1.2 }}>
            Real women, finally seeing the length they were already growing - once they stopped the leak.
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

        <Reveal style={{ marginTop: 20 }}>
          <div
            className="trust-bar"
            style={{
              background: "var(--lavender)",
              borderRadius: 16,
              padding: isMobile ? "10px 8px" : "14px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: isMobile ? 6 : 16,
              flexWrap: "nowrap",
            }}
          >
            {[
              { num: "4.8/5", label: "Trustpilot" },
              { num: "250K+", label: "women" },
              { num: "92%", label: "by day 14" },
            ].map((s, i, arr) => (
              <React.Fragment key={s.num}>
                <div style={{ textAlign: "center", flex: 1, minWidth: 0 }}>
                  <div className="stat-num" style={{ fontSize: isMobile ? 20 : 30, lineHeight: 1.1 }}>{s.num}</div>
                  <div className="small" style={{ marginTop: 2, fontSize: isMobile ? 11 : 13, whiteSpace: "nowrap" }}>{s.label}</div>
                </div>
                {i < arr.length - 1 && <div style={{ width: 1, height: isMobile ? 28 : 36, background: "var(--line)", flexShrink: 0 }} />}
              </React.Fragment>
            ))}
          </div>
        </Reveal>

        <Reveal className="center" style={{ marginTop: 18, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <Button id="cta-social-proof" onClick={onCta} icon="arrow-right">Join 250,000+ women</Button>
          <GuaranteeBadge size="sm" />
        </Reveal>
      </div>
    </section>
  );
}

export default SocialProof;