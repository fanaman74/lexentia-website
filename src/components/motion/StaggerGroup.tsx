"use client";

import { useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "./gsap";
import { distance, duration, ease, prefersReducedMotion } from "@/lib/motion";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  id?: string;
  stagger?: number;
  revealEach?: boolean;
};

/** Reveals every `[data-stagger]` descendant in sequence as the group scrolls in. */
export function StaggerGroup({ children, as: Tag = "div", className, id, stagger = 0.1, revealEach = false }: Props) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-stagger]", el);
      if (revealEach) {
        // Each card waits for its own viewport entry, including lower mobile rows.
        items.forEach(item => gsap.fromTo(item,
          { autoAlpha: 0, y: distance.card },
          {
            autoAlpha: 1,
            y: 0,
            duration: duration.base,
            ease: ease.smooth,
            scrollTrigger: { trigger: item, start: "top 85%", once: true },
          },
        ));
        return;
      }
      // Keep mobile calm: at most three items animate together (brief §40).
      const step = window.innerWidth < 768 ? Math.min(stagger, 0.08) : stagger;
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: distance.card },
        {
          autoAlpha: 1,
          y: 0,
          duration: duration.base,
          ease: ease.smooth,
          stagger: step,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [stagger, revealEach]);

  return (
    <Tag ref={ref} id={id} className={className}>
      {children}
    </Tag>
  );
}
