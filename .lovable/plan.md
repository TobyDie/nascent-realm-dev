# Redesign: "What's Actually Happening" section (/20 only)

## Problem with current UI
- The bold lead-in reads like a **heading**, breaking scan flow.
- Half the sentence is **black**, half **orange** — both heavy weights → shouty, hard to skim.
- Five dense paragraphs on a flat dotted timeline → nothing for the eye to grab.

## Intent of the section
Make the reader nod: *"that's me."* Five quick gut-punches, not five paragraphs. Each item = a small confession → quiet consequence.

## New UI: "Confession cards"
Each pain point becomes a small conversational card with three readable layers — using the **exact existing copy** (`lead`, `neutral`, `accent`), nothing rewritten, nothing deleted.

```
┌──────────────────────────────────────────────┐
│  01                                          │  ← small handwritten orange number
│                                              │
│  You got keratin treatments                  │  ← lead (serif, regular weight, ink)
│  and for a few weeks it looked incredible,   │  ← neutral (sans, slate)
│                                              │
│  ↳ then left your hair worse than before,    │  ← accent (sans, italic, indented under
│    so you booked the next one. And the next. │     a small orange ↳ — feels like the
│                                              │     quiet aftermath thought)
└──────────────────────────────────────────────┘
```

### Visual rules
- **No bold-orange blocks.** Orange is reserved for: the small number (`01`–`05`) and the ↳ glyph. The `accent` text itself uses `var(--ink-soft)` italic — readable, not shouty.
- **Lead line**: serif (Georgia), 19–21px, regular weight (not bold), color `var(--ink)`. Feels like the reader's own voice, not a heading.
- **Neutral line**: sans, 16px, `var(--slate)`. Continues the thought.
- **Accent line**: sans, 15px, italic, `var(--ink-soft)`, indented with a small orange `↳` glyph.
- **Card**: white surface, 1px `var(--line)` border, 18px radius, 22px padding, soft hover lift.
- **Number badge**: 24–28px caveat font, `var(--orange-600)`, top-left corner of card.
- Cards stack vertically with 14px gap. **No vertical timeline line** — the numbers carry the sequence and let the reader skim.
- Optional 3px orange left accent strip per card for rhythm.

### Important
The three text fragments per item (`lead`, `neutral`, `accent`) are rendered **verbatim** from the existing data array. No copy rewriting, no additions to the text, no deletions. The only added text is the visual "01"–"05" numerals.

## Header
Unchanged (eyebrow, headline, sub paragraph all stay).

## Closing
Inline testimonial + CTA link below the cards stay exactly as today.

## Files to change
- `src/features/haircare-challenge-v20/sections/Recognition.tsx` — restructure JSX into the new card shape. Keep the existing `lead` / `neutral` / `accent` data array text **unchanged**.
- `src/features/haircare-challenge-v20/haircare-challenge-v20.css` — add scoped styles (`.hq-sp-v20 .confess-card`, `.confess-num`, `.confess-lead`, `.confess-neutral`, `.confess-accent`) under the v20 root class. Existing `.timeline-*` / `.reco-*` styles left untouched.

## Scope guardrails
- Edits only inside `src/features/haircare-challenge-v20/`. No other route or page touched.
- No new dependencies, images, or copy changes.
