import {
  Anno,
  Button,
  Eyebrow,
  Icon,
  InlineTestimonial,
  Reveal,
  Underline,
} from "../primitives";

export function NotAboutHair({ onCta }: { onCta?: () => void }) {
  return (
    <section className="bg-cream">
      <Anno>Added - The deeper change</Anno>
      <div className="wrap" style={{ maxWidth: 880 }}>
        <Reveal style={{ textAlign: "center", marginBottom: 36 }}>
          <Eyebrow>The deeper change</Eyebrow>
          <h2 className="h-hero" style={{ marginTop: 12, fontSize: 44, maxWidth: 620, marginInline: "auto" }}>
            It's not really about hair.
          </h2>
          <p className="lead" style={{ marginTop: 16, maxWidth: 600, marginInline: "auto" }}>
            When women finish the challenge, they don't talk about the density. They talk about <Underline>feeling like themselves again.</Underline>
          </p>
        </Reveal>
        <Reveal>
          <div className="not-about-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
            <div className="result-row" style={{ background: "#fff" }}>
              <span className="result-emoji">🪞</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>Looking like you again</div>
                <div className="p" style={{ fontSize: 15, margin: 0, lineHeight: 1.5 }}>
                  No more dodging mirrors. The version of you that you remember - quietly coming back.
                </div>
              </div>
            </div>
            <div className="result-row" style={{ background: "#fff" }}>
              <span className="result-emoji">📷</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>Photos you don't have to dodge</div>
                <div className="p" style={{ fontSize: 15, margin: 0, lineHeight: 1.5 }}>
                  The candid shot that catches you off guard. And you're okay with it.
                </div>
              </div>
            </div>
            <div className="result-row" style={{ background: "#fff" }}>
              <span className="result-emoji">🧠</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>Knowledge that's yours forever</div>
                <div className="p" style={{ fontSize: 15, margin: 0, lineHeight: 1.5 }}>
                  Not another product. A clear understanding of why your hair does what it does - and exactly what to do about it.
                </div>
              </div>
            </div>
            <div className="result-row" style={{ background: "#fff" }}>
              <span className="result-emoji">🔒</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>Permanence</div>
                <div className="p" style={{ fontSize: 15, margin: 0, lineHeight: 1.5 }}>
                  Not until the next bottle runs out. A foundation that holds for years, not weeks.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal style={{ marginTop: 36 }}>
          <div style={{ background: "#fff", borderRadius: 18, padding: "28px 30px", boxShadow: "var(--shadow-md)", borderLeft: "4px solid var(--orange-600)", maxWidth: 660, marginInline: "auto", position: "relative" }}>
            <Icon name="quote" size={26} color="var(--orange-500)" style={{ position: "absolute", top: 18, right: 22, opacity: 0.7 }} />
            <p style={{ margin: 0, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 19, lineHeight: 1.5, color: "var(--ink)" }}>
              "It's not only about the hair being silky and nice to touch. It's about the new, more inspired, more empowered me."
            </p>
            <div style={{ marginTop: 14, fontSize: 14, color: "var(--slate)", fontWeight: 600 }}>- Nataliia, 38 🇺🇦 · finished the challenge in March</div>
          </div>
        </Reveal>
        <Reveal style={{ marginTop: 26 }}>
          <InlineTestimonial
            name="Kate" age={36} flag="🇬🇧"
            quote="The main thing this challenge gave me, and it's the most important one, is that I fell in love with my hair again."
            avatar="profile-1.webp"
            style={{ margin: "0 auto" }}
          />
        </Reveal>
        <Reveal className="center" style={{ marginTop: 32 }}>
          <Button id="cta-not-about-hair" onClick={onCta} icon="arrow-right">Bring her back - start the challenge</Button>
        </Reveal>
      </div>
    </section>
  );
}

export default NotAboutHair;