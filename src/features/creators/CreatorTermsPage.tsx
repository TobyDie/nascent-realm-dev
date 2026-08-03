import "./creators.css";

import { Prose, RichText } from "./hub/Prose";
import { SUPPORT_EMAIL } from "./config";
import { TERMS, TERMS_INTRO, TERMS_OPERATOR } from "./copy/terms";

// Standalone so the application form (and anything else outside the site) has a
// stable URL for the terms, rather than an anchor inside the members' hub. No
// link back into the hub: applicants land here before they're accepted.

/** Surface C — standalone program terms; the URL the application form links to. */
export function CreatorTermsPage() {
  return (
    <main className="hq-creators min-h-dvh bg-ivory">
      <div className="mx-auto max-w-2xl px-5 py-12 cm:px-8 cm:py-16">
        <header className="mb-9">
          <p className="font-fraunces text-lg text-ink">
            Hairqare<span className="ml-1.5 text-sm text-flame-deep">Creators</span>
          </p>
          <h1 className="mt-6 font-fraunces text-head text-ink">Program terms</h1>
          <p className="mt-3 leading-relaxed text-ink/70">{TERMS_INTRO}</p>
          <p className="mt-3 text-sm text-ink/55">
            <RichText>{TERMS_OPERATOR}</RichText> Questions:{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-flame-deep hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
        </header>

        <Prose>
          {TERMS.map((clause) => (
            <p key={clause.n}>
              <strong>
                {clause.n}. {clause.title}
              </strong>{" "}
              <RichText>{clause.body}</RichText>
            </p>
          ))}
        </Prose>
      </div>
    </main>
  );
}
