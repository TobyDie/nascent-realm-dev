/**
 * LOCKED compliance constants (Doc 08 §5, Doc 11 §2 & §10).
 * The Review-Like-Sarah copy pass may NEVER alter these. QA greps (scripts/qa-grep.mjs)
 * assert the banned words never render and that the earnings disclaimer exists verbatim.
 */

/** LOCKED, rendered verbatim under Build Your Journey (Doc 11 §6, S4). */
export const EARNINGS_DISCLAIMER =
  "Illustrative. Your results depend on your content and your audience. Most creators start small, and your code keeps earning for life.";

/** The only primary CTA label anywhere on the page (Doc 08 §5). */
export const CTA_LABEL = "Apply to Join";

/** The ONLY permitted phrasing for Merely — never a date (Doc 11 §2). */
export const MERELY_PHRASE = "priority access when it launches";

// NOTE: the banned-word list (affiliate, cure, heal, reverse, regrow, follicle,
// permanent, clinically proven) lives ONLY in scripts/qa-grep.mjs so those literal
// strings never ship in a bundle and trip the grep on the build output (Doc 11 §10).
