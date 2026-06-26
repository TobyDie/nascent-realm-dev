import "./listicle-v24.css";
import { AnnouncementBar } from "./sections/AnnouncementBar";
import { Hero } from "./sections/Hero";
import { Reasons } from "./sections/Reasons";
import { Transition } from "./sections/Transition";
import { SocialProofV24 } from "./sections/SocialProofV24";
import { TestimonialsCarousel } from "./sections/TestimonialsCarousel";
import { BottomCta } from "./sections/BottomCta";
import { StickyMobileCta } from "./sections/StickyMobileCta";

export const CTA_URL = "https://join.hairqare.co/the-quiz-haircare";

export function ListiclePageV24() {
  return (
    <div className="hq-sp-v24">
      <AnnouncementBar />
      <Hero />
      <Reasons />
      <Transition />
      <SocialProofV24 />
      <TestimonialsCarousel />
      <BottomCta />
      <StickyMobileCta />
    </div>
  );
}

export default ListiclePageV24;