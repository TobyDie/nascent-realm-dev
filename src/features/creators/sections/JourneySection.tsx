import { JOURNEY } from "../copy/creators";
import { BuildYourJourney } from "./BuildYourJourney";

// Statically imported: Vite already splits this route into its own chunk, so
// framer-motion never reaches any other glow page. (The Next build used
// next/dynamic here for a second, finer split — not worth a lazy boundary that
// would strip this section from the SSR'd HTML.)

export function JourneySection() {
  return (
    <section id="s4-journey" className="bg-ivory">
      <div className="container-quiet section-pad">
        {/* Warm sand block — the most alive section on the page, set apart from
            its ivory neighbor above and separated by its rounded inset. */}
        <div className="rounded-[28px] border border-line bg-sand/60 px-5 py-10 cs:px-9 cs:py-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-flame-deep">
            {JOURNEY.eyebrow}
          </p>
          <h2 className="mb-10 max-w-3xl font-fraunces text-[clamp(2rem,3.6vw,2.9rem)] leading-tight text-ink">
            {JOURNEY.heading}
          </h2>
          <BuildYourJourney />
        </div>
      </div>
    </section>
  );
}
