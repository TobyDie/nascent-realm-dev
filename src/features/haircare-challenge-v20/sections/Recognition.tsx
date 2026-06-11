import { Reveal, InlineTestimonial, Icon } from "../primitives";

export function Recognition() {
  return (
    <section className="bg-lav">
      <div className="wrap-wide">
        <Reveal className="center" style={{ marginBottom: 12 }}>
          <div className="reco-eyebrow">WHAT IS HAPPENING</div>
        </Reveal>
        <Reveal className="center" style={{ marginBottom: 8 }}>
          <h2 className="h2 reco-headline">WHAT'S HOLDING YOUR HAIR (&amp; your confidence) BACK</h2>
        </Reveal>
        <Reveal className="center" style={{ marginBottom: 28 }}>
          <p className="lead" style={{ maxWidth: 520, margin: "0 auto" }}>
            You've been doing more. Your hair is doing less.
          </p>
        </Reveal>

        <div className="timeline-wrap">
          {/* Row 1 */}
          <Reveal delay={0}>
            <div className="timeline-beat">
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">✂️</span>It grows… but breaks off at the same spot every month.
              </p>
              <p className="timeline-consequence">
                You measure it, get excited, then cut it shorter again. The length you grew is sitting in the bathroom bin.
              </p>
            </div>
          </Reveal>

          {/* Row 2 */}
          <Reveal delay={70}>
            <div className="timeline-beat">
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">🪞</span>You're spending more on your hair than ever, and seeing less for it.
              </p>
              <p className="timeline-consequence">
                The serum, the bond builder, the silk pillowcase, the supplements. Closer to $1,000 by now. Your hair feels exactly the same.
              </p>
            </div>
          </Reveal>

          {/* Row 3 */}
          <Reveal delay={140}>
            <div className="timeline-beat heavy">
              <span className="timeline-wash" />
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">🌫️</span>You've started believing this is just your hair.
              </p>
              <p className="timeline-consequence">
                "It just doesn't grow past my shoulders." "I have thin hair, that's just genetics." You've accepted a limit no one taught you was a limit.
              </p>
            </div>
          </Reveal>

          {/* Row 4 */}
          <Reveal delay={210}>
            <div className="timeline-beat heavy">
              <span className="timeline-wash" />
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">🧴</span>The bleach changed it forever and nothing's been the same since.
              </p>
              <p className="timeline-consequence">
                You wouldn't go back, but your ends are paying for it. And no $80 mask is bringing them back.
              </p>
            </div>
          </Reveal>

          {/* Row 5 */}
          <Reveal delay={280}>
            <div className="timeline-beat heavy">
              <span className="timeline-wash" />
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">📷</span>You see hair on TikTok and assume those girls were just born with it.
              </p>
              <p className="timeline-consequence">
                They weren't. Almost none of them were. You just haven't seen what they do behind the scenes.
              </p>
            </div>
          </Reveal>

        </div>

        <Reveal style={{ marginTop: 36 }}>
          <InlineTestimonial
            name="Lina" age={28} flag="🇩🇪"
            quote="I thought my hair just couldn't grow past my shoulders. Turns out it could — I was just snapping it off faster than it grew."
            avatar="profile-4.webp"
            style={{ margin: "0 auto" }}
          />
        </Reveal>
        <Reveal className="center" style={{ marginTop: 24 }}>
          <a
            id="cta-recognition"
            href="https://join.hairqare.co/the-quiz-haircare"
            style={{ color: "var(--orange-700)", fontWeight: 700, fontSize: 16, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            Show me what to change in my routine <Icon name="arrow-right" size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}