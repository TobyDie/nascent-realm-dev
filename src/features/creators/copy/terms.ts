/**
 * Program terms — Doc 15 Part B, Page 3, verbatim apart from the MVP edits (no
 * dashboard exists, so tracking and PayPal confirmation happen by email).
 *
 * Lives on its own page at /creators/terms because it is the one piece of the
 * rulebook referenced from outside the site: the application form links to it, and
 * a legal document needs a stable URL that isn't an anchor inside a members' page.
 */
import { TBA } from "./tokens";

export const TERMS_INTRO =
  "The program terms in plain language. By joining Hairqare Creators, you agree to these.";

export const TERMS_OPERATOR = `Operated by ${TBA}.`;

export const TERMS: { n: number; title: string; body: string }[] = [
  {
    n: 1,
    title: "Who can join.",
    body: "You must be 18 or older, a Better Hair Challenge student or graduate, with a public TikTok or Instagram account. Acceptance is by application and at our discretion. We accept international applications where we can operate the program and send payouts; PayPal availability varies by country and is confirmed by email when you're accepted.",
  },
  {
    n: 2,
    title: "What you do.",
    body: "You post videos about your real hair journey on your own TikTok account. Five eligible videos is the program baseline; there is no cap. Your first video should be posted within 14 days of acceptance, or your founding spot may be released.",
  },
  {
    n: 3,
    title: "What makes a video eligible.",
    body: "A video is eligible when it is on your own public TikTok or Instagram account, is about your real experience, tags @hairqare, mentions or shows your personal code, lets your audience know we're working together (TikTok's branded-content toggle is the easy way), is your own honest experience, and stays live for at least 30 days.",
  },
  {
    n: 4,
    title: "Rewards for posting.",
    body: `When your fifth eligible video is submitted, you receive provisionally: one Better Hair Challenge gift pass for someone you choose, one entry into the founding draw, and priority access to Merely when it launches. These rewards are confirmed once each counted video completes its 30-day live requirement; deleting a counted video before 30 days can revoke a provisional reward. One founding member wins lifetime Hairqare Lab from the creators who complete five videos. Draw date, method, notification, and any country restrictions: ${TBA}.`,
  },
  {
    n: 5,
    title: "Reward for reach.",
    body: "When your eligible videos reach 100,000 combined organic views across TikTok and Instagram, you receive lifetime access to Hairqare Lab at no cost. For each video, only views earned during its first 30 days count toward your total. To claim, submit each counted video link, its posting date, and a TikTok or Instagram analytics screenshot for that video showing views for the relevant date range. We verify every claim. Views from paid promotion, boosting, or purchased engagement never count.",
  },
  {
    n: 6,
    title: "Commission.",
    body: "You earn 50% of the Better Hair Challenge front-end price actually paid through your personal code or link, capped at $18.50 per sale, from any platform. Taxes, refunds, chargebacks, order bumps, upsells, and other products are excluded. The 50% rate is your founding rate: it remains yours, capped at $18.50 per eligible sale, while your account remains in good standing and Hairqare continues offering the Better Hair Challenge and the creator tracking program. Your code and link stay active as the program grows.",
  },
  {
    n: 7,
    title: "Content rules.",
    body: "Share your own honest experience. Please avoid medical or health claims about the Challenge or your results, and let your audience know we're working together. Keep the exact course recipe off camera. You are responsible for having permission to use all music, footage, people, locations, and materials appearing in your videos.",
  },
  {
    n: 8,
    title: "Payouts.",
    body: `Commission is reported in your weekly email. Approved commission for the previous calendar month is paid to your nominated PayPal account during ${TBA}. ${TBA}. Commission is payable only on sales that were not refunded; refunds or chargebacks recorded after a payout may be deducted from a future commission balance. If a PayPal payment fails, we will contact you to update your details and retry in the next cycle. You are responsible for any taxes on your earnings in your country; currency conversion and PayPal fees follow PayPal's terms.`,
  },
  {
    n: 9,
    title: "What voids rewards.",
    body: "Purchased views or engagement are fraud and can void affected rewards, unpaid commission, and program access. Purchases made through your own code are not commissionable. Boosted or promoted videos: their views never count toward posting or reach rewards, though genuine sales they generate remain commissionable. Deleting a video before its 30-day minimum removes it from eligibility and can revoke a provisional reward; rewards already confirmed stay yours. We may investigate suspected fraud and withhold related payouts during an investigation. Section 11 contains a wellbeing exception to the deletion rule.",
  },
  {
    n: 10,
    title: "Your content and our license.",
    body: "You own your videos. By joining, you grant Hairqare a non-exclusive, worldwide, royalty-free license to reuse your program videos in our organic posts, emails, websites, and paid advertising, including the right to crop, caption, resize, translate, and edit without changing the meaning, and to use your name, handle, voice, and likeness as they appear in the video. You confirm you own or have permission for everything appearing in your videos. Music cleared for an organic TikTok may not be cleared for advertising; we may exclude a video from paid reuse when third-party rights are unclear. This license survives deletion of a video or leaving the program, subject to the wellbeing exception in section 11.",
  },
  {
    n: 11,
    title: "Leaving, removal, and wellbeing.",
    body: "You can leave anytime; confirmed rewards and your commission code stay active under section 6. We may ask you to correct a disclosure, edit a caption, or remove content that breaks these terms or platform rules; serious or repeated violations may make videos ineligible or end participation, in which case unearned rewards lapse. Wellbeing exception: if a video causes a safety, privacy, harassment, or wellbeing concern, contact us. We may waive the 30-day requirement with no penalty, and you can ask us to pause our future use of that video, including pausing active paid use, while we review the situation.",
  },
  {
    n: 12,
    title: "The founding program.",
    body: "Hairqare Creators is a founding program. Details for future members may change; your founding terms above stay locked, subject to section 6.",
  },
];
