import { useMemo, useState } from "react";
import { AnimatedNumber } from "../ui/AnimatedNumber";
import { CheckIcon, GiftIcon, SparkIcon } from "../ui/Icons";
import { JOURNEY } from "../copy/creators";
import { EARNINGS } from "../copy/hub";
import { VIEWS_TARGET, monthlyEarnings, totalRewardValue, usd, yearlyEarnings } from "../journey";

const FLAME = "#e8622c";
const GOLD = "#c9a24b";
const LINE = "#e5e3ea";
const VIEWS_MAX = 150_000;
const SALES_MAX = 100;

/**
 * The hub's earnings visualiser.
 *
 * Same maths as /creators — it all comes from ../journey, so the two surfaces
 * cannot drift — but its own layout. BuildYourJourney splits 55/45 at a
 * *viewport* width of 1120px, which inside the hub's 48rem reading column meant
 * two ~340px columns no matter how wide the screen was.
 *
 * Here the split is driven by the container instead: controls on the left,
 * a results panel on the right that carries both the money and the rewards, so
 * dragging a slider always changes something already on screen. The panel is
 * sticky, and everything stacks below 768px.
 */
export function EarningsVisualiser() {
  const [committed, setCommitted] = useState(true);
  const [views, setViews] = useState(20_000);
  const [sales, setSales] = useState(5);

  const reached = views >= VIEWS_TARGET;
  const total = totalRewardValue(committed, views);

  // Flame up to the thumb, then gold once past the 100k mark.
  const viewsTrack = useMemo(() => {
    const pct = (views / VIEWS_MAX) * 100;
    const target = (VIEWS_TARGET / VIEWS_MAX) * 100;
    return views < VIEWS_TARGET
      ? `linear-gradient(90deg, ${FLAME} ${pct}%, ${LINE} ${pct}%)`
      : `linear-gradient(90deg, ${FLAME} ${target}%, ${GOLD} ${target}%, ${GOLD} ${pct}%, ${LINE} ${pct}%)`;
  }, [views]);

  const salesPct = (sales / SALES_MAX) * 100;
  const salesTrack = `linear-gradient(90deg, ${FLAME} ${salesPct}%, ${LINE} ${salesPct}%)`;

  return (
    <div>
      <p className="mb-5 max-w-prose leading-relaxed text-ink/70">{EARNINGS.intro}</p>

      <div className="grid gap-4 cs:grid-cols-[1fr_16rem] cs:items-start">
        {/* ── Controls ───────────────────────────────────────────────────── */}
        <div className="rounded-card border border-line bg-white p-5">
          <ControlLabel>{EARNINGS.postTitle}</ControlLabel>
          <button
            type="button"
            role="switch"
            aria-checked={committed}
            onClick={() => setCommitted((v) => !v)}
            className={`mt-2 flex w-full items-center gap-3 rounded-input border p-3 text-left transition-colors ${
              committed ? "border-sage bg-sage/[0.14]" : "border-line bg-ivory hover:border-ink/25"
            }`}
          >
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-pill border-2 transition-colors ${
                committed
                  ? "border-sage bg-sage text-ivory"
                  : "border-line bg-ivory text-transparent"
              }`}
            >
              <CheckIcon width={15} height={15} />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium text-ink">{EARNINGS.postLabel}</span>
              <span className="block text-sm text-ink/60">{EARNINGS.postSub}</span>
            </span>
          </button>

          <div className="mt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <ControlLabel>{EARNINGS.viewsTitle}</ControlLabel>
              <span className="tnum text-sm font-medium text-ink/70">
                {views.toLocaleString("en-US")} {EARNINGS.viewsUnit}
              </span>
            </div>
            <p
              className={`mt-1 text-sm transition-colors ${
                reached ? "text-[#7a6224]" : "text-ink/60"
              }`}
            >
              {reached ? EARNINGS.viewsReached : EARNINGS.viewsHint}
            </p>
            <div className="mb-3 mt-2 h-1 w-full overflow-hidden rounded-pill bg-line">
              <div
                className={`h-full rounded-pill transition-all ${reached ? "bg-gold" : "bg-flame"}`}
                style={{
                  width: `${Math.min(100, (views / VIEWS_TARGET) * 100)}%`,
                }}
              />
            </div>
            <input
              type="range"
              min={0}
              max={VIEWS_MAX}
              step={1000}
              value={views}
              onChange={(e) => setViews(Number(e.target.value))}
              aria-label="Cumulative organic views"
              aria-valuetext={`${views.toLocaleString("en-US")} views`}
              style={{ background: viewsTrack }}
            />
            <div className="mt-1.5 flex justify-between text-[0.7rem] text-ink/60">
              <span>0</span>
              <span>25k</span>
              <span>50k</span>
              <span className={`font-semibold ${reached ? "text-[#7a6224]" : "text-flame-deep"}`}>
                100k
              </span>
              <span>150k</span>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <ControlLabel>{EARNINGS.salesTitle}</ControlLabel>
              <span className="tnum text-sm font-medium text-ink/70">
                {sales} {EARNINGS.salesUnit}
              </span>
            </div>
            <p className="mb-3 mt-1 text-sm text-ink/60">{EARNINGS.salesHint}</p>
            <input
              type="range"
              min={0}
              max={SALES_MAX}
              step={1}
              value={sales}
              onChange={(e) => setSales(Number(e.target.value))}
              aria-label="People joining a month through your code or link"
              aria-valuetext={`${sales} a month`}
              style={{ background: salesTrack }}
            />
          </div>
        </div>

        {/* ── Live results ───────────────────────────────────────────────── */}
        <div
          aria-live="polite"
          className="rounded-card border border-line bg-sand p-4 cs:sticky cs:top-24"
        >
          <p className="text-[0.65rem] uppercase tracking-[0.14em] text-ink/60">
            {EARNINGS.perMonth}
          </p>
          <AnimatedNumber
            value={monthlyEarnings(sales)}
            format={(n) => usd(n, n % 1 !== 0)}
            className="tnum block font-fraunces text-[1.75rem] leading-none text-flame"
          />
          <p className="mt-2.5 text-[0.65rem] uppercase tracking-[0.14em] text-ink/60">
            {EARNINGS.perYear}
          </p>
          <AnimatedNumber
            value={yearlyEarnings(sales)}
            format={(n) => usd(n)}
            className="tnum block font-fraunces text-xl leading-none text-ink"
          />
          <p className="mt-2 text-[0.7rem] leading-relaxed text-ink/55">{EARNINGS.saleNote}</p>

          <div className="mt-4 border-t border-line pt-4">
            <p className="mb-2 text-[0.65rem] uppercase tracking-[0.14em] text-ink/60">
              {EARNINGS.panelTitle}
            </p>

            {!committed && !reached ? (
              <p className="text-[0.8rem] leading-relaxed text-ink/55">{EARNINGS.panelEmpty}</p>
            ) : (
              <div className="flex flex-col gap-1.5">
                {committed && (
                  <>
                    <Chip
                      i={0}
                      title={JOURNEY.rewards.founding.title}
                      icon={<CheckIcon width={12} height={12} />}
                    />
                    <Chip
                      i={1}
                      title={JOURNEY.rewards.giftPass.title}
                      value="$37"
                      icon={<GiftIcon width={12} height={12} />}
                    />
                    <Chip i={2} title={JOURNEY.rewards.hqlDraw.title} />
                    <Chip i={3} title={JOURNEY.rewards.merely.title} />
                  </>
                )}
                {reached && (
                  /* The one gold treatment in the whole project. */
                  <Chip
                    i={4}
                    gold
                    title={JOURNEY.rewards.hql.title}
                    value="$997"
                    icon={<SparkIcon width={12} height={12} />}
                  />
                )}
              </div>
            )}

            <div className="mt-3 flex items-baseline justify-between border-t border-line pt-3">
              <span className="text-[0.65rem] uppercase tracking-[0.14em] text-ink/60">
                {EARNINGS.totalLabel}
              </span>
              <AnimatedNumber
                value={total}
                duration={0.3}
                format={(n) => usd(n)}
                className="tnum font-fraunces text-lg text-ink"
              />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink/55">{EARNINGS.note}</p>
    </div>
  );
}

function ControlLabel({ children }: { children: React.ReactNode }) {
  return <h3 className="font-fraunces text-lg text-ink">{children}</h3>;
}

/**
 * Compact reward row. RewardCard is the /creators unit and is too tall for a
 * 16rem panel, so this drops the note line and keeps title + value.
 */
function Chip({
  i,
  title,
  value,
  icon,
  gold = false,
}: {
  i: number;
  title: string;
  value?: string;
  icon?: React.ReactNode;
  gold?: boolean;
}) {
  return (
    <div
      className={`hq-reward-in flex items-center gap-2 rounded-input border px-2.5 py-2 ${
        gold ? "border-gold/50 bg-gold/[0.12]" : "border-sage/45 bg-sage/[0.12]"
      }`}
      style={{ "--i": i } as React.CSSProperties}
    >
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-pill text-ivory ${
          gold ? "bg-gold" : "bg-sage"
        }`}
      >
        {icon ?? <CheckIcon width={12} height={12} />}
      </span>
      <span className="min-w-0 flex-1 text-[0.8rem] leading-snug text-ink">{title}</span>
      {value && (
        <span
          className={`tnum shrink-0 font-fraunces text-[0.8rem] ${
            gold ? "text-[#7a6224]" : "text-[#4d5c50]"
          }`}
        >
          {value}
        </span>
      )}
    </div>
  );
}
