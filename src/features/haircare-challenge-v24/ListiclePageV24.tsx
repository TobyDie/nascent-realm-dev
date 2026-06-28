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
      <section className="v24-section v24-benefits-img">
        <div className="v24-container">
          <img
            src="https://pub.hairqare.co/cdn-cgi/image/width=800,quality=80,format=auto/SP24/4-Benefits-of-DIY-Shampoo-1080-x-1080-px.webp"
            srcSet="https://pub.hairqare.co/cdn-cgi/image/width=500,quality=80,format=auto/SP24/4-Benefits-of-DIY-Shampoo-1080-x-1080-px.webp 500w, https://pub.hairqare.co/cdn-cgi/image/width=800,quality=80,format=auto/SP24/4-Benefits-of-DIY-Shampoo-1080-x-1080-px.webp 800w, https://pub.hairqare.co/cdn-cgi/image/width=1200,quality=80,format=auto/SP24/4-Benefits-of-DIY-Shampoo-1080-x-1080-px.webp 1200w"
            sizes="(max-width: 1080px) 100vw, 1080px"
            alt="4 Benefits of DIY Shampoo"
            loading="lazy"
            decoding="async"
            style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--radius-img)" }}
          />
        </div>
      </section>
      <StickyMobileCta />
    </div>
  );
}

export default ListiclePageV24;