import { InlineTestimonial, TestimonialCard, Reveal } from "../primitives";

/* ------------------------------------------------------------------
   PLACEHOLDER text testimonials (5–6). Replace copy with real reviews.
------------------------------------------------------------------ */
const TEXT_PLACEHOLDERS = [
  { name: "[Name 1]", age: "[age]", flag: "🌍", quote: "[PLACEHOLDER text testimonial #1 — short trust-builder quote about results / science / fast wins.]" },
  { name: "[Name 2]", age: "[age]", flag: "🌍", quote: "[PLACEHOLDER text testimonial #2 — quote about how easy the process was.]" },
  { name: "[Name 3]", age: "[age]", flag: "🌍", quote: "[PLACEHOLDER text testimonial #3 — quote about visible results in 2 weeks.]" },
  { name: "[Name 4]", age: "[age]", flag: "🌍", quote: "[PLACEHOLDER text testimonial #4 — quote about value / what's included.]" },
  { name: "[Name 5]", age: "[age]", flag: "🌍", quote: "[PLACEHOLDER text testimonial #5 — emotional quote about confidence / self-image.]" },
  { name: "[Name 6]", age: "[age]", flag: "🌍", quote: "[PLACEHOLDER text testimonial #6 — final reassurance / 'wish I had started sooner' quote.]" },
];

/* ------------------------------------------------------------------
   PLACEHOLDER image+text testimonials (5–6). Image falls back to the
   default before/after asset until real images are provided.
------------------------------------------------------------------ */
const IMAGE_PLACEHOLDERS = [
  { name: "[Name A]", age: "[age]", flag: "🌍", initials: "A", context: "[PLACEHOLDER context — concern / hair type]", text: "[PLACEHOLDER image+text testimonial #1 — story tied to the process.]" },
  { name: "[Name B]", age: "[age]", flag: "🌍", initials: "B", context: "[PLACEHOLDER context — concern / hair type]", text: "[PLACEHOLDER image+text testimonial #2 — visible-results story.]" },
  { name: "[Name C]", age: "[age]", flag: "🌍", initials: "C", context: "[PLACEHOLDER context — concern / hair type]", text: "[PLACEHOLDER image+text testimonial #3 — value-of-bundle story.]" },
  { name: "[Name D]", age: "[age]", flag: "🌍", initials: "D", context: "[PLACEHOLDER context — concern / hair type]", text: "[PLACEHOLDER image+text testimonial #4 — emotional transformation.]" },
  { name: "[Name E]", age: "[age]", flag: "🌍", initials: "E", context: "[PLACEHOLDER context — concern / hair type]", text: "[PLACEHOLDER image+text testimonial #5 — 'for women like me' story.]" },
  { name: "[Name F]", age: "[age]", flag: "🌍", initials: "F", context: "[PLACEHOLDER context — concern / hair type]", text: "[PLACEHOLDER image+text testimonial #6 — final-CTA-area trust story.]" },
];

export function TextInterstitial({ index, bg = "var(--cream)" }: { index: number; bg?: string }) {
  const t = TEXT_PLACEHOLDERS[index];
  if (!t) return null;
  return (
    <section style={{ background: bg, padding: "32px 0" }}>
      <div className="wrap-narrow" style={{ maxWidth: 720, marginInline: "auto", paddingInline: 20 }}>
        <Reveal>
          <InlineTestimonial name={t.name} age={t.age} flag={t.flag} quote={t.quote} />
        </Reveal>
      </div>
    </section>
  );
}

export function ImageInterstitial({ index, bg = "var(--white)" }: { index: number; bg?: string }) {
  const t = IMAGE_PLACEHOLDERS[index];
  if (!t) return null;
  return (
    <section style={{ background: bg, padding: "44px 0" }}>
      <div className="wrap-narrow" style={{ maxWidth: 520, marginInline: "auto", paddingInline: 20 }}>
        <Reveal>
          <TestimonialCard
            name={t.name}
            age={t.age}
            flag={t.flag}
            initials={t.initials}
            context={t.context}
            text={t.text}
          />
        </Reveal>
      </div>
    </section>
  );
}