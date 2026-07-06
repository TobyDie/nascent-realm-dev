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
        headline="Because your hair is growing right now. You're just not keeping it."
        band="peach"
        image={{ w: 1080, h: 1080, label: "A simple, minimal hair routine", alt: "A simple, minimal hair routine", url: "https://pub.hairqare.co/22-the-haircare/expensive.webp" }}
        body={
          <>
            <p>Your hair grows about half an inch every month. It doesn't take breaks. It doesn't stop at your shoulders. Which means in one year, you should have 6 inches of new length.</p>
            <p>So think back to last summer. Is your hair 6 inches longer today?</p>
            <p>If it's the same length, that growth didn't disappear. It broke off. A little at the ends, week after week, at almost exactly the same speed it was growing. That's why it feels like your hair "stopped." It never stopped. It's been growing and breaking at the same time, and the two cancel each other out.</p>
            <p>You don't have a growth problem. You have a keeping problem. And that changes everything, because keeping is something you can actually control.</p>
          </>
        }
        quote={{ text: "My hair stopped growing at a certain level, I would like nourish it better because everything I tried so far is not working.", attribution: "Zei, United Arab Emirates" }}
      />
      <Reason
        eyebrow="The Invisible Leak"
        number="02"
        headline="Because you break it off a little every single day. Never enough to notice."
        band="white"
        image={{ w: 1080, h: 1080, label: "Reading the back label", alt: "Reading the ingredients list on the back of a bottle", url: "https://pub.hairqare.co/22-the-haircare/ingredient-list.webp" }}
        body={
          <>
            <p>Nobody loses 6 inches in one dramatic moment. It goes quietly.</p>
            <p>The brush ripping through a knot in the morning. The towel you wrap tight after the shower. The elastic sitting in the same spot every day. The pillowcase working on your ends all night. The flat iron on hair that was already thirsty.</p>
            <p>Each one takes almost nothing. A few millimeters here, a snapped strand there. You'd never see it happen. But it happens every day, on hair that's already weakened, and by the end of the year it has quietly eaten everything you grew.</p>
            <p>This is why the women who "do everything right" still stay stuck at the same length. The leak isn't one big mistake. It's a dozen tiny ones that were never pointed out to them.</p>
          </>
        }
        endSentinelId="v28-ingredient-end"
      />
      <Reason
        eyebrow="The Oldest Part Of You"
        number="03"
        headline="Because your ends are 3 years old, and nothing in your routine knows that."
        band="peach"
        image={{ w: 1080, h: 1350, label: "Healthy scalp · close-up", alt: "Healthy hair grows from a healthy scalp", url: "https://pub.hairqare.co/22-the-haircare/Mechanism.webp" }}
        body={
          <>
            <p>The hair at your roots is brand new. The hair at your shoulders has been on your head for about 2 years. If it reached your waist, those ends would be 4 or 5 years old.</p>
            <p>That means your ends have survived hundreds of washes, two or three summers of sun, years of brushing, friction, and styling. They are the oldest, most worn part of your hair. They need the most protection.</p>
            <p>And yet your products treat every inch the same. Store-bought formulas are made for the average head, tuned to feel great at the store, not to protect a 3-year-old strand. Many strip your hair harder than it needs, then patch the feeling with a coating, wash after wash. The newest hair shrugs it off. The oldest hair pays for it.</p>
            <p>That's why your hair always gives out at the same point. It's exactly where age meets a routine that was never built for it.</p>
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
        eyebrow="The Reset Button"
        number="04"
        headline="Because trims aren't protecting your length. They're replacing it."
        band="white"
        image={{ w: 1080, h: 1080, label: "Confidence without spending", alt: "Confidence without the constant spending", url: "https://pub.hairqare.co/22-the-haircare/80.webp" }}
        body={
          <>
            <p>"Get regular trims so it grows healthy." You've heard it a hundred times.</p>
            <p>But growth happens at your scalp. The scissors never touch it. Cutting your hair doesn't make it grow faster, it just makes it shorter. What trims actually do is remove the damage after it happened.</p>
            <p>So look at the cycle you've been put in. You grow half an inch a month. Your ends wear down. Then every couple of months, someone cuts off an inch or two "to keep it healthy." You leave the salon with hair the exact length you had last year, feeling like you did something good for it.</p>
            <p>Trims are maintenance for a routine that keeps damaging your ends. They were never a plan for getting past your shoulders. When your ends stop wearing down, the trim stops taking your progress, and the length finally starts to stack.</p>
          </>
        }
        quote={{ text: "I was dealing with like tons of breakage and split ends. I haven't cut my hair like my whole life and it's never gotten past a certain length.", attribution: "Sophie, Verified Student" }}
      />
      <Reason
        eyebrow="The Real Difference"
        number="05"
        headline="Because women with waist-length hair don't have better genetics. They have almost zero breakage."
        band="peach"
        image={{ w: 1080, h: 1350, label: "The result of using less", alt: "The result of using less, not more", url: "https://pub.hairqare.co/22-the-haircare/IMG-702-1_4X5.webp" }}
        body={
          <>
            <p>You've seen her. The woman with hair down her back that looks healthy the whole way down. And you've probably thought what everyone thinks: good genes, lucky her.</p>
            <p>Here's what she actually has: hair that keeps what it grows. She knows her hair profile, so she uses what her hair needs instead of what an ad told her to buy. Her ends aren't being stripped and patched every wash. So her half inch a month simply stays. Give that two years and it looks like a genetic miracle. It's arithmetic.</p>
            <p>I know because my hair is 120cm long. And bleached. And I don't have good hair genetics. I maintain it on about $10 a month, not because I found a magic product, but because I stopped breaking off everything I grew.</p>
            <p>You haven't reached your hair's limit. You've reached your current routine's limit. Those are very different things.</p>
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
