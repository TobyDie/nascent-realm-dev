import { CtaButton, Placeholder, Stars } from "../primitives";

export function Hero() {
  return (
    <section className="v22-section v22-hero" id="hero">
      <div className="v22-container">
        <div className="v22-eyebrow">The Product Trap</div>
        <h1 className="v22-h1">5 Reasons Women Are Finally Quitting Expensive Hair Products</h1>
        <p className="v22-lede">
          If you still want healthy, beautiful hair… but you're tired of buying bottle after bottle that promised everything and changed nothing — here's why 250,000+ women stopped shopping for the answer and started learning it.
        </p>
        <div className="v22-cta-wrap">
          <CtaButton full>Healthier hair in 14 days →</CtaButton>
        </div>
        <div className="v22-stars-line">
          <Stars /> <span>4.9 · Loved by 250,000+ women in 149 countries</span>
        </div>
      </div>
      <div className="v22-container v22-hero__imgwrap">
        <Placeholder
          w={1080}
          h={1080}
          label="Sarah · solution state"
          alt="Sarah, solution state, healthy hair, warm editorial tone"
        />
      </div>
    </section>
  );
}