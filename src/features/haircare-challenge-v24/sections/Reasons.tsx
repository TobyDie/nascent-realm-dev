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
            <p>Oily at the roots by lunch. Dry and snapping at the ends. At the same time.</p>
            <p>You wash more, and the grease is back by day two. You add more conditioner, and the ends still feel like straw. You've started to feel a little crazy, because nothing you do fixes both at once.</p>
            <p>You're not crazy. And it was never your fault.</p>
          </>
        }
        quote={{ text: "I have tried so many products and treatments and nothing worked for me.", attribution: "Sangheetha, Malaysia" }}
      />
      <Reason
        eyebrow="The Shampoo Treadmill"
        number="02"
        headline="Because No Single Shampoo Has Ever Fixed Both."
        band="white"
        image={{ w: 1080, h: 1080, label: "Reading the back label", alt: "Reading the ingredients list on the back of a bottle", url: "https://pub.hairqare.co/22-the-haircare/ingredient-list.webp" }}
        body={
          <>
            <p>So you went looking for the one that would. The clarifying one. The "sulfate-free" one everyone swears by. The expensive one. The clean one. The volumizing one.</p>
            <p>You've switched a dozen times. Spent a small fortune. And your hair is still doing the exact same thing.</p>
            <p>Here's the part no brand will admit. You weren't failing at the search. The search was never going to work.</p>
          </>
        }
        endSentinelId="v24-ingredient-end"
      />
      <Reason
        eyebrow="The Real Reason"
        number="03"
        headline="Because You've Been Using One Shampoo For Two Different Problems."
        band="peach"
        image={{ w: 1080, h: 1350, label: "Healthy scalp · close-up", alt: "Healthy hair grows from a healthy scalp", url: "https://pub.hairqare.co/22-the-haircare/Mechanism.webp" }}
        body={
          <>
            <p>Your scalp and your strands are not the same thing.</p>
            <p>Your scalp is alive. It makes oil. It's basically a garden. Your strands are not alive. They're dead protein. They're silk.</p>
            <p>You cannot wash a garden and a silk dress with the same bottle and expect both to thrive. One shampoo will always fail one of them.</p>
            <p>That's why you're oily and dry at the same time. And it's why every shampoo you ever tried let you down. You were looking for one answer to two completely different problems.</p>
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
        eyebrow="The Part No One Tells You"
        number="04"
        headline="Because The Fix Isn't One Shampoo. It's Two, Used Your Way."
        band="white"
        image={{ w: 1080, h: 1080, label: "Confidence without spending", alt: "Confidence without the constant spending", url: "https://pub.hairqare.co/22-the-haircare/80.webp" }}
        body={
          <>
            <p>The answer is two shampoos. A gentle one to protect your strands. A reset one to clean your scalp. And yes, the reset one uses the exact ingredient they spent a decade telling you to fear.</p>
            <p>But here's what almost no one tells you. How often you use each one depends entirely on you. Your scalp. Your oil. Your water. Your life.</p>
            <p>There's no universal "wash less." There's only your rhythm. Get that right, and the oily-and-dry nightmare just stops.</p>
          </>
        }
        quote={{ text: "It impacts my bank account trying new products, which just frustrates me.", attribution: "Graduate, United States" }}
      />
      <Reason
        eyebrow="The Simpler Way"
        number="05"
        headline="Because The Women With The Easiest Hair Stopped Searching."
        band="peach"
        image={{ w: 1080, h: 1350, label: "The result of using less", alt: "The result of using less, not more", url: "https://pub.hairqare.co/22-the-haircare/IMG-702-1_4X5.webp" }}
        body={
          <>
            <p>They're not using the most expensive shampoo. They're not using ten products. They figured out their two, found their rhythm, and never thought about the shampoo aisle again.</p>
            <p>Sarah does it for about ten dollars a month.</p>
            <p>No more chasing the next bottle. No more oily by lunch. No more straw ends. Just hair that finally behaves, on your terms.</p>
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
