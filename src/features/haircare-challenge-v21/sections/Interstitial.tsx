import { InlineTestimonial, CompactImageTestimonial, Reveal, StarRow } from "../primitives";
import { r2img, r2srcset, BA_WIDTHS, AVATAR_W } from "../img";

/* Small avatar URL (round, ~40–52px display). */
const av = (file: string) => r2img(file, AVATAR_W);
/* Responsive image props for a before/after R2 file key. */
const ri = (file: string, sizes: string, widths: number[] = BA_WIDTHS) => ({
  src: r2img(file, 1000),
  srcSet: r2srcset(file, widths),
  sizes,
});

/* Real customer text testimonials - placed to reinforce the section above. */
const TEXT_PLACEHOLDERS = [
  // After Science - scientist endorses the root-cause approach
  { name: "Natasha Bloch", avatar: "profile-6.webp", quote: "I feel my hair changed drastically from this dry, frizzy, puffy thing. I found my love for my curly hair again. I feel in this 14 days, my curls came back." },
  // After Results in 2 Weeks - visible results inside 14 days
  { name: "Limor Mills", avatar: "profile-2.webp", quote: "By day 14, I could actually see little baby hairs growing in! My hair feels so much stronger, it's got more volume, and it just looks so much healthier." },
  // After Founder - emotional / confidence
  { name: "Cintia Irtzl", avatar: "profile-5.webp", quote: "My hair started to be shinier and softer so I got back a lot of self-confidence and that felt really nice honestly." },
  // After SelfQualifier - habits over genetics (reassurance for women like me)
  { name: "Gema", avatar: "profile-3.webp", quote: "This challenge showed me that I have to change my habits to get a better hair and that my genetics are going to influence my hair but not so much." },
  // After FAQ - simple, accessible, easy
  { name: "Paola Fernandez", avatar: "profile-7.webp", quote: "It's super simple. You can find all the ingredients on the internet, on Amazon. They're very accessible and I've been having amazing results." },
  // Final reassurance before CTA - fall-in-love-again moment
  { name: "Kate", avatar: "profile-1.webp", quote: "The main thing I could say that this challenge gave me was the most important one and that's that I fell in love. I fell in love with my hair again." },
];

/* Real customer image+text testimonials - placed where the story matches the pitch above. */
const IMAGE_PLACEHOLDERS = [
  // After HowItWorks - the process works, visible after washing
  { name: "Selima", initials: "S", image: "ba-new-3.webp", context: "Daily hair loss · limp hair", text: "I noticed that my hair had a little bit of volume after washing it, which never happened before. It always looked limp and flat, but now I can see a little bit of volume after washing and I experienced less sweat and limpness." },
  // After WhatsIncluded - the DIY shampoo / what's in the bundle delivers
  { name: "Alexia Zacharias", initials: "A", image: "ba-new-2.webp", context: "Hair loss (hypothyroid)", text: "I see much, much difference with the shampoo, with the DIY shampoo." },
  // After NotAboutHair - emotional, reconnecting with self
  { name: "Aurélie Guénué", initials: "A", image: "ba-new-1.webp", context: "Hair loss · irritated scalp", text: "After just a few weeks my scalp feels calmer, I'm losing less hair and more than anything I'm finally reconnecting with myself." },
  // After SelfQualifier (image slot) - hormonal / Hashimoto's, "for women like me"
  { name: "Biljana Lemić", initials: "B", image: "ba-new-4.webp", context: "Hormonal hair loss · Hashimoto's, early menopause", text: "The first time I used it, I could already see the difference. My hair looks shinier, felt stronger and somehow just healthier overall." },
  // After FAQ (image slot) - bouncy, soft, gentle (trust before CTA)
  { name: "Sara Gouveia", initials: "S", image: "ba-new-5.webp", context: "Hair loss · stress", text: "Now that it's dried it actually feels pretty clean and it feels so smooth and so gentle and my curls are just like, hey hello! My hair is usually very flat… but now it's just quite bouncy." },
  // Final-CTA-area - the most powerful story (cancer survivor / family-level change)
  { name: "Rosemary", initials: "R", image: "ba-13.webp", context: "Military veteran · chemotherapy hair loss", text: "This course has changed the way my family thinks, the way I think, and it is going to continue to improve our quality of life." },
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
   mechanical. Same underlying testimonial data - different rendering. */
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
                <img src={av(t.avatar)} alt="" loading="lazy" className="ti-pullquote-avatar" />
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
                  <img {...ri(i.image, "(max-width: 920px) 92vw, 460px")} alt={`${i.name} - ${i.context}`} loading="lazy" />
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
                  <span className="ti-handnote-sig">- {t.name}</span>
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
                <img {...ri(i.image, "(max-width: 760px) 100vw, 50vw")} alt={`${i.name} result`} loading="lazy" />
                <span className="ti-magazine-img-tag">{i.name} · {i.context}</span>
              </div>
            ) : null}
            {t ? (
              <div className="ti-magazine-quote">
                <span className="ti-magazine-eyebrow">Real review · cohort graduate</span>
                <p>"{t.quote}"</p>
                <div className="ti-magazine-byline">
                  <img src={av(t.avatar)} alt="" loading="lazy" />
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
                  <span>- {t.name}</span>
                </div>
              ) : null}
              {i ? (
                <div className="ti-sticky ti-sticky-b">
                  <p>"{i.text}"</p>
                  <span>- {i.name} · {i.context}</span>
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
      <section style={{ background: bg, padding: "28px 0" }}>
        <div className="wrap" style={{ maxWidth: 720, textAlign: "center" }}>
          <Reveal>
            <div className="ti-single-hero ti-single-hero-ba">
              <div className="ti-single-hero-ba-img">
                <img {...ri(i.image, "(max-width: 760px) 92vw, 640px")} alt={`${i.name} - before and after`} loading="lazy" />
              </div>
              <StarRow size={18} style={{ justifyContent: "center" }} />
              <div className="ti-single-hero-name">{i.name} <span className="ti-single-hero-context">· {i.context}</span></div>
              <p className="ti-single-hero-quote">"{i.text}"</p>
              {t ? (
                <div className="ti-single-hero-also">
                  <span className="ti-single-hero-also-label">Also from this week:</span>
                  <span className="ti-single-hero-also-quote">"{t.quote}"</span>
                  <span className="ti-single-hero-also-name">- {t.name}</span>
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
      <section style={{ background: bg, padding: "20px 0 28px" }}>
        <div className="wrap-wide" style={{ maxWidth: 980 }}>
          <Reveal>
            <div className="ti-ribbon">
              {t ? (
                <div className="ti-ribbon-side">
                  <img src={av(t.avatar)} alt="" loading="lazy" className="ti-ribbon-avatar" />
                  <div className="ti-ribbon-body">
                    <StarRow size={12} />
                    <p>"{t.quote}"</p>
                    <span>- {t.name}</span>
                  </div>
                </div>
              ) : null}
              <span className="ti-ribbon-divider" aria-hidden="true" />
              {i ? (
                <div className="ti-ribbon-side ti-ribbon-side-ba">
                  <img {...ri(i.image, "(max-width: 720px) 44vw, 220px", [300, 500, 800])} alt={`${i.name} before and after`} loading="lazy" className="ti-ribbon-thumb ti-ribbon-thumb-ba" />
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

  // default - original compact strip
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