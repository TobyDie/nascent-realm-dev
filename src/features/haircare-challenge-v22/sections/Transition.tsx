import { CtaButton, Placeholder, Stars } from "../primitives";

export function Transition() {
  return (
    <section className="v22-section v22-transition" id="challenge">
      <div className="v22-container v22-transition__imgwrap">
        <Placeholder
          w={1080}
          h={1080}
          label="Sarah hero · the proof"
          alt="Sarah, founder of the 14-Day Hair Knowledge Challenge"
        />
      </div>
      <div className="v22-container v22-transition__inner">
        <div className="v22-eyebrow v22-eyebrow--center">Healthier Hair or Your Money Back</div>
        <h2 className="v22-h2">The 14-Day Hair Knowledge Challenge</h2>
        <p className="v22-subhead">Stop Shopping For The Answer.<br />Learn It In 14 Days.</p>
        <p className="v22-body">
          A daily, guided challenge that teaches you what your hair actually needs, so you can build a simple routine that works, instead of buying another one that doesn't.<br /><br />
          No products to purchase.<br />
          Just the knowledge the industry hoped you'd never go looking for.
        </p>
        <div className="v22-cta-wrap">
          <CtaButton full>Healthier hair in 14 days →</CtaButton>
        </div>
        <div className="v22-stars-line v22-stars-line--center">
          <Stars /> <span>Rated 4.9 | 250,000+ women joined in 149 countries</span>
        </div>
      </div>
    </section>
  );
}
