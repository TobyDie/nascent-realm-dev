# Redesign: `/18` Hero Carousel Section

Scope: ONLY `src/features/haircare-challenge-v18/sections/HeroCarousel.tsx` + the `.hq-v18-hc-*` rules in `haircare-challenge-v18.css`. Zero spillover to /14, /17, /19, or the base feature folder.

---

## Problems being fixed

1. **No mobile thumbnails** — users can't see how many slides remain or jump ahead.
2. **Image and text feel like two separate cards** — swiping the image leaves the text behind visually, which reads as broken. Horizontal swipe also competes with the page's vertical scroll.
3. **CTA disappears when text gets long** — conversion risk.
4. **Typography doesn't match the rest of /18** — looks like a bolted-on widget.
5. **Section has no visual identity** — blends into the page so it doesn't feel like a "story" worth tapping through.

---

## New layout (mobile-first, 390px reference)

```text
┌─────────────────────────────────────┐
│  ░░ distinct cream/lavender bg ░░   │  ← whole section
│                                     │
│   "Sarah's story · swipe →"  eyebrow│
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │       IMAGE (4:5)             │  │  ← single unified card
│  │                               │  │     image + text live INSIDE
│  │   ⌐ chapter chip    1/6 ¬     │  │     one rounded container,
│  │                               │  │     swipe moves the whole card
│  │  ─────────────────────────    │  │
│  │   Headline (matches /18 type) │  │
│  │   Caption (1–2 lines)         │  │
│  └───────────────────────────────┘  │
│                                     │
│   ● ● ● ○ ○ ○   ← mobile thumb strip│  ← small image thumbs (NEW on mobile)
│                                     │
│  ┌───────────────────────────────┐  │
│  │   Start the 14-Day Challenge  │  │  ← CTA pinned BELOW card,
│  └───────────────────────────────┘  │     ALWAYS visible (not inside slide)
│   See real results →                │
│   ★ 4.9 · 250k women · 149 countries│
└─────────────────────────────────────┘
```

### Key structural changes

- **One card, not two.** Image + headline + caption become a single Embla slide (image on top, copy block underneath inside the same rounded white card with shared shadow). Swiping animates the whole card horizontally → reads as one object, not two disconnected panels.
- **CTA lives OUTSIDE the carousel**, directly below it, always rendered, never re-mounted between slides → guaranteed visible during entire interaction. Trust strip + secondary link also outside.
- **Mobile thumbnail strip** (NEW): horizontal row of 6 tiny 36×44 image thumbs under the card. Active thumb gets a 2px primary-color border + slight scale. Tapping jumps to that slide. Replaces the current "1 of 6" chip as primary progress affordance (chip stays as backup).
- **Swipe affordance**: eyebrow reads "Sarah's story · swipe →" with a subtle right-pointing arrow that does a 1.5s ease-in-out nudge animation on mount (respecting `prefers-reduced-motion`). Also a partial peek of the next card (~6%) on the right edge to telegraph horizontal motion.
- **Vertical scroll is preserved.** Embla already only captures horizontal gestures; we'll set `watchDrag` to true with `dragThreshold: 12` so vertical scroll wins on near-vertical motion.

---

## Visual / brand alignment

- **Section background**: distinct from page. Use a soft warm gradient `linear-gradient(180deg, #FBF4EA 0%, #F3E7D7 100%)` (cream → deeper cream) with a 1px top/bottom hairline in `rgba(0,0,0,0.06)`. This makes the section read as its own "chapter" and matches the cream tone already used in `ThumbStop tone="cream"` blocks on /18.
- **Card surface**: pure white, `border-radius: 20px`, `box-shadow: 0 10px 30px -12px rgba(40,20,10,0.18)`.
- **Typography**: switch headline/caption to the same font stack the rest of /18 uses (inherit from `.hq-sp-v18` — currently using its serif display for h1s and sans for body). Headline goes to `clamp(20px, 5.4vw, 26px)`, line-height 1.2, weight 600. Caption `15px/1.5`, color `#3b2f25`. Drops the current generic system styling.
- **Chapter chip**: change from dark pill to a small uppercase letter-spaced label `#8a6a3b` on translucent cream — feels editorial, not button-like.
- **Mobile thumbs**: rounded 8px, 1px hairline border, active = 2px `#C2410C` (warm accent matching page).

---

## Desktop (≥860px)

- Same single-card structure, but card becomes a 2-col split inside the slide (image left 55%, copy right 45%) so desktop doesn't waste vertical space.
- Keep existing left/right arrow buttons.
- Replace large thumbnail-row-under-copy with the same compact thumb strip used on mobile, centered under the card.
- CTA + trust strip stay below the card, full-width-of-card, centered.

---

## Behavior preserved from current build

- 6 slides, verbatim copy unchanged.
- `aria-roledescription="carousel"`, per-slide `role="group"`, polite live region.
- Keyboard ← → navigation.
- Slide 1 `<h1>`, slides 2–6 `<h2>`.
- Slide 1 image `loading="eager" fetchpriority="high"`; rest lazy.
- All existing analytics attrs (`hero_slide_view`, `hero_cta_click`, `hero_secondary_click`, `hero_dropoff`, `hero_advance`) — plus new `hero_advance` emitted on swipe and arrow too (closes one of the earlier gaps).
- `prefers-reduced-motion` disables swipe nudge + any transitions.

---

## Files touched (v18 only)

- `src/features/haircare-challenge-v18/sections/HeroCarousel.tsx` — restructure JSX (single card, CTA outside carousel, mobile thumb strip, swipe-hint eyebrow).
- `src/features/haircare-challenge-v18/haircare-challenge-v18.css` — replace `.hq-v18-hc-*` block with new styles (cream gradient bg, unified card, mobile thumb strip, type alignment, peek). All class names stay `.hq-v18-hc-*` scoped under `.hq-sp-v18`.

No other files change. /14, /17, /19, base `haircare-challenge` untouched.

---

## Out of scope (ask if wanted)

- Replacing slide 2–6 placeholder images with real photos.
- Auto-advance / loop (still off per original brief).
- Changing slide copy.

Ready to build on approval.
