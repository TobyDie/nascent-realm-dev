import { Reveal, Eyebrow, Icon, StarRow, Button } from "../primitives";
import { r2img } from "../img";
import { NotYourFault } from "./NotYourFault";

export function Science({ onCta }: { onCta?: () => void }) {
  return (
    <section className="bg-white" id="science">
      <div className="wrap">
        <Reveal style={{ marginBottom: 28, textAlign: "center" }}>
          <Eyebrow style={{ color: "var(--slate)" }}>WHY is it happening?</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 680, marginInline: "auto" }}>
            Your hair didn't "get worse". <em>Your hair has changed, but your routine didn't change with it.</em>
          </h2>
        </Reveal>


        <Reveal style={{ marginTop: 28 }}>
          <p className="biology-reassurance">
            You didn't do anything wrong. You were just never taught what changes after 30.
          </p>
        </Reveal>
      </div>

      <NotYourFault onCta={onCta} />

      <div className="wrap">

        <Reveal style={{ marginTop: 32 }}>
          <div style={{ background: "var(--lavender)", borderRadius: 20, padding: "32px 36px", position: "relative", maxWidth: 720, marginInline: "auto" }}>
            <Icon name="quote" size={36} color="var(--orange-500)" style={{ position: "absolute", top: 20, right: 24, opacity: 0.5 }} />
            <p style={{ margin: 0, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, lineHeight: 1.45, color: "var(--ink)" }}>
              “This challenge showed me I have to change my habits to get better hair that my genetics influence my hair, but not nearly as much as I thought.”
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