## What changes

Restructure the body of the Transition section ("What If You Never Had To Buy Another Miracle Again?") on `/22-the-haircare-challenge` so the wall of 8 paragraphs becomes a scannable, layered narrative. **All copy stays verbatim.** The founder image, eyebrow, H2, CTA button, and stars line above/below stay exactly as they are today.

## New visual order (top → bottom)

1. **Lead** — paragraph 1 ("Picture your bathroom shelf…") centered, serif (DM Serif Display), italic, ~20–22px. Acts as a quiet opening line.

2. **Pain-point list** — paragraph 2 split at its three natural "No more…" sentences into a 3-row list. Each row: small coral outlined circle with a coral minus bar + the sentence. Top + bottom hairline divider (`#1A1613` at 10% alpha) frames the block. Wording untouched.

3. **Industry reveal pull-quote** — paragraph 3 styled as a serif pull-quote with a 4px solid coral left rule, ~22px DM Serif Display, ink color.

4. **Solution card** — paragraph 4 in a soft white card (`rgba(255,255,255,0.55)`, 18px radius, hairline border). The last two sentences ("Not another product to add to the pile. The understanding that finally lets you stop guessing.") split into a second line styled in **coral, semibold** for emphasis.

5. **"The Result" block** — small uppercase coral eyebrow "THE RESULT" (existing `v22-eyebrow` style), then paragraph 5 centered, ~18px, with the single word **relief** bolded inline.

6. **Founder context** — paragraph 6 separated by a top hairline divider, slightly muted (opacity 0.85). Reads as a quiet footnote about Sarah.

7. **Reassurance pill** — paragraph 7 ("You don't have to commit…") inside a centered rounded-pill outline (1px ink @ 20%), small + medium weight.

8. **Closing + CTA** — paragraph 8 centered, normal body, then the existing `CtaButton` and stars line render unchanged below.

Vertical rhythm between blocks: ~32–40px on mobile, ~48px on desktop.

## Files touched

- `src/features/haircare-challenge-v22/sections/Transition.tsx` — replace the single `.v22-transition__inner` paragraph stack with the 8 structured blocks above. Keep the image wrap, eyebrow, H2, ConvictionCard, and CTA wrap intact and in their current order. Wrap the new narrative in a new `.v22-wayout` container so styles are scoped.
- `src/features/haircare-challenge-v22/listicle-v22.css` — append a `/* ===== The Way Out narrative ===== */` block with classes scoped under `.hq-sp-v22 .v22-wayout` for each piece: `__lead`, `__pains`, `__pain`, `__pain-mark`, `__reveal`, `__solution`, `__solution-em`, `__result`, `__result-eyebrow`, `__founder`, `__reassure`, `__close`. Use existing tokens only (`--accent`, `--ink`, `--surface`, `--line`, `--font-display`, `--font-body`, `--radius-card`, `--radius-pill`).

## Constraints

- No copy changes, no paragraph removals, no reordering of sentences within paragraphs.
- No new images, icons libraries, or fonts — SVG/CSS marks only, using DM Serif Display + Inter already loaded.
- Stay inside v22 palette: peach `#FBEDE2`, ink `#1A1613`, coral `#F36A3A`, surface `#FFFFFF`, line `#ECE3DA`.
- Mobile-first; verify at 390px then desktop.
- The existing `ConvictionCard` (Abigail) between the narrative and the CTA stays where it is.

## Out of scope

- No changes to other sections (Hero, Reasons, ConvictionCards, SocialProof, sticky bar, footer).
- No changes to fonts, global tokens, or shared primitives.
