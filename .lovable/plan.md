Scope: `src/features/haircare-challenge-v18/` only. No changes to v17, v19, or the original page. All CSS scoped under `.hq-sp-v18`.

## 1. Headlines styled like the rest of the page (dual color)
In `HeroCarousel.tsx` each slide gets a `headlineLead` + `headlineAccent` split (e.g. lead = "Achieve the best hair of your life ", accent = "in your 30s. And beyond."). Render as:

```tsx
<h2 className="hq-v18-hc-headline">
  <span className="lead">{s.headlineLead}</span>{" "}
  <span className="accent">{s.headlineAccent}</span>
</h2>
```

CSS in `haircare-challenge-v18.css`:
- `.hq-v18-hc-headline` uses the same display family as `.h-hero` (Hanken Grotesk, 700, tight leading), larger size, ink black for `.lead`, `var(--orange-600)` for `.accent`.
- Slide 1 stays `<h1>`; remaining slides `<h2>` (already the case).

## 2. Body copy styled for storytelling
`.hq-v18-hc-caption` switches from the generic body font to a serif/editorial pairing already loaded for storytelling sections (reuse `"Source Serif 4", Georgia, serif` if available in `styles.css`; otherwise add a single `@import` via `<link>` is unnecessary — fall back to `Georgia, "Times New Roman", serif`). Size 17px, line-height 1.65, color `var(--ink-soft)`, slightly reduced contrast so the dual-color headline dominates. First line gets a subtle drop-cap-free emphasis (no fancy drop cap — just `letter-spacing: 0.005em` and a thin top rule via `border-top: 1px solid rgba(0,0,0,.06); padding-top: 14px`).

## 3. Em-dash removal
Sweep the WHOLE `/18` page tree (`src/features/haircare-challenge-v18/**/*.{tsx,ts,css}`) and replace every `—` (U+2014) and `–` (U+2013) with `,` or `.` depending on grammatical sense per occurrence. Done by hand to keep copy natural. Verified with `rg "[—–]" src/features/haircare-challenge-v18` returning empty after edits.

## 4. Unified 4:5 image + text card with gradient bleed
Carousel returns to **4:5 image aspect**. Structure becomes one tall card per slide where image and text share a single rounded container, separated by a soft gradient seam.

```text
┌────────────────────────────┐
│         IMAGE (4:5)        │
│   handwritten pill overlay │
│····· gradient fade ········│  <- image bottom → cream/white text bg
│  HEADLINE (dual color)     │
│  Story paragraph (serif)   │
└────────────────────────────┘
```

CSS:
- `.hq-v18-hc-slide`: single white card, `border-radius: 24px`, `overflow: hidden`, soft shadow, no inner gap.
- `.hq-v18-hc-media`: `aspect-ratio: 4 / 5;` again, image fills.
- New `.hq-v18-hc-fade`: positioned absolutely at media bottom, 80px tall, `background: linear-gradient(to bottom, rgba(255,253,248,0) 0%, var(--cream, #FFFBF3) 100%)`, sits over image so the text background appears to bleed up into the photo.
- `.hq-v18-hc-text`: same `--cream` background, padding 22px 22px 24px, no top border (the gradient is the seam). Readability preserved because text sits fully on cream, not on the image.
- Desktop ≥1024px: keep a single-column tall card (max-width 520px, centered) so the "big card" feel reads on every device, instead of switching to side-by-side which would break the gradient bleed.

## 5. Handwritten Pin-style overlays
Reuse the existing `Pin` primitive look (`Caveat` 700, orange border, white pill, slight rotation, soft shadow) for image overlays.

In `HeroCarousel.tsx` add a `<Pin>`-equivalent rendered absolutely on the image. Per slide, keep one short handwritten line so the device stays delightful, not noisy:
- S1: `★ "best hair of my life"` (rotate -4)
- S2: `not your age` (rotate 5)
- S3: `less, not more` (rotate -3)
- S4: `250,000 women` (rotate 4)
- S5: `real Qs, real As` (rotate -5)
- S6: `see you on day 1` (rotate 3)

CSS `.hq-v18-hc-pin` mirrors `Pin` exactly (Caveat 700, 18px, white bg, 1.5px orange border, 999px radius, 5px 12px, rotate via inline style, shadow `0 4px 10px rgba(60,40,20,.12)`). Drop the previous `is-handwritten` / `is-anchor` / `is-label` overlay system entirely — one consistent visual language across all 6 slides, varied only by copy and rotation.

## 6. Rounded-rectangle thumbnails
`.hq-v18-hc-thumb` and `.hq-v18-hc-thumb-img` change from circular to rectangle:
- Size: 56x44 on mobile, 64x48 on desktop
- `border-radius: 10px`
- Active state: 2px solid `var(--orange-600)` ring + slight `transform: translateY(-2px)`, no scale jump
- Inactive: 1px solid rgba(0,0,0,.08), 70% opacity
- Same R2 image used in the slide, `object-fit: cover` (when images are added later); for now the numbered placeholder stays inside the rounded rect.

## 7. CTA matches site-wide pill
Replace the custom `<button className="hq-v18-hc-cta">` with the shared `Button` primitive used elsewhere on the page:

```tsx
import { Button } from "../primitives";
<Button id="cta-hero-carousel" onClick={onCta} icon="arrow-right">
  Join the challenge
</Button>
```

Remove `.hq-v18-hc-cta`, `.hq-v18-hc-cta:hover`, `.hq-v18-hc-cta:active` rules. Keep `.hq-v18-hc-cta-wrap` for layout (centered, persistent, 16px top spacing) and keep the trust strip below.

## Files touched
- `src/features/haircare-challenge-v18/sections/HeroCarousel.tsx` — split headlines, add pin overlays, swap CTA to `Button`, remove em-dashes in copy, restructure card.
- `src/features/haircare-challenge-v18/haircare-challenge-v18.css` — update `.hq-v18-hc-*` rules per sections 1, 2, 4, 5, 6, 7; remove now-unused `is-handwritten/is-anchor/is-label` blocks.
- Sweep other v18 section files only to strip em-dashes (no other changes).

## Verification
- `rg "[—–]" src/features/haircare-challenge-v18` returns no matches.
- Preview at 390x844 and 1280x720: 4:5 image, gradient seam visible, headline reads as two colors, body reads as serif, one pin overlay per slide, rectangle thumbnails with orange ring on active, CTA pill identical to the Hero `Join the challenge` button.
- Confirm `/17-the-haircare-challenge` and `/19-the-haircare-challenge` are visually unchanged.
