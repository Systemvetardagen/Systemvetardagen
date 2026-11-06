// Opening hours are inherited from 2026 and need confirmation for 2027.
// Explicit Stockholm winter offsets keep every visitor's countdown consistent.
export const FAIR_START = new Date("2027-02-17T10:00:00+01:00");
export const FAIR_END = new Date("2027-02-17T16:00:00+01:00");
export const DAY_AFTER_FAIR = new Date("2027-02-18T00:00:00+01:00");

export function getFairState(now: number = Date.now()) {
  if (now < FAIR_START.getTime()) return "upcoming";
  if (now < FAIR_END.getTime()) return "ongoing";
  if (now < DAY_AFTER_FAIR.getTime()) return "evening";
  return "ended";
}

export function getTimeUntilFair(now: number = Date.now()) {
  const difference = Math.max(0, FAIR_START.getTime() - now);
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}
