import "./haircare-challenge-v21.css";
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
import { NotAboutHair } from "./sections/NotAboutHair";
import { SelfQualifier } from "./sections/SelfQualifier";
import { Faq } from "./sections/Faq";
import { FinalCta } from "./sections/FinalCta";
import { StickyCta } from "./sections/StickyCta";
import { TestimonialStrip } from "./sections/Interstitial";
import { ReviewedBy } from "./sections/ReviewedBy";
const CTA_URL = "https://join.hairqare.co/the-quiz-haircare";
function scrollToStart() {
  window.location.href = CTA_URL;
}

export function HaircareChallengePageV21() {
  return (
    <div className="hq-sp-v21 rooted">
      <AgeStripe />
      <Hero onCta={scrollToStart} />
      <VideoTestimonials />
      <Recognition onCta={scrollToStart} />
      <TestimonialStrip variant="single-hero" imageIndex={1} bg="var(--cream)" />
      <TestimonialStrip variant="ribbon" textIndex={5} imageIndex={5} bg="var(--white)" />
      <Science onCta={scrollToStart} />
      <SocialProof onCta={scrollToStart} />
      <TestimonialStrip variant="pull-quote" textIndex={0} imageIndex={0} bg="var(--cream)" />
      <TestimonialStrip variant="polaroid-duo" textIndex={1} bg="var(--white)" />
      <HowItWorks onCta={scrollToStart} />
      <ResultsIn2Weeks onCta={scrollToStart} />
      <TestimonialStrip variant="magazine-split" textIndex={2} imageIndex={2} bg="var(--cream)" />
      <WhatsIncluded onCta={scrollToStart} />
      <Founder onCta={scrollToStart} />
      <ReviewedBy />
      <TestimonialStrip variant="sticky-wall" textIndex={3} imageIndex={3} bg="var(--lavender)" />
      <NotAboutHair onCta={scrollToStart} />
      <SelfQualifier onCta={scrollToStart} />
      <TestimonialStrip variant="single-hero" textIndex={4} imageIndex={4} bg="var(--cream)" />
      <Faq onCta={scrollToStart} />
      <FinalCta onCta={scrollToStart} />
      <StickyCta onCta={scrollToStart} />
    </div>
  );
}

export default HaircareChallengePageV21;