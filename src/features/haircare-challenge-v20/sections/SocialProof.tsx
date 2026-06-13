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
    { name: "Eline Mulders", initials: "E", context: "Dry hair · length plateau", text: "My hair feels softer, it's clean… I like my hair, it feels good - and cutting off the split ends feels amazing honestly, it helps also with less tangling.", image: "ba-1.webp" },
    { name: "Elena", initials: "E", context: "General hair health", text: "My hair is soft and it truly is good. It's a good cleansing shampoo.", image: "ba-2.webp" },
    { name: "Alina Nuno", initials: "A", context: "Shine restoration", text: "My before and after photos were a wake up call! I could see how much shine my hair has now compared to day 1. It is so much smoother and softer, lighter, fluffier! I am loving the way my hair feels - seeing the marked change in just 14 days reinforces that the work is working!", image: "ba-3.webp" },
    { name: "Brianna Reetz", initials: "B", context: "Split ends · dull, brittle hair", text: "I kept eating what I should be, and just from that, my hair has already changed. It's already becoming a lot thicker, it's already have a bit more shine to it. I trimmed the split ends, and it's already going great. Now my hair is softer.", image: "ba-5.webp" },
    { name: "Haydée Fernández", initials: "H", context: "Frizz · wants shine & volume", text: "As you can see my hair is shiny - it feels super soft, it has volume.", image: "ba-13.webp" },
  ];
  const cards = testimonials.map((t, i) => <CompactTesti key={i} t={t} />);

  return (
    <section className="bg-white" id="results" style={{ paddingTop: 36, paddingBottom: 40 }}>
      <Anno>Section 5 - Social proof / ICP-matched results</Anno>
      <div className="wrap-wide">
        <Reveal style={{ textAlign: "center", marginBottom: 20, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
          <Eyebrow>The plateau wasn't real</Eyebrow>
          <h2 className="h2" style={{ margin: "12px 0 0", lineHeight: 1.2 }}>
            Thousands of women, finally seeing the length <span style={{ color: "var(--orange-600)" }}>once they learned the right technique.</span>
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