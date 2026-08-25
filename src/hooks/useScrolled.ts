import { useEffect, useState } from "react";

/**
 * Adds/removes a class on the document body when the user scrolls past a
 * threshold. Used to give the header a subtle "condensed" treatment on
 * long scrolls.
 */
export function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}
