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
        <h2 className="v24-h2">What If The Shampoo That Finally Fit Was One You Made Yourself?</h2>

        <div className="v24-wayout">
          <p className="v24-wayout__lead">Think about what you've already spent looking for the right one. The expensive bottle. The clean one. The custom one with your name on it. The next thing a video told you to try.</p>
          <p>Hundreds of dollars a year, on bottles that were always made for someone else.</p>
          <p>Now picture the opposite. You understand your own hair for the first time. You make two simple shampoos from a handful of real ingredients, in minutes, in your kitchen. One to reset. One to maintain. A batch lasts ages and costs a few dollars. You make enough for your partner, your kids, the whole house.</p>
          <p>"But I can't make my own shampoo." Yes, you can. It's aloe, green tea, a gentle plant surfactant, and a pH strip. Sarah walks you through every step.</p>
          <p>That's the 14-day challenge. Over 14 days, Sarah teaches you to read your own hair, then make your own two shampoos around it. Not another bottle for the pile.</p>
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
