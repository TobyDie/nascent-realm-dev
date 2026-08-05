import { ArrowRightIcon } from "../ui/Icons";
import { VIDEO_SUBMIT_FORM_URL } from "../config";
import { INTRO } from "../copy/hub";

/**
 * Submitting a video link is the only thing a creator does here more than
 * once, so it sits on both Welcome and Start here rather than on one of them.
 */
export function SubmitCta({ className = "" }: { className?: string }) {
  return (
    <section
      className={`flex flex-col gap-5 rounded-card bg-ink p-6 text-ivory cs:flex-row cs:items-center cs:justify-between cs:p-7 ${className}`}
    >
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
  );
}
