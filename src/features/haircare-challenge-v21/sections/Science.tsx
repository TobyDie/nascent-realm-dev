import { Reveal, Eyebrow, Icon, StarRow, Button } from "../primitives";
import { r2img } from "../img";
import { NotYourFault } from "./NotYourFault";

export function Science({ onCta }: { onCta?: () => void }) {
  return (
    <section className="bg-white" id="science">
      <NotYourFault onCta={onCta} />

      <div className="wrap">

        <Reveal style={{ marginTop: 32 }}>
          <div style={{ background: "var(--lavender)", borderRadius: 20, padding: "32px 36px", position: "relative", maxWidth: 720, marginInline: "auto" }}>
            <Icon name="quote" size={36} color="var(--orange-500)" style={{ position: "absolute", top: 20, right: 24, opacity: 0.5 }} />
            <p style={{ margin: 0, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, lineHeight: 1.45, color: "var(--ink)" }}>
              “In 14 days my shedding dropped, my scalp stopped itching, and my hair finally looked thicker. Turns out my genetics weren't the problem, my habits were.”
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