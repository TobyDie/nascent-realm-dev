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
        eyebrow="The Impossible Hair"
        number="01"
        headline="Because Your Hair Is Oily And Dry At The Same Time."
        band="peach"
        image={{ w: 1080, h: 1080, label: "A simple, minimal hair routine", alt: "A simple, minimal hair routine", url: "https://pub.hairqare.co/22-the-haircare/expensive.webp" }}
        body={
          <>
            <p>Greasy at the roots by lunch. Dry and snapping at the ends by evening.</p>
            <p>You've felt a little crazy, because nothing fixes both at once. Wash more, the grease comes back faster. Condition more, the ends still feel like straw.</p>
            <p>You're not crazy. You've been handed the wrong tool for the job. Every single time.</p>
          </>
        }
        quote={{ text: "I have tried so many products and treatments and nothing worked for me.", attribution: "Sangheetha, Malaysia" }}
      />
      <Reason
        eyebrow="The Real Reason"
        number="02"
        headline="Because You've Been Using One Bottle For Two Different Jobs."
        band="white"
        image={{ w: 1080, h: 1080, label: "Reading the back label", alt: "Reading the ingredients list on the back of a bottle", url: "https://pub.hairqare.co/22-the-haircare/ingredient-list.webp" }}
        body={
          <>
            <p>Your scalp and your strands are not the same thing, and they never wanted the same thing.</p>
            <p>Your scalp is alive. It makes oil. It's a garden. Your strands are not alive. They're dead protein. They're silk.</p>
            <p>No single bottle can wash a garden and protect silk at the same time. One of them always loses. That's why every shampoo you ever tried worked for a week, then turned on you. You weren't failing. You were using one product for two opposite jobs.</p>
          </>
        }
        endSentinelId="v24-ingredient-end"
      />
      <Reason
        eyebrow="The Label Lie"
        number="03"
        headline={'Because "Clean" And "Sulfate-Free" Were Never Made For You.'}
        band="peach"
        image={{ w: 1080, h: 1350, label: "Healthy scalp · close-up", alt: "Healthy hair grows from a healthy scalp", url: "https://pub.hairqare.co/22-the-haircare/Mechanism.webp" }}
        body={
          <>
            <p>So you reached for the "better" bottle. The sulfate-free one. The clean one. The natural one everyone swears by.</p>
            <p>Here's what the front never tells you. "Sulfate-free" doesn't mean gentle. It usually means they swapped the sulfate for a cheaper surfactant that strips your hair just as hard, then slipped a preservative like phenoxyethanol high up the list, where it has no business being.</p>
            <p>And even the "good" bottle was mixed in a factory for the average head of hair. Not your scalp. Not your water. Not your hair. It was never going to be the one, because it was never made for you.</p>
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
        image={{ w: 1080, h: 1080, label: "Confidence without spending", alt: "Confidence without the constant spending", url: "https://pub.hairqare.co/22-the-haircare/80.webp" }}
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
        eyebrow="The Way Women Actually Win"
        number="05"
        headline="Because The Women With The Healthiest Hair Stopped Buying And Started Making."
        band="peach"
        image={{ w: 1080, h: 1350, label: "The result of using less", alt: "The result of using less, not more", url: "https://pub.hairqare.co/22-the-haircare/IMG-702-1_4X5.webp" }}
        body={
          <>
            <p>The women whose hair finally calmed down aren't using a fancier bottle. They make their own.</p>
            <p>Two simple shampoos from ingredients you already half-recognize. Aloe vera. Green tea. Chamomile. A gentle plant surfactant. Nothing on the label you can't pronounce. They mix a batch in the kitchen in minutes, enough for themselves and their whole family, for a few dollars.</p>
            <p>And because they make it, they can tune it to their own hair, instead of the average stranger's. Sarah keeps the healthiest hair of her life this way, for about ten dollars a month.</p>
            <p>The only thing you have to learn first is your own hair. That's the whole point of the challenge.</p>
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
