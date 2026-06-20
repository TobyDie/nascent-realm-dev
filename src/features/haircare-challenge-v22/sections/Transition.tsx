import { CtaButton, R2Image, Stars } from "../primitives";

export function Transition() {
  return (
    <section className="v22-section v22-transition" id="challenge">
      <div className="v22-container v22-transition__imgwrap">
        <R2Image
          url="https://pub.hairqare.co/22-the-haircare/sarah-14-day.webp"
          w={1080}
          h={1080}
          alt="Sarah, founder of the 14-Day Hair Knowledge Challenge"
        />
      </div>
      <div className="v22-container v22-transition__inner">
        <div className="v22-eyebrow v22-eyebrow--center">THE WAY OUT</div>
        <h2 className="v22-h2">What If You Never Had To Buy Another "Miracle" Again?</h2>
        <p className="v22-body">Picture your bathroom shelf with nothing on it you regret.</p>
        <p className="v22-body">No more standing in the aisle, hoping this one's finally different. No more watching money leave your account for a result that never shows up. No more treating your own hair like a problem you can't solve.</p>
        <p className="v22-body">Here's the part the industry buried: your hair was never the problem. You were just never taught how it actually works.</p>
        <p className="v22-body">That's the whole challenge. Over 14 days, Sarah shows you what your hair truly needs, from the inside out. Not another product to add to the pile. The understanding that finally lets you stop guessing.</p>
        <p className="v22-body">The women who've done this don't talk about a product afterwards. They talk about relief. The quiet confidence of finally knowing. Looking in the mirror and recognising their hair again. Spending less, and somehow seeing more.</p>
        <p className="v22-body">Sarah did it for herself first. She walked away from an industry that paid her to sell you the problem. Today she keeps the healthiest hair of her life on two simple things and about $10 a month. She built this so you could do the same.</p>
        <p className="v22-body">You don't have to commit to anything right now.</p>
        <p className="v22-body">Just take the 60-second quiz. A few questions about your hair, and you'll see whether this is actually for you. No pressure. No shelf full of regret. Just the first honest look at your hair you've had in a long time.</p>
        <div className="v22-cta-wrap">
          <CtaButton full>Take the 60-second quiz →</CtaButton>
        </div>
        <div className="v22-stars-line v22-stars-line--center">
          <Stars /> <span>4.8 | 250,000+ women joined in 149 countries</span>
        </div>
      </div>
    </section>
  );
}
