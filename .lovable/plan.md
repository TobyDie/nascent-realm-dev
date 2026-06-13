## Goal

Match the attached reference on mobile (`/20-the-haircare-challenge`):

```
[ ★ 4.8 · 12K reviews pill overlaying top-left of image ]
[ Sarah hero image — full width, no left text column ]
─────────────────────────────────────────────
Grow the                                ← serif, ~32px
longest,                                ← serif, ~64px, bold
healthiest,                             ← serif, ~64px, bold
shiniest                                ← serif, ~64px, bold
hair of your life,                      ← Caveat script, orange, with
                                          hand-drawn underline + sparkle
without giving up the color,            ← serif, ~22px, dark
heat, and styling you love.
```

Words stay byte-for-byte identical. The current "stacked serif" treatment is kept for `longest, / healthiest, / shiniest`, but the payoff line `hair of your life,` switches to **Caveat handwritten script in orange** with **two hand-drawn underline strokes + a small sparkle mark** to the upper right (matching the reference). The second sentence drops back to dark ink (not orange) and sits below the underlines.

On mobile the image moves **above** the text (today the grid is `1.02fr 0.98fr` side-by-side — even on 390px viewports the column shows the text/image already stacked, but we make this explicit and reorder so image is first, text second, full-width).

Desktop layout is untouched — only the script/underline treatment for `hair of your life,` and second-sentence color carry over.

## Files (scoped to /20 only)

1. **`src/features/haircare-challenge-v20/sections/Hero.tsx`**
   - Reorder the hero grid on mobile so the image column renders first (via CSS `order`, no JSX restructure needed) — but to keep DOM order matching visual order for SEO/a11y, swap the two `<Reveal>` blocks: image first, text second. Desktop CSS restores left-text / right-image with `grid-template-columns` + explicit `order`.
   - Change the H1 spans:
     - Drop `.hh-key-italic` from `longest,` (reference shows it upright, not italic).
     - Wrap `hair of your life,` in a new container `.hh-script` that holds:
       - `<span class="hh-script-text">hair of your life,</span>`
       - `<span class="hh-script-underline" aria-hidden>` (inline SVG, two squiggly orange strokes)
       - `<span class="hh-script-spark" aria-hidden>` (inline SVG sparkle)
     - Remove `.hh-tail` wrapper; promote the script line to a standalone block-level span.
     - Change `.hh-sub` (second sentence) color from orange to `var(--ink)` so it matches reference.

2. **`src/features/haircare-challenge-v20/haircare-challenge-v20.css`**
   - Add `.hq-sp-v20 .hero-grid { display: flex; flex-direction: column; }` on mobile (`@media max-width: 860px`) with image `order: 1` and text `order: 2`. Desktop (`@media min-width: 861px`) keeps the existing `grid-template-columns: 1.02fr 0.98fr`.
   - Style `.hh-script`:
     - `font-family: 'Caveat', cursive;` (Caveat is already loaded via `src/styles.css`).
     - `font-weight: 600`, `color: var(--orange-500)`, `font-size: 56px` mobile / `72px` desktop.
     - `display: inline-block; position: relative;` so the underline SVG can absolutely position under the baseline and the sparkle can sit at top-right.
     - `line-height: 1.0`, `letter-spacing: 0`.
   - `.hh-script-underline` — absolute, `left: 0; right: 0; bottom: -8px; height: 14px;` SVG fills width.
   - `.hh-script-spark` — absolute, `top: -6px; right: -14px; width: 18px; height: 18px;`.
   - `.hh-sub` — change color to `var(--ink)`, font-size 20px mobile / 24px desktop, `margin-top: 18px` (clear of the underline).
   - Reduce `.hh-key` weight slightly (keep 900) and tighten `letter-spacing: -0.025em` to better match reference.

3. **No other files touched.** No copy edits. CTA, supporting paragraph, bullets, trust bar, and everything below the H1 remain identical.

## Out of scope

- No font additions (Caveat already loaded).
- No new images, no asset uploads.
- No changes to /17, /18, /19, /21.
- No layout changes to desktop hero.

## Open question

The reference image shows the trust pill (`★ 4.8 · 12K reviews`) **overlaying the top-left of the hero image**. That's already how the live `.hero-trust-note` is positioned — no change needed unless you want it bigger/repositioned.
