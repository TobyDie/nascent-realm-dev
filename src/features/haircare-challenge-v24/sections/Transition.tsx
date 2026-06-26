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
        <h2 className="v24-h2">What If You Never Had To Buy Shampoo Again?</h2>

        <div className="v24-wayout">
          <p className="v24-wayout__lead">Think about what you've already spent. The bottles that promised everything. The "clean" ones. The conditioner to fix the shampoo. The next thing a video told you to try. Hundreds of dollars a year, for hair that never settled. Multiply that across a lifetime.</p>
          <p>Now picture the opposite. You finally understand your own hair. You make two simple shampoos from a handful of real ingredients, in minutes, in your own kitchen. A batch lasts ages and costs a few dollars. You make enough for your partner, your kids, your whole house. You stop reading labels. You stop buying conditioner you never needed. You stop guessing.</p>
          <p>"But I can't make my own shampoo." Yes, you can. It's not a chemistry set. It's aloe, green tea, a gentle plant surfactant, and a pH strip, and Sarah walks you through every step.</p>
          <p>That's exactly what the 14-day hair care challenge is. Over 14 days, Sarah teaches you to read your own hair, then make your own shampoo and conditioner around it. Not another product to add to the pile. The skill that ends the shopping for good.</p>
          <p className="v24-wayout__close">Sarah used to be a paid hair influencer. She sold those bottles. Then she walked away, learned what her hair actually needed, and never bought shampoo off a shelf again. More than 250,000 women have done the same.</p>
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
          <CtaButton full>Healthier Hair in 14 Days</CtaButton>
        </div>
        <div className="v24-stars-line v24-stars-line--center">
          <Stars /> <span>4.8 | 250,000+ women joined in 149 countries</span>
        </div>
      </div>
    </section>
  );
}
