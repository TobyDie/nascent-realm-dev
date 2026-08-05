import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRightIcon, CheckIcon, ChevronIcon } from "../ui/Icons";
import { nextTab, tabById, type HubTabId } from "../copy/hub-nav";

/**
 * Shared building blocks for the hub's topic pages. Lifted out of the old
 * single-page CreatorHubPage so all five routes stay visually identical.
 */

/** The h1 for a topic page, with an optional one-line standfirst. */
export function PageHead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lede?: string[];
}) {
  return (
    <header className="mb-8">
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-flame-deep">{eyebrow}</p>
      )}
      <h1 className="mt-2 font-fraunces text-head text-ink">{title}</h1>
      {lede && (
        <div className="mt-3 max-w-prose space-y-1.5 leading-relaxed text-ink/70">
          {lede.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      )}
    </header>
  );
}

/** A titled block within a topic page. Anchored so deep links still work. */
export function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-10 scroll-mt-24 first:mt-0 cm:scroll-mt-8">
      <h2 className="mb-5 font-fraunces text-2xl text-ink cs:text-3xl">{title}</h2>
      {children}
    </section>
  );
}

/** Native <details> — zero JS, keyboard-native, and printable when opened. */
export function Collapsible({ summary, children }: { summary: string; children: ReactNode }) {
  return (
    <details className="group rounded-card border border-line bg-white [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-medium text-ink marker:content-none">
        {summary}
        <span className="text-sm font-normal text-flame-deep group-open:hidden">Show</span>
        <span className="hidden text-sm font-normal text-flame-deep group-open:inline">Hide</span>
      </summary>
      <div className="border-t border-line px-6 py-5">{children}</div>
    </details>
  );
}

/**
 * Quiet disclosure for help nested *inside* a step — smaller and flatter than
 * <Collapsible>, which is a page-level card. Keeping these visually distinct is
 * what stops a "how do I do this on Instagram?" aside from reading like another
 * step you have to complete.
 */
export function Disclosure({ summary, children }: { summary: string; children: ReactNode }) {
  return (
    <details className="group mt-3 rounded-input border border-line bg-white [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-3 px-4 py-2.5 text-sm font-medium text-ink marker:content-none">
        {summary}
        <ChevronIcon
          width={16}
          height={16}
          className="shrink-0 text-ink/40 transition-transform duration-200 group-open:rotate-180"
        />
      </summary>
      <div className="border-t border-line px-4 py-4">{children}</div>
    </details>
  );
}

export function RuleColumn({
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
      <h3 className={`mb-4 font-fraunces text-2xl ${isDo ? "text-[#4d5c50]" : "text-flame-deep"}`}>
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

/**
 * Foot of every topic page: where to go next, plus the Terms link that used to
 * sit at the bottom of the one long page. Keeps a straight read-through
 * possible for anyone who wants the whole thing in order.
 */
export function PageFooter({
  current,
  next: nextId,
}: {
  current: HubTabId;
  /** Override the suggested next page. Leave unset to follow the nav order. */
  next?: HubTabId;
}) {
  const next = nextId ? tabById(nextId) : nextTab(current);

  return (
    <footer className="mt-12 border-t border-line pt-6">
      {next && (
        <Link
          to={next.to}
          className="group flex items-center justify-between gap-4 rounded-card border border-line bg-sand px-6 py-5 transition-colors hover:border-ink/20"
        >
          <span className="min-w-0">
            <span className="block text-xs font-medium uppercase tracking-[0.18em] text-ink/40">
              Next
            </span>
            <span className="mt-0.5 block font-fraunces text-xl text-ink">{next.label}</span>
            <span className="mt-0.5 block text-sm text-ink/60">{next.blurb}</span>
          </span>
          <ArrowRightIcon
            width={20}
            height={20}
            className="shrink-0 text-flame-deep transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      )}
      <p className="mt-6 text-sm text-ink/55">
        <Link to="/creators/terms" className="text-flame-deep hover:underline">
          Program terms
        </Link>
      </p>
    </footer>
  );
}
