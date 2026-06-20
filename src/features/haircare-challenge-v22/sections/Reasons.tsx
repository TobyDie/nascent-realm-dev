import type { ReactNode } from "react";
import { Placeholder, R2Image } from "../primitives";

type ReasonProps = {
  eyebrow: string;
  number: string;
  headline: string;
  image: { w: number; h: number; label: string; alt: string; url?: string };
  body: ReactNode;
  quote?: { text: string; attribution: string };
  band: "peach" | "white";
};

function Reason({ eyebrow, number, headline, image, body, quote, band }: ReasonProps) {
  return (
    <section className={`v22-band v22-band--${band} v22-reason`}>
      <div className="v22-container">
        <div className="v22-eyebrow-row">
          <span className="v22-eyebrow-row__label">{eyebrow}</span>
          <span className="v22-eyebrow-row__rule" aria-hidden="true" />
          <span className="v22-eyebrow-row__num">{number}</span>
        </div>
        <h2 className="v22-reason__h">{headline}</h2>
      </div>
      <div className="v22-container v22-reason__imgwrap">
        {image.url ? (
          <R2Image url={image.url} w={image.w} h={image.h} alt={image.alt} />
        ) : (
          <Placeholder w={image.w} h={image.h} label={image.label} alt={image.alt} />
        )}
      </div>
      <div className="v22-container v22-reason__body">
        {body}
        {quote && (
          <p className="v22-inline-quote">
            <em>"{quote.text}"</em>
            <span className="v22-inline-quote__attr"> {quote.attribution}</span>
          </p>
        )}
      </div>
    </section>
  );
}

export function Reasons() {
  return (
    <>
      <Reason
        eyebrow="The Price Lie"
        number="01"
        headline="Because Expensive Doesn't Mean Effective."
        band="peach"
        image={{ w: 1080, h: 1080, label: "A simple, minimal hair routine", alt: "A simple, minimal hair routine", url: "https://pub.hairqare.co/22-the-haircare/Price.webp" }}
        body={
          <>
            <p>You've been told the next bottle is the one. The $40 shampoo. The $90 serum. The treatment with the name you can't pronounce.</p>
            <p>You bought it. You believed it. Your hair stayed exactly the same.</p>
            <p>Here's what nobody selling it wants you to know: the price has almost nothing to do with the result.</p>
            <p>The expensive bottle and the cheap one are often built from the same handful of ingredients. You're not paying for better hair. You're paying for better packaging.</p>
            <p>Sarah knows, because she was paid to promote them. Brands worth tens of thousands. While her own hair was falling out in the shower.</p>
          </>
        }
        quote={{ text: "I have tried so many products and treatments and nothing worked for me.", attribution: "Sangheetha, Malaysia" }}
      />
      <Reason
        eyebrow="The Ingredient Gap"
        number="02"
        headline="Because The Front Of The Bottle Is Marketing, Not Truth."
        band="white"
        image={{ w: 1080, h: 1080, label: "Reading the back label", alt: "Reading the ingredients list on the back of a bottle", url: "https://pub.hairqare.co/22-the-haircare/Ingredient-.webp" }}
        body={
          <>
            <p>"No sulfates." "No parabens." "Clean." "Natural."</p>
            <p>It sounds like care. It's copywriting.</p>
            <p>The front of the bottle is written to sell you. The real story is on the back, in the ingredients list nobody ever taught you to read.</p>
            <p>And once you can read it, you can't unsee it. So many "clean" products simply swapped one harsh ingredient for three worse ones you've never heard of.</p>
            <p>You were never bad at hair care. You were just reading the wrong side of the bottle.</p>
          </>
        }
      />
      <Reason
        eyebrow="The Real Mechanism"
        number="03"
        headline="Because Products Are Designed To Mask, Not Solve."
        band="peach"
        image={{ w: 1080, h: 1350, label: "Healthy scalp · close-up", alt: "Healthy hair grows from a healthy scalp", url: "https://pub.hairqare.co/22-the-haircare/Mechanism.webp" }}
        body={
          <>
            <p>Here's the part the industry needs you to never figure out.</p>
            <p>Your hair isn't a product problem. It's a biology problem.</p>
            <p>Healthy hair grows from a healthy scalp, fed by what you eat, protected by a routine built for <em>your</em> hair, not the routine an influencer was paid to recommend this month.</p>
            <p>Products sit on the surface. They coat, they smooth, they make today look a little better. But they were never built to change what's happening underneath. They were built to keep you coming back.</p>
            <p>Because an industry doesn't profit from solving your hair. It profits from renting you a result that wears off by the next wash.</p>
            <p>When you finally understand the few things your hair actually needs, something strange happens.</p>
            <p>You stop needing the shelf.</p>
          </>
        }
      />
      <Reason
        eyebrow="The Hidden Cost"
        number="04"
        headline="Because $80 A Month Isn't Just $80."
        band="white"
        image={{ w: 1080, h: 1080, label: "Confidence without spending", alt: "Confidence without the constant spending", url: "https://pub.hairqare.co/22-the-haircare/80.webp" }}
        body={
          <>
            <p>$80. That's what the average woman spends on her hair every single month.</p>
            <p>Not on one miracle product. On the rotation. The new shampoo, the mask, the oil, the thing a video told her to try.</p>
            <p>$80 a month is almost $1,000 a year. Over a lifetime, invested instead, it's more than $300,000.</p>
            <p>That's a house deposit. A career break. The trip you keep saying you'll take "one day."</p>
            <p>All quietly leaking out of your account for products that left your hair exactly where it started.</p>
          </>
        }
        quote={{ text: "It impacts my bank account trying new products, which just frustrates me.", attribution: "Graduate, United States" }}
      />
      <Reason
        eyebrow="The Simpler Way"
        number="05"
        headline="Because The Women With The Best Hair Aren't Using More. They're Using Less."
        band="peach"
        image={{ w: 1080, h: 1350, label: "The result of using less", alt: "The result of using less, not more", url: "https://pub.hairqare.co/22-the-haircare/IMG-702-1_4X5.webp" }}
        body={
          <>
            <p>At some point you stop chasing the perfect product. You just get tired of the shelf.</p>
            <p>The bottles you don't finish. The money you don't get back. The hope you feel in the store and the disappointment you feel by day three.</p>
            <p>The women with the healthiest hair aren't the ones using the most. They're the ones who figured out they needed the least.</p>
            <p>Sarah maintains her hair on two products. About $10 a month. Not because she can't afford more. Because she learned she doesn't need it.</p>
            <p>You're not trying to find the right product.</p>
            <p>You're trying to be done looking.</p>
          </>
        }
      />
    </>
  );
}
