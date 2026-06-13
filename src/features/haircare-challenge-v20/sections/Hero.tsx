import { Anno, Reveal, Button, GuaranteeBadge, Icon, Trustpilot, RImg } from "../primitives";
import { useJoiningCount, formatJoiningCount } from "../useJoiningCount";
import { r2img, HERO_WIDTHS, AVATAR_W } from "../img";
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
            <h1 className="h-hero hero-h1" style={{ marginBottom: 12, color: "rgb(233, 123, 0)" }}>
              <span style={{ color: "#090909", fontWeight: 800 }}>Grow the longest, healthiest and shiniest hair of your life </span>
              <span style={{ color: "#e97b00", fontWeight: 800 }}>— without giving up coloring, heat-styling and other "damaging" practices that you love.</span>
            </h1>

            {/* Handwritten tilted pill */}
            <div className="hero-handwritten-pill">
              You still colour, curl, bleach and all.
            </div>

            {/* Short supporting paragraph */}
            <p className="hero-supporting">
              Grow waist-length hair, volume at the roots, thick at the ends and shines healthily. <strong>Invest 14 days and enjoy beautiful hair for decades to come.</strong>
            </p>

            {/* CTA block - must be above fold on mobile */}
            <div id="hero-cta-sentinel" style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start", marginBottom: 24 }}>
              <Button id="cta-hero" onClick={onCta} icon="arrow-right">Join the 14 Day Challenge</Button>
              <span className="small" style={{ fontWeight: 600, color: "var(--orange-700)", marginLeft: 4 }}>
                Grow long hair or get your money back
              </span>
              <GuaranteeBadge size="sm" />
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
                <span>Build a simple $10 per month routine that's easy to stick to.</span>
              </li>
              <li>
                <span className="hero-bullet-emoji">✨</span>
                <span>Heat-style and colour without the damage affecting your length so you enjoy your favourite hair styles without guilt.</span>
              </li>
              <li>
                <span className="hero-bullet-emoji">🛡️</span>
                <span>Ditch the hair extensions and grow hair that makes you feel confident and proud.</span>
              </li>
            </ul>

          </Reveal>

          {/* IMAGE column - Sarah's portrait (image, not video), with a sketchy trust pin */}
          <Reveal delay={120}>
            <div style={{ position: "relative" }}>
              <div className="hero-image-wrap">
                <RImg
                  file="sarah-hero-v2.webp"
                  widths={HERO_WIDTHS}
                  sizes="(max-width: 720px) 100vw, (max-width: 860px) 90vw, 405px"
                  alt="Sarah Tran - founder of HairQare, with long healthy auburn hair, sunlit Mediterranean setting. Inset: before/after of a coached student."
                  className="hero-image"
                  eager
                />
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
                <span className="ct-num">250,000+</span>
                <span className="ct-label">women have taken the challenge</span>
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