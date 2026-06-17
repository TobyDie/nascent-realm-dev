
## Goal
Make `/22-the-haircare-challenge` look and feel like the Glow Gummies "ft-listicle2" page — same typographic system, dual-color headlines, color tokens, section rhythm, hero layout, alternating peach backgrounds, and card styling — without breaking page isolation (`src/features/haircare-challenge-v22/` + `.hq-sp-v22` scope).

## What the reference actually does (design audit)

**Typography**
- Display face: a heavy condensed grotesk (Druk / Tusker-like — closest free pairing: **"Anton"** or **"Bebas Neue"** for the wordmark; **"Archivo Black"** or **"Inter Tight 900"** for headlines). Headlines are tight (line-height ~1.02), heavy 900, slight negative tracking.
- Body: clean humanist sans (Inter/Geist-like) at ~17px, line-height ~1.55, dark warm-gray (#2A2522 not pure black).
- Eyebrows: ALL-CAPS, **letter-spacing 0.18em**, tiny (11–12px), **orange** (`#F36A3A`), with a thin **underline divider** running across the column and the step number "01 / 02 …" right-aligned on the same row.

**Dual-color H1 pattern**
"**5 Reasons** Women Are Finally **Quitting Fake Tan**" — orange + black words interleaved. Each reason H2 is **entirely orange** (`#F36A3A`). Body text stays near-black.

**Color & surface system**
- Page bg alternates: **off-white `#FFFBF7`** ↔ **peach `#FBEDE2`** band per section.
- Accent orange `#F36A3A`; deep orange (hover) `#D9501F`.
- Pill CTA: full-width on mobile, big rounded-pill orange, white uppercase label, subtle drop shadow.
- Announcement bar: peach (not deep orange) with orange uppercase text + bullet separators.
- Risk-strip pill ("TAN SKIN OR MONEY BACK") is a **small inline pill above the H1**, not a full-width bar.

**Hero composition (desktop)**
- 2-column split: left = large rounded image with a **floating white testimonial card** overlapping the bottom-left corner (5 stars, quote, name, "Verified Customer" check). Right = small pill chip, H1, lede, full-width CTA, stars row.
- Mobile = stacked, image first OR after CTA (reference uses image left/text right desktop, stacked mobile).

**Reason sections**
- Eyebrow row with orange underline + right-aligned step number.
- H2 (all orange).
- Full-bleed rounded image.
- Body copy, no card chrome — just type on the bg.
- Quotes are inline italic body, not boxed.

**Result cards**
- Horizontal layout: photo left, name + "DAY 32 RESULTS" label, quote, "Key Concerns:" tag pills (peach bg, orange text).

**Stats**
- 3 huge orange numerals (~96px), short caption beneath, centered, on peach band.

**Marquee CTA strip**
- Big orange uppercase Archivo-Black text with dot separators, on white between peach sections.

## What v22 currently has vs needs to change

| Area | Current v22 | Change to match |
|---|---|---|
| H1 | Single ink color | Dual-color: orange + ink words, heavier display font |
| Display font | Archivo 800 | **Archivo Black 900** (or Anton) with `letter-spacing: -0.02em`, `line-height: 1.02` |
| Reason H2 | Ink color | **Entirely orange `#F36A3A`** |
| Eyebrow | Orange caps only | Caps + **orange hairline underline across column** + **right-aligned step number** on same row (remove separate `v22-bignum`) |
| Announcement bar | Deep orange bg, white text | **Peach `#FBEDE2` bg, orange uppercase text**, dot separators |
| Risk strip | Full-width peach band | Small **inline pill** placed above hero H1 |
| Hero layout | Stacked, image below | **2-col desktop split**: image left w/ floating testimonial card; copy right. Stacked mobile. |
| Page bg | Flat off-white | **Alternating bands**: hero off-white → reason-01 peach → reason-02 white → reason-03 peach … |
| Section rhythm | 64/88px margins | Tighter inner padding (72–96px vertical), full-bleed bands edge-to-edge |
| CTA | Pill orange | Keep, but +subtle `box-shadow: 0 10px 24px rgba(243,106,58,.28)` and slightly larger radius/height on desktop |
| Stars row | Small muted | Orange stars, larger, bullet-separated "4.9 Stars • 250,000+ Reviews" |
| Result cards | Vertical card w/ shadow | **Horizontal**: square photo left, name+day label, quote, peach tag pills, no heavy shadow |
| Stats numerals | 48px | **88–96px**, tighter tracking, peach band |
| Marquee CTA | Already close | Make text Archivo Black, ensure dot separators render correctly |
| Quote blocks | Left orange border | Convert to inline italic body paragraph + em-dash attribution (reference has no boxed quotes) |
| Floating chip | Top center pill | Keep, but restyle to match testimonial card: white, 5-star row, italic quote, small "Verified Customer" tick |

## Implementation steps (all inside `src/features/haircare-challenge-v22/`)

1. **`22-the-haircare-challenge.tsx` route**: add font links for **Archivo Black 900** and **Inter 400/500/700** (Archivo Black is a separate family from Archivo).
2. **`listicle-v22.css`** — token + style overhaul:
   - Update tokens: `--bg: #FFFBF7`, `--bg-peach: #FBEDE2`, `--ink: #1A1613`, `--accent: #F36A3A`, `--accent-deep: #D9501F`.
   - Add `--font-display: "Archivo Black", "Anton", sans-serif`.
   - New utility classes: `.v22-band--peach`, `.v22-band--white`, `.v22-hero-grid` (2-col desktop), `.v22-h1--dual` (with `.v22-h1__accent` span), `.v22-eyebrow-row` (flex: underline + step #), `.v22-pill--inline` (risk strip), `.v22-cta` (shadow + bigger desktop).
   - Convert section margins to inner padding so bands are edge-to-edge.
3. **Section components** (edit only v22 files):
   - `AnnouncementBar.tsx`: peach bg, orange text.
   - `Hero.tsx`: split grid; image left with absolutely-positioned testimonial card overlay; small "TAN SKIN OR MONEY BACK"-style pill above H1; H1 broken into `<span class="v22-h1__accent">5 Reasons</span> Women Are Finally <span class="v22-h1__accent">Quitting Expensive Hair Products</span>`.
   - `RiskStrip.tsx`: delete the standalone band (moved into hero as inline pill).
   - `Reasons.tsx`: new eyebrow row markup (`<div class="v22-eyebrow-row"><span>eyebrow</span><hr/><span>01</span></div>`), H2 in orange, alternating band wrapper per reason (1,3,5 = peach; 2,4 = white).
   - `Stats.tsx`: bigger numerals on peach band.
   - `ResultCards.tsx`: horizontal card layout with peach tag pills.
   - `Transition.tsx`: keep peach band, recompose copy block.
   - `FloatingChip.tsx`: restyle to white testimonial card aesthetic.
4. **Images**: keep `placehold.co` placeholders (no asset work in this pass); only structure/typography/color change. Real photos can be wired later.
5. **Isolation guarantee**: every selector stays under `.hq-sp-v22`. No edits to other v* folders, root, or shared CSS. Font `<link>`s added only inside the `/22` route head.

## Out of scope (ask before doing)
- Replacing placeholder images with real R2 photos.
- Wiring real stat percentages.
- Adding a real reviews widget / Loox-style block.
- Building a top dark nav (reference has a light nav like ours — keep).

## Deliverable
After approval, I'll edit ~7 files in v22 only: `listicle-v22.css`, `Hero.tsx`, `Reasons.tsx`, `AnnouncementBar.tsx`, `Stats.tsx`, `ResultCards.tsx`, `FloatingChip.tsx`, plus remove the standalone `RiskStrip` mount from `ListiclePageV22.tsx`, and add the Archivo Black font link in the route file.
