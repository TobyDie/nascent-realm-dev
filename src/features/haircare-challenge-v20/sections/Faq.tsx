import { useState } from "react";
import { Anno, Eyebrow, Icon, Reveal } from "../primitives";

export function Faq({ onCta }: { onCta?: () => void }) {
  const [open, setOpen] = useState(0);

  const item = (i: number, q: string, a: string) => {
    const isOpen = open === i;
    return (
      <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
        <button
          onClick={() => setOpen(isOpen ? -1 : i)}
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, background: "none", border: "none", padding: "20px 22px", cursor: "pointer", textAlign: "left" }}
        >
          <span style={{ fontSize: 17, fontWeight: 600, color: "var(--ink)" }}>{q}</span>
          <Icon name={isOpen ? "minus" : "plus"} size={20} color="var(--orange-600)" />
        </button>
        <div style={{ display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr", transition: "grid-template-rows .3s var(--ease)" }}>
          <div style={{ overflow: "hidden" }}>
            <p className="p" style={{ padding: "0 22px 22px", fontSize: 16, margin: 0 }}>{a}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-lav">
      <Anno>Section 10 - Objection handling / FAQ</Anno>
      <div className="wrap" style={{ maxWidth: 760 }}>
        <Reveal style={{ textAlign: "center", marginBottom: 36 }}>
          <Eyebrow>Before you start</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12 }}>Questions she usually has before she starts</h2>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {item(0, "My hair stops growing past a certain length - will this actually help?", "Yes. The length plateau is almost never genetic - it's a combination of breakage outrunning growth, low ferritin, and a shortened growth phase from chronic stress. The challenge addresses all three. Most women see their first new length within the 14 days.")}
          {item(1, "I had a baby and the shedding never fully came back. Is it too late?", "No. Postpartum shedding can take 12–24 months to fully reverse on its own, and often doesn't without addressing the root nutrient and hormonal shifts it triggered. This program is built around exactly that recovery.")}
          {item(2, "I color/bleach/heat-style my hair. Do I have to stop?", "No. You'll learn how to keep doing the things you love while protecting your hair from compounding damage - and how to actually undo the damage you've already done, instead of just covering it with bond builder.")}
          {item(3, "I've tried so many things. Why is this different?", "Because this is education, not a product. Products treat symptoms - this teaches you to treat the cause. Once you understand what's happening at the root, you stop guessing and start fixing.")}
          {item(4, "I'm really busy. Can I actually do 10 minutes a day?", "The daily videos are designed for exactly that life. Many women watch them while doing their morning routine. Ten minutes, once a day, for fourteen days - that's the whole commitment.")}
          {item(5, "I might be perimenopausal / I have a thyroid issue. Will this still work?", "Yes. The program covers early perimenopause and the most common metabolic shifts (thyroid, ferritin, B12) that affect hair in your 30s - but the core system works the same whether or not those apply to you.")}
          {item(6, "Can I join from anywhere in the world?", "Yes. The challenge is 100% online and runs in English. Daily videos, the journal, the workshops and the community are all accessible from any country - all you need is a phone or laptop.")}
          {item(7, "Will I have access to the challenge after it's completed?", "Yes - the masterclass, journal, workshops and handbooks are yours to keep forever. You can revisit any lesson, re-run the challenge, or use the reference guides whenever you need them.")}
          {item(8, "Do I need to buy any special products to do this?", "No. Everything in the challenge is built around things you likely already have at home, plus a few inexpensive kitchen ingredients for the DIY shampoo workshop. There is nothing extra to buy from us.")}
          {item(9, "Is this just another course I'll never finish?", "The 14-day structure and the community cohort - everyone starts together - are specifically designed to get you to the finish line. 86% of participants complete the challenge.")}
          {item(10, "Can I get a refund if I don't like it?", "Yes. Your purchase is 100% risk-free with a 30-day money-back guarantee. If the challenge isn't for you, email hello@hairqare.co within 30 days of starting and we'll refund you in full. No questions asked.")}
        </div>
        <div className="center" style={{ marginTop: 30 }}>
          <a
            id="cta-faq"
            href="#start"
            onClick={(e) => { e.preventDefault(); onCta && onCta(); }}
            style={{ color: "var(--orange-700)", fontWeight: 700, fontSize: 16, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            All my questions are answered. Let's begin <Icon name="arrow-right" size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Faq;