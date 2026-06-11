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
      <Anno>Added — The deeper change</Anno>
      <div className="wrap" style={{ maxWidth: 880 }}>
        <Reveal style={{ textAlign: "center", marginBottom: 36 }}>
          <Eyebrow>The deeper change</Eyebrow>
          <h2 className="h-hero" style={{ marginTop: 12, fontSize: 44, maxWidth: 620, marginInline: "auto" }}>
            It's not really about hair.
          </h2>
          <p className="lead" style={{ marginTop: 16, maxWidth: 600, marginInline: "auto" }}>
            When women finish the challenge, they don't talk about the density. They talk about <Underline>finally feeling in control of their hair.</Underline>
          </p>
        </Reveal>
        <Reveal>
          <div className="not-about-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
            <div className="result-row" style={{ background: "#fff" }}>
              <span className="result-emoji">🪞</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>Hair that's actually going somewhere</div>
                <div className="p" style={{ fontSize: 15, margin: 0, lineHeight: 1.5 }}>
                  Past the length plateau. Past the breakage. The growth you stopped expecting — quietly happening.
                </div>
              </div>
            </div>
            <div className="result-row" style={{ background: "#fff" }}>
              <span className="result-emoji">📷</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>Photos where your hair is the win</div>
                <div className="p" style={{ fontSize: 15, margin: 0, lineHeight: 1.5 }}>
                  The candid shot that catches you off guard — and your hair is the part you actually like.
                </div>
              </div>
            </div>
            <div className="result-row" style={{ background: "#fff" }}>
              <span className="result-emoji">🧠</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>Knowledge that's yours forever</div>
                <div className="p" style={{ fontSize: 15, margin: 0, lineHeight: 1.5 }}>
                  Not another product. A clear understanding of why your hair does what it does — and exactly what to do about it.
                </div>
              </div>
            </div>
            <div className="result-row" style={{ background: "#fff" }}>
              <span className="result-emoji">🔒</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>Built before it gets worse</div>
                <div className="p" style={{ fontSize: 15, margin: 0, lineHeight: 1.5 }}>
                  The version of you in 10 years will be glad you started now, not after — when fixing this is much harder.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal style={{ marginTop: 36 }}>
          <div style={{ background: "#fff", borderRadius: 18, padding: "28px 30px", boxShadow: "var(--shadow-md)", borderLeft: "4px solid var(--orange-600)", maxWidth: 660, marginInline: "auto", position: "relative" }}>
            <Icon name="quote" size={26} color="var(--orange-500)" style={{ position: "absolute", top: 18, right: 22, opacity: 0.7 }} />
            <p style={{ margin: 0, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 19, lineHeight: 1.5, color: "var(--ink)" }}>
              "It's not only about the hair being silky and nice to touch. It's about a more confident, more in-control version of me."
            </p>
            <div style={{ marginTop: 14, fontSize: 14, color: "var(--slate)", fontWeight: 600 }}>— Nataliia, 27 🇺🇦 · finished the challenge in March</div>
          </div>
        </Reveal>
        <Reveal style={{ marginTop: 26 }}>
          <InlineTestimonial
            name="Kate" age={28} flag="🇬🇧"
            quote="The main thing this challenge gave me is that I finally understand my hair. I'm not guessing anymore — I'm building it."
            avatar="profile-1.webp"
            style={{ margin: "0 auto" }}
          />
        </Reveal>
        <Reveal className="center" style={{ marginTop: 32 }}>
          <Button id="cta-not-about-hair" onClick={onCta} icon="arrow-right">Start building it — join the challenge</Button>
        </Reveal>
      </div>
    </section>
  );
}

export default NotAboutHair;