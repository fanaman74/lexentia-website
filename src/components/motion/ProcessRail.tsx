"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { pad } from "@/lib/format";

type Step = { title: string; body: string };

/**
 * Vertical process rail: a 1px line fills with scroll and the step nearest the
 * middle of the viewport is emphasised. No pinning; native scrolling throughout.
 */
export function ProcessRail({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-rail-fill]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 70%", end: "bottom 55%", scrub: 0.4 },
        },
      );
      const items = gsap.utils.toArray<HTMLElement>("[data-rail-item]");
      gsap.set(items, { opacity: 0.5 });
      items.forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 62%",
          end: "bottom 38%",
          onToggle: ({ isActive }) =>
            gsap.to(item, { opacity: isActive ? 1 : 0.5, duration: 0.35, overwrite: true }),
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <ol ref={ref} className="relative mt-14 space-y-12 pl-10 md:pl-14">
      <span aria-hidden className="absolute left-0 top-1 bottom-1 w-px bg-[var(--color-line-dark)]" />
      <span
        aria-hidden
        data-rail-fill
        className="absolute left-0 top-1 bottom-1 w-px origin-top bg-[var(--color-sage)]"
      />
      {steps.map((step, i) => (
        <li key={step.title} data-rail-item className="relative">
          <span
            aria-hidden
            className="absolute -left-10 top-2 h-2 w-2 -translate-x-[3.5px] rounded-full bg-[var(--color-sage)] md:-left-14"
          />
          <p className="meta text-[var(--color-sage)]">{pad(i + 1)}</p>
          <h3 className="display text-h3 mt-2">{step.title}</h3>
          <p className="mt-3 max-w-[52ch] text-lg leading-relaxed text-white/80">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
