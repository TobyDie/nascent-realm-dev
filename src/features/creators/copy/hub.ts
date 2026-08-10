/**
 * All copy for Surface B (/creators/hub) — the post-acceptance creator hub.
 *
 * Voice: Sarah, talking to a creator she is glad to have. Warm before
 * instructive. The rules that follow are the same rules, but this hub invites
 * rather than commands — "take a few minutes to read these", not "read these" —
 * and an instruction carries the reason it exists ("so we can count it toward
 * your rewards"). Reassurance is part of the information, not decoration.
 *
 * Still written for a global audience: plain words, no idiom a non-native
 * reader would trip on. Several fields are arrays of lines rather than
 * paragraphs, because the page renders each line separately.
 *
 * The exceptions are deliberate. RULES, DOS, DONTS and ELIGIBLE stay plain and
 * exact — they decide whether a video counts and whether someone gets paid, and
 * softening them into "try to" and "it's best if" would buy warmth with
 * ambiguity. The terms page (./terms) stays direct throughout for the same
 * reason. `{{TBA}}` marks an open decision — see ./tokens.
 */

import { MISSION } from "./creators";
import { IMG } from "../images";
import type { HubTabPath } from "./hub-nav";

export const INTRO = {
  eyebrow: "Hairqare Creators",
  title: "Welcome to the Founding Crew",
  // Sarah's voice, first person. The welcome is the one place she speaks to a
  // creator directly on this page, so it opens with the greeting and only then
  // says what the program is.
  lede: [
    "You're officially in, and I'm so happy to have you here.",
    "Hairqare Creators is not an influencer program. It's a small group of real Hairqare students sharing their honest hair journey in their own words, on their own account, in the way they would naturally tell a friend. No scripts, no acting, no pretending. Just your real experience, because that is what helps other women feel seen enough to start their own journey too.",
  ],
  action: {
    title: "Posted a new video?",
    // Names the platforms rather than saying "the link", because a creator also
    // has a Challenge link and the two were being confused. TikTok and
    // Instagram only: those are the platforms ELIGIBLE and the view rewards
    // actually count.
    body: [
      "Copy the link to your TikTok, Instagram Reel, or video post and send it to us here so we can count it toward your rewards.",
    ],
    cta: "Submit my video",
  },
};

/**
 * The welcome block that opens the hub, before the four steps.
 *
 * Written for someone who has never been in an affiliate or creator program
 * and would not recognise the words "code", "link", or "commission" as things
 * that belong to them. Nothing here assumes prior knowledge.
 */
export const WELCOME = {
  /**
   * Rendered as a highlighted callout rather than body copy: "bookmark this"
   * is the one instruction that changes how a creator uses the hub for the
   * next three months, and as plain paragraphs it read straight past.
   */
  homeBase: {
    title: "This page is your home base.",
    // "in your hub", not "on this page": since the hub was split into six
    // routes the rules and rewards are a click away, not here.
    body: "Everything you need to participate is right here in your hub: where to send your videos, how your code and link work, what counts toward your rewards, what to avoid, and the answers to the questions that usually come up along the way.",
    action: "Bookmark this page so you can come back anytime you need!",
  },

  cardsTitle: "Everything you need to know",
  cardsIntroTitle: "First time doing something like this?",
  // One line, not two. The old second line promised "about five minutes" and
  // then listed what the pages cover — both of which this line already does.
  cardsIntro: [
    "Take a few minutes to read through these pages so you know exactly how to share, how your rewards work, and how we keep this program honest, simple, and safe for everyone.",
  ],

  questions: "Questions, anytime:",
};

/**
 * Copy for /creators/hub/start — the walkthrough a creator reads once, on
 * their first day.
 *
 * Written for someone who has never been in an affiliate or creator program
 * and would not recognise the words "code", "link", or "commission" as things
 * that belong to them. Nothing here assumes prior knowledge.
 */
export const START = {
  lede: [
    "Here's everything you need to begin, in the order that makes it easiest.",
    "Nothing here needs our approval first. You post in your own way, and then you tell us so we can count it.",
  ],

  /**
   * Always "your Challenge link" here, never "your link". A creator deals with
   * two different links — the Challenge link that goes in their bio, and the
   * link to a video they just posted, which they send to us. Calling both of
   * them "your link" was making people submit the wrong one.
   */
  codeTitle: "Your code and your Challenge link",
  codeIntro:
    "When you open your acceptance email, you'll find two things that belong to you alone:",
  codeItems: [
    {
      term: "Your code",
      def: "A short word, like SARA. You can say it or show it in your videos, and people type it at checkout when they join.",
    },
    {
      term: "Your Challenge link",
      def: "Your own web address for the Challenge. It goes in your profile on TikTok or Instagram, and people can tap it to join.",
    },
  ],
  codeWhy: [
    "Either one tells us that an enrollment came from you, and that is how your rewards find their way back to you.",
    "So keep that email somewhere safe, because everything starts from there.",
    "If you've lost it, just email us and we'll send it again the same day.",
  ],

  stepsTitle: "Your first steps",
};

/**
 * How to get the Challenge link into a profile, per platform.
 *
 * Sits behind a disclosure inside step 2 rather than in the step flow: it's
 * reference a creator needs once, on one platform, and at full weight it
 * buried the five steps it was meant to support.
 */
export const PLATFORM_GUIDE = {
  summary: "How do I add my Challenge link to my profile?",
  platforms: [
    {
      name: "On Instagram",
      steps: [
        "Open your profile.",
        "Tap Edit profile.",
        "Tap Links.",
        "Tap Add external link.",
        "Paste your personal Challenge link and save it.",
      ],
      note: "In your video, you can say:",
      say: "Use my code SARA when you join, or tap the link in my bio.",
    },
    {
      name: "On TikTok",
      steps: [
        "Open your profile.",
        "Tap Edit profile.",
        "Look for Links or Website.",
        "If you see it, paste your personal Challenge link and save it.",
      ],
      note: "If you don't see the website option, don't worry at all. Just say and show your personal code in every video instead:",
      say: "Use my code SARA when you join the Challenge.",
    },
  ],
  caution:
    "Links in captions and comments don't always work, so it's safest to point people to the link in your profile, or simply give them your code.",
};

// ─── Tier 0: what this program actually is ────────────────────────────────────
// For anyone who lands straight on the hub and never saw /creators. Sarah's
// letter is imported, not copied, so the story stays in one place.

/**
 * This page answers "what is this, and what am I meant to do?" — nothing else.
 * No reward amounts and no earning breakdown: those belong on Rewards & pay,
 * and repeating them here is what made the old ways-you-earn table confusing.
 */
export const PROGRAM = {
  // Deliberately not a rerun of the Welcome lede, which already says "not an
  // influencer program". This leads with why the crew exists instead.
  what: [
    "Hairqare Creators is a small crew of Hairqare students who share what the Challenge did for their hair.",
    "There are no paid influencers here. Every woman in the crew has lived it herself.",
    "You tell people what happened to your hair, and when someone joins the Challenge because of you, you earn.",
  ],

  whyTitle: "Why students, not influencers",
  // Sarah's message, trimmed to the three beats that matter here.
  why: [MISSION.letter[1], MISSION.letter[2], MISSION.letter[4]],
  signature: MISSION.signature,

  asksTitle: "What we ask of you",
  asks: [
    "Tell your own story, in your own words. Your account, your style, your language.",
    "Share at least 5 videos, and more if you enjoy it.",
    "Tag @hairqare and say your code, so we know the video is yours.",
    "We never send you a script, and there is nothing to learn by heart.",
  ],

  /**
   * A short, visual look at what's waiting — not a pitch. Whoever reads this
   * has already applied and been accepted, so the job is to get them posting,
   * not to sell them the program again. The full detail (how views are
   * counted, how payouts work, what can cancel a reward) stays on Rewards &
   * pay; these are one line each on purpose.
   *
   * Images are the /creators PERKS art, reused as-is. Deliberately different
   * files from the ones on Rewards & pay so the two pages don't look identical.
   *
   * Two things this must never say, per Toby: no per-sale cap figure, and no
   * promise that the 50% rate is permanent.
   */
  rewardsTitle: "What you can earn",
  rewardsCards: [
    {
      eyebrow: "Every enrollment",
      headline: "You earn 50% of every enrollment",
      body: "When someone enrolls in the Challenge with your code or link, half of it is yours.",
      image: IMG.perkEarn,
    },
    {
      eyebrow: "Post 5 videos",
      headline: "Rewards just for showing up",
      body: "A gift pass for someone you love, and a place in the draw for Hairqare Lab.",
      image: IMG.perkGifts,
    },
    {
      eyebrow: "Reach 100,000 views",
      headline: "Hairqare Lab, free for life",
      body: "The full $997 program, yours to keep.",
      image: IMG.perkLab,
    },
    {
      eyebrow: "Founding creator",
      headline: "You're in the first crew",
      body: "Your own code and your own link, chosen by hand.",
      image: IMG.perkForLife,
    },
  ],
  rewardsNudge:
    "There's nothing to claim and nothing to chase. You share your videos, send us the links, and we take care of the counting.",

  notYetApplied: "Haven't applied yet?",
  notYetLink: "Read the program page",
};

// ─── Tier 1: the essentials ───────────────────────────────────────────────────

/**
 * One block per piece of step content, so the page can give each kind its own
 * weight — a prompt list should not look like an instruction, and a line you
 * can read aloud should not look like either.
 *
 *   text     plain lines, the step's own voice
 *   list     bulleted, with an optional lead-in label
 *   ordered  numbered sub-steps (taps to make, in order)
 *   quote    something the creator can say word for word
 *   note     a caution, held at lower contrast than an instruction
 *   links    a way out to another hub page, mid-step
 *   guide    renders PLATFORM_GUIDE behind a disclosure
 */
export type StepBlock =
  | { kind: "text"; lines: string[] }
  | { kind: "list"; label?: string; items: string[] }
  | { kind: "ordered"; label?: string; items: string[] }
  | { kind: "quote"; label?: string; text: string }
  | { kind: "note"; text: string }
  | {
      kind: "links";
      label?: string;
      items: { label: string; to: HubTabPath; note: string }[];
    }
  | { kind: "guide" };

export const START_STEPS: { step: string; blocks: StepBlock[] }[] = [
  {
    step: "Save your code and Challenge link",
    blocks: [
      {
        kind: "text",
        lines: [
          "You'll find both in your acceptance email. Keep them somewhere easy to reach, so they're there whenever you need them.",
        ],
      },
    ],
  },
  {
    step: "Prepare your account",
    blocks: [
      {
        kind: "list",
        items: [
          "Set your TikTok or Instagram account to public, so we can see your videos and count them toward your rewards.",
          "Add your Challenge link to your profile if the option is there. If it isn't, your personal code works just as well.",
        ],
      },
      { kind: "guide" },
      {
        kind: "note",
        text: "Links in captions and comments don't always work, so it's safest to point people to the link in your profile, or simply give them your code.",
      },
    ],
  },
  {
    step: "Post your first video within 14 days",
    blocks: [
      {
        kind: "text",
        lines: ["Posting your first video is what activates your founding creator spot."],
      },
      {
        kind: "list",
        label: "Your video can be simple:",
        items: [
          "What was happening with your hair before?",
          "What did the Challenge help you understand?",
          "What changed for you?",
          "What would you tell another woman experiencing the same thing?",
        ],
      },
      {
        kind: "text",
        lines: [
          "Show your face, film your hands, or talk over the top. Whatever feels most natural to you is the right choice.",
        ],
      },
      {
        kind: "list",
        label: "Before posting:",
        items: [
          "Tag @hairqare, so we can find your video.",
          "Mention your code, or say “link in my bio,” so people know where to go.",
          "Share your honest experience. Please don't promise that everyone will get the same result, because every woman's hair is different.",
        ],
      },
      {
        kind: "links",
        label: "Not sure what to film, or what counts?",
        items: [
          {
            label: "Tips & advice",
            to: "/creators/hub/tips",
            note: "Ideas for your video, and what works on camera.",
          },
          {
            label: "Rules & FAQ",
            to: "/creators/hub/faq",
            note: "What counts as a video, and what to avoid.",
          },
        ],
      },
      {
        kind: "text",
        lines: [
          "You never need our approval before posting. It's your account, your words, and your real story.",
        ],
      },
    ],
  },
  {
    step: "Send us your posted video",
    blocks: [
      {
        kind: "ordered",
        label: "After posting:",
        items: [
          "Open your TikTok video or Instagram Reel.",
          "Tap Share.",
          "Tap Copy link.",
          "Return to this page and tap Submit my video.",
          "Paste the video link and submit it.",
        ],
      },
      { kind: "text", lines: ["Do the same after every new video you post."] },
      {
        kind: "text",
        lines: [
          "Five videos is all it takes to unlock your first creator rewards. If you enjoy it and want to make more, please do!",
        ],
      },
    ],
  },
  {
    step: "Watch for your Friday update",
    blocks: [
      {
        kind: "list",
        label: "Every Friday, we'll email you an update showing:",
        items: [
          "Enrollments tracked through your code and link.",
          "Your progress toward the next reward.",
        ],
      },
    ],
  },
];

export const EARN_TITLE = "Three ways your videos pay you back";
export const EARN_LEDE =
  "You earn for posting, for being watched, and for every woman who joins because of you.";

/** Column headings for the rewards table. Hidden below cs, where it stacks. */
export const REWARD_COLUMNS = { doing: "What you do", getting: "What you get" };

/**
 * Two short lines per reward, not four paragraphs.
 *
 * The operational detail that used to sit here — how to claim the 100k reward,
 * the 30-day window that makes a reward final, what happens if you delete a
 * counted video — all still exists, in the FAQ and the rules, which is where
 * someone goes looking for it. Repeating it on the card made the page unreadable
 * for the far more common visit, which is "remind me what I get".
 */
/**
 * Rendered as a table: `label` is the narrow left column and has to stay short
 * and consistent, so every row reads as the same kind of thing — the trigger
 * that earns you something. `summary` is the reward itself.
 */
export const REWARDS: {
  key: string; // image lookup only
  label: string;
  summary: string;
  details: string[];
}[] = [
  {
    key: "5",
    label: "Post 5 videos",
    summary: "A gift pass for someone you love, a place in the draw, and early access to Merely.",
    details: [
      "Send us your fifth video and all three are yours.",
      "We'll email the gift pass within a few days, so there's nothing for you to claim.",
    ],
  },
  {
    key: "100k",
    label: "Reach 100,000 views",
    summary: "Hairqare Lab, free for life. The full $997 program.",
    details: [
      "TikTok and Instagram views both count, as long as they're organic.",
      "For each video, the views from its first 30 days count toward your total.",
    ],
  },
  {
    // Matches the eyebrow on the Program page card, so the two pages agree.
    key: "%",
    label: "Every enrollment",
    summary:
      "50% of every Challenge enrollment. Someone enrolls with your code or link, and half of it is yours.",
    // Stays on the row: enrollments count from any platform, but views only
    // count on TikTok and Instagram, so this can't move to the shared note.
    details: ["Any enrollment counts, wherever you shared it."],
  },
];

// ─── Getting paid ─────────────────────────────────────────────────────────────
// Same voice as Start here: one idea per line, no clauses stacked up.

export const PAID_INTRO = "Every Friday, we'll email you an update showing:";

export const PAID_FACTS = [
  "Enrollments tracked through your code and link.",
  "Your progress toward the next reward.",
];

export const PAID = [
  "We send your commission to the payment method you chose when you applied.",
  "If you'd like to change it, just email us and we'll update it for you.",
];

/**
 * Where to go for the detail this page deliberately no longer carries.
 *
 * Ordered by what someone standing on "Getting paid" actually wants next: the
 * money questions first (refunds, sales without a code — the things people
 * worry about once money is involved), then what keeps a video counting, and
 * the legal text last, because almost nobody arrives here wanting it.
 */
export const PAY_LINKS = {
  title: "More detail, if you need it",
  items: [
    {
      label: "Money questions",
      note: "Refunds, upsells, and enrollments without your code.",
      to: "/creators/hub/faq" as const,
      hash: "faq",
    },
    {
      label: "The rules",
      note: "What keeps a video counting.",
      to: "/creators/hub/faq" as const,
      hash: "rules",
    },
    {
      label: "Program terms",
      note: "The full legal detail.",
      to: "/creators/terms" as const,
      hash: undefined,
    },
  ],
};

/**
 * Copy for the hub's earnings visualiser.
 *
 * The /creators version is written to persuade someone to apply ("everything
 * you walk away with", "there is no version of this where you walk away with
 * nothing"). Whoever reads this has already joined, so the labels here just
 * describe what the sliders do.
 *
 * The reward names themselves are imported from JOURNEY so the two surfaces
 * can't drift apart.
 */
export const EARNINGS = {
  title: "See what it adds up to",
  intro: "Move the sliders to see what your videos could add up to.",

  postTitle: "You post",
  postLabel: "I post 5 videos and tag @hairqare",
  postSub: "Five is the baseline, and there's no limit.",

  viewsTitle: "People watch",
  viewsHint: "On the way to Hairqare Lab",
  viewsReached: "Hairqare Lab unlocked.",
  viewsUnit: "views",

  salesTitle: "People join",
  salesHint: "People a month who join with your code or link",
  salesUnit: "a month",

  perMonth: "Per month",
  perYear: "Per year",
  saleNote: "50% of every Challenge enrollment.",

  panelTitle: "What you'd have",
  panelEmpty: "Switch on “I post 5 videos” to see what you'd unlock.",
  totalLabel: "Rewards unlocked",

  /**
   * Our own illustrative note rather than the LOCKED EARNINGS_DISCLAIMER from
   * ./compliance — that one is scoped to /creators S4 and ends "your code keeps
   * earning for life", which is the permanence promise this hub no longer makes.
   * This keeps the part that matters: the figures are illustrative.
   */
  note: "Illustrative only. What you earn depends on your videos and your audience. Most creators start small.",
};

// ─── Tier 2: reference ────────────────────────────────────────────────────────

export const ELIGIBLE_TITLE = "Which videos count?";

export const ELIGIBLE_INTRO = "Your video counts toward your rewards when it:";

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

export const IDEAS_INTRO =
  "Not sure what to film? Here are a few ideas that work beautifully, and you can take any of them in your own direction.";

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
          "No, not at all.",
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
          "No, you don't.",
          "Face on camera, hands only, or voiceover are all completely fine.",
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
          "You earn 50% of every Challenge enrollment through your code or link.",
          "We pay it to the preferred payment method you gave us when you applied.",
          "You are paid for enrollments that were not refunded.",
        ],
      },
      {
        q: "Do I earn on the upsells?",
        a: ["No, not on the upsells.", "You earn on the Challenge itself."],
      },
      {
        q: "What if someone buys without my code or link?",
        a: [
          "We can only pay for enrollments we can trace back to you.",
          "That's why saying your code in the video matters so much.",
        ],
      },
      {
        // Answers what is stable — the program, the code, the founding place —
        // without putting a number on it. Deliberately silent on how long the
        // 50% rate lasts: this hub neither promises it is permanent nor warns
        // that it could change. Do not reintroduce a rate promise here.
        q: "Will this always be here?",
        a: [
          "Yes, the program is here to stay.",
          "Your code and your link are yours, and your place in the founding crew doesn't expire.",
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
        a: ["Yes, please do.", "Filming while you live it makes the most honest content."],
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
    "You can email us anytime.",
    "Payment, links, rewards, or anything you're wondering about — we're here to help.",
    "You can also just reply to any of our emails.",
  ],
  wellbeing:
    "If you ever get hate comments or feel uncomfortable about a video, tell us. You can take that video down early with no penalty, and we'll stop using it while we look into it. We will support you.",
};
