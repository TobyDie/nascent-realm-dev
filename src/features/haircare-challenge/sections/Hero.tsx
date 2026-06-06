import { Anno, Reveal, Button, Icon, Pin, Hand, Trustpilot } from "../primitives";
import a11 from "@/assets/hero-avatar-11.webp.asset.json";
import a13 from "@/assets/hero-avatar-13.webp.asset.json";
import a14 from "@/assets/hero-avatar-14.webp.asset.json";
import a15 from "@/assets/hero-avatar-15.webp.asset.json";
import a16 from "@/assets/hero-avatar-16.webp.asset.json";
import a17 from "@/assets/hero-avatar-17.webp.asset.json";
import a18 from "@/assets/hero-avatar-18.webp.asset.json";
import a19 from "@/assets/hero-avatar-19.webp.asset.json";
import a20 from "@/assets/hero-avatar-20.webp.asset.json";
import a4 from "@/assets/profile-4.webp.asset.json";

const HERO_AVATARS: string[] = [
  a11.url, a13.url, a14.url, a15.url, a16.url,
  a17.url, a18.url, a19.url, a20.url, a4.url,
];

export function Hero({ onCta }: { onCta?: () => void }) {
  return (
    <section className="bg-cream hero-section" style={{ paddingTop: 48, paddingBottom: 0 }}>
      <Anno>Section 1 — Hero / recognition</Anno>
      <div className="wrap-wide">

        {/* removed urgency pill from top — moved to cohort line under CTA */}

        <div style={{ display: "grid", gridTemplateColumns: "1.02fr 0.98fr", gap: 52, alignItems: "center" }} className="hero-grid">

          {/* TEXT column */}
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 14 }}>BECOME THE MOST BEAUTIFUL VERSION OF YOURSELF</div>

            {/* H1 — the single emotional hook, short enough for mobile */}
            <h1 className="h-hero hero-h1" style={{ marginBottom: 12, color: "rgb(233, 123, 0)" }}>
              <span style={{ color: "#090909" }}>Achieve the best hair of your life in your </span>
              <span style={{ color: "#e97b00" }}>30s and beyond.</span>
            </h1>

            {/* Sub-headline — specificity + proof */}
            {/* Validation — one line */}
            <p className="hero-validation">
              The hair you had in your 20s isn't gone forever. Your body has changed but your habits haven't. Learn how to build a hair care routine for your 30s and enjoy good hair days for decades to come.
            </p>

            {/* CTA block — must be above fold on mobile */}
            <div id="hero-cta-sentinel" style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start", marginBottom: 24 }}>
              <Button onClick={onCta} icon="arrow-right">Join the challenge</Button>
              <span className="small" style={{ fontWeight: 600, color: "var(--orange-700)", marginLeft: 4 }}>
                <span style={{ textDecoration: "line-through", color: "var(--slate-soft)", marginRight: 6 }}>$247</span>
                85% off · 30-day guarantee
              </span>
              {/* cohort line — under CTA, not above headline */}
              <span className="hero-cohort">
                <Icon name="calendar-heart" size={13} color="var(--orange-600)" />
                Next cohort: <strong>Fri, June 6th</strong> · 2,400 women joining
              </span>
            </div>

            {/* Bullets — proof layer, below the CTA */}
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
                <span>See results in 14 days or get your money back.</span>
              </li>
            </ul>
          </Reveal>

          {/* IMAGE column — Sarah's portrait (image, not video), with a sketchy trust pin */}
          <Reveal delay={120}>
            <div style={{ position: "relative" }}>
              <div className="hero-image-wrap">
                <img
                  src="https://pub.hairqare.co/cdn-cgi/image/width=800,quality=80,format=auto/sarah-hero.webp"
                  srcSet="https://pub.hairqare.co/cdn-cgi/image/width=500,quality=80,format=auto/sarah-hero.webp 500w, https://pub.hairqare.co/cdn-cgi/image/width=800,quality=80,format=auto/sarah-hero.webp 800w, https://pub.hairqare.co/cdn-cgi/image/width=1200,quality=80,format=auto/sarah-hero.webp 1200w"
                  sizes="(max-width: 720px) 100vw, (max-width: 860px) 90vw, 405px"
                  alt="Sarah Tran — founder of HairQare, with long healthy auburn hair, sunlit Mediterranean setting. Inset: before/after of a coached student."
                  className="hero-image"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="hero-image-caption">
                  <div style={{ color: "#fff", fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 20, lineHeight: 1.1 }}>Sarah Tran</div>
                  <div style={{ color: "rgba(255,255,255,.88)", fontSize: 13.5, fontWeight: 600, marginTop: 3 }}>Founder · 250,000+ women coached</div>
                </div>
              </div>
              <div style={{ position: "absolute", top: -14, right: -8, zIndex: 4 }}>
                <Pin rotate={-7}>★ 4.8 · 12K reviews</Pin>
              </div>
              <div style={{ position: "absolute", bottom: -22, left: -12, zIndex: 4 }} className="mobile-only">
                <Hand size={26} color="var(--orange-700)" rotate={-4}>← That's your coach</Hand>
              </div>
            </div>
          </Reveal>

        </div>
      </div>

      {/* trust bar */}
      <div style={{ marginTop: 48, background: "rgba(255,255,255,0.55)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap-wide community-trust">
          {/* Row 1 — community proof with overlapping avatars */}
          <div className="ct-row ct-community">
            <div className="ct-avatars" aria-hidden="true">
              {HERO_AVATARS.map((src, i) => (
                <span key={i} className="ct-avatar ct-avatar-img">
                  <img src={src} alt="" loading="lazy" decoding="async" />
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

          {/* Row 2 — two side-by-side stats */}
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

          {/* Row 3 — Trustpilot */}
          <div className="ct-row ct-trustpilot">
            <Trustpilot rating="4.8" reviews="12,400 reviews" />
          </div>
        </div>
      </div>
    </section>
  );
}