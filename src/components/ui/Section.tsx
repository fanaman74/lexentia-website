import { Reveal } from "@/components/motion/Reveal";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "paper" | "warm" | "forest" | "cream";
  labelledBy?: string;
};

const tones = {
  paper: "bg-[var(--color-paper)] text-[var(--color-ink)]",
  warm: "bg-[var(--color-paper-warm)] text-[var(--color-ink)]",
  cream: "bg-[var(--color-cream)] text-[var(--color-ink)]",
  forest: "on-dark bg-[var(--color-forest)] text-[var(--color-cream)]",
};

export function Section({ children, className = "", id, tone = "paper", labelledBy }: Props) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} site-section ${className}`}>
      <Reveal className="section-inner" y={18}>{children}</Reveal>
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

/** Section label with a hairline rule, used to open most sections. */
export function SectionLabel({ index, children, dark = false }: { index?: string; children: ReactNode; dark?: boolean }) {
  return (
    <div className={`flex items-baseline gap-4 border-t pt-4 ${dark ? "border-[var(--color-line-dark)]" : "border-[var(--color-line)]"}`}>
      <p className="eyebrow">{children}</p>
    </div>
  );
}
