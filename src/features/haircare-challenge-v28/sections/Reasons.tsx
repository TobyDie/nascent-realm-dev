import type { ReactNode } from "react";
import { Placeholder, R2Image } from "../primitives";
import { ConvictionCard } from "./ConvictionCard";

type ReasonProps = {
  eyebrow: string;
  number: string;
  headline: string;
  image: { w: number; h: number; label: string; alt: string; url?: string };
  body: ReactNode;
  quote?: { text: string; attribution: string };
  band: "peach" | "white";
  endSentinelId?: string;
};

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
        {quote && (
          <p className="v28-inline-quote">
            <em>"{quote.text}"</em>
            <span className="v28-inline-quote__attr"> {quote.attribution}</span>
          </p>
        )}
        {endSentinelId && <div id={endSentinelId} aria-hidden="true" />}
      </div>
    </section>
  );
}

export function Reasons() {
  return (
    <>
      <Reason
        eyebrow="The Math"
        number="01"
        headline="They threw away all of their growth serums and supplements"
        band="peach"
        image={{ w: 1254, h: 1254, label: "Shelf of expensive haircare products with price tags", alt: "Expensive serums, shampoos, and creams on a bathroom counter with visible price tags", url: "https://pub.hairqare.co/22-the-haircare/expensive.webp" }}
        body={
          <>
            <p>Most women who want longer hair end up buying more and more products.</p>
            <p>A growth serum, a bond repair mask, gummies, a $40 shampoo. But if those products really worked, your hair would already be longer.</p>
            <p>The real problem is that those products weren't made for your hair. They're made for everyone. They don't match your unique hair profile, so they rarely help. Some can even make things worse.</p>
            <p>They strip your hair, then cover the damage so it feels soft for a day or two. After the next wash, you're back where you started.</p>
            <p>During the first few days of the 14-Day Haircare Challenge, women learn their Unique Hair Profile. They learn what their hair is made of, what it's missing, and what it really needs. They also learn how to read an ingredient list in seconds.</p>
            <p>Most women realise they don't need half the products they own. They stop wasting money, keep more of the length they grow, and spend much less than they did before.</p>
          </>
        }
        quote={{ text: "I found I was already wasting money on products that don't help my hair.", attribution: "Keri, United Kingdom" }}
      />
      <Reason
        eyebrow="The Invisible Leak"
        number="02"
        headline="They stopped taking advice from people who never grew long hair"
        band="white"
        image={{ w: 1080, h: 1350, label: "Cut hair on a salon floor", alt: "Cut hair clippings scattered on a salon floor after a haircut", url: "https://pub.hairqare.co/28sp/sr4.webp" }}
        body={
          <>
            <p>Think about where your hair advice comes from.</p>
            <p>A hairdresser who sees you every eight weeks? A friend with a bob? An influencer wearing extensions?</p>
            <p>You've probably heard this before: "Get regular trims to help your hair grow."</p>
            <p>Your hairdresser tells this because it keeps your hair looking neat and brings you back to the salon. But trimming doesn't actually make your hair grow longer.</p>
            <p>Millions of women follow this kind of wrong advice, that's why your hair stays the same length year after year.</p>
            <p>You need to learn from those who have lived the transformation on their own.</p>
            <p>Sarah lost 10 years following advice that didn't work. In the end, she had to figure it out on her own. Now that she has 120 cm, hip-length hair, she shares everything she learned so other women don't have to waste a decade and thousands of dollars.</p>
          </>
        }
        quote={{ text: "I really hated throwing out my expensive hair products. And feeling that everything the hair care industry tells us is just a load of rubbish. How does my hairdresser not even know these things?", attribution: "Shaney, South Africa" }}
        endSentinelId="v28-ingredient-end"
      />
      <Reason
        eyebrow="The Oldest Part Of You"
        number="03"
        headline="They fixed the small daily habits that were damaging their hair for years"
        band="peach"
        image={{ w: 1080, h: 1350, label: "Broken hair in a hairbrush", alt: "Hairbrush full of broken hair strands next to hair ties, a towel, and a flat iron on a bathroom counter", url: "https://pub.hairqare.co/28sp/sr2.webp" }}
        body={
          <>
            <p>It's not your genetics. It's the little things you do every single day.</p>
            <p>Brushing from the roots down through wet hair. Rubbing it dry with a towel. The blow dryer too hot and too close. The same tight elastic in the same spot. Sleeping with your hair rubbing on the pillow. Going into a hot sauna without covering your hair.</p>
            <p>None of these breaks your hair in one day. They slowly wear it down. Then one day your ends start breaking, your hair gets thinner, and you think, "That's just how my hair is."</p>
            <p>The 14-Day Challenge helps you change these habits, one day at a time.</p>
            <p>You learn the right way to brush, dry, tie, and sleep with your hair. It doesn't add any extra time to your day. You do the same things, only the right way.</p>
            <p>93% of women noticed fewer hairs in their brush within the first week. Once the breakage slows down, their hair finally starts getting longer.</p>
          </>
        }
        quote={{ text: "Prior to taking the challenge, I didn't pay too much attention to how daily habits, such as combing or tying hair up, may or may not damage our hair.", attribution: "Mawaddah" }}
      />
      <ConvictionCard
        avatar="hero-avatar-15.webp"
        name="Grace"
        descriptor="Pharmacist · Day 14"
        quote={"The hardest part was throwing out all the products I thought were good for my hair."}
        bhcId="ddbcc5bb-3670-46e4-9636-0dbf07baf0a0"
      />
      <Reason
        eyebrow="The Reset Button"
        number="04"
        headline="They started making their own shampoo and conditioner for about $10 a month"
        band="white"
        image={{ w: 1080, h: 1350, label: "Women holding homemade DIY shampoo bottles", alt: "Collage of women showing off homemade shampoo they mixed themselves", url: "https://pub.hairqare.co/28sp/DIY-Shampoo-making.webp" }}
        body={
          <>
            <p>Brands use labels like "paraben-free," "sulfate-free," and "all natural" to make their products look safe. But they often replace those ingredients with other harsh chemicals that can still damage your hair.</p>
            <p>So wash after wash you keep using something you don't fully understand, and that's the quiet reason your hair never gets healthy enough to grow long.</p>
            <p>That's why women in the challenge stop buying more products and make their own instead. They make a gentle shampoo and conditioner from a few simple ingredients, matched to their hair type.</p>
            <p>As their hair changes, they change the recipe too. Their hair finally gets something made for its needs, so it feels softer, looks shinier, and breaks less within days.</p>
          </>
        }
        quote={{ text: "It's very difficult to find the product that will be completely free. I have spent a lot of time reviewing products and it just seems impossible.", attribution: "Anna Bishop, Canada" }}
      />
      <Reason
        eyebrow="The Real Difference"
        number="05"
        headline="They no longer felt like growing long hair was a second job"
        band="peach"
        image={{ w: 1254, h: 1254, label: "A small, simple haircare routine on a bathroom counter", alt: "A few simple haircare tools on a bathroom counter with a woman walking away in the background", url: "https://pub.hairqare.co/28sp/one-product.webp" }}
        body={
          <>
            <p>Add up what you're spending to achieve your dream hair.</p>
            <p>The weekend hair masks. The oils. The gummies. The rice water phase. Then think about the time you spend on all of it, only to see the same hair length every summer.</p>
            <p>It feels this hard because those everyday habits are still working against you. You're spending hours trying to fix the damage instead of a few minutes stopping it in the first place.</p>
            <p>After the 14 days, your routine is short and low cost. Wash your hair with the right shampoo, handle it gently, and leave it alone. Healthy hair doesn't need a long routine. Within two weeks, most women notice softer hair and fewer hairs in their brush. After that, your hair keeps getting longer and longer.</p>
          </>
        }
        quote={{ text: "The steps were simple to implement into my daily routine. Even the ingredients recommended in the program were easy to find and purchase.", attribution: "Rodeelyn, Philippines" }}
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
