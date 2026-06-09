## Scope
Edit only `src/features/haircare-challenge-v17/sections/Science.tsx` and `src/features/haircare-challenge-v17/haircare-challenge-v17.css`. No changes to v14 or any other route. Mobile-first.

## What changes (top of Science section only)

**Remove:**
- Top Reveal block: eyebrow "WHY is it happening?" + italic h2 "Your hair didn't get worse…"
- `.biology-callout` wrapper (eyebrow + headline + body)
- Old `.biology-tile-row` (3 emoji tiles with short subs)

**Replace with a single, tighter unit:**

1. **Section headline (promoted):**
   - `h2.h2`: "It's not you. It's your biology."
   - Sub-line (single sentence, normal weight): "In your 30s, your body changes faster than the products on your shelf do. Same routine. Different body. That's the gap."

2. **One 3-column card system** (replaces both old systems). Each card:
   - Small uppercase label (var(--orange-600), letter-spacing): `ESTROGEN DROPS` · `CORTISOL CLIMBS` · `NUTRIENTS DON'T LAND`
   - Short body copy (per user's text):
     - From your mid-30s, estrogen quietly declines. DHT — the hormone that shrinks follicles — gets the upper hand. Wider part. Thinner ponytail.
     - Career, kids, the mental load. Your body deprioritises hair when it's busy keeping you upright. More follicles shed early than they should.
     - Iron, ferritin, zinc, B12 — the exact nutrients your follicles need — drop with age and absorb less efficiently than they did at 25.

3. **Bridge line** below the cards, centered, slightly emphasized:
   "You can't fix an inside change with an outside product."

Everything below this (the `.science-leadin` 1/2/3 cards, fault rail, green callout, reassurance, quote, ghost CTA) stays untouched.

## Mobile-first layout (cards)
New class `.biology-cards-v2` scoped under `.hq-sp-v17`:
- Default (mobile): `display: grid; grid-template-columns: 1fr; gap: 14px;` — cards stack full-width.
- `@media (min-width: 760px)`: `grid-template-columns: repeat(3, 1fr); gap: 18px;`
- Card: subtle cream/lavender bg, 16px radius, 18px padding, no heavy borders.
- Label: 12px, 700, uppercase, tracking ~0.08em, orange.
- Body: 15px / 1.5, ink.

Bridge line: `.biology-bridge` — centered, max-width 560px, italic serif, 18–20px mobile, 22px desktop, margin-top 20px.

## Technical details
- Reuse existing tokens (`--orange-600`, `--ink`, `--cream`, `--lavender`, `--font-serif`).
- Keep the existing outer `<section className="bg-white" id="science">` and `.wrap` — only swap the inner top blocks.
- Delete CSS rules `.biology-callout*` and `.biology-tile*` only if unused elsewhere in v17 (they are not used by v14 since v14 has its own CSS file). Quick grep before removal; if unsure, leave the orphan CSS rules in place.
- Verify by viewing /17-the-haircare-challenge at 390px and 942px.

## Out of scope
- v14 page, fault rail, leadin cards, quote, CTAs, any other section.
