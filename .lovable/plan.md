## What changes

In `Science()` (sections-a.jsx, ~lines 326–342), remove the "6 forces working on your follicles" block entirely (the eyebrow + factors-desktop grid + factors-mobile carousel + the factors data array if unused elsewhere).

Replace it with a new **"None of this was your fault"** reframe block using the copy from your screenshot — but redesigned to carry real emotional weight, not just three stacked beige boxes.

## Design intent

The current screenshot reads as three flat info cards. The gravity comes from the *reframe* — the user is being absolved, then handed hope. We design for that arc: two **"not your fault"** beats that visually feel like weight being lifted, then a **third moment** that flips tone — warmer color, a hand-drawn underline, slight scale shift — so the "easy" line lands like a release.

Key moves:
- **Vertical timeline rail** down the left (thin ink line + small dot markers), like a confession unfolding step by step. On mobile the rail stays on the left edge, cards stack tight against it.
- **Numbered beats** ("01 / 02") in muted ink for the first two, then a **"03 — finally"** label in orange for the turn.
- **Eyebrow tags** ("not your fault") rendered as small **hand-drawn pill stamps** (slight rotation, sketchy border using the existing HandArrow/SVG style) instead of flat green text — feels like someone literally stamped "not your fault" on each.
- **Serif headlines** stay large (matches existing h2/factor-name scale), but each gets a **subtle hand-drawn underline** under the most loaded word ("25", "buy", "easy") using the existing underline SVG asset already in the file.
- The **third card breaks the pattern**: warm peach background (`var(--peach)` / orange-50 tone already in palette), slightly larger, soft glow shadow, an inline hand-drawn arrow pointing from card 2 → card 3 to signal the turn.
- **No icons, no images.** Only: numbers, type, hand-drawn underlines, the rail, one connector arrow, and one emoji per card used sparingly inline in the headline (🙅‍♀️ for card 1, 🛍️ for card 2, ✨ for card 3) — matching the emoji-for-focus rule from the earlier "sound familiar" section.
- Existing orange CTA button stays at the bottom (already present below this block).

## Wireframe — desktop (~720px content column, centered)

```text
                  BEFORE YOU BLAME YOURSELF
            ──────────────────────────────────
              None of this was your fault.
            (serif h2, centered, generous space)


   │
   ●   01 ·  not your fault  (hand-stamped pill, rotated -2°)
   │
   │   You're still using a haircare routine 🙅‍♀️
   │   built for when you were ‾2‾5‾.   ← hand underline on "25"
   │   ─────────────────────────────────
   │   No one told you it would stop working — so you kept
   │   following what used to work, and wondering why
   │   nothing is working.
   │
   │
   ●   02 ·  not your fault
   │
   │   You tried to 🛍️ ‾b‾u‾y‾ the fix.   ← underline on "buy"
   │   ─────────────────────────────────
   │   In your 30s, you start to earn more money but have
   │   so much less time — so of course you invested in
   │   products. But you can't buy past what no one
   │   taught you to understand.
   │
   │              ↘  (hand-drawn arrow, rotated, ink)
   │
  ╔══════════════════════════════════════════════════╗
  ║ ●  03 · here's the part no one tells you  (orange)║
  ║                                                  ║
  ║   Once you learn how to care for your hair       ║
  ║   in your 30s, it's ✨ ‾e‾a‾s‾y‾.                 ║
  ║   ─────────────────────────────────────          ║
  ║   Fewer steps. Less money. Less effort and time. ║
  ║   It's only hard because understanding your hair ║
  ║   is the one thing the industry was never        ║
  ║   going to sell you.                             ║
  ╚══════════════════════════════════════════════════╝
        (peach bg, soft shadow, ~1.04× scale, no border)


              [  Show me what my hair needs now → ]
                    (existing orange CTA, unchanged)
```

## Wireframe — mobile (~360px)

Same vertical rail, full-width cards, rail hugs the left edge with ~20px gutter. Third card still breaks pattern (peach bg, larger headline, connector arrow above it stays but smaller and tucked between cards). Headlines wrap to 2–3 lines. No carousel — pure stacked vertical scroll, which suits the "confession unfolding" pacing.

```text
 BEFORE YOU BLAME YOURSELF
 None of this was
 your fault.

 │
 ●  01 · not your fault
 │
 │  You're still using a
 │  haircare routine 🙅‍♀️
 │  built for when you
 │  were ‾2‾5‾.
 │  ────────────────
 │  No one told you it would
 │  stop working...
 │
 ●  02 · not your fault
 │
 │  You tried to 🛍️
 │  ‾b‾u‾y‾ the fix.
 │  ...
 │       ↘
 ╔══════════════════╗
 ║ ● 03 · here's    ║
 ║   the part...    ║
 ║                  ║
 ║   ...it's ✨     ║
 ║   ‾e‾a‾s‾y‾.     ║
 ║   ...            ║
 ╚══════════════════╝

  [ Show me what my hair needs now → ]
```

## Technical notes

- New component lives in `sections-a.jsx` inside `Science()`, replacing the `science-factors-wrap` block (~lines 327–342). The `factors` array (lines 272–278) becomes unused — delete it.
- All new CSS classes go in `index.html` under a `.fault-*` namespace (`.fault-rail`, `.fault-beat`, `.fault-stamp`, `.fault-turn`, `.fault-card-final`).
- Hand-drawn underline reuses the existing `<Underline>` component already used in section 4.
- Hand-drawn arrow reuses `<HandArrow>` already imported in this file.
- Pill stamp = small `<span>` with dashed border + slight `transform: rotate(-2deg)`, no new asset.
- Rail = single absolutely-positioned `::before` line on the wrapper + small filled `●` dots on each beat — no SVG needed.
- The 6-forces eyebrow ("The 6 forces working on your follicles") and the "Swipe to see all six →" hint are both removed.
- The "Perimenopause doesn't start at 50" green callout below stays. The Renee quote stays. CTA stays.
