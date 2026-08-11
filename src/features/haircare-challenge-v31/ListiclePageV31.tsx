import "./listicle-v31.css";
import { AnnouncementBar } from "./sections/AnnouncementBar";
import { Hero } from "./sections/Hero";
import { Reasons } from "./sections/Reasons";
import { Transition } from "./sections/Transition";
import { SocialProofV31 } from "./sections/SocialProofV31";
import { TestimonialsCarousel } from "./sections/TestimonialsCarousel";
import { BottomCta } from "./sections/BottomCta";
import { StickyMobileCta } from "./sections/StickyMobileCta";

export const CTA_URL = "https://join.hairqare.co/the-quiz-haircare";

export function ListiclePageV31() {
  return (
    <div className="hq-sp-v31">
      <AnnouncementBar />
      <Hero />
      <Reasons />
      <Transition />
      <SocialProofV31 />
      <TestimonialsCarousel />
      <BottomCta />
      <StickyMobileCta />
    </div>
  );
}

export default ListiclePageV31;