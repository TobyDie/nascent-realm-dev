import { useEffect, useState } from "react";

/* Dynamic challenge start date.
   Logic mirrors the marketing rule (Pacific time, with an 8PM cutoff that
   rolls to the next cohort day). Runs client-side after paint via useEffect,
   so it never blocks or slows the initial render. Components fall back to the
   existing hard-coded copy until the effect resolves (no hydration mismatch). */

const DAYS_FULL = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const DAYS_ABBR = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function ordinal(day: number): string {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

function computeStartDate(): Date {
  const now = new Date();
  const pacificString = now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
  const pacificTime = new Date(pacificString);
  const currentHour = pacificTime.getHours();
  const currentDay = pacificTime.getDay(); // 0=Sunday
  const target = new Date(pacificTime);

  if (currentHour >= 20) {
    // After 8PM — apply tomorrow's rule
    const tomorrow = (currentDay + 1) % 7;
    switch (tomorrow) {
      case 0: target.setDate(target.getDate() + 1); break; // Sun -> Sun
      case 1: target.setDate(target.getDate() + 1); break; // Mon -> Mon
      case 2: target.setDate(target.getDate() + 2); break; // Tue -> Wed
      case 3: target.setDate(target.getDate() + 3); break; // Wed -> Fri
      case 4: target.setDate(target.getDate() + 4); break; // Thu -> Sun
      case 5: target.setDate(target.getDate() + 3); break; // Fri -> Sun
      case 6: target.setDate(target.getDate() + 2); break; // Sat -> Sun
    }
  } else {
    // Before 8PM — apply today's rule
    switch (currentDay) {
      case 0: break; // Sun -> Sun
      case 1: if (currentHour >= 12) target.setDate(target.getDate() + 2); break; // Mon: noon+ -> Wed
      case 2: target.setDate(target.getDate() + 1); break; // Tue -> Wed
      case 3: target.setDate(target.getDate() + 2); break; // Wed -> Fri
      case 4: target.setDate(target.getDate() + 3); break; // Thu -> Sun
      case 5: target.setDate(target.getDate() + 2); break; // Fri -> Sun
      case 6: target.setDate(target.getDate() + 1); break; // Sat -> Sun
    }
  }
  return target;
}

/* Formatters matching the formats already used on the page (no year, no "!"). */
export const fmtShort = (d: Date) => `${DAYS_ABBR[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}${ordinal(d.getDate())}`; // "Fri, June 6th"
export const fmtLongDay = (d: Date) => `${DAYS_FULL[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}${ordinal(d.getDate())}`; // "Friday, June 6th"
export const fmtMonthDay = (d: Date) => `${MONTHS[d.getMonth()]} ${d.getDate()}${ordinal(d.getDate())}`; // "June 6th"

export function useStartDate(): Date | null {
  const [date, setDate] = useState<Date | null>(null);
  useEffect(() => {
    setDate(computeStartDate());
    // Re-evaluate if the tab is left open across the 8PM/midnight boundary.
    const id = window.setInterval(() => setDate(computeStartDate()), 60 * 60 * 1000);
    return () => window.clearInterval(id);
  }, []);
  return date;
}
