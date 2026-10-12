"use client";

import { useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "./gsap";
import { distance, duration, ease, prefersReducedMotion } from "@/lib/motion";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  stagger?: number;
};

/** Reveals every `[data-stagger]` descendant in sequence as the group scrolls in. */
export function StaggerGroup({ children, as: Tag = "div", className, stagger = 0.1 }: Props) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-stagger]", el);
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
  }, [stagger]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
