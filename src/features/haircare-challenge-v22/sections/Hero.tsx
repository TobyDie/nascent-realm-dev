import { CtaButton, R2Image, Stars } from "../primitives";

export function Hero() {
  return (
    <section className="v22-hero" id="hero">
      <div className="v22-container v22-hero__stack">
        <div className="v22-hero__media">
          <R2Image
            url="https://pub.hairqare.co/22-the-haircare/ATF.webp"
            w={1080}
            h={1080}
            alt="Sarah, solution state, healthy hair, warm editorial tone"
            eager
          />
        </div>
        <div className="v22-hero__copy">
          <span className="v22-pill-inline">Healthier Hair or Your Money Back</span>
          <h1 className="v22-h1 v22-h1--dual">
            <span className="v22-accent">5 Reasons</span> Women Are{" "}
            <span className="v22-accent">Finally Quitting</span> Expensive Hair Products
          </h1>
          <p className="v22-lede">
            If you still want healthy, beautiful hair… but you're tired of buying bottle after bottle that promised everything and changed nothing, here's why 250,000+ women stopped shopping for the answer and started learning it.
          </p>
          <div className="v22-cta-wrap">
            <CtaButton full>Healthier hair in 14 days →</CtaButton>
          </div>
          <div className="v22-stars-line v22-stars-line--center">
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