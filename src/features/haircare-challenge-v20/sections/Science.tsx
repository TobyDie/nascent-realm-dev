import { Reveal, Eyebrow, HandArrow, Underline, GreenCallout, Icon, StarRow, Button } from "../primitives";
import { r2img } from "../img";

export function Science() {
  return (
    <section className="bg-white" id="science">
      <div className="wrap">
        <Reveal style={{ marginBottom: 28, textAlign: "center" }}>
          <Eyebrow style={{ color: "var(--slate)" }}>WHY is it happening?</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 680, marginInline: "auto" }}>
            Your hair isn't broken. <em>You're just running a routine no one ever actually taught you.</em>
          </h2>
        </Reveal>

        <Reveal>
          <div className="biology-callout">
            <div className="biology-callout-eyebrow">Why this is happening</div>
            <h3 className="biology-callout-headline">It's not you. It's your biology.</h3>
            <p className="biology-callout-body">
              Stress hormones, low iron and ferritin, and years of color/heat/surfactant damage quietly cap your hair long before anything hormonal is the issue. Most products are built to mask symptoms, not fix any of this — which is exactly why nothing's been working.
            </p>
          </div>
        </Reveal>

        <Reveal style={{ marginTop: 22 }}>
          <div className="biology-tile-row">
            <div className="biology-tile">
              <span className="biology-tile-icon">🌡️</span>
              <div className="biology-tile-title">Cortisol stays high</div>
              <div className="biology-tile-sub">Chronic stress pushes follicles into shedding mode — months before you'll connect the dots.</div>
            </div>
            <div className="biology-tile">
              <span className="biology-tile-icon">🩸</span>
              <div className="biology-tile-title">Iron & ferritin are low</div>
              <div className="biology-tile-sub">Extremely common under 35, almost never tested for — and your follicles need it before almost anything else.</div>
            </div>
            <div className="biology-tile">
              <span className="biology-tile-icon">🔥</span>
              <div className="biology-tile-title">The damage–product cycle</div>
              <div className="biology-tile-sub">Color, heat and stripping surfactants compound — and the products you bought to fix them often make it worse.</div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="science-leadin" style={{ marginTop: 40 }}>
            <div className="science-leadin-card">
              <span className="leadin-num">1</span>
              <p>Chronic stress keeps <strong>cortisol elevated</strong>, which shortens the growth phase and pushes more follicles into shedding. You see it first as extra hair in the brush and a slower-than-usual length gain — long before anything dramatic.</p>
            </div>
            <HandArrow direction="right" size={56} style={{ alignSelf: "center", opacity: 0.7 }} />
            <div className="science-leadin-card">
              <span className="leadin-num">2</span>
              <p>Underneath that, <strong>iron and ferritin run low</strong> — extremely common in women under 35, almost never flagged on routine bloodwork. Hair is the first thing your body deprioritises when those run out.</p>
            </div>
            <HandArrow direction="right" size={56} style={{ alignSelf: "center", opacity: 0.7 }} />
            <div className="science-leadin-card science-leadin-card-final">
              <span className="leadin-num">3</span>
              <p>On top of all that, <strong>color, heat and stripping surfactants compound</strong> on the cuticle. The breakage outruns the growth, so your length never moves — even when the follicle is doing its job. A shampoo can't fix any of this, because it's not the right tool for any of it.</p>
            </div>
          </div>
        </Reveal>

        <Reveal style={{ marginTop: 56 }}>
          <div className="fault-head center">
            <Eyebrow style={{ color: "var(--slate)" }}>Before you blame yourself</Eyebrow>
            <h2 className="h2" style={{ marginTop: 12 }}>
              None of this was <em>your fault.</em>
            </h2>
          </div>

          <ol className="fault-rail">
            <li className="fault-beat">
              <span className="fault-dot" aria-hidden="true" />
              <div className="fault-beat-body">
                <span className="fault-stamp">01 · not your fault</span>
                <h3 className="fault-headline">
                  You were sold a <span className="fault-emoji">🛍️</span> <Underline>routine</Underline>, not an understanding of your own hair.
                </h3>
                <p className="fault-copy">
                  No one ever actually taught you how hair grows — so you trusted the bottles, and kept buying the next one when the last one didn't work.
                </p>
              </div>
            </li>

            <li className="fault-beat">
              <span className="fault-dot" aria-hidden="true" />
              <div className="fault-beat-body">
                <span className="fault-stamp">02 · not your fault</span>
                <h3 className="fault-headline">
                  You tried to <span className="fault-emoji">💸</span> <Underline>spend</Underline> your way past it.
                </h3>
                <p className="fault-copy">
                  Bond builder. Scalp serum. Salon treatment. Of course you tried — but no shelf product can fix cortisol, ferritin, or compounded damage. You can't buy past what no one taught you to understand.
                </p>
              </div>
            </li>

            <li className="fault-turn-arrow" aria-hidden="true">
              <HandArrow direction="right" size={64} color="var(--orange-600)" />
            </li>

            <li className="fault-beat fault-beat-final">
              <span className="fault-dot fault-dot-final" aria-hidden="true" />
              <div className="fault-beat-body">
                <span className="fault-stamp fault-stamp-final">03 · here's the part no one tells you</span>
                <h3 className="fault-headline fault-headline-final">
                  Once you actually understand your hair, it's <span className="fault-emoji">✨</span> <Underline>easy</Underline>.
                </h3>
                <p className="fault-copy">
                  Fewer steps. Less money. Less effort and time. It's only hard because understanding your hair is the one thing the industry was never going to sell you.
                </p>
              </div>
            </li>
          </ol>
        </Reveal>

        <Reveal style={{ marginTop: 28 }}>
          <GreenCallout>
            <strong>Postpartum shedding doesn't always reverse on its own.</strong> And by your mid-30s, early perimenopause can quietly stack on top — most doctors won't mention either until it's much further along.
          </GreenCallout>
        </Reveal>

        <Reveal style={{ marginTop: 28 }}>
          <p className="biology-reassurance">
            You didn't do anything wrong. You were just never taught what your hair actually needs.
          </p>
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