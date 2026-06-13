import "./haircare-challenge-v20.css";
import { AgeStripe } from "./sections/AgeStripe";
import { Hero } from "./sections/Hero";
import { Recognition } from "./sections/Recognition";
import { Science } from "./sections/Science";
import { VideoTestimonials } from "./sections/VideoTestimonials";
import { SocialProof } from "./sections/SocialProof";
import { HowItWorks } from "./sections/HowItWorks";
import { ResultsIn2Weeks } from "./sections/ResultsIn2Weeks";
import { WhatsIncluded } from "./sections/WhatsIncluded";
import { Founder } from "./sections/Founder";
import { Fault } from "./sections/Fault";
import { NotAboutHair } from "./sections/NotAboutHair";
import { SelfQualifier } from "./sections/SelfQualifier";
import { Faq } from "./sections/Faq";
import { FinalCta } from "./sections/FinalCta";
import { StickyCta } from "./sections/StickyCta";
import { TestimonialStrip } from "./sections/Interstitial";
import { ReviewedBy } from "./sections/ReviewedBy";
import { RImg } from "./primitives";

const CTA_URL = "https://join.hairqare.co/the-quiz-haircare";
function scrollToStart() {
  window.location.href = CTA_URL;
}

export function HaircareChallengePageV20() {
  return (
    <div className="hq-sp-v20 rooted">
      <AgeStripe />
      <Hero onCta={scrollToStart} />
      <VideoTestimonials />
      <Recognition />
      <section className="bg-cream" style={{ padding: "32px 0 8px" }}>
        <div className="wrap" style={{ maxWidth: 720, textAlign: "center" }}>
          <div
            style={{
              background: "var(--white)",
              borderRadius: 20,
              boxShadow: "var(--shadow-sm)",
              overflow: "hidden",
              textAlign: "left",
            }}
          >
            <RImg
              file="ba-new-5.webp"
              widths={[500, 800, 1200]}
              sizes="(max-width: 760px) 92vw, 720px"
              alt="Sara Gouveia - before and after results from the 14-Day Haircare Challenge."
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <div style={{ padding: "20px 22px 22px" }}>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "var(--ink)" }}>
                "I used to lose so much length to frizz and breakage at the ends — strands would snap before they ever got long. Now my hair finally feels smooth and strong from root to tip, and for the first time it's actually holding its length."
              </p>
              <div style={{ marginTop: 12, fontSize: 14, color: "var(--slate)" }}>
                <strong style={{ color: "var(--ink)" }}>Sara Gouveia</strong> · Frizz &amp; breakage · long-hair journey
              </div>
            </div>
          </div>
        </div>
      </section>
      <Science />
      <Fault />
      <SocialProof onCta={scrollToStart} />
      <TestimonialStrip variant="pull-quote" textIndex={0} imageIndex={0} bg="var(--cream)" />
      <Founder onCta={scrollToStart} />
      <TestimonialStrip variant="polaroid-duo" textIndex={1} imageIndex={1} bg="var(--white)" />
      <HowItWorks onCta={scrollToStart} />
      <ResultsIn2Weeks onCta={scrollToStart} />
      <TestimonialStrip variant="magazine-split" textIndex={2} imageIndex={2} bg="var(--cream)" />
      <WhatsIncluded onCta={scrollToStart} />
      <ReviewedBy />
      <TestimonialStrip variant="sticky-wall" textIndex={3} imageIndex={3} bg="var(--lavender)" />
      <NotAboutHair onCta={scrollToStart} />
      <SelfQualifier onCta={scrollToStart} />
      <TestimonialStrip variant="single-hero" textIndex={4} imageIndex={4} bg="var(--cream)" />
      <Faq onCta={scrollToStart} />
      <TestimonialStrip variant="ribbon" textIndex={5} imageIndex={5} bg="var(--white)" />
      <FinalCta onCta={scrollToStart} />
      <StickyCta onCta={scrollToStart} />
    </div>
  );
}

export default HaircareChallengePageV20;