import { Anno, Button, Eyebrow, Reveal } from "../primitives";

export function ResultsIn2Weeks({ onCta }: { onCta?: () => void }) {
  return (
    <section className="bg-cream">
      <Anno>Added, What changes in 14 days (outcomes)</Anno>
      <div className="wrap" style={{ maxWidth: 760 }}>
        <Reveal style={{ textAlign: "center", marginBottom: 36 }}>
          <Eyebrow>Built for women 30-42</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12 }}>What you'll actually see in 2 weeks</h2>
        </Reveal>
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div className="result-row">
              <span className="result-emoji">✂️</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 3 }}>Less shedding</div>
                <div className="p" style={{ fontSize: 15, margin: 0, lineHeight: 1.5 }}>
                  Real decrease in strands in your drain, at the temples, crown and part. Not a temporary patch.
                </div>
              </div>
            </div>
            <div className="result-row">
              <span className="result-emoji">💁</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 3 }}>Volume coming back</div>
                <div className="p" style={{ fontSize: 15, margin: 0, lineHeight: 1.5 }}>
                  As your follicles recover from the stress of your 30s, fullness returns, without styling tricks.
                </div>
              </div>
            </div>
            <div className="result-row">
              <span className="result-emoji">💧</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 3 }}>Hydrated, resilient hair</div>
                <div className="p" style={{ fontSize: 15, margin: 0, lineHeight: 1.5 }}>
                  Restore the moisture balance for your hair as it is now, and stretch the time between washes.
                </div>
              </div>
            </div>
            <div className="result-row">
              <span className="result-emoji">💪</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 3 }}>Stronger strands</div>
                <div className="p" style={{ fontSize: 15, margin: 0, lineHeight: 1.5 }}>
                  Work with the keratin and collagen decline that starts in your 30s, so the breakage eases off.
                </div>
              </div>
            </div>
            <div className="result-row">
              <span className="result-emoji">🌱</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 3 }}>A healthier scalp</div>
                <div className="p" style={{ fontSize: 15, margin: 0, lineHeight: 1.5 }}>
                  Build the scalp conditions your follicles need to regrow strong, consistent hair, for years.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal className="center" style={{ marginTop: 30 }}>
          <Button id="cta-results-2w" onClick={onCta} icon="arrow-right">Start the challenge</Button>
        </Reveal>
      </div>
    </section>
  );
}

export default ResultsIn2Weeks;