import { Reveal, Icon, StarRow, Underline, HandArrow, Button } from "../primitives";
import { r2img } from "../img";
import VideoPlayer from "@/components/VideoPlayer";

export function Fault() {
  return (
    <section className="bg-white" id="fault">
      <div className="wrap">
        <Reveal style={{ marginTop: 0 }}>
          <ol className="fault-rail">
            <li className="fault-beat">
              <span className="fault-dot" aria-hidden="true" />
              <div className="fault-beat-body">
                <span className="fault-stamp">01 · not your fault</span>
                <h3 className="fault-headline">
                  Your daily <Underline>habits</Underline>{"\n"} are causing the breakage
                </h3>
                <p className="fault-copy">
                  Shampooing, blow-drying, styling — none of these are meant to damage your hair. But there's a right way and a wrong way to do each, and most women were never taught the difference.
                </p>
                <p className="fault-copy"><strong>The technique matters more than any product you'll ever buy.</strong></p>
              </div>
            </li>

            <li className="fault-beat">
              <span className="fault-dot" aria-hidden="true" />
              <div className="fault-beat-body">
                <span className="fault-stamp">02 · not your fault</span>
                <h3 className="fault-headline">
                  Your products are <Underline>adding</Underline> to the damage — not preventing it.
                </h3>
                <p className="fault-copy">
                  Heat protectants damage almost as much as they protect. Shampoos dry your hair out instead of just cleaning it. Conditioners coat it in residue instead of actually conditioning.
                </p>
                <p className="fault-copy">The things you bought to save your hair are <strong>quietly hurting it</strong> — even when the label promises the opposite.</p>
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
                  Once you understand how hair actually grows, it's <span className="fault-emoji">✨</span> <Underline>easy</Underline>.
                </h3>
                <p className="fault-copy">
                  Your hair grows whether you ask it to or not. As long as you're alive, it grows — <strong>your only job is to get out of its way.</strong>
                </p>
                <p className="fault-copy">
                  And getting out of the way means <strong>less, not more</strong>. Fewer products. Less money. Less effort. Stop the unnecessary damage, and the length you've been growing all along finally shows up.
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

        <Reveal style={{ marginTop: 28, textAlign: "center" }}>
          <p style={{ margin: 0, fontFamily: "var(--font-serif)", fontSize: 24, lineHeight: 1.4, color: "var(--ink)", maxWidth: 640, marginInline: "auto" }}>
            Stop chasing <span className="math-strike">faster growth</span> with products. Learn the right techniques and let your hair do what it's been trying to do all along — <em style={{ color: "var(--orange-600)" }}>grow!</em>
          </p>
        </Reveal>

        <Reveal style={{ marginTop: 24 }}>
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

        <Reveal className="center" style={{ marginTop: 28 }}>
          <Button
            id="cta-fault"
            variant="primary"
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