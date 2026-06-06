import { Anno, Eyebrow, Reveal } from "../primitives";

const ADVISORS = [
  {
    initials: "LW",
    name: "Dr. Lena Whitmore, MD",
    credentials: "Board-certified dermatologist · formerly Cleveland Clinic",
    quote:
      "The challenge's emphasis on scalp microbiome and hormonal context is exactly the conversation 30-something women are not getting from product marketing.",
  },
  {
    initials: "PA",
    name: "Dr. Priya Anand, PhD",
    credentials:
      "Trichology researcher · contributor, Journal of Cosmetic Dermatology",
    quote:
      "The 14-day window is realistic for visible shedding reduction when scalp inflammation is the driver — and for most women in their 30s, it is.",
  },
  {
    initials: "SR",
    name: "Sofia Reyes, RD",
    credentials: "Functional nutritionist · women's hormonal health",
    quote:
      "The nutrient layer is the piece most haircare programs ignore. This one doesn't.",
  },
];

export function ReviewedBy() {
  return (
    <section className="bg-white reviewed-by">
      <Anno>Added — Independent medical / nutrition advisors</Anno>
      <div className="wrap-wide">
        <Reveal className="center" style={{ marginBottom: 28 }}>
          <Eyebrow style={{ color: "var(--slate)" }}>Reviewed by</Eyebrow>
          <h2 className="h2" style={{ marginTop: 10, maxWidth: 640, marginInline: "auto" }}>
            Independent clinicians weighed in on the protocol.
          </h2>
        </Reveal>
        <div className="advisor-grid">
          {ADVISORS.map((a, i) => (
            <Reveal key={a.name} delay={i * 80}>
              <article className="advisor-card">
                <div className="advisor-head">
                  <div className="advisor-avatar" aria-hidden="true">{a.initials}</div>
                  <div className="advisor-id">
                    <div className="advisor-name">{a.name}</div>
                    <div className="advisor-credentials">{a.credentials}</div>
                  </div>
                </div>
                <p className="advisor-quote">"{a.quote}"</p>
                <span className="advisor-tag">Independent advisor</span>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="advisor-disclaimer">
          Advisors reviewed the program's clinical claims; individual results vary.
        </p>
      </div>
    </section>
  );
}

export default ReviewedBy;