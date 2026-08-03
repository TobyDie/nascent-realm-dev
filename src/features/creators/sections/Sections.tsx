import { Link } from "@tanstack/react-router";
import { FadeUp } from "../ui/FadeUp";
import { AccordionItem } from "../ui/Accordion";
import { ApplyCTA } from "../ui/ApplyCTA";
import { CdnImage } from "../ui/CdnImage";
import { COLUMN_WIDTHS, IMG } from "../images";
import {
  FAQ,
  FINAL_CTA,
  HERO,
  MISSION,
  PERKS,
  STEPS,
} from "../copy/creators";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-flame-deep">
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ S1 Hero */
export function Hero() {
  return (
    <section id="s1-hero" className="relative bg-ivory">
      {/* Full-bleed banner. Desktop: 16/9 with copy-space on the left for the
          overlay headline. Mobile: 4/5 crop that focuses on Sarah (right side
          of the source) so the hero face is visible above the fold. */}
      <div className="aspect-[4/5] w-full overflow-hidden bg-sand cs:aspect-[16/9]">
        <CdnImage
          src={IMG.creatorsBanner}
          alt="Sarah, founder of Hairqare"
          sizes="100vw"
          priority
          className="h-full w-full object-cover object-[70%_top] cs:object-center"
        />
      </div>
      <div className="cm:absolute cm:inset-0 cm:flex cm:items-center">
        <div className="container-quiet py-12 text-center cs:py-16 cm:py-0 cm:text-left">
          <div className="cm:max-w-[48%]">
            <Eyebrow>{HERO.eyebrow}</Eyebrow>
            <h1 className="mx-auto max-w-4xl font-fraunces text-[clamp(2.25rem,3.4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-ink cm:mx-0">
              {HERO.headline}
            </h1>
            <p className="mx-auto mt-5 max-w-prose text-lg leading-relaxed text-ink/70 cm:mx-0">
              {HERO.sub}
            </p>
            <div className="mt-7 flex justify-center cm:justify-start">
              <ApplyCTA size="lg" />
            </div>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-ink/70 cm:justify-start">
              {HERO.trust.map((t, i) => (
                <span key={t} className="flex items-center gap-3">
                  {i > 0 && <span aria-hidden>·</span>}
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- S2 Mission */
export function Mission() {
  return (
    <section id="s2-mission" className="bg-sand">
      <div className="container-quiet section-pad">
        <FadeUp>
          <p className="mx-auto mb-14 max-w-4xl text-center font-fraunces text-head text-ink">
            {MISSION.pullLine}
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 gap-12 cm:grid-cols-[1fr_0.8fr] cm:items-start">
          <FadeUp className="max-w-prose">
            <div className="text-lg leading-relaxed text-ink/80">
              <p className="first-letter:float-left first-letter:mr-3 first-letter:font-fraunces first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-flame">
                {MISSION.letter[0]}
              </p>
              {MISSION.letter.slice(1).map((para, i) => (
                <p key={i} className="mt-5">
                  {para}
                </p>
              ))}
              <p className="mt-8 font-fraunces text-3xl text-ink">
                {MISSION.signature}
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={80}>
            {/* 4/5 wrapper reserves the box before load; the image is served
                through Cloudflare Image Transformations with a responsive srcset. */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-card bg-ivory">
              <CdnImage
                src={IMG.missionLetter}
                alt="Haircare made simple, for every woman"
                sizes="(max-width: 1120px) 92vw, 36vw"
                widths={COLUMN_WIDTHS}
                className="h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 -rotate-3 rounded-sm bg-flame-deep/90 px-3 py-1 text-xs font-medium uppercase tracking-wide text-ivory">
                {MISSION.tapeLabel}
              </span>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- S3 Perk cards */
export function Perks() {
  return (
    <section id="s3-perks" className="bg-ivory">
      <div className="container-quiet section-pad">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>{PERKS.eyebrow}</Eyebrow>
            <h2 className="font-fraunces text-head text-ink">{PERKS.heading}</h2>
            <p className="mx-auto mt-4 max-w-[640px] text-ink/70">
              {PERKS.intro}
            </p>
          </div>
        </FadeUp>
        <div className="mt-12 grid grid-cols-1 gap-4 cs:grid-cols-2 cs:gap-6 cm:grid-cols-4">
          {PERKS.cards.map((card, i) => (
            <FadeUp as="article" key={card.headline} delay={i * 70}>
              <div className="group flex h-full flex-col text-center">
                <div className="relative aspect-[3/4] overflow-hidden rounded-card bg-sand">
                  <CdnImage
                    src={card.image}
                    alt={card.headline}
                    sizes="(max-width: 768px) 92vw, (max-width: 1120px) 46vw, 23vw"
                    widths={COLUMN_WIDTHS}
                    className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-flame-deep">
                  {card.eyebrow}
                </p>
                <h3 className="mt-2 font-fraunces text-[1.5rem] leading-tight text-ink">
                  {card.headline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {card.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- S5 How it works */
export function HowItWorks() {
  return (
    <section id="s5-how" className="bg-sand">
      <div className="container-quiet section-pad">
        <FadeUp>
          <Eyebrow>{STEPS.eyebrow}</Eyebrow>
        </FadeUp>
        <div className="grid grid-cols-1 gap-8 cm:grid-cols-3 cm:gap-10">
          {STEPS.items.map((step, i) => (
            <FadeUp key={step.n} delay={i * 80}>
              <div className="flex flex-col">
                <span className="flex h-11 w-11 items-center justify-center rounded-pill bg-flame-deep text-lg font-medium text-ivory">
                  {step.n}
                </span>
                <h3 className="mt-5 font-fraunces text-2xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-prose text-ink/70">{step.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp>
          <div className="mt-12">
            <ApplyCTA size="lg" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* S6 "The women you'd join" removed — it held only [VERIFIED STUDENT QUOTE]
   placeholder slots. Recover from git history if real quotes arrive. */

/* ------------------------------------------------------------------- S7 FAQ */
export function Faq() {
  return (
    <section id="s7-faq" className="bg-sand">
      <div className="container-quiet section-pad">
        <FadeUp>
          <Eyebrow>{FAQ.eyebrow}</Eyebrow>
          <h2 className="mb-8 font-fraunces text-head text-ink">
            Good things to know
          </h2>
        </FadeUp>
        <div className="max-w-3xl">
          {FAQ.items.map((item) => (
            <AccordionItem key={item.q} q={item.q}>
              {item.a}
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- S8 Final CTA */
export function FinalCta() {
  return (
    <section id="s8-final" className="bg-ink text-ivory">
      <div className="container-quiet section-pad text-center">
        <FadeUp>
          <h2 className="mx-auto max-w-3xl font-fraunces text-display leading-[1.05]">
            {FINAL_CTA.headline}
          </h2>
          <div className="mx-auto mt-6 max-w-xl space-y-1 text-ivory/70">
            {FINAL_CTA.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="mt-9 flex justify-center">
            <ApplyCTA size="lg" />
          </div>
          <div className="mt-10 flex justify-center gap-6 text-sm text-ivory/55">
            {FINAL_CTA.footerLinks.map((l) => (
              <Link key={l.label} to={l.href} className="hover:text-ivory">
                {l.label}
              </Link>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
