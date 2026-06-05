## Goal

Replace the current 6-card grid/carousel ("Does any of this sound familiar?") with a single skim-friendly stacked list, on both mobile and desktop. The reader should be able to nod along in 10 seconds: bold trigger sentence → quiet consequence clause → subtle realisation cue.

## New section header

- Eyebrow: `WHAT IS HAPPENING`
- Headline (serif H2): `Somewhere in your 30s, this started happening:`
- Subhead removed (no extra fluff).
- Centered, contained inside a soft cream pill block (matches reference).

## New copy — 6 rows, "trigger → consequence" pattern

Each row: **bold trigger** (with 1 emoji for focus) — `softer consequence clause in muted ink`, with optional handwritten side-note in orange/blue script for the realisation beat.

1. ✂️ **It won't grow long like it did in your 20s** — so you cut it shorter, then shorter, *until you stopped trying for the hair you actually want.*
2. 🪞 **You can see your scalp through your part now** — so you part it differently and wear it up, *which hides it but never finds what's causing it.*  → handwritten note: `you never found out`
3. 🌫️ **Greys you didn't have a year ago** — so you colour them, and the dye stresses already-fragile hair, *so it breaks, so you colour again.* → handwritten note: `making your hair age even faster`
4. 🧴 **Nothing you buy seems to work** — so you reach for the next better shampoo, the next salon visit, *close to $2,000 by now, and you're still watching it fall.*
5. 📷 **You've started wearing it up in every photo** — down makes you anxious, *so up became the default, and you like your photos a little less each year.*
6. 💔 **No one comments on your hair anymore** — you used to be the woman known for it, *and you want her back.*

Color treatment inside each row:
- Bold trigger: ink, serif weight.
- "so you …" middle clause: muted slate.
- Italic consequence tail: orange-700 (the recognition punch).
- Handwritten side-notes: existing `Hand` primitive, rotated −3°, blue or orange.

## Layout & visual treatment

- One vertical stack, full width of `.wrap` (max ~720px), centered.
- Each row is a card: white background, `border: 1px solid var(--line)`, radius 14, padding `18px 22px`, soft shadow on hover.
- 4px orange accent bar on the left edge of every card (matches reference).
- Vertical gap between cards: 14px.
- Rows reveal one-by-one with the existing `Reveal` primitive, staggered ~70ms.
- 2–3 rows carry a hand-drawn annotation:
  - Row 2: blue `you never found out` (Hand, rotate −2°), tucked under the consequence tail.
  - Row 3: blue `making your hair age even faster` (Hand, rotate −3°), tucked under the right side.
  - One subtle `HandArrow` between rows 4 and 5 pointing down-right to add rhythm.
- Header sits in a soft cream rounded block (`background: var(--cream)`, radius 18, padding `22px 28px`), centered, max-width 560px.

## Mobile rules (no carousel)

- Same vertical stack, full width with 16px horizontal padding.
- Cards shrink to padding `16px 16px`, trigger sentence stays bold serif at ~17px.
- Hand-drawn side-notes move below the row text on mobile (not floated right) so they don't crowd.
- Remove the `Carousel` wrapper and the "Swipe to read them all →" hint entirely.

## Files to touch

- `public/14-the-haircare-challenge/src/sections-a.jsx` — rewrite the `Recognition` function: new header block, new `rows` data shape `{ emoji, trigger, mid, tail, note? }`, replace `<Carousel>` + `.reco-grid` with a single `<ol className="reco-stack">`. Keep the existing `InlineTestimonial` (Hannah) and "Tell me why this is happening" link below — only the recognition list itself changes.
- `public/14-the-haircare-challenge/index.html` — add CSS for `.reco-stack`, `.reco-row`, `.reco-row::before` (left orange bar), `.reco-trigger`, `.reco-mid`, `.reco-tail`, `.reco-note`, and the header pill `.reco-header-block`. Remove `.reco-card`, `.reco-emoji`, `.reco-grid` rules that are no longer used.

## Out of scope

- No images, illustrations, or icons beyond the 6 inline emoji.
- No changes to surrounding sections (Hero above, Science below).
- Existing `InlineTestimonial` and the soft CTA link at the bottom of the section stay as-is.
