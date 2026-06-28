import { CtaButton, R2Image, Stars } from "../primitives";

export function Hero() {
  return (
    <section className="v24-hero" id="hero">
      <div className="v24-hero__media">
        <R2Image
          url="https://pub.hairqare.co/22-the-haircare/ATF.webp"
          w={1080}
          h={1080}
          alt="Sarah, solution state, healthy hair, warm editorial tone"
          eager
        />
      </div>
      <div className="v24-container">
        <div className="v24-hero__copy">
          <span className="v24-trust v24-trust--chip">
            <svg className="v24-trust__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Loved by 250,000+ women in 149 countries
          </span>
          <h1 className="v24-h1 v24-h1--dual">
            <span className="v24-accent">5 Reasons</span> Women Quit{" "}
            <span className="v24-accent">Buying Shampoo</span> And Started Making It
          </h1>
          <p className="v24-lede">
            If you want beautiful, low-maintenance hair but your roots go oily and your ends stay dry no matter what you buy... here's why 250,000+ women stopped buying shampoo and started making their own.
          </p>
          <div className="v24-cta-wrap">
            <CtaButton full>Healthier Hair in 14 Days</CtaButton>
          </div>
          <div className="v24-stars-line v24-stars-line--center">
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