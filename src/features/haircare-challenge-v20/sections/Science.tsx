import { Reveal, Eyebrow, HandArrow, Underline, GreenCallout, Icon, StarRow, Button } from "../primitives";
import { r2img } from "../img";

export function Science() {
  return (
    <section className="bg-white" id="science">
      <div className="wrap">
        <Reveal style={{ marginBottom: 28, textAlign: "center" }}>
          <Eyebrow style={{ color: "var(--slate)" }}>WHY IS IT HAPPENING</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 720, marginInline: "auto" }}>
            It's not your hair. <em>It's the things no one taught you about how hair actually grows.</em>
          </h2>
        </Reveal>

        <Reveal>
          <div className="biology-callout">
            <div className="biology-callout-eyebrow">The myth</div>
            <h3 className="biology-callout-headline">The "terminal length" myth</h3>
            <p className="biology-callout-body">
              Most women never get past shoulder length — not because their hair can't grow longer, but because their hair is breaking off as fast as it grows. Every product you've used was sold to you as the fix. None of them were ever going to teach you the cause.
            </p>
          </div>
        </Reveal>

        <Reveal style={{ marginTop: 22 }}>
          <div className="biology-tile-row">
            <div className="biology-tile">
              <span className="biology-tile-icon">🩸</span>
              <div className="biology-tile-title">Your scalp is the soil</div>
              <div className="biology-tile-sub">Hair grows from a follicle that needs blood flow, the right nutrients, and the right pH at the surface. Most shampoos disrupt all three.</div>
            </div>
            <div className="biology-tile">
              <span className="biology-tile-icon">🥦</span>
              <div className="biology-tile-title">Iron and ferritin run hair growth</div>
              <div className="biology-tile-sub">Women in their 20s and 30s are the single most deficient demographic. Your body deprioritises hair before almost anything else.</div>
            </div>
            <div className="biology-tile">
              <span className="biology-tile-icon">🧬</span>
              <div className="biology-tile-title">Damage compounds</div>
              <div className="biology-tile-sub">Every wash, brush, heat tool, and UV exposure adds a tiny crack. Without a plan to seal them, the crack travels up the strand and snaps the length you grew.</div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="science-leadin" style={{ marginTop: 40 }}>
            <div className="science-leadin-card">
              <span className="leadin-num">1</span>
              <p>Hair grows about a centimetre a month — for everyone. The reason most women's hair doesn't look like it's growing isn't a slow follicle. It's that <strong>the end of the strand is being destroyed at the same rate as the root is producing it.</strong></p>
            </div>
            <HandArrow direction="right" size={56} style={{ alignSelf: "center", opacity: 0.7 }} />
            <div className="science-leadin-card">
              <span className="leadin-num">2</span>
              <p>Every product on the shelf is solving for one strand at a time. <strong>None of them touch the system:</strong> the scalp, the nutrients, the routine, the protection. That's why you stack five products and still see nothing.</p>
            </div>
            <HandArrow direction="right" size={56} style={{ alignSelf: "center", opacity: 0.7 }} />
            <div className="science-leadin-card science-leadin-card-final">
              <span className="leadin-num">3</span>
              <p><strong>Hair length is a math problem.</strong> Growth minus breakage. The whole industry has been selling you growth boosters. The real lever is breakage. Once you fix it, the hair you've been growing all along finally shows up.</p>
            </div>
          </div>
        </Reveal>


        <Reveal style={{ marginTop: 32 }}>
          <div style={{ background: "var(--lavender)", borderRadius: 20, padding: "32px 36px", position: "relative", maxWidth: 720, marginInline: "auto" }}>
            <Icon name="quote" size={36} color="var(--orange-500)" style={{ position: "absolute", top: 20, right: 24, opacity: 0.5 }} />
            <p style={{ margin: 0, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, lineHeight: 1.45, color: "var(--ink)" }}>
              “This challenge showed me I have to change my habits to get better hair — that my genetics influence my hair, but not nearly as much as I thought.”
            </p>
            <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <img src={r2img("profile-13.webp", 96)} alt="Gema" loading="lazy" decoding="async" style={{ width: 44, height: 44, borderRadius: 999, objectFit: "cover", flex: "none" }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>Gema, 29 🇪🇸</div>
                <div style={{ fontSize: 13, color: "var(--slate)" }}>Length plateau · always blamed her genetics</div>
              </div>
              <StarRow size={14} style={{ marginLeft: "auto" }} />
            </div>
          </div>
        </Reveal>

        <Reveal className="center" style={{ marginTop: 24 }}>
          <Button
            id="cta-science"
            variant="ghost"
            onClick={() => { window.location.href = "https://join.hairqare.co/the-quiz-haircare"; }}
            icon="arrow-right"
          >
            Show me how to fix it
          </Button>
        </Reveal>
      </div>
    </section>
  );
}