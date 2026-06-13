## Scope

Redesign the visual presentation of the 5 pointers in `src/features/haircare-challenge-v20/sections/ResultsIn2Weeks.tsx`. **All existing copy stays byte-for-byte identical** — eyebrow, H2, the 5 titles, the 5 descriptions, and the CTA. Only visual treatment, layout, and added decorative graphics change.

## Why it's boring now

- 5 identical white rounded cards + 5 identical orange emoji circles = visual monotony.
- The section's promise is "in 2 weeks" but nothing on screen signals progression or time.
- Emoji-as-icon reads casual/AI-generic; not editorial.

## Concept: "The 14-day shift list" — editorial timeline

Reframe the 5 unchanged pointers as a dated transformation journal with magazine-grade asymmetry. Each row gains a numbered chapter (01–05), a day tag (Day 3 → Day 14), a soft pastel wash that rotates per row, and a custom inline SVG glyph beside (not replacing) the existing emoji. A faint dashed rail runs down the left so the eye reads it as a journey, not a list.

The day tags and 01–05 numerals are **added supporting graphics**, not copy edits — they don't replace or alter any sentence in the section.

## Layout per row

```text
                  ┌─ DAY 3 ─┐
   01    (☼ peach + 💧)  Less shedding
   │                    Real decrease in hair loss — not...
   │
                          ┌─ DAY 5 ─┐
       02    (✿ blush + 💁) Visible thickness — not styling tricks
            Density that shows up...
   │
   ⋮  (dashed vertical journey rail on the left, faint)
```

- Container: vertical stack, max-width 720px, gap 28px desktop / 20px mobile.
- Per row: CSS grid `grid-template-columns: 64px 1fr` (numeral column + body).
- Numeral column: large serif outline `01`–`05`, 52px, `var(--font-serif)`, `-webkit-text-stroke: 1px var(--orange-500); color: transparent;` — magazine drop-cap feel.
- Body column: small day-tag pill (DAY 3 … DAY 14) + the existing emoji bubble kept at smaller size next to a new custom SVG glyph. Below: existing title (unchanged) in current heading style, then existing description (unchanged) underneath.
- Soft pastel wash behind the body block: `linear-gradient(135deg, <tint>, transparent 60%)`, low opacity, `border-radius: 18px`, `padding: 18px 20px`. Five tints rotate: peach `#FCE7D8`, blush `#FBE3E3`, sage `#E6EFE3`, cream `#FFF7E8`, lavender `#EFEBF6`. No border, no shadow.
- Journey rail: absolutely-positioned dashed vertical line on the left behind the numerals, color `var(--orange-200)` (one new token), faint. Stops at the last numeral.
- Asymmetric offset: rows 2 and 4 get `margin-left: 28px` on desktop; mobile resets to 0.

## Custom SVG glyphs (additive — emojis stay)

Five hand-drawn-feel inline SVGs (24×24, 1.5px stroke, rounded caps, `currentColor`) placed beside each existing emoji bubble — they add visual variety without removing the current iconography:
1. Comb with a falling strand — beside row 1
2. Ponytail tie with arrows out — beside row 2
3. Drop with a small ripple — beside row 3
4. Strand with a check mark — beside row 4
5. Sprout from a follicle circle — beside row 5

## Day tags (added decorative chips, not copy)

`DAY 3`, `DAY 5`, `DAY 7`, `DAY 10`, `DAY 14` — small caps pill chips above each row's existing title. These are added UI labels, not edits to any existing sentence.

## Motion (subtle, respects reduced-motion)

- Existing `Reveal` primitive handles entrance, stagger `i * 90ms`.
- The 01–05 numerals draw in via `stroke-dashoffset` (1.2s ease-out) on first view — pen-stroke feel.
- Each SVG glyph does a one-time `rotate(-6deg) → 0` settle on view.
- All disabled under `@media (prefers-reduced-motion: reduce)`.

## Files to change

1. `src/features/haircare-challenge-v20/sections/ResultsIn2Weeks.tsx` — restructure the row JSX to add: numeral column, day-tag chip, decorative SVG glyph, tint wash class. **Existing title and description strings are passed through verbatim**; the underlying `RESULTS`/`items` array is not edited. Eyebrow, H2, CTA, and section bg untouched.
2. `src/features/haircare-challenge-v20/haircare-challenge-v20.css` — replace `.result-row` / `.result-emoji` rules and their mobile overrides with `.shift-list`, `.shift-row`, `.shift-num`, `.shift-tag`, `.shift-glyph`, `.shift-body`, `.shift-wash`, `.tint-1`…`.tint-5`, plus dashed journey rail and reduced-motion rules. Add `--orange-200` once in the v20 scope.
3. No new packages, no new files, no other sections touched.

## Mobile (≤480px)

- Single column, gap 18px, no asymmetric offset.
- Numeral shrinks to 40px and sits inline above the title.
- Glyph + emoji bubble shrink to 28–32px; day tag stays inline with them.

## Guardrails

- **No text changes anywhere.** Every existing word — eyebrow, H2, the 5 titles, the 5 descriptions, CTA — is preserved exactly.
- Added: numerals `01–05`, day-tag chips, decorative SVGs, tint washes, dashed rail. All purely visual.
- Scoped to `.hq-sp-v20` per page-fork rule. /20 only — /17, /18, /19 untouched.
- No new icon libraries; SVGs are inline.
- Section vertical rhythm and CTA position stay the same; vertical height stays within ~±20px of current.
