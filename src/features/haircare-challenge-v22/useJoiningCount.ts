import { useEffect, useState } from "react";

// Joining-count ramp: from Monday 12:00 WITA (1222) to Sunday 24:00 WITA (2593).
// WITA = UTC+8 (fixed, no DST). Updates each hour.
const START = 1222;
const END = 2593;
const START_HOUR = 12;              // Monday 12:00 WITA
const TOTAL_HOURS = 7 * 24 - START_HOUR; // 156h until Sunday 24:00 WITA

// Total spots per cohort (used for scarcity progress meter in Hero).
export const COHORT_CAPACITY = 3000;

export function computeJoiningCount(now: number = Date.now()): number {
  const d = new Date(now + 8 * 3600_000); // shift UTC -> WITA wall clock
  const witaDay = (d.getUTCDay() + 6) % 7; // Mon=0 .. Sun=6
  const witaHour = d.getUTCHours();
  const hoursSinceMonday = witaDay * 24 + witaHour;
  if (hoursSinceMonday < START_HOUR) return START;
  const t = Math.min(1, (hoursSinceMonday - START_HOUR) / TOTAL_HOURS);
  return Math.floor(START + t * (END - START));
}

export function formatJoiningCount(n: number): string {
  return n.toLocaleString("en-US");
}

export function useJoiningCount(): number {
  const [n, setN] = useState<number>(() => START);
  useEffect(() => {
    setN(computeJoiningCount());
    const id = setInterval(() => setN(computeJoiningCount()), 60_000);
    return () => clearInterval(id);
  }, []);
  return n;
}

// Shared "live bump" so Hero, StickyCta, WhatsIncluded and FinalCta
// all display the SAME joining count (base + live bumps).
let liveBump = 0;
const bumpListeners = new Set<(n: number) => void>();
let tickerStarted = false;

function startTicker() {
  if (tickerStarted || typeof window === "undefined") return;
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;
  tickerStarted = true;
  const schedule = () => {
    // v22: more visible cadence for the sticky-bar gamification (every 6–10s).
    const delay = 6000 + Math.random() * 4000;
    setTimeout(() => {
      liveBump += 1;
      bumpListeners.forEach((l) => l(liveBump));
      schedule();
    }, delay);
  };
  schedule();
}

export function useLiveJoiningCount(): number {
  const base = useJoiningCount();
  const [bump, setBump] = useState<number>(liveBump);
  useEffect(() => {
    startTicker();
    bumpListeners.add(setBump);
    setBump(liveBump);
    return () => { bumpListeners.delete(setBump); };
  }, []);
  // Reset bump when base advances (every minute the base may tick up).
  useEffect(() => {
    liveBump = 0;
    bumpListeners.forEach((l) => l(0));
  }, [base]);
  return base + bump;
}