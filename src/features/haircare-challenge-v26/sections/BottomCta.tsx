import { CtaButton, Marquee } from "../primitives";

export function BottomCta() {
  return (
    <section className="v26-section v26-bottomcta">
      <Marquee
        variant="cta"
        items={[
          "STOP BUYING IT. START MAKING IT.",
          "STOP BUYING IT. START MAKING IT.",
          "STOP BUYING IT. START MAKING IT.",
        ]}
      />
      <div className="v26-container v26-cta-wrap v26-cta-wrap--big">
        <CtaButton full>Healthier Hair in 14 Days</CtaButton>
        <div className="v26-trust-row">
          <span className="v26-trust">
            <svg className="v26-trust__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
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
