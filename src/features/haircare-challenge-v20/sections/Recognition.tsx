import { Reveal, InlineTestimonial, Hand, Icon } from "../primitives";

export function Recognition() {
  return (
    <section className="bg-lav">
      <div className="wrap-wide">
        <Reveal className="center" style={{ marginBottom: 12 }}>
          <div className="reco-eyebrow">WHAT'S ACTUALLY HAPPENING</div>
        </Reveal>
        <Reveal className="center" style={{ marginBottom: 8 }}>
          <h2 className="h2 reco-headline">
            You're doing more for your hair than ever.<br />
            So why is it doing <em style={{ fontStyle: "italic" }}>less</em>?
          </h2>
        </Reveal>
        <Reveal className="center" style={{ marginBottom: 28 }}>
          <p className="lead" style={{ maxWidth: 520, margin: "0 auto" }}>
            Five quiet things that pile up in your 20s and early 30s - and slowly decide what your hair will look like for the next decade.
          </p>
        </Reveal>

        <div className="timeline-wrap">
          {/* Row 1 */}
          <Reveal delay={0}>
            <div className="timeline-beat">
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">✂️</span>It grows… then snaps off at the same spot every month.
              </p>
              <p className="timeline-consequence">
                You measure it, get a little excited, then cut it shorter again. The length you grew is sitting in the bathroom bin.
              </p>
              <div className="timeline-marginalia">
                <Hand size={16} color="#2b66c2" rotate={-2}>↘ this is breakage, not slow growth</Hand>
              </div>
            </div>
          </Reveal>

          {/* Row 2 */}
          <Reveal delay={70}>
            <div className="timeline-beat">
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">🪞</span>You're spending more on your hair than ever - and seeing less for it.
              </p>
              <p className="timeline-consequence">
                The serum. The bond builder. The silk pillowcase. The supplements. Your hair feels exactly the same.
              </p>
              <div className="timeline-meter">
                <span className="timeline-meter-bar"><span className="timeline-meter-fill" /></span>
                ~$1,000 this year
              </div>
            </div>
          </Reveal>

          {/* Row 3 */}
          <Reveal delay={140}>
            <div className="timeline-beat heavy">
              <span className="timeline-wash" />
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">🌫️</span>You've quietly started believing this is just your hair.
              </p>
              <p className="timeline-consequence">
                "It just doesn't grow past my shoulders." "I have thin hair, it's genetics." You've accepted a limit no one ever proved was a limit.
              </p>
              <div className="timeline-marginalia">
                <Hand size={16} color="#2b66c2" rotate={-3}>↘ almost never true</Hand>
              </div>
            </div>
          </Reveal>

          {/* Row 4 */}
          <Reveal delay={210}>
            <div className="timeline-beat heavy">
              <span className="timeline-wash" />
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">🧴</span>The bleach (or the heat, or the box dye) changed it - and nothing's been the same since.
              </p>
              <p className="timeline-consequence">
                You wouldn't go back to your natural colour, but your ends are paying for it. And no $80 mask is bringing them back.
              </p>
              <div className="timeline-marginalia">
                <Hand size={16} color="#2b66c2" rotate={-2}>↘ masks coat. they don't repair.</Hand>
              </div>
            </div>
          </Reveal>

          {/* Row 5 */}
          <Reveal delay={280}>
            <div className="timeline-beat heavy">
              <span className="timeline-wash" />
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">📷</span>You scroll past hair on TikTok and assume those girls were just born with it.
              </p>
              <p className="timeline-consequence">
                Almost none of them were. You just haven't seen the boring, behind-the-scenes routine that built it.
              </p>
              <div className="timeline-photos" aria-hidden="true">
                {[0,1,2,3,4,5].map(n => <span key={n} className="timeline-photo" />)}
              </div>
            </div>
          </Reveal>

        </div>

        <Reveal style={{ marginTop: 36 }}>
          <InlineTestimonial
            name="Lina" age={28} flag="🇩🇪"
            quote="I thought my hair just couldn't grow past my shoulders. Turns out it could - I was just snapping it off faster than it grew."
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