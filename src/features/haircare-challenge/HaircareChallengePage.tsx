import "./haircare-challenge.css";
import { AgeStripe } from "./sections/AgeStripe";
import { Hero } from "./sections/Hero";
import { Recognition } from "./sections/Recognition";
import { RecognitionVideo } from "./sections/RecognitionVideo";
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

function scrollToStart() {
  const el = document.getElementById("start");
  if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
}

export function HaircareChallengePage() {
  return (
    <div className="hq-sp rooted">
      <AgeStripe />
      <Hero onCta={scrollToStart} />
      <VideoTestimonials />
      <Recognition />
      <ReviewedBy />
      <RecognitionVideo />
      <Science />
      <SocialProof onCta={scrollToStart} />
      <TestimonialStrip variant="pull-quote" textIndex={0} imageIndex={0} bg="var(--cream)" />
      <Founder onCta={scrollToStart} />
      <TestimonialStrip variant="polaroid-duo" textIndex={1} imageIndex={1} bg="var(--white)" />
      <HowItWorks onCta={scrollToStart} />
      <ResultsIn2Weeks onCta={scrollToStart} />
      <TestimonialStrip variant="magazine-split" textIndex={2} imageIndex={2} bg="var(--cream)" />
      <WhatsIncluded onCta={scrollToStart} />
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

export default HaircareChallengePage;