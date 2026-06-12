## Changes in `src/features/haircare-challenge-v21/sections/SocialProof.tsx`

### 1. Reorder blocks after the testimonials carousel/grid
New order:
1. Carousel / grid (unchanged)
2. **Trust bar** (4.8/5 · 250K+ · 92%)
3. **CTA button** "Join 250,000+ women"
4. **Guarantee badge** "See results in 14 days or get your money back."

Currently it's CTA → Guarantee → Trust bar. Swap so Trust bar moves above the CTA Reveal block.

### 2. Compact the trust bar to a single line on mobile
- Reduce `Stat` `size` prop from `56` to `~28` (mobile) / `36` (desktop) so all three stats fit horizontally on a 390px viewport.
- Reduce trust-bar padding from `32px 24px` to `~16px 14px`.
- Keep the `repeat(3, ...)` flex/grid row with two thin `<Divider />` separators so 4.8/5, 250K+, and 92% sit on one line.
- Tighten label font size via inline style override (or a small wrapper) so labels wrap to max 2 short lines without forcing the numbers down.
- Reduce border-radius from 24 to 16 to match the more compact feel.

### 3. Margin tweaks
- Trust bar `marginTop` from 32 → 20 (sits right under cards).
- CTA Reveal `marginTop` from 24 → 18, gap stays 12.

No copy changes. No other sections touched.
