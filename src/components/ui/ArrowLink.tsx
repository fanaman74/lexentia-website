import Link from "next/link";
import type { ReactNode } from "react";

export function ArrowLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`group inline-flex min-h-11 items-center gap-2 font-medium ${className}`}>
      <span className="link-underline">{children}</span>
      <span aria-hidden className="arrow">→</span>
    </Link>
  );
}
