"use client";

import { useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "./gsap";
import { distance, duration, ease, prefersReducedMotion } from "@/lib/motion";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
  seconds?: number;
};

/** Fades content up once as it enters the viewport. Visible without JS. */
export function Reveal({ children, as: Tag = "div", className, delay = 0, y = distance.reveal, seconds = duration.base + 0.15 }: Props) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          delay,
          duration: seconds,
          ease: ease.smooth,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [delay, y, seconds]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
