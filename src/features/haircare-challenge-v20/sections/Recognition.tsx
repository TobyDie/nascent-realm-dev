import { Reveal, InlineTestimonial, Icon, Eyebrow } from "../primitives";

export function Recognition() {
  return (
    <section className="bg-lav">
      <div className="wrap-wide">
        <Reveal className="center" style={{ marginBottom: 8 }}>
          <Eyebrow>What's actually happening</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12, lineHeight: 1.2 }}>
            You're doing more for your hair than ever.<br />
            So why is it doing <span style={{ color: "var(--orange-600)", fontStyle: "italic" }}>less</span>?
          </h2>
        </Reveal>
        <Reveal className="center" style={{ marginBottom: 28 }}>
          <p className="lead" style={{ maxWidth: 520, margin: "0 auto" }}>
            jhghkjhkgfhgkhgkhgkhg
          </p>
        </Reveal>

        <div className="confess-stack">
          {[
            {
              lead: "You got keratin treatments",
              neutral: "and for a few weeks it looked incredible,",
              accent: "then left your hair worse than before, so you booked the next one. And the next.",
            },
            {
              lead: "You got extensions to fake the length",
              neutral: "but the tension thins the real hair underneath,",
              accent: "so it grows back weaker, and you need them more than before.",
            },
            {
              lead: "You cut off the damage to start fresh",
              neutral: "but the breakage was never really about the ends,",
              accent: "so the new length snapped off in the exact same place.",
            },
            {
              lead: "You loaded on oils, masks and serums",
              neutral: "piling product onto hair that needed less,",
              accent: "coating it and weighing it down instead of fixing why it breaks.",
            },
            {
              lead: "You decided it was just your genetics",
              neutral: "so you quietly gave up,",
              accent: "on length you were actually capable of growing all along.",
            },
          ].map((b, i) => (
            <Reveal key={i} delay={i * 70}>
              <article className="confess-card">
                <span className="confess-num">{String(i + 1).padStart(2, "0")}</span>
                <p className="confess-lead">{b.lead}</p>
                <p className="confess-neutral">{b.neutral}</p>
                <p className="confess-accent">
                  <span className="confess-arrow" aria-hidden="true">↳</span> {b.accent}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: 36 }}>
          <InlineTestimonial
            name="Lucía Gonzalo Carabias" age={26} flag="🇪🇸"
            quote="I have used it only once, now you can see it's the fourth day without washing my hair and it looks very clean for me, it's not oily at all and my scalp feels great… and I also feel my ends better, more lubricated."
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