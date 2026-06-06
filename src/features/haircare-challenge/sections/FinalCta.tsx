import { Anno, Button, Eyebrow, GuaranteeBadge, Icon, Reveal, Trustpilot } from "../primitives";
import { useJoiningCount, formatJoiningCount } from "../useJoiningCount";
import { useStartDate, fmtLongDay, fmtMonthDay } from "../useStartDate";

export function FinalCta({ onCta }: { onCta?: () => void }) {
  const joining = useJoiningCount();
  const startDate = useStartDate();
  const liStyle: React.CSSProperties = { display: "flex", gap: 11, alignItems: "flex-start", fontSize: 15.5, color: "var(--ink-soft)" };
  return (
    <section className="bg-cream" id="start">
      <Anno>Section 11 — Final CTA / urgency close</Anno>
      <div className="wrap" style={{ textAlign: "center" }}>
        <Reveal>
          <Eyebrow>The decision</Eyebrow>
          <h2 className="h-hero" style={{ marginTop: 14, marginBottom: 20, maxWidth: 720, marginInline: "auto" }}>
            Bring her back.
          </h2>
          <p className="lead" style={{ marginBottom: 36, maxWidth: 620, marginInline: "auto" }}>
            You used to be known for your hair. She's not gone — she's been waiting for someone to finally explain what happened. In 14 days, you'll have the knowledge to bring her back. And it'll be <strong>yours forever</strong>.
          </p>
        </Reveal>
        <Reveal>
          <div style={{ background: "#fff", borderRadius: 24, boxShadow: "var(--shadow-lg)", border: "2px solid var(--orange-500)", overflow: "hidden", maxWidth: 540, margin: "0 auto 28px" }} className="final-cta-card">
            <div style={{ background: "var(--orange-600)", color: "#fff", padding: 10, fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>
              85% off · cohort starts <span className="start-date">{startDate ? fmtLongDay(startDate) : "Friday, June 6th"}</span>
            </div>
            <div style={{ padding: "30px 32px", textAlign: "left" }} className="final-cta-card-body">
              <ul style={{ listStyle: "none", margin: "0 0 22px", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                <li style={liStyle}>
                  <Icon name="check" size={18} color="var(--orange-600)" stroke={2.5} style={{ marginTop: 2, flex: "none" }} />14-Day Haircare Masterclass + daily coaching
                </li>
                <li style={liStyle}>
                  <Icon name="check" size={18} color="var(--orange-600)" stroke={2.5} style={{ marginTop: 2, flex: "none" }} />DIY shampoo workshop & personalised deficiency test
                </li>
                <li style={liStyle}>
                  <Icon name="check" size={18} color="var(--orange-600)" stroke={2.5} style={{ marginTop: 2, flex: "none" }} />Members-only community cohort starting June 6th
                </li>
                <li style={liStyle}>
                  <Icon name="check" size={18} color="var(--orange-600)" stroke={2.5} style={{ marginTop: 2, flex: "none" }} />Certificate of completion
                </li>
                <li style={liStyle}>
                  <Icon name="check" size={18} color="var(--orange-600)" stroke={2.5} style={{ marginTop: 2, flex: "none" }} />Fits into 10 minutes a day — no extra trips, no salon appointments
                </li>
              </ul>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, justifyContent: "center", marginBottom: 18 }}>
                <span style={{ fontSize: 20, color: "var(--slate-soft)", textDecoration: "line-through" }}>$247</span>
                <span className="stat-num" style={{ fontSize: 64, color: "var(--orange-600)" }}>$37</span>
              </div>
              <Button id="cta-final" onClick={onCta} icon="arrow-right" style={{ width: "100%", justifyContent: "center" }}>Start the challenge</Button>
              <div style={{ marginTop: 16 }}>
                <GuaranteeBadge size="md" />
              </div>
              <p style={{ marginTop: 12, marginBottom: 0, fontSize: 13.5, color: "var(--slate)", textAlign: "center", lineHeight: 1.55 }}>
                <strong style={{ color: "var(--ink-soft)" }}>Why we can promise this:</strong> 92% of women see visible change in 14 days. If you're in the 8% — full refund, you keep everything.
              </p>
              <p className="small center" style={{ marginTop: 14, marginBottom: 0 }}>
                Next cohort starts <span className="start-date">{startDate ? fmtMonthDay(startDate) : "June 6th"}</span> · {formatJoiningCount(joining)} women joining this week · 30-day money-back guarantee
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18, marginTop: 8 }}>
          <Trustpilot rating="4.8" reviews="12,400 reviews" />
        </Reveal>
      </div>
    </section>
  );
}

export default FinalCta;