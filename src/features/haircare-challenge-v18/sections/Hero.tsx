import { Anno, Reveal, Pin, Trustpilot } from "../primitives";
import { r2img, AVATAR_W } from "../img";

const HERO_AVATARS: string[] = [
  "hero-avatar-11.webp", "hero-avatar-13.webp", "hero-avatar-14.webp", "hero-avatar-15.webp", "hero-avatar-16.webp",
  "hero-avatar-17.webp", "hero-avatar-18.webp", "hero-avatar-19.webp", "hero-avatar-20.webp", "profile-4.webp",
];

export function Hero({ onCta }: { onCta?: () => void }) {
  return (
    <section className="bg-cream hero-section" style={{ paddingTop: 48, paddingBottom: 0 }}>
      <Anno>Section 1, Hero / recognition</Anno>
      <div className="wrap-wide">

        {/* removed urgency pill from top, moved to cohort line under CTA */}

        <div style={{ display: "grid", gridTemplateColumns: "1.02fr 0.98fr", gap: 52, alignItems: "center" }} className="hero-grid">

          {/* TEXT column */}
          <Reveal>
            <div
              className="hero-handwritten-eyebrow"
              style={{
                fontFamily: '"Caveat", cursive',
                fontWeight: 700,
                color: "var(--orange-700)",
                fontSize: 26,
                lineHeight: 1.1,
                transform: "rotate(-2deg)",
                transformOrigin: "left center",
                marginBottom: 10,
                display: "inline-block",
              }}
            >
              Become the most beautiful version of yourself
            </div>

            {/* Validation paragraph (H1/CTA/urgency/refund/cohort moved into HeroCarousel above) */}
            <p className="hero-validation" style={{ marginTop: 6, marginBottom: 20, fontSize: 14.5, lineHeight: 1.55, color: "var(--slate-soft)" }}>
              The hair you had in your 20s isn't gone forever. Your body has changed but your habits haven't. Learn how to build a hair care routine for your 30's and enjoy good hair days for decades to come.
            </p>

            {/* Bullets, proof layer, below the CTA */}
            <ul className="hero-bullets">
              <li>
                <span className="hero-bullet-emoji">🌱</span>
                <span>Grow longer, denser and healthier hair than you had in your 20s.</span>
              </li>
              <li>
                <span className="hero-bullet-emoji">💸</span>
                <span>No fancy salon treatments or expensive products needed.</span>
              </li>
              <li>
                <span className="hero-bullet-emoji">⏱️</span>
                <span>10 minutes a day. While the coffee brews. That's all it takes.</span>
              </li>
            </ul>
          </Reveal>

          {/* IMAGE column, Sarah's portrait (image, not video), with a sketchy trust pin */}
          <Reveal delay={120}>
            <div style={{ position: "relative" }}>
              <div className="hero-image-wrap">
                <img
                  src="https://pub.hairqare.co/cdn-cgi/image/width=800,quality=80,format=auto/Sarah%20ATF%205%20(1).webp"
                  srcSet="https://pub.hairqare.co/cdn-cgi/image/width=500,quality=80,format=auto/Sarah%20ATF%205%20(1).webp 500w, https://pub.hairqare.co/cdn-cgi/image/width=800,quality=80,format=auto/Sarah%20ATF%205%20(1).webp 800w"
                  sizes="(max-width: 720px) 100vw, (max-width: 860px) 90vw, 405px"
                  alt="Sarah Tran, founder of HairQare, with long healthy auburn hair, sunlit Mediterranean setting."
                  className="hero-image"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="hero-image-overlay-text" aria-hidden="true">
                  Become the most beautiful version of yourself
                </div>
              </div>
              <div style={{ position: "absolute", top: -14, left: -8, zIndex: 4 }}>
                <Pin rotate={7}>★ 4.8 · 12K reviews</Pin>
              </div>
            </div>
          </Reveal>

        </div>
      </div>

      {/* trust bar */}
      <div style={{ marginTop: 48, background: "rgba(255,255,255,0.55)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap-wide community-trust">
          {/* Row 1, community proof with overlapping avatars */}
          <div className="ct-row ct-community">
            <div className="ct-avatars" aria-hidden="true">
              {HERO_AVATARS.map((file, i) => (
                <span key={i} className="ct-avatar ct-avatar-img">
                  <img src={r2img(file, AVATAR_W)} alt="" loading="lazy" decoding="async" />
                </span>
              ))}
              <span className="ct-avatar ct-avatar-more">+</span>
            </div>
            <div className="ct-community-text">
              <div className="ct-community-inline">
                <span className="ct-num">250,000+</span>
                <span className="ct-label">women have taken the challenge</span>
              </div>
            </div>
          </div>

          {/* Row 2, two side-by-side stats */}
          <div className="ct-row ct-stats">
            <div className="ct-stat">
              <div className="ct-num ct-num-sm">92%</div>
              <div className="ct-label">saw results within 14 days</div>
            </div>
            <div className="ct-vrule" />
            <div className="ct-stat">
              <div className="ct-num ct-num-sm">86%</div>
              <div className="ct-label">called it life-changing</div>
            </div>
          </div>

          {/* Row 3, Trustpilot */}
          <div className="ct-row ct-trustpilot">
            <Trustpilot rating="4.8" reviews="12,400 reviews" />
          </div>
        </div>
      </div>
    </section>
  );
}