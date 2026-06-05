/* HairQare sales page — sections 1–4 (mobile-first rebuild) */

/* ---------------- Added — age-targeting entry stripe ---------------- */
function AgeStripe() {
  return (
    <div className="age-stripe">
      Made for women in their <span style={{ color: "var(--orange-500)", fontWeight: 700 }}>40s</span>  because your hair loss has a different cause now than it did at 22.
    </div>);

}

/* ---------------- Sticky top bar ---------------- */
function TopBar({ onCta }) {
  const isMobile = useIsMobile();
  return (
    <div className="topbar">
      <div className="wrap-wide topbar-inner">
        <div style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 24, letterSpacing: "-0.5px", display: "flex", alignItems: "center", gap: 5 }}>
          HairQare<span style={{ width: 7, height: 7, borderRadius: 999, background: "var(--orange-600)", display: "inline-block", marginTop: -12 }} />
        </div>
        <nav style={{ display: "flex", alignItems: "center", gap: 26 }} className="topnav">
          <a href="#science" style={navLink}>The science</a>
          <a href="#results" style={navLink}>Results</a>
          <a href="#included" style={navLink}>What's included</a>
          <Button onClick={onCta} className="topbar-cta" style={{ padding: "11px 22px", fontSize: 15 }}>
            {isMobile ? "Join now" : "Join the challenge"}
          </Button>
        </nav>
      </div>
    </div>);

}
const navLink = { color: "var(--ink-soft)", textDecoration: "none", fontSize: 15, fontWeight: 500 };

/* ---------------- Section 1 — Hero ---------------- */
function Hero({ onCta }) {
  const bullets = [
  { e: "🌱", t: "Grow longer, denser and healthier hair than you had in your 20s." },
  { e: "💸", t: "No fancy salon treatments or expensive products needed." },
  { e: "⏱️", t: "See results in 14 days or get your money back." }];

  return (
    <section className="bg-cream hero-section" style={{ paddingTop: 48, paddingBottom: 0 }}>
      <Anno>Section 1 — Hero / recognition</Anno>
      <div className="wrap-wide">

        {/* removed urgency pill from top — moved to cohort line under CTA */}

        <div style={{ display: "grid", gridTemplateColumns: "1.02fr 0.98fr", gap: 52, alignItems: "center" }} className="hero-grid">

          {/* TEXT column */}
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 14 }}>BECOME THE MOST BEAUTIFUL VERSION OF YOURSELF</div>

            {/* H1 — the single emotional hook, short enough for mobile */}
            <h1 className="h-hero hero-h1" style={{ marginBottom: 12, color: "rgb(233, 123, 0)" }}>
              <span style={{ color: "#090909" }}>Achieve the best hair of your life in your </span>
              <span style={{ color: "#e97b00" }}>30s and beyond.</span>
            </h1>

            {/* Sub-headline — specificity + proof */}
            {/* Validation — one line */}
            <p className="hero-validation">
              The hair you had in your 20s isn't gone forever. Your body has changed but your habits haven't. Learn how to build a hair care routine for your 30s and enjoy good hair days for decades to come.
            </p>

            {/* CTA block — must be above fold on mobile */}
            <div id="hero-cta-sentinel" style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start", marginBottom: 24 }}>
              <Button onClick={onCta} icon="arrow-right">Join the challenge</Button>
              <span className="small" style={{ fontWeight: 600, color: "var(--orange-700)", marginLeft: 4 }}>
                <span style={{ textDecoration: "line-through", color: "var(--slate-soft)", marginRight: 6 }}>$247</span>
                85% off · 30-day guarantee
              </span>
              {/* cohort line — under CTA, not above headline */}
              <span className="hero-cohort">
                <Icon name="calendar-heart" size={13} color="var(--orange-600)" />
                Next cohort: <strong>Fri, June 6th</strong> · 2,400 women joining
              </span>
            </div>

            {/* Bullets — proof layer, below the CTA */}
            <ul className="hero-bullets">
              {bullets.map((b, i) =>
              <li key={i}>
                  <span className="hero-bullet-emoji">{b.e}</span>
                  <span>{b.t}</span>
                </li>
              )}
            </ul>
          </Reveal>

          {/* IMAGE column — Sarah's portrait (image, not video), with a sketchy trust pin */}
          <Reveal delay={120}>
            <div style={{ position: "relative" }}>
              <div className="hero-image-wrap">
                <Photo h={440} label="Sarah Tran portrait — same face from the Meta ad. Confident, warm, natural lighting." radius={24} style={{ height: 440 }} />
                <div className="hero-image-caption">
                  <div style={{ color: "#fff", fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 20, lineHeight: 1.1 }}>Sarah Tran</div>
                  <div style={{ color: "rgba(255,255,255,.88)", fontSize: 13.5, fontWeight: 600, marginTop: 3 }}>Founder · 250,000+ women coached</div>
                </div>
              </div>
              <div style={{ position: "absolute", top: -14, right: -8, zIndex: 4 }}>
                <Pin rotate={-7}>★ 4.8 · 12K reviews</Pin>
              </div>
              <div style={{ position: "absolute", bottom: -22, left: -12, zIndex: 4 }} className="mobile-only">
                <Hand size={26} color="var(--orange-700)" rotate={-4}>← That's your coach</Hand>
              </div>
            </div>
          </Reveal>

        </div>
      </div>

      {/* trust bar */}
      <div style={{ marginTop: 48, background: "rgba(255,255,255,0.55)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap-wide community-trust">
          {/* Row 1 — community proof with overlapping avatars */}
          <div className="ct-row ct-community">
            <div className="ct-avatars" aria-hidden="true">
              {[
                ["#F6C9A8","#D5551F","H"],
                ["#E8D5C0","#8B6F5E","L"],
                ["#FCE7D8","#E8622A","M"],
                ["#E3D5EA","#7D5BA6","R"],
                ["#FAD7B0","#C46A2A","A"],
                ["#EBD9C7","#A0522D","S"],
              ].map(([bg, color, ch], i) => (
                <span key={i} className="ct-avatar" style={{ background: bg, color }}>{ch}</span>
              ))}
              <span className="ct-avatar ct-avatar-more">+</span>
            </div>
            <div className="ct-community-text">
              <div className="ct-num">250,000+</div>
              <div className="ct-label">women have taken the challenge</div>
            </div>
          </div>

          {/* Row 2 — two side-by-side stats */}
          <div className="ct-row ct-stats">
            <div className="ct-stat">
              <div className="ct-num ct-num-sm">92%</div>
              <div className="ct-label">saw results within 14 days</div>
            </div>
            <div className="ct-vrule" />
            <div className="ct-stat">
              <div className="ct-num ct-num-sm">86%</div>
              <div className="ct-label">called it life-changing</div>
            </div>
          </div>

          {/* Row 3 — Trustpilot */}
          <div className="ct-row ct-trustpilot">
            <Trustpilot rating="4.8" reviews="12,400 reviews" />
          </div>
        </div>
      </div>
    </section>);

}
function TrustStat({ num, label }) {
  return (
    <div className="trust-stat">
      <div style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 30, color: "var(--orange-600)", lineHeight: 1 }}>{num}</div>
      <div className="small" style={{ marginTop: 5, maxWidth: 160 }}>{label}</div>
    </div>);

}
function Divider() {
  return <div style={{ width: 1, height: 42, background: "var(--line)" }} className="trust-divider" />;
}

/* ---------------- Section 2 — Recognition / Mirror moment ---------------- */
function Recognition() {
  const rows = [
    { e: "✂️", trigger: "It won't grow long like it did in your 20s", mid: " — so you cut it shorter, then shorter,", tail: " until you stopped trying for the hair you actually want." },
    { e: "🪞", trigger: "You can see your scalp through your part now", mid: " — so you part it differently and wear it up,", tail: " which hides it but never finds what's causing it.", note: "you never found out", noteColor: "#2b66c2", noteRotate: -2 },
    { e: "🌫️", trigger: "Greys you didn't have a year ago", mid: " — so you colour them, and the dye stresses already-fragile hair,", tail: " so it breaks, so you colour again.", note: "making your hair age even faster", noteColor: "#2b66c2", noteRotate: -3 },
    { e: "🧴", trigger: "Nothing you buy seems to work", mid: " — so you reach for the next better shampoo, the next salon visit,", tail: " close to $2,000 by now, and you're still watching it fall." },
    { e: "📷", trigger: "You've started wearing it up in every photo", mid: " — down makes you anxious,", tail: " so up became the default, and you like your photos a little less each year." },
    { e: "💔", trigger: "No one comments on your hair anymore", mid: " — you used to be the woman known for it,", tail: " and you want her back." },
  ];

  return (
    <section className="bg-lav">
      <Anno>Section 2 — Recognition / mirror moment</Anno>
      <div className="wrap-wide">
        <Reveal className="center" style={{ marginBottom: 28 }}>
          <div className="reco-header-block">
            <div className="reco-eyebrow">WHAT IS HAPPENING</div>
            <h2 className="h2 reco-headline">Somewhere in your 30s, this started happening:</h2>
          </div>
        </Reveal>

        <ol className="reco-stack">
          {rows.map((r, i) => (
            <Reveal key={i} delay={i * 70}>
              <li className="reco-row">
                <p className="reco-line">
                  <span className="reco-emoji-inline">{r.e}</span>
                  <strong className="reco-trigger">{r.trigger}</strong>
                  <span className="reco-mid">{r.mid}</span>
                  <em className="reco-tail">{r.tail}</em>
                </p>
                {r.note && (
                  <div className="reco-note-wrap">
                    <Hand size={15} color={r.noteColor} rotate={r.noteRotate}>{r.note}</Hand>
                  </div>
                )}
              </li>
            </Reveal>
          ))}
        </ol>

        {/* Inline testimonial + soft CTA — trust anchor, not a hard sell yet */}
        <Reveal style={{ marginTop: 36 }}>
          <InlineTestimonial
            name="Hannah" age={39} flag="🇬🇧"
            quote="I was the girl with the thick hair growing up. Three years after baby #2, I cried in front of the mirror most mornings. I'm not crying anymore."
            style={{ margin: "0 auto" }} />
          
        </Reveal>
        <Reveal className="center" style={{ marginTop: 24 }}>
          <a href="#science" onClick={(e) => {e.preventDefault();document.getElementById('science').scrollIntoView({ behavior: 'smooth', block: 'start' });}} style={{ color: "var(--orange-700)", fontWeight: 700, fontSize: 16, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
            Tell me why this is happening <Icon name="arrow-right" size={17} />
          </a>
        </Reveal>
      </div>
    </section>);

}

/* ---------------- Section 2b — Video testimonial (9:16 vertical) ---------------- */
function RecognitionVideo() {
  return (
    <section className="bg-video-section">
      <div className="wrap-wide" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Reveal delay={80}>
          <div className="vert-video-card">
            {/* 9:16 placeholder thumbnail */}
            <div className="vert-video-thumb">
              <Photo h={560} label="Vertical testimonial video placeholder — woman speaking to camera, natural home setting, warm lighting. 9:16 phone video style." radius={20} style={{ height: "100%", width: "100%" }} />
              <div className="vert-video-play-wrap">
                <div className="vert-video-play-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
              <span className="vert-video-duration">2:14</span>
            </div>

            {/* testimonial meta */}
            <div className="vert-video-body">
              <div className="vert-video-meta">
                <div className="vert-video-avatar">H</div>
                <div>
                  <div className="vert-video-name">Hannah, 39 🇬🇧</div>
                  <div className="vert-video-context">Mum of 2 · crown thinning at 37</div>
                </div>
              </div>
              <p className="vert-video-quote">“I assumed this was just what happens after babies. I was so wrong.”</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 3 — The real reason (science) ---------------- */
function Science() {
  return (
    <section className="bg-white" id="science">
      <Anno>Section 3 — Science / education (the aha moment)</Anno>
      <div className="wrap">
        <Reveal style={{ marginBottom: 28, textAlign: "center" }}>
          <Eyebrow style={{ color: "var(--slate)" }}>WHY is it happening?</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 680, marginInline: "auto" }}>
            Your hair didn't "get worse". <em>Your hair has changed, but your routine didn't change with it.</em>
          </h2>
        </Reveal>

        {/* 3-step storyboard replaces 3 long paragraphs */}
        <Reveal>
          <div className="science-leadin">
            <div className="science-leadin-card">
              <span className="leadin-num">1</span>
              <p>From your mid-30s, <strong>estrogen and progesterone begin to drop</strong>. When they do, DHT — a hormone that shrinks follicles — goes relatively unopposed. The result is exactly what you're seeing: a wider part, thinning at the temples, a ponytail that's lost its thickness.</p>
            </div>
            <HandArrow direction="right" size={56} style={{ alignSelf: "center", opacity: 0.7 }} className="science-leadin-arrow" />
            <div className="science-leadin-card">
              <span className="leadin-num">2</span>
              <p>Life on top — career, kids, the mental load — keeps <strong>cortisol high</strong>. Even more follicles shed early. Your hair gets quietly deprioritised by your body.</p>
            </div>
            <HandArrow direction="right" size={56} style={{ alignSelf: "center", opacity: 0.7 }} className="science-leadin-arrow" />
            <div className="science-leadin-card science-leadin-card-final">
              <span className="leadin-num">3</span>
              <p>Your follicles are responding to <strong>signals from inside your body</strong>. A shampoo can't reach those signals. That's not a failure of your effort — it's a mismatch between the problem and the tool.</p>
            </div>
          </div>
        </Reveal>

        {/* Reframe — "None of this was your fault" timeline */}
        <Reveal style={{ marginTop: 56 }}>
          <div className="fault-head center">
            <Eyebrow style={{ color: "var(--slate)" }}>Before you blame yourself</Eyebrow>
            <h2 className="h2" style={{ marginTop: 12 }}>
              None of this was <em>your fault.</em>
            </h2>
          </div>

          <ol className="fault-rail">
            <li className="fault-beat">
              <span className="fault-dot" aria-hidden="true" />
              <div className="fault-beat-body">
                <span className="fault-stamp">01 · not your fault</span>
                <h3 className="fault-headline">
                  You're still using a haircare routine <span className="fault-emoji">🙅‍♀️</span> built for when you were <Underline>25</Underline>.
                </h3>
                <p className="fault-copy">
                  No one told you it would stop working — so you kept following what used to work, and wondering why nothing is.
                </p>
              </div>
            </li>

            <li className="fault-beat">
              <span className="fault-dot" aria-hidden="true" />
              <div className="fault-beat-body">
                <span className="fault-stamp">02 · not your fault</span>
                <h3 className="fault-headline">
                  You tried to <span className="fault-emoji">🛍️</span> <Underline>buy</Underline> the fix.
                </h3>
                <p className="fault-copy">
                  In your 30s, you earn more but have so much less time — so of course you invested in products. But you can't buy past what no one taught you to understand.
                </p>
              </div>
            </li>

            <li className="fault-turn-arrow" aria-hidden="true">
              <HandArrow direction="right" size={64} color="var(--orange-600)" />
            </li>

            <li className="fault-beat fault-beat-final">
              <span className="fault-dot fault-dot-final" aria-hidden="true" />
              <div className="fault-beat-body">
                <span className="fault-stamp fault-stamp-final">03 · here's the part no one tells you</span>
                <h3 className="fault-headline fault-headline-final">
                  Once you learn how to care for your hair in your 30s, it's <span className="fault-emoji">✨</span> <Underline>easy</Underline>.
                </h3>
                <p className="fault-copy">
                  Fewer steps. Less money. Less effort and time. It's only hard because understanding your hair is the one thing the industry was never going to sell you.
                </p>
              </div>
            </li>
          </ol>
        </Reveal>

        <Reveal style={{ marginTop: 28 }}>
          <GreenCallout>
            <strong>Perimenopause doesn't start at 50.</strong> Hormonal fluctuations that affect your hair can begin as early as 35 — and most doctors never mention it.
          </GreenCallout>
        </Reveal>

        {/* Inline testimonial that confirms the aha-moment */}
        {/* Renee quote — elevated to full-width feature quote */}
        <Reveal style={{ marginTop: 32 }}>
          <div style={{ background: "var(--lavender)", borderRadius: 20, padding: "32px 36px", position: "relative", maxWidth: 720, marginInline: "auto" }}>
            <Icon name="quote" size={36} color="var(--orange-500)" style={{ position: "absolute", top: 20, right: 24, opacity: 0.5 }} />
            <p style={{ margin: 0, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, lineHeight: 1.45, color: "var(--ink)" }}>
              “I was in the cortisol video and I cried. It was the first time in years anyone had connected my job to my hair.”
            </p>
            <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 999, background: "var(--orange-100)", color: "var(--orange-700)", fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>R</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>Renee, 41 🇺🇸</div>
                <div style={{ fontSize: 13, color: "var(--slate)" }}>Corporate role · widening part at 38</div>
              </div>
              <StarRow size={14} style={{ marginLeft: "auto" }} />
            </div>
          </div>
        </Reveal>

        {/* Outline CTA — a softer alternative to the orange pill */}
        <Reveal className="center" style={{ marginTop: 24 }}>
          <Button variant="ghost" onClick={() => {const el = document.getElementById('included');if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });}} icon="arrow-right">Show me how to fix it</Button>
        </Reveal>
      </div>
    </section>);

}


Object.assign(window, { AgeStripe, TopBar, Hero, Recognition, RecognitionVideo, Science, FailedSolutions });