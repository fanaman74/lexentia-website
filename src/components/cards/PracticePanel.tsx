import Link from "next/link";
import type { PracticeArea } from "@/content";
import { pathFor, type Locale } from "@/lib/i18n";

/** Large expertise panel (brief §7): subtle scale, title shift and arrow on hover. */
export function PracticePanel({ area, locale, cta, index }: { area: PracticeArea; locale: Locale; cta: string; index: string }) {
  const url = pathFor(locale, { key: area.routeKey });
  const dark = area.id === "eu-civil-service";
  return (
    <article
      data-stagger
      className={`group relative isolate flex min-h-[30rem] flex-col overflow-hidden border p-7 transition-colors duration-300 md:p-10 ${
        dark
          ? "on-dark border-[var(--color-forest)] bg-[var(--color-forest)] text-[var(--color-cream)] hover:border-[var(--color-sage)]"
          : "border-[var(--color-line-strong)] bg-[var(--color-cream)] hover:border-[var(--color-ink)]"
      }`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 -z-10 transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.025] ${
          dark
            ? "bg-[radial-gradient(circle_at_85%_15%,rgba(159,175,159,0.22),transparent_55%)]"
            : "bg-[radial-gradient(circle_at_85%_15%,rgba(164,121,79,0.12),transparent_55%)]"
        }`}
      />
      <p className="meta relative tabular-nums opacity-70">{index}</p>
      <h3 className="display text-h3 mt-auto max-w-[16ch] pt-16">
        <Link href={url} className="after:absolute after:inset-0">
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">{area.title[locale]}</span>
        </Link>
      </h3>
      <p className={`relative mt-5 max-w-[46ch] text-lg leading-relaxed ${dark ? "text-white/80" : "text-[var(--color-ink-soft)]"}`}>
        {area.summary[locale]}
      </p>
      <ul className="relative mt-7 flex flex-wrap gap-2">
        {area.tags[locale].map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>
      <p className="relative mt-9 inline-flex items-center gap-2 font-medium">
        {cta} <span aria-hidden className="arrow">→</span>
      </p>
    </article>
  );
}
