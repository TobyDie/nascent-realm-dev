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
   REAL image+text testimonials — placed strategically against the
   pitch section that precedes them (see HaircareChallengePage.tsx).
   Verbatim quotes; do NOT paraphrase.
------------------------------------------------------------------ */
const IMAGE_PLACEHOLDERS = [
  // #0 — after HowItWorks (process pitch): "the method is simple & accessible"
  {
    name: "Paola Fernandez", age: 32, flag: "🌎", initials: "P",
    context: "Hair loss · health-related",
    text: "It's super simple. You can find all the ingredients on the internet, on Amazon. They're very accessible and I've been having amazing results.",
    image: "https://bhc-surveys-api.dndgroup.workers.dev/api/media/c31c359b-4336-490c-a77d-f64aed9a64ec/thumbnails/84e28a1f-78cd-493b-9458-4b45b61918a4_frame_2.jpg",
  },
  // #1 — after WhatsIncluded (value pitch): "everything in the bundle worked"
  {
    name: "Stella Sivas", age: 41, flag: "🌍", initials: "S",
    context: "Hair loss · thinning",
    text: "From the food, from the nutrients, from the shampoo itself, from the products… I find it amazing, and I want to thank you for the help.",
    image: "https://bhc-surveys-api.dndgroup.workers.dev/api/media/ddb8e6c2-3b2b-4a14-9466-e0bdda688856/thumbnails/fbe31339-6369-461b-89ee-fdf07d7dfee8_frame_2.jpg",
  },
  // #2 — after NotAboutHair (emotional pitch): "fell in love with my hair again"
  {
    name: "Kate", age: 38, flag: "🌍", initials: "K",
    context: "Oily hair · hair loss",
    text: "The main thing I could say that this challenge gave me was the most important one — and that's that I fell in love with my hair again.",
    image: "https://bhc-surveys-api.dndgroup.workers.dev/api/media/976e030c-9a50-4034-a960-f63633d47b3e/thumbnails/e34fa71b-15b7-4a7e-ac36-7ad2f9c025f8_frame_2.jpg",
  },
  // #3 — after SelfQualifier ("is this for me?"): a scientist who was skeptical
  {
    name: "Natasha Bloch", age: 40, flag: "🇺🇸", initials: "N",
    context: "Scientist · hair loss, shedding",
    text: "I'm a scientist. I feel my hair changed drastically from this dry, frizzy, puffy thing. I found my love for my curly hair again — in this 14 days, my curls came back.",
    image: "https://bhc-surveys-api.dndgroup.workers.dev/api/media/8d39ec21-2e47-4b6e-a725-8b876905d9b6/thumbnails/26497921-6aa1-41aa-8453-5cedb4a87ee9_frame_2.jpg",
  },
  // #4 — after Faq (objection-handling): deep, life-changing transformation
  {
    name: "Rosemary", age: 44, flag: "🇺🇸", initials: "R",
    context: "Veteran · chemotherapy hair loss",
    text: "This course has changed the way my family thinks, the way I think. It is going to continue to improve our quality of life.",
    image: "https://bhc-surveys-api.dndgroup.workers.dev/api/media/913d10f2-f05a-4e14-806b-652ae2ad4852/thumbnails/e35fc9d8-12da-432f-a36d-918b37e5dd09_frame_2.jpg",
  },
  // #5 — before FinalCta: the closer — "it's about a new, empowered me"
  {
    name: "Nataliia Semenkova", age: 39, flag: "🇺🇦", initials: "N",
    context: "Thin, dull · hair loss",
    text: "It's not only about the hair that's silky and is nice to touch… but it's also about the new, more inspired, more empowered me.",
    image: "https://bhc-surveys-api.dndgroup.workers.dev/api/media/4d63cacd-e303-4d60-8966-6ba1232150f8/thumbnails/e9198670-1914-472a-bc70-b7599d152269_frame_2.jpg",
  },
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
          image={t.image}
        />
        </Reveal>
      </div>
    </section>
  );
}