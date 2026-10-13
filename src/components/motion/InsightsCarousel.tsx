"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import Link from "next/link";
import type { Dictionary, Insight } from "@/content";
import { courtLabel } from "@/content/court-rulings";
import { insightCategories } from "@/content/insights";
import { formatDate } from "@/lib/format";
import { pathFor, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";
import { useAnimationState } from "./useAnimationState";

export function InsightsCarousel({ items, locale, dict, title, archiveHref }: { items: Insight[]; locale: Locale; dict: Dictionary; title: string; archiveHref: string }) {
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [resetting, setResetting] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const { ref, paused, setPaused, reduced, running } = useAnimationState();
  const pointer = useRef<{ id: number; x: number; y: number; delta: number; horizontal: boolean } | null>(null);
  const suppressClickUntil = useRef(0);
  const viewport = useRef<HTMLDivElement>(null);
  const fr = locale === "fr";
  const slideWidth = () => viewport.current?.querySelector<HTMLElement>(".insights-carousel-track")?.clientWidth || 500;
  const dragProgress = Math.min(1, Math.abs(dragX) / slideWidth());
  const logicalIndex = index % items.length;
  const autoplay = running && !hovered && !focused && !dragging && !resetting;
  const slides = [...items, items[0]];
  const previous = fr ? "Analyse précédente" : "Previous insight";
  const next = fr ? "Analyse suivante" : "Next insight";
  const go = (target: number) => setIndex(Math.max(0, Math.min(items.length, target)));

  // An identical leading card at the end lets each cycle keep moving left.
  useEffect(() => {
    if (index !== items.length) return;
    const timer = window.setTimeout(() => {
      setResetting(true);
      setIndex(0);
    }, reduced ? 0 : 800);
    return () => clearTimeout(timer);
  }, [index, items.length, reduced]);

  useEffect(() => {
    if (!autoplay || index >= items.length) return;
    const timer = window.setTimeout(() => setIndex(value => value + 1), 6500);
    return () => clearTimeout(timer);
  }, [autoplay, index, items.length]);

  // Keep the identical first card in place while removing the clone without motion.
  useEffect(() => {
    if (!resetting) return;
    let secondFrame = 0;
    const frame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => setResetting(false));
    });
    return () => { cancelAnimationFrame(frame); cancelAnimationFrame(secondFrame); };
  }, [resetting]);
  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || index >= items.length) return;
    suppressClickUntil.current = 0;
    setDragging(true);
    pointer.current = { id: event.pointerId, x: event.clientX, y: event.clientY, delta: 0, horizontal: false };
  };
  const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
    const start = pointer.current;
    if (!start || start.id !== event.pointerId) return;
    const delta = event.clientX - start.x;
    if (!start.horizontal && Math.abs(delta) > 8 && Math.abs(delta) > Math.abs(event.clientY - start.y)) {
      start.horizontal = true;
      viewport.current?.setPointerCapture(event.pointerId);
    }
    if (!start.horizontal) return;
    start.delta = delta;
    suppressClickUntil.current = performance.now() + 350;
    const atEdge = index === 0 && delta > 0;
    const width = slideWidth();
    setDragX(Math.max(-width, Math.min(width, delta * (atEdge ? 0.2 : 1))));
  };
  const endDrag = (event: PointerEvent<HTMLDivElement>, cancelled = false) => {
    const start = pointer.current;
    if (!start || start.id !== event.pointerId) return;
    if (!cancelled && start.horizontal && Math.abs(start.delta) > 45) go(index + (start.delta < 0 ? 1 : -1));
    if (viewport.current?.hasPointerCapture(event.pointerId)) viewport.current.releasePointerCapture(event.pointerId);
    pointer.current = null;
    setDragging(false);
    setDragX(0);
  };

  return <div ref={ref} className="insights-carousel" role="region" aria-roledescription="carousel" aria-labelledby="insights-title" data-autoplay={autoplay} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
    <div className="insights-carousel-copy">
      <h2 id="insights-title" className="display text-h2">{title}</h2>
      <p className="mt-6 max-w-[37ch] leading-relaxed text-[var(--color-ink-soft)]">{fr ? "Les dernières décisions de la Cour de justice et du Tribunal de l’Union européenne." : "The latest Court of Justice and General Court rulings."}</p>
      <div className="insights-carousel-navigation mt-7">
        <button type="button" aria-label={previous} aria-controls="insights-carousel-slides" disabled={logicalIndex === 0} onClick={() => go(index - 1)} className="carousel-arrow"><Icon name="arrow" size={19} className="rotate-180" /></button>
        <button type="button" aria-label={next} aria-controls="insights-carousel-slides" disabled={index >= items.length} onClick={() => go(index + 1)} className="carousel-arrow"><Icon name="arrow" size={19} /></button>
        <span className="meta text-[var(--color-ink-soft)]" role="status" aria-live={autoplay ? "off" : "polite"} aria-atomic="true">{logicalIndex + 1} / {items.length}</span>
        {!reduced ? <button type="button" className="carousel-arrow" aria-label={fr ? paused ? "Reprendre le défilement automatique" : "Mettre le défilement automatique en pause" : paused ? "Resume automatic scrolling" : "Pause automatic scrolling"} aria-pressed={paused} onClick={() => setPaused(!paused)}><Icon name={paused ? "play" : "pause"} size={17} /></button> : null}
      </div>
      <Link href={archiveHref} className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm link-underline">{dict.common.allNews}<Icon name="arrow" size={17} /></Link>
    </div>
    <div ref={viewport} id="insights-carousel-slides" className="insights-carousel-viewport" onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={event => endDrag(event)} onPointerCancel={event => endDrag(event, true)} onClickCapture={event => { if (performance.now() < suppressClickUntil.current) { event.preventDefault(); event.stopPropagation(); suppressClickUntil.current = 0; } }} onDragStart={event => event.preventDefault()}>
      <div className={`insights-carousel-track ${dragX ? "is-dragging" : ""} ${resetting ? "is-resetting" : ""}`} style={{ transform: `translate3d(calc(-${index} * (100% + 24px) + ${dragX}px), 0, 0)` }}>
        {slides.map((item, slide) => <article key={`${item.slug}-${slide}`} className="insights-carousel-card" style={{ opacity: slide === index ? 1 - dragProgress : dragX && slide === index + (dragX < 0 ? 1 : -1) ? dragProgress : 0 }} role="group" aria-roledescription={fr ? "diapositive" : "slide"} aria-label={`${slide % items.length + 1} / ${items.length}`} aria-hidden={slide !== index} inert={slide !== index}>
          <p className="meta text-[var(--color-ink-soft)]">{item.courtRecord ? `${item.courtRecord.caseNumber} · ` : ""}<time dateTime={item.publishedAt}>{formatDate(item.publishedAt, locale)}</time></p>
          <h3 lang={item.language} className="display mt-3">{item.title}</h3>
          {item.excerpt ? <p lang={item.courtRecord ? "en" : undefined} className="mt-5 leading-relaxed text-[var(--color-ink-soft)]">{item.excerpt[locale]}</p> : null}
          <p className="meta mt-5 text-[var(--color-purple)]">{item.courtRecord ? courtLabel(item.courtRecord.court, locale) : insightCategories[item.categories[0]][locale]}</p>
          <Link href={pathFor(locale, { key: "insight", slug: item.slug })} className="btn btn-secondary group mt-7 self-start">{item.courtRecord ? (fr ? "Consulter la décision" : "Explore this ruling") : dict.common.readMore}<Icon name="arrow" size={17} className="arrow" /></Link>
        </article>)}
      </div>
    </div>
  </div>;
}
