import { Reveal, Eyebrow, Icon, StarRow, Button, Hand, Underline } from "../primitives";
import { r2img } from "../img";

export function Science() {
  return (
    <section className="bg-white" id="science">
      <div className="wrap">
        <Reveal style={{ marginBottom: 28, textAlign: "center" }}>
          <Eyebrow style={{ color: "var(--slate)" }}>WHY YOUR HAIR NEVER GETS LONGER</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 720, marginInline: "auto" }}>
            It's not your <span className="math-strike">genetics</span>. <em>Turns out, it's just simple <Underline>math</Underline>.</em>
          </h2>
        </Reveal>


        <Reveal>
          <div className="math-formula" style={{ marginTop: 40 }}>
            <div className="math-eq" aria-label="Hair length equals growth minus breakage">
              <span className="math-term">
                <span className="math-term-emoji">💇‍♀️</span>
                <span className="math-term-word">Length</span>
                <span className="math-term-sub">what you see</span>
              </span>
              <span className="math-op">=</span>
              <span className="math-term">
                <span className="math-term-emoji">🌱</span>
                <span className="math-term-word">Growth</span>
                <span className="math-term-sub">~1 cm / month</span>
              </span>
              <span className="math-op">−</span>
              <span className="math-term">
                <span className="math-term-emoji">✂️</span>
                <span className="math-term-word"><Underline>Breakage</Underline></span>
                <span className="math-term-sub">the only part you control</span>
              </span>
            </div>
            <div className="math-formula-foot">
              You don't have a <span className="math-strike">growing</span> problem. <strong>You have a keeping problem.</strong>
            </div>
          </div>
        </Reveal>

        <Reveal style={{ marginTop: 18, textAlign: "center" }}>
          <Hand color="#2C5BAA" size={22} rotate={-2}>
            ↳ spoiler: it's fixable
          </Hand>
        </Reveal>
      </div>
    </section>
  );
}

export function ScienceTail() {
  return (
    <section className="bg-white" id="science-tail" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <div className="skim-row">
            <span className="skim-emoji">📏</span>
            <div>
              <h4>Your hair <em>is</em> growing. You're just losing it at the same speed.</h4>
              <p>Every woman grows roughly a centimetre a month. The reason yours looks stuck isn't a slow follicle - it's that the ends are snapping off as fast as the roots push new hair out.</p>
              <span className="skim-note">↳ no plateau. just a leak.</span>
            </div>
          </div>
          <div className="skim-row">
            <span className="skim-emoji">🧴</span>
            <div>
              <h4>Every product on the shelf treats one strand at a time.</h4>
              <p>None of them touch the actual system - the scalp, the nutrients, the routine, the protection. That's why you can stack five products and still see nothing in the mirror.</p>
              <span className="skim-note">↳ shampoo can't fix what your routine is breaking.</span>
            </div>
          </div>
          <div className="skim-row">
            <span className="skim-emoji">🔑</span>
            <div>
              <h4>Fix the breakage, and the hair you've been growing all along shows up.</h4>
              <p>You don't need to grow faster. You need to stop losing what you already grow. Plug the leak and within weeks the length is suddenly… there.</p>
              <span className="skim-note">↳ this is the whole challenge in one sentence.</span>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="math-aha">
            <em>Stop chasing <span className="math-strike">faster growth</span>. Start protecting what you've already grown.</em>
          </p>
        </Reveal>

        <Reveal style={{ marginTop: 32 }}>
          <div style={{ background: "var(--lavender)", borderRadius: 20, padding: "32px 36px", position: "relative", maxWidth: 720, marginInline: "auto" }}>
            <Icon name="quote" size={36} color="var(--orange-500)" style={{ position: "absolute", top: 20, right: 24, opacity: 0.5 }} />
            <p style={{ margin: 0, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, lineHeight: 1.45, color: "var(--ink)" }}>
              “This challenge showed me I have to change my habits to get better hair - that my genetics influence my hair, but not nearly as much as I thought.”
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