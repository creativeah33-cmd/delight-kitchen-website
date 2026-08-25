import { useEffect, useState } from "react";
import { HOURS } from "@/data/site";

/**
 * Computes "Open Now / Closes at [time]" using Europe/London timezone.
 * Exports a hook and a pure component.
 */
export function useOpenNow() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  // Get current time in London
  const londonTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now);

  const londonDay = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    weekday: "long",
  }).format(now);

  const dayIndex = HOURS.findIndex(
    (h) => h.day.toLowerCase() === londonDay.toLowerCase(),
  );
  const today = dayIndex >= 0 ? HOURS[dayIndex] : HOURS[0];

  const [hh, mm] = londonTime.split(":").map(Number);
  const currentMinutes = hh * 60 + mm;

  const [oH, oM] = today.open.split(":").map(Number);
  const [cH, cM] = today.close.split(":").map(Number);
  const openMinutes = oH * 60 + oM;
  const closeMinutes = cH * 60 + cM;

  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  return {
    isOpen,
    today,
    closesAt: today.close,
    opensAt: today.open,
    londonTime,
    dayName: today.day,
  };
}
