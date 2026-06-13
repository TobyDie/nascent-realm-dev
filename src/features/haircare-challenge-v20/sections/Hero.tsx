import { Anno, Reveal, Button, GuaranteeBadge, Icon, Trustpilot } from "../primitives";
import { useJoiningCount, formatJoiningCount } from "../useJoiningCount";
import { r2img, AVATAR_W } from "../img";
import { useStartDate, fmtShort } from "../useStartDate";

const HERO_AVATARS: string[] = [
  "hero-avatar-11.webp", "hero-avatar-13.webp", "hero-avatar-14.webp", "hero-avatar-15.webp", "hero-avatar-16.webp",
  "hero-avatar-17.webp", "hero-avatar-18.webp", "hero-avatar-19.webp", "hero-avatar-20.webp", "profile-4.webp",
];

export function Hero({ onCta }: { onCta?: () => void }) {
  const joining = useJoiningCount();
  const startDate = useStartDate();
  return (
    <section className="bg-cream hero-section" style={{ paddingTop: 48, paddingBottom: 0 }}>
      <Anno>Section 1 - Hero / recognition</Anno>
      <div className="wrap-wide">

        {/* removed urgency pill from top - moved to cohort line under CTA */}

        <div style={{ display: "grid", gridTemplateColumns: "1.02fr 0.98fr", gap: 52, alignItems: "center" }} className="hero-grid">

          {/* TEXT column */}
          <Reveal>
            {/* H1 - the single emotional hook, short enough for mobile */}
            <h1 className="h-hero hero-h1 hero-h1-stack" style={{ marginBottom: 12 }}>
              <span className="hh-intro">{"\n"}</span>
              <span className="hh-key">{"\n"}</span>
              <span className="hh-key">{"\n"}</span>
              <span className="hh-key">{"\n"}</span>
              <span className="hh-script">
                <span className="hh-script-text"></span>
                <svg className="hh-script-underline" viewBox="0 0 300 18" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 7 Q 75 1, 150 6 T 298 5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M4 14 Q 80 9, 155 13 T 296 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <svg className="hh-script-spark" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2 L12 9 M4 12 L10 12 M19 6 L15 10 M19 18 L15 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <span className="hh-sub">{"\n"}</span>
            </h1>

            {/* Handwritten tilted pill removed as requested */}

            {/* Short supporting paragraph */}
            <p className="hero-supporting">
              Get shiny waist-length hair, volume at the roots, thick at the ends and shines healthily.<br />
              Just 10 min/day. In 14 days you'll have the routine that grows beautiful hair for decades to come.
            </p>

            {/* CTA block - must be above fold on mobile */}
            <div id="hero-cta-sentinel" style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start", marginBottom: 24 }}>
              <Button id="cta-hero" onClick={onCta} icon="arrow-right">Join the 14 Day Challenge</Button>
              <span className="small" style={{ fontWeight: 600, color: "var(--orange-700)", marginLeft: 4 }}>
                {"\n"}
              </span>
              <GuaranteeBadge size="sm" className="guarantee-not-cta" />
              {/* cohort line - under CTA, not above headline */}
              <span className="hero-cohort">
                <Icon name="calendar-heart" size={13} color="var(--orange-600)" />
                Next cohort: <strong className="start-date">{startDate ? fmtShort(startDate) : "Fri, June 6th"}</strong> · {formatJoiningCount(joining)} women joining this week
              </span>
            </div>

            {/* Bullets - proof layer, below the CTA */}
            <ul className="hero-bullets">
              <li>
                <span className="hero-bullet-emoji">🌱</span>
                <span>Build a simple $10-a-month routine that's easy to stick to.</span>
              </li>
              <li>
                <span className="hero-bullet-emoji">✨</span>
                <span>Heat-style and color without the damage holding your length back&nbsp;so you keep the hairstyles you love without any guilt.</span>
              </li>
              <li>
                <span className="hero-bullet-emoji">🛡️</span>
                <span>Ditch the hair extensions for good and grow hair that makes you feel confident and proud.</span>
              </li>
            </ul>

          </Reveal>

          {/* IMAGE column - Sarah's portrait (image, not video), with a sketchy trust pin */}
          <Reveal delay={120}>
            <div style={{ position: "relative" }}>
              <div className="hero-image-wrap">
                {/* Handwritten trust pill overlaying top-left of hero image */}
                <div className="hero-trust-note" aria-label="4.8 rating from 12,000+ reviews">
                  <span className="hero-trust-star">★</span>
                  <span className="hero-trust-text">4.8 · 12K reviews</span>
                </div>
                <picture>
                  <source
                    media="(max-width: 720px)"
                    srcSet="https://pub.hairqare.co/cdn-cgi/image/width=500,quality=85,format=auto/SP21/Sarah-longest-hair-1.webp 500w, https://pub.hairqare.co/cdn-cgi/image/width=800,quality=85,format=auto/SP21/Sarah-longest-hair-1.webp 800w, https://pub.hairqare.co/cdn-cgi/image/width=1200,quality=85,format=auto/SP21/Sarah-longest-hair-1.webp 1200w"
                    sizes="100vw"
                  />
                  <img
                    src="https://pub.hairqare.co/cdn-cgi/image/width=800,quality=80,format=auto/SP21/Sarah-Long-hairs.webp"
                    srcSet="https://pub.hairqare.co/cdn-cgi/image/width=500,quality=80,format=auto/SP21/Sarah-Long-hairs.webp 500w, https://pub.hairqare.co/cdn-cgi/image/width=800,quality=80,format=auto/SP21/Sarah-Long-hairs.webp 800w, https://pub.hairqare.co/cdn-cgi/image/width=1200,quality=80,format=auto/SP21/Sarah-Long-hairs.webp 1200w, https://pub.hairqare.co/cdn-cgi/image/width=1600,quality=80,format=auto/SP21/Sarah-Long-hairs.webp 1600w"
                    sizes="(max-width: 720px) 100vw, (max-width: 860px) 90vw, 405px"
                    alt="Sarah Tran - founder of HairQare, with long healthy hair."
                    loading="eager"
                    fetchPriority="high"
                    className="hero-image"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </picture>
              </div>
            </div>
          </Reveal>

        </div>
      </div>

      {/* trust bar */}
      <div style={{ marginTop: 48, background: "rgba(255,255,255,0.55)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap-wide community-trust">
          {/* Row 1 - community proof with overlapping avatars */}
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
                <span className="ct-num">250,000+ Women</span>
                <span className="ct-label">have taken the challenge</span>
              </div>
            </div>
          </div>

          {/* Row 2 - two side-by-side stats */}
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

          {/* Row 3 - Trustpilot */}
          <div className="ct-row ct-trustpilot">
            <Trustpilot rating="4.8" reviews="12,400 reviews" />
          </div>
        </div>
      </div>
    </section>
  );
}