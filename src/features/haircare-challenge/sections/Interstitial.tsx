import { InlineTestimonial, TestimonialCard, Reveal } from "../primitives";
import profile1 from "@/assets/profile-1.webp.asset.json";
import profile2 from "@/assets/profile-2.webp.asset.json";
import profile3 from "@/assets/profile-3.webp.asset.json";
import profile5 from "@/assets/profile-5.webp.asset.json";
import profile6 from "@/assets/profile-6.webp.asset.json";
import profile7 from "@/assets/profile-7.webp.asset.json";

/* ------------------------------------------------------------------
   PLACEHOLDER text testimonials (5–6). Replace copy with real reviews.
------------------------------------------------------------------ */
/* Real customer text testimonials — placed to reinforce the section above. */
const TEXT_PLACEHOLDERS = [
  // After Science — scientist endorses the root-cause approach
  { name: "Natasha Bloch", avatar: profile6.url, quote: "I feel my hair changed drastically from this dry, frizzy, puffy thing. I found my love for my curly hair again. I feel in this 14 days, my curls came back." },
  // After Results in 2 Weeks — visible results inside 14 days
  { name: "Limor Mills", avatar: profile2.url, quote: "By day 14, I could actually see little baby hairs growing in! My hair feels so much stronger, it's got more volume, and it just looks so much healthier." },
  // After Founder — emotional / confidence
  { name: "Cintia Irtzl", avatar: profile5.url, quote: "My hair started to be shinier and softer so I got back a lot of self-confidence and that felt really nice honestly." },
  // After SelfQualifier — habits over genetics (reassurance for women like me)
  { name: "Gema", avatar: profile3.url, quote: "This challenge showed me that I have to change my habits to get a better hair and that my genetics are going to influence my hair but not so much." },
  // After FAQ — simple, accessible, easy
  { name: "Paola Fernandez", avatar: profile7.url, quote: "It's super simple. You can find all the ingredients on the internet, on Amazon. They're very accessible and I've been having amazing results." },
  // Final reassurance before CTA — fall-in-love-again moment
  { name: "Kate", avatar: profile1.url, quote: "The main thing I could say that this challenge gave me was the most important one and that's that I fell in love — I fell in love with my hair again." },
];

/* ------------------------------------------------------------------
   PLACEHOLDER image+text testimonials (5–6). Image falls back to the
   default before/after asset until real images are provided.
------------------------------------------------------------------ */
/* Real customer image+text testimonials — placed where the story matches the pitch above. */
const IMAGE_PLACEHOLDERS = [
  // After HowItWorks — the process works, visible after washing
  { name: "Selima", initials: "S", context: "Daily hair loss · limp hair", text: "I noticed that my hair had a little bit of volume after washing it, which never happened before. It always looked limp and flat, but now I can see a little bit of volume after washing and I experienced less sweat and limpness." },
  // After WhatsIncluded — the DIY shampoo / what's in the bundle delivers
  { name: "Alexia Zacharias", initials: "A", context: "Hair loss (hypothyroid)", text: "I see much, much difference with the shampoo — with the DIY shampoo." },
  // After NotAboutHair — emotional, reconnecting with self
  { name: "Aurélie Guénué", initials: "A", context: "Hair loss · irritated scalp", text: "After just a few weeks my scalp feels calmer, I'm losing less hair and more than anything I'm finally reconnecting with myself." },
  // After SelfQualifier (image slot) — hormonal / Hashimoto's, "for women like me"
  { name: "Biljana Lemić", initials: "B", context: "Hormonal hair loss · Hashimoto's, early menopause", text: "The first time I used it, I could already see the difference. My hair looks shinier, felt stronger and somehow just healthier overall." },
  // After FAQ (image slot) — bouncy, soft, gentle (trust before CTA)
  { name: "Sara Gouveia", initials: "S", context: "Hair loss · stress", text: "Now that it's dried it actually feels pretty clean and it feels so smooth and so gentle and my curls are just like, hey hello! My hair is usually very flat… but now it's just quite bouncy." },
  // Final-CTA-area — the most powerful story (cancer survivor / family-level change)
  { name: "Rosemary", initials: "R", context: "Military veteran · chemotherapy hair loss", text: "This course has changed the way my family thinks, the way I think — it is going to continue to improve our quality of life." },
];

export function TextInterstitial({ index, bg = "var(--cream)" }: { index: number; bg?: string }) {
  const t = TEXT_PLACEHOLDERS[index];
  if (!t) return null;
  return (
    <section style={{ background: bg, padding: "32px 0" }}>
      <div className="wrap-narrow" style={{ maxWidth: 720, marginInline: "auto", paddingInline: 20 }}>
      <Reveal>
          <InlineTestimonial name={t.name} quote={t.quote} avatar={t.avatar} />
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
            initials={t.initials}
            context={t.context}
            text={t.text}
          />
        </Reveal>
      </div>
    </section>
  );
}