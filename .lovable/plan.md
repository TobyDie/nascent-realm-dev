# Mobile ATF — strip to image + promise + button

Mobile-only (≤720px). Desktop layout unchanged.

## Cuts (mobile)
1. **Black age-stripe** — hide on mobile. Repeats the H1's "30s" framing and steals the top 64px.
2. **Image caption** (`Sarah Tran / Founder · 250,000+ women coached`) — remove entirely. Duplicates the trust bar and Founder section. Lets the portrait + before/after insets be the hero.
3. **Validation paragraph** — replace the 4-line copy with a single line: *"Build a hair routine for your 30s — see results in 14 days, or your money back."*

## Resizes (mobile)
- Hero image: bump from 46vh back to ~60vh, `max-width` removed (full width of column), `object-position: center 22%` so face stays in frame and BEFORE/AFTER insets remain visible.
- Eyebrow→H1→sub gaps tightened (~6px each).

## Keeps
- "★ 4.8 · 12K reviews" pin top-right (only ATF social proof).
- Handwritten tagline above H1.
- H1 + orange "30s and beyond".
- CTA button + the cohort/85%-off microline directly under it.
- Bullets, trust avatars, Trustpilot row — all stay where they are, below the fold.

## Files
- `src/features/haircare-challenge/sections/Hero.tsx` — remove `<div className="hero-image-caption">…</div>`; replace the multi-sentence `<p className="hero-validation">` content with the one-liner.
- `src/features/haircare-challenge/sections/AgeStripe.tsx` — add a `mobile-hidden` class (or wrap in `.desktop-only`) so it disappears under 720px.
- `src/features/haircare-challenge/haircare-challenge.css` — in the `@media (max-width: 720px)` block: raise `.hero-image-wrap` / `.hero-image` to 60vh, drop the 280px max-width cap, set `object-position: center 22%`; tighten eyebrow/H1/sub margins; hide the age stripe.

## Out of scope
- Desktop layout, copy of H1, CTA, bullets, trust bar, all other sections.
