export const ease = {
  smooth: "power3.out",
  editorial: "power4.out",
  soft: "power2.out",
};

export const duration = {
  fast: 0.35,
  base: 0.65,
  slow: 1.0,
};

export const distance = {
  reveal: 20,
  card: 16,
  timeline: 14,
};

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
