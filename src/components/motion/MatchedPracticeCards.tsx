"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

/** Keep each homepage practice card the same height as its corresponding team card. */
export function MatchedPracticeCards({ children, locale }: { children: ReactNode; locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const practice = Array.from(ref.current?.querySelectorAll<HTMLElement>(".practice-panel") ?? []);
    const team = Array.from(document.querySelectorAll<HTMLElement>(".home-team-grid > article"));
    const match = () => team.forEach((card, i) => {
      const height = card.getBoundingClientRect().height;
      if (height > 0) practice[i]?.style.setProperty("--matched-team-height", `${height}px`);
    });
    match();
    const observer = new ResizeObserver(match);
    team.forEach(card => observer.observe(card));
    return () => {
      observer.disconnect();
      practice.forEach(card => card.style.removeProperty("--matched-team-height"));
    };
  }, [locale]);
  return <div ref={ref}>{children}</div>;
}
