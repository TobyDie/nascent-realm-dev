/**
 * All copy for Surface B (/creators/hub) — the post-acceptance creator hub.
 *
 * Written for a global audience: short sentences, plain words, one idea per
 * line. Several fields are arrays of lines rather than paragraphs, because the
 * page renders each line separately and that rhythm is what makes the page
 * skimmable in two minutes.
 *
 * The program terms live in ./terms (their own page). `{{TBA}}` marks an open
 * decision — see ./tokens.
 */

import { MISSION } from "./creators";

export const INTRO = {
  eyebrow: "Hairqare Creators",
  title: "Everything you need to know",
  lede: [
    "Share your real hair journey in your own way.",
    "Use your own words, your own style, and your own language.",
    "No scripts. No acting.",
    "Earn rewards for posting, views, and sales.",
  ],
  codeNote:
    "Your personal code and link are in your acceptance email. Lost it? Email us and we'll send it again the same day.",
  action: {
    title: "Posted a new video?",
    body: [
      "Send us the link so we can count it.",
      "TikTok and Instagram both count.",
    ],
    cta: "Submit a video link",
  },
};

// ─── Tier 0: what this program actually is ────────────────────────────────────
// For anyone who lands straight on the hub and never saw /creators. Sarah's
// letter is imported, not copied, so the story stays in one place.

export const PROGRAM = {
  what: [
    "Hairqare Creators is a small founding crew of Hairqare students.",
    "Not hired influencers. Real women who did the Challenge.",
    "Your account. Your words. Your style. Any language.",
    "When your story helps another woman join the 14-Day Haircare Challenge, you earn.",
  ],
  whyTitle: "Why students, not influencers",
  // Sarah's message, trimmed to the three beats that matter here.
  why: [MISSION.letter[1], MISSION.letter[2], MISSION.letter[4]],
  signature: MISSION.signature,
  waysTitle: "The ways you earn",
  ways: [
    {
      label: "Every sale",
      body: "50% of every $37 Challenge sale through your code or link, up to $18.50 each.",
      href: "#earn",
    },
    {
      label: "Post 5 videos",
      body: "A $37 gift pass for someone you love, a Hairqare Lab draw entry, and Merely priority access.",
      href: "#earn",
    },
    {
      label: "100,000 views",
      body: "The full $997 Hairqare Lab, free for life.",
      href: "#earn",
    },
    {
      label: "Founding status",
      body: "Your code, your link, and your 50% rate stay yours for life.",
      href: "#paid",
    },
  ],
  waysNote: "Every reward stacks. The details are in section 02.",
  notYetApplied: "Haven't applied yet?",
  notYetLink: "Read the program page",
};

// ─── Tier 1: the essentials ───────────────────────────────────────────────────

export const START_STEPS: { step: string; body: string[] }[] = [
  {
    step: "Get your code",
    body: [
      "It's in your acceptance email, with your personal link.",
      "You can say the code in your videos (“use my code SARA at checkout”). The link goes in your bio if TikTok allows it for your account.",
    ],
  },
  {
    step: "Post your first video within 14 days",
    body: [
      "That keeps your founding member spot active.",
      "Your real hair journey, in your own words.",
    ],
  },
  {
    step: "Send us your video link",
    body: [
      "Use the submit button above.",
      "No approval needed. Just post it, then tell us.",
    ],
  },
  {
    step: "Keep going",
    body: [
      "Aim for at least 5 videos.",
      "Want to post more? Go for it.",
      "Everything you can earn is on this page.",
    ],
  },
];

export const EARN_INTRO = "You can earn in 3 ways:";

export const EARN_WAYS = ["Posting", "Views", "Sales"];

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
      "A Better Hair Challenge gift pass, a draw entry, and early access to Merely.",
    details: [
      "Post at least 5 videos. Want to post more? Go for it, there is no limit.",
      "When you send us your fifth video you get three things: a Better Hair Challenge gift pass for someone you care about, your name in the draw for lifetime Hairqare Lab (one founding member wins it), and early access to Merely when it launches.",
      "We check your links after your fifth video and email the gift pass within a few days. Nothing to claim.",
      "These rewards are confirmed for now, and become final once each counted video has stayed live for 30 days. Deleting a counted video early can cancel a reward.",
    ],
  },
  {
    badge: "100k",
    tone: "gold",
    title: "Reach 100,000 views",
    summary: "Hairqare Lab, free for life. Lifetime access to the full $997 program.",
    details: [
      "Every video that counts adds up. For each video we count the views it earned in its first 30 days.",
      "TikTok and Instagram views both count. Organic views only.",
      "To claim, email support with each video link, its posting date, and an analytics screenshot showing the views from its first 30 days. We check every claim.",
    ],
  },
  {
    badge: "%",
    tone: "flame",
    title: "Commission on every Challenge sale",
    summary:
      "50% of the Better Hair Challenge price actually paid, up to $18.50 per sale.",
    details: [
      "Every sale made through your code or link earns you a commission, from any platform you share on.",
      "Taxes, refunds, order bumps, upsells, and other products are not included.",
      "Your founding rate never goes down. You keep earning for as long as you're in the program.",
      "You see your sales in the Friday email. Your commission is paid to the payment method you give us. Refunded orders are taken off.",
    ],
  },
];

export const PAID_INTRO = "Every Friday you'll get an email showing:";

export const PAID_FACTS = ["Your sales", "Your commission"];

export const PAID = [
  "Your commission is paid to the payment method you give us.",
  "You are paid for sales that were not refunded. If a sale is refunded, it is taken off your payout. A refund that comes in after a payout can be taken off a later one.",
];

// ─── Tier 2: reference ────────────────────────────────────────────────────────

export const ELIGIBLE_TITLE = "Which videos count?";

export const ELIGIBLE_INTRO = "Your video counts if it:";

export const ELIGIBLE = [
  "Is posted on your own public TikTok or Instagram",
  "Shares your real hair journey, in your own words",
  "Tags @hairqare",
  "Shows or says your code",
  "Tells people you're working with Hairqare (turn on TikTok's “Paid Partnership” label if TikTok asks for it)",
  "Stays live for at least 30 days",
];

export const RULES = [
  "You must be 18 or older, with a public TikTok or Instagram account.",
  "Every video mentions us. Tag @hairqare and say or show your code.",
  "Tell people you're working with Hairqare. A quick “thanks @hairqare” is enough. Turn on TikTok's “Paid Partnership” label if TikTok asks for it.",
  "Share your own experience. Don't promise results you haven't personally seen. If you're unsure about a phrase, ask us.",
  "Leave your video up for at least 30 days. After that, it's yours to keep or delete.",
  "Don't pay to boost your videos. We only count organic views. If a boosted video still brings a real sale through your code, you still earn the commission.",
  "Only use music, footage, and material you have permission to use. Music that is fine for a normal TikTok is not always fine for ads, so we may leave that video out of our ads.",
  "Buying through your own code doesn't count.",
  "You own your videos. By joining, you gave us permission to reshare and reuse them, including in our ads, with credit where possible. The Terms have the full license.",
  "Post in any language and any format. Face on camera, hands only, voiceover, whatever feels like you.",
  "You can work with any other brand. No exclusivity.",
  "If we ask you to fix a disclosure, a caption, or a claim, please reply quickly. It keeps your videos counting.",
];

export const DOS = [
  "Post about your own real hair journey, in your own words",
  "Tag @hairqare in every video",
  "Say or show your code in every video",
  "Tell people you're working with Hairqare",
  "Only use audio, footage, and material you have permission to use",
  "Post in any language you like",
  "Use any format: face on camera, hands only, voiceover",
  "Leave each video up for at least 30 days",
  "Post more than 5 videos if you want, there is no limit",
  "Share your code and link anywhere: TikTok, Instagram, YouTube, email",
  "Tell us when you pass 100,000 views",
  "Reply if we ask you to fix a disclosure or a claim",
  "Ask us anything, anytime",
];

export const DONTS = [
  "Don't promise results you haven't personally seen, and no medical claims",
  "Don't speak for anyone else's results, just your own",
  "Don't pay to boost your videos. We only count organic views",
  "Don't buy through your own code",
  "Don't buy fake views or engagement. Fake activity can cancel rewards and your place in the program",
  "Don't call the Challenge free, it is $37",
  "Don't share the exact recipes from the course on camera. Show the making, keep the recipe yours",
  "Don't worry about fancy editing. Real videos work best",
];

export const IDEAS_INTRO = "Need ideas? Try one of these.";

export const IDEAS = [
  "Making your shampoo in your kitchen for the first time",
  "What the ingredient scanner said about the products you used before",
  "Your week 1 vs. week 2 hair",
  "“Things I wish I knew before spending $$$ on haircare”",
  "Your honest day 3, when nothing has changed yet",
];

export const FAQ_GROUPS: { group: string; items: { q: string; a: string[] }[] }[] = [
  {
    group: "Content",
    items: [
      {
        q: "Do I need a big following?",
        a: [
          "No.",
          "Small creators earn too.",
          "What matters is real content. We read every application ourselves.",
        ],
      },
      {
        q: "What do I have to post?",
        a: [
          "Your real hair journey, your way.",
          "Aim for at least 5 videos. There is no limit.",
          "We never send scripts.",
        ],
      },
      {
        q: "Do I need to show my face?",
        a: [
          "No.",
          "Face on camera, hands only, or voiceover. All fine.",
          "Post in any language you like.",
        ],
      },
      {
        q: "Do I need to say it's a partnership?",
        a: [
          "Yes, keep it simple.",
          "A quick “thanks @hairqare” is enough.",
          "Turn on TikTok's “Paid Partnership” label if TikTok asks for it.",
        ],
      },
      {
        q: "Can I post on Instagram or YouTube too?",
        a: [
          "Yes.",
          "TikTok and Instagram views both count toward the 100,000.",
          "The same video posted twice counts once toward your 5 videos, but the views add up.",
          "Your code earns commission from any platform.",
        ],
      },
      {
        q: "Can I show how I make my shampoo?",
        a: [
          "Yes, and it's some of the best content you can post.",
          "Show the making and your experience.",
          "Keep the exact course recipe off camera.",
        ],
      },
      {
        q: "Can I boost my videos?",
        a: [
          "No. Organic views only.",
          "Paid views never count toward posting or view rewards.",
          "If a boosted video still brings a real sale through your code, you still earn the commission.",
        ],
      },
      {
        q: "Can I delete my videos?",
        a: [
          "Yes, after 30 days live.",
          "Rewards you already earned stay yours.",
          "If a video is causing you stress or feels unsafe, tell us. We can waive the 30 days with no penalty.",
        ],
      },
      {
        q: "Can I work with other brands?",
        a: ["Yes.", "No exclusivity, ever."],
      },
    ],
  },
  {
    group: "Money",
    items: [
      {
        q: "How do I get paid?",
        a: [
          "You earn 50% of the Challenge price actually paid through your code or link, up to $18.50 per sale.",
          "We pay it to the payment method you give us.",
          "You are paid for sales that were not refunded.",
        ],
      },
      {
        q: "Do I earn on the upsells?",
        a: ["No.", "You earn on the Challenge only."],
      },
      {
        q: "What if someone buys without my code or link?",
        a: [
          "We can only pay for sales we can trace.",
          "That's why saying your code in the video matters.",
        ],
      },
      {
        q: "Will this always be here?",
        a: [
          "Yes.",
          "Your code, your link, and your 50% founding rate are yours to keep.",
          "Your terms stay the same as the program grows.",
        ],
      },
    ],
  },
  {
    group: "Joining and rewards",
    items: [
      {
        q: "What does it cost?",
        a: ["Nothing.", "There is no fee. Hairqare Creators is application only."],
      },
      {
        q: "Can I join from my country?",
        a: [
          "In most cases, yes.",
          "We accept creators from any country where we can run the program and send payouts.",
          "We confirm payout options for your country by email when you're accepted.",
        ],
      },
      {
        q: "I'm still in the middle of the Challenge. Can I post already?",
        a: [
          "Yes, please do.",
          "Filming while you live it makes the most honest content.",
        ],
      },
      {
        q: "How do I claim the 100,000 view reward?",
        a: [
          "Email us each video link and its posting date.",
          "Add an analytics screenshot showing the views from that video's first 30 days.",
          "We check every claim.",
        ],
      },
      {
        q: "How does the Hairqare Lab draw work?",
        a: [
          "Every founding member who posts 5 videos is in the draw.",
          "One founding member wins lifetime Hairqare Lab.",
          "We announce the winner with their permission. Full details are in the Terms.",
        ],
      },
      {
        q: "When do I get the gift pass?",
        a: [
          "Soon after your fifth video.",
          "It becomes final once your counted videos have stayed live for 30 days.",
        ],
      },
      {
        q: "When does early access to Merely start?",
        a: ["When Merely launches.", "You'll be one of the first, and we'll email you."],
      },
    ],
  },
];

export const SUPPORT = {
  title: "Need help?",
  body: [
    "Email us anytime.",
    "Payment, links, rewards, or questions. We're here to help.",
    "You can also just reply to any of our emails.",
  ],
  wellbeing:
    "If you ever get hate comments or feel uncomfortable about a video, tell us. You can take that video down early with no penalty, and we'll stop using it while we look into it. We will support you.",
};
