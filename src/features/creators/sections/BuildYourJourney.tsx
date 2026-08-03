
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { JOURNEY } from "../copy/creators";
import {
  COMMISSION_PER_SALE,
  VIEWS_TARGET,
  monthlyEarnings,
  totalRewardValue,
  usd,
  yearlyEarnings,
} from "../journey";
import { AnimatedNumber } from "../ui/AnimatedNumber";
import { RewardCard } from "../ui/RewardCard";
import { CheckIcon, GiftIcon, SparkIcon } from "../ui/Icons";

const FLAME = "#E8622C";
const SAGE = "#8A9B8E";
const GOLD = "#C9A24B";
const LINE = "#E4DDD3";

// Deterministic celebration burst (Doc 13 Change 3) — 12 brand-colored dots that
// rise from a point and fade within 600ms. No randomness, no confetti cannon.
const BURST = Array.from({ length: 12 }, (_, i) => ({
  x: (i - 5.5) * 11,
  y: -38 - (i % 4) * 15,
  color: [FLAME, SAGE, GOLD][i % 3],
  delay: (i % 6) * 0.03,
}));

function DotBurst({ fireKey }: { fireKey: number }) {
  const reduce = useReducedMotion();
  if (reduce || fireKey === 0) return null;
  return (
    <span className="pointer-events-none absolute left-1/2 top-2 z-10 h-0 w-0">
      <AnimatePresence>
        <motion.span key={fireKey} className="absolute">
          {BURST.map((d, i) => (
            <motion.span
              key={i}
              className="absolute block h-1.5 w-1.5 rounded-full"
              style={{ background: d.color }}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.4 }}
              animate={{ opacity: [0, 1, 0], x: d.x, y: d.y, scale: 1 }}
              transition={{ duration: 0.6, delay: d.delay, ease: "easeOut" }}
            />
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};
const item = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 380, damping: 26 },
  },
  exit: { opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.18 } },
};

function RewardStack({
  committed,
  reachedTarget,
  hqlBurst,
}: {
  committed: boolean;
  reachedTarget: boolean;
  hqlBurst: number;
}) {
  const reduce = useReducedMotion();
  const c = JOURNEY.rewards;
  return (
    <div className="flex flex-col gap-2.5">
      <AnimatePresence>
        {committed && (
          <motion.div
            key="layer1"
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="flex flex-col gap-2.5"
          >
            <motion.div variants={item}>
              <RewardCard
                title={c.founding.title}
                note={c.founding.note}
                icon={<CheckIcon width={17} height={17} />}
              />
            </motion.div>
            <motion.div variants={item}>
              <RewardCard
                title={c.giftPass.title}
                note={c.giftPass.note}
                icon={<GiftIcon width={17} height={17} />}
                value="$37"
              />
            </motion.div>
            <motion.div variants={item}>
              <RewardCard title={c.hqlDraw.title} note={c.hqlDraw.note} />
            </motion.div>
            <motion.div variants={item}>
              <RewardCard title={c.merely.title} note={c.merely.note} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {reachedTarget && (
          <motion.div
            key="hql"
            initial={{ opacity: 0, rotateX: reduce ? 0 : 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformPerspective: 700 }}
          >
            <div className="relative overflow-hidden rounded-card">
              {/* The one gold treatment in the whole project. */}
              <RewardCard
                title={c.hql.title}
                note={c.hql.note}
                treatment="gold"
                icon={<SparkIcon width={17} height={17} />}
              />
              {!reduce && (
                <motion.span
                  key={`shimmer-${hqlBurst}`}
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  initial={{ x: "-130%" }}
                  animate={{ x: "230%" }}
                  transition={{ duration: 0.85, ease: "easeInOut" }}
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 30%, rgba(255,255,255,.55) 50%, transparent 70%)",
                  }}
                />
              )}
              <DotBurst fireKey={hqlBurst} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function BuildYourJourney() {
  // Pre-committed on load; 20k views; 5 sales — the panel already shows the win.
  const [committed, setCommitted] = useState(true);
  const [views, setViews] = useState(20_000);
  const [sales, setSales] = useState(5);
  const [sheetOpen, setSheetOpen] = useState(false);

  const reachedTarget = views >= VIEWS_TARGET;
  const total = totalRewardValue(committed, views);
  const unlockedCount = (committed ? 4 : 0) + (reachedTarget ? 1 : 0);

  // Only pin the mobile summary bar while S4 is on screen.
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!inView) setSheetOpen(false);
  }, [inView]);

  // Celebration triggers (Doc 13 Change 3).
  const [layer1Burst, setLayer1Burst] = useState(0);
  const [hqlBurst, setHqlBurst] = useState(0);
  const prevCommitted = useRef(committed);
  const prevReached = useRef(reachedTarget);

  useEffect(() => {
    // Fire the Layer 1 burst once on load, 400ms after mount.
    const t = setTimeout(() => setLayer1Burst((k) => k + 1), 400);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (!prevCommitted.current && committed) setLayer1Burst((k) => k + 1);
    prevCommitted.current = committed;
  }, [committed]);
  useEffect(() => {
    if (!prevReached.current && reachedTarget) setHqlBurst((k) => k + 1);
    prevReached.current = reachedTarget;
  }, [reachedTarget]);

  // Filled slider tracks (flame up to the thumb; gold beyond 100k on the views slider).
  const viewsTrack = useMemo(() => {
    const pct = (views / 150_000) * 100;
    const target = (VIEWS_TARGET / 150_000) * 100;
    if (views < VIEWS_TARGET) {
      return `linear-gradient(90deg, ${FLAME} ${pct}%, ${LINE} ${pct}%)`;
    }
    return `linear-gradient(90deg, ${FLAME} ${target}%, ${GOLD} ${target}%, ${GOLD} ${pct}%, ${LINE} ${pct}%)`;
  }, [views]);
  const salesTrack = `linear-gradient(90deg, ${FLAME} ${sales}%, ${LINE} ${sales}%)`;

  const monthlyFmt = (n: number) => usd(n, n % 1 !== 0);

  return (
    <MotionConfig reducedMotion="user">
      <div ref={sectionRef}>
        <div className="grid grid-cols-1 gap-10 cm:grid-cols-[55fr_45fr] cm:gap-12">
          {/* LEFT: controls */}
          <div className="flex flex-col gap-9">
            {/* Control 1 — single pre-checked commitment card */}
            <div>
              <h3 className="mb-3 font-fraunces text-2xl text-ink">
                {JOURNEY.controls.post}
              </h3>
              <button
                type="button"
                role="switch"
                aria-checked={committed}
                onClick={() => setCommitted((v) => !v)}
                className={[
                  "flex w-full items-center gap-4 rounded-card border p-4 text-left transition-colors duration-200",
                  committed
                    ? "border-sage bg-sage/[0.16]"
                    : "border-line bg-ivory hover:border-ink/25",
                ].join(" ")}
              >
                <span
                  className={[
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-pill border-2 transition-colors duration-200",
                    committed
                      ? "border-sage bg-sage text-ivory"
                      : "border-line bg-ivory text-transparent",
                  ].join(" ")}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <motion.path
                      d="M5 12.5 10 17.5 19 7"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={false}
                      animate={{ pathLength: committed ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </svg>
                </span>
                <span>
                  <span className="block font-medium text-ink">
                    {JOURNEY.commit.label}
                  </span>
                  <span className="block text-sm text-ink/65">
                    {JOURNEY.commit.sub}
                  </span>
                </span>
              </button>
            </div>

            {/* Control 2 — views slider */}
            <div>
              <h3 className="mb-2 font-fraunces text-2xl text-ink">
                {JOURNEY.controls.watch}
              </h3>
              <div className="mb-2 flex items-baseline justify-between">
                <p
                  className={[
                    "text-sm transition-colors",
                    reachedTarget ? "text-[#7a6224]" : "text-ink/65",
                  ].join(" ")}
                >
                  {reachedTarget
                    ? "Hairqare Lab unlocked."
                    : JOURNEY.viewsProgress(views)}
                </p>
                <span className="tnum text-sm font-medium text-ink/70">
                  {views.toLocaleString("en-US")}
                </span>
              </div>
              {/* thin progress toward 100k */}
              <div className="mb-4 h-1 w-full overflow-hidden rounded-pill bg-line">
                <div
                  className={`h-full rounded-pill transition-all ${
                    reachedTarget ? "bg-gold" : "bg-flame"
                  }`}
                  style={{
                    width: `${Math.min(100, (views / VIEWS_TARGET) * 100)}%`,
                  }}
                />
              </div>
              <input
                type="range"
                min={0}
                max={150_000}
                step={1000}
                value={views}
                onChange={(e) => setViews(Number(e.target.value))}
                aria-label="Cumulative organic views"
                aria-valuetext={`${views.toLocaleString("en-US")} views`}
                style={{ background: viewsTrack }}
              />
              <div className="mt-2 flex justify-between text-[0.7rem] text-ink/70">
                <span>0</span>
                <span>25k</span>
                <span>50k</span>
                <span
                  className={`font-semibold ${
                    reachedTarget ? "text-[#7a6224]" : "text-flame-deep"
                  }`}
                >
                  100k
                </span>
                <span>150k</span>
              </div>
            </div>

            {/* Control 3 — sales slider + earnings card */}
            <div>
              <h3 className="mb-2 font-fraunces text-2xl text-ink">
                {JOURNEY.controls.buy}
              </h3>
              <div className="mb-4 flex items-baseline justify-between">
                <p className="text-sm text-ink/65">
                  Sales a month through your code
                </p>
                <span className="tnum text-sm font-medium text-ink/70">
                  {sales}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={sales}
                onChange={(e) => setSales(Number(e.target.value))}
                aria-label="Sales per month through your code"
                aria-valuetext={`${sales} sales per month`}
                style={{ background: salesTrack }}
              />
              <div className="mt-5 rounded-card border border-flame/20 bg-flame/[0.06] px-5 py-4">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-ink/65">
                      Per month
                    </p>
                    <AnimatedNumber
                      value={monthlyEarnings(sales)}
                      format={monthlyFmt}
                      className="font-fraunces text-[2.75rem] leading-none text-flame"
                    />
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-wide text-ink/65">
                      Per year
                    </p>
                    <AnimatedNumber
                      value={yearlyEarnings(sales)}
                      format={(n) => usd(n)}
                      className="font-fraunces text-2xl text-ink"
                    />
                  </div>
                </div>
                <p className="mt-3 text-sm italic text-ink/65">
                  {JOURNEY.salesCaption}
                </p>
                <p className="mt-1 text-[0.7rem] text-ink/70">
                  50% of every Challenge sale, up to {usd(COMMISSION_PER_SALE, true)} each.
                </p>
              </div>
            </div>

            {/* LOCKED disclaimer (verbatim) */}
            <p className="max-w-prose text-sm leading-relaxed text-ink/65">
              {JOURNEY.disclaimer}
            </p>
          </div>

          {/* RIGHT: sticky rewards panel (desktop) */}
          <div className="hidden cm:block">
            <div className="sticky top-8 rounded-card border border-line bg-sand p-6 shadow-float">
              <div className="relative">
                <h3 className="mb-5 font-fraunces text-[1.7rem] text-ink">
                  {JOURNEY.panelTitle}
                </h3>
                <DotBurst fireKey={layer1Burst} />
              </div>
              <RewardStack
                committed={committed}
                reachedTarget={reachedTarget}
                hqlBurst={hqlBurst}
              />
              <div className="mt-6 flex items-baseline justify-between border-t border-line pt-5">
                <span className="text-xs uppercase tracking-[0.14em] text-ink/65">
                  {JOURNEY.totalLabel}
                </span>
                <AnimatedNumber
                  value={total}
                  duration={0.3}
                  format={(n) => usd(n)}
                  className="font-fraunces text-3xl text-ink"
                />
              </div>
              <p className="mt-2 text-xs italic text-ink/55">
                {JOURNEY.earningsNote}
              </p>
            </div>
          </div>
        </div>

        {/* Closing line — rendered once, visible on every viewport. */}
        <p className="mx-auto mt-12 max-w-2xl text-center font-fraunces text-xl italic text-ink/70">
          {JOURNEY.closingLine}
        </p>

        {/* Mobile sticky summary bar → expands to the full stack; slides away
            once the section leaves the viewport. */}
        <div className="cm:hidden">
          <div
            className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory/95 backdrop-blur-sm transition-transform duration-300 ease-out-quiet ${
              inView ? "translate-y-0" : "translate-y-full pointer-events-none"
            }`}
          >
            <button
              type="button"
              onClick={() => setSheetOpen((v) => !v)}
              aria-expanded={sheetOpen}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
            >
              <span>
                <span className="block text-xs uppercase tracking-wide text-ink/65">
                  {unlockedCount} reward{unlockedCount === 1 ? "" : "s"} ·{" "}
                  {JOURNEY.totalLabel}
                </span>
                <span className="tnum font-fraunces text-2xl text-ink">
                  {usd(total)}
                </span>
              </span>
              <span className="rounded-pill border border-line px-4 py-2 text-sm font-medium text-ink/70">
                {sheetOpen ? "Hide" : "See all"}
              </span>
            </button>
            <AnimatePresence>
              {sheetOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="max-h-[55vh] overflow-y-auto px-5 pb-4 pt-1">
                    <RewardStack
                      committed={committed}
                      reachedTarget={reachedTarget}
                      hqlBurst={hqlBurst}
                    />
                    <p className="mt-3 text-xs italic text-ink/55">
                      {JOURNEY.earningsNote}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* spacer so the fixed bar never covers the disclaimer */}
          <div className="h-24" aria-hidden />
        </div>
      </div>
    </MotionConfig>
  );
}
