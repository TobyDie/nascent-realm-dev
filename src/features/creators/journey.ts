// Shared reward logic for Build Your Journey (Surface A §S4) and the dashboard's
// "Your next milestone" module (Surface C Home), so both stay in lockstep (Doc 11 §8).

export const COMMISSION_PER_SALE = 18.5;
export const VIEWS_TARGET = 100_000;
export const POST_BASELINE = 5;

export const GIFT_PASS_VALUE = 37; // a Better Hair Challenge
export const HQL_VALUE = 997;

export interface JourneyInput {
  posted: number; // videos posted
  views: number; // cumulative organic views
  sales: number; // sales per month
}

export interface RewardState {
  founding: boolean;
  giftPass: boolean;
  hqlDraw: boolean;
  merely: boolean;
  hql: boolean;
}

export function rewardState({ posted, views }: JourneyInput): RewardState {
  const fiveDone = posted >= POST_BASELINE;
  return {
    founding: posted >= 1,
    giftPass: fiveDone,
    hqlDraw: fiveDone,
    merely: fiveDone,
    hql: views >= VIEWS_TARGET,
  };
}

export function monthlyEarnings(sales: number): number {
  return sales * COMMISSION_PER_SALE;
}

export function yearlyEarnings(sales: number): number {
  return monthlyEarnings(sales) * 12;
}

/**
 * TOTAL REWARD VALUE = product rewards only (Doc 13). Commission earnings are NOT
 * a reward and never enter this sum. The gift pass ($37) counts once the creator
 * commits to posting; Hairqare Lab ($997) counts once 100k views is reached.
 * Draw entry, Merely priority, and founding status carry no dollar value.
 */
export function totalRewardValue(committed: boolean, views: number): number {
  return (
    (committed ? GIFT_PASS_VALUE : 0) + (views >= VIEWS_TARGET ? HQL_VALUE : 0)
  );
}

export const usd = (n: number, cents = false) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: cents ? 2 : 0,
  }).format(n);
