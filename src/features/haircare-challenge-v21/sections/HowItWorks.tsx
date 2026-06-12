import * as React from "react";
import {
  Anno,
  Button,
  InlineTestimonial,
  Reveal,
} from "../primitives";
import { r2img } from "../img";

const COHORT_AVATARS = [
  "profile-1.webp",
  "profile-5.webp",
  "profile-3.webp",
  "profile-7.webp",
  "profile-2.webp",
];

const DAYS = Array.from({ length: 14 }, (_, i) => i + 1);
const ANCHORS: Record<number, string> = { 1: "Start", 7: "Midway", 14: "Finish" };

function Chapter({
  num,
  tag,
  meta,
  headline,
  body,
  caption,
  children,
}: {
  num: string;
  tag: string;
  meta: string;
  headline: string;
  body: string;
  caption: string;
  children?: React.ReactNode;
}) {
  return (
    <article className="mx-chapter">
      <header className="mx-chapter-rule">
        <span className="mx-chapter-num">{num}</span>
        <span className="mx-chapter-tag">{tag}</span>
        <span className="mx-chapter-meta">{meta}</span>
      </header>
      <h3 className="mx-chapter-headline">{headline}</h3>
      <p className="mx-chapter-body">{body}</p>
      {children}
      <p className="mx-chapter-caption">↳ {caption}</p>
    </article>
  );
}

export function HowItWorks({ onCta }: { onCta?: () => void }) {
  return (
    <section className="bg-white missions-section">
      <Anno>Section 7 — How it works</Anno>
      <div className="wrap" style={{ maxWidth: 720 }}>
        <Reveal className="mx-head">
          <p className="mx-eyebrow">Anytime · Anywhere.</p>
          <h2 className="h2 mx-headline">
            10 minutes a day.<br />14 days — 14 Simple Missions.
          </h2>
        </Reveal>

        <Reveal delay={60}>
          <div className="mx-cohort-pill">
            <div className="mx-cohort-avatars" aria-hidden="true">
              {COHORT_AVATARS.map((file) => (
                <span key={file} className="mx-cohort-avatar">
                  <img src={r2img(file, 96)} alt="" loading="lazy" decoding="async" />
                </span>
              ))}
              <span className="mx-cohort-avatar mx-cohort-more">+</span>
            </div>
            <div className="mx-cohort-copy">
              <p className="mx-cohort-eyebrow">You're not in this alone</p>
              <p className="mx-cohort-line">Hundreds of women start the same day you do.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-calendar" role="img" aria-label="14 day calendar walked together">
            <div className="mx-calendar-frame">
              <span className="mx-calendar-corner mx-calendar-corner-tl" />
              <span className="mx-calendar-corner mx-calendar-corner-tr" />
              <span className="mx-calendar-corner mx-calendar-corner-bl" />
              <span className="mx-calendar-corner mx-calendar-corner-br" />
              <div className="mx-calendar-label">14-Day Calendar · walked together</div>
              <div className="mx-calendar-grid">
                {DAYS.map((d) => {
                  const anchor = ANCHORS[d];
                  return (
                    <div
                      key={d}
                      className={`mx-day${anchor ? " mx-day-anchor" : ""}`}
                      style={{ ["--mx-i" as any]: d }}
                    >
                      <span className="mx-day-num">D{d}</span>
                      <span className="mx-day-dot" aria-hidden="true" />
                      {anchor && <span className="mx-day-anchor-label">{anchor}</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mx-chapters">
          <Reveal delay={0}>
            <Chapter
              num="01"
              tag="Start Together"
              meta="Day 1"
              headline="Day 1, everyone drops what's not working."
              body="You're not the only one who's tried everything. Every woman shows up the same way — done with what hasn't worked."
              caption="Prep video · your group begins"
            />
          </Reveal>
          <Reveal delay={80}>
            <Chapter
              num="02"
              tag="Learn Together"
              meta="Days 1–14"
              headline="Same lessons. Same chat. Same questions."
              body="Ten minutes a day, figuring it out with women asking what you're asking — and answering each other along the way."
              caption="Days 1–14 · you build your own routine"
            >
              <div className="mx-bars" aria-hidden="true">
                {DAYS.map((d) => (
                  <span key={d} className="mx-bar" style={{ ["--mx-i" as any]: d }} />
                ))}
              </div>
            </Chapter>
          </Reveal>
          <Reveal delay={160}>
            <Chapter
              num="03"
              tag="Finish Together"
              meta="Day 14+"
              headline="Day 14, you walk out with results — and a group that saw it happen."
              body="Less falling out. More shine. Women who get it because they just did it too."
              caption="Day 14+ · your system, your people"
            />
          </Reveal>
        </div>

        <Reveal style={{ marginTop: 36 }}>
          <div className="mx-callout">
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