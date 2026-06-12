import {
  Anno,
  Button,
  Eyebrow,
  GuaranteeBadge,
  Hand,
  HandArrow,
  Icon,
  Pin,
  Reveal,
  Underline,
} from "../primitives";
import { useJoiningCount, formatJoiningCount } from "../useJoiningCount";
import { useStartDate, fmtShort } from "../useStartDate";

export function WhatsIncluded({ onCta }: { onCta?: () => void }) {
  const startDate = useStartDate();
  const joining = useJoiningCount();
  return (
    <section className="bg-cream" id="included">
      <Anno>Section 8 — What's included (premium value)</Anno>
      <div className="wrap-wide">
        <Reveal style={{ textAlign: "center", marginBottom: 28 }}>
          <Eyebrow>Inside the bundle</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 660, marginInline: "auto" }}>
            10 pieces. One complete system. <Underline>Yours forever.</Underline>
          </h2>
          <p className="lead" style={{ marginTop: 14, maxWidth: 580, marginInline: "auto" }}>
            A full library plus a personalised assessment — built specifically for women 30–45.
          </p>
        </Reveal>

        <Reveal>
          <div style={{ position: "relative", maxWidth: 420, margin: "0 auto 36px" }}>
            <img
              src="https://pub.hairqare.co/cdn-cgi/image/width=800,quality=80,format=auto/Sarah%20Tran%20Image%20for%20stack%20.webp"
              srcSet="
                https://pub.hairqare.co/cdn-cgi/image/width=500,quality=80,format=auto/Sarah%20Tran%20Image%20for%20stack%20.webp 500w,
                https://pub.hairqare.co/cdn-cgi/image/width=800,quality=80,format=auto/Sarah%20Tran%20Image%20for%20stack%20.webp 800w,
                https://pub.hairqare.co/cdn-cgi/image/width=1200,quality=80,format=auto/Sarah%20Tran%20Image%20for%20stack%20.webp 1200w
              "
              sizes="(max-width: 480px) 90vw, 420px"
              alt="Haircare bundle product stack"
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: 20, boxShadow: "var(--shadow-lg)", display: "block" }}
            />
            <div style={{ position: "absolute", top: -18, right: -8, zIndex: 4 }}>
              <Pin rotate={-7} bg="var(--orange-600)" color="#fff" style={{ borderColor: "var(--orange-700)", fontSize: 22, padding: "8px 16px" }}>Save $503</Pin>
            </div>
            <div style={{ position: "absolute", bottom: -16, left: -10, zIndex: 4 }}>
              <Pin rotate={5}>📦 Ships + streams instantly</Pin>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="bundle-grid">
            <div className="bundle-item flagship">
              <span className="bundle-item-num">01</span>
              <div className="bundle-item-thumb">🎓</div>
              <div className="bundle-item-body">
                <div className="bundle-item-title">14-Day Haircare Masterclass</div>
                <div className="bundle-item-desc">Daily 10-min coaching videos, guiding you day by day.</div>
                <div className="bundle-item-tag-row">
                  <span className="bundle-item-tag">$135 value</span>
                  <span className="bundle-item-flag flagship-flag">⭐ Most loved</span>
                </div>
              </div>
            </div>
            <div className="bundle-item">
              <span className="bundle-item-num">02</span>
              <div className="bundle-item-thumb">📓</div>
              <div className="bundle-item-body">
                <div className="bundle-item-title">Daily Journal & Templates</div>
                <div className="bundle-item-desc">Track shedding, scalp, progress. Printable + digital.</div>
                <div className="bundle-item-tag-row">
                  <span className="bundle-item-tag">$27 value</span>
                </div>
              </div>
            </div>
            <div className="bundle-item flagship">
              <span className="bundle-item-num">03</span>
              <div className="bundle-item-thumb">🧴</div>
              <div className="bundle-item-body">
                <div className="bundle-item-title">DIY Luxury Shampoo Workshop</div>
                <div className="bundle-item-desc">Make a salon-quality shampoo at home, from kitchen ingredients.</div>
                <div className="bundle-item-tag-row">
                  <span className="bundle-item-tag">$149 value</span>
                  <span className="bundle-item-flag flagship-flag">⭐ Most loved</span>
                </div>
              </div>
            </div>
            <div className="bundle-item">
              <span className="bundle-item-num">04</span>
              <div className="bundle-item-thumb">🧪</div>
              <div className="bundle-item-body">
                <div className="bundle-item-title">Silicones & Sulfates Manual</div>
                <div className="bundle-item-desc">Decode any ingredient label in 30 seconds.</div>
                <div className="bundle-item-tag-row">
                  <span className="bundle-item-tag">$29 value</span>
                </div>
              </div>
            </div>
            <div className="bundle-item">
              <span className="bundle-item-num">05</span>
              <div className="bundle-item-thumb">📖</div>
              <div className="bundle-item-body">
                <div className="bundle-item-title">Total Hair Wellness Handbook</div>
                <div className="bundle-item-desc">Your reference for hormones, nutrition, scalp care.</div>
                <div className="bundle-item-tag-row">
                  <span className="bundle-item-tag">$29 value</span>
                </div>
              </div>
            </div>
            <div className="bundle-item">
              <span className="bundle-item-num">06</span>
              <div className="bundle-item-thumb">🚫</div>
              <div className="bundle-item-body">
                <div className="bundle-item-title">Haircare No-No List</div>
                <div className="bundle-item-desc">The 47 ingredients to avoid in your 30s.</div>
                <div className="bundle-item-tag-row">
                  <span className="bundle-item-tag">$35 value</span>
                </div>
              </div>
            </div>
            <div className="bundle-item">
              <span className="bundle-item-num">07</span>
              <div className="bundle-item-thumb">🔬</div>
              <div className="bundle-item-body">
                <div className="bundle-item-title">Virtual Deficiency Test</div>
                <div className="bundle-item-desc">Identify your specific iron, ferritin, zinc & B12 gaps.</div>
                <div className="bundle-item-tag-row">
                  <span className="bundle-item-tag">$67 value</span>
                </div>
              </div>
            </div>
            <div className="bundle-item">
              <span className="bundle-item-num">08</span>
              <div className="bundle-item-thumb">🥗</div>
              <div className="bundle-item-body">
                <div className="bundle-item-title">Healthy Hair Recipe Book</div>
                <div className="bundle-item-desc">30 hormone-balancing, follicle-feeding meals.</div>
                <div className="bundle-item-tag-row">
                  <span className="bundle-item-tag">$29 value</span>
                </div>
              </div>
            </div>
            <div className="bundle-item bonus">
              <span className="bundle-item-num">09</span>
              <div className="bundle-item-thumb">💛</div>
              <div className="bundle-item-body">
                <div className="bundle-item-title">Members-Only Community</div>
                <div className="bundle-item-desc">A private circle of women your age, doing exactly this.</div>
                <div className="bundle-item-tag-row">
                  <span className="bundle-item-tag">$40 value</span>
                  <span className="bundle-item-flag bonus-flag">🎁 Bonus</span>
                </div>
              </div>
            </div>
            <div className="bundle-item included">
              <span className="bundle-item-num">10</span>
              <div className="bundle-item-thumb">🏅</div>
              <div className="bundle-item-body">
                <div className="bundle-item-title">Certificate of Completion</div>
                <div className="bundle-item-desc">Yours when you cross the finish line on day 14.</div>
                <div className="bundle-item-tag-row">
                  <span className="bundle-item-tag incl">Included</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal style={{ marginTop: 44 }}>
          <div className="pricing-card">
            <div className="pricing-header">85% off · cohort starts <span className="start-date">{startDate ? fmtShort(startDate) : "Fri, June 6th"}</span></div>
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
              <Button id="cta-whats-included" onClick={onCta} icon="arrow-right" style={{ width: "100%", justifyContent: "center", marginTop: 22 }}>Get everything — start now</Button>
              <div style={{ marginTop: 14, display: "flex", justifyContent: "center" }}>
                <GuaranteeBadge size="sm" />
              </div>
              <div className="pricing-trust">
                <span><Icon name="shield-check" size={15} color="var(--trust-green)" /> 30-day money-back</span>
                <span className="pricing-trust-dot">·</span>
                <span><Icon name="users" size={15} color="var(--orange-600)" /> {formatJoiningCount(joining)} women joining this week</span>
                <span className="pricing-trust-dot">·</span>
                <span><Icon name="infinity" size={15} color="var(--slate)" /> Pay once. Yours forever.</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default WhatsIncluded;