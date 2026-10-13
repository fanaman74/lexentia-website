"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";
import { useAnimationState } from "./useAnimationState";

type Props = { children: ReactNode; locale: Locale; title: string; archiveHref: string; archiveLabel: string };

/** EU JUST's flowing wave, once-on-entry scan, card reveal and replay controls. */
export function AnimatedInsights({ children, locale, title, archiveHref, archiveLabel }: Props) {
  const { ref, paused, setPaused, reduced, running } = useAnimationState();
  const [started, setStarted] = useState(false);
  const [replay, setReplay] = useState(0);

  useEffect(() => { if (running) setStarted(true); }, [running]);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const resize = new ResizeObserver(() => element.style.setProperty("--scan-distance", `${element.offsetHeight}px`));
    resize.observe(element);
    return () => resize.disconnect();
  }, [ref]);

  const labels = locale === "fr"
    ? { pause: "Mettre l’animation en pause", resume: "Reprendre l’animation", replay: "Rejouer la mise en lumière" }
    : { pause: "Pause section animation", resume: "Resume section animation", replay: "Replay card highlight" };

  return <section aria-labelledby="insights-title" className="on-dark site-section analysis-section">
    <div ref={ref} className="analysis-motion-surface" data-running={running} data-started={started && !reduced} data-paused={paused}>
      <div className="analysis-wave-edge" aria-hidden="true"><svg viewBox="0 0 2880 74" preserveAspectRatio="none" className="analysis-wave"><path d="M0 46C171 46 209 30 380 30C533 30 567 50 720 50C873 50 907 36 1060 36C1231 36 1269 46 1440 46C1611 46 1649 30 1820 30C1973 30 2007 50 2160 50C2313 50 2347 36 2500 36C2671 36 2709 46 2880 46L2880 74H0Z" fill="currentColor" /></svg></div>
      <div key={`scan-${replay}`} className="analysis-scan-stage" aria-hidden="true"><div className="analysis-sonar" /></div>
      <div className="section-inner relative z-[1]">
        <div className="section-heading"><h2 id="insights-title" className="display text-h2 max-w-[20ch]">{title}</h2><Link href={archiveHref} className="group inline-flex min-h-11 items-center gap-3 text-sm font-medium text-[var(--color-sage)]"><span className="link-underline">{archiveLabel}</span><Icon name="arrow" size={18} className="arrow" /></Link></div>
        {!reduced ? <div className="analysis-motion-controls mb-8"><button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? labels.resume : labels.pause}</button><button type="button" disabled={paused} onClick={() => { setStarted(true); setReplay(replay + 1); }}>{labels.replay}</button></div> : null}
        <div key={`cards-${replay}`} className="analysis-grid grid gap-5 md:grid-cols-3">{children}</div>
      </div>
    </div>
  </section>;
}
