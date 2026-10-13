"use client";

import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";
import { FlyingBirds } from "./FlyingBirds";
import { useAnimationState } from "./useAnimationState";

export function PracticeImage({ european, locale }: { european: boolean; locale: Locale }) {
  const { ref, paused, setPaused, reduced, running } = useAnimationState();
  const label = locale === "fr"
    ? paused ? "Reprendre le vol des oiseaux" : "Mettre le vol des oiseaux en pause"
    : paused ? "Resume flying birds" : "Pause flying birds";
  return <div ref={ref} className="practice-art">
    <Image src={european ? "/images/practice-european-institutions.png" : "/images/practice-brussels-private-law.png"} alt="" fill sizes="(min-width: 768px) 560px, 100vw" className="object-contain object-bottom" />
    <FlyingBirds running={running} />
    {!reduced ? <button type="button" className="practice-motion-toggle" aria-label={label} aria-pressed={paused} onClick={() => setPaused(!paused)}><Icon name={paused ? "play" : "pause"} size={15} /></button> : null}
  </div>;
}
