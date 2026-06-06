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
import { TextInterstitial, ImageInterstitial } from "./sections/Interstitial";

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
      <RecognitionVideo />
      <Science />
      <TextInterstitial index={0} />
      <SocialProof onCta={scrollToStart} />
      <HowItWorks onCta={scrollToStart} />
      <ImageInterstitial index={0} />
      <ResultsIn2Weeks onCta={scrollToStart} />
      <TextInterstitial index={1} />
      <WhatsIncluded onCta={scrollToStart} />
      <ImageInterstitial index={1} />
      <Founder onCta={scrollToStart} />
      <TextInterstitial index={2} />
      <NotAboutHair onCta={scrollToStart} />
      <ImageInterstitial index={2} />
      <SelfQualifier onCta={scrollToStart} />
      <TextInterstitial index={3} />
      <ImageInterstitial index={3} />
      <Faq onCta={scrollToStart} />
      <TextInterstitial index={4} />
      <ImageInterstitial index={4} />
      <TextInterstitial index={5} bg="var(--lavender)" />
      <ImageInterstitial index={5} />
      <FinalCta onCta={scrollToStart} />
      <StickyCta onCta={scrollToStart} />
    </div>
  );
}

export default HaircareChallengePage;