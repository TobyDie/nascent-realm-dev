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
        <h2 className="v24-h2">What If You Never Had To Stand In The Shampoo Aisle Again?</h2>

        <div className="v24-wayout">
          <p className="v24-wayout__lead">Picture this. You wash with two simple shampoos you actually understand. Your roots stay clean for days. Your ends stay soft. You stop reading labels. You stop spending. You stop guessing.</p>
          <p>That's what happens when you stop looking for the perfect shampoo and start understanding your own hair.</p>
          <p>Sarah used to be a paid hair influencer. She sold you those bottles. Then she walked away, figured out what her hair actually needed, and now keeps the healthiest hair of her life on two shampoos she makes herself. More than 250,000 women have learned to do the same.</p>
          <p className="v24-wayout__close">You don't have to commit to anything right now. Just take the 60-second quiz. A few questions about your hair, and you'll see exactly which two shampoos your hair needs, and how often to use each. The end of the search. Finally.</p>
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
          <CtaButton full>Find out which two shampoos your hair needs</CtaButton>
        </div>
        <div className="v24-stars-line v24-stars-line--center">
          <Stars /> <span>4.8 | 250,000+ women joined in 149 countries</span>
        </div>
      </div>
    </section>
  );
}
