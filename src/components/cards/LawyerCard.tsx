import Link from "next/link";
import { Portrait } from "@/components/ui/Portrait";
import type { Dictionary, Lawyer } from "@/content";
import { pathFor, type Locale } from "@/lib/i18n";

export function LawyerCard({ lawyer, locale, dict, large = false }: { lawyer: Lawyer; locale: Locale; dict: Dictionary; large?: boolean }) {
  const url = pathFor(locale, { key: "lawyer", slug: lawyer.slug });
  return (
    <article data-stagger className="group">
      <Link href={url} className="block" aria-label={`${lawyer.name}, ${lawyer.role[locale]}`}>
        <Portrait
          name={lawyer.name}
          src={lawyer.portrait?.src}
          alt={lawyer.portrait?.alt[locale]}
          pendingLabel={dict.common.portraitPending}
          className={large ? "aspect-[4/5]" : "aspect-[4/5]"}
        />
      </Link>
      <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-[var(--color-line)] pt-5">
        <h3 className="display text-h3 transition-transform duration-300 group-hover:translate-x-1">
          <Link href={url}>{lawyer.name}</Link>
        </h3>
        <p className="meta text-[var(--color-ink-soft)]">{lawyer.role[locale]}</p>
      </div>
      <p className="mt-3 text-[var(--color-ink-soft)]">{lawyer.descriptor[locale]}</p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label={dict.common.languages}>
        {lawyer.languages.map((code) => (
          <li key={code} className="chip uppercase" title={dict.common.languageNames[code]}>
            <abbr title={dict.common.languageNames[code]} className="no-underline">
              {code}
            </abbr>
          </li>
        ))}
      </ul>
    </article>
  );
}
