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
    <section className={`v24-band v24-band--${band} v24-reason`}>
      <div className="v24-container">
        <div className="v24-eyebrow-row">
          <span className="v24-eyebrow-row__label">{eyebrow}</span>
          <span className="v24-eyebrow-row__rule" aria-hidden="true" />
          <span className="v24-eyebrow-row__num">{number}</span>
        </div>
        <h2 className="v24-reason__h">{headline}</h2>
      </div>
      <div className="v24-container v24-reason__imgwrap">
        {image.url ? (
          <R2Image url={image.url} w={image.w} h={image.h} alt={image.alt} />
        ) : (
          <Placeholder w={image.w} h={image.h} label={image.label} alt={image.alt} />
        )}
      </div>
      <div className="v24-container v24-reason__body">
        {body}
        {quote && (
          <p className="v24-inline-quote">
            <em>"{quote.text}"</em>
            <span className="v24-inline-quote__attr"> {quote.attribution}</span>
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
        eyebrow="Made For The Average"
        number="01"
        headline="Because Product Recommendations From Friends, Influencers Or Hairdressers Did Nothing For Yours."
        band="peach"
        image={{ w: 1080, h: 1080, label: "A simple, minimal hair routine", alt: "A simple, minimal hair routine", url: "https://pub.hairqare.co/SP24/Website-page.webp" }}
        body={
          <>
            <p>A shampoo is formulated to sell to millions of people. So it's made for the average woman, with the average scalp and the average hair.</p>
            <p>Your hair isn't average. Your hair is unique. That's why the bottle your friend swears by did nothing for you.</p>
            <p>When you make it yourself, you can tailor the formula and recipe to fit your exact hair needs and goals.</p>
          </>
        }
        quote={{ text: "I have tried so many products and treatments and nothing worked for me.", attribution: "Sangheetha, Malaysia" }}
      />
      <Reason
        eyebrow="The Impossible Hair"
        number="02"
        headline="Because Your Roots Are Greasy By Lunch But Your Ends Are Dry As Straw."
        band="white"
        image={{ w: 1080, h: 1080, label: "Reading the back label", alt: "Reading the ingredients list on the back of a bottle", url: "https://pub.hairqare.co/SP24/Screenshot-2026-06-26-at-6.56.54-PM.webp" }}
        body={
          <>
            <p>Your scalp and your strands never want the same thing.</p>
            <p>Your scalp is alive. It makes oil. It needs cleansing. Your ends are dead protein. They're dry and fragile, and they need protecting, not stripping.</p>
            <p>One bottle can't deep-clean oily roots and protect dry ends in the same wash. One side always loses. Wash harder for the roots, the ends snap. Go gentle for the ends, the roots are greasy by lunch.</p>
            <p>When you make your own, you make one for the scalp and one for the ends. Both get what they need.</p>
          </>
        }
        endSentinelId="v24-ingredient-end"
      />
      <Reason
        eyebrow="The Label Lie"
        number="03"
        headline={'Because You Switched To The "Clean" One And Your Hair Still Didn\'t Change.'}
        band="peach"
        image={{ w: 1080, h: 1350, label: "Healthy scalp · close-up", alt: "Healthy hair grows from a healthy scalp", url: "https://pub.hairqare.co/SP24/Screenshot-2026-06-26-at-6.37.42-PM.webp" }}
        body={
          <>
            <p>"Sulfate-free." "Clean." "Natural." It sounds like care, but it's marketing. The front of the bottle is written to sell you.</p>
            <p>A lot of "clean" bottles just swap one harsh ingredient for three worse ones. They count on you not reading the ingredients list. Once you can read it, you can't unsee it.</p>
            <p>The only way to know nothing harsh is in your shampoo is to make it yourself. When you make it yourself, the list is short and you chose everything you want and nothing you don't want. Aloe. Green tea. A gentle plant surfactant. Nothing nasty slipped in.</p>
          </>
        }
      />
      <ConvictionCard
        avatar="hero-avatar-15.webp"
        name="Grace"
        descriptor="Pharmacist · Day 14"
        quote={"The hardest part was throwing out all the products I thought were good for my hair."}
        bhcId="ddbcc5bb-3670-46e4-9636-0dbf07baf0a0"
      />
      <Reason
        eyebrow="The Patch"
        number="04"
        headline="Because Conditioner Is The Bandage For A Wound The Shampoo Created."
        band="white"
        image={{ w: 1080, h: 1080, label: "Confidence without spending", alt: "Confidence without the constant spending", url: "https://pub.hairqare.co/SP24/Screenshot-2026-06-26-at-6.58.10-PM.webp" }}
        body={
          <>
            <p>Ever notice you can't use the shampoo without reaching for the conditioner? That's not an accident.</p>
            <p>A harsh shampoo strips your hair. So they sell you a conditioner to coat it back up and hide what the shampoo just did. Strip, patch, repeat. Two products, forever, for one problem they manufactured.</p>
            <p>When your wash stops stripping your hair in the first place, the whole cycle falls apart. You stop patching what was never supposed to be broken.</p>
          </>
        }
        quote={{ text: "It impacts my bank account trying new products, which just frustrates me.", attribution: "Graduate, United States" }}
      />
      <Reason
        eyebrow="Done Starting Over"
        number="05"
        headline="Because You're Tired Of Starting Over Every Time A Bottle Lets You Down."
        band="peach"
        image={{ w: 1080, h: 1350, label: "The result of using less", alt: "The result of using less, not more", url: "https://pub.hairqare.co/22-the-haircare/IMG-702-1_4X5.webp" }}
        body={
          <>
            <p>You're tired of searching for another shampoo in the hopes it will fix your hair problems.</p>
            <p>The women whose hair finally calmed down stopped searching. They make their own. Aloe, green tea, chamomile, a gentle plant surfactant — things you may already have at home. A batch takes minutes in the kitchen, makes enough for you and your entire family, and costs a few dollars.</p>
            <p>And because you made it, you can tune it to your own hair.</p>
          </>
        }
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
