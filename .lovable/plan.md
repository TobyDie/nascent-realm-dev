## Problem
The current fix gives `.hero-h1` a flat `max-width: 62%`, which constrains every line of the headline. The trailing hair only occupies the **top-right of the overlay zone** — once you're past the hair, the right side of the H1 is empty cream. Result: a tall blank column on the right of every H1 line, and lines below the image are still narrow for no reason.

## Goal (mobile only, ≤720px)
Make the H1 wrap **tight against the hair on the first 1–2 lines**, then **expand to full width** once it's below the hair. Everything below the H1 (supporting paragraph, CTA, bullets) stays full-width. Desktop untouched.

## Approach — CSS `shape-outside` floated spacer
Use a transparent floated `::before` on `.hero-h1` whose shape mimics the negative space left by Sarah's trailing hair. Text flows around it naturally — narrow at top, widening as it descends.

1. **Remove the flat constraint**
   - Delete the mobile-only `.hero-h1 { max-width: 62% }` rule added previously.

2. **Add a `shape-outside` float on `.hero-h1::before`** (inside the existing `@media (max-width: 720px)` block)
   - `content: ""; float: right; width: 55%; height: 30vw;`
   - `shape-outside: polygon(100% 0, 100% 0, 0 100%, 100% 100%);` — a right-triangle that's full width at the top of the H1 and tapers to 0 at the bottom.
   - This pushes line 1 of the H1 to ~45% width, line 2 to ~60%, line 3+ to ~100%.
   - Tweakable: adjust the polygon's middle vertex and the `height` (28–34vw) to match where Sarah's hair actually ends.

3. **Re-tune vertical overlap**
   - Keep `margin-top: -32vw` on the text column, but verify the first H1 line lands just under Sarah's body. If the supporting paragraph crowds the bullets, nudge `margin-top` to `-28vw` or `-30vw`.

4. **Spot-check at 360px, 390px, 414px**
   - The polygon is percentage-based on the floated box, so it scales. The float's `width: 55%` (of the text column) and `height` in `vw` mean the shape tracks viewport width.

## Files to change
- `src/features/haircare-challenge-v20/haircare-challenge-v20.css` — mobile media block only.

## Out of scope
- No JSX changes, no desktop changes, no copy edits, no changes to other sections or routes.
- No new images.

## Verification
- `browser--view_preview` at 390×844, then 360 and 414, confirming:
  - H1 line 1 sits in the bottom-left pocket, hugging Sarah's hair
  - H1 lines below the hair span the full column width — no right-side dead zone
  - Trust pill, image (uncropped, full-bleed), CTA, bullets, trust bar all render correctly
