"use client";

import { useEffect, useRef, useState } from "react";

/** One lifecycle for decorative motion: user choice, viewport, tab and OS preference. */
export function useAnimationState() {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduced(media.matches);
    const updateTab = () => setTabVisible(!document.hidden);
    updatePreference();
    updateTab();
    media.addEventListener("change", updatePreference);
    document.addEventListener("visibilitychange", updateTab);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.01 });
    const element = ref.current;
    if (element) observer.observe(element);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", updatePreference);
      document.removeEventListener("visibilitychange", updateTab);
    };
  }, []);

  return { ref, paused, setPaused, reduced, running: visible && tabVisible && !paused && !reduced };
}
