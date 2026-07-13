import type { ReactNode } from "react";
import { Placeholder, R2Image } from "../primitives";

type ReasonProps = {
  eyebrow: string;
  number: string;
  headline: string;
  image: { w: number; h: number; label: string; alt: string; url?: string };
  body: ReactNode;
  quote?: PointerQuoteCardProps;
  band: "peach" | "white";
};

type AvatarTint = "peach" | "periwinkle" | "sage" | "blush" | "sand";

const AVATAR_TINTS: Record<AvatarTint, { bg: string; fg: string }> = {
  peach: { bg: "#FBEDE2", fg: "#B5622F" },
  periwinkle: { bg: "#E8E9F7", fg: "#4A4E9C" },
  sage: { bg: "#E7EFE4", fg: "#4C6B45" },
  blush: { bg: "#F8E6E6", fg: "#B24C57" },
  sand: { bg: "#F1E9DA", fg: "#8A6A3D" },
};

type PointerQuoteCardProps = {
  quote: string;
  name: string;
  location?: string;
  initial: string;
  tint: AvatarTint;
};

function PointerQuoteCard({ quote, name, location, initial, tint }: PointerQuoteCardProps) {
  const t = AVATAR_TINTS[tint];
  return (
    <figure className="v29-pqcard">
      <span className="v29-pqcard__mark" aria-hidden="true">&ldquo;</span>
      <blockquote className="v29-pqcard__quote">{quote}</blockquote>
      <figcaption className="v29-pqcard__foot">
        <span className="v29-pqcard__avatar" style={{ background: t.bg, color: t.fg }} aria-hidden="true">
          {initial}
        </span>
        <span className="v29-pqcard__id">
          <span className="v29-pqcard__name">{name}{location ? `, ${location}` : ""}</span>
        </span>
        <span className="v29-pqcard__stars" aria-label="5 out of 5 stars">★★★★★</span>
      </figcaption>
    </figure>
  );
}

function Reason({ eyebrow, number, headline, image, body, quote, band }: ReasonProps) {
  return (
    <section className={`v29-band v29-band--${band} v29-reason`}>
      <div className="v29-container">
        <div className="v29-eyebrow-row">
          <span className="v29-eyebrow-row__label">{eyebrow}</span>
          <span className="v29-eyebrow-row__rule" aria-hidden="true" />
          <span className="v29-eyebrow-row__num">{number}</span>
        </div>
        <h2 className="v29-reason__h">{headline}</h2>
      </div>
      <div className="v29-container v29-reason__imgwrap">
        {image.url ? (
          <R2Image url={image.url} w={image.w} h={image.h} alt={image.alt} />
        ) : (
          <Placeholder w={image.w} h={image.h} label={image.label} alt={image.alt} />
        )}
      </div>
      <div className="v29-container v29-reason__body">
        {body}
        {quote && <PointerQuoteCard {...quote} />}
      </div>
    </section>
  );
}

export function Reasons() {
  return (
    <>
      <Reason
        eyebrow="UNDERSTANDING YOUR HAIR"
        number="01"
        headline="They Finally Learned What Their Own Hair Actually Needs"
        band="peach"
        image={{ w: 1080, h: 1080, label: "A simple, minimal hair routine", alt: "A simple, minimal hair routine", url: "https://pub.hairqare.co/29SP/point1.webp" }}
        body={
          <>
            <p>For years, they bought whatever influencers recommended or whatever happened to be trending that month.</p>
            <p>Every new bottle promised healthier hair, so they kept switching products, hoping the next one would finally be different.</p>
            <p>Once they understood that <strong>no product works for everyone</strong>, buying became much simpler.</p>
            <p>Inside the <strong>14-Day Haircare Challenge</strong>, you'll learn how to understand your own hair, so you can recognize which ingredients and products suit it, and stop spending money on things your hair never needed in the first place.</p>
          </>
        }
        // customer_id: 3e253d53-da78-4bd6-a356-45ca88336d40
        quote={{
          quote: "I did find a good hair routine, but to me it is difficult to maintain the routine every day as it takes quite some time. I don't know what to look for when I buy products for my hair and it gets frizzy quite fast. So it took me 6 months to finally join this program. I reached a point, where I really wanted to know more about hair.",
          name: "Maria",
          location: "Germany",
          initial: "M",
          tint: "peach",
        }}
      />
      <Reason
        eyebrow="EVERYDAY HABITS"
        number="02"
        headline="They Realized Daily Habits Damage Their Hair More Than The Shampoo They Use"
        band="white"
        image={{ w: 1080, h: 1080, label: "Reading the back label", alt: "Reading the ingredients list on the back of a bottle", url: "https://pub.hairqare.co/28sp/Fallen-hair.webp" }}
        body={
          <>
            <p>They spent years replacing shampoos while repeating the same damaging habits every single day.</p>
            <p><strong>Rough towel drying, brushing wet hair the wrong way, tight hairstyles and too much heat</strong> quietly caused more damage than any shampoo could undo.</p>
            <p>The Challenge shows you which everyday habits are working against your hair and how to replace them with better ones.</p>
            <p>Once you stop causing unnecessary damage, you'll rely <strong>far less on expensive products</strong> to hide it.</p>
          </>
        }
        // customer_id: 1afeca2e-6c62-450a-b327-2b2186b111b3
        quote={{
          quote: "I am also aware that putting your hair in tight hairstyles is not good for it but I genuinely hate my hair down now.",
          name: "Daniela",
          location: "United States",
          initial: "D",
          tint: "periwinkle",
        }}
      />
      <Reason
        eyebrow="SYMPTOM VS CAUSE"
        number="03"
        headline="They Stopped Treating Symptoms And Started Fixing The Cause"
        band="peach"
        image={{ w: 1080, h: 1350, label: "Healthy scalp · close-up", alt: "Healthy hair grows from a healthy scalp", url: "https://pub.hairqare.co/29SP/Point3.webp" }}
        body={
          <>
            <p>They kept buying products for frizz, breakage, dryness or thinning, but every bottle only targeted the symptom they could see.</p>
            <p>The real reason behind those problems was never addressed, so the cycle kept repeating.</p>
            <p>The Challenge helps you understand <strong>what's creating those issues in the first place</strong>, so you can work on the cause instead of constantly buying another temporary fix.</p>
          </>
        }
        // customer_id: 86344a1c-c860-4aee-9319-50251f50ca55
        quote={{
          quote: "I tried so many expensive products and treatments etc, and my hair only looks good when I go to the hair dresser, but 2 days later its frizzy, I dont get my natural waves under control and my hair got thinner and thinner.",
          name: "Alicja",
          initial: "A",
          tint: "sage",
        }}
      />
      <Reason
        eyebrow="MARKETING VS INGREDIENTS"
        number="04"
        headline="They Discovered They Were Buying Products For Marketing Claims, Not Ingredients"
        band="white"
        image={{ w: 1080, h: 1080, label: "Confidence without spending", alt: "Confidence without the constant spending", url: "https://pub.hairqare.co/22-the-haircare/ingredient-list.webp" }}
        body={
          <>
            <p>They believed words like "repair", "strengthening" and "salon quality" meant a product would work.</p>
            <p>In reality, they were making decisions based on <strong>packaging, advertising and viral recommendations</strong> instead of understanding the ingredient list.</p>
            <p>The Challenge teaches you how to <strong>read labels with confidence</strong>, so you'll know what belongs in your routine and what is only clever marketing.</p>
          </>
        }
        // customer_id: cb6795cb-755c-433a-8e52-e6061808553e
        quote={{
          quote: "i was trying different types of shampoos, vegan, paraben free, cruelty free, etc... but lately my hair has felt straw-like and dull and i don't know what else to do",
          name: "Francisca",
          location: "Chile",
          initial: "F",
          tint: "blush",
        }}
      />
      <Reason
        eyebrow="ROUTINE VS TRENDS"
        number="05"
        headline="They Built One Simple Routine Instead Of Chasing Every New Trend"
        band="peach"
        image={{ w: 1080, h: 1350, label: "The result of using less", alt: "The result of using less, not more", url: "https://pub.hairqare.co/29SP/point-5.webp" }}
        body={
          <>
            <p>For years, they chased every new trend, jumping from rosemary oil to rice water to the latest viral shampoo, juggling a shelf full of bottles on every wash day.</p>
            <p>No one ever told them that <strong>healthy hair doesn't need twenty products. It needs the right two.</strong></p>
            <p>Your scalp and your strands need completely different things, and once you understand that, your whole routine gets shorter, not longer.</p>
            <p>The Challenge gives you <strong>one clear routine</strong> built around your own hair, so you spend a few minutes preventing damage instead of hours trying to fix it, and you stop reaching for something new every time a trend appears.</p>
            <p>Within two weeks most women notice <strong>less shedding and softer, shinier hair</strong>, and with less breakage, their hair finally holds onto the length it grows.</p>
          </>
        }
        // customer_id: 655c6650-e8cd-4fc7-827a-2b629f9851b0
        quote={{
          quote: "I have just ended up putting up with it, after trying too many products that keep filling up my cupboard that never end up being used.",
          name: "Bianka",
          location: "Australia",
          initial: "B",
          tint: "sand",
        }}
      />
    </>
  );
}
