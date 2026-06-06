# Add unique `id` to every CTA for GTM tracking

## 1. Extend the shared `Button` to accept an `id` prop
`src/features/haircare-challenge/primitives.tsx` — add optional `id?: string` to the `Button` props and pass it to the underlying `<button>`. No behavior change.

## 2. Set `id` on each CTA call site

| File | CTA | `id` |
|---|---|---|
| `sections/Hero.tsx` | "Join the challenge" | `cta-hero` |
| `sections/Recognition.tsx` | "Tell me why this is happening" `<a>` | `cta-recognition` |
| `sections/Science.tsx` | "Show me how to fix it" | `cta-science` |
| `sections/SocialProof.tsx` | "Join 250,000+ women" | `cta-social-proof` |
| `sections/Founder.tsx` | "Start with me" | `cta-founder` |
| `sections/HowItWorks.tsx` | "I'm ready — start now" | `cta-how-it-works` |
| `sections/ResultsIn2Weeks.tsx` | "Start the challenge" | `cta-results-2w` |
| `sections/WhatsIncluded.tsx` | "Get everything — start now" | `cta-whats-included` |
| `sections/NotAboutHair.tsx` | "Bring her back — start the challenge" | `cta-not-about-hair` |
| `sections/SelfQualifier.tsx` | "Take charge of my hair" | `cta-self-qualifier` |
| `sections/Faq.tsx` | "All my questions are answered. Let's begin" `<a>` | `cta-faq` |
| `sections/FinalCta.tsx` | "Start the challenge" | `cta-final` |
| `sections/StickyCta.tsx` | "Join now" | `cta-sticky` |

The "See more stories" ghost button in SocialProof is excluded because it currently has no onClick / destination — not a real CTA.

## 3. On the GTM side (you handle in GTM, no code from me)
- Trigger: **Click - All Elements**, condition `{{Click ID}} matches RegEx ^cta-`
- Mixpanel tag: event name `CTA Click`, property `cta_id = {{Click ID}}`, plus any extras you want (`{{Page Path}}`, `{{Click URL}}`).

## Verification
After deploy, click each CTA with GTM Preview Mode open and confirm `gtm.elementId` = the expected `cta-…` value in the dataLayer for each gtm.click event.
