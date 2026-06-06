# Fix testimonial avatars + compact layouts

## 1) Avatars on remaining text testimonials

Four `InlineTestimonial` calls outside `Interstitial.tsx` are still missing the `avatar` prop and render the orange initial circle. Upload the 4 newly attached profile photos (23/24/28/29.webp) as `profile-9` … `profile-12` and assign them:

| Section file | Person | Avatar to use |
|---|---|---|
| `sections/Recognition.tsx` | Abigail, 37 🇺🇸 | new `profile-9.webp` |
| `sections/HowItWorks.tsx` | Intan, 36 🇲🇾 | new `profile-10.webp` |
| `sections/Founder.tsx` | Natasha, 37 🇩🇪 | existing `profile-6.webp` (same face she has in the Interstitial) |
| `sections/NotAboutHair.tsx` | Kate, 36 🇬🇧 | existing `profile-1.webp` (same face she has in the Interstitial) |

The 4 uploads are enough — no more needed. (Two extra would still be helpful later if you want to vary the Interstitial pool, but not required now.)

## 2) Compact, stacked interstitials (the real layout problem)

Today every `<TextInterstitial>` / `<ImageInterstitial>` is its own full-width `<section>` with 32–44px vertical padding, and the image interstitial uses the full `TestimonialCard` (big before/after photo + multi-line quote). Twelve of these stacked through the second half of the page = a wall of full-width cards.

Fix in three parts:

### a) New compact image-testimonial primitive
Add `CompactImageTestimonial` to `primitives.tsx`:
- Horizontal card: ~96–120 px square before/after thumb on the left, quote + name on the right
- Same orange left-border + white card styling as `InlineTestimonial`
- Max width ~520 px, padding ~14–16 px
- Mobile: stays horizontal but thumb shrinks to ~80 px

### b) Rework `Interstitial.tsx` to render strips, not one-per-section
Replace `TextInterstitial`/`ImageInterstitial` (which render 1 testimonial in a tall section) with grouped strip components that render 2 testimonials side-by-side on desktop, stacked on mobile, inside a tighter section (padding ~20–24px, max-width ~960px):

- `<TestimonialStrip kind="text" indices={[a,b]} />` → 2 `InlineTestimonial`s in a 2-col grid
- `<TestimonialStrip kind="image" indices={[a,b]} />` → 2 `CompactImageTestimonial`s in a 2-col grid
- `<TestimonialStrip kind="mixed" textIndex={a} imageIndex={b} />` → 1 inline + 1 compact image side-by-side

Keep the existing `TEXT_PLACEHOLDERS` / `IMAGE_PLACEHOLDERS` data arrays unchanged (same 6 + 6 real testimonials).

### c) Re-wire `HaircareChallengePage.tsx`
Reduce 12 full-width sections to ~5 compact strips placed at the same trust beats:

```
Science          → TestimonialStrip mixed (text 0 + image 0)   // scientist + process
HowItWorks       → (keep inline Intan in section, no interstitial)
ResultsIn2Weeks  → TestimonialStrip mixed (text 1 + image 1)   // 14-day + DIY shampoo
WhatsIncluded    → TestimonialStrip mixed (text 2 + image 2)   // confidence + reconnect
Founder          → (keep inline Natasha in section)
SelfQualifier    → TestimonialStrip mixed (text 3 + image 3)   // habits + Hashimoto's
Faq              → TestimonialStrip mixed (text 4 + image 4)   // accessible + bouncy
FinalCta (above) → TestimonialStrip mixed (text 5 + image 5)   // fell in love + Rosemary
```

Net effect: same 12 testimonials, but in 6 compact strips instead of 12 full-bleed sections — roughly halves the vertical real-estate they consume and breaks the "wall of cards" pattern.

## Files touched
- `src/features/haircare-challenge/primitives.tsx` — add `CompactImageTestimonial`
- `src/features/haircare-challenge/sections/Interstitial.tsx` — replace exports with `TestimonialStrip`, keep data arrays
- `src/features/haircare-challenge/HaircareChallengePage.tsx` — swap interstitial placements
- `src/features/haircare-challenge/sections/Recognition.tsx`, `HowItWorks.tsx`, `Founder.tsx`, `NotAboutHair.tsx` — pass `avatar` prop
- `src/features/haircare-challenge/haircare-challenge.css` — add styles for compact image card + 2-col strip grid
- `src/assets/profile-9.webp.asset.json` … `profile-12.webp.asset.json` — new uploads from the 4 attached images

No content/copy changes, no behavior changes — purely layout density + avatars.
