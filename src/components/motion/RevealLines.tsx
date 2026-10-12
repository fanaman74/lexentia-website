"use client";

import { useLayoutEffect, useRef, type ElementType } from "react";
import { gsap } from "./gsap";
import { duration, ease, prefersReducedMotion } from "@/lib/motion";

type Props = {
  lines: string[];
  as?: ElementType;
  className?: string;
  id?: string;
};

/**
 * Heading revealed line by line through a clipped mask. Lines are authored,
 * not split at runtime, so the accessible name is simply the full sentence.
 */
export function RevealLines({ lines, as: Tag = "h2", className, id }: Props) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".line-inner",
        { yPercent: 105 },
        {
          yPercent: 0,
          duration: duration.slow,
          ease: ease.editorial,
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <Tag ref={ref} className={className} id={id}>
      {lines.map((line, i) => (
        <span key={i} className="line-mask">
          <span className="line-inner">{line}</span>
          {i < lines.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
