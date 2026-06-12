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
  { name: "Limor Mills", avatar: "profile-2.webp", quote: "By day 14, I could actually see baby hairs growing in and my length finally moving - my hair feels stronger, fuller, and like it's actually going somewhere." },
  // After Founder - emotional / confidence
  { name: "Cintia Irtzl", avatar: "profile-5.webp", quote: "My hair started to be shinier and softer so I got back a lot of self-confidence and that felt really nice honestly." },
  // After SelfQualifier - habits over genetics (reassurance for women like me)
  { name: "Gema", avatar: "profile-3.webp", quote: "This challenge showed me that I have to change my habits to get a better hair and that my genetics are going to influence my hair but not so much." },
  // After FAQ - simple, accessible, easy
  { name: "Paola Fernandez", avatar: "profile-7.webp", quote: "It's super simple. You can find all the ingredients on the internet, on Amazon. They're very accessible and I've been having amazing results." },
  // Final reassurance before CTA - control/understanding moment
  { name: "Kate", avatar: "profile-1.webp", quote: "The biggest thing this gave me is that I finally understand my hair. I'm not guessing or buying the next bottle anymore - I'm actually building it." },
];

/* Real customer image+text testimonials - placed where the story matches the pitch above. */
const IMAGE_PLACEHOLDERS = [
  // After HowItWorks - limp/flat hair, finally volume (very 25–34 pain)
  { name: "Selima", initials: "S", image: "ba-new-3.webp", context: "Limp, flat hair · spending more, seeing less", text: "My hair always looked flat and lifeless no matter what I spent. After washing now, I can actually see volume - and the constant greasiness is gone too." },
  // After WhatsIncluded - DIY shampoo / damage from colored hair
  { name: "Alexia Zacharias", initials: "A", image: "ba-new-2.webp", context: "Color-damaged, shedding daily", text: "I can see so much difference with the DIY shampoo - my color-treated hair feels softer and stronger, and the daily shedding has dropped off." },
  // After NotAboutHair - postpartum recovery
  { name: "Aurélie Guénué", initials: "A", image: "ba-new-1.webp", context: "Postpartum shedding · irritated scalp", text: "After just a few weeks my scalp feels calmer, the postpartum shedding has slowed down, and more than anything I'm finally feeling like myself again." },
  // After SelfQualifier (image slot) - damage from bleach/heat, length plateau
  { name: "Biljana Lemić", initials: "B", image: "ba-new-4.webp", context: "Years of bleach & heat · length plateau", text: "First time I used it I could already see the difference - shinier, stronger, and for the first time in years it actually feels like my length is moving." },
  // After FAQ (image slot) - stress + texture change → bouncy
  { name: "Sara Gouveia", initials: "S", image: "ba-new-5.webp", context: "Stress shedding · flat lifeless hair", text: "Now that it's dried it feels so clean, so smooth and gentle, and my curls are like, hey hello! My hair was always flat - now it's bouncy." },
  // Final-CTA-area - long-term, knowledge-as-an-asset story
  { name: "Rosemary", initials: "R", image: "ba-13.webp", context: "Spent years buying products that didn't work", text: "This course changed the way I think about my hair. I'm not buying the next bottle anymore - I finally know what I'm doing." },
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
      <section style={{ background: bg, padding: "56px 0" }}>
        <div className="wrap" style={{ maxWidth: 720, textAlign: "center" }}>
          <Reveal>
            <div className="ti-single-hero">
              <div className="ti-single-hero-avatar">
                <img {...ri(i.image, "180px", [200, 400, 700])} alt={i.name} loading="lazy" />
              </div>
              <StarRow size={18} style={{ justifyContent: "center" }} />
              <p className="ti-single-hero-quote">"{i.text}"</p>
              <div className="ti-single-hero-name">{i.name}</div>
              <div className="ti-single-hero-context">{i.context}</div>
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
      <section style={{ background: bg, padding: "28px 0" }}>
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
                <div className="ti-ribbon-side">
                  <img {...ri(i.image, "120px", [200, 400, 700])} alt="" loading="lazy" className="ti-ribbon-thumb" />
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