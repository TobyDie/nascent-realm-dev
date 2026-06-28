import "./listicle-v26.css";
import { AnnouncementBar } from "./sections/AnnouncementBar";
import { Hero } from "./sections/Hero";
import { Reasons } from "./sections/Reasons";
import { Transition } from "./sections/Transition";
import { SocialProofV26 } from "./sections/SocialProofV26";
import { TestimonialsCarousel } from "./sections/TestimonialsCarousel";
import { BottomCta } from "./sections/BottomCta";
import { StickyMobileCta } from "./sections/StickyMobileCta";
import { CtaButton, Stars } from "./primitives";
import VideoPlayer from "../../components/VideoPlayer";

export const CTA_URL = "https://join.hairqare.co/the-quiz-haircare";

export function ListiclePageV26() {
  return (
    <div className="hq-sp-v26">
      <AnnouncementBar />
      <Hero />
      <Reasons />
      <Transition />
      <SocialProofV26 />
      <TestimonialsCarousel />
      <BottomCta />
      <section className="v26-section v26-benefits-img">
        <div className="v26-container">
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

      <section className="v26-section v26-video">
        <div className="v26-container v26-video__wrap">
          <VideoPlayer
            src="https://videos.hairqare.co/hairqare-testimonial-2ef02ab0/master.m3u8"
            aspectRatio="2160/3840"
            autoplay
          />
        </div>
      </section>

      <section className="v26-section v26-final-cta">
        <div className="v26-container">
          <div className="v26-cta-wrap">
            <CtaButton full>Healthier Hair in 14 Days</CtaButton>
          </div>
          <div className="v26-stars-line v26-stars-line--center">
            <Stars />
            <span><strong>4.8</strong> Stars · <strong>250,000+</strong> Women · 149 Countries</span>
          </div>
          <div className="v26-trust-row v26-trust-row--center">
            <span className="v26-trust">
              <svg className="v26-trust__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              30-day money-back guarantee
            </span>
            <span className="v26-trust">
              <svg className="v26-trust__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Cancel any time
            </span>
          </div>
        </div>
      </section>

      <StickyMobileCta />
    </div>
  );
}

export default ListiclePageV26;