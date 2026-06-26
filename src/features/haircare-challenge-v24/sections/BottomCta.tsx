import { CtaButton, Marquee } from "../primitives";

export function BottomCta() {
  return (
    <section className="v24-section v24-bottomcta">
      <Marquee
        variant="cta"
        items={[
          "THE END OF THE SHAMPOO SEARCH",
          "THE END OF THE SHAMPOO SEARCH",
          "THE END OF THE SHAMPOO SEARCH",
        ]}
      />
      <div className="v24-container v24-cta-wrap v24-cta-wrap--big">
        <CtaButton full>Take the 60-second quiz</CtaButton>
        <div className="v24-trust-row">
          <span className="v24-trust">
            <svg className="v24-trust__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
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
