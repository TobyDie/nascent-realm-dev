# Plain-English rewrite of /creators/hub

Goal: every creator, native English speaker or not, can skim the hub in two minutes and know exactly what to do. Same page, same layout, same design language. Only the words and a few small structural containers change.

## Readability audit (current page)

Measured against the copy in the hub's copy file, not guesses:

- Hero intro: one 42-word block, four ideas in one breath ("document your real hair journey", "Your account, your words, your language, your style", scripts, three reward types).
- Start Here step 2 body is a hedge ("Whenever you're ready inside those two weeks"), step 4 opens with jargon ("Five videos is the baseline").
- Reward cards: the 5-video card's first detail paragraph is a single 60-word sentence containing four separate rewards.
- Video eligibility opens with a conditional clause ("when all of these are true"), and its bullets start with "It is / It tags / You let people know" instead of a verb the reader can act on. One bullet says "branded-content toggle", a term most creators will not recognise. Two bullets repeat the same idea ("in your own words" appears twice).
- Rules list: 12 items, several 35+ words, with nested asides inside em-dashes.
- FAQ: answers are single paragraphs; six of them run 30-50 words where three short sentences would do.
- Support: opens with "One address for everything" and internal routing detail (who handles what) before it says "email us".
- Idiom risk for non-native readers: "drop the link", "baseline", "flip on", "no cap", "real beats polished", "does the job", "in good standing", "first in line".

Overall this matches the 7.5/10 read: accurate and complete, but written as documentation.

## What changes

All 12 sections in the review get applied as written, plus the flagged phrase swaps:

1. **Hero** — four short lines: share your real hair journey in your own way / your own words, style, language / no scripts, no acting / earn for posting, views, and sales.
2. **Submit card** — "Send us the link so we can count it. TikTok and Instagram both count."
3. **Start here** — four steps rewritten as instruction + reassurance: post within 14 days keeps your founding member spot; send your video link, no approval needed; aim for at least 5 videos, more is welcome.
4. **What you earn** — intro becomes "You can earn in 3 ways:" followed by a scannable Posting / Views / Sales list, and each reward card's detail paragraphs get split into short sentences.
5. **Commission** — active voice: "Every sale made through your code or link earns you a commission."
6. **Getting paid** — "Every Friday you'll get an email showing your sales and your commission", then payout timing as its own short line.
7. **Video eligibility** — section renamed **"Which videos count?"** (nav label too), intro becomes "Your video counts if it:", every bullet starts with a verb, duplicate bullet removed, and the disclosure bullet becomes "Turns on TikTok's 'Paid Partnership' label if TikTok asks for it."
8. **The rules** — each rule cut to one or two short sentences. "Buying through your own code does not count." stays exactly as is.
9. **Do & Don'ts** — kept, with the boost / fake views / editing items simplified as suggested.
10. **Content ideas** — "Need ideas? Try one of these."
11. **FAQ** — every answer rewritten as two to four very short sentences (verdict first, then the reason).
12. **Support** — "Need help? Email us anytime. Payment, links, rewards, or questions, we're here to help."

Phrase swaps applied everywhere they appear: document → share, counted separately → earn in 3 ways, founding spot → founding member spot, baseline → at least, video eligibility → which videos count, "let people know we're working together" → "tell people you're working with Hairqare", branded-content toggle → TikTok's "Paid Partnership" label, drop the link → send the link, no cap → post as many as you want.

## What does not change

- Layout, colors, fonts, section order, anchors and scroll behaviour.
- All factual and legal content: $37 price, 50% / $18.50 cap, 30-day live rule, 100,000 views, PayPal monthly payouts, refund deductions, the wellbeing paragraph, and the Terms link. Simplified wording, identical meaning.
- The Terms page and the /creators landing page are untouched.

## Technical notes

- Edits are confined to `src/features/creators/copy/hub.ts`, the one label change in `src/features/creators/copy/hub-sections.ts`, and small render tweaks in `src/features/creators/CreatorHubPage.tsx`.
- Several copy fields become arrays of short lines instead of one long string (hero lede, submit-card body, support body, reward card details, FAQ answers). The page renders each line as its own paragraph, which is what makes the WhatsApp rhythm read correctly. FAQ answers stay inside the existing accordion; reward details stay inside the existing cards.
- "What you earn" gains a three-item Posting / Views / Sales list above the reward cards, built from the components already on the page.
- No new dependencies, no client-side JS added: the hub stays server-rendered apart from the existing contents rail and accordions.
