"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "./gsap";
import { distance, ease, prefersReducedMotion } from "@/lib/motion";

type Item = { period: string; title: string; detail?: string };

/** Profile timeline: the line draws as it enters, items rise 14px with a 0.08s stagger. */
export function Timeline({ items }: { items: Item[] }) {
  const ref = useRef<HTMLOListElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 85%", once: true } });
      tl.fromTo("[data-line]", { scaleY: 0 }, { scaleY: 1, duration: 0.9, ease: ease.soft }, 0);
      tl.fromTo(
        "[data-item]",
        { autoAlpha: 0, y: distance.timeline },
        { autoAlpha: 1, y: 0, duration: 0.55, ease: ease.smooth, stagger: 0.08 },
        0.1,
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <ol ref={ref} className="relative space-y-7 pl-7">
      <span aria-hidden data-line className="absolute left-0 top-2 bottom-2 w-px origin-top bg-[var(--color-line-strong)]" />
      {items.map((item) => (
        <li key={item.period + item.title} data-item className="relative">
          <span aria-hidden className="absolute -left-7 top-[0.55rem] h-px w-4 bg-[var(--color-line-strong)]" />
          <p className="meta text-[var(--color-ink-soft)]">{item.period}</p>
          <p className="mt-1 text-lg font-medium">{item.title}</p>
          {item.detail ? <p className="mt-1 text-[var(--color-ink-soft)]">{item.detail}</p> : null}
        </li>
      ))}
    </ol>
  );
}
