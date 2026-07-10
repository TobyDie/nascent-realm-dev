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
            How Women in Their 30s and 40s Are{" "}
            <span className="v28-accent">Finally Growing Their Dream Waist-Length Hair</span>
          </h1>
          <p className="v28-lede">
            You know the cycle. Your hair grows to a certain length, then it gets thinner and starts breaking. It always seems to break in the same place. After a while, you cut it so it looks decent again.
          </p>
          <p className="v28-lede">
            A year goes by, and your hair is still the same length. Most women think that's just their genetics and accept it.
          </p>
          <p className="v28-lede">
            But the 250,000+ women in this story didn't. They made a few simple changes, and that's what made the difference. Here are the five things they did differently.
          </p>
          <div className="v28-cta-wrap">
            <CtaButton full>Start growing longer hair →</CtaButton>
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