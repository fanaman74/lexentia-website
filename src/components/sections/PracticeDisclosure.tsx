"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";

/** Native disclosures also open when reached through a URL fragment. */
export function PracticeDisclosure({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const openTarget = () => {
      const element = ref.current;
      if (!element || !window.location.hash) return;
      let target: HTMLElement | null = null;
      try { target = document.getElementById(decodeURIComponent(window.location.hash.slice(1))); } catch { return; }
      if (!target || (target !== element && !element.contains(target))) return;
      element.open = true;
      requestAnimationFrame(() => target.scrollIntoView({ block: "start", behavior: "instant" }));
    };
    openTarget();
    window.addEventListener("hashchange", openTarget);
    window.addEventListener("popstate", openTarget);
    return () => {
      window.removeEventListener("hashchange", openTarget);
      window.removeEventListener("popstate", openTarget);
    };
  }, [id]);

  return <details ref={ref} id={id} className="practice-disclosure">
    <summary>
      <h2 className="display text-h3">{title}</h2>
      <Icon name="chevron" size={22} />
    </summary>
    <div className="practice-disclosure-body">{children}</div>
  </details>;
}
