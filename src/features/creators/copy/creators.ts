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
  headline: "Your hair story could change how another woman sees hers.",
  sub: "I'm building a small founding crew of Hairqare students, not hired influencers, to share what really changed for them. Your account. Your words. Your style. And when your story helps another woman join the 14-Day Haircare Challenge, you earn.",
  trust: [
    "250,000+ students",
    "149 countries",
    "Founding crew by application only",
  ],
};

export const MISSION = {
  pullLine: "Why I'm choosing students, not influencers.",
  tapeLabel: "why I'm doing this",
  // Faithful draft of Sarah's letter (Doc 08 S2). Confessed, first-person register.
  letter: [
    "Almost every week, an agency offers me the same thing: influencer packages, reach guarantees, “authentic creator content.” It would be the fastest way to put Hairqare in front of more women.",
    "But I used to be an influencer. I know the pre-written captions, the template “personal stories,” and the rate cards. A campaign can buy reach. It cannot buy the truth of a woman who has actually been there.",
    "Hairqare was built to put clear, science-backed education and control back into women's hands. More than 250,000 students have begun that journey. So why would I hand this mission to people who have never lived it?",
    "If the Challenge changed how you understand your hair, your story is the one another woman needs to hear.",
    "I'd rather put the microphone, and the money, in your hands.",
  ],
  signature: "Sarah",
};

// S3 perk cards (Doc 12 / Change Order 001). Order is fixed: money, posting,
// views, status. Copy is verbatim from the change order — do not reword.
// Each card carries its own image so the pairing can't drift out of order.
export const PERKS = {
  eyebrow: "WHAT YOU GET",
  heading: "A real mission should reward the women carrying it.",
  intro:
    "Instead of giving this money to agencies, I want it to land in our students' pockets. You can earn from every sale, unlock rewards for showing up, and earn Hairqare Lab through your reach. Every reward stacks.",
  cards: [
    {
      eyebrow: "EVERY WOMAN YOU HELP JOIN",
      headline: "Earn 50% of every Challenge sale",
      // Per-sale cap removed at Toby's request — the promise is stated as a
      // plain 50% here; the cap still lives in ./terms, which is the binding
      // text. 50% of $37 is $18.50, so the two never disagree in practice.
      body: "Each time someone joins the $37 14-Day Haircare Challenge through your personal code or link, 50% is yours. Share it on TikTok, Instagram, YouTube, email, or anywhere your story lives. Verified commissions are paid to the payment method you give us.",
      image: IMG.perkEarn,
    },
    {
      eyebrow: "POST YOUR FIRST 5 VIDEOS",
      headline: "Unlock rewards just for showing up",
      body: "Post five eligible videos and unlock a $37 Challenge gift pass for someone you love, entry into the founding crew's Hairqare Lab draw, and priority access to Merely when it launches. No viral moment required. Start by sharing what really happened.",
      image: IMG.perkGifts,
    },
    {
      eyebrow: "REACH 100,000 VIEWS",
      headline: "Earn Hairqare Lab, free for life",
      body: "Reach 100,000 total organic TikTok views across your eligible videos and the complete $997 Hairqare Lab is yours, for life. Views earned within 30 days of each post count toward your combined total.",
      image: IMG.perkLab,
    },
    {
      eyebrow: "FOUNDING CREATOR STATUS",
      headline: "Keep your 50% rate for life",
      body: "Your personal code and link are yours to keep. As a founding creator, your 50% commission rate is locked in for life, even as the program grows. Your content can keep helping women, and your link can keep earning.",
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
      a: "50% of every Challenge sale through your code or link, sent to the payment method you give us, for life.",
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
