"use client";

import { FlyingBirds } from "./FlyingBirds";
import { useAnimationState } from "./useAnimationState";

/** CSS starts the flock on card hover/focus; this gate stops it offscreen or in hidden tabs. */
export function SituationBirds() {
  const { ref, running } = useAnimationState();
  return <div ref={ref} className="situation-birds"><FlyingBirds running={running} /></div>;
}
