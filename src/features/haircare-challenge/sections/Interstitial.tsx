import { InlineTestimonial, CompactImageTestimonial, Reveal, StarRow } from "../primitives";
import profile1 from "@/assets/profile-1.webp.asset.json";
import profile2 from "@/assets/profile-2.webp.asset.json";
import profile3 from "@/assets/profile-3.webp.asset.json";
import profile5 from "@/assets/profile-5.webp.asset.json";
import profile6 from "@/assets/profile-6.webp.asset.json";
import profile7 from "@/assets/profile-7.webp.asset.json";
import baNew1 from "@/assets/ba-new-1.png.asset.json";
import baNew2 from "@/assets/ba-new-2.png.asset.json";
import baNew3 from "@/assets/ba-new-3.png.asset.json";
import baNew4 from "@/assets/ba-new-4.png.asset.json";
import baNew5 from "@/assets/ba-new-5.png.asset.json";
import ba13 from "@/assets/ba-13.png.asset.json";

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
  { name: "Selima", initials: "S", image: baNew3.url, context: "Daily hair loss · limp hair", text: "I noticed that my hair had a little bit of volume after washing it, which never happened before. It always looked limp and flat, but now I can see a little bit of volume after washing and I experienced less sweat and limpness." },
  // After WhatsIncluded — the DIY shampoo / what's in the bundle delivers
  { name: "Alexia Zacharias", initials: "A", image: baNew2.url, context: "Hair loss (hypothyroid)", text: "I see much, much difference with the shampoo — with the DIY shampoo." },
  // After NotAboutHair — emotional, reconnecting with self
  { name: "Aurélie Guénué", initials: "A", image: baNew1.url, context: "Hair loss · irritated scalp", text: "After just a few weeks my scalp feels calmer, I'm losing less hair and more than anything I'm finally reconnecting with myself." },
  // After SelfQualifier (image slot) — hormonal / Hashimoto's, "for women like me"
  { name: "Biljana Lemić", initials: "B", image: baNew4.url, context: "Hormonal hair loss · Hashimoto's, early menopause", text: "The first time I used it, I could already see the difference. My hair looks shinier, felt stronger and somehow just healthier overall." },
  // After FAQ (image slot) — bouncy, soft, gentle (trust before CTA)
  { name: "Sara Gouveia", initials: "S", image: baNew5.url, context: "Hair loss · stress", text: "Now that it's dried it actually feels pretty clean and it feels so smooth and so gentle and my curls are just like, hey hello! My hair is usually very flat… but now it's just quite bouncy." },
  // Final-CTA-area — the most powerful story (cancer survivor / family-level change)
  { name: "Rosemary", initials: "R", image: ba13.url, context: "Military veteran · chemotherapy hair loss", text: "This course has changed the way my family thinks, the way I think — it is going to continue to improve our quality of life." },
];

export type InterstitialVariant =
  | "default"
  | "pull-quote"
  | "polaroid-duo"
  | "magazine-split"
  | "sticky-wall"
  | "single-hero"
  | "ribbon";

/* Six visually distinct interstitial variants so the page never reads
   mechanical. Same underlying testimonial data — different rendering. */
export function TestimonialStrip({
  textIndex,
  imageIndex,
  bg = "var(--cream)",
  variant = "default",
}: { textIndex?: number; imageIndex?: number; bg?: string; variant?: InterstitialVariant }) {
  const t = textIndex != null ? TEXT_PLACEHOLDERS[textIndex] : undefined;
  const i = imageIndex != null ? IMAGE_PLACEHOLDERS[imageIndex] : undefined;
  if (!t && !i) return null;

  if (variant === "pull-quote" && t) {
    return (
      <section style={{ background: bg, padding: "44px 0" }}>
        <div className="wrap" style={{ maxWidth: 760, textAlign: "center" }}>
          <Reveal>
            <div className="ti-pullquote">
              <span className="ti-pullquote-mark" aria-hidden="true">"</span>
              <p className="ti-pullquote-text">{t.quote}</p>
              <div className="ti-pullquote-byline">
                <img src={t.avatar} alt="" loading="lazy" className="ti-pullquote-avatar" />
                <span>{t.name}</span>
                <StarRow size={13} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  if (variant === "polaroid-duo") {
    return (
      <section className="ti-polaroid-section" style={{ background: bg, padding: "48px 0" }}>
        <div className="wrap-wide" style={{ maxWidth: 920 }}>
          <Reveal>
            <div className="ti-polaroid-wrap">
              {i ? (
                <figure className="ti-polaroid">
                  <img src={i.image} alt={`${i.name} — ${i.context}`} loading="lazy" />
                  <figcaption>
                    <strong>{i.name}</strong>
                    <span>{i.context}</span>
                    <p>"{i.text}"</p>
                  </figcaption>
                </figure>
              ) : null}
              {t ? (
                <div className="ti-handnote">
                  <span className="ti-handnote-pin" aria-hidden="true" />
                  <p>"{t.quote}"</p>
                  <span className="ti-handnote-sig">— {t.name}</span>
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  if (variant === "magazine-split") {
    return (
      <section style={{ background: bg, padding: "0" }}>
        <Reveal>
          <div className="ti-magazine">
            {i ? (
              <div className="ti-magazine-img">
                <img src={i.image} alt={`${i.name} result`} loading="lazy" />
                <span className="ti-magazine-img-tag">{i.name} · {i.context}</span>
              </div>
            ) : null}
            {t ? (
              <div className="ti-magazine-quote">
                <span className="ti-magazine-eyebrow">Real review · cohort graduate</span>
                <p>"{t.quote}"</p>
                <div className="ti-magazine-byline">
                  <img src={t.avatar} alt="" loading="lazy" />
                  <div>
                    <strong>{t.name}</strong>
                    <StarRow size={12} />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </Reveal>
      </section>
    );
  }

  if (variant === "sticky-wall") {
    return (
      <section style={{ background: bg, padding: "56px 0" }}>
        <div className="wrap-wide" style={{ maxWidth: 880 }}>
          <Reveal>
            <div className="ti-stickywall">
              {t ? (
                <div className="ti-sticky ti-sticky-a">
                  <p>"{t.quote}"</p>
                  <span>— {t.name}</span>
                </div>
              ) : null}
              {i ? (
                <div className="ti-sticky ti-sticky-b">
                  <p>"{i.text}"</p>
                  <span>— {i.name} · {i.context}</span>
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  if (variant === "single-hero" && i) {
    return (
      <section style={{ background: bg, padding: "56px 0" }}>
        <div className="wrap" style={{ maxWidth: 720, textAlign: "center" }}>
          <Reveal>
            <div className="ti-single-hero">
              <div className="ti-single-hero-avatar">
                <img src={i.image} alt={i.name} loading="lazy" />
              </div>
              <StarRow size={18} style={{ justifyContent: "center" }} />
              <p className="ti-single-hero-quote">"{i.text}"</p>
              <div className="ti-single-hero-name">{i.name}</div>
              <div className="ti-single-hero-context">{i.context}</div>
              {t ? (
                <div className="ti-single-hero-also">
                  <span className="ti-single-hero-also-label">Also from this week:</span>
                  <span className="ti-single-hero-also-quote">"{t.quote}"</span>
                  <span className="ti-single-hero-also-name">— {t.name}</span>
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  if (variant === "ribbon") {
    return (
      <section style={{ background: bg, padding: "28px 0" }}>
        <div className="wrap-wide" style={{ maxWidth: 980 }}>
          <Reveal>
            <div className="ti-ribbon">
              {t ? (
                <div className="ti-ribbon-side">
                  <img src={t.avatar} alt="" loading="lazy" className="ti-ribbon-avatar" />
                  <div className="ti-ribbon-body">
                    <StarRow size={12} />
                    <p>"{t.quote}"</p>
                    <span>— {t.name}</span>
                  </div>
                </div>
              ) : null}
              <span className="ti-ribbon-divider" aria-hidden="true" />
              {i ? (
                <div className="ti-ribbon-side">
                  <img src={i.image} alt="" loading="lazy" className="ti-ribbon-thumb" />
                  <div className="ti-ribbon-body">
                    <strong>{i.name}</strong>
                    <p>"{i.text}"</p>
                    <span>{i.context}</span>
                  </div>
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  // default — original compact strip
  return (
    <section style={{ background: bg, padding: "24px 0" }}>
      <div className="wrap-wide" style={{ maxWidth: 960, marginInline: "auto", paddingInline: 20 }}>
        <Reveal>
          <div className="testi-strip">
            {t ? <InlineTestimonial name={t.name} quote={t.quote} avatar={t.avatar} /> : null}
            {i ? (
              <CompactImageTestimonial
                name={i.name}
                context={i.context}
                text={i.text}
                image={i.image}
              />
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}