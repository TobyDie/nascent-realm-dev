import "./listicle-v29.css";
import { AnnouncementBar } from "./sections/AnnouncementBar";
import { Hero } from "./sections/Hero";
import { Reasons } from "./sections/Reasons";
import { Transition } from "./sections/Transition";
import { SocialProofV29 } from "./sections/SocialProofV29";
import { TestimonialsCarousel } from "./sections/TestimonialsCarousel";
import { BottomCta } from "./sections/BottomCta";
import { StickyMobileCta } from "./sections/StickyMobileCta";

export const CTA_URL = "https://join.hairqare.co/40-the-quiz-haircare/";

export function ListiclePageV29() {
  return (
    <div className="hq-sp-v29">
      <AnnouncementBar />
      <Hero />
      <Reasons />
      <Transition />
      <SocialProofV29 />
      <TestimonialsCarousel />
      <BottomCta />
      <StickyMobileCta />
    </div>
  );
}

export default ListiclePageV29;