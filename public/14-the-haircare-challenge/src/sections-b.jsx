/* HairQare sales page — sections 5–8 (mobile-first rebuild) */

/* -------- Video Testimonials (after hero, before recognition) -------- */
function VideoTestimonials() {
  const isMobile = useIsMobile();
  const videos = [
  {
    initials: "H", name: "Hannah", age: 39, flag: "\ud83c\uddec\ud83c\udde7",
    context: "Mum of 2 \u00b7 crown thinning at 37",
    quote: "\u201cI assumed this was just what happens after babies. I was so wrong.\u201d",
    duration: "2:14",
    label: "Hannah, 39 \u2014 phone video, home setting. Speaks directly to camera. Hair visible. Natural lighting."
  },
  {
    initials: "R", name: "Renee", age: 41, flag: "\ud83c\uddfa\ud83c\uddf8",
    context: "Corporate role \u00b7 widening part at 38",
    quote: "\u201cThe cortisol explanation was the first time anyone connected my job to my hair.\u201d",
    duration: "3:02",
    label: "Renee, 41 \u2014 filmed at home, emotional and genuine. Professional woman in her 40s."
  },
  {
    initials: "C", name: "Carol", age: 43, flag: "\ud83c\udde8\ud83c\udde6",
    context: "Perimenopausal \u00b7 diffuse thinning",
    quote: "\u201cI\u2019m 43, in perimenopause, and I finally have a routine built for my body now.\u201d",
    duration: "1:48",
    label: "Carol, 43 \u2014 outdoor natural light, relaxed and warm. Real and unretouched."
  }];


  const card = (v, i) =>
  <div key={i} className="video-card">
      {/* thumbnail */}
      <div className="video-thumb">
        <div className={`ph ${i === 1 ? "cool" : ""}`} style={{ height: "100%", padding: 0 }}>
          <span className="ph-label" style={{ fontSize: 11 }}>{v.label}</span>
        </div>
        <div className="video-play-wrap">
          <div className="video-play-circle">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 5l9 5-9 5V5z" fill="var(--orange-600)" />
            </svg>
          </div>
        </div>
        <span className="video-duration">{v.duration}</span>
      </div>
      {/* body */}
      <div className="video-body">
        <div className="video-meta">
          <div className="video-avatar">{v.initials}</div>
          <div>
            <div className="video-name">{v.name}, {v.age} {v.flag}</div>
            <div className="video-context">{v.context}</div>
          </div>
          <StarRow size={13} style={{ marginLeft: "auto", alignSelf: "flex-start" }} />
        </div>
        <p className="video-quote">{v.quote}</p>
      </div>
    </div>;


  return (
    <section className="bg-white" style={{ paddingTop: 52, paddingBottom: 52 }}>
      <Anno>Added \u2014 Video testimonials (right after hero)</Anno>
      <div className="wrap-wide">

        {/* Cards */}
        {isMobile ?
        <Carousel peek={0.88} ariaLabel="video testimonials">
            {videos.map(card)}
          </Carousel> :

        <Reveal>
            <div className="video-testi-grid">
              {videos.map(card)}
            </div>
          </Reveal>
        }

      </div>
    </section>);

}

/* ---------------- Section 5 — Social proof (ICP-matched) ---------------- */
function SocialProof({ onCta }) {
  const testimonials = [
  { name: "Hannah", age: 39, flag: "🇬🇧", initials: "H", context: "Mum of 2 · noticed crown thinning at 37", text: "I was the girl with the thick hair growing up. Five years after baby #2, I thought she was gone. She's coming back — and now I finally know why." },
  { name: "Renee", age: 41, flag: "🇺🇸", initials: "R", context: "Corporate role · widening part at 38", text: "Honestly, I don't think it was about hair. It was the first thing I'd done for me in years. I look in the mirror now and I see me." },
  { name: "Megan", age: 36, flag: "🇦🇺", initials: "M", context: "Tried everything · very skeptical buyer", text: "I almost didn't buy it — I'd spent so much already. What got me wasn't the promise. It was the other women. Now I'm the one recommending it." },
  { name: "Carol", age: 43, flag: "🇨🇦", initials: "C", context: "Perimenopausal · diffuse thinning", text: "I'm 43, perimenopausal, and for the first time I have something that's MINE. A routine I built, for my body now. Not a fix — a foundation." }];

  const isMobile = useIsMobile();
  return (
    <section className="bg-white" id="results">
      <Anno>Section 5 — Social proof / ICP-matched results</Anno>
      <div className="wrap-wide">
        <Reveal style={{ textAlign: "center", marginBottom: 32 }}>
          <Eyebrow>Real results</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12 }}>250,000+ women got the hair like it was in their 28.<br />Real results. No filters.</h2>
          <p className="mobile-only" style={{ marginTop: 12, fontSize: 14, color: "var(--slate)" }}>Swipe through the stories →</p>
        </Reveal>

        {isMobile ?
        <Carousel peek={0.88} ariaLabel="testimonials">
            {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
          </Carousel> :

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 22 }} className="testi-grid">
            {testimonials.map((t, i) =>
          <Reveal key={i} delay={i % 2 * 90}><TestimonialCard {...t} /></Reveal>
          )}
          </div>
        }

        <Reveal className="center" style={{ marginTop: 30, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <Button onClick={onCta} icon="arrow-right">Join 250,000+ women</Button>
          <button className="btn btn-ghost" style={{ padding: "10px 20px", fontSize: 14 }}>
            See more stories <Icon name="chevron-right" size={16} />
          </button>
        </Reveal>

        {/* stats bar */}
        <Reveal style={{ marginTop: 44 }}>
          <div className="trust-bar" style={{ background: "var(--lavender)", borderRadius: 24, padding: "32px 24px", justifyContent: "space-around" }}>
            <Stat num="4.8/5" label="Trustpilot rating" size={56} />
            <Divider />
            <Stat num="250K+" label="women completed the challenge" size={56} />
            <Divider />
            <Stat num="92%" label="saw results by day 14" size={56} />
          </div>
        </Reveal>
      </div>
    </section>);

}

/* ---------------- Section 6 — The solution reframe ---------------- */
function SolutionReframe({ onCta }) {
  const cols = [
  { emoji: "📚", icon: "book-open", t: "Learn your biology", d: "Understand exactly what's happening in your body at this life stage — and why generic solutions were never going to work for you." },
  { emoji: "🧪", icon: "sparkles", t: "Build your routine", d: "Create a personalised haircare ritual using ingredients from your own kitchen, for a fraction of what you've been spending." },
  { emoji: "📈", icon: "trending-up", t: "See real change", d: "10 minutes a day. Results visible by day 14. A foundation for healthy hair for the rest of your life." }];

  return (
    <section className="bg-lav">
      <Anno>Section 6 — Solution reframe (pain → hope)</Anno>
      <div className="wrap-wide">
        <Reveal style={{ textAlign: "center", marginBottom: 36 }}>
          <Eyebrow>A different kind of answer</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 680, marginInline: "auto" }}>
            The solution isn't a better shampoo. It's <Underline>understanding your hair</Underline>.
          </h2>
          <p className="lead" style={{ marginTop: 16, maxWidth: 580, marginInline: "auto" }}>
            Not another fix. A <strong>permanent shift</strong> in how you care for your hair — for the rest of your life.
          </p>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22, marginBottom: 32 }} className="three-col">
          {cols.map((c, i) =>
          <Reveal key={i} delay={i * 90}>
              <div className="card" style={{ height: "100%", textAlign: "left" }}>
                <span style={{ width: 56, height: 56, borderRadius: 999, background: "var(--orange-100)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, fontSize: 26 }}>
                  {c.emoji}
                </span>
                <h3 className="h3" style={{ marginBottom: 8 }}>{c.t}</h3>
                <p className="p" style={{ fontSize: 16 }}>{c.d}</p>
              </div>
            </Reveal>
          )}
        </div>
        <Reveal className="center">
          <Button onClick={onCta} icon="arrow-right">Yes — I want to understand my hair. Start the challenge</Button>
        </Reveal>
      </div>
    </section>);

}

/* ---------------- Section 7 — How it works (vertical timeline) ---------------- */
function HowItWorks({ onCta }) {
  const steps = [
  { n: "01", tag: "Day 1", emoji: "📦", t: "You get set up", d: "You receive your preparation video and the DIY shampoo ingredient list. You join 2,000+ women starting on exactly the same day." },
  { n: "02", tag: "Days 1–14", emoji: "🎥", t: "10 minutes a day", d: "One daily coaching video. Each day builds on the last. You customise everything to your hair type and your body." },
  { n: "03", tag: "Day 14+", emoji: "✨", t: "You can see it", d: "A personalised haircare system, a real understanding of your hair biology, and results you can actually see." }];

  return (
    <section className="bg-white">
      <Anno>Section 7 — How it works</Anno>
      <div className="wrap" style={{ maxWidth: 720 }}>
        <Reveal style={{ textAlign: "center", marginBottom: 40 }}>
          <Eyebrow>The structure</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12 }}>10 minutes a day.
14 days - 14 Simple Missions.</h2>
          <p className="lead" style={{ marginTop: 12, color: "var(--ink-soft)" }}>Anytime - Anywhere.<br />Here's exactly what happens.</p>
        </Reveal>

        <div className="timeline">
          {steps.map((s, i) => <React.Fragment key={i}>
              <Reveal delay={i * 80}>
                <div className="timeline-step">
                  <div className="timeline-circle">{s.n}</div>
                  <div className="timeline-card">
                    <div className="timeline-tag">{s.tag} · {s.emoji}</div>
                    <h3 className="h3" style={{ marginBottom: 6, marginTop: 2 }}>{s.t}</h3>
                    <p className="p" style={{ fontSize: 15.5, margin: 0 }}>{s.d}</p>
                  </div>
                </div>
              </Reveal>
              {i < steps.length - 1 &&
              <div className="timeline-connector">
                  <HandLine height={56} arrow={i === steps.length - 2} />
                </div>
              }
            </React.Fragment>
          )}
        </div>

        <Reveal style={{ marginTop: 36 }}>
          <div style={{ background: "var(--cream)", borderRadius: 18, padding: "22px 24px", textAlign: "center", border: "1px solid var(--line)" }}>
            <p className="p" style={{ margin: 0, fontSize: 16.5, lineHeight: 1.55 }}>
              This is not passive content. You <em>do</em> things. You notice things. <strong>By day 14 you won't need to buy another product</strong> — because you'll know what your hair actually needs.
            </p>
          </div>
        </Reveal>

        {/* Inline testimonial — completion proof */}
        <Reveal style={{ marginTop: 26 }}>
          <InlineTestimonial
            name="Lila" age={40} flag="🇨🇦"
            quote="I'm not a finisher. I finished this. The 10-minute videos and starting on the same day as 2,000 other women got me there."
            style={{ margin: "0 auto" }} />
          
        </Reveal>

        <Reveal className="center" style={{ marginTop: 26 }}>
          <Button onClick={onCta} icon="arrow-right">I'm ready — start now</Button>
        </Reveal>
      </div>
    </section>);

}

/* ---------------- Added — What changes in 14 days (emoji-led outcomes) ---------------- */
function ResultsIn2Weeks({ onCta }) {
  const benefits = [
  { emoji: "✂️", t: "Less shedding", d: "Real decrease in strands in your drain — at the temples, crown and part. Not a temporary patch." },
  { emoji: "💁", t: "Volume coming back", d: "As your follicles recover from the stress of your 40s, fullness returns — without styling tricks." },
  { emoji: "💧", t: "Hydrated, resilient hair", d: "Restore the moisture balance for your hair as it is now — and stretch the time between washes." },
  { emoji: "💪", t: "Stronger strands", d: "Work with the keratin and collagen decline that starts in your 30s, so the breakage eases off." },
  { emoji: "🌱", t: "A healthier scalp", d: "Build the scalp conditions your follicles need to regrow strong, consistent hair — for years." }];

  return (
    <section className="bg-cream">
      <Anno>Added — What changes in 14 days (outcomes)</Anno>
      <div className="wrap" style={{ maxWidth: 760 }}>
        <Reveal style={{ textAlign: "center", marginBottom: 36 }}>
          <Eyebrow>Built for women 30–42</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12 }}>What you'll actually see in 2 weeks</h2>
        </Reveal>
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {benefits.map((b, i) =>
            <div key={i} className="result-row">
                <span className="result-emoji">{b.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 3 }}>{b.t}</div>
                  <div className="p" style={{ fontSize: 15, margin: 0, lineHeight: 1.5 }}>{b.d}</div>
                </div>
              </div>
            )}
          </div>
        </Reveal>
        <Reveal className="center" style={{ marginTop: 30 }}>
          <Button onClick={onCta} icon="arrow-right">Start the challenge</Button>
        </Reveal>
      </div>
    </section>);

}

/* ---------------- Section 8 — What's included (premium bundle layout) ---------------- */
function WhatsIncluded({ onCta }) {
  const items = [
  { emoji: "🎓", t: "14-Day Haircare Masterclass", d: "Daily 10-min coaching videos, guiding you day by day.", v: "$135", flagship: true },
  { emoji: "📓", t: "Daily Journal & Templates", d: "Track shedding, scalp, progress. Printable + digital.", v: "$27" },
  { emoji: "🧴", t: "DIY Luxury Shampoo Workshop", d: "Make a salon-quality shampoo at home, from kitchen ingredients.", v: "$149", flagship: true },
  { emoji: "🧪", t: "Silicones & Sulfates Manual", d: "Decode any ingredient label in 30 seconds.", v: "$29" },
  { emoji: "📖", t: "Total Hair Wellness Handbook", d: "Your reference for hormones, nutrition, scalp care.", v: "$29" },
  { emoji: "🚫", t: "Haircare No-No List", d: "The 47 ingredients to avoid in your 30s and 40s.", v: "$35" },
  { emoji: "🔬", t: "Virtual Deficiency Test", d: "Identify your specific iron, ferritin, zinc & B12 gaps.", v: "$67" },
  { emoji: "🥗", t: "Healthy Hair Recipe Book", d: "30 hormone-balancing, follicle-feeding meals.", v: "$29" },
  { emoji: "💛", t: "Members-Only Community", d: "A private circle of women your age, doing exactly this.", v: "$40", bonus: true },
  { emoji: "🏅", t: "Certificate of Completion", d: "Yours when you cross the finish line on day 14.", v: "included" }];

  return (
    <section className="bg-cream" id="included">
      <Anno>Section 8 — What's included (premium value)</Anno>
      <div className="wrap-wide">
        {/* Header */}
        <Reveal style={{ textAlign: "center", marginBottom: 28 }}>
          <Eyebrow>Inside the bundle</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 660, marginInline: "auto" }}>
            10 pieces. One complete system. <Underline>Yours forever.</Underline>
          </h2>
          <p className="lead" style={{ marginTop: 14, maxWidth: 580, marginInline: "auto" }}>
            A full library plus a personalised assessment — built specifically for women 30–45.
          </p>
        </Reveal>

        {/* Hero bundle photo with sketchy save pin */}
        <Reveal>
          <div style={{ position: "relative", maxWidth: 600, margin: "0 auto 36px" }}>
            <Photo h={300} label="Bundle flatlay — workbooks, journal, recipe book, tablet with course interface, warm lighting" radius={20} style={{ boxShadow: "var(--shadow-lg)" }} />
            <div style={{ position: "absolute", top: -18, right: -8, zIndex: 4 }}>
              <Pin rotate={-7} bg="var(--orange-600)" color="#fff" style={{ borderColor: "var(--orange-700)", fontSize: 22, padding: "8px 16px" }}>Save $503</Pin>
            </div>
            <div style={{ position: "absolute", bottom: -16, left: -10, zIndex: 4 }}>
              <Pin rotate={5}>📦 Ships + streams instantly</Pin>
            </div>
          </div>
        </Reveal>

        {/* Bundle grid */}
        <Reveal>
          <div className="bundle-grid">
            {items.map((it, i) =>
            <div key={i} className={`bundle-item ${it.bonus ? "bonus" : ""} ${it.flagship ? "flagship" : ""} ${it.v === "included" ? "included" : ""}`}>
                <span className="bundle-item-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="bundle-item-thumb">{it.emoji}</div>
                <div className="bundle-item-body">
                  <div className="bundle-item-title">{it.t}</div>
                  <div className="bundle-item-desc">{it.d}</div>
                  <div className="bundle-item-tag-row">
                    <span className={`bundle-item-tag ${it.v === "included" ? "incl" : ""}`}>
                      {it.v === "included" ? "Included" : `${it.v} value`}
                    </span>
                    {it.bonus && <span className="bundle-item-flag bonus-flag">🎁 Bonus</span>}
                    {it.flagship && <span className="bundle-item-flag flagship-flag">⭐ Most loved</span>}
                  </div>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        {/* Pricing reveal */}
        <Reveal style={{ marginTop: 44 }}>
          <div className="pricing-card">
            <div className="pricing-header">85% off · cohort starts Fri, June 6th</div>
            <div className="pricing-body">
              <div className="pricing-total-row">
                <span className="pricing-label">Total bundle value</span>
                <span className="pricing-strikethrough">$540</span>
              </div>
              <div className="pricing-arrow-wrap">
                <HandArrow direction="down" size={56} color="var(--orange-500)" />
                <Hand size={20} color="var(--orange-700)" rotate={-6} style={{ marginLeft: 6 }}>today only</Hand>
              </div>
              <div className="pricing-today-block">
                <div className="pricing-today-label">Yours today</div>
                <div className="pricing-today-amount">$37</div>
                <span className="pricing-save">You save $503 · 93% off bundle value</span>
              </div>
              <Button onClick={onCta} icon="arrow-right" style={{ width: "100%", justifyContent: "center", marginTop: 22 }}>Get everything — start now</Button>
              <div className="pricing-trust">
                <span><Icon name="shield-check" size={15} color="var(--trust-green)" /> 30-day money-back</span>
                <span className="pricing-trust-dot">·</span>
                <span><Icon name="users" size={15} color="var(--orange-600)" /> 2,400 joining Friday</span>
                <span className="pricing-trust-dot">·</span>
                <span><Icon name="infinity" size={15} color="var(--slate)" /> Pay once. Yours forever.</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}

Object.assign(window, { VideoTestimonials, SocialProof, SolutionReframe, HowItWorks, WhatsIncluded, ResultsIn2Weeks });