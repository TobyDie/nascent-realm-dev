import "./listicle-v25.css";
import { AnnouncementBar } from "./sections/AnnouncementBar";
import { Hero } from "./sections/Hero";
import { Reasons } from "./sections/Reasons";
import { Transition } from "./sections/Transition";
import { SocialProofV25 } from "./sections/SocialProofV25";
import { TestimonialsCarousel } from "./sections/TestimonialsCarousel";
import { BottomCta } from "./sections/BottomCta";
import { StickyMobileCta } from "./sections/StickyMobileCta";

export const CTA_URL = "https://join.hairqare.co/the-quiz-haircare";

export function ListiclePageV25() {
  return (
    <div className="hq-sp-v25">
      <AnnouncementBar />
      <Hero />
      <Reasons />
      <Transition />
      <SocialProofV25 />
      <TestimonialsCarousel />
      <BottomCta />
      <StickyMobileCta />
    </div>
  );
}

export default ListiclePageV25;