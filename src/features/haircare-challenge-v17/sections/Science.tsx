import { Reveal, Eyebrow, HandArrow, Underline, GreenCallout, Icon, StarRow, Button } from "../primitives";
import { r2img } from "../img";

export function Science() {
  return (
    <section className="bg-white" id="science">
      <div className="wrap">
        <Reveal style={{ textAlign: "center" }}>
          <h2 className="h2" style={{ maxWidth: 640, marginInline: "auto" }}>
            It's not you. It's your biology.
          </h2>
          <p className="biology-lead">
            In your 30s, your body changes faster than the products on your shelf do. Same routine. Different body. That's the gap.
          </p>
        </Reveal>

        <Reveal style={{ marginTop: 24 }}>
          <div className="biology-cards-v2">
            <div className="biology-card-v2">
              <div className="biology-card-v2-label">Estrogen drops</div>
              <p className="biology-card-v2-body">
                From your mid-30s, estrogen quietly declines. DHT — the hormone that shrinks follicles — gets the upper hand. Wider part. Thinner ponytail.
              </p>
            </div>
            <div className="biology-card-v2">
              <div className="biology-card-v2-label">Cortisol climbs</div>
              <p className="biology-card-v2-body">
                Career, kids, the mental load. Your body deprioritises hair when it's busy keeping you upright. More follicles shed early than they should.
              </p>
            </div>
            <div className="biology-card-v2">
              <div className="biology-card-v2-label">Nutrients don't land</div>
              <p className="biology-card-v2-body">
                Iron, ferritin, zinc, B12 — the exact nutrients your follicles need — drop with age and absorb less efficiently than they did at 25.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal style={{ marginTop: 20 }}>
          <p className="biology-bridge">
            You can't fix an inside change with an outside product.
          </p>
        </Reveal>

        <Reveal>
          <div className="science-leadin" style={{ marginTop: 40 }}>
            <div className="science-leadin-card">
              <span className="leadin-num">1</span>
              <p>From your mid-30s, <strong>estrogen and progesterone begin to drop</strong>. When they do, DHT — a hormone that shrinks follicles — goes relatively unopposed. The result is exactly what you're seeing: a wider part, thinning at the temples, a ponytail that's lost its thickness.</p>
            </div>
            <HandArrow direction="right" size={56} style={{ alignSelf: "center", opacity: 0.7 }} />
            <div className="science-leadin-card">
              <span className="leadin-num">2</span>
              <p>Life on top — career, kids, the mental load — keeps <strong>cortisol high</strong>. Even more follicles shed early. Your hair gets quietly deprioritised by your body.</p>
            </div>
            <HandArrow direction="right" size={56} style={{ alignSelf: "center", opacity: 0.7 }} />
            <div className="science-leadin-card science-leadin-card-final">
              <span className="leadin-num">3</span>
              <p>Your follicles are responding to <strong>signals from inside your body</strong>. A shampoo can't reach those signals. That's not a failure of your effort — it's a mismatch between the problem and the tool.</p>
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
                  You're still using a haircare routine <span className="fault-emoji">🙅‍♀️</span> built for when you were <Underline>25</Underline>.
                </h3>
                <p className="fault-copy">
                  No one told you it would stop working — so you kept following what used to work, and wondering why nothing is.
                </p>
              </div>
            </li>

            <li className="fault-beat">
              <span className="fault-dot" aria-hidden="true" />
              <div className="fault-beat-body">
                <span className="fault-stamp">02 · not your fault</span>
                <h3 className="fault-headline">
                  You tried to <span className="fault-emoji">🛍️</span> <Underline>buy</Underline> the fix.
                </h3>
                <p className="fault-copy">
                  In your 30s, you earn more but have so much less time — so of course you invested in products. But you can't buy past what no one taught you to understand.
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
                  Once you learn how to care for your hair in your 30s, it's <span className="fault-emoji">✨</span> <Underline>easy</Underline>.
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
            <strong>Perimenopause doesn't start at 50.</strong> Hormonal fluctuations that affect your hair can begin as early as 35 — and most doctors never mention it.
          </GreenCallout>
        </Reveal>

        <Reveal style={{ marginTop: 28 }}>
          <p className="biology-reassurance">
            You didn't do anything wrong. You were just never taught what changes after 30.
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
                <div style={{ fontWeight: 700, fontSize: 15 }}>Gema, 38 🇪🇸</div>
                <div style={{ fontSize: 13, color: "var(--slate)" }}>Thinning · always blamed her genetics</div>
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