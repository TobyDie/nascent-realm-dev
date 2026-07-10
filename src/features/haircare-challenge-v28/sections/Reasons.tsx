import type { ReactNode } from "react";
import { Placeholder, R2Image } from "../primitives";
import { ConvictionCard } from "./ConvictionCard";

type ReasonProps = {
  eyebrow: string;
  number: string;
  headline: string;
  image: { w: number; h: number; label: string; alt: string; url?: string };
  body: ReactNode;
  quote?: { text: string; attribution: string; photo?: string };
  band: "peach" | "white";
  endSentinelId?: string;
};

type QuoteCardProps = { quote: { text: string; attribution: string; photo?: string } };

function QuoteCard({ quote }: QuoteCardProps) {
  const commaIdx = quote.attribution.indexOf(", ");
  const name = commaIdx === -1 ? quote.attribution : quote.attribution.slice(0, commaIdx);
  const country = commaIdx === -1 ? null : quote.attribution.slice(commaIdx + 2);

  return (
    <figure className="v28-quotecard">
      <div className="v28-quotecard__media">
        {quote.photo ? (
          <img className="v28-quotecard__img" src={quote.photo} alt={name} loading="lazy" />
        ) : (
          <span className="v28-quotecard__mark" aria-hidden="true">&ldquo;</span>
        )}
      </div>
      <div className="v28-quotecard__content">
        <blockquote className="v28-quotecard__text">{quote.text}</blockquote>
        <figcaption className="v28-quotecard__foot">
          <span className="v28-quotecard__stars" aria-label="5 out of 5 stars">★★★★★</span>
          <span className="v28-quotecard__attr">
            <span className="v28-quotecard__name">{name}</span>
            {country && <span className="v28-quotecard__country">, {country}</span>}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

function Reason({ eyebrow, number, headline, image, body, quote, band, endSentinelId }: ReasonProps) {
  return (
    <section className={`v28-band v28-band--${band} v28-reason`}>
      <div className="v28-container">
        <div className="v28-eyebrow-row">
          <span className="v28-eyebrow-row__label">{eyebrow}</span>
          <span className="v28-eyebrow-row__rule" aria-hidden="true" />
          <span className="v28-eyebrow-row__num">{number}</span>
        </div>
        <h2 className="v28-reason__h">{headline}</h2>
      </div>
      <div className="v28-container v28-reason__imgwrap">
        {image.url ? (
          <R2Image url={image.url} w={image.w} h={image.h} alt={image.alt} />
        ) : (
          <Placeholder w={image.w} h={image.h} label={image.label} alt={image.alt} />
        )}
      </div>
      <div className="v28-container v28-reason__body">
        {body}
        {quote && <QuoteCard quote={quote} />}
        {endSentinelId && <div id={endSentinelId} aria-hidden="true" />}
      </div>
    </section>
  );
}

export function Reasons() {
  return (
    <>
      <Reason
        eyebrow="Reason 1"
        number="01"
        headline="They threw away all of their growth serums and supplements"
        band="peach"
        image={{ w: 1254, h: 1254, label: "Shelf of expensive haircare products with price tags", alt: "Expensive serums, shampoos, and creams on a bathroom counter with visible price tags", url: "https://pub.hairqare.co/22-the-haircare/expensive.webp" }}
        body={
          <>
            <p>Most women who want longer hair just buy more products.</p>
            <p>A growth serum. A bond mask. Gummies. A $40 shampoo.<br />But if any of it worked, your hair would already be longer.</p>
            <p>The real problem is <strong>none of it was made for your hair.</strong> It's made for everyone. Some of it even strips your hair, then coats the damage so it feels soft for a day. Next wash, you're back where you started.</p>
            <p>In the first days of the <strong>14-Day Haircare Challenge</strong>, you learn your Unique Hair Profile: what your hair is actually made of, and what it needs.</p>
            <p>Most women realise they can toss half of what they own, keep more of the length they grow, and spend far less than before.</p>
          </>
        }
        quote={{ text: "I found I was already wasting money on products that don't help my hair.", attribution: "Keri, United Kingdom", photo: "https://pub.hairqare.co/glow/hero-avatar-17.webp" }}
      />
      <Reason
        eyebrow="Reason 2"
        number="02"
        headline="They stopped taking advice from people who never grew long hair"
        band="white"
        image={{ w: 1080, h: 1350, label: "Cut hair on a salon floor", alt: "Cut hair clippings scattered on a salon floor after a haircut", url: "https://pub.hairqare.co/28sp/sr4.webp" }}
        body={
          <>
            <p>You've heard it a hundred times: <strong>"Get regular trims to help it grow."</strong><br />But trimming doesn't grow your hair. It keeps you looking neat, and it keeps you coming back to the salon. That's why your hair stays the same length year after year.</p>
            <p>Think about where your hair advice comes from.<br />A hairdresser who sees you every eight weeks. A friend with a bob. An influencer wearing extensions.</p>
            <p>You need to learn from those who have lived the transformation on their own.</p>
            <p>Sarah lost 10 years following advice that didn't work, then figured it out on her own. Now she has <strong>120cm, hip-length hair</strong>, and she teaches women everything she learned so they don't waste a decade too.</p>
          </>
        }
        quote={{ text: "I really hated throwing out my expensive hair products. And feeling that everything the hair care industry tells us is just a load of rubbish. How does my hairdresser not even know these things?", attribution: "Shaney, South Africa", photo: "https://pub.hairqare.co/glow/hero-avatar-14.webp" }}
        endSentinelId="v28-ingredient-end"
      />
      <Reason
        eyebrow="Reason 3"
        number="03"
        headline="They fixed the small daily habits that were damaging their hair for years"
        band="peach"
        image={{ w: 1080, h: 1350, label: "Broken hair in a hairbrush", alt: "Hairbrush full of broken hair strands next to hair ties, a towel, and a flat iron on a bathroom counter", url: "https://pub.hairqare.co/28sp/sr2.webp" }}
        body={
          <>
            <p>It's not your genetics. It's the little things you do every single day.</p>
            <p>Brushing wet hair from the roots down. Rubbing it dry with a towel. The blow dryer too hot and too close. The same tight elastic in the same spot. Sleeping with it rubbing on the pillow.</p>
            <p>None of these breaks your hair in one day. They wear it down slowly, until the ends start breaking and you think, <strong>"that's just how my hair is."</strong></p>
            <p>The <strong>14-Day Challenge</strong> rebuilds these habits one day at a time. Same routine, done right, no extra time in your day.</p>
            <p><strong>93% of women noticed fewer hairs in their brush within the first week.</strong> Once the breakage slows, their hair finally starts getting longer.</p>
          </>
        }
        quote={{ text: "Prior to taking the challenge, I didn't pay too much attention to how daily habits, such as combing or tying hair up, may or may not damage our hair.", attribution: "Mawaddah", photo: "https://pub.hairqare.co/glow/hero-avatar-13.webp" }}
      />
      <ConvictionCard
        avatar="hero-avatar-15.webp"
        name="Grace"
        descriptor="Pharmacist · Day 14"
        quote={"The hardest part was throwing out all the products I thought were good for my hair."}
        bhcId="ddbcc5bb-3670-46e4-9636-0dbf07baf0a0"
      />
      <Reason
        eyebrow="Reason 4"
        number="04"
        headline="They started making their own shampoo and conditioner for about $10 a month"
        band="white"
        image={{ w: 1080, h: 1350, label: "Women holding homemade DIY shampoo bottles", alt: "Collage of women showing off homemade shampoo they mixed themselves", url: "https://pub.hairqare.co/28sp/DIY-Shampoo-making.webp" }}
        body={
          <>
            <p>"Paraben-free." "Sulfate-free." "All natural." Brands use these labels to look safe, then replace those ingredients with other harsh ones that still damage your hair.</p>
            <p>So wash after wash, you keep using something you don't fully understand. <strong>That's the quiet reason your hair never gets healthy enough to grow long.</strong></p>
            <p>That's why women in the challenge stop buying more products and make their own instead. A gentle shampoo and conditioner from a few simple ingredients, matched to their hair type. As their hair changes, they change the recipe too.</p>
            <p>Finally, their hair gets something made for its needs. It feels <strong>softer, looks shinier, and breaks less within days.</strong></p>
          </>
        }
        quote={{ text: "It's very difficult to find the product that will be completely free. I have spent a lot of time reviewing products and it just seems impossible.", attribution: "Anna Bishop, Canada", photo: "https://pub.hairqare.co/glow/hero-avatar-20.webp" }}
      />
      <Reason
        eyebrow="Reason 5"
        number="05"
        headline="They no longer felt like growing long hair was a second job"
        band="peach"
        image={{ w: 1254, h: 1254, label: "A small, simple haircare routine on a bathroom counter", alt: "A few simple haircare tools on a bathroom counter with a woman walking away in the background", url: "https://pub.hairqare.co/28sp/one-product.webp" }}
        body={
          <>
            <p>Add up what you're spending on your dream hair right now.</p>
            <p>The weekend masks. The oils. The gummies. The rice water phase. Plus all the time, only to see the same length every summer.</p>
            <p>It feels this hard because everything above is still working against you. You're spending hours fixing damage instead of a few minutes preventing it.</p>
            <p>After the 14 days, your routine is short and low cost. Wash with the right shampoo, handle it gently, and leave it alone. <strong>Healthy hair doesn't need a long routine.</strong></p>
            <p>Most women notice softer hair within two weeks. After that, your hair just keeps getting longer and longer.</p>
          </>
        }
        quote={{ text: "The steps were simple to implement into my daily routine. Even the ingredients recommended in the program were easy to find and purchase.", attribution: "Rodeelyn, Philippines", photo: "https://pub.hairqare.co/glow/profile-7.webp" }}
      />
      <ConvictionCard
        avatar="hero-avatar-17.webp"
        name="Brooke"
        descriptor="Canada · Day 14"
        quote={"I like that idea of not having to rely on always buying a product."}
        bhcId="d457edad-ef31-46a2-8e1d-3ff27ab65243"
      />
    </>
  );
}
