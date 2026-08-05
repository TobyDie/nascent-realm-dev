import { Link } from "@tanstack/react-router";
import { CdnImage } from "../../ui/CdnImage";
import { ArrowRightIcon, HomeIcon } from "../../ui/Icons";
import { COLUMN_WIDTHS, IMG } from "../../images";
import { SUPPORT_EMAIL } from "../../config";
import { HUB_TABS } from "../../copy/hub-nav";
import { INTRO, WELCOME } from "../../copy/hub";
import { SubmitCta } from "../SubmitCta";
import { PageHead, Section } from "../primitives";

/**
 * /creators/hub — the home base.
 *
 * Short on purpose. A creator lands here every week, so the three things that
 * matter are the welcome, the submit button, and the way in to everything
 * else. The first-day walkthrough lives on Start here.
 */
export function WelcomePage() {
  return (
    <>
      {/* Visual anchor: the same founder banner as /creators, cropped short so
          the hub still opens on content rather than a full hero. */}
      <div className="mb-8 aspect-[16/9] w-full overflow-hidden rounded-card bg-sand cs:aspect-[21/9]">
        <CdnImage
          src={IMG.creatorsBanner}
          alt="Sarah, founder of Hairqare"
          sizes="(max-width: 1120px) 92vw, 46rem"
          widths={COLUMN_WIDTHS}
          priority
          className="h-full w-full object-cover object-[65%_top] cs:object-[center_20%]"
        />
      </div>

      <PageHead eyebrow={INTRO.eyebrow} title={INTRO.title} lede={INTRO.lede} />

      {/* Sand panel with a flame rule and an icon, not body copy — this is the
          one thing on the page a creator has to act on before they leave, and
          as plain paragraphs it sat between a lede and a CTA and got skipped.
          Sand rather than a flame tint so it doesn't fight the dark CTA
          directly below it. */}
      <aside className="rounded-card border border-line border-l-4 border-l-flame bg-sand p-6 cs:p-7">
        <div className="flex gap-4">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-ivory text-flame-deep"
            aria-hidden
          >
            <HomeIcon width={20} height={20} />
          </span>
          <div className="min-w-0 max-w-prose">
            <p className="font-fraunces text-xl text-ink">{WELCOME.homeBase.title}</p>
            <p className="mt-1.5 leading-relaxed text-ink/70">{WELCOME.homeBase.body}</p>
            <p className="mt-2.5 font-medium leading-relaxed text-ink">{WELCOME.homeBase.action}</p>
          </div>
        </div>
      </aside>

      <SubmitCta className="mt-7" />

      <Section title={WELCOME.cardsTitle}>
        <div className="mb-5 max-w-prose space-y-1.5 leading-relaxed text-ink/70">
          <p className="font-semibold text-ink">{WELCOME.cardsIntroTitle}</p>
          {WELCOME.cardsIntro.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="grid gap-3 cs:grid-cols-2">
          {HUB_TABS.filter((tab) => tab.id !== "welcome").map((tab) => (
            <Link
              key={tab.id}
              to={tab.to}
              // Start here is the one card a first-timer must not miss, so it
              // gets the filled treatment and spans the row.
              className={`group flex min-h-[104px] flex-col justify-between rounded-card border p-6 transition-colors ${
                tab.id === "start"
                  ? "border-transparent bg-sand hover:border-ink/20 cs:col-span-2"
                  : "border-line bg-white hover:border-ink/20"
              }`}
            >
              <span>
                <span className="block font-fraunces text-xl text-ink">{tab.label}</span>
                <span className="mt-1 block text-sm leading-relaxed text-ink/60">{tab.blurb}</span>
              </span>
              <ArrowRightIcon
                width={18}
                height={18}
                className="mt-4 text-flame-deep transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          ))}
        </div>
      </Section>

      <footer className="mt-12 border-t border-line pt-6 text-sm text-ink/55">
        <p className="mb-3 text-ink/70">
          {WELCOME.questions}{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-flame-deep hover:underline">
            {SUPPORT_EMAIL}
          </a>
        </p>
        <Link to="/creators/terms" className="text-flame-deep hover:underline">
          Program terms
        </Link>
      </footer>
    </>
  );
}
