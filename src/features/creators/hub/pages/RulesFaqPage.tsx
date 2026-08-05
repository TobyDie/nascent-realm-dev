import { AccordionItem } from "../../ui/Accordion";
import { CheckIcon } from "../../ui/Icons";
import { SUPPORT_EMAIL } from "../../config";
import {
  ELIGIBLE,
  ELIGIBLE_INTRO,
  ELIGIBLE_TITLE,
  FAQ_GROUPS,
  RULES,
  SUPPORT,
} from "../../copy/hub";
import { Prose, RichText } from "../Prose";
import { Collapsible, PageFooter, PageHead, Section } from "../primitives";

/** /creators/hub/faq — the reference shelf: what counts, the rules, every question. */
export function RulesFaqPage() {
  return (
    <>
      <PageHead
        title="Rules & FAQ"
        lede={["Everything you might need to look up, in one place."]}
      />

      <Section id="eligible" title={ELIGIBLE_TITLE}>
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

      <Section id="rules" title="The rules">
        <Collapsible summary={`The full short list — ${RULES.length} rules`}>
          <ul className="space-y-3">
            {RULES.map((rule) => (
              <li key={rule} className="flex gap-3 text-ink/75">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-pill bg-ink/30" aria-hidden />
                {rule}
              </li>
            ))}
          </ul>
        </Collapsible>
      </Section>

      <Section id="faq" title="Frequently asked questions">
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

      <Section id="support" title={SUPPORT.title}>
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

      <PageFooter current="faq" />
    </>
  );
}
