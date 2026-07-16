import { CtaButton, R2Image, Stars } from "../primitives";

export function Hero() {
  return (
    <section className="v30-hero" id="hero">
      <div className="v30-hero__media">
        <R2Image
          url="https://pub.hairqare.co/22-the-haircare/ATF.webp"
          w={1080}
          h={1080}
          alt="Sarah, solution state, healthy hair, warm editorial tone"
          eager
        />
      </div>
      <div className="v30-container">
        <div className="v30-hero__copy">
          <span className="v30-trust v30-trust--chip">
            <svg className="v30-trust__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            14-Day Haircare Challenge
          </span>
          <h1 className="v30-h1 v30-h1--dual">
            5 Reasons Women Are Finally{" "}
            <span className="v30-accent">Quitting Expensive Hair Products</span>
          </h1>
          <p className="v30-lede">
            If you still want healthy hair you can actually wear down again, but you've tried everything and spent so much on products that never worked.
          </p>
          <p className="v30-lede">
            Here's why <strong>250,000+ women quit expensive haircare</strong> and learned to{" "}
            <strong>make their own shampoo that actually works for their hair</strong>.
          </p>
          <div className="v30-cta-wrap">
            <CtaButton full>Healthier hair in 14 days →</CtaButton>
          </div>
          <div className="v30-stars-line v30-stars-line--center">
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