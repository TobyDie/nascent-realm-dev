import { Reveal, Eyebrow, HandArrow, Underline, GreenCallout, Button } from "../primitives";
import VideoPlayer from "@/components/VideoPlayer";

export function Fault() {
  return (
    <section className="bg-white" id="fault">
      <div className="wrap">
        <Reveal>
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
                  In your 20s and 30s, you earn more but have so much less time — so of course you invested in products. But you can't buy past what no one taught you to understand.
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
                  Once you learn how to care for your hair properly, it's <span className="fault-emoji">✨</span> <Underline>easy</Underline>.
                </h3>
                <p className="fault-copy">
                  Fewer steps. Less money. Less effort and time. It's only hard because understanding your hair is the one thing the industry was never going to sell you.
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