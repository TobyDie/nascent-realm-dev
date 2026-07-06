import "./listicle-v28.css";
import { AnnouncementBar } from "./sections/AnnouncementBar";
import { Hero } from "./sections/Hero";
import { Reasons } from "./sections/Reasons";
import { Transition } from "./sections/Transition";
import { SocialProofV28 } from "./sections/SocialProofV28";
import { TestimonialsCarousel } from "./sections/TestimonialsCarousel";
import { BottomCta } from "./sections/BottomCta";
import { StickyMobileCta } from "./sections/StickyMobileCta";

export const CTA_URL = "https://join.hairqare.co/41-the-quiz-haircare/";

export function ListiclePageV28() {
  return (
    <div className="hq-sp-v28">
      <AnnouncementBar />
      <Hero />
      <Reasons />
      <Transition />
      <SocialProofV28 />
      <TestimonialsCarousel />
      <BottomCta />
      <StickyMobileCta />
    </div>
  );
}

export default ListiclePageV28;