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
    <section className={`v26-band v26-band--${band} v26-reason`}>
      <div className="v26-container">
        <div className="v26-eyebrow-row">
          <span className="v26-eyebrow-row__label">{eyebrow}</span>
          <span className="v26-eyebrow-row__rule" aria-hidden="true" />
          <span className="v26-eyebrow-row__num">{number}</span>
        </div>
        <h2 className="v26-reason__h">{headline}</h2>
      </div>
      <div className="v26-container v26-reason__imgwrap">
        {image.url ? (
          <R2Image url={image.url} w={image.w} h={image.h} alt={image.alt} />
        ) : (
          <Placeholder w={image.w} h={image.h} label={image.label} alt={image.alt} />
        )}
      </div>
      <div className="v26-container v26-reason__body">
        {body}
        {quote && (
          <p className="v26-inline-quote">
            <em>"{quote.text}"</em>
            <span className="v26-inline-quote__attr"> {quote.attribution}</span>
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
        eyebrow="THE FIT LIE"
        number="01"
        headline="Because The Bottle Your Friend Swears By Did Nothing For Your Hair."
        band="peach"
        image={{ w: 1080, h: 1080, label: "A simple, minimal hair routine", alt: "A simple, minimal hair routine", url: "https://pub.hairqare.co/SP24/shampoo-on-couter.webp" }}
        body={
          <>
            <p>Your friend won't stop raving about it. The influencer swore it changed everything. Your hairdresser sent you home with it. So you bought it, used it exactly how they said, and your hair did nothing.</p>
            <p>You started to wonder if something was wrong with your hair.</p>
            <p>There isn't. That shampoo was made once, in a factory, to sell to millions of women at the same time. It's built for the average scalp and the average hair. It worked for your friend because her hair happened to land near average. It did nothing for yours because your hair isn't average. It's yours.</p>
            <p>When you make it yourself, there's no average to aim at. You build the recipe around your hair, your scalp, your goals. It fits because you made it fit.</p>
          </>
        }
        quote={{ text: "I have tried so many products and treatments and nothing worked for me.", attribution: "Sangheetha, Malaysia" }}
      />
      <Reason
        eyebrow="THE TWO JOBS"
        number="02"
        headline="Because Your Roots Are Greasy By Lunch But Your Ends Are Dry As Straw."
        band="white"
        image={{ w: 1080, h: 1080, label: "Reading the back label", alt: "Reading the ingredients list on the back of a bottle", url: "https://pub.hairqare.co/SP24/Website-page.webp" }}
        body={
          <>
            <p>You washed it this morning. By the afternoon the roots are flat and oily again, and the ends are still dry and rough in your fingers.</p>
            <p>So you've felt a little crazy. The same hair is too oily and too dry at once, and nothing you buy fixes both. Wash more for the grease, the ends get worse. Baby the ends, the roots are greasy by lunch.</p>
            <p>You're not crazy. Your scalp is alive and makes oil. Your ends are dead protein that just need protecting. They never wanted the same thing, and one bottle was always going to pick a side.</p>
            <p>So you stop using one bottle. When you make your own, you make one for the scalp and one for the ends. Both finally get what they need.</p>
          </>
        }
        endSentinelId="v26-ingredient-end"
      />
      <Reason
        eyebrow="THE COVER-UP"
        number="03"
        headline="Because You've Never Once Used The Shampoo Without Reaching For The Conditioner."
        band="peach"
        image={{ w: 1080, h: 1350, label: "Healthy scalp · close-up", alt: "Healthy hair grows from a healthy scalp", url: "https://pub.hairqare.co/SP24/Screenshot-2026-06-26-at-6.37.42-PM.webp" }}
        body={
          <>
            <p>Think about it. You've never finished shampooing and just stepped out of the shower. You reach for the conditioner every single time, automatically, because without it your hair feels like straw and won't even comb.</p>
            <p>You assumed that's just how hair works. It isn't.</p>
            <p>The shampoo strips your hair. The conditioner coats it back up to hide what the shampoo just did. Strip, patch, strip again tomorrow. Two products, forever, for one problem the first one created.</p>
            <p>When your wash stops stripping your hair in the first place, the conditioner has nothing left to cover. You're not managing the damage anymore. You stopped causing it.</p>
            <p>That's what making your own does. A gentle wash that cleans without stripping, so the whole strip-and-patch cycle quietly falls apart.</p>
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
        eyebrow="THE LABEL TRAP"
        number="04"
        headline={'Because You Switched To The "Clean" One And Your Hair Still Didn\'t Change.'}
        band="white"
        image={{ w: 1080, h: 1080, label: "Confidence without spending", alt: "Confidence without the constant spending", url: "https://pub.hairqare.co/SP24/Screenshot-2026-06-26-at-6.58.10-PM.webp" }}
        body={
          <>
            <p>You did the responsible thing. You flipped the bottle around, saw "sulfate-free," "clean," "natural," and felt good about it. You paid a little more. And your hair stayed exactly the same.</p>
            <p>Here's what the front of the bottle never tells you. It's marketing. The real story is on the back, in the list nobody ever taught you to read.</p>
            <p>A lot of "clean" bottles just swap one harsh ingredient for three worse ones, and count on you not checking. Once you can read that list, you can't unsee it.</p>
            <p>The only way to know nothing harsh is in your shampoo is to be the one who put it there. When you make it, the list is short and every word on it is one you chose. Aloe. Green tea. A gentle plant surfactant. Nothing nasty slipped in.</p>
          </>
        }
        quote={{ text: "It impacts my bank account trying new products, which just frustrates me.", attribution: "Graduate, United States" }}
      />
      <Reason
        eyebrow="THE WAY WOMEN ACTUALLY WIN"
        number="05"
        headline={'Because You\'re Tired Of Searching For The "Perfect Shampoo" And Always Being Disappointed.'}
        band="peach"
        image={{ w: 1080, h: 1350, label: "The result of using less", alt: "The result of using less, not more", url: "https://pub.hairqare.co/22-the-haircare/IMG-702-1_4X5.webp" }}
        body={
          <>
            <p>You know the feeling. A bottle runs out, or stops working, or they reformulate it, and you're back in the aisle reading labels, hoping this is finally the one. You've done it a hundred times. It always starts hopeful and ends in the same place.</p>
            <p>At some point you're not looking for a better shampoo anymore. You're just tired of looking.</p>
            <p>The women whose hair finally calmed down stopped looking. They make their own. Aloe, green tea, chamomile, a gentle plant surfactant, things you already half-recognize. A batch takes minutes in the kitchen, makes enough for the whole house, and costs a few dollars.</p>
            <p>And because they made it, they tune it to their own hair. One shampoo to reset, one to maintain. Built around your hair, not a stranger's.</p>
            <p>Sarah keeps the healthiest hair of her life this way. 120cm of bleached hair, on about ten dollars a month.</p>
            <p>Once you learn your own hair, the aisle has nothing left to sell you. That's the whole challenge.</p>
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
