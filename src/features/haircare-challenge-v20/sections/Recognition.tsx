import { Reveal, InlineTestimonial, Hand, Icon } from "../primitives";

export function Recognition() {
  return (
    <section className="bg-lav">
      <div className="wrap-wide">
        <Reveal className="center" style={{ marginBottom: 28 }}>
          <div className="reco-header-block">
            <div className="reco-eyebrow">WHAT IS HAPPENING</div>
            <h2 className="h2 reco-headline">Sometime in your 20s or early 30s, this started happening:</h2>
          </div>
        </Reveal>

        <div className="timeline-wrap">
          {/* Row 1 */}
          <Reveal delay={0}>
            <div className="timeline-beat">
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">📏</span>It grows to a certain point and just… stops.
              </p>
              <p className="timeline-consequence">
                so you trim the ends, blame the ends, and never find what's actually capping your length.
              </p>
            </div>
          </Reveal>

          {/* Row 2 */}
          <Reveal delay={70}>
            <div className="timeline-beat">
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">🔥</span>Color, heat, bleach — and the bond builder you bought to fix the bleach.
              </p>
              <p className="timeline-consequence">
                so the breakage outruns the growth, and your length never actually moves.
              </p>
              <div className="timeline-marginalia">
                <Hand size={16} color="#2b66c2" rotate={-2}>↘ the damage compounds</Hand>
              </div>
            </div>
          </Reveal>

          {/* Row 3 */}
          <Reveal delay={140}>
            <div className="timeline-beat heavy">
              <span className="timeline-wash" />
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">👶</span>Postpartum shedding that didn't come back.
              </p>
              <p className="timeline-consequence">
                so you wait, and wait, and start to wonder if this is just your hair now.
              </p>
              <div className="timeline-marginalia">
                <Hand size={16} color="#2b66c2" rotate={-3}>↘ it's been 18 months</Hand>
              </div>
            </div>
          </Reveal>

          {/* Row 4 */}
          <Reveal delay={210}>
            <div className="timeline-beat heavy">
              <span className="timeline-wash" />
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">🧴</span>Limp and lifeless despite the whole routine.
              </p>
              <p className="timeline-consequence">
                $200 in the shower and it still looks flat by noon — so you buy the next better thing, and the next, ~$1,000 deep this year alone.
              </p>
              <div className="timeline-meter">
                <span className="timeline-meter-bar"><span className="timeline-meter-fill" /></span>
                ~$1,000 this year
              </div>
            </div>
          </Reveal>

          {/* Row 5 */}
          <Reveal delay={280}>
            <div className="timeline-beat heavy">
              <span className="timeline-wash" />
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">😮‍💨</span>Stress is showing in your hair before it shows anywhere else.
              </p>
              <p className="timeline-consequence">
                the shedding in the brush, the temple thinning, the texture change you can feel before you can see.
              </p>
              <div className="timeline-photos" aria-hidden="true">
                {[0,1,2,3,4,5].map(n => <span key={n} className="timeline-photo" />)}
              </div>
            </div>
          </Reveal>

        </div>

        <Reveal style={{ marginTop: 36 }}>
          <InlineTestimonial
            name="Maya" age={28} flag="🇺🇸"
            quote="My hair has been stuck at the same length for years. Two weeks in I'm already seeing baby hairs and less shedding — for the first time it actually feels like it's going somewhere."
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
            Tell me why this is happening <Icon name="arrow-right" size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}