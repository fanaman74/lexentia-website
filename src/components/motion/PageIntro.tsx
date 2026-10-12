"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "./gsap";
import { duration, ease, prefersReducedMotion } from "@/lib/motion";

/**
 * Load sequence for a page hero (brief §6.2): label, headline lines, body,
 * CTAs, then image, all within ~1.2 s. Children mark their role with
 * data-intro="label|line|body|cta|image". Without JS (or with reduced motion)
 * everything is simply visible.
 */
export function PageIntro({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    const done = () => document.documentElement.classList.add("intro-done");
    if (!root || prefersReducedMotion()) {
      done();
      return;
    }
    const q = (role: string) => root.querySelectorAll<HTMLElement>(`[data-intro="${role}"]`);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: ease.smooth }, onComplete: done });
      tl.fromTo(q("label"), { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: duration.fast }, 0);
      q("line").forEach((line, i) => {
        const inner = line.querySelector(".line-inner");
        tl.set(line, { autoAlpha: 1 }, 0);
        if (inner) tl.fromTo(inner, { yPercent: 105 }, { yPercent: 0, duration: 0.75, ease: ease.editorial }, 0.1 + i * 0.08);
      });
      tl.fromTo(q("body"), { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: duration.base }, 0.32);
      tl.fromTo(q("cta"), { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: duration.base, stagger: 0.05 }, 0.4);
      tl.fromTo(
        q("image"),
        { autoAlpha: 1, clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 0.75, ease: ease.editorial },
        0.45,
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
