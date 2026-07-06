import { CtaButton, R2Image, Stars } from "../primitives";
import { ConvictionCard } from "./ConvictionCard";

export function Transition() {
  return (
    <section className="v28-section v28-transition" id="challenge">
      <div className="v28-container v28-transition__imgwrap">
        <R2Image
          url="https://pub.hairqare.co/22-the-haircare/sarah-14-day.webp"
          w={1080}
          h={1080}
          alt="Sarah, founder of the 14-Day Hair Knowledge Challenge"
        />
      </div>
      <div className="v28-container v28-transition__inner">
        <div className="v28-eyebrow v28-eyebrow--center">THE WAY OUT</div>
        <h2 className="v28-h2">Picture Your Hair One Year From Now, With Nothing Left Breaking It.</h2>

        <div className="v28-wayout">
          <p className="v28-wayout__lead">Half an inch a month is 6 inches a year. Your hair is already doing its part.</p>

          <ul className="v28-wayout__pains">
            <li className="v28-wayout__pain">
              <span className="v28-wayout__pain-mark" aria-hidden="true"><span /></span>
              <span>No more trims that quietly erase a year of growth.</span>
            </li>
            <li className="v28-wayout__pain">
              <span className="v28-wayout__pain-mark" aria-hidden="true"><span /></span>
              <span>No more guessing what your hair actually needs and hoping it works.</span>
            </li>
            <li className="v28-wayout__pain">
              <span className="v28-wayout__pain-mark" aria-hidden="true"><span /></span>
              <span>No more losing length to breakage you never even see happening.</span>
            </li>
          </ul>

          <blockquote className="v28-wayout__reveal">
            Here's what nobody told you: your hair was never the problem. It's been breaking off almost exactly as fast as it grew.
          </blockquote>

          <div className="v28-wayout__solution">
            <p>That's the whole challenge. Over 14 days, Sarah walks you through the science of your own hair. You discover your Unique Hair Profile, so you finally know what your hair actually needs instead of guessing. You learn to read any ingredient list with the Product Scanner, so no label can mislead you again.</p>
            <p className="v28-wayout__solution-em">You make your own shampoo for around $10 a month, matched to your hair instead of the average head, and build the daily habits that stop the invisible leak, from how you brush to how you sleep.</p>
          </div>

          <div className="v28-wayout__result">
            <div className="v28-wayout__result-eyebrow">THE RESULT</div>
            <p>
              Within the 14 days, women typically notice their hair feeling <strong>softer, shinier, and snapping less</strong> when they brush. The length is what comes after, and it comes on its own. When nothing breaks, everything you grow stays.
            </p>
          </div>

          <p className="v28-wayout__founder">
            Sarah did it for herself first. Her hair is 120cm long, bleached, maintained on about $10 a month, not because she found a magic product, but because she stopped breaking off everything she grew. She built this challenge so you could do the same. It costs $37, less than one salon trim that sets your length back to where it was last year.
          </p>

          <div className="v28-wayout__reassure-wrap">
            <span className="v28-wayout__reassure">You don't have to commit to anything right now.</span>
          </div>

          <p className="v28-wayout__close">
            Just take the 60-second quiz. A few questions about your hair, and you'll see whether this is actually for you. No pressure. No more guessing. Just the first honest look at your hair you've had in a long time.
          </p>
        </div>
      </div>
      <ConvictionCard
        avatar="hero-avatar-19.webp"
        name="Abigail"
        descriptor="United States · Day 14"
        quote={"I love that we get to make our own products and that we can save money and make more of an impact on our hair."}
        bhcId="bf43cac3-602a-4e4b-b529-d3ddab807e7f"
      />
      <div className="v28-container v28-transition__inner">
        <div className="v28-cta-wrap">
          <CtaButton full>Take the 60-second quiz →</CtaButton>
        </div>
        <div className="v28-stars-line v28-stars-line--center">
          <Stars /> <span>4.8 | 250,000+ women joined in 149 countries</span>
        </div>
      </div>
    </section>
  );
}
