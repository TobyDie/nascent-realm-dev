import "./listicle-v27.css";
import { AnnouncementBar } from "./sections/AnnouncementBar";
import { Hero } from "./sections/Hero";
import { Reasons } from "./sections/Reasons";
import { Transition } from "./sections/Transition";
import { SocialProofV27 } from "./sections/SocialProofV27";
import { TestimonialsCarousel } from "./sections/TestimonialsCarousel";
import { BottomCta } from "./sections/BottomCta";
import { StickyMobileCta } from "./sections/StickyMobileCta";

export const CTA_URL = "https://join.hairqare.co/40-the-quiz-haircare/";

export function ListiclePageV27() {
  return (
    <div className="hq-sp-v27">
      <AnnouncementBar />
      <Hero />
      <Reasons />
      <Transition />
      <SocialProofV27 />
      <TestimonialsCarousel />
      <BottomCta />
      <StickyMobileCta />
    </div>
  );
}

export default ListiclePageV27;