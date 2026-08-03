// All copy for Surface A (/creators), ported from Doc 08 (layout + verbatim strings)
// and Doc 09, with Doc 11's two overrides applied:
//   • Layer 1 includes Merely priority
//   • Layer 2 card is Hairqare Lab only
// Sarah's letter (S2) is a faithful draft in her register per Doc 08 S2 beats; it is a
// copy-pass surface (Review-Like-Sarah), not a locked string. Testimonial quotes (S6)
// are placeholder slots only (Doc 11 §12). Compliance strings live in ./compliance.

import { EARNINGS_DISCLAIMER } from "./compliance";
import { IMG } from "../images";

export const HERO = {
  eyebrow: "HAIRQARE CREATORS",
  headline: "Your hair story could change another woman's hair.",
  sub: "I'm opening a small founding crew of my students who share their real hair journey, in their own words. You earn on every woman you bring in, and you can earn your way into Hairqare Lab.",
  trust: ["250,000+ students", "149 countries", "By application only"],
};

export const MISSION = {
  pullLine: "Haircare made simple, for every woman.",
  tapeLabel: "why I'm doing this",
  // Faithful draft of Sarah's letter (Doc 08 S2). Confessed, first-person register.
  letter: [
    "For years I watched women spend money they didn't have on products that were never going to work. Not because they weren't trying. Because no one ever taught them how their own hair actually works.",
    "My students changed that for themselves. They stopped guessing. They understood their hair, and their hair changed.",
    "Here's the honest part: no ad I could ever buy will be as truthful as one of you talking about your own hair. So I'd rather hand you the microphone.",
    "If you did the challenge and your hair has a story, I want you in.",
  ],
  signature: "Sarah",
};

// S3 perk cards (Doc 12 / Change Order 001). Order is fixed: money, posting,
// views, status. Copy is verbatim from the change order — do not reword.
// Each card carries its own image so the pairing can't drift out of order.
export const PERKS = {
  eyebrow: "WHAT YOU GET",
  heading: "The perks of joining the founding crew",
  intro:
    "Share your real hair journey in your own words and earn in three separate ways. You earn commission on every sale, you earn rewards just for posting, and you unlock bigger rewards as your videos reach more women. Every reward is separate, and they all stack.",
  cards: [
    {
      eyebrow: "SHARE YOUR CODE OR LINK",
      headline: "Earn 50% of every Challenge sale",
      body: "When someone joins the $37 Better Hair Challenge through your personal code or link, half of that sale is yours, up to $18.50 each time. Share it on TikTok, Instagram, YouTube, email, or anywhere else. Paid to your PayPal every month.",
      image: IMG.perkEarn,
    },
    {
      eyebrow: "POST 5 VIDEOS",
      headline: "Unlock gifts and the founding draw",
      body: "Post five videos and you unlock a Challenge gift pass for someone you love, your name in the draw for lifetime Hairqare Lab access, and priority access to Merely the moment it launches.",
      image: IMG.perkGifts,
    },
    {
      eyebrow: "REACH 100,000 VIEWS",
      headline: "Hairqare Lab is yours, free for life",
      body: "Reach 100,000 total organic TikTok views across your eligible videos and you receive lifetime access to Hairqare Lab, the full $997 program. Views earned within 30 days of each post count toward your total.",
      image: IMG.perkLab,
    },
    {
      eyebrow: "FOUNDING MEMBER STATUS",
      headline: "Keep earning for life",
      body: "This is yours to keep. As a founding creator, your code, your link, and your 50% rate are locked in for life — they stay yours as the program grows.",
      image: IMG.perkForLife,
    },
  ],
};

// Build Your Journey (S4) — micro-headers, panel copy, locked disclaimer, closer.
export const JOURNEY = {
  eyebrow: "BUILD YOUR JOURNEY",
  heading: "See everything you could walk away with.",
  controls: {
    post: "You post",
    watch: "People watch",
    buy: "People buy",
  },
  commit: {
    label: "I post 5 videos and tag @hairqare",
    sub: "Five is the baseline. There's no cap.",
  },
  panelTitle: "Everything you walk away with",
  totalLabel: "TOTAL REWARD VALUE",
  // Muted separating line under the reward total (Doc 13 Change 2).
  earningsNote: "Your earnings are on top of this, and they never stop.",
  rewards: {
    founding: { title: "Founding member", note: "You're on the crew" },
    giftPass: { title: "Challenge gift pass", note: "Give it to someone you love" },
    hqlDraw: {
      title: "Hairqare Lab draw entry",
      note: "one founding member wins it",
    },
    merely: {
      title: "Merely priority access",
      note: "First in line when it launches",
    },
    hql: { title: "Hairqare Lab", note: "$997 · lifetime" },
  },
  viewsProgress: () => "On the way to Hairqare Lab",
  salesCaption: "and this part never stops.",
  disclaimer: EARNINGS_DISCLAIMER,
  closingLine: "There is no version of this where you walk away with nothing.",
};

export const STEPS = {
  eyebrow: "HOW IT WORKS",
  items: [
    {
      n: "1",
      title: "Apply",
      body: "Tell me about you and your hair story. I review every application.",
    },
    {
      n: "2",
      title: "Get your kit",
      body: "Your personal code, your link, your creator playbook, and everything you need to start.",
    },
    {
      n: "3",
      title: "Post and earn",
      body: "Your account, your words, your language. We never send scripts.",
    },
  ],
};

// S6 "The women you'd join" (PROOF) was removed — it only ever held
// [VERIFIED STUDENT QUOTE] placeholder slots, and Doc 11 §12 forbids inventing
// quotes. Restore from git history if real, internally-verified quotes arrive.

export const FAQ = {
  eyebrow: "QUESTIONS",
  items: [
    {
      q: "Do I need a big following?",
      a: "No. This is for real students, and every application is reviewed personally.",
    },
    {
      q: "What do I have to post?",
      a: "Your real journey, your way. 5 videos is the baseline; there's no cap. We never send scripts.",
    },
    {
      q: "How do I get paid?",
      a: "50% of every Challenge sale through your code or link, monthly to your PayPal, for life.",
    },
    {
      q: "Do I need to show my face?",
      a: "No. Any format, any language.",
    },
    {
      q: "What does it cost?",
      a: "Nothing — it's free to join. Hairqare Creators is application-only.",
    },
    {
      q: "Can I join from my country?",
      a: "Yes — our creators are all over the world. We pay through PayPal, and we'll sort out the details for where you live once you're in.",
    },
  ],
};

export const FINAL_CTA = {
  headline: "Your hair story is worth telling.",
  lines: [
    "Founding spots are limited, and every creator is hand-picked.",
    "Every application is read personally by our team.",
  ],
  // Terms has its own page (also what the application form links to). The FAQ
  // anchor stays on this page — an applicant has no business in the members' hub,
  // so nothing here links to /creators/hub.
  footerLinks: [
    { label: "Terms", href: "/creators/terms" },
    { label: "Program FAQ", href: "#s7-faq" },
  ],
};
