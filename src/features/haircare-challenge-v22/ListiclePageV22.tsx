import "./listicle-v22.css";
import { AnnouncementBar } from "./sections/AnnouncementBar";
import { Nav } from "./sections/Nav";
import { FloatingChip } from "./sections/FloatingChip";
import { Hero } from "./sections/Hero";
import { Reasons } from "./sections/Reasons";
import { Transition } from "./sections/Transition";
import { Stats } from "./sections/Stats";
import { ResultCards } from "./sections/ResultCards";
import { BottomCta } from "./sections/BottomCta";
import { Footer } from "./sections/Footer";
import { StickyMobileCta } from "./sections/StickyMobileCta";

export const CTA_URL = "https://join.hairqare.co/the-quiz-haircare";

export function ListiclePageV22() {
  return (
    <div className="hq-sp-v22">
      <AnnouncementBar />
      <Nav />
      <FloatingChip />
      <Hero />
      <Reasons />
      <Transition />
      <Stats />
      <ResultCards />
      <BottomCta />
      <Footer />
      <StickyMobileCta />
    </div>
  );
}

export default ListiclePageV22;