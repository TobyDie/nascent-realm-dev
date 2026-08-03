import type { ReactNode } from "react";
import { Fragment } from "react";
import { TBA } from "../copy/tokens";

/** Consistent long-form typography for the hub's reading sections. */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-prose space-y-5 leading-relaxed text-ink/80 [&_a]:text-rose [&_a]:underline [&_li]:ml-1 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
      {children}
    </div>
  );
}

/**
 * Neutral placeholder for an undecided value (payout window, legal entity, draw
 * mechanic). Renders inline as a muted chip; the open decisions are tracked in
 * README "Pending decisions".
 */
export function TodoChip({ label = "to be announced" }: { label?: string }) {
  return (
    <span className="mx-0.5 inline-flex items-center gap-1.5 rounded-pill border border-line bg-ivory px-2.5 py-0.5 align-baseline text-[0.8rem] text-ink/55">
      <span className="h-1.5 w-1.5 rounded-full bg-gold/70" aria-hidden />
      {label}
    </span>
  );
}

/**
 * Renders a copy string from lib/copy/hub.ts, swapping every `{{TBA}}` token for
 * a <TodoChip>. Keeps the copy file plain strings so it stays editable without
 * touching JSX.
 */
export function RichText({ children }: { children: string }) {
  const parts = children.split(TBA);
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && <TodoChip />}
        </Fragment>
      ))}
    </>
  );
}
