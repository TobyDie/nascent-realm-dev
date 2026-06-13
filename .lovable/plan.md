## Goal
On `/20-the-haircare-challenge` (mobile only), move the H1 ("Grow the longest, healthiest, shiniest hair of your life…") upward so it sits in the empty cream pocket at the bottom-left of the hero — under Sarah's body and to the left of her trailing hair. Desktop layout stays untouched.

## What the screenshot shows
- Hero image is full-bleed with a transparent/cream background, so the image's bottom area visually blends with the page.
- Sarah's body sits in the top half; her hair trails diagonally across the bottom-right.
- The entire **bottom-left quadrant** (roughly the lower 30–35% of the hero, left ~55% wide) is empty cream — ideal canvas for the H1.
- Trust pill is already pinned to top-left and must stay there.

## Approach (CSS-only, mobile breakpoint)
Edit only `src/features/haircare-challenge-v20/haircare-challenge-v20.css` inside the existing `@media (max-width: 720px)` block. No JSX changes, no desktop changes, no other routes.

1. **Pull the text column up into the hero**
   - On mobile, the grid already reorders so the image is `order: 1` and the text column is `order: 2`.
   - Apply a negative `margin-top` to the text column (`.hero-grid > div:nth-child(1)`) of roughly `-30vw` (≈ -117px at 390px width) so the H1's first line lands just below Sarah's seated body.
   - Add `position: relative; z-index: 2;` on the text column so it paints above the image's empty area.

2. **Constrain H1 width so it stays in the left pocket**
   - Set `.hero-h1` to `max-width: 62%` (or `padding-right: 38%`) on mobile so the headline wraps in the left column and never collides with the trailing hair on the right.
   - Keep current font-size (28–30px) and weight; no copy changes.

3. **Re-tighten spacing below the overlay**
   - Because the H1 moved up, reduce `.hero-supporting` top margin slightly so the supporting paragraph + CTA still flow naturally without a gap.
   - Leave CTA, guarantee badge, cohort line, and bullets exactly where they are visually (they continue to sit in the normal flow below the H1).

4. **Safety checks**
   - Trust pill (`.hero-trust-note`) stays `position: absolute; top/left` on the image — unaffected.
   - Image stays `object-fit: contain`, full-bleed, transparent — no crop, no frame.
   - Wider breakpoints (>720px) are not touched, so desktop and tablet keep the current side-by-side hero.

## Files to change
- `src/features/haircare-challenge-v20/haircare-challenge-v20.css` — additions inside the existing mobile `@media (max-width: 720px)` block only.

## Out of scope
- No copy edits.
- No changes to other sections, routes, or the Hero JSX.
- No new images or assets.

## Verification
- Use `browser--view_preview` at 390×844 to confirm the H1 sits in the bottom-left pocket of the hero with hair trailing to its right, and that the trust pill, CTA, bullets, and trust bar render correctly below.
- Spot-check at 360px and 414px widths to confirm no overlap with Sarah's hair.
