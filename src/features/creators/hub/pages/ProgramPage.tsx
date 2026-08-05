import { Link } from "@tanstack/react-router";
import { CdnImage } from "../../ui/CdnImage";
import { CheckIcon } from "../../ui/Icons";
import { COLUMN_WIDTHS, IMG, SMALL_WIDTHS } from "../../images";
import { PROGRAM } from "../../copy/hub";
import { PageFooter, PageHead, Section } from "../primitives";

/**
 * /creators/hub/program — what this is and what's being asked of you.
 *
 * Deliberately holds no reward amounts. A creator reaching this page has
 * already applied and been accepted, so the job here is to explain the idea,
 * not to sell it or to restate what Rewards & pay already covers.
 */
export function ProgramPage() {
  return (
    <>
      <PageHead title="The program" lede={PROGRAM.what} />

      {/* 16:9 box for a 1672×941 source, so it is neither cropped nor
          stretched. `priority` because it sits directly under the h1 and is
          this page's LCP element. */}
      <div className="aspect-[16/9] w-full overflow-hidden rounded-card bg-sand">
        <CdnImage
          src={IMG.hubProgramBanner}
          alt="Sarah filming herself mixing a haircare recipe in a glass bowl, with aloe, rosemary and oils on the counter"
          sizes="(max-width: 1120px) 92vw, 46rem"
          widths={COLUMN_WIDTHS}
          priority
          className="h-full w-full object-cover"
        />
      </div>

      <Section title={PROGRAM.whyTitle}>
        <div className="grid gap-5 cs:grid-cols-[1fr_13rem] cs:items-start cs:gap-7">
          <div>
            <div className="max-w-prose space-y-3 leading-relaxed text-ink/70">
              {PROGRAM.why.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            <p className="mt-4 font-fraunces text-2xl text-ink">{PROGRAM.signature}</p>
          </div>
          {/* Full width below cs. Capping it at 13rem on a phone left it
              stranded against the left edge with dead space beside it. */}
          <div className="order-first aspect-[4/5] w-full overflow-hidden rounded-card bg-sand cs:order-none cs:max-w-[13rem]">
            <CdnImage
              src={IMG.hubWhyStudents}
              alt="Haircare made simple, for every woman"
              sizes="(max-width: 768px) 92vw, 13rem"
              widths={COLUMN_WIDTHS}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section title={PROGRAM.asksTitle}>
        <ul className="space-y-3">
          {PROGRAM.asks.map((item) => (
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

      <Section title={PROGRAM.rewardsTitle}>
        <div className="grid gap-4 cs:grid-cols-2">
          {PROGRAM.rewardsCards.map((card) => (
            <article
              key={card.eyebrow}
              className="rounded-card border border-line bg-white p-5 cs:p-6"
            >
              {/* Below cs the image sits beside the words — four full-width
                  3:4 images stacked made the page an endless scroll. From cs
                  it goes back on top, where the grid gives each card room.
                  Either way the box matches the art's native 3:4, so nothing
                  is cropped or stretched. */}
              <div className="flex gap-4 cs:block">
                <div className="aspect-[3/4] w-24 shrink-0 overflow-hidden rounded-card bg-sand cs:mb-4 cs:w-full">
                  <CdnImage
                    src={card.image}
                    alt=""
                    sizes="(max-width: 768px) 6rem, 21rem"
                    widths={SMALL_WIDTHS}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-flame-deep">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-1.5 font-fraunces text-xl text-ink">{card.headline}</h3>
                  <p className="mt-1.5 leading-relaxed text-ink/70">{card.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 max-w-prose leading-relaxed text-ink/70">{PROGRAM.rewardsNudge}</p>
        <p className="mt-5 text-sm text-ink/55">
          {PROGRAM.notYetApplied}{" "}
          <Link to="/creators" className="text-flame-deep hover:underline">
            {PROGRAM.notYetLink}
          </Link>
          .
        </p>
      </Section>

      <PageFooter current="program" />
    </>
  );
}
