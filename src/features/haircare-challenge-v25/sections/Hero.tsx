import { CtaButton, R2Image, Stars } from "../primitives";

export function Hero() {
  return (
    <section className="v25-hero" id="hero">
      <div className="v25-hero__media">
        <R2Image
          url="https://pub.hairqare.co/22-the-haircare/ATF.webp"
          w={1080}
          h={1080}
          alt="Sarah, solution state, healthy hair, warm editorial tone"
          eager
        />
      </div>
      <div className="v25-container">
        <div className="v25-hero__copy">
          <span className="v25-trust v25-trust--chip">
            <svg className="v25-trust__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            14-Day Haircare Challenge
          </span>
          <h1 className="v25-h1 v25-h1--dual">
            <span className="v25-accent">5 Reasons</span> Women Are{" "}
            <span className="v25-accent">Finally Quitting</span> Expensive Hair Products
          </h1>
          <p className="v25-lede">
            If you still want healthy, beautiful hair… but you're tired of buying bottle after bottle that promised everything and changed nothing, here's why 250,000+ women stopped shopping for the answer and started learning it.
          </p>
          <div className="v25-cta-wrap">
            <CtaButton full>Healthier hair in 14 days →</CtaButton>
          </div>
          <div className="v25-stars-line v25-stars-line--center">
            <Stars />
            <span>
              <strong>4.8</strong> Stars · <strong>250,000+</strong> Women
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}