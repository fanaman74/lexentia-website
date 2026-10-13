/** Small geometric wing marks, animated as a distant flock rather than foreground figures. */
export function FlyingBirds({ running, hero = false }: { running: boolean; hero?: boolean }) {
  return <div className={`flying-birds ${hero ? "flying-birds-hero" : ""}`} data-running={running} aria-hidden="true">
    {[0, 1, 2].map(bird => <div key={bird} className={`sky-bird sky-bird-${bird + 1}`}>
      <svg viewBox="0 0 32 16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path className="bird-wing bird-wing-left" d="M16 12Q10 3 2 5" />
        <path className="bird-wing bird-wing-right" d="M16 12Q22 3 30 5" />
      </svg>
    </div>)}
  </div>;
}
