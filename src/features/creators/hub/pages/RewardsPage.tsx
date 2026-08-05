import { Link } from "@tanstack/react-router";
import { CdnImage } from "../../ui/CdnImage";
import { ArrowRightIcon } from "../../ui/Icons";
import { IMG, THUMB_WIDTHS } from "../../images";
import { SUPPORT_EMAIL } from "../../config";
import { EarningsVisualiser } from "../EarningsVisualiser";
import {
  EARN_LEDE,
  EARN_TITLE,
  EARNINGS,
  PAID,
  PAID_FACTS,
  PAID_INTRO,
  PAY_LINKS,
  REWARD_COLUMNS,
  REWARDS,
} from "../../copy/hub";
import { PageFooter, PageHead, Section } from "../primitives";

/** Reward key → the matching /creators card art. */
const REWARD_IMG: Record<string, string | undefined> = {
  "5": IMG.hubPostFive,
  "100k": IMG.hubViews,
  "%": IMG.hubCommission,
};

/** Native aspect ratio per reward image, so none of them get cropped. */
const REWARD_RATIO: Record<string, string> = {
  "5": "aspect-[4/5]",
  "100k": "aspect-[3/4]",
  "%": "aspect-[3/4]",
};

/** /creators/hub/rewards — what you earn, what it adds up to, and how it reaches you. */
export function RewardsPage() {
  return (
    <>
      <PageHead title="Rewards & pay" />

      <Section title={EARN_TITLE}>
        <p className="mb-6 max-w-prose leading-relaxed text-ink/70">{EARN_LEDE}</p>

        {/* Column headings, desktop only — below cs the row stacks into two
            columns and headings would no longer sit above what they name. */}
        <div className="hidden pb-2 text-xs font-medium uppercase tracking-[0.14em] text-ink/45 cs:grid cs:grid-cols-[4.5rem_11.5rem_1fr] cs:gap-x-6">
          <span />
          <span>{REWARD_COLUMNS.doing}</span>
          <span>{REWARD_COLUMNS.getting}</span>
        </div>

        {/* A table, not cards. Bold trigger in a narrow left column against its
          reward on the right scans in seconds; three bordered cards did not.
          The thumbnail is the extra column the old text-only table never had.

          One DOM structure at both sizes: below cs it's two columns with the
          thumb spanning both rows, so label and summary stack beside it; from
          cs the thumb drops to a single row and the label gets a column. */}
        <ul className="border-y border-line">
          {REWARDS.map((r) => (
            <li
              key={r.key}
              className="grid grid-cols-[4.5rem_1fr] items-start gap-x-4 gap-y-1 border-t border-line py-5 first:border-t-0 cs:grid-cols-[4.5rem_11.5rem_1fr] cs:gap-x-6"
            >
              {REWARD_IMG[r.key] && (
                <div
                  className={`row-span-2 w-full overflow-hidden rounded-input bg-sand cs:row-span-1 ${REWARD_RATIO[r.key]}`}
                >
                  <CdnImage
                    src={REWARD_IMG[r.key]!}
                    alt=""
                    sizes="4.5rem"
                    widths={THUMB_WIDTHS}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              {/* h3, not h2: these sit inside the section whose heading is
                EARN_TITLE, so h2 here would flatten the outline. */}
              <h3 className="font-semibold text-ink">{r.label}</h3>
              <div className="min-w-0">
                <p className="leading-relaxed text-ink/70">{r.summary}</p>
                <div className="mt-2 space-y-1 text-sm leading-relaxed text-ink/60">
                  {r.details.map((d) => (
                    <p key={d}>{d}</p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title={EARNINGS.title}>
        <EarningsVisualiser />
      </Section>

      <Section id="paid" title="Getting paid">
        <div className="mb-5 rounded-card border border-line bg-white p-6">
          <p className="mb-1 font-medium text-ink">{PAID_INTRO}</p>
          {PAID_FACTS.map((fact) => (
            <p key={fact} className="flex items-start gap-2.5 py-1.5 font-medium text-ink/80">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-pill bg-sage" />
              {fact}
            </p>
          ))}
        </div>
        <div className="max-w-prose space-y-1.5 leading-relaxed text-ink/70">
          <p>{PAID[0]}</p>
          <p>
            {PAID[1]}{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-flame-deep hover:underline">
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>

        {/* Ranked, not a flat row — the first is what most people are after. */}
        <div className="mt-7">
          <p className="mb-3 font-semibold text-ink">{PAY_LINKS.title}</p>
          <div className="space-y-2">
            {PAY_LINKS.items.map((item, i) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                className={`group flex items-start justify-between gap-4 rounded-input border px-4 py-3 transition-colors hover:border-ink/20 ${
                  i === 0 ? "border-line bg-sand" : "border-line bg-white"
                }`}
              >
                <span className="min-w-0">
                  <span className={`block font-semibold text-ink ${i === 0 ? "" : "text-sm"}`}>
                    {item.label}
                  </span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-ink/60">
                    {item.note}
                  </span>
                </span>
                <ArrowRightIcon
                  width={16}
                  height={16}
                  className="mt-1 shrink-0 text-flame-deep transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <PageFooter current="rewards" />
    </>
  );
}
