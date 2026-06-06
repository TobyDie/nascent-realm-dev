import { Reveal, InlineTestimonial, Hand, Icon } from "../primitives";

export function Recognition() {
  return (
    <section className="bg-lav">
      <div className="wrap-wide">
        <Reveal className="center" style={{ marginBottom: 28 }}>
          <div className="reco-header-block">
            <div className="reco-eyebrow">WHAT IS HAPPENING</div>
            <h2 className="h2 reco-headline">Somewhere in your 30s, this started happening:</h2>
          </div>
        </Reveal>

        <div className="timeline-wrap">
          {/* Row 1 */}
          <Reveal delay={0}>
            <div className="timeline-beat">
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">✂️</span>It won't grow long like it did in your 20s.
              </p>
              <p className="timeline-consequence">
                so you cut it shorter, then shorter, until you stopped trying for the hair you actually want.
              </p>
            </div>
          </Reveal>

          {/* Row 2 */}
          <Reveal delay={70}>
            <div className="timeline-beat">
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">🪞</span>You can see your scalp through your part now.
              </p>
              <p className="timeline-consequence">
                so you part it differently and wear it up, which hides it but never finds what's causing it.
              </p>
              <div className="timeline-marginalia">
                <Hand size={16} color="#2b66c2" rotate={-2}>↘ you never found out</Hand>
              </div>
            </div>
          </Reveal>

          {/* Row 3 */}
          <Reveal delay={140}>
            <div className="timeline-beat heavy">
              <span className="timeline-wash" />
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">🌫️</span>Greys you didn't have a year ago.
              </p>
              <p className="timeline-consequence">
                so you colour them, and the dye stresses already-fragile hair, so it breaks, so you colour again.
              </p>
              <div className="timeline-marginalia">
                <Hand size={16} color="#2b66c2" rotate={-3}>↘ making your hair age even faster</Hand>
              </div>
            </div>
          </Reveal>

          {/* Row 4 */}
          <Reveal delay={210}>
            <div className="timeline-beat heavy">
              <span className="timeline-wash" />
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">🧴</span>Nothing you buy seems to work.
              </p>
              <p className="timeline-consequence">
                so you reach for the next better shampoo, the next salon visit, close to $2,000 by now, and you're still watching it fall.
              </p>
              <div className="timeline-meter">
                <span className="timeline-meter-bar"><span className="timeline-meter-fill" /></span>
                ~$2,000 spent
              </div>
            </div>
          </Reveal>

          {/* Row 5 */}
          <Reveal delay={280}>
            <div className="timeline-beat heavy">
              <span className="timeline-wash" />
              <span className="timeline-dot" />
              <p className="timeline-trigger">
                <span className="emoji">📷</span>You've started wearing it up in every photo.
              </p>
              <p className="timeline-consequence">
                down makes you anxious, so up became the default, and you like your photos a little less each year.
              </p>
              <div className="timeline-photos" aria-hidden="true">
                {[0,1,2,3,4,5].map(n => <span key={n} className="timeline-photo" />)}
              </div>
            </div>
          </Reveal>

        </div>

        <Reveal style={{ marginTop: 36 }}>
          <InlineTestimonial
            name="Abigail" age={37} flag="🇺🇸"
            quote="I haven't been crying every day over my hair. It's not where I want it to be yet, but it's been so much better since I changed the things I was doing wrong."
            avatar="profile-9.webp"
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