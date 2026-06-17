import { CtaButton, Marquee } from "../primitives";

export function BottomCta() {
  return (
    <section className="v22-section v22-bottomcta">
      <Marquee
        variant="cta"
        items={[
          "HEALTHIER HAIR IN 14 DAYS",
          "HEALTHIER HAIR IN 14 DAYS",
          "HEALTHIER HAIR IN 14 DAYS",
        ]}
      />
      <div className="v22-container v22-cta-wrap v22-cta-wrap--big">
        <CtaButton full>Start the 14-day challenge →</CtaButton>
      </div>
    </section>
  );
}
