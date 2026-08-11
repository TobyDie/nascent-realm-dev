import { CtaButton, Marquee } from "../primitives";

export function BottomCta() {
  return (
    <section className="v31-section v31-bottomcta">
      <Marquee
        variant="cta"
        items={[
          "HEALTHIER HAIR IN 14 DAYS",
          "HEALTHIER HAIR IN 14 DAYS",
          "HEALTHIER HAIR IN 14 DAYS",
        ]}
      />
      <div className="v31-container v31-cta-wrap v31-cta-wrap--big">
        <CtaButton full>Start the 14-day challenge →</CtaButton>
        <div className="v31-trust-row">
          <span className="v31-trust">
            <svg className="v31-trust__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            30-day money-back guarantee
          </span>
        </div>
      </div>
    </section>
  );
}
