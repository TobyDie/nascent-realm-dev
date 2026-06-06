import {
  Anno,
  Button,
  Carousel,
  EditableImage,
  Eyebrow,
  InlineTestimonial,
  Pin,
  Reveal,
  useIsMobile,
} from "../primitives";

export function Founder({ onCta }: { onCta?: () => void }) {
  const isMobile = useIsMobile();

  const storyCards = [
    <div key={0} className="founder-story-card">
      <EditableImage h={220} label="Sarah at the peak of her influencer career — styled, on-set for a luxury hair brand campaign. 500K followers, $20K brand deals. Hair was secretly thinning the whole time." radius={16} />
      <div className="founder-story-caption">
        <span className="founder-story-num">01</span>
        <span>500,000 followers. $20K brand deals. Losing hair in clumps.</span>
      </div>
    </div>,
    <div key={1} className="founder-story-card">
      <EditableImage h={220} label="Sarah working with a chemist or dermatologist — notes, formulations, research. The years she stopped promoting products and started asking why." radius={16} cool />
      <div className="founder-story-caption">
        <span className="founder-story-num">02</span>
        <span>The turning point: years with chemists, dermatologists & trichologists.</span>
      </div>
    </div>,
    <div key={2} className="founder-story-card">
      <EditableImage h={220} label="Sarah today — 120cm of healthy bleached hair, casual and confident. Same woman, different knowledge. $10 a month." radius={16} />
      <div className="founder-story-caption">
        <span className="founder-story-num">03</span>
        <span>Today: 120cm of bleached hair. $10 a month.</span>
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
            She lost half her hair at the peak of her career.<br />
            <span style={{ color: "var(--orange-700)" }}>That's why she's the right person to help you.</span>
          </h2>
        </Reveal>

        <div className="founder-layout">
          <Reveal>
            <div style={{ position: "relative" }}>
              <EditableImage h={520} label="Sarah Tran portrait — warm, direct. 120cm of healthy bleached hair. Same face from the ad. Not retouched." radius={20} style={{ boxShadow: "var(--shadow-lg)" }} />
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
                In her late 20s, Sarah was a haircare influencer with 500,000 followers. Luxury brands were mailing her $300 shampoos. She was walking into the best salons in the country. She was getting paid <strong>$20,000 deals</strong> to promote hair products to women just like you.
              </p>

              <div style={{ borderLeft: "4px solid var(--orange-600)", paddingLeft: 20, margin: "20px 0" }}>
                <p style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 26, lineHeight: 1.25, color: "var(--ink)" }}>
                  And she was losing her hair in clumps.
                </p>
              </div>

              <p className="p">
                Bald patches. An oily scalp. Hair she'd stopped wearing down because she was too embarrassed. She dodged social events to hide her dandruff. She didn't feel feminine anymore — and she had access to everything the industry had to offer.
              </p>
              <p className="p">
                <strong>That's when she stopped promoting products and started asking why.</strong>
              </p>
              <p className="p">
                She spent years working with chemists, dermatologists, trichologists, and nutritionists — not to build a product to sell you, but to understand what was actually happening. Then she built the program she wished she'd had: honest, science-backed, with nothing to sell you except the knowledge itself.
              </p>

              <div style={{ background: "var(--green-bg)", borderLeft: "4px solid var(--green-line)", borderRadius: 12, padding: "16px 18px" }}>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--green-text)" }}>
                  Today, Sarah maintains <strong>120cm of bleached hair</strong> for roughly <strong>$10 a month</strong>. Not because she found an expensive secret. Because she finally understood what her hair actually needed.
                </p>
              </div>

              <p className="p">
                <strong>250,000 women across 149 countries</strong> have been through this with her. Most of them tried everything before they found her.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink-soft)", background: "var(--cream)", border: "1px solid var(--line)", borderRadius: 999, padding: "6px 13px" }}>Certified Hair Loss Specialist</span>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink-soft)", background: "var(--cream)", border: "1px solid var(--line)", borderRadius: 999, padding: "6px 13px" }}>Founder of HairQare</span>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink-soft)", background: "var(--cream)", border: "1px solid var(--line)", borderRadius: 999, padding: "6px 13px" }}>250,000+ women coached</span>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink-soft)", background: "var(--cream)", border: "1px solid var(--line)", borderRadius: 999, padding: "6px 13px" }}>13+ years in haircare</span>
              </div>

              <div style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontStyle: "italic", color: "var(--ink)", marginTop: 12 }}>— Sarah Tran</div>

              <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start" }}>
                <Button onClick={onCta} icon="arrow-right">Start with me</Button>
                <InlineTestimonial
                  name="Natasha" age={37} flag="🇩🇪"
                  quote="I'm a scientist — I came in sceptical. In 14 days my hair changed drastically from this dry, frizzy, puffy thing. I found my love for my curly hair again."
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