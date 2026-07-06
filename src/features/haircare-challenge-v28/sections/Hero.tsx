import { CtaButton, R2Image, Stars } from "../primitives";

export function Hero() {
  return (
    <section className="v28-hero" id="hero">
      <div className="v28-hero__media">
        <R2Image
          url="https://pub.hairqare.co/22-the-haircare/ATF.webp"
          w={1080}
          h={1080}
          alt="Sarah, solution state, healthy hair, warm editorial tone"
          eager
        />
      </div>
      <div className="v28-container">
        <div className="v28-hero__copy">
          <span className="v28-trust v28-trust--chip">
            <svg className="v28-trust__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            10-Minute Read
          </span>
          <h1 className="v28-h1 v28-h1--dual">
            <span className="v28-accent">5 Reasons</span> Your Hair Never Grows Past{" "}
            <span className="v28-accent">The Same Length</span>
          </h1>
          <p className="v28-lede">
            If your hair reaches your shoulders, maybe your collarbone, and then just... stays there year after year, this is the most important thing you'll read about your hair. Because the reason has nothing to do with your genetics. Here's what 250,000+ women learned about why their hair stopped, and how they got it moving again.
          </p>
          <div className="v28-cta-wrap">
            <CtaButton full>Healthier hair in 14 days →</CtaButton>
          </div>
          <div className="v28-stars-line v28-stars-line--center">
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