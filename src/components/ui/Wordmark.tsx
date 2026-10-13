"use client";

import { useId } from "react";
import { useAnimationState } from "@/components/motion/useAnimationState";

// SVG reconstruction of the user-supplied Lexentia brand mark.
const pixels = [
  { x: 157, y: 1, color: "#efa93a" },
  { x: 151, y: 7, color: "#8daf66" },
  { x: 157, y: 7, color: "#008d91" },
  { x: 145, y: 13, color: "#72529b" },
  { x: 151, y: 13, color: "#658e8a" },
  { x: 139, y: 19, color: "#8064a6" },
  { x: 145, y: 19, color: "#99b273" },
  { x: 151, y: 19, color: "#72529b" },
];

export function Wordmark({ className = "" }: { className?: string }) {
  const { ref, running } = useAnimationState();
  const inkId = `lexentia-wordmark-${useId()}`;
  return <div ref={ref} className={`wordmark-brand ${className}`} data-running={running}>
    <svg width="166" height="52" viewBox="0 0 180 60" role="img" aria-label="Lexentia — Avocats · Attorneys at Law">
      <defs><linearGradient id={inkId} x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#008c90" /><stop offset="34%" stopColor="#008c90" /><stop offset="75%" stopColor="#77549c" /><stop offset="100%" stopColor="#77549c" /></linearGradient></defs>
      <text x="0" y="45" fontFamily="Georgia, 'Times New Roman', serif" fontSize="43" letterSpacing="-1.5" textLength="172" lengthAdjust="spacingAndGlyphs" fill={`url(#${inkId})`}>Lexentıa</text>
      <text x="2" y="58" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="600" letterSpacing="0.7" textLength="169" lengthAdjust="spacingAndGlyphs" fill="#77549c">AVOCATS - ATTORNEYS AT LAW</text>
      {pixels.map((pixel, index) => <rect key={`${pixel.x}-${pixel.y}`} x={pixel.x} y={pixel.y} width="4.5" height="4.5" fill={pixel.color} className="logo-pixel" style={{ animationDelay: `${index * 90}ms` }} />)}
    </svg>
  </div>;
}
