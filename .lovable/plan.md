# Mobile ATF optimization — Hero

Three focused fixes, mobile-only (≤720px). Desktop layout unchanged.

## 1) Delay the sticky CTA bar until after the hero is scrolled past

File: `src/features/haircare-challenge/sections/StickyCta.tsx`

Today the bar shows whenever `#hero-cta-sentinel` is not intersecting. On mobile the sentinel sits below the image, so on first paint it's already off-screen and the bar shows immediately — covering the H1 + Join button.

Change: require a real scroll past the hero before the bar can appear.
- Track scrollY; only allow `show = true` once `window.scrollY > 1× viewport height` (≈ user has scrolled past ATF).
- Keep the existing "hide when final CTA visible" behavior.
- Net effect: ATF is clean on load; bar slides up after the first meaningful scroll.

## 2) Reposition the image caption + shrink the hero image on mobile

File: `src/features/haircare-challenge/sections/Hero.tsx` + `haircare-challenge.css`

Problem: on a 390px viewport the portrait is ~560px tall and the "Sarah Tran / Founder · 250,000+ women coached" caption sits bottom-left, overlapping the before/after insets and pushing the H1 below the fold.

Changes (mobile-only, via `.hero-image-wrap` / `.hero-image-caption` media query ≤720px):
- Move `.hero-image-caption` from bottom-left to **top-left** (`top: 12px; left: 12px; bottom: auto`), with a slightly stronger gradient chip background so it stays legible against the portrait.
- Cap the hero image height on mobile (e.g. `max-height: 58vh` and `object-position: center top`) so more of the H1 + CTA fit above the fold.
- Reduce the image's bottom margin so the eyebrow/H1 sit closer.
- Tighten section top padding on mobile (48 → 24).
- Keep the ★ 4.8 pin at top-right; cap won't collide because the caption is top-LEFT.

## 3) Replace the "← That's your coach" hand annotation with the eyebrow line in handwriting

Files: `src/features/haircare-challenge/sections/Hero.tsx`

- Delete the `<Hand>← That's your coach</Hand>` block (currently `.mobile-only`, bottom-left of the image).
- Replace the existing eyebrow `<div class="eyebrow">BECOME THE MOST BEAUTIFUL VERSION OF YOURSELF</div>` with the **same handwritten style** used by `Hand` (Caveat/handwritten font, orange-700, slight rotation), reading: **"Become the most beautiful version of yourself"** (sentence case, not all-caps).
- Keep it as the line directly above the H1 so it visually leads into "Achieve the best hair of your life…".
- Size: ~22px mobile / ~26px desktop, weight 700, color `var(--orange-700)`, very slight `-2deg` rotation for the hand-drawn feel.

## Out of scope
- No copy changes to H1, bullets, CTA, cohort line, or trust bar.
- No changes to desktop hero layout (caption stays bottom-left on ≥720px).
- No changes to other sections.

## Technical notes
- `StickyCta` will add a `scroll` listener with `{ passive: true }` alongside the existing IntersectionObservers; combine with current heroVisible/finalVisible state via `show = scrolledPastHero && !finalVisible`. (Drop the `heroVisible` check on mobile — replaced by scroll threshold.)
- Caption repositioning is pure CSS in the `@media (max-width: 720px)` block of `haircare-challenge.css`; no JSX restructuring needed beyond removing the `<Hand>` block.
- Handwritten eyebrow: reuse the same font-family the `Hand` primitive uses (check `primitives.tsx`) so it matches visually 1:1.
