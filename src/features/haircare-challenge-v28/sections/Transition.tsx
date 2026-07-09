import { CtaButton, R2Image } from "../primitives";

export function Transition() {
  return (
    <section className="v28-section v28-transition" id="challenge">
      <div className="v28-container v28-transition__inner">
        <p className="v28-lede">Growing your dream hair is easy, and it only takes 10 minutes a day.</p>
        <h2 className="v28-h2">14-Day Haircare Challenge</h2>
      </div>
      <div className="v28-container v28-transition__imgwrap">
        <R2Image
          url="https://pub.hairqare.co/SP21/Sarah-longest-hair-1.webp"
          w={1080}
          h={1600}
          alt="Sarah with long healthy hair. Grow the longest, healthiest, shiniest hair of your life."
        />
      </div>
      <div className="v28-container v28-transition__inner">
        <p className="v28-lede">Reach waist-length hair with volume at the roots, thickness at the ends, and a healthy shine.</p>
        <p className="v28-lede">Just 10 min/day. Give it 14 days and enjoy beautiful hair for decades to come.</p>
        <div className="v28-cta-wrap">
          <CtaButton full>Join the 14 Day Challenge →</CtaButton>
        </div>
      </div>
    </section>
  );
}
