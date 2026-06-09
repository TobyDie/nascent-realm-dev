## Goal
Add small inline images BELOW the text inside specific timeline beats on `/17-the-haircare-challenge` to break up the long text and make it skim-friendly. Same section structure, same copy, same order, same dot/marginalia/meter elements — images are additive.

Scope: ONLY `src/features/haircare-challenge-v17/sections/Recognition.tsx` + scoped CSS under `.hq-sp-v17` in `src/features/haircare-challenge-v17/haircare-challenge-v17.css`. v14 page and all other routes untouched.

## Per-beat image plan

| # | Beat | Image count | Layout |
|---|---|---|---|
| 1 | ✂️ Won't grow long | **1** | single small square (~140px), left-aligned under text |
| 2 | 🪞 Scalp through part | **2** | side-by-side pair (squares, ~46% each), small gap |
| 3 | 🌫️ Greys appearing | **1** | single small square (~140px), left-aligned under text |
| 4 | 🧴 Nothing works | **0** | no image (meter stays as-is) |
| 5 | 📷 Hair up in every photo | **1 horizontal** | full-width banner image, ~16:7 ratio (photo strip stays as-is above or is replaced — see note) |

All images use placeholder R2 files (user will swap later):
- Beat 1: `profile-1.webp`
- Beat 2a: `profile-3.webp`, Beat 2b: `profile-5.webp`
- Beat 3: `profile-7.webp`
- Beat 5: `hairloss-before-after.webp` (already in v17, horizontal)

User can change filenames in a follow-up — the markup is the contract.

## Layout

```text
Beat 1                       Beat 2                       Beat 3
• ✂️ trigger…                • 🪞 trigger…                • 🌫️ trigger…
  consequence…                 consequence…                 consequence…
                               ↘ marginalia                 ↘ marginalia
  ┌─────┐                    ┌─────┐ ┌─────┐              ┌─────┐
  │ img │                    │ img │ │ img │              │ img │
  └─────┘                    └─────┘ └─────┘              └─────┘

Beat 4                       Beat 5
• 🧴 trigger…                • 📷 trigger…
  consequence…                 consequence…
  [meter ~$2,000]              ┌────────────────────────┐
  (no image)                   │   horizontal image     │
                               └────────────────────────┘
```

Sizing:
- Single small (`.timeline-img--sm`): `width: min(140px, 40%)`, `aspect-ratio: 1/1`, `border-radius: 10px`, soft shadow, `margin: 12px 0 0` (sits under text, left-aligned to match dot indent).
- Pair (`.timeline-img-pair`): flex row, `gap: 8px`, each child `flex: 1`, `aspect-ratio: 1/1`, max combined width `min(300px, 90%)`.
- Horizontal (`.timeline-img--wide`): `width: 100%`, `aspect-ratio: 16/7`, `object-fit: cover`, `border-radius: 12px`, soft shadow, `margin-top: 12px`.
- All images: `loading="lazy"`, `decoding="async"`, `object-fit: cover`, `display: block`.

Visual treatment: subtle shadow `0 6px 18px rgba(20,20,40,.08)`, rounded corners — quiet and editorial. No tilt, no polaroid frame (keeps the section's existing clean rhythm).

## Changes

### 1. `Recognition.tsx`
- Insert `RImg` blocks at the END of each target beat's content (after marginalia/meter), wrapped in the appropriate class:
  - Beat 1 → one `<div class="timeline-img timeline-img--sm">` with `RImg file="profile-1.webp" widths={[200, 400]} sizes="(max-width: 760px) 40vw, 160px"`.
  - Beat 2 → `<div class="timeline-img-pair">` containing two `RImg` blocks (`profile-3.webp`, `profile-5.webp`), each with `sizes="(max-width: 760px) 45vw, 150px"`.
  - Beat 3 → one `<div class="timeline-img timeline-img--sm">` with `RImg file="profile-7.webp"`.
  - Beat 4 → unchanged.
  - Beat 5 → one `<div class="timeline-img timeline-img--wide">` with `RImg file="hairloss-before-after.webp" widths={[500, 800, 1200]} sizes="(max-width: 760px) 92vw, 720px"`. Existing `.timeline-photos` strip is REMOVED (the horizontal image replaces it — cleaner, less redundant). If you'd rather keep the 6-square strip AND add the horizontal image above it, say so and I'll keep both.
- Alt text is short, descriptive, neutral (placeholder copy noted as "TODO swap").
- No copy changes. No reordering. CTA, Abigail testimonial, header block all untouched.

### 2. `haircare-challenge-v17.css` (scoped under `.hq-sp-v17`)
- New `.timeline-img` (block, `margin-top: 12px`).
- New `.timeline-img--sm img { width: min(140px, 40%); aspect-ratio: 1/1; object-fit: cover; border-radius: 10px; box-shadow: 0 6px 18px rgba(20,20,40,.08); display: block; }`
- New `.timeline-img-pair { display: flex; gap: 8px; margin-top: 12px; max-width: min(300px, 90%); }` with `.timeline-img-pair img { width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 10px; box-shadow: …; display: block; }`
- New `.timeline-img--wide img { width: 100%; aspect-ratio: 16/7; object-fit: cover; border-radius: 12px; box-shadow: …; display: block; }`
- All new classes namespaced under `.hq-sp-v17` so they cannot leak.

## Out of scope
- No new image uploads / no AI gen (user will swap filenames later).
- No copy, hierarchy, CTA, or testimonial changes.
- No edits to v14 page or any other route.
- No changes to existing `.timeline-marginalia` or `.timeline-meter` (Beat 4 meter stays).

## Verification
- `rg "timeline-img" src/` matches only files under `src/features/haircare-challenge-v17/`.
- Visual check at 390×680: each named beat shows its image(s) under the text; Beat 4 unchanged; Beat 5 ends with a horizontal banner.
