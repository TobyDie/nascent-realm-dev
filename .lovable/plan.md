## Goal
On `/20-the-haircare-challenge`, the 5 cards in "What's actually happening" feel repetitive — same card color, same layout, same rhythm. Users skim past. Make each card visually distinct so the eye is forced to slow down and read. Also remove the "the loop repeats" closing doodle.

No copy changes. Only the 5 cards in `Recognition.tsx` + scoped CSS in `haircare-challenge-v20.css`.

## Changes

### 1. Per-card color variation (break monotony)
Add a `data-variant="1..5"` attribute to each `.cycle-card`. Each variant gets its own scoped palette (card background tint, accent box tint, number color shade, glyph node ring tint) — all pulled from the existing v20 warm/peach/cream/lavender system so it stays on-brand.

- Card 1 — cream/ivory base, soft peach accent box
- Card 2 — soft lavender base, dusty rose accent box
- Card 3 — warm blush base, terracotta accent box (heaviest — escalation peak)
- Card 4 — pale sand base, muted clay accent box
- Card 5 — off-white with subtle gray wash, faded peach accent box (resignation tone)

Number outline color and glyph ring also tint per variant so the eye registers "different card" instantly.

### 2. Break the isometric structure
Right now every card is the same width, same padding, same internal layout (number top-right, lead → neutral → accent stacked identically). Introduce variation that's still cohesive:

- **Card 1**: current layout (baseline anchor).
- **Card 2**: number moves to top-left, slight rotation (-2°); card itself nudged 6px right.
- **Card 3**: full-bleed accent box (extends edge-to-edge inside the card), bigger number, card slightly wider with a soft shadow lift — this is the climax card.
- **Card 4**: number shrunk and inlined next to the lead text; accent box becomes a left-border quote style (no fill, thick left border) instead of filled pill.
- **Card 5**: card slightly narrower and shifted left; number rendered huge as a faint background watermark behind the text; accent box italic only, no background.

Each card stays recognizably part of the same family (same font, same strand connection, same glyph node) but the rhythm changes every row so the eye has to re-orient.

Slight rotation (±1–2°) on alternating cards and varied vertical spacing between cards (tighter between 1–2, looser between 3–4) further breaks the metronome feel.

### 3. Remove "the loop repeats"
Delete the `.cycle-loop` SVG + Caveat-font label block at the bottom of the section. The closing strand curve and CTA flow stay; only the doodle arrow + handwritten text are removed.

## Files
- `src/features/haircare-challenge-v20/sections/Recognition.tsx` — add `data-variant` to each card, restructure cards 2–5 per above, remove `.cycle-loop` block.
- `src/features/haircare-challenge-v20/haircare-challenge-v20.css` — add `.cycle-card[data-variant="N"]` rules (bg, accent, number color, transform, padding, shadow); adjust mobile breakpoint so variations degrade gracefully (drop rotations and offsets under 720px, keep color variation).

## Out of scope
- No copy changes.
- No changes to the connecting strand SVG or glyph icons themselves.
- No changes to other sections or other v17/v19/v21 pages.