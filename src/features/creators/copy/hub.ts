/**
 * All copy for Surface B (/creators/hub) — the post-acceptance creator hub.
 *
 * Ported from the four rulebook pages that used to live under
 * /creators/app/resources/* (Playbook, Do & Don'ts, FAQ) plus the hub's own
 * reward and support cards. Nothing was trimmed in the merge; the only edits are
 * the ones the MVP forced — every reference to a "dashboard" now points at the
 * acceptance email, the Friday email, or the submit-video form, because none of
 * those surfaces exist in an ungated build.
 *
 * The program terms live in ./terms (their own page). `{{TBA}}` marks an open
 * decision — see ./tokens.
 */
import { TBA } from "./tokens";

export const INTRO = {
  eyebrow: "Hairqare Creators",
  title: "Everything you need to know",
  lede: "You document your real hair journey on your own TikTok. Your account, your words, your language, your style. We never send you scripts. You earn rewards for posting, for reach, and for sales.",
  // The one genuinely useful fact about how codes are delivered. Everything else
  // about how this page is built is our business, not the creator's.
  codeNote:
    "Your personal code and link are in your acceptance email. Lost it? Email us and we'll resend it the same day.",
  action: {
    title: "Posted a new video?",
    body: "Drop the link here so it counts — TikTok and Instagram both work. Your first video keeps your founding spot if it's up within 14 days.",
    cta: "Submit a video link",
  },
};

// ─── Tier 1: the essentials ───────────────────────────────────────────────────

export const START_STEPS: { step: string; body: string }[] = [
  {
    step: "Get your code",
    body: "It's in your acceptance email, along with your personal link. The code can be spoken in your videos (“use my code SARA at checkout”). The link goes in your bio if TikTok allows it for your account.",
  },
  {
    step: "Post your first video within 14 days",
    body: "Whenever you're ready inside those two weeks — that's what keeps your founding spot active. Your real hair journey, in your own words.",
  },
  {
    step: "Send us the link",
    body: "Use the submit button above. No approval needed, and nothing to wait for: you post first, you tell us after.",
  },
  {
    step: "Keep going",
    body: "Five videos is the baseline and there's no cap. Everything you earn is on this page.",
  },
];

export const EARN_INTRO =
  "Three ways to earn, counted separately — posting, reach, and sales.";

export const REWARDS: {
  badge: string;
  tone: "sand" | "gold" | "flame";
  title: string;
  summary: string;
  details: string[];
}[] = [
  {
    badge: "5",
    tone: "sand",
    title: "Post 5 videos",
    summary:
      "A Better Hair Challenge gift pass, a draw entry, and priority access to Merely.",
    details: [
      "Five is the baseline, and there is no cap: post as many as you like. When your fifth eligible video is submitted you receive a Better Hair Challenge gift pass for someone you care about, your name in the draw for lifetime Hairqare Lab (one founding member wins it), and priority access to Merely when it launches.",
      "We check your submitted links after your fifth video and email the gift pass within a few days — nothing to claim.",
      "These rewards are confirmed provisionally when your fifth video is submitted. Each counted video still needs to complete its 30-day live requirement; deleting a counted video early can revoke a provisional reward.",
    ],
  },
  {
    badge: "100k",
    tone: "gold",
    title: "Reach 100,000 views",
    summary: "Hairqare Lab, free for life — lifetime access to the full $997 program.",
    details: [
      "Every eligible video counts, and for each video the views earned during its first 30 days count toward your total. TikTok and Instagram views add up. Organic views only.",
      "To claim, message support with each counted video link, its posting date, and a TikTok or Instagram analytics screenshot for that video showing the views earned during its first 30 days. We verify every claim.",
    ],
  },
  {
    badge: "%",
    tone: "flame",
    title: "Commission on every Challenge sale",
    summary:
      "50% of the Better Hair Challenge front-end price actually paid, capped at $18.50 per sale.",
    details: [
      "Earned through your code or link, from any platform you share on. Taxes, refunds, order bumps, upsells, and other products are excluded.",
      "Your founding rate never goes down, and it keeps earning as long as you're part of the program. Reported in your Friday email, paid monthly to your PayPal; refunded orders are deducted, as everywhere.",
    ],
  },
];

export const PAID_FACTS = [
  "Sales & commission — every Friday, by email",
  "Payouts — monthly, to your PayPal",
];

export const PAID = [
  `Approved commission for the previous calendar month is paid to your nominated PayPal account during ${TBA}. Commission is paid on sales that were not refunded; a refunded sale is deducted before payout, and a refund recorded after payout may be deducted from a future balance.`,
];

// ─── Tier 2: reference ────────────────────────────────────────────────────────

export const ELIGIBLE_INTRO =
  "A video counts toward your rewards when all of these are true:";

export const ELIGIBLE = [
  "It is on your own public TikTok or Instagram account",
  "It is about your real hair journey, in your own words",
  "It tags @hairqare and mentions or shows your code",
  "You let people know we're working together — TikTok's branded-content toggle makes this easy",
  "It's your honest experience, in your own words",
  "It stays live for at least 30 days",
];

export const RULES = [
  "You must be 18 or older, with a public TikTok or Instagram account.",
  "Every video mentions us: tag @hairqare and say or show your code.",
  "Keep it real and let people know we're working together. Flip on TikTok's branded-content toggle and a quick “thanks @hairqare” does the job — it keeps your posts in good standing with TikTok, too.",
  "Tell your own story. Share what you actually saw and felt — just skip the big medical or “this fixes everything” promises. If you're ever unsure about a phrase, ask us; we're happy to help.",
  "Keep each video live for at least 30 days. After that, your videos are yours to keep or delete.",
  "Don't boost or pay to promote your videos. Boosted or paid views never count toward posting or reach rewards. If a boosted video still brings a genuine sale through your code, that sale remains commissionable.",
  "Use only music, footage, and other material you have permission to use. Music cleared for an organic TikTok may not be cleared for our advertising; we may exclude a video from paid reuse when rights are unclear.",
  "Buying through your own code does not count.",
  "You own your videos. By joining, you gave us permission to reshare and reuse them, including in our ads, with credit where possible. The Terms have the full license.",
  "You can post in any language and any format. Face on camera, hands only, voiceover, whatever feels like you.",
  "You are free to work with any other brands. No exclusivity.",
  "If we ask you to correct a disclosure, edit a caption, or fix a claim, please respond quickly; it keeps your videos eligible.",
];

export const DOS = [
  "Post about your own real hair journey, in your own words",
  "Tag @hairqare in every video",
  "Say or show your personal code in every video",
  "Let people know we're working together (TikTok's branded-content toggle makes it easy)",
  "Use only audio, footage, and material you have permission to use",
  "Post in any language you like",
  "Use any format: face on camera, hands only, voiceover",
  "Keep each video live for at least 30 days",
  "Post more than 5 videos if you want, there is no cap",
  "Share your code and link anywhere: TikTok, Instagram, YouTube, email",
  "Tell us when you cross 100,000 views",
  "Respond if we ask you to correct a disclosure or a claim",
  "Ask us anything, anytime",
];

export const DONTS = [
  "Don't make big medical or 'this fixes everything' promises — keep it to your own experience",
  "Don't speak for anyone else's results, just your own",
  "Don't boost or pay to promote your videos, organic views only",
  "Don't buy through your own code",
  "Don't buy views or engagement. Fake activity can void affected rewards and your place in the program",
  "Don't call the Challenge free, it is $37",
  "Don't share exact formulations from the course on camera, show the making, keep the recipe yours",
  "Don't feel you need fancy editing, real beats polished every time",
];

export const IDEAS_INTRO = "Totally optional — a few starting points if you feel stuck:";

export const IDEAS = [
  "Making your shampoo in your kitchen for the first time",
  "What the ingredient scanner said about the products you used before",
  "Your week 1 vs. week 2 hair",
  "“Things I wish I knew before spending $$$ on haircare”",
  "Your honest day 3, when nothing has changed yet",
];

export const FAQ_GROUPS: { group: string; items: { q: string; a: string }[] }[] = [
  {
    group: "Content",
    items: [
      {
        q: "Do I need a big following?",
        a: "No. This program is for real students. Every application is reviewed personally, and your story matters more than your follower count.",
      },
      {
        q: "What do I have to post?",
        a: "Your real hair journey, your way. Five videos is the baseline, and there is no cap. We never send scripts or tell you what to say.",
      },
      {
        q: "Do I need to show my face?",
        a: "No. Any format works: face on camera, hands only, voiceover. Post in any language you like.",
      },
      {
        q: "Do I need to say it's a partnership?",
        a: "Just keep it real and let people know we're working together — TikTok's branded-content toggle makes it easy, and a quick “thanks @hairqare” does the job. It also keeps your posts in good standing with TikTok.",
      },
      {
        q: "Can I post on Instagram or YouTube too?",
        a: "Yes. TikTok and Instagram views both count toward the 100,000 — a cross-post counts once toward your 5 videos, and the views add up. Your code earns commission from any platform you share on.",
      },
      {
        q: "Can I show how I make my shampoo?",
        a: "Yes, and it is some of the best content you can post. Show the making and your experience; keep the exact course formulation off camera.",
      },
      {
        q: "Can I boost my videos?",
        a: "No. Organic views only. Boosted or paid views never count toward posting or reach rewards. If a boosted video still brings a genuine sale through your code, that sale remains commissionable.",
      },
      {
        q: "Can I delete my videos?",
        a: "After 30 days live, yes, anytime. Rewards already confirmed stay yours. If a video is causing you distress or a safety concern, contact us: the 30-day rule can be waived with no penalty.",
      },
      {
        q: "Can I work with other brands?",
        a: "Yes. No exclusivity, ever.",
      },
    ],
  },
  {
    group: "Money",
    items: [
      {
        q: "How do I get paid?",
        a: `You earn 50% of the Challenge front-end price actually paid through your code or link, capped at $18.50 per sale. Approved commission for the previous calendar month goes to your PayPal during ${TBA}. Commission is paid on sales that were not refunded.`,
      },
      {
        q: "Do I earn on the upsells?",
        a: "No. Commission is on the Challenge front-end only.",
      },
      {
        q: "What if someone buys without my code or link?",
        a: "We can only credit sales we can trace, which is why saying your code in the video matters.",
      },
      {
        q: "Will this always be here?",
        a: "Your code, your link, and your 50% founding rate are yours to keep. As a founding creator, your terms stay locked as the program grows.",
      },
    ],
  },
  {
    group: "Eligibility and rewards",
    items: [
      {
        q: "What does it cost?",
        a: "There is no membership fee. Hairqare Creators is application-only.",
      },
      {
        q: "Can I join from my country?",
        a: "We accept international applications where we can operate the program and send payouts. We confirm whether PayPal payouts are available for your country by email when you're accepted.",
      },
      {
        q: "I'm still in the middle of the Challenge. Can I post already?",
        a: "Yes. Documenting your journey while you live it makes the most honest content.",
      },
      {
        q: "How do I claim the 100,000 view reward?",
        a: "Submit each counted video link, its posting date, and a TikTok or Instagram analytics screenshot for that video showing the views earned during its first 30 days. We verify every claim.",
      },
      {
        q: "How does the Hairqare Lab draw work?",
        a: "Every founding member who posts five videos is in the draw. One founding member wins lifetime Hairqare Lab, and we announce them with their consent. Full details are in the Terms.",
      },
      {
        q: "When do I get the gift pass?",
        a: "It is confirmed provisionally when your fifth eligible video is submitted, and finalized once your counted videos complete their 30-day live requirement.",
      },
      {
        q: "When does Merely priority access start?",
        a: "When Merely launches. You will be first in line, and we will tell you the moment it is ready.",
      },
    ],
  },
];

export const SUPPORT = {
  title: "Questions or problems?",
  body: "One address for everything — payment or link issues reach Toby, program questions reach Ritesh. Or just reply to any of our emails.",
  wellbeing:
    "If you ever receive hate comments or feel uncomfortable about a video, tell us. You can take a video down early in that situation with no penalty, and you can ask us to pause our use of that video while we review. We will support you.",
};
