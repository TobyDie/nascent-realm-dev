import "./listicle-v22.css";
import { AnnouncementBar } from "./sections/AnnouncementBar";
import { Hero } from "./sections/Hero";
import { Reasons } from "./sections/Reasons";
import { Transition } from "./sections/Transition";
import { SocialProofV22 } from "./sections/SocialProofV22";
import { TestimonialsCarousel } from "./sections/TestimonialsCarousel";
import { BottomCta } from "./sections/BottomCta";
import { StickyMobileCta } from "./sections/StickyMobileCta";

export const CTA_URL = "https://join.hairqare.co/the-quiz-haircare";

export function ListiclePageV22() {
  return (
    <div className="hq-sp-v22">
      <AnnouncementBar />
      <Hero />
      <Reasons />
      <Transition />
      <SocialProofV22 />
      <TestimonialsCarousel />
      <BottomCta />
      <StickyMobileCta />
    </div>
  );
}

export default ListiclePageV22;