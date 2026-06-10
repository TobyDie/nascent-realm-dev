import "./haircare-challenge-v17.css";
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
import { RImg } from "./primitives";

const CTA_URL = "https://join.hairqare.co/the-quiz-haircare";
function scrollToStart() {
  window.location.href = CTA_URL;
}

/* V17 thumb-stop wrapper: gives any interstitial a distinct scroll-interrupt
   band (orange top/bottom rule + REAL STORY eyebrow + alternating tone).
   Tone alternates per usage so adjacent thumb-stops never share a color. */
function ThumbStop({ tone = "cream", children }: { tone?: "cream" | "lavender"; children: React.ReactNode }) {
  return (
    <div className={`ti-interrupt ti-interrupt--${tone}`}>
      <div className="ti-interrupt-eyebrow"><span>REAL STORY · 14 DAYS</span></div>
      {children}
    </div>
  );
}

export function HaircareChallengePageV17() {
  return (
    <div className="hq-sp-v17 rooted">
      <AgeStripe />
      <Hero onCta={scrollToStart} />
      <VideoTestimonials />
      <Recognition />
      <ThumbStop tone="lavender">
        <section style={{ background: "transparent", padding: "8px 0 28px" }}>
          <div className="wrap" style={{ maxWidth: 720, textAlign: "center" }}>
            <RImg
              file="brooke-glad-i-found-this.webp"
              widths={[500, 800, 1200]}
              sizes="(max-width: 760px) 92vw, 720px"
              alt="Brooke testimonial: Glad I found this. Before and after of hair loss results from the 14-Day Haircare Challenge."
              style={{ width: "100%", height: "auto", borderRadius: 16, boxShadow: "var(--shadow-md)" }}
            />
          </div>
        </section>
      </ThumbStop>
      <Science />
      <SocialProof onCta={scrollToStart} />
      <Founder onCta={scrollToStart} />
      <ThumbStop tone="lavender"><TestimonialStrip variant="polaroid-duo" textIndex={1} imageIndex={1} bg="transparent" /></ThumbStop>
      <HowItWorks onCta={scrollToStart} />
      <ResultsIn2Weeks onCta={scrollToStart} />
      <ThumbStop tone="cream"><TestimonialStrip variant="magazine-split" textIndex={2} imageIndex={2} bg="transparent" /></ThumbStop>
      <WhatsIncluded onCta={scrollToStart} />
      <ReviewedBy />
      <ThumbStop tone="lavender"><TestimonialStrip variant="sticky-wall" textIndex={3} imageIndex={3} bg="transparent" /></ThumbStop>
      <NotAboutHair onCta={scrollToStart} />
      <SelfQualifier onCta={scrollToStart} />
      <ThumbStop tone="cream"><TestimonialStrip variant="single-hero" textIndex={4} imageIndex={4} bg="transparent" /></ThumbStop>
      <Faq onCta={scrollToStart} />
      <ThumbStop tone="lavender"><TestimonialStrip variant="ribbon" textIndex={5} imageIndex={5} bg="transparent" /></ThumbStop>
      <FinalCta onCta={scrollToStart} />
      <StickyCta onCta={scrollToStart} />
    </div>
  );
}

export default HaircareChallengePageV17;