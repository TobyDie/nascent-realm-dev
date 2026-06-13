## Goal

Restyle the mobile hero H1 on `/20-the-haircare-challenge` using the selected **Scale contrast** direction. Words stay byte-for-byte identical — only typographic hierarchy changes, so the eye lands on `longest / healthiest / shiniest / of your life` first.

## Selected lockup (mobile, ~340px column)

```
Grow the          ← serif, 32px, regular
longest,          ← serif, 56px, black ITALIC
healthiest,       ← serif, 56px, black
shiniest          ← serif, 56px, black
hair of your life,← serif, 36px ; "of your life," in orange
without giving up the color, heat, and styling you love.
                  ← serif, 22px, orange, regular (sentence 2 kept)
```

Left-aligned, tight leading (`1.05`), `-0.02em` tracking. Single orange accent (#E97B00) reserved for the payoff phrase and the second sentence. No rotations, no SVG underlines, no highlight pills.

Desktop scales the same lockup up proportionally (~40 / 76 / 76 / 76 / 48 / 28).

## Files (scoped to /20 fork only)

1. **`src/features/haircare-challenge-v20/sections/Hero.tsx`**
   Replace the current two-span H1 with a structured stack:
   ```tsx
   <h1 className="h-hero hero-h1 hero-h1-stack" style={{ marginBottom: 12 }}>
     <span className="hh-intro">Grow the</span>
     <span className="hh-key hh-key-italic">longest,</span>
     <span className="hh-key">healthiest,</span>
     <span className="hh-key">shiniest</span>
     <span className="hh-tail">hair <span className="hh-payoff">of your life,</span></span>
     <span className="hh-sub">without giving up the color, heat, and styling you love.</span>
   </h1>
   ```
   Every word identical to today — only re-grouped into spans for hierarchy.

2. **`src/features/haircare-challenge-v20/haircare-challenge-v20.css`**
   Add a scoped block under `.hq-sp-v20`:
   - `.hero-h1-stack` — `display: flex; flex-direction: column; line-height: 1.05; letter-spacing: -0.02em;`
   - `.hh-intro` — 32px regular, black
   - `.hh-key` — 56px black (900), black, tracking -0.03em
   - `.hh-key-italic` — adds `font-style: italic` to the first key (`longest,`)
   - `.hh-tail` — 36px black; `.hh-payoff` — orange (#E97B00)
   - `.hh-sub` — 22px orange, regular, mt 10px
   - Mobile (`@media (max-width: 640px)`) overrides bumping sizes to fit 340px column; **remove** the existing flat `.hero-h1 { font-size: 28px/30px !important }` rules that currently flatten the headline
   - Desktop (`@media (min-width: 900px)`) bumps to ~40 / 76 / 76 / 76 / 48 / 28

3. No other files touched. No changes to /17, /18, /19, sections list, route, head meta, or copy.

## Out of scope

- No new fonts (reuses Fraunces already loaded).
- No copy edits.
- No layout changes to the hero image, trust pill, CTA, or anything below the H1.

Ready to implement on switch to build mode.
