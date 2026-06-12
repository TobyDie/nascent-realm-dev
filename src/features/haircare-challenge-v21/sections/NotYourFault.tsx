import { Reveal, Eyebrow, Button } from "../primitives";

/* Wobbly hand-drawn underline under "fault" */
function FaultUnderline() {
  return (
    <svg className="nyf-fault-underline" viewBox="0 0 220 14" fill="none" aria-hidden="true">
      <path
        d="M2 9 C 30 2, 60 13, 90 7 S 150 2, 178 9 S 215 5, 218 8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Doodle 1 - shampoo bottle with a crossed-out swipe */
function DoodleBottle() {
  return (
    <svg className="nyf-doodle" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 14 h12 v6 h-12 z" />
        <path d="M20 22 h20 v28 a4 4 0 0 1 -4 4 h-12 a4 4 0 0 1 -4 -4 z" />
        <path d="M25 32 h10 M25 38 h7" opacity="0.5" />
      </g>
      <path d="M10 54 L 56 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}

/* Doodle 2 - stack of products with a question mark */
function DoodleStack() {
  return (
    <svg className="nyf-doodle" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="44" width="32" height="10" rx="2" />
        <rect x="14" y="32" width="28" height="10" rx="2" />
        <rect x="18" y="20" width="22" height="10" rx="2" />
      </g>
      <path
        d="M48 18 c0 -4 6 -5 6 -1 c0 3 -3 3 -3 6 M51 28 v0.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* Doodle 3 - sun rising with a sparkle */
function DoodleSun() {
  return (
    <svg className="nyf-doodle" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none">
        <path d="M14 46 a18 18 0 0 1 36 0" />
        <path d="M6 46 h52" />
        <path d="M32 16 v6 M48 22 l-4 4 M16 22 l4 4 M52 32 h4 M8 32 h4" />
      </g>
      <path d="M50 10 l1.5 4 l4 1.5 l-4 1.5 l-1.5 4 l-1.5 -4 l-4 -1.5 l4 -1.5 z" fill="currentColor" />
    </svg>
  );
}

/* Soft sunrise glow behind hope card */
function SunriseBackdrop() {
  return (
    <svg className="nyf-sunrise" viewBox="0 0 140 100" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M70 90 a40 40 0 0 1 0 -80 a40 40 0 0 1 0 80 z" opacity="0.35" />
        <path d="M70 10 v-8 M30 50 h-8 M110 50 h8 M40 20 l-6 -6 M100 20 l6 -6" />
      </g>
    </svg>
  );
}

/* Curved arrow from the last beat down to the CTA */
function CurvedArrow() {
  return (
    <svg className="nyf-arrow" viewBox="0 0 56 40" fill="none" aria-hidden="true">
      <path
        d="M6 4 C 14 22, 28 30, 46 28"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M40 22 L 48 28 L 40 34" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function NotYourFault({ onCta }: { onCta?: () => void }) {
  return (
    <section className="nyf-section">
      <div className="wrap">
        <Reveal className="nyf-head">
          <Eyebrow>Why it's happening</Eyebrow>
          <h2 className="nyf-headline">
            Your hair didn't get worse. <span className="hl">It changed.</span>{"\n"}Your routine just didn't change with it.
          </h2>
          <p className="nyf-subhead">
            You didn't do anything wrong.{"\n"}No one ever taught you what shifts after 30, so none of this was your{" "}
            <span className="nyf-fault">
              fault
              <FaultUnderline />
            </span>
            {"\n"}.
          </p>
        </Reveal>

        <div className="nyf-rail">
          {/* Beat 1 */}
          <Reveal delay={0} className="nyf-beat">
            <div className="nyf-dot" aria-hidden="true">01</div>
            <article className="nyf-card">
              <div className="nyf-chapter">
                <span className="nyf-chapter-num">NOT YOUR FAULT</span>
              </div>
              <h3 className="nyf-quote">You're still using a haircare routine built for when you were 25.</h3>
              <p className="nyf-body">
                No one told you it would stop working. So you kept following what used to work, and wondering why nothing is working.{"\n\n"}
              </p>
              <DoodleBottle />
            </article>
          </Reveal>

          {/* Beat 2 */}
          <Reveal delay={120} className="nyf-beat">
            <div className="nyf-dot" aria-hidden="true">02</div>
            <article className="nyf-card">
              <div className="nyf-chapter">
                <span className="nyf-chapter-num">NOT YOUR FAULT</span>
              </div>
              <h3 className="nyf-quote">You tried to buy the fix.</h3>
              <p className="nyf-body">
                In your 30s, you start to earn more money but have so much less time so of course you invested in products to solve the problem.{"\n\n"}But you can't buy past what no one taught you to understand.{"\n\n"}
              </p>
              <DoodleStack />
            </article>
          </Reveal>

          {/* Beat 3 - the turn */}
          <Reveal delay={260} className="nyf-beat">
            <div className="nyf-dot nyf-dot-hope" aria-hidden="true">03</div>
            <article className="nyf-card nyf-card-hope">
              <SunriseBackdrop />
              <div className="nyf-chapter nyf-chapter-hope">
                <span className="nyf-chapter-num">HERE'S THE PART{"\n"}THAT NO ONE TELLS YOU</span>
              </div>
              <h3 className="nyf-quote">Once you learn how to care for your hair in your 30s, it's easy.</h3>
              <p className="nyf-body">
                Fewer steps. Less money.{"\n"}Less effort and time.{"\n"}It's only hard for your right now because understanding your hair is the one thing the industry was never going to sell you.{"\n\n"}
              </p>
              <DoodleSun />
            </article>
          </Reveal>
        </div>

        <Reveal className="nyf-cta-wrap">
          <CurvedArrow />
          <p className="nyf-kicker">The hard part is already behind you.</p>
          <Button id="cta-not-your-fault" onClick={onCta} icon="arrow-right">
            Show me what my hair needs now
          </Button>
        </Reveal>
      </div>
    </section>
  );
}