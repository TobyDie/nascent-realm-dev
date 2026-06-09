## Goal
Rebuild the sticky bar on `/17-the-haircare-challenge` to be visually quiet, properly aligned, and shorter vertically. Keep the progress bar (it's the most useful urgency cue) but make it ultra-thin. Everything else: smaller, calmer, perfectly aligned.

Scope: ONLY `src/features/haircare-challenge-v17/` (StickyCta.tsx + haircare-challenge-v17.css under `.hq-sp-v17`). No other route, no shared file, no v14 page touched.

## Final layout (mobile, ~56px tall total)

```text
┌────────────────────────────────────────────────────────┐
│ ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ │ ← 2px progress bar, flush to top edge
│                                                        │
│  85% OFF · 09:42:17           ┌──────────────────┐    │ ← row 1: tiny label + mono timer
│  Jun 6 · 312 women joining    │   Join now  →    │    │ ← row 2: muted supporting line
│                               └──────────────────┘    │
└────────────────────────────────────────────────────────┘
```

## Changes

### 1. `StickyCta.tsx` JSX restructure
- Move the progress bar OUT of the meta column and render it as the first child of the outer container (full-width, flush to the top border). Removes the awkward bar-between-text-lines feel.
- Row 1 (meta): single line — `85% OFF` (label) + bullet separator + `HH:MM:SS` (mono). Drop the word "ENDS IN" entirely. Inline dot keeps it tight.
- Row 2 (meta): `Jun 6 · 312 women joining`. Single line, `white-space: nowrap; overflow: hidden; text-overflow: ellipsis`. Drop the "Next cohort:" prefix — date alone reads cleanly.
- Outer padding `8px 14px 10px` (was `10px 16px`).
- Remove the `gap: 4` on meta column; rely on natural line-height.
- Keep `pointer-events: none` on meta block.

### 2. Button
- Tighten to `padding: 11px 16px; font-size: 13.5px; min-height: 44px; border-radius: 12px`. Aligns with the slimmer meta column.
- Stays right, vertically centered against the 2-line meta.

### 3. CSS adjustments (`.hq-sp-v17` only)
- `.sticky-urgency-bar`: move to top, height `2px`, no border-radius, full bleed (no horizontal padding interference).
- `.sticky-urgency-line`: `font-size: 11px` label, `font-size: 13px` timer, gap `6px`, single line.
- New `.sticky-urgency-sub`: `font-size: 11.5px; font-weight: 500; color: var(--slate); line-height: 1.3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` with the date span in `var(--orange-700) / weight 700`.
- Remove the old inline-styled cohort line styling from JSX (move into CSS class).

## Out of scope
- No changes to thumb-stop testimonials, Recognition CTA sequence, hero, or any other section.
- No JS behavior change (countdown math, drainPct, visibility logic untouched).
- No edits outside `src/features/haircare-challenge-v17/`.

## Verification after build
- `rg "sticky-urgency" src/` should match only files under `src/features/haircare-challenge-v17/`.
- Visual check at 390×680 to confirm new height ≈ 56px and alignment.
