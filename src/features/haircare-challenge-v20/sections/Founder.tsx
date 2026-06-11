import {
  Anno,
  Button,
  Carousel,
  
  Eyebrow,
  GuaranteeBadge,
  InlineTestimonial,
  Pin,
  Reveal,
  RImg,
  useIsMobile,
} from "../primitives";
import { PORTRAIT_WIDTHS } from "../img";

export function Founder({ onCta }: { onCta?: () => void }) {
  const isMobile = useIsMobile();

  const storyCards = [
    <div key={0} className="founder-story-card">
      <div style={{ height: 220, borderRadius: 16, overflow: "hidden" }}>
        <img
          src="https://pub.hairqare.co/cdn-cgi/image/width=800,quality=80,format=auto/Sarah%20Influencer.webp"
          srcSet="https://pub.hairqare.co/cdn-cgi/image/width=500,quality=80,format=auto/Sarah%20Influencer.webp 500w, https://pub.hairqare.co/cdn-cgi/image/width=800,quality=80,format=auto/Sarah%20Influencer.webp 800w, https://pub.hairqare.co/cdn-cgi/image/width=1200,quality=80,format=auto/Sarah%20Influencer.webp 1200w"
          sizes="(max-width: 860px) 90vw, 332px"
          alt="Sarah at the peak of her influencer career — styled, on-set for a luxury hair brand campaign. 500K followers, $20K brand deals. Hair was secretly thinning the whole time."
          loading="lazy"
          decoding="async"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      <div className="founder-story-caption">
        <span className="founder-story-num">01</span>
        <span>Today: 120cm of bleached hair. $10 a month. Teaches the system she built.</span>
      </div>
    </div>,
    <div key={1} className="founder-story-card">
      <div style={{ height: 220, borderRadius: 16, overflow: "hidden" }}>
        <img
          src="https://pub.hairqare.co/cdn-cgi/image/width=800,quality=80,format=auto/IMG_4153%20(1).webp"
          srcSet="https://pub.hairqare.co/cdn-cgi/image/width=500,quality=80,format=auto/IMG_4153%20(1).webp 500w, https://pub.hairqare.co/cdn-cgi/image/width=800,quality=80,format=auto/IMG_4153%20(1).webp 800w, https://pub.hairqare.co/cdn-cgi/image/width=1200,quality=80,format=auto/IMG_4153%20(1).webp 1200w"
          sizes="(max-width: 860px) 90vw, 332px"
          alt="Sarah today — 120cm of healthy bleached hair, casual and confident. Same woman, different knowledge. $10 a month."
          loading="lazy"
          decoding="async"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      <div className="founder-story-caption">
        <span className="founder-story-num">02</span>
        <span>Years working with chemists, dermatologists & trichologists to actually understand hair.</span>
      </div>
    </div>,
    <div key={2} className="founder-story-card">
      <div style={{ height: 220, borderRadius: 16, overflow: "hidden" }}>
        <img
          src="https://pub.hairqare.co/cdn-cgi/image/width=800,quality=80,format=auto/Sarah%20working%20with%20chemist.webp"
          srcSet="https://pub.hairqare.co/cdn-cgi/image/width=500,quality=80,format=auto/Sarah%20working%20with%20chemist.webp 500w, https://pub.hairqare.co/cdn-cgi/image/width=800,quality=80,format=auto/Sarah%20working%20with%20chemist.webp 800w, https://pub.hairqare.co/cdn-cgi/image/width=1200,quality=80,format=auto/Sarah%20working%20with%20chemist.webp 1200w"
          sizes="(max-width: 860px) 90vw, 332px"
          alt="Sarah working with a chemist or dermatologist — notes, formulations, research. The years she stopped promoting products and started asking why."
          loading="lazy"
          decoding="async"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      <div className="founder-story-caption">
        <span className="founder-story-num">03</span>
        <span>The backstory: 500K followers, $20K brand deals — and quietly figuring out the industry was selling her nothing real.</span>
      </div>
    </div>,
  ];

  return (
    <section className="bg-white" id="founder">
      <Anno>Section 9 — Founder credibility</Anno>
      <div className="wrap-wide">
        <Reveal style={{ textAlign: "center", marginBottom: 40 }}>
          <Eyebrow>Meet your coach</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 760, marginInline: "auto" }}>
            120cm of healthy hair. $10 a month. No products to sell you.<br />
            <span style={{ color: "var(--orange-700)" }}>This is the system she teaches.</span>
          </h2>
        </Reveal>

        <div className="founder-layout">
          <Reveal>
            <div style={{ position: "relative" }}>
              <RImg
                file="sarah-tran-founder.webp"
                widths={PORTRAIT_WIDTHS}
                sizes="(max-width: 860px) 92vw, 480px"
                alt="Sarah Tran, founder of HairQare, with long healthy auburn hair, seated in a calm sunlit room."
                style={{ width: "100%", height: 520, objectFit: "cover", objectPosition: "center top", borderRadius: 20, display: "block", boxShadow: "var(--shadow-lg)" }}
              />
              <div style={{ position: "absolute", top: -14, right: -10, zIndex: 4 }}>
                <Pin rotate={-7} bg="var(--orange-600)" color="#fff" style={{ borderColor: "var(--orange-700)" }}>250K+ coached</Pin>
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 18px 18px", background: "linear-gradient(to top, rgba(26,26,26,.88), rgba(26,26,26,0))", borderRadius: "0 0 20px 20px" }}>
                <div style={{ color: "#fff", fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 20 }}>Sarah Tran</div>
                <div style={{ color: "rgba(255,255,255,.85)", fontSize: 13, fontWeight: 600, marginTop: 3 }}>Founder · HairQare</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="founder-copy-wrap">
              <p className="p">
                Sarah maintains <strong>120cm of bleached hair</strong> for roughly <strong>$10 a month</strong>. No salon protocol. No $90 serum. No bond-builder stack. Just the system she built once she finally understood what her hair actually needed.
              </p>

              <div style={{ borderLeft: "4px solid var(--orange-600)", paddingLeft: 20, margin: "20px 0" }}>
                <p style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 26, lineHeight: 1.25, color: "var(--ink)" }}>
                  This is what she teaches — the system, not another product.
                </p>
              </div>

              <p className="p">
                She figured this out the hard way. In her late 20s she was a haircare influencer with 500,000 followers, taking <strong>$20,000 brand deals</strong> to promote $300 shampoos. The industry had access to her — and was selling her nothing that actually worked.
              </p>
              <p className="p">
                <strong>So she stopped promoting products and started asking why.</strong>
              </p>
              <p className="p">
                Years working with chemists, dermatologists, trichologists and nutritionists — not to build another product, but to actually understand what hair needs. Then she built the program she wished she'd had at 25: honest, science-backed, with nothing to sell you except the knowledge itself.
              </p>

              <p className="p">
                <strong>250,000 women across 149 countries</strong> have been through this with her — most of them in their 20s and 30s, most of them tired of spending more and seeing less.
              </p>
              <p className="p" style={{ fontSize: 15, color: "var(--slate)", fontStyle: "italic" }}>
                The protocol was reviewed by board-certified dermatologists and trichology researchers before launch.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink-soft)", background: "var(--cream)", border: "1px solid var(--line)", borderRadius: 999, padding: "6px 13px" }}>Certified Trichology Specialist</span>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink-soft)", background: "var(--cream)", border: "1px solid var(--line)", borderRadius: 999, padding: "6px 13px" }}>Founder of HairQare</span>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink-soft)", background: "var(--cream)", border: "1px solid var(--line)", borderRadius: 999, padding: "6px 13px" }}>250,000+ women coached</span>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink-soft)", background: "var(--cream)", border: "1px solid var(--line)", borderRadius: 999, padding: "6px 13px" }}>13+ years in haircare</span>
              </div>

              <div style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontStyle: "italic", color: "var(--ink)", marginTop: 12 }}>— Sarah Tran</div>

              <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start" }}>
                <Button id="cta-founder" onClick={onCta} icon="arrow-right">Start with me</Button>
                <GuaranteeBadge size="sm" />
                <InlineTestimonial
                  name="Natasha" age={29} flag="🇩🇪"
                  quote="I'm a scientist, I came in sceptical. In 14 days my hair changed drastically from this dry, frizzy, puffy thing. I found my love for my curly hair again."
                  avatar="profile-6.webp"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal style={{ marginTop: 52 }}>
          <div style={{ marginBottom: 18, textAlign: "center" }}>
            <Eyebrow style={{ color: "var(--slate)" }}>Her story in three moments</Eyebrow>
          </div>
          {isMobile ? (
            <Carousel peek={0.88} ariaLabel="Sarah's story">
              {storyCards}
            </Carousel>
          ) : (
            <div className="founder-story-grid">{storyCards}</div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export default Founder;