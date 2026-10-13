"use client";

import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";
import { useAnimationState } from "./useAnimationState";

export function BrusselsHero({ locale }: { locale: Locale }) {
  const { ref, paused, setPaused, reduced, running } = useAnimationState();
  const pauseLabel = locale === "fr" ? "Mettre l’animation en pause" : "Pause animation";
  const playLabel = locale === "fr" ? "Reprendre l’animation" : "Resume animation";
  return <div ref={ref} className="brussels-hero" data-running={running}>
    <div className="brussels-art" aria-hidden="true">
      <Image src="/images/brussels-palace-of-justice.png" alt="" fill preload sizes="100vw" className="brussels-illustration" />
      <div className="brussels-light" />
      <div className="pedestrian-track pedestrian-track-one"><div className="pedestrian" /></div>
      <div className="pedestrian-track pedestrian-track-two"><div className="pedestrian" /></div>
      <div className="brussels-leaves">
        {Array.from({ length: 5 }, (_, index) => <svg key={index} className={`blowing-leaf blowing-leaf-${index + 1}`} viewBox="0 0 20 32" fill="none">
          <path d="M10 2C-1 10-1 21 10 28C21 21 21 10 10 2Z" fill={index % 2 ? "#d6edaa" : "#c2dc8e"} stroke="#9dab89" strokeWidth="0.8" />
          <path d="M10 8v23M10 16l-5-4M10 21l5-4" stroke="#9dab89" strokeWidth="0.8" />
        </svg>)}
      </div>
    </div>
    <div className="hero-art-caption">
      <span>{locale === "fr" ? "Palais de Justice · Bruxelles" : "Palace of Justice · Brussels"}</span>
      {!reduced ? <button type="button" className="hero-motion-toggle" aria-label={paused ? playLabel : pauseLabel} aria-pressed={paused} onClick={() => setPaused(!paused)}><Icon name={paused ? "play" : "pause"} size={16} /></button> : null}
    </div>
  </div>;
}
