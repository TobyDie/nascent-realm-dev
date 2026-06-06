Mobile + desktop Hero tweaks in `src/features/haircare-challenge/sections/Hero.tsx`:

1. **Remove the one-liner** `hero-validation` paragraph ("Build a hair routine for your 30s — see results in 14 days, or your money back.") that currently sits between H1 and CTA. It's repetitive with the CTA microline.

2. **Restore the original validation paragraph** as a new block placed AFTER the cohort line ("Next cohort: Fri, June 6th · 2,400 women joining"), inside the CTA stack (still above the bullets):

   > The hair you had in your 20s isn't gone forever. Your body has changed but your habits haven't. Learn how to build a hair care routine for your 30's and enjoy good hair days for decades to come.

   Style it as muted body copy (small/secondary color, ~14–15px, comfortable line-height), with a little top margin to separate from the cohort line.

3. **Move the "★ 4.8 · 12K reviews" Pin** from `top: -14, right: -8` to `top: -14, left: -8` (rotate stays negative or flip to `rotate={7}` so it leans into the image). Empty space sits on the image's left side on mobile.

No CSS file changes required beyond optional small margin tweak on the new paragraph; can be done inline. No other sections touched.