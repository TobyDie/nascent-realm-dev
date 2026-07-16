import "./listicle-v30.css";
import { AnnouncementBar } from "./sections/AnnouncementBar";
import { Hero } from "./sections/Hero";
import { Reasons } from "./sections/Reasons";
import { Transition } from "./sections/Transition";
import { SocialProofV30 } from "./sections/SocialProofV30";
import { TestimonialsCarousel } from "./sections/TestimonialsCarousel";
import { BottomCta } from "./sections/BottomCta";
import { StickyMobileCta } from "./sections/StickyMobileCta";

export const CTA_URL = "https://join.hairqare.co/41-the-quiz-haircare/";

export function ListiclePageV30() {
  return (
    <div className="hq-sp-v30">
      <AnnouncementBar />
      <Hero />
      <Reasons />
      <Transition />
      <SocialProofV30 />
      <TestimonialsCarousel />
      <BottomCta />
      <StickyMobileCta />
    </div>
  );
}

export default ListiclePageV30;