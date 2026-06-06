import { Anno, Eyebrow, Reveal } from "../primitives";

const SEALS = [
  { label: "Cleveland Clinic", sub: "trained advisor" },
  { label: "Vogue", sub: "featured" },
  { label: "Harper's BAZAAR", sub: "featured" },
  { label: "Allure", sub: "featured" },
  { label: "Journal of Cosmetic Dermatology", sub: "cited research" },
  { label: "American Academy of Dermatology", sub: "guideline-aligned" },
];

export function ReviewedBy() {
  return (
    <section className="bg-white reviewed-by-strip">
      <Anno>Reviewed-by — minimal seal strip</Anno>
      <div className="wrap-wide">
        <Reveal className="center" style={{ marginBottom: 18 }}>
          <Eyebrow style={{ color: "var(--slate)" }}>Reviewed by clinicians · featured in</Eyebrow>
        </Reveal>
        <Reveal>
          <ul className="seal-row" aria-label="Press and clinical endorsements">
            {SEALS.map((s) => (
              <li key={s.label} className="seal-item">
                <span className="seal-name">{s.label}</span>
                <span className="seal-sub">{s.sub}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default ReviewedBy;