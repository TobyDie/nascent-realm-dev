import "./creators.css";

import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ContentsRail, MobileContents } from "./hub/ContentsRail";
import { Prose, RichText } from "./hub/Prose";
import { AccordionItem } from "./ui/Accordion";
import { ArrowRightIcon, CheckIcon } from "./ui/Icons";
import { CdnImage } from "./ui/CdnImage";
import { COLUMN_WIDTHS, IMG, SMALL_WIDTHS } from "./images";
import { SUPPORT_EMAIL, VIDEO_SUBMIT_FORM_URL } from "./config";
import {
  DONTS,
  DOS,
  EARN_WAYS,
  EARN_INTRO,
  ELIGIBLE,
  ELIGIBLE_INTRO,
  ELIGIBLE_TITLE,
  FAQ_GROUPS,
  IDEAS,
  IDEAS_INTRO,
  INTRO,
  PAID,
  PAID_FACTS,
  PAID_INTRO,
  PROGRAM,
  REWARDS,
  RULES,
  START_STEPS,
  SUPPORT,
} from "./copy/hub";

/** Reward tier badge → the matching /creators card art. */
const REWARD_IMG: Record<string, string | undefined> = {
  "5": IMG.perkGifts,
  "100k": IMG.perkLab,
  "%": IMG.perkEarn,
};

/** Surface B — the whole creator hub on one ungated page. */
export function CreatorHubPage() {
  // Smooth in-page anchor jumps, added to <html> only while the hub is mounted
  // so no other glow page inherits it.
  useEffect(() => {
    document.documentElement.classList.add("hq-creators-smooth");
    return () => document.documentElement.classList.remove("hq-creators-smooth");
  }, []);

  return (
    <div className="hq-creators flex min-h-dvh">
      <ContentsRail />
      <main className="min-w-0 flex-1">
        {/* mobile brand bar (the rail is desktop-only) */}
        <header className="flex items-center justify-between px-5 pb-1 pt-4 cm:hidden">
          <span>
            <span className="font-fraunces text-lg text-ink">Hairqare</span>
            <span className="ml-1 text-sm text-flame-deep">Creators</span>
          </span>
        </header>
        <MobileContents />
        {/* Visual anchor: the same founder banner as /creators, cropped short so
            the hub still opens on content rather than a full hero. */}
        <div className="mx-auto max-w-3xl px-5 pt-6 cm:px-10 cm:pt-8">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-card bg-sand cs:aspect-[21/9]">
            <CdnImage
              src={IMG.creatorsBanner}
              alt="Sarah, founder of Hairqare"
              sizes="(max-width: 1120px) 92vw, 46rem"
              widths={COLUMN_WIDTHS}
              priority
              className="h-full w-full object-cover object-[65%_top] cs:object-[center_20%]"
            />
          </div>
        </div>
        <div id="top" className="mx-auto max-w-3xl px-5 py-10 cm:px-10 cm:py-12">
      {/* ── Header + the one action ─────────────────────────────────────── */}
      <header>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-flame-deep">
          {INTRO.eyebrow}
        </p>
        <h1 className="mt-2 font-fraunces text-head text-ink">{INTRO.title}</h1>
        <div className="mt-3 max-w-prose space-y-1.5 leading-relaxed text-ink/70">
          {INTRO.lede.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </header>

      <section className="mt-7 flex flex-col gap-5 rounded-card bg-ink p-6 text-ivory cs:flex-row cs:items-center cs:justify-between cs:p-7">
        <div>
          <p className="font-fraunces text-xl">{INTRO.action.title}</p>
          <div className="mt-1 max-w-[46ch] space-y-0.5 text-sm leading-relaxed text-ivory/65">
            {INTRO.action.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <a
          href={VIDEO_SUBMIT_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] items-center justify-center gap-2 self-start whitespace-nowrap rounded-pill bg-flame px-6 text-sm font-semibold text-ivory transition-colors hover:bg-flame-deep cs:self-auto"
        >
          {INTRO.action.cta}
          <ArrowRightIcon width={16} height={16} />
        </a>
      </section>

      {/* ── Tier 0: what the program is ─────────────────────────────────── */}
      <TierLabel>The program</TierLabel>

      <Section id="program" n="00" title="The program">
        <div className="max-w-prose space-y-1.5 leading-relaxed text-ink/70">
          {PROGRAM.what.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <h3 className="mt-7 font-fraunces text-xl text-ink">
          {PROGRAM.whyTitle}
        </h3>
        <div className="mt-3 grid gap-5 cs:grid-cols-[1fr_13rem] cs:items-start cs:gap-7">
          <div>
            <div className="max-w-prose space-y-3 leading-relaxed text-ink/70">
              {PROGRAM.why.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            <p className="mt-4 font-fraunces text-2xl text-ink">
              {PROGRAM.signature}
            </p>
          </div>
          <div className="order-first aspect-[4/5] w-full max-w-[13rem] overflow-hidden rounded-card bg-sand cs:order-none">
            <CdnImage
              src={IMG.missionLetter}
              alt="Haircare made simple, for every woman"
              sizes="(max-width: 640px) 92vw, 13rem"
              widths={SMALL_WIDTHS}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <h3 className="mt-8 font-fraunces text-xl text-ink">
          {PROGRAM.waysTitle}
        </h3>
        <ul className="mt-3 space-y-0">
          {PROGRAM.ways.map((w) => (
            <li key={w.label} className="border-t border-line first:border-t-0">
              <a
                href={w.href}
                className="grid gap-0.5 py-3.5 transition-colors hover:text-ink cs:grid-cols-[11rem_1fr] cs:gap-4"
              >
                <span className="font-semibold text-ink">{w.label}</span>
                <span className="text-ink/70">{w.body}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-ink/55">{PROGRAM.waysNote}</p>
        <p className="mt-5 text-sm text-ink/55">
          {PROGRAM.notYetApplied}{" "}
          <Link to="/creators" className="text-flame-deep hover:underline">
            {PROGRAM.notYetLink}
          </Link>
          .
        </p>
      </Section>

      {/* ── Tier 1: the essentials ──────────────────────────────────────── */}
      <TierLabel>The essentials</TierLabel>

      <Section id="start" n="01" title="Start here">
        <p className="mb-6 max-w-prose rounded-input border border-line bg-sand px-4 py-3 text-sm leading-relaxed text-ink/70">
          {INTRO.codeNote}
        </p>
        <ol className="space-y-0">
          {START_STEPS.map((s, i) => (
            <li
              key={s.step}
              className="grid grid-cols-[2rem_1fr] gap-4 border-t border-line py-5 first:border-t-0 first:pt-0 cs:grid-cols-[2.5rem_1fr]"
            >
              <span className="font-fraunces text-2xl text-flame/70">{i + 1}</span>
              <div>
                <p className="font-semibold text-ink">{s.step}</p>
                <div className="mt-1 max-w-prose space-y-1 leading-relaxed text-ink/70">
                  {s.body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="earn" n="02" title="What you earn">
        <p className="mb-3 max-w-prose text-ink/70">{EARN_INTRO}</p>
        <ul className="mb-6 flex flex-wrap gap-2">
          {EARN_WAYS.map((way) => (
            <li
              key={way}
              className="rounded-pill border border-line bg-sand px-4 py-1.5 text-sm font-medium text-ink/80"
            >
              {way}
            </li>
          ))}
        </ul>
        <div className="space-y-4">
          {REWARDS.map((r) => (
            <article
              key={r.badge}
              className="rounded-card border border-line bg-white p-6 cs:p-7"
            >
              {REWARD_IMG[r.badge] && (
                <div className="mb-5 aspect-[16/9] w-full overflow-hidden rounded-card bg-sand">
                  <CdnImage
                    src={REWARD_IMG[r.badge]!}
                    alt=""
                    sizes="(max-width: 1120px) 88vw, 40rem"
                    widths={COLUMN_WIDTHS}
                    className="h-full w-full object-cover object-[center_30%]"
                  />
                </div>
              )}
              <div className="flex items-start gap-4">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-pill font-fraunces text-sm font-semibold ${
                    {
                      sand: "bg-sand text-ink",
                      gold: "bg-gold/[0.16] text-[#8a6d2a]",
                      flame: "bg-flame/[0.12] text-flame-deep",
                    }[r.tone]
                  }`}
                >
                  {r.badge}
                </span>
                <div className="min-w-0">
                  <h3 className="font-fraunces text-xl text-ink">{r.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink/70">{r.summary}</p>
                </div>
              </div>
              <div className="mt-4 space-y-3 border-t border-line pt-4 text-sm leading-relaxed text-ink/60">
                {r.details.map((d) => (
                  <p key={d}>{d}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="paid" n="03" title="Getting paid">
        <div className="mb-5 rounded-card border border-line bg-white p-6">
          <p className="mb-1 font-medium text-ink">{PAID_INTRO}</p>
          {PAID_FACTS.map((fact) => (
            <p
              key={fact}
              className="flex items-start gap-2.5 py-1.5 font-medium text-ink/80"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-pill bg-sage" />
              {fact}
            </p>
          ))}
        </div>
        <Prose>
          {PAID.map((para, i) => (
            <p key={i}>
              <RichText>{para}</RichText>
            </p>
          ))}
        </Prose>
      </Section>

      {/* ── Tier 2: reference ───────────────────────────────────────────── */}
      <TierLabel>Look it up</TierLabel>

      <Section id="eligible" n="04" title={ELIGIBLE_TITLE}>
        <Prose>
          <p>{ELIGIBLE_INTRO}</p>
        </Prose>
        <ul className="mt-4 space-y-3">
          {ELIGIBLE.map((item) => (
            <li key={item} className="flex items-start gap-3 text-ink/80">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-pill bg-sage text-ivory"
                aria-hidden
              >
                <CheckIcon width={13} height={13} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="rules" n="05" title="The rules">
        <Collapsible summary={`The full short list — ${RULES.length} rules`}>
          <ul className="space-y-3">
            {RULES.map((rule) => (
              <li key={rule} className="flex gap-3 text-ink/75">
                <span
                  className="mt-2.5 h-1 w-1 shrink-0 rounded-pill bg-ink/30"
                  aria-hidden
                />
                {rule}
              </li>
            ))}
          </ul>
        </Collapsible>
      </Section>

      <Section id="dos" n="06" title="Do & Don'ts">
        <div className="grid grid-cols-1 gap-4 cs:grid-cols-2">
          <RuleColumn title="Do" items={DOS} tone="do" />
          <RuleColumn title="Don't" items={DONTS} tone="dont" />
        </div>
      </Section>

      <Section id="ideas" n="07" title="Content ideas">
        <Prose>
          <p>{IDEAS_INTRO}</p>
          <ul>
            {IDEAS.map((idea) => (
              <li key={idea}>{idea}</li>
            ))}
          </ul>
        </Prose>
      </Section>

      <Section id="faq" n="08" title="Frequently asked questions">
        <div className="space-y-7">
          {FAQ_GROUPS.map((group) => (
            <div key={group.group}>
              <h3 className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-ink/40">
                {group.group}
              </h3>
              {group.items.map((item) => (
                <AccordionItem key={item.q} q={item.q}>
                  <div className="space-y-1.5">
                    {item.a.map((line) => (
                      <p key={line}>
                        <RichText>{line}</RichText>
                      </p>
                    ))}
                  </div>
                </AccordionItem>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section id="support" n="09" title={SUPPORT.title}>
        <div className="rounded-card border border-line bg-sand p-6 cs:p-7">
          <div className="max-w-prose space-y-1 leading-relaxed text-ink/75">
            {SUPPORT.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-3 inline-flex min-h-[44px] items-center font-fraunces text-xl text-flame-deep underline"
          >
            {SUPPORT_EMAIL}
          </a>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink/60">
            {SUPPORT.wellbeing}
          </p>
        </div>
      </Section>

      <footer className="mt-12 border-t border-line pt-6 text-sm text-ink/55">
        <Link to="/creators/terms" className="text-flame-deep hover:underline">
          Program terms
        </Link>
          </footer>
        </div>
      </main>
    </div>
  );
}

/** Divider that separates what you do from what you look up. */
function TierLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-14 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-ink/35">
      {children}
      <span className="h-px flex-1 bg-line" />
    </p>
  );
}

function Section({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-9 scroll-mt-24 cm:scroll-mt-8">
      <h2 className="mb-5 flex items-baseline gap-3 font-fraunces text-2xl text-ink cs:text-3xl">
        <span className="font-sans text-xs font-medium tracking-[0.18em] text-flame-deep/70">
          {n}
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}

/** Native <details> — zero JS, keyboard-native, and printable when opened. */
function Collapsible({
  summary,
  children,
}: {
  summary: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-card border border-line bg-white [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-medium text-ink marker:content-none">
        {summary}
        <span className="text-sm font-normal text-flame-deep group-open:hidden">
          Show
        </span>
        <span className="hidden text-sm font-normal text-flame-deep group-open:inline">
          Hide
        </span>
      </summary>
      <div className="border-t border-line px-6 py-5">{children}</div>
    </details>
  );
}

function RuleColumn({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "do" | "dont";
}) {
  const isDo = tone === "do";
  return (
    <div className="rounded-card border border-line bg-sand p-6">
      <h3
        className={`mb-4 font-fraunces text-2xl ${
          isDo ? "text-[#4d5c50]" : "text-flame-deep"
        }`}
      >
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-ink/80">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-pill text-ivory ${
                isDo ? "bg-sage" : "bg-flame/70"
              }`}
              aria-hidden
            >
              {isDo ? (
                <CheckIcon width={13} height={13} />
              ) : (
                <span className="block h-0.5 w-2.5 rounded-pill bg-ivory" />
              )}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
