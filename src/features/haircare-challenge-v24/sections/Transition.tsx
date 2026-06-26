import { CtaButton, R2Image, Stars } from "../primitives";
import { ConvictionCard } from "./ConvictionCard";

export function Transition() {
  return (
    <section className="v24-section v24-transition" id="challenge">
      <div className="v24-container v24-transition__imgwrap">
        <R2Image
          url="https://pub.hairqare.co/22-the-haircare/sarah-14-day.webp"
          w={1080}
          h={1080}
          alt="Sarah, founder of the 14-Day Hair Knowledge Challenge"
        />
      </div>
      <div className="v24-container v24-transition__inner">
        <div className="v24-eyebrow v24-eyebrow--center">THE WAY OUT</div>
        <h2 className="v24-h2">What If You Never Had To Buy Another "Miracle" Again?</h2>

        <div className="v24-wayout">
          <p className="v24-wayout__lead">Picture your bathroom shelf with nothing on it you regret.</p>

          <ul className="v24-wayout__pains">
            <li className="v24-wayout__pain">
              <span className="v24-wayout__pain-mark" aria-hidden="true"><span /></span>
              <span>No more standing in the aisle, hoping this one's finally different.</span>
            </li>
            <li className="v24-wayout__pain">
              <span className="v24-wayout__pain-mark" aria-hidden="true"><span /></span>
              <span>No more watching money leave your account for a result that never shows up.</span>
            </li>
            <li className="v24-wayout__pain">
              <span className="v24-wayout__pain-mark" aria-hidden="true"><span /></span>
              <span>No more treating your own hair like a problem you can't solve.</span>
            </li>
          </ul>

          <blockquote className="v24-wayout__reveal">
            Here's the part the industry buried: your hair was never the problem. You were just never taught how it actually works.
          </blockquote>

          <div className="v24-wayout__solution">
            <p>That's the whole challenge. Over 14 days, Sarah shows you what your hair truly needs, from the inside out.</p>
            <p className="v24-wayout__solution-em">Not another product to add to the pile. The understanding that finally lets you stop guessing.</p>
          </div>

          <div className="v24-wayout__result">
            <div className="v24-wayout__result-eyebrow">THE RESULT</div>
            <p>
              The women who've done this don't talk about a product afterwards. They talk about <strong>relief</strong>. The quiet confidence of finally knowing. Looking in the mirror and recognising their hair again. Spending less, and somehow seeing more.
            </p>
          </div>

          <p className="v24-wayout__founder">
            Sarah did it for herself first. She walked away from an industry that paid her to sell you the problem. Today she keeps the healthiest hair of her life on two simple things and about $10 a month. She built this so you could do the same.
          </p>

          <div className="v24-wayout__reassure-wrap">
            <span className="v24-wayout__reassure">You don't have to commit to anything right now.</span>
          </div>

          <p className="v24-wayout__close">
            Just take the 60-second quiz. A few questions about your hair, and you'll see whether this is actually for you. No pressure. No shelf full of regret. Just the first honest look at your hair you've had in a long time.
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
      <div className="v24-container v24-transition__inner">
        <div className="v24-cta-wrap">
          <CtaButton full>Take the 60-second quiz →</CtaButton>
        </div>
        <div className="v24-stars-line v24-stars-line--center">
          <Stars /> <span>4.8 | 250,000+ women joined in 149 countries</span>
        </div>
      </div>
    </section>
  );
}
