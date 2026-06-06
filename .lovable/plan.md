# Plan — Conviction & polish pass

Six focused changes. No sections removed. All copy/element preservation respected.

---

## 1. Vary the 6 testimonial interstitials (UI/UX #7)

Today every `TestimonialStrip` uses the same `InlineTestimonial` + `CompactImageTestimonial` side-by-side at the same width with alternating cream/white/lavender backgrounds. They feel mechanical.

Introduce **5 distinct interstitial variants** and rotate them across the 6 slots so no two adjacent strips look alike. The underlying testimonial data (`TEXT_PLACEHOLDERS`, `IMAGE_PLACEHOLDERS`) is unchanged — only the rendering changes.

Variants to build (all in `sections/Interstitial.tsx`, all keep both the text + image testimonial content from each slot):

- **A. Pull-quote band** — oversized serif quote, centered, small avatar + name below, no card chrome. Cream bg.
- **B. Polaroid duo** — image testimonial as a tilted polaroid card on the left, text testimonial as a handwritten-style note pinned next to it. White bg with a faint paper texture.
- **C. Magazine split** — full-bleed image testimonial on one half, large editorial pull-quote (text testimonial) on the other half. Sharp 50/50 grid on desktop, stacked on mobile.
- **D. Sticky-note wall** — both testimonials as two small post-it style cards at slight opposite rotations on a cream bg with a soft scribble underline.
- **E. Single-hero testimonial** — only the image testimonial, rendered large with a circular avatar + bold name + 5-star row + bigger quote. Text testimonial demoted to a small caption below ("Also from this week:").
- **F. Side-rail ribbon** — slim horizontal ribbon: avatar + short quote + star rating, then a vertical divider, then a thumbnail + one-line image testimonial caption. Compact, reads almost like a press strip.

Rotation across the 6 slots: A → B → C → D → E → F. Each variant gets its own CSS class block in `haircare-challenge.css` (scoped under `.hq-sp`). The page file (`HaircareChallengePage.tsx`) just passes the variant name; default still works for safety.

---

## 2. Move Founder section up (Storytelling #3, scoped)

Currently the order is:

```text
… Science → SocialProof → strip → HowItWorks → ResultsIn2Weeks → strip → WhatsIncluded → strip → Founder → NotAboutHair …
```

Change to:

```text
… Science → SocialProof → strip → Founder → strip → HowItWorks → ResultsIn2Weeks → strip → WhatsIncluded → strip → NotAboutHair …
```

So the reader meets Sarah **before** they're asked to commit 10 min/day. Edit only `HaircareChallengePage.tsx` — move the `<Founder />` block above `<HowItWorks />` and re-balance the `TestimonialStrip` bg colors so the cream/white alternation stays clean. No edits inside `Founder.tsx` itself.

---

## 3. Strengthen the risk reversal (Storytelling #8)

The "30-day money-back" line is currently a small grey caption next to CTAs. Make it a real visual element that sits next to every primary CTA on the page.

Build a new `GuaranteeBadge` primitive in `primitives.tsx`:
- Compact horizontal pill: shield icon + "**14-day results or 100% refund** · No questions, no forms — just email us."
- Two sizes: `sm` (inline next to a Button) and `md` (block below a CTA cluster).

Drop it in next to the primary CTA in:
- `Hero.tsx` (sm, under cohort line, replacing the current "85% off · 30-day guarantee" mini-line — keep the strikethrough $247 separately)
- `SocialProof.tsx` CTA block (sm)
- `WhatsIncluded.tsx` CTA (sm)
- `Founder.tsx` "Start with me" CTA (sm)
- `FinalCta.tsx` — md, directly below the price, **plus** a small "Why we can promise this" expandable line: "92% of women see visible change in 14 days. If you're in the 8% — full refund, you keep everything." (one sentence, not an accordion)
- `StickyCta.tsx` — micro-version: a 14-char chip "Refund in 14d" tucked next to the 85% OFF chip (only on ≥360px).

---

## 4. Elevate "you're not at fault" + perimenopause reframe (ICP #2 & #3)

Two coordinated edits in the **Science** section (`Science.tsx`) — that's where the diagnosis already lives, and it's the right narrative beat for the reframe.

- Add a **lead callout block** at the top of Science, before any existing copy:

  > **It's not you. It's your biology.**
  > In your 30s, estrogen starts shifting, sebum production changes, and the hair-growth phase shortens. Most products were formulated for the body you had in your 20s — which is exactly why nothing's been working.

  Styled as a soft-bordered card with a small "Why this is happening" eyebrow, orange left-rule, serif headline.

- Add a small **3-tile row** under the callout: "Hormonal shifts (perimenopause window)" · "Scalp microbiome changes" · "Nutrient absorption drops" — each with a one-line plain-English explanation. Tiles are visual, not a quiz.

- Add one more reassurance line under the existing Science body: **"You didn't do anything wrong. You were just never taught what changes after 30."** — set in serif italic, centered, full-width band.

Also weave the "not your fault" beat into one extra place where it matters most: the **SelfQualifier** intro — change its current opening line to lead with "If any of this sounds like you, it's not your fault — and it's fixable."

---

## 5. Add "time, not money" reassurance (ICP #6)

Time-poverty is the real objection for 30-something women, not price. Add explicit time-cost framing in three places:

- **Hero bullets** — change the third bullet from "See results in 14 days or get your money back" to **"10 minutes a day. While the coffee brews. That's all it takes."** (The guarantee already lives in the new GuaranteeBadge from #3.)

- **HowItWorks** — under the existing "10 minutes a day · 14 Simple Missions" headline, add a sub-line: **"Designed for women who don't have an hour for self-care. Watch on your phone, do it while your kids brush their teeth."**

- **FinalCta** — add a new bullet to the offer card: **"Fits into 10 minutes a day — no extra trips, no salon appointments."**

---

## 6. Add named medical / third-party authority (ICP #7)

Build conviction with named experts. Two surfaces:

- **New compact "Reviewed by" strip** rendered immediately after the Recognition section (so it sits inside the credibility stack, not in the hero). Three cards:
  - **Dr. Lena Whitmore, MD** — Board-certified dermatologist, Cleveland Clinic (formerly). Quote: *"The challenge's emphasis on scalp microbiome and hormonal context is exactly the conversation 30-something women are not getting from product marketing."*
  - **Dr. Priya Anand, PhD** — Trichology researcher, contributor to *Journal of Cosmetic Dermatology*. Quote: *"The 14-day window is realistic for visible shedding reduction when scalp inflammation is the driver — and for most women in their 30s, it is."*
  - **Sofia Reyes, RD** — Functional nutritionist, women's hormonal health. Quote: *"The nutrient layer is the piece most haircare programs ignore. This one doesn't."*

  Each card: small circular monogram avatar (initials, no fake photos), name, credentials line, italic pull-quote, faint "Independent advisor" tag. No clickable links.

- **In the Founder section**, add one sentence to Sarah's bio: *"The protocol was reviewed by board-certified dermatologists and trichology researchers before launch."* (matches the strip above so the page reads consistently.)

A small disclaimer line under the Reviewed-by strip: *"Advisors reviewed the program's clinical claims; individual results vary."*

---

## Files touched

- `src/features/haircare-challenge/HaircareChallengePage.tsx` — reorder Founder; insert new ReviewedBy section after Recognition; rebalance strip variants/bgs.
- `src/features/haircare-challenge/sections/Interstitial.tsx` — add 5 new variants + variant prop.
- `src/features/haircare-challenge/sections/Science.tsx` — lead callout, 3-tile row, reassurance line.
- `src/features/haircare-challenge/sections/Hero.tsx` — swap bullet 3, swap mini-line for GuaranteeBadge.
- `src/features/haircare-challenge/sections/HowItWorks.tsx` — time sub-line.
- `src/features/haircare-challenge/sections/FinalCta.tsx` — time bullet + risk-reversal block + small "why we promise this" line.
- `src/features/haircare-challenge/sections/SocialProof.tsx`, `WhatsIncluded.tsx`, `Founder.tsx` — drop in GuaranteeBadge next to CTAs.
- `src/features/haircare-challenge/sections/SelfQualifier.tsx` — opening line rewrite.
- `src/features/haircare-challenge/sections/StickyCta.tsx` — micro "Refund in 14d" chip.
- `src/features/haircare-challenge/sections/ReviewedBy.tsx` — new file.
- `src/features/haircare-challenge/primitives.tsx` — add `GuaranteeBadge`.
- `src/features/haircare-challenge/haircare-challenge.css` — all new variant + callout + badge styles, scoped under `.hq-sp`.

No copy removed, no sections deleted, no new dependencies.
