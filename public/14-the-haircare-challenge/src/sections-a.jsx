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
  const cards = [
  { e: "🪞", t: "My part used to be thin. Now I can see my scalp through it and I don't know when it happened." },
  { e: "✂️", t: "I cut it shorter and shorter until I had a pixie I absolutely hate. I miss my long hair like crazy." },
  { e: "😔", t: "I don’t recognise myself in photos anymore. I look older than I feel." },
  { e: "🧴", t: "I’ve spent close to $2,000 trying to fix it. I’m still watching it fall out." },
  { e: "📷", t: "I've stopped taking photos. I always wear it up because down makes me anxious." },
  { e: "💪", t: "My hair was my whole identity. I was the woman known for her hair. I want her back." }];

  const isMobile = useIsMobile();
  const renderCard = (c, i) =>
  <div className="reco-card" key={i}>
      <span className="reco-emoji">{c.e}</span>
      <p>“{c.t}”</p>
    </div>;

  return (
    <section className="bg-lav">
      <Anno>Section 2 — Recognition / mirror moment</Anno>
      <div className="wrap-wide">
        <Reveal style={{ textAlign: "center", marginBottom: 28 }}>
          <Eyebrow>Read this slowly</Eyebrow>
          <h2 className="h2" style={{ marginTop: 10 }}>Does any of this sound familiar?</h2>
          <p className="mobile-only" style={{ marginTop: 12, fontSize: 14, color: "var(--slate)" }}>Swipe to read them all →</p>
        </Reveal>
        {isMobile ?
        <Carousel peek={0.86} ariaLabel="recognition quotes">
            {cards.map(renderCard)}
          </Carousel> :

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }} className="reco-grid">
            {cards.map((c, i) =>
          <Reveal key={i} delay={i % 2 * 80}>{renderCard(c, i)}</Reveal>
          )}
          </div>
        }

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

/* ---------------- Section 3 — The real reason (science) ---------------- */
function Science() {
  const factors = [
  { icon: "flask-conical", emoji: "🧬", t: "Hormones", d: "From your mid-30s, estrogen and progesterone shift. As they dip, DHT thins the temples and crown — exactly the pattern you're seeing.", tag: "Primary trigger · 30–42", hero: true },
  { icon: "brain", emoji: "🧠", t: "Stress / cortisol", d: "Career + parenting + the mental load keeps cortisol high. It pushes follicles into shedding 3–6 months later — so it feels like it came from nowhere.", tag: "Affects ~73% of women 30–45" },
  { icon: "droplet", emoji: "🩸", t: "Iron & ferritin", d: "Iron deficiency is far more common in women 30–45. Ferritin drops quietly — and follicles are the first to feel it. Most women have never had it tested.", tag: "Most overlooked in this group" },
  { icon: "refresh-cw", emoji: "🔄", t: "Metabolism", d: "After 30, nutrient delivery to your follicles slows down. The diet that kept your hair full at 25 no longer delivers what your follicles need. This doesn't mean eating less well — it means eating differently for your hair at this stage.", tag: "Begins as early as 28" },
  { icon: "baby", emoji: "👶", t: "Postpartum — even years later", d: "Pregnancy can disrupt your hair cycle for 2–4 years. If you had a baby in your 30s and your hair never fully came back, this is exactly why — and it's fixable.", tag: "Up to 4 years to resolve" },
  { icon: "leaf", emoji: "🌿", t: "Thyroid & nutrient gaps", d: "Subclinical thyroid shifts plus common zinc and B12 gaps are a leading cause of diffuse thinning — and rarely caught at the GP.", tag: "Common in women 30–50" }];


  const renderFactor = (f, i) =>
  <div key={i} className={`factor-card ${f.hero ? "factor-hero" : ""}`}>
      <div className="factor-card-top">
        <span className="factor-emoji">{f.emoji}</span>
        <div>
          <div className="factor-name">{f.t}</div>
          {f.hero && <span className="factor-big-pill">The big one</span>}
        </div>
      </div>
      <p className="factor-desc">{f.d}</p>
      <span className="factor-tag">{f.tag}</span>
    </div>;


  return (
    <section className="bg-white" id="science">
      <Anno>Section 3 — Science / education (the aha moment)</Anno>
      <div className="wrap">
        <Reveal style={{ marginBottom: 28, textAlign: "center" }}>
          <Eyebrow style={{ color: "var(--slate)" }}>What's actually happening</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 680, marginInline: "auto" }}>
            Your hair didn't just "get worse." <em>Your body changed.</em>
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

        {/* 6-factor — grid on desktop, swipe on mobile */}
        <Reveal style={{ marginTop: 44 }}>
          <div className="science-factors-wrap">
            <div className="center" style={{ marginBottom: 22 }}>
              <Eyebrow style={{ color: "var(--slate)" }}>The 6 forces working on your follicles</Eyebrow>
              <p className="mobile-only" style={{ marginTop: 8, fontSize: 14, color: "var(--slate)" }}>Swipe to see all six →</p>
            </div>
            <div className="factors-desktop">
              {factors.map(renderFactor)}
            </div>
            <div className="factors-mobile">
              <Carousel peek={0.86} ariaLabel="hair-loss factors">
                {factors.map(renderFactor)}
              </Carousel>
            </div>
          </div>
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

/* ---------------- Section 4 — The failed solutions ---------------- */
function FailedSolutions({ onCta }) {
  const rows = [
  { emoji: "🧴", tried: "Expensive serums & oils", why: "External application can't fix internal hormonal disruption.", works: "Understanding and rebalancing the internal environment." },
  { emoji: "🌿", tried: "\"Natural\" / sulfate-free shampoos", why: "Label claims ≠ hair growth. Many \"natural\" ingredients are actually irritants.", works: "Learning which ingredients are genuinely safe for your hair type." },
  { emoji: "💊", tried: "Generic hair vitamins", why: "One-size formulas ignore your specific deficiencies.", works: "A personalised deficiency assessment targeting your actual gaps." }];

  return (
    <section className="bg-cream">
      <Anno>Section 4 — Failed solutions / validate cynicism</Anno>
      <div className="wrap">
        <Reveal style={{ textAlign: "center", marginBottom: 26 }}>
          <Eyebrow style={{ color: "var(--slate)" }}>You haven't failed</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 700, marginInline: "auto" }}>You haven't failed. <Underline>The products failed you.</Underline></h2>
        </Reveal>

        {/* crossed-out images with sticky note overlay */}
        <Reveal>
          <div style={{ position: "relative", maxWidth: 620, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <CrossedPhoto label="Salon treatment / in-chair gloss" />
              <CrossedPhoto label="Bathroom shelf of half-used serums & shampoos" cool />
            </div>
            <StickyNote rotate={-5} style={{ position: "absolute", right: -6, bottom: -30, maxWidth: 230, zIndex: 3 }}>
              The influencer whose routine you copied is <strong>24</strong>. Her hair biology is nothing like yours.
            </StickyNote>
          </div>
        </Reveal>

        <Reveal style={{ marginBottom: 32, marginTop: 56 }}>
          <p className="p center" style={{ maxWidth: 600, marginInline: "auto", fontSize: 17 }}>
            These address symptoms. Not causes. <strong>Your body needs a different approach.</strong>
          </p>
          <p className="p center" style={{ maxWidth: 620, marginInline: "auto", fontSize: 15.5, marginTop: 10, color: "var(--slate)" }}>
            And the celebrity in those commercial ads don't look anything like you, your life, or your kind of thinning. None of it was built for a body that changed in its 40s.
          </p>
        </Reveal>

        {/* Stacked X → ✓ cards (replaces the table that broke on mobile) */}
        <Reveal>
          <div className="fail-stack">
            {rows.map((r, i) =>
            <div key={i} className="fail-card">
                <div className="fail-row fail-row-tried">
                  <span className="fail-x-circle">✕</span>
                  <div className="fail-row-content">
                    <div className="fail-row-label">What you tried <span style={{ marginLeft: 4 }}>{r.emoji}</span></div>
                    <div className="fail-row-title">{r.tried}</div>
                    <div className="fail-row-why">{r.why}</div>
                  </div>
                </div>
                <div className="fail-arrow"><HandArrow direction="right" size={48} color="var(--orange-600)" /></div>
                <div className="fail-row fail-row-works">
                  <span className="fail-check-circle">✓</span>
                  <div className="fail-row-content">
                    <div className="fail-row-label">What actually does</div>
                    <div className="fail-row-title">{r.works}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal className="center" style={{ marginTop: 28 }}>
          <a href="#included" onClick={(e) => {e.preventDefault();onCta();}} style={{ color: "var(--orange-700)", fontWeight: 700, fontSize: 16, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
            See what the challenge actually includes <Icon name="arrow-right" size={17} />
          </a>
        </Reveal>

        {/* Inline testimonial that confirms "you haven't failed" */}
        <Reveal style={{ marginTop: 28 }}>
          <InlineTestimonial
            name="Sam" age={38} flag="🇺🇸"
            quote="I'd spent close to $3,000 on serums over the years. This taught me why none of them worked. I'm not angry — I'm just relieved."
            style={{ margin: "0 auto" }} />
          
        </Reveal>
      </div>
    </section>);

}
function CrossedPhoto({ label, cool }) {
  return (
    <div style={{ position: "relative" }}>
      <Photo h={180} cool={cool} label={label} radius={16} style={{ opacity: 0.85 }} />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
        <line x1="6" y1="92" x2="94" y2="8" stroke="var(--danger-text)" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      </svg>
    </div>);

}

Object.assign(window, { AgeStripe, TopBar, Hero, Recognition, Science, FailedSolutions });