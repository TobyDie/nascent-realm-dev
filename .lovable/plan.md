# Retarget /20-the-haircare-challenge to women 25–34

Goal: rewrite the emotional spine of /20 from **"bring her back"** (decline/recovery, 35–45) to **"build her forward"** (length, fullness, damage repair, postpartum, before-it-gets-worse). All work is fully scoped inside `src/features/haircare-challenge-v20/` — no other route is touched.

The 25–34 reader has two sub-modes the page must hold simultaneously:

- **25–29**: length plateau, damage from coloring/heat/bleach, limp/flat hair, "I spend a lot and see less."
- **30–34**: bridge — postpartum shedding that isn't coming back, early stress signals, "before it gets worse."

## What changes (section by section)

### 1. AgeStripe — `sections/AgeStripe.tsx`

Replace the "different cause than at 22" line (age-gates out every 26-year-old).
New: `Built for women in their 20s and 30s — the years your hair decides what it'll look like for the next decade.`

### 2. Hero — `sections/Hero.tsx`

This is the make-or-break.

- Remove **"hair loss"** language from H1, eyebrow, and bullets.
- Remove "best hair of your life in your 30s and beyond."
- New H1 (forward-looking, present tense): `Grow the long, thick, full hair you actually want — in 14 days of doing it right.`
- New eyebrow: `Stop spending more for less.`
- Rewrite the 3 bullets toward: (a) length past your plateau, (b) density and shine without $90 serums, (c) repair damage from coloring/heat/bleach before it compounds.
- Replace trust pin "★4.8 · 12K reviews" with a peer-signal: `Joined by 250,000+ women in their 20s and 30s.`
- Hero image: keep current Sarah image (already young-skewing).

### 3. Recognition — `sections/Recognition.tsx`

Currently 5 beats; **3 of 5 age-gate** (won't grow like in your 20s / greys / $2,000 spent on salons). Rewrite all 5 beats and the header.

New header: `Sometime in your 20s or early 30s, this started happening:`

New 5 beats:

1. **Length plateau** — "It grows to a certain point and just… stops." → so you trim the ends, blame the ends, and never find what's actually capping it.
2. **Damage stacking** — "Color, heat, bleach, the bond builder you bought to fix the bleach." → so the breakage outruns the growth and your length never moves.
3. **Postpartum shedding that didn't come back** — (heavy beat with marginalia: "↘ it's been 18 months") → so you wait, and wait, and start to wonder if this is just your hair now.
4. **Limp and lifeless despite the routine** — "$200 in the shower and it still looks flat by noon." → so you buy the next better thing, and the next, ~$1,000 deep this year alone.
5. **Stress is showing in your hair before it shows anywhere else** → the shedding in the brush, the temple thinning, the texture change you can feel before you can see.

Replace the "$2,000 spent" meter with **"~$1,000 this year"** (matches the age bracket's actual spend pattern).
Keep Abigail-style testimonial slot but **swap to a 27–30-year-old** profile (use a younger `profile-*.webp` — pick during build).
CTA link copy stays.

### 4. Science — `sections/Science.tsx`

Reorder root causes. Lead with what hits 25–34:

1. **Cortisol / chronic stress** (telogen effluvium)
2. **Iron + ferritin deficiency** (extremely common pre-35, often missed)
3. **The damage–product cycle** (coloring, heat, surfactants stripping the cuticle)
4. **Postpartum hormone shifts**
5. Perimenopause demoted to a one-line "and by your mid-30s…" mention, not the opener.

DHT / estrogen-drop framing comes out of the lead.

### 5. Founder — `sections/Founder.tsx`

Re-order Sarah's arc. Lead with **where she is now** (120cm healthy hair, $10/month, taught herself the system), then back-fill the discovery. Remove the heavy "secretly thinning at peak career / lost half my hair" trauma framing from the opening beat — it's a deterrent for a 27-year-old who doesn't want to imagine that future. Keep the facts, change the ordering and emphasis: teacher first, survivor second.

### 6. SelfQualifier — `sections/SelfQualifier.tsx`

Replace all 6 checklist items (currently 5 of 6 age-gate). New:

1. My hair grows to a point and stops — I can't get past my current length.
2. I color, bleach, or heat-style and I can see the damage.
3. I had a baby and the shedding never fully came back.
4. My hair looks limp or flat no matter what I spend on products.
5. I'm stressed a lot and I think it's showing up in my hair.
6. I want to fix this **before** it becomes a real problem.

Result copy: `you're exactly who the challenge was built for. Join 250,000+ women in their 20s and 30s who started here.`

### 8. NotAboutHair, HowItWorks, ResultsIn2Weeks, WhatsIncluded, Faq, FinalCta

- **NotAboutHair**: light pass — strip nostalgia phrases ("bring her back," "looking like you again," "fell in love with my hair again") and replace with forward verbs (build, unlock, get there sooner, before you lose it).
- **HowItWorks / ResultsIn2Weeks / WhatsIncluded**: copy is largely mechanism/deliverables — keep structure, sweep for any "in your 30s and beyond" or "decline" phrasing.
- **Faq**: replace the perimenopause/thyroid-led question with a length-plateau question and a postpartum question at the top; demote perimenopause lower.
- **FinalCta**: rewrite closing CTA copy from "get your hair back" → "get the hair you're actually going for."

### 9. What stays untouched

- `$37` price, bundle, cohort/start-date structure, DIY shampoo, education-not-products positioning
- Social proof numbers, guarantee, ReviewedBy, StickyCta layout
- All component structure, all CSS (`haircare-challenge-v20.css`), all assets, all routes
- `/14`, `/17`, `/18`, `/19`, and original `/the-haircare-challenge` — **zero changes**

## Scope guarantee

Every edit lands inside `src/features/haircare-challenge-v20/`. No shared components, no other route files, no global CSS. Per the page-fork rule, /20 stays isolated.

## Files to edit

- `src/features/haircare-challenge-v20/sections/AgeStripe.tsx`
- `src/features/haircare-challenge-v20/sections/Hero.tsx`
- `src/features/haircare-challenge-v20/sections/Recognition.tsx`
- `src/features/haircare-challenge-v20/sections/Science.tsx`
- `src/features/haircare-challenge-v20/sections/Founder.tsx`
- `src/features/haircare-challenge-v20/sections/SelfQualifier.tsx`
- `src/features/haircare-challenge-v20/sections/NotAboutHair.tsx`
- `src/features/haircare-challenge-v20/sections/Faq.tsx`
- `src/features/haircare-challenge-v20/sections/FinalCta.tsx`
- `src/features/haircare-challenge-v20/sections/Interstitial.tsx` (retune textIndex/imageIndex picks + 1–2 quote rewrites)
- `src/routes/20-the-haircare-challenge.tsx` — update `<title>`, meta description, OG/Twitter title+description to reflect 25–34 forward framing (canonical URL unchanged)

## Open question before I build

**Hero H1 direction** — pick one (or say "go with #1"): go with #1

1. *Grow the longest, thickest, fullest hair you actually want - in 14 days of doing it right.* (length-led, broadest) 
2. *Build the hair you want now — before your 30s decide for you.* (urgency-led, sharper for 28–32)
3. *Stop spending more on your hair and seeing less.* (spend-fatigue-led, sharpest for 25–29)