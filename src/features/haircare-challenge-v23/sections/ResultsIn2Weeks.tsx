import { Anno, Button, Eyebrow, Reveal } from "../primitives";

const GLYPHS = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6h12v3" /><path d="M6 9v4M9 9v4M12 9v4M15 9v4" />
      <path d="M18 5c.6 2 .6 4 0 6M20 7c.4 1.2.4 2.4 0 3.6" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="9" r="3" /><path d="M9 12c-1 3-2 5-2 8M15 12c1 3 2 5 2 8" />
      <path d="M4 6l-2 2 2 2M20 6l2 2-2 2" /><path d="M3 8h4M17 8h4" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3c3 4 5 7 5 10a5 5 0 0 1-10 0c0-3 2-6 5-10z" />
      <path d="M4 20c2-1 4-1 8-1s6 0 8 1" opacity=".55" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4c3 3 3 7 0 10s-3 5 0 7" />
      <path d="M13 13l3 3 5-6" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="19" r="3" />
      <path d="M12 16V8" /><path d="M12 10c-2-1-4-1-5-3 2 0 4 1 5 3z" />
      <path d="M12 8c2-1 4-2 5-4-2 0-4 1-5 4z" />
    </svg>
  ),
];

const DAY_TAGS = ["DAY 3", "DAY 5", "DAY 7", "DAY 10", "DAY 14"];

const ROWS = [
  { emoji: "✂️", title: "Less shedding", body: "Real decrease in strands in your drain - at the temples, crown and part. Not a temporary patch." },
  { emoji: "💁", title: "Visible thickness - not styling tricks", body: "Real density that shows up in the mirror - the fullness you thought you had to fake with product." },
  { emoji: "💧", title: "Hydrated, resilient hair", body: "Restore the moisture balance for your hair as it is now - and stretch the time between washes." },
  { emoji: "💪", title: "Stronger strands", body: "Protect the keratin you're already building, so breakage stops outrunning growth - and your length finally compounds." },
  { emoji: "🌱", title: "A healthier scalp", body: "Build the scalp conditions your follicles need to regrow strong, consistent hair - for years." },
];

export function ResultsIn2Weeks({ onCta }: { onCta?: () => void }) {
  return (
    <section className="bg-cream">
      <Anno>Added - What changes in 14 days (outcomes)</Anno>
      <div className="wrap" style={{ maxWidth: 760 }}>
        <Reveal style={{ textAlign: "center", marginBottom: 36 }}>
          <Eyebrow>Built for women in their 20s and 30s</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12 }}>What you'll actually see <span style={{ color: "var(--orange-600)" }}>in 2 weeks</span></h2>
        </Reveal>
        <Reveal>
          <ol className="shift-list">
            <span className="shift-rail" aria-hidden="true" />
            {ROWS.map((r, i) => (
              <li key={i} className={`shift-row tint-${i + 1}${i === 1 || i === 3 ? " shift-offset" : ""}`}>
                <div className="shift-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</div>
                <div className="shift-body">
                  <div className="shift-meta">
                    <span className="shift-tag">{DAY_TAGS[i]}</span>
                    <span className="shift-emoji" aria-hidden="true">{r.emoji}</span>
                    <span className="shift-glyph" aria-hidden="true">{GLYPHS[i]}</span>
                  </div>
                  <div className="shift-title">{r.title}</div>
                  <div className="p shift-desc">{r.body}</div>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal className="center" style={{ marginTop: 30 }}>
          <Button id="cta-results-2w" onClick={onCta} icon="arrow-right">Start the challenge</Button>
        </Reveal>
      </div>
    </section>
  );
}

export default ResultsIn2Weeks;