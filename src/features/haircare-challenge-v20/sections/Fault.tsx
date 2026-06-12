import { Reveal, Eyebrow, HandArrow, Underline, Button, Icon, StarRow } from "../primitives";
import VideoPlayer from "@/components/VideoPlayer";
import { r2img } from "../img";

export function Fault() {
  return (
    <section className="bg-white" id="fault">
      <div className="wrap">
        <Reveal>
          <div className="fault-head center">
            <Eyebrow style={{ color: "var(--slate)" }}>Before you blame your genetics</Eyebrow>
            <h2 className="h2" style={{ marginTop: 12 }}>
              None of this is <em>your fault.</em> And none of it is <em>your genetics.</em>
            </h2>
          </div>

          <ol className="fault-rail">
            <li className="fault-beat">
              <span className="fault-dot" aria-hidden="true" />
              <div className="fault-beat-body">
                <span className="fault-stamp">01 · not your fault</span>
                <h3 className="fault-headline">
                  You were <span className="fault-emoji">🙅‍♀️</span> sold a <Underline>routine</Underline> that was never going to work.
                </h3>
                <p className="fault-copy">
                  The brands that taught you how to wash your hair were the same ones selling you the products. They were never going to tell you that the cause was sitting in your shower.
                </p>
              </div>
            </li>

            <li className="fault-beat">
              <span className="fault-dot" aria-hidden="true" />
              <div className="fault-beat-body">
                <span className="fault-stamp">02 · not your fault</span>
                <h3 className="fault-headline">
                  You tried to <span className="fault-emoji">🛍️</span> <Underline>buy</Underline> longer hair.
                </h3>
                <p className="fault-copy">
                  The serum. The supplement. The bond builder. The clip-ins. Of course you did - that's what the entire industry pointed you toward. You can't buy past what no one taught you to understand.
                </p>
              </div>
            </li>

            <li className="fault-turn-arrow" aria-hidden="true">
              <HandArrow direction="right" size={64} color="var(--orange-600)" />
            </li>

            <li className="fault-beat fault-beat-final">
              <span className="fault-dot fault-dot-final" aria-hidden="true" />
              <div className="fault-beat-body">
                <span className="fault-stamp fault-stamp-final">03 · here's what no one tells you</span>
                <h3 className="fault-headline fault-headline-final">
                  Once you understand how hair actually <Underline>grows</Underline>, it's <span className="fault-emoji">✨</span> easy.
                </h3>
                <p className="fault-copy">
                  Fewer products. Less time. Less money. It only feels hard because the people making money off your hair were never going to teach you the part that doesn't require buying anything.
                </p>
                <div style={{ marginTop: 18 }}>
                  <VideoPlayer
                    src="https://videos.hairqare.co/ytdown-youtube-haircare-challenge-introd-10ee1138/master.m3u8"
                    aspectRatio="1920/1080"
                    autoplay
                  />
                </div>
              </div>
            </li>
          </ol>
        </Reveal>

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

        <Reveal className="center" style={{ marginTop: 24 }}>
          <Button
            id="cta-fault"
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