"use client";

import { useEffect, useState } from "react";

/**
 * Sticky in-page navigation. The active item follows the section in view;
 * links remain plain anchors so it works without JavaScript.
 */
export function SubNav({ items, label }: { items: { id: string; label: string }[]; label: string }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label={label} className="sticky top-[78px] z-30 border-y border-[var(--color-line)] bg-[var(--color-paper)]">
      <ul className="mx-auto flex max-w-[1192px] gap-6 overflow-x-auto px-6 text-sm whitespace-nowrap  [scrollbar-width:none]">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              className={`inline-flex min-h-12 items-center border-b-2 transition-colors ${
                active === item.id
                  ? "border-[var(--color-forest)] text-[var(--color-ink)]"
                  : "border-transparent text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
