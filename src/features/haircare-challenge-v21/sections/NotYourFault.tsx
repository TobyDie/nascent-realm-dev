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

/* Doodle 1 — shampoo bottle with a crossed-out swipe */
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

/* Doodle 2 — stack of products with a question mark */
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

/* Doodle 3 — sun rising with a sparkle */
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
          <Eyebrow style={{ color: "var(--slate)" }}>BEFORE YOU BLAME YOURSELF</Eyebrow>
          <h2 className="nyf-headline">
            None of this was your{" "}
            <span className="nyf-fault">
              fault
              <FaultUnderline />
            </span>
            .
          </h2>
          <p className="nyf-subhead">
            Three quiet things happened — none of them are on you. Here's the story, in order.
          </p>
        </Reveal>

        <div className="nyf-rail">
          {/* Beat 1 */}
          <Reveal delay={0} className="nyf-beat">
            <div className="nyf-dot" aria-hidden="true">01</div>
            <article className="nyf-card">
              <div className="nyf-chapter">
                <span className="nyf-chapter-num">Chapter 01</span>
                <span>The routine</span>
              </div>
              <h3 className="nyf-quote">"You followed what used to work."</h3>
              <p className="nyf-body">
                You're still using a haircare routine built for when you were 25. No one told you it would stop working — so you kept following it, wondering why nothing was working anymore.
              </p>
              <DoodleBottle />
            </article>
          </Reveal>

          {/* Beat 2 */}
          <Reveal delay={120} className="nyf-beat">
            <div className="nyf-dot" aria-hidden="true">02</div>
            <article className="nyf-card">
              <div className="nyf-chapter">
                <span className="nyf-chapter-num">Chapter 02</span>
                <span>The spend</span>
              </div>
              <h3 className="nyf-quote">"You tried to buy the answer."</h3>
              <p className="nyf-body">
                In your 30s you earn more but have so much less time — so of course you invested in products to solve it. But you can't buy past what no one taught you to understand.
              </p>
              <DoodleStack />
            </article>
          </Reveal>

          {/* Beat 3 — the turn */}
          <Reveal delay={260} className="nyf-beat">
            <div className="nyf-dot nyf-dot-hope" aria-hidden="true">03</div>
            <article className="nyf-card nyf-card-hope">
              <SunriseBackdrop />
              <div className="nyf-chapter nyf-chapter-hope">
                <span className="nyf-chapter-num">Chapter 03</span>
                <span>The truth no one tells you</span>
              </div>
              <h3 className="nyf-quote">"Once you understand it — it's easy."</h3>
              <p className="nyf-body">
                Fewer steps. Less money. Less effort and time. It's only hard because understanding your hair is the one thing the industry was never going to sell you.
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