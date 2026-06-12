import { Reveal, Eyebrow, Button } from "../primitives";

export function NotYourFault({ onCta }: { onCta?: () => void }) {
  return (
    <section className="bg-white nyf-section">
      <div className="wrap">
        <Reveal style={{ textAlign: "center", marginBottom: 28 }}>
          <Eyebrow style={{ color: "var(--slate)" }}>BEFORE YOU BLAME YOURSELF</Eyebrow>
          <h2 className="h2 nyf-headline" style={{ marginTop: 12 }}>
            None of this was your fault.
          </h2>
        </Reveal>

        <div className="nyf-stack">
          <Reveal delay={0}>
            <article className="nyf-card">
              <div className="nyf-tag nyf-tag-green">NOT YOUR FAULT</div>
              <h3 className="nyf-card-title">
                You're still using a haircare routine built for when you were 25.
              </h3>
              <p className="nyf-card-body">
                No one told you it would stop working — so you kept following what used to work, and wondering why nothing is working.
              </p>
            </article>
          </Reveal>

          <Reveal delay={70}>
            <article className="nyf-card">
              <div className="nyf-tag nyf-tag-green">NOT YOUR FAULT</div>
              <h3 className="nyf-card-title">You tried to buy the fix.</h3>
              <p className="nyf-card-body">
                In your 30s, you start to earn more money but have so much less time — so of course you invested in products to solve the problem. But you can't buy past what no one taught you to understand.
              </p>
            </article>
          </Reveal>

          <Reveal delay={140}>
            <article className="nyf-card nyf-card-accent">
              <div className="nyf-tag nyf-tag-orange">HERE'S THE PART NO ONE TELLS YOU</div>
              <h3 className="nyf-card-title">
                Once you learn how to care for your hair in your 30s, it's easy.
              </h3>
              <p className="nyf-card-body">
                Fewer steps. Less money. Less effort and time. It's only hard because understanding your hair is the one thing the industry was never going to sell you.
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal className="center" style={{ marginTop: 28 }}>
          <Button id="cta-not-your-fault" onClick={onCta} icon="arrow-right">
            Show me what my hair needs now
          </Button>
        </Reveal>
      </div>
    </section>
  );
}