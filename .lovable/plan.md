## Goal (mobile only, ≤720px — desktop untouched)
Make the H1 in `/20-the-haircare-challenge` feel designed *into* the hero image: the bold black part hugs the bottom-left pocket and wraps tight around Sarah's trailing hair; the orange clause becomes a handwritten, slightly tilted line that fills the width once the hair ends. No blank cream column on the right.

## Visual target

```text
┌──────────────────────────────────┐
│  [trust pill]                    │
│                                  │
│                     ╭─ Sarah ─╮  │  ← image full-bleed (already done)
│                     │  hair   │  │
│  Grow the longest,  │ trailing│  │  ← bold H1 line 1, narrow (hair on right)
│  healthiest,        │ down    │  │  ← bold H1 line 2, narrow
│  shiniest hair      ╰─────────╯  │  ← bold H1 line 3, narrow
│  of your life,                   │  ← bold H1 line 4, full width (hair ended)
│                                  │
│   ~without giving up the color,~ │  ← handwritten, tilted -2deg, full width
│   ~heat, and styling you love.~  │
│                                  │
│  [supporting paragraph]          │
│  [CTA] [guarantee] [cohort]      │
│  [bullets]                       │
└──────────────────────────────────┘
```

## Approach

### 1. Split the H1 in `sections/Hero.tsx` (v20 only)
Currently the H1 is one `<h1>` with two `<span>`s. Restructure to:
- `<h1 class="hero-h1">` containing only the bold black clause: *"Grow the longest, healthiest, shiniest hair of your life,"*
- A sibling `<div class="hero-h1-handwritten">` containing: *"without giving up the color, heat, and styling you love."*

This lets each piece be sized, tilted, and positioned independently. Desktop renders them stacked normally; mobile gets the handwritten treatment.

### 2. Mobile CSS rewrite (`haircare-challenge-v20.css`, inside the existing `@media (max-width: 720px)` block)

**Remove** the previous failed attempts: the `shape-outside ::before` triangle, the flat `max-width`, and the `margin-top: -30vw` if it's overshooting.

**Replace with:**
- `.hero-grid > div:nth-child(1)` — `position: relative; z-index: 2; margin-top: -34vw;` (tuned so H1 line 1 sits just under Sarah's chin/shoulder line — exact value verified in preview).
- `.hero-h1` — keep bold weight, drop font-size slightly (e.g. `clamp(26px, 7.2vw, 32px)`) so 3 narrow lines actually fit beside the hair before breaking free. Add a `::before` floated spacer **only** sized to the real hair footprint: `float: right; width: 48%; height: 22vw; shape-outside: polygon(100% 0, 100% 100%, 0 0);` — a triangle that's full-width at the top of the H1 and tapers down-left, which matches the hair silhouette (widest at top of text, gone by the bottom). Tune `width` (45–52%) and `height` (18–26vw) against the actual image in preview.
- `.hero-h1-handwritten` — `font-family: "Caveat", cursive; font-weight: 700; font-size: clamp(22px, 6.2vw, 28px); color: var(--orange-700); line-height: 1.15; transform: rotate(-2deg); transform-origin: left center; display: block; margin: 10px 0 14px; max-width: 100%;`
- `.hero-supporting` — keep tight `margin-top: 6px`.

### 3. Desktop CSS (≥721px)
- `.hero-h1-handwritten` — render inline-ish: same font-family but lighter treatment, or fall back to matching the H1 weight/color so the desktop layout doesn't suddenly look handwritten. Simplest: on desktop, style `.hero-h1-handwritten` as plain orange bold text matching today's look (no Caveat, no rotation). Only mobile gets the handwritten flourish.

### 4. Verify
- `browser--view_preview` at 390×844, then 360 and 414.
- Confirm: bold H1 lines 1–3 hug the hair tightly (no cream gap on the right of those lines); bold H1 last line spans full width; handwritten clause sits below, tilted, filling width; supporting paragraph + CTA + bullets unaffected; trust pill still top-left of image; image still full-bleed and uncropped.
- Confirm desktop at 1280px is visually identical to current.

## Files to change
- `src/features/haircare-challenge-v20/sections/Hero.tsx` — split H1 into two elements.
- `src/features/haircare-challenge-v20/haircare-challenge-v20.css` — replace the mobile H1 overlap rules; add desktop fallback styling for `.hero-h1-handwritten`.

## Out of scope
- No changes to other v* routes, no copy edits beyond the structural split, no JSX changes outside the H1, no new images, no desktop layout changes.

## Risk / fallback
If the `shape-outside` triangle still leaves an awkward gap because the real hair silhouette isn't triangular, fallback is a two-step `shape-outside` using a polygon with 4–5 points traced from the actual image, or alternatively use `shape-outside: url(<hair-mask.png>)` with a transparent mask exported from the hero image. We'll only escalate to the mask approach if the polygon tuning can't get within ~8px of the hair edge.
