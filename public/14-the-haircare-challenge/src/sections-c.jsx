/* HairQare sales page — sections 9–11 + footer / sticky CTA */

/* ---------------- Section 9 — Founder credibility (rewritten) ---------------- */
function Founder({ onCta }) {
  const isMobile = useIsMobile();
  const storyImgs = [
    { label: "Sarah at the peak of her influencer career — styled, on-set for a luxury hair brand campaign. 500K followers, $20K brand deals. Hair was secretly thinning the whole time.", caption: "500,000 followers. $20K brand deals. Losing hair in clumps.", num: "01" },
    { label: "Sarah working with a chemist or dermatologist — notes, formulations, research. The years she stopped promoting products and started asking why.", caption: "The turning point: years with chemists, dermatologists & trichologists.", num: "02", cool: true },
    { label: "Sarah today — 120cm of healthy bleached hair, casual and confident. Same woman, different knowledge. $10 a month.", caption: "Today: 120cm of bleached hair. $10 a month.", num: "03" },
  ];
  const storyCard = (img, i) => (
    <div key={i} className="founder-story-card">
      <Photo h={220} label={img.label} radius={16} cool={img.cool} />
      <div className="founder-story-caption">
        <span className="founder-story-num">{img.num}</span>
        <span>{img.caption}</span>
      </div>
    </div>
  );
  return (
    <section className="bg-white" id="founder">
      <Anno>Section 9 — Founder credibility</Anno>
      <div className="wrap-wide">

        <Reveal style={{ textAlign: "center", marginBottom: 40 }}>
          <Eyebrow>Meet your coach</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 760, marginInline: "auto" }}>
            She lost half her hair at the peak of her career.<br />
            <span style={{ color: "var(--orange-700)" }}>That's why she's the right person to help you.</span>
          </h2>
        </Reveal>

        {/* Portrait + story copy — stacks on mobile */}
        <div className="founder-layout">
          <Reveal>
            <div style={{ position: "relative" }}>
              <Photo h={520} label="Sarah Tran portrait — warm, direct. 120cm of healthy bleached hair. Same face from the ad. Not retouched." radius={20} style={{ boxShadow: "var(--shadow-lg)" }} />
              <div style={{ position: "absolute", top: -14, right: -10, zIndex: 4 }}>
                <Pin rotate={-7} bg="var(--orange-600)" color="#fff" style={{ borderColor: "var(--orange-700)" }}>250K+ coached</Pin>
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 18px 18px", background: "linear-gradient(to top, rgba(26,26,26,.88), rgba(26,26,26,0))", borderRadius: "0 0 20px 20px" }}>
                <div style={{ color: "#fff", fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 20 }}>Sarah Tran</div>
                <div style={{ color: "rgba(255,255,255,.85)", fontSize: 13, fontWeight: 600, marginTop: 3 }}>Founder · HairQare</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="founder-copy-wrap">
              <p className="p">
                In her late 20s, Sarah was a haircare influencer with 500,000 followers. Luxury brands were mailing her $300 shampoos. She was walking into the best salons in the country. She was getting paid <strong>$20,000 deals</strong> to promote hair products to women just like you.
              </p>

              <div style={{ borderLeft: "4px solid var(--orange-600)", paddingLeft: 20, margin: "20px 0" }}>
                <p style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 26, lineHeight: 1.25, color: "var(--ink)" }}>
                  And she was losing her hair in clumps.
                </p>
              </div>

              <p className="p">
                Bald patches. An oily scalp. Hair she'd stopped wearing down because she was too embarrassed. She dodged social events to hide her dandruff. She didn't feel feminine anymore — and she had access to everything the industry had to offer.
              </p>
              <p className="p">
                <strong>That's when she stopped promoting products and started asking why.</strong>
              </p>
              <p className="p">
                She spent years working with chemists, dermatologists, trichologists, and nutritionists — not to build a product to sell you, but to understand what was actually happening. Then she built the program she wished she'd had: honest, science-backed, with nothing to sell you except the knowledge itself.
              </p>

              <div style={{ background: "var(--green-bg)", borderLeft: "4px solid var(--green-line)", borderRadius: 12, padding: "16px 18px" }}>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--green-text)" }}>
                  Today, Sarah maintains <strong>120cm of bleached hair</strong> for roughly <strong>$10 a month</strong>. Not because she found an expensive secret. Because she finally understood what her hair actually needed.
                </p>
              </div>

              <p className="p">
                <strong>250,000 women across 149 countries</strong> have been through this with her. Most of them tried everything before they found her.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
                {["Certified Hair Loss Specialist", "Founder of HairQare", "250,000+ women coached", "13+ years in haircare"].map((c, i) => (
                  <span key={i} style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink-soft)", background: "var(--cream)", border: "1px solid var(--line)", borderRadius: 999, padding: "6px 13px" }}>{c}</span>
                ))}
              </div>

              <div style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontStyle: "italic", color: "var(--ink)", marginTop: 12 }}>— Sarah Tran</div>

              <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start" }}>
                <Button onClick={onCta} icon="arrow-right">Start with me</Button>
                <InlineTestimonial
                  name="Priya" age={38} flag="🇬🇧"
                  quote="Sarah doesn't talk down to you. She actually teaches you the science. I trust her more than my dermatologist now."
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual story journey — 3 image moments */}
        <Reveal style={{ marginTop: 52 }}>
          <div style={{ marginBottom: 18, textAlign: "center" }}>
            <Eyebrow style={{ color: "var(--slate)" }}>Her story in three moments</Eyebrow>
          </div>
          {isMobile ? (
            <Carousel peek={0.88} ariaLabel="Sarah's story">
              {storyImgs.map(storyCard)}
            </Carousel>
          ) : (
            <div className="founder-story-grid">
              {storyImgs.map(storyCard)}
            </div>
          )}
        </Reveal>

      </div>
    </section>
  );
}

/* ---------------- Section 10 — Objection handling / FAQ ---------------- */
function Faq({ onCta }) {
  const faqs = [
    { q: "I've tried so many things. Why is this different?", a: "Because this is education, not a product. Products treat symptoms — this teaches you to treat the cause. Once you understand what's happening at the root, you stop guessing and start fixing." },
    { q: "I'm really busy. Can I actually do 10 minutes a day?", a: "The daily videos are designed for exactly that life. Many women watch them while doing their morning routine. Ten minutes, once a day, for fourteen days — that's the whole commitment." },
    { q: "I'm in perimenopause / postpartum / dealing with thyroid issues. Will this work for me?", a: "Yes. The program is built around the exact hormonal and metabolic changes that happen in your 30s and 40s — including perimenopause, postpartum recovery and common deficiencies. This is not a generic plan." },
    { q: "What if it doesn't work for me?", a: "You're covered by a 100% money-back guarantee, no questions asked, within 30 days. The risk is entirely on us." },
    { q: "Is this just another course I'll never finish?", a: "The 14-day structure and the community cohort — everyone starts together — are specifically designed to get you to the finish line. 86% of participants complete the challenge." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-lav">
      <Anno>Section 10 — Objection handling / FAQ</Anno>
      <div className="wrap" style={{ maxWidth: 760 }}>
        <Reveal style={{ textAlign: "center", marginBottom: 36 }}>
          <Eyebrow>Before you start</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12 }}>Questions she usually has before she starts</h2>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, background: "none", border: "none", padding: "20px 22px", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontSize: 17, fontWeight: 600, color: "var(--ink)" }}>{f.q}</span>
                  <Icon name={isOpen ? "minus" : "plus"} size={20} color="var(--orange-600)" />
                </button>
                <div style={{ display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr", transition: "grid-template-rows .3s var(--ease)" }}>
                  <div style={{ overflow: "hidden" }}>
                    <p className="p" style={{ padding: "0 22px 22px", fontSize: 16, margin: 0 }}>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="center" style={{ marginTop: 30 }}>
          <a href="#start" onClick={(e) => { e.preventDefault(); onCta && onCta(); }} style={{ color: "var(--orange-700)", fontWeight: 700, fontSize: 16, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
            All my questions are answered. Let's begin <Icon name="arrow-right" size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 11 — Final CTA / urgency close ---------------- */
function FinalCta({ onCta }) {
  const recap = [
    "14-Day Haircare Masterclass + daily coaching",
    "DIY shampoo workshop & personalised deficiency test",
    "Members-only community cohort starting June 6th",
    "Certificate of completion",
  ];
  return (
    <section className="bg-cream" id="start">
      <Anno>Section 11 — Final CTA / urgency close</Anno>
      <div className="wrap" style={{ textAlign: "center" }}>
        <Reveal>
          <Eyebrow>The decision</Eyebrow>
          <h2 className="h-hero" style={{ marginTop: 14, marginBottom: 20, maxWidth: 720, marginInline: "auto" }}>
            Bring her back.
          </h2>
          <p className="lead" style={{ marginBottom: 36, maxWidth: 620, marginInline: "auto" }}>
            You used to be known for your hair. She's not gone — she's been waiting for someone to finally explain what happened. In 14 days, you'll have the knowledge to bring her back. And it'll be <strong>yours forever</strong>.
          </p>
        </Reveal>
        <Reveal>
          <div style={{ background: "#fff", borderRadius: 24, boxShadow: "var(--shadow-lg)", border: "2px solid var(--orange-500)", overflow: "hidden", maxWidth: 540, margin: "0 auto 28px" }} className="final-cta-card">
            <div style={{ background: "var(--orange-600)", color: "#fff", padding: 10, fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>
              85% off · cohort starts Friday, June 6th
            </div>
            <div style={{ padding: "30px 32px", textAlign: "left" }} className="final-cta-card-body">
              <ul style={{ listStyle: "none", margin: "0 0 22px", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {recap.map((r, i) => (
                  <li key={i} style={{ display: "flex", gap: 11, alignItems: "flex-start", fontSize: 15.5, color: "var(--ink-soft)" }}>
                    <Icon name="check" size={18} color="var(--orange-600)" stroke={2.5} style={{ marginTop: 2, flex: "none" }} />{r}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, justifyContent: "center", marginBottom: 18 }}>
                <span style={{ fontSize: 20, color: "var(--slate-soft)", textDecoration: "line-through" }}>$247</span>
                <span className="stat-num" style={{ fontSize: 64, color: "var(--orange-600)" }}>$37</span>
              </div>
              <Button onClick={onCta} icon="arrow-right" style={{ width: "100%", justifyContent: "center" }}>Start the challenge</Button>
              <p className="small center" style={{ marginTop: 14, marginBottom: 0 }}>
                Next cohort starts June 6th · 2,400 women joining · 30-day money-back guarantee
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18, marginTop: 8 }}>
          <Trustpilot rating="4.8" reviews="12,400 reviews" />
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", justifyContent: "center", opacity: 0.7 }}>
            <span className="small" style={{ fontWeight: 600, color: "var(--slate)" }}>As featured in</span>
            {["[Logo]", "[Logo]", "[Logo]", "[Logo]"].map((l, i) => (
              <span key={i} style={{ fontSize: 13, color: "var(--slate-soft)", border: "1px dashed var(--line)", borderRadius: 6, padding: "6px 16px" }}>{l}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "#fff", padding: "48px 0" }}>
      <div className="wrap-wide" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
        <div style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 24, display: "flex", alignItems: "center", gap: 5 }}>
          HairQare<span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--orange-600)", marginTop: -12 }} />
        </div>
        <div style={{ display: "flex", gap: 26, fontSize: 14, color: "rgba(255,255,255,.7)" }}>
          <a href="#science" style={footLink}>The science</a>
          <a href="#results" style={footLink}>Results</a>
          <a href="#included" style={footLink}>What's included</a>
          <a href="#start" style={footLink}>Guarantee</a>
        </div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,.45)" }}>© 2026 HairQare. Results vary.</div>
      </div>
    </footer>
  );
}
const footLink = { color: "inherit", textDecoration: "none" };

/* sticky bottom CTA */
function StickyCta({ onCta }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let heroVisible = true;
    let finalVisible = false;
    const update = () => setShow(!heroVisible && !finalVisible);

    const hero = document.getElementById("hero-cta-sentinel");
    const finalEl = document.getElementById("start");

    let heroIO, finalIO;
    if (hero) {
      heroIO = new IntersectionObserver(([e]) => {
        heroVisible = e.isIntersecting;
        update();
      }, { threshold: 0.1 });
      heroIO.observe(hero);
    } else {
      heroVisible = false;
    }
    if (finalEl) {
      finalIO = new IntersectionObserver(([e]) => {
        finalVisible = e.isIntersecting;
        update();
      }, { threshold: 0.15 });
      finalIO.observe(finalEl);
    }
    update();
    return () => {
      if (heroIO) heroIO.disconnect();
      if (finalIO) finalIO.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("has-sticky-cta", show);
    return () => document.body.classList.remove("has-sticky-cta");
  }, [show]);

  return (
    <div style={{
      position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 60,
      transform: show ? "translateY(0)" : "translateY(110%)",
      transition: "transform .35s var(--ease)",
      background: "rgba(255,255,255,.96)", backdropFilter: "blur(10px)",
      borderTop: "1px solid var(--line)", boxShadow: "0 -6px 24px rgba(60,40,20,.08)",
    }}>
      <div className="wrap-wide sticky-cta-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", gap: 12 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0, flex: 1 }} className="sticky-meta">
          <span style={{ fontSize: 13.5, fontWeight: 700, color: "var(--ink)", lineHeight: 1.25 }}>
            Next cohort: <span style={{ color: "var(--orange-700)" }}>Fri, June 6th</span>
          </span>
          <span style={{ fontSize: 11.5, color: "var(--slate)", display: "flex", alignItems: "center", gap: 6, lineHeight: 1.2, flexWrap: "wrap" }}>
            <span style={{ background: "var(--orange-100)", color: "var(--orange-700)", fontWeight: 700, fontSize: 10.5, letterSpacing: ".04em", padding: "2px 7px", borderRadius: 999 }}>85% OFF TODAY</span>
            <span>2,400 women joining</span>
          </span>
        </div>
        <Button onClick={onCta} icon="arrow-right" style={{ padding: "11px 18px", fontSize: 14, flex: "none" }}>Join now</Button>
      </div>
    </div>
  );
}

/* ---------------- Added — self-qualifier (interactive) ---------------- */
function SelfQualifier({ onCta }) {
  const questions = [
    "My hair started changing sometime after I turned 30.",
    "My part looks wider, or I can see more scalp than I used to.",
    "My ponytail is noticeably thinner than it was five years ago.",
    "I've tried products, serums or supplements that didn't really work.",
    "I'm managing a lot — career, kids, or both — and I'm often stressed.",
    "I had a baby in my 30s, or I think I may be perimenopausal.",
  ];
  const [checked, setChecked] = useState([]);
  const toggle = (i) => setChecked((c) => c.includes(i) ? c.filter((x) => x !== i) : [...c, i]);
  const count = checked.length;
  return (
    <section className="bg-white">
      <Anno>Added — self-qualifier</Anno>
      <div className="wrap" style={{ maxWidth: 720 }}>
        <Reveal style={{ textAlign: "center", marginBottom: 32 }}>
          <Eyebrow>Is this you?</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12 }}>Tick every one that sounds like you</h2>
        </Reveal>
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {questions.map((q, i) => {
              const on = checked.includes(i);
              return (
                <button key={i} onClick={() => toggle(i)} style={{
                  display: "flex", alignItems: "center", gap: 14, textAlign: "left", cursor: "pointer",
                  background: on ? "var(--orange-50)" : "#fff",
                  border: on ? "1.5px solid var(--orange-500)" : "1px solid var(--line)",
                  borderRadius: 14, padding: "16px 18px", fontFamily: "var(--font-sans)",
                  transition: "background var(--dur) var(--ease), border-color var(--dur) var(--ease)",
                }}>
                  <span style={{ flex: "none", width: 26, height: 26, borderRadius: 8, border: on ? "none" : "2px solid var(--line)", background: on ? "var(--orange-600)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {on && <Icon name="check" size={16} color="#fff" stroke={3} />}
                  </span>
                  <span style={{ fontSize: 16.5, color: "var(--ink)" }}>{q}</span>
                </button>
              );
            })}
          </div>
        </Reveal>
        <Reveal style={{ marginTop: 26, textAlign: "center" }}>
          <div style={{ minHeight: 28, marginBottom: 18, fontSize: 16.5, color: "var(--ink-soft)", transition: "opacity .3s" }}>
            {count === 0
              ? "Tick the ones that ring true above."
              : <span>You ticked <strong style={{ color: "var(--orange-700)" }}>{count}</strong> — you're exactly who the challenge was built for. Join the <strong>250,000+ women in their 30s and 40s</strong> who started here.</span>}
          </div>
          <Button onClick={onCta} icon="arrow-right">Take charge of my hair</Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Added — "It's not really about hair" (identity reclaim) ---------------- */
function NotAboutHair({ onCta }) {
  const items = [
    { e: "🪞", t: "Looking like you again", d: "No more dodging mirrors. The version of you that you remember — quietly coming back." },
    { e: "📷", t: "Photos you don't have to dodge", d: "The candid shot that catches you off guard. And you're okay with it." },
    { e: "🧠", t: "Knowledge that's yours forever", d: "Not another product. A clear understanding of why your hair does what it does — and exactly what to do about it." },
    { e: "🔒", t: "Permanence", d: "Not until the next bottle runs out. A foundation that holds for years, not weeks." },
  ];
  return (
    <section className="bg-cream">
      <Anno>Added — The deeper change</Anno>
      <div className="wrap" style={{ maxWidth: 880 }}>
        <Reveal style={{ textAlign: "center", marginBottom: 36 }}>
          <Eyebrow>The deeper change</Eyebrow>
          <h2 className="h-hero" style={{ marginTop: 12, fontSize: 44, maxWidth: 620, marginInline: "auto" }}>
            It's not really about hair.
          </h2>
          <p className="lead" style={{ marginTop: 16, maxWidth: 600, marginInline: "auto" }}>
            When women finish the challenge, they don't talk about the density. They talk about <Underline>feeling like themselves again.</Underline>
          </p>
        </Reveal>
        <Reveal>
          <div className="not-about-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
            {items.map((it, i) => (
              <div key={i} className="result-row" style={{ background: "#fff" }}>
                <span className="result-emoji">{it.e}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>{it.t}</div>
                  <div className="p" style={{ fontSize: 15, margin: 0, lineHeight: 1.5 }}>{it.d}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal style={{ marginTop: 36 }}>
          <div style={{ background: "#fff", borderRadius: 18, padding: "28px 30px", boxShadow: "var(--shadow-md)", borderLeft: "4px solid var(--orange-600)", maxWidth: 660, marginInline: "auto", position: "relative" }}>
            <Icon name="quote" size={26} color="var(--orange-500)" style={{ position: "absolute", top: 18, right: 22, opacity: 0.7 }} />
            <p style={{ margin: 0, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 19, lineHeight: 1.5, color: "var(--ink)" }}>
              "What struck me most was how many women weren't just pleased with their hair — but how empowered they felt afterwards. The community. The support. I wasn't expecting any of that."
            </p>
            <div style={{ marginTop: 14, fontSize: 14, color: "var(--slate)", fontWeight: 600 }}>— Tracy, 44 · finished the challenge in March</div>
          </div>
        </Reveal>
        <Reveal style={{ marginTop: 26 }}>
          <InlineTestimonial
            name="Carol" age={43} flag="🇨🇦"
            quote="Halfway through I realised I wasn't just doing this for my hair. It was the first thing I'd done for me in a long time."
            style={{ margin: "0 auto" }}
          />
        </Reveal>
        <Reveal className="center" style={{ marginTop: 32 }}>
          <Button onClick={onCta} icon="arrow-right">Bring her back — start the challenge</Button>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Founder, NotAboutHair, SelfQualifier, Faq, FinalCta, Footer, StickyCta });
