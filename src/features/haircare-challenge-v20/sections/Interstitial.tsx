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
  // 0 - pull-quote after SocialProof
  { name: "Aubrie St. Louis", avatar: "profile-6.webp", quote: "In just 14 days, my hair feels incredibly soft, looks so much shinier, and the breakage has significantly reduced. I feel so much more confident and beautiful now; it's truly a game-changer for my self-esteem." },
  // 1 - polaroid-duo after Founder
  { name: "Mariana Lopez Cervantes", avatar: "profile-2.webp", quote: "I absolutely loved the 14 day hair care challenge. I wish it was longer… I definitely feel like it has a lot more volume." },
  // 2 - magazine-split after ResultsIn2Weeks
  { name: "Sabrina", avatar: "profile-5.webp", quote: "I have to say that after this already 14 days I can see results. Already they have, you know, like not oily but they are like more rich." },
  // 3 - sticky-wall after ReviewedBy
  { name: "Marisel Kigembe", avatar: "profile-3.webp", quote: "Day by day… I got it - and making my own shampoo felt powerful!" },
  // 4 - single-hero (also-from quote)
  { name: "Léa", avatar: "profile-7.webp", quote: "My hair improved over the 14 days… I think my hair is more, it's shinier… now I'm very happy with the way my hair looks and I'm looking forward to use my shampoo again." },
  // 5 - ribbon before FinalCta
  { name: "Johanna Fall", avatar: "profile-1.webp", quote: "So happy I joined this, it's life changing! My scalp and hair feels amazing already, the scalp feels relaxed and the hair feels so soft and shiny. Thank you so much!" },
];

/* Real customer image+text testimonials - placed where the story matches the pitch above. */
const IMAGE_PLACEHOLDERS = [
  // 0 - (unused render slot, kept for parity)
  { name: "Haydée Fernández", initials: "H", image: "ba-new-3.webp", context: "Frizz · wants shine & volume", text: "As you can see my hair is shiny - it feels super soft, it has volume." },
  // 1 - polaroid-duo
  { name: "Lina Cleys", initials: "L", image: "ba-new-2.webp", context: "Curly hair · breakage, never grew long", text: "I really feel like the tips I got in this course are gonna help me so much, so much further… I'm really happy I signed up for it and this whole thing made me so excited that yeah I just want to work more on it." },
  // 2 - magazine-split
  { name: "Celeste Ku", initials: "C", image: "ba-new-1.webp", context: "Dream of long hair · frizzy, split ends", text: "I tried aloe vera gel and I made my own shampoo. It was fun… and the result was amazing, at least for me." },
  // 3 - sticky-wall
  { name: "Ariadne Reyna Cruz Nava", initials: "A", image: "ba-new-4.webp", context: "Wavy hair · general hair health", text: "I feel my hair that is really soft… I really feel like it was so much easier to be able to comb my hair and as you can see I have a lot of volume, my wavy hair just, it was perfect - I didn't do much, just went out of the shower and combed my hair." },
  // 4 - single-hero
  { name: "Dani Steffan", initials: "D", image: "ba-new-5.webp", context: "Frizz · dry hair · long-hair goals", text: "As you can see I've got quite long hair and I just can't wait to keep improving its look and luster every day and making me feel more confident and beautiful." },
  // 5 - ribbon before FinalCta
  { name: "Ana", initials: "A", image: "ba-13.webp", context: "Dyed-damage repair · length growth", text: "My hair has never been so smooth… it made my hair so smooth and so amazing feeling straight after the wash after the first use." },
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