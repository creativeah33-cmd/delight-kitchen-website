import { useEffect, useState } from "react";
import { SITE } from "@/data/site";

/**
 * Returns the current time-of-day segment + a related message.
 * Used by the Hero to greet visitors appropriately.
 */
export type Segment = "morning" | "midday" | "afternoon" | "late";

export function useTimeOfDay() {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);

  const h = now.getHours();
  const seg: Segment =
    h < 9 ? "morning" : h < 13 ? "midday" : h < 16 ? "afternoon" : "late";

  return {
    now,
    segment: seg,
    message: SITE.mottoes[seg],
  };
}
