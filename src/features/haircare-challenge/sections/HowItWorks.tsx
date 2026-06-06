import * as React from "react";
import {
  Anno,
  Button,
  Eyebrow,
  HandLine,
  InlineTestimonial,
  Reveal,
} from "../primitives";
import profile10 from "@/assets/profile-10.webp.asset.json";

export function HowItWorks({ onCta }: { onCta?: () => void }) {
  return (
    <section className="bg-white">
      <Anno>Section 7 — How it works</Anno>
      <div className="wrap" style={{ maxWidth: 720 }}>
        <Reveal style={{ textAlign: "center", marginBottom: 40 }}>
          <Eyebrow>The structure</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12 }}>10 minutes a day.
14 days - 14 Simple Missions.</h2>
          <p className="lead" style={{ marginTop: 12, color: "var(--ink-soft)" }}>
            Anytime - Anywhere.<br />Here's exactly what happens.
          </p>
        </Reveal>

        <div className="timeline">
          <Reveal delay={0}>
            <div className="timeline-step">
              <div className="timeline-circle">01</div>
              <div className="timeline-card">
                <div className="timeline-tag">Day 1 · 📦</div>
                <h3 className="h3" style={{ marginBottom: 6, marginTop: 2 }}>You get set up</h3>
                <p className="p" style={{ fontSize: 15.5, margin: 0 }}>
                  You receive your preparation video and the DIY shampoo ingredient list. You join 2,000+ women starting on exactly the same day.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="timeline-connector">
            <HandLine height={56} arrow={false} />
          </div>
          <Reveal delay={80}>
            <div className="timeline-step">
              <div className="timeline-circle">02</div>
              <div className="timeline-card">
                <div className="timeline-tag">Days 1–14 · 🎥</div>
                <h3 className="h3" style={{ marginBottom: 6, marginTop: 2 }}>10 minutes a day</h3>
                <p className="p" style={{ fontSize: 15.5, margin: 0 }}>
                  One daily coaching video. Each day builds on the last. You customise everything to your hair type and your body.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="timeline-connector">
            <HandLine height={56} arrow={true} />
          </div>
          <Reveal delay={160}>
            <div className="timeline-step">
              <div className="timeline-circle">03</div>
              <div className="timeline-card">
                <div className="timeline-tag">Day 14+ · ✨</div>
                <h3 className="h3" style={{ marginBottom: 6, marginTop: 2 }}>You can see it</h3>
                <p className="p" style={{ fontSize: 15.5, margin: 0 }}>
                  A personalised haircare system, a real understanding of your hair biology, and results you can actually see.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal style={{ marginTop: 36 }}>
          <div style={{ background: "var(--cream)", borderRadius: 18, padding: "22px 24px", textAlign: "center", border: "1px solid var(--line)" }}>
            <p className="p" style={{ margin: 0, fontSize: 16.5, lineHeight: 1.55 }}>
              This is not passive content. You <em>do</em> things. You notice things. <strong>By day 14 you won't need to buy another product</strong> — because you'll know what your hair actually needs.
            </p>
          </div>
        </Reveal>

        <Reveal style={{ marginTop: 26 }}>
          <InlineTestimonial
            name="Intan"
            age={36}
            flag="🇲🇾"
            quote="Before this, every time I ran my fingers through my hair, strands would come out. Now when I do it, I don't see anything. That's the good news."
            avatar={profile10.url}
            style={{ margin: "0 auto" }}
          />
        </Reveal>

        <Reveal className="center" style={{ marginTop: 26 }}>
          <Button onClick={onCta} icon="arrow-right">I'm ready — start now</Button>
        </Reveal>
      </div>
    </section>
  );
}

export default HowItWorks;