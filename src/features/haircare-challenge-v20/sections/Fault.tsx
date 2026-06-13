import { Reveal, Icon, StarRow } from "../primitives";
import { r2img } from "../img";

export function Fault() {
  return (
    <section className="bg-white" id="fault">
      <div className="wrap">
        <Reveal style={{ marginTop: 32 }}>
          <div style={{ background: "var(--lavender)", borderRadius: 20, padding: "32px 36px", position: "relative", maxWidth: 720, marginInline: "auto" }}>
            <Icon name="quote" size={36} color="var(--orange-500)" style={{ position: "absolute", top: 20, right: 24, opacity: 0.5 }} />
            <p style={{ margin: 0, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, lineHeight: 1.45, color: "var(--ink)" }}>
              “I genuinely thought my hair was just the kind that doesn't grow long. Two weeks of this and I realised - it grows fine. I was wrecking it.”
            </p>
            <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <img src={r2img("profile-7.webp", 96)} alt="Camilla" loading="lazy" decoding="async" style={{ width: 44, height: 44, borderRadius: 999, objectFit: "cover", flex: "none" }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>Camilla, 29 🇮🇹</div>
                <div style={{ fontSize: 13, color: "var(--slate)" }}>Thought her hair just didn't grow long</div>
              </div>
              <StarRow size={14} style={{ marginLeft: "auto" }} />
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}