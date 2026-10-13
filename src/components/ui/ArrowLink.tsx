import Link from "next/link";
import { Icon } from "./Icon";
import type { ReactNode } from "react";

export function ArrowLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`group inline-flex min-h-11 items-center gap-2 font-medium ${className}`}>
      <span className="link-underline">{children}</span>
      <Icon name="arrow" size={18} className="arrow" />
    </Link>
  );
}
