import * as React from "react";
import {
  Anno,
  Button,
  Eyebrow,
  HandLine,
  InlineTestimonial,
  Reveal,
} from "../primitives";

export function HowItWorks({ onCta }: { onCta?: () => void }) {
  return (
    <section className="bg-white">
      <Anno>Section 7 — How it works</Anno>
      <div className="wrap" style={{ maxWidth: 720 }}>
        <Reveal style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 className="h2" style={{ marginTop: 12 }}>10 minutes a day.<br />14 days - 14 Simple Missions.</h2>
          <p className="lead" style={{ marginTop: 12, color: "var(--ink-soft)" }}>
            Anytime - Anywhere.
          </p>
          <p style={{ marginTop: 18, fontSize: 17, color: "var(--ink)", maxWidth: 560, marginInline: "auto", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            You're not in this alone
          </p>
          <p style={{ marginTop: 8, fontSize: 16, color: "var(--slate)", maxWidth: 560, marginInline: "auto" }}>
            Hundreds of women start the same day you do.
          </p>
        </Reveal>

        <div className="timeline">
          <Reveal delay={0}>
            <div className="timeline-step">
              <div className="timeline-circle">01</div>
              <div className="timeline-card">
                <div className="timeline-tag">Start Together</div>
                <h3 className="h3" style={{ marginBottom: 6, marginTop: 2 }}>Day 1, everyone drops what's not working.</h3>
                <p className="p" style={{ fontSize: 15.5, margin: 0 }}>
                  You're not the only one who's tried everything. Every woman shows up the same way — done with what hasn't worked.
                </p>
                <p className="p" style={{ fontSize: 13.5, margin: "10px 0 0", color: "var(--slate)", fontStyle: "italic" }}>
                  Prep video · your group begins
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
                <div className="timeline-tag">Learn Together</div>
                <h3 className="h3" style={{ marginBottom: 6, marginTop: 2 }}>Same lessons. Same chat. Same questions.</h3>
                <p className="p" style={{ fontSize: 15.5, margin: 0 }}>
                  Ten minutes a day, figuring it out with women asking what you're asking — and answering each other along the way.
                </p>
                <p className="p" style={{ fontSize: 13.5, margin: "10px 0 0", color: "var(--slate)", fontStyle: "italic" }}>
                  Days 1–14 · you build your own routine
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
                <div className="timeline-tag">Finish Together</div>
                <h3 className="h3" style={{ marginBottom: 6, marginTop: 2 }}>Day 14, you walk out with results — and a group that saw it happen.</h3>
                <p className="p" style={{ fontSize: 15.5, margin: 0 }}>
                  Less falling out. More shine. Women who get it because they just did it too.
                </p>
                <p className="p" style={{ fontSize: 13.5, margin: "10px 0 0", color: "var(--slate)", fontStyle: "italic" }}>
                  Day 14+ · your system, your people
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
            avatar="profile-10.webp"
            style={{ margin: "0 auto" }}
          />
        </Reveal>

        <Reveal className="center" style={{ marginTop: 26 }}>
          <Button id="cta-how-it-works" onClick={onCta} icon="arrow-right">I'm ready — start now</Button>
        </Reveal>
      </div>
    </section>
  );
}

export default HowItWorks;