"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { Dictionary } from "@/content";
import { href, type Locale } from "@/lib/i18n";

const destinations = [
  { page: "euCivilService", section: "career", image: "brussels-palace-of-justice.png" },
  { page: "euCivilService", section: "investigations", image: "landmark-cinquantenaire.png" },
  { page: "euCivilService", section: "medical", image: "landmark-atomium.png" },
  { page: "euCivilService", section: "career", image: "practice-european-institutions.png" },
  { page: "privateLaw", section: "business", image: "practice-brussels-private-law.png" },
  { page: "privateLaw", section: "private-international", image: "landmark-bruges-belfry.png" },
] as const;

export function SituationLinks({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const track = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ previous: false, next: true, first: 1, last: 2 });
  const fr = locale === "fr";

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => {
      const cards = Array.from(element.querySelectorAll<HTMLElement>(".situation-link"));
      const frame = element.getBoundingClientRect();
      const visible = cards.map((card, i) => ({ i, box: card.getBoundingClientRect() }))
        .filter(({ box }) => box.left < frame.right - 20 && box.right > frame.left + 20);
      setPosition({ previous: element.scrollLeft > 2, next: element.scrollLeft + element.clientWidth < element.scrollWidth - 2, first: (visible[0]?.i ?? 0) + 1, last: (visible.at(-1)?.i ?? 0) + 1 });
    };
    update();
    element.addEventListener("scroll", update, { passive: true });
    const resize = new ResizeObserver(update);
    resize.observe(element);
    return () => { element.removeEventListener("scroll", update); resize.disconnect(); };
  }, []);

  const move = (direction: number) => {
    const element = track.current;
    if (!element) return;
    const cards = element.querySelectorAll<HTMLElement>(".situation-link");
    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    element.scrollBy({ left: direction * step, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };

  return <div className="situation-browser">
    <div className="situation-copy">
      <h2 id="needs-title" className="display text-h2">{dict.home.needsTitle}</h2>
      <div className="situation-navigation">
        <button type="button" className="carousel-arrow" disabled={!position.previous} aria-controls="situation-links" aria-label={fr ? "Situations précédentes" : "Previous situations"} onClick={() => move(-1)}><Icon name="arrow" size={19} className="rotate-180" /></button>
        <button type="button" className="carousel-arrow" disabled={!position.next} aria-controls="situation-links" aria-label={fr ? "Situations suivantes" : "Next situations"} onClick={() => move(1)}><Icon name="arrow" size={19} /></button>
        <span className="meta text-[var(--color-ink-soft)]" role="status" aria-live="polite">{position.first}–{position.last} / {dict.home.needs.length}</span>
      </div>
    </div>
    <div ref={track} id="situation-links" className="situation-track">
      {dict.home.needs.map((need, i) => <Link key={need.title} href={href(locale, destinations[i].page, destinations[i].section)} className="situation-link">
        <div className={`situation-image situation-image-${i}`}><Image src={`/images/${destinations[i].image}`} alt="" fill sizes="(min-width: 1024px) 350px, (min-width: 768px) 45vw, 85vw" /></div>
        <h3 className="display">{need.title}</h3>
        <p>{need.body}</p>
        <span className="situation-action">{fr ? "Explorer" : "Explore"}<Icon name="arrow" size={18} /></span>
      </Link>)}
    </div>
  </div>;
}
