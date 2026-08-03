import type { ReactNode } from "react";
import { ChevronIcon } from "./Icons";

/**
 * AccordionItem — native <details>/<summary>, styled. Zero JS, keyboard-native
 * (Doc 09 §2, Doc 11 §4). The chevron rotates via the [open] attribute in CSS.
 */
export function AccordionItem({
  q,
  children,
}: {
  q: string;
  children: ReactNode;
}) {
  return (
    <details className="group border-b border-line py-1 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-fraunces text-lg text-ink marker:content-none">
        <span>{q}</span>
        <ChevronIcon
          className="shrink-0 text-ink/50 transition-transform duration-200 group-open:rotate-180"
          width={20}
          height={20}
        />
      </summary>
      <div className="max-w-prose pb-5 pr-8 text-ink/70">{children}</div>
    </details>
  );
}
