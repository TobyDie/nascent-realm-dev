import { Link } from "@tanstack/react-router";
import { PLATFORM_GUIDE, START, START_STEPS, type StepBlock } from "../../copy/hub";
import { ArrowRightIcon } from "../../ui/Icons";
import { SubmitCta } from "../SubmitCta";
import { Disclosure, PageFooter, PageHead, Section } from "../primitives";

/**
 * /creators/hub/start — the first-day walkthrough, read once.
 *
 * Order matters: what the code and Challenge link *are* comes before the steps
 * that ask you to use them, which is why step 1 can stay to a single line.
 */
export function StartHerePage() {
  return (
    <>
      <PageHead title="Start here" lede={START.lede} />

      {/* "Code" and "link" are jargon to a first-time creator, so both are
          spelled out rather than assumed. */}
      <Section title={START.codeTitle}>
        <div className="rounded-card border border-line bg-white p-6 cs:p-7">
          <p className="max-w-prose leading-relaxed text-ink/70">{START.codeIntro}</p>
          <dl className="mt-4 space-y-4">
            {START.codeItems.map((item) => (
              <div key={item.term} className="border-t border-line pt-4">
                <dt className="font-semibold text-ink">{item.term}</dt>
                <dd className="mt-0.5 max-w-prose leading-relaxed text-ink/70">{item.def}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 max-w-prose space-y-1.5 border-t border-line pt-4 text-sm leading-relaxed text-ink/60">
            {START.codeWhy.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section title={START.stepsTitle}>
        <ol className="space-y-0">
          {START_STEPS.map((s, i) => (
            <li
              key={s.step}
              className="grid grid-cols-[2rem_1fr] gap-4 border-t border-line py-6 first:border-t-0 first:pt-0 cs:grid-cols-[2.5rem_1fr]"
            >
              <span className="font-fraunces text-2xl text-flame/70">{i + 1}</span>
              <div className="min-w-0">
                <p className="font-semibold text-ink">{s.step}</p>
                <div className="mt-1.5 max-w-prose">
                  {s.blocks.map((block, b) => (
                    <Block key={b} block={block} />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <SubmitCta className="mt-8" />

      {/* Rewards & pay, not The program: someone who has just read how to post
          wants to know what it earns them, not the founding story. */}
      <PageFooter current="start" next="rewards" />
    </>
  );
}

/** One piece of step content, styled by kind so the hierarchy reads at a glance. */
function Block({ block }: { block: StepBlock }) {
  switch (block.kind) {
    case "text":
      return (
        <div className="mt-2 space-y-1.5 leading-relaxed text-ink/70 first:mt-0">
          {block.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      );

    case "list":
      return (
        <div className="mt-3 first:mt-0">
          {block.label && <p className="mb-1.5 text-sm font-medium text-ink/80">{block.label}</p>}
          <ul className="space-y-1.5">
            {block.items.map((item) => (
              <li key={item} className="flex gap-2.5 leading-relaxed text-ink/70">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-pill bg-ink/30" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    case "ordered":
      return (
        <div className="mt-3 first:mt-0">
          {block.label && <p className="mb-1.5 text-sm font-medium text-ink/80">{block.label}</p>}
          <ol className="space-y-1.5">
            {block.items.map((item, i) => (
              <li key={item} className="flex gap-2.5 leading-relaxed text-ink/70">
                <span
                  className="mt-0.5 w-4 shrink-0 text-sm font-medium text-flame-deep/70"
                  aria-hidden
                >
                  {i + 1}.
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      );

    case "quote":
      return (
        <div className="mt-3 first:mt-0">
          {block.label && <p className="mb-1.5 text-sm font-medium text-ink/80">{block.label}</p>}
          <blockquote className="border-l-2 border-flame/40 bg-sand/70 py-2.5 pl-4 pr-3 leading-relaxed text-ink/80">
            “{block.text}”
          </blockquote>
        </div>
      );

    case "note":
      return <p className="mt-3 text-sm leading-relaxed text-ink/55 first:mt-0">{block.text}</p>;

    case "links":
      return (
        <div className="mt-3 first:mt-0">
          {block.label && <p className="mb-1.5 text-sm font-medium text-ink/80">{block.label}</p>}
          <div className="grid gap-2 cs:grid-cols-2">
            {block.items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group flex items-start gap-2.5 rounded-input border border-line bg-white px-4 py-3 transition-colors hover:border-ink/20"
              >
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-ink">{item.label}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-ink/60">
                    {item.note}
                  </span>
                </span>
                <ArrowRightIcon
                  width={16}
                  height={16}
                  className="mt-0.5 shrink-0 text-flame-deep transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </div>
        </div>
      );

    case "guide":
      return (
        <Disclosure summary={PLATFORM_GUIDE.summary}>
          <div className="space-y-5">
            {PLATFORM_GUIDE.platforms.map((p) => (
              <div key={p.name}>
                <p className="mb-1.5 text-sm font-semibold text-ink">{p.name}</p>
                <ol className="space-y-1.5">
                  {p.steps.map((step, i) => (
                    <li key={step} className="flex gap-2.5 text-sm leading-relaxed text-ink/70">
                      <span
                        className="mt-0.5 w-4 shrink-0 font-medium text-flame-deep/70"
                        aria-hidden
                      >
                        {i + 1}.
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/70">{p.note}</p>
                <blockquote className="mt-1.5 border-l-2 border-flame/40 bg-sand/70 py-2 pl-3.5 pr-3 text-sm leading-relaxed text-ink/80">
                  “{p.say}”
                </blockquote>
              </div>
            ))}
          </div>
        </Disclosure>
      );
  }
}
