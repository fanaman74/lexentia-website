"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/content/dictionary";
import { defaultLocale, href, isLocale } from "@/lib/i18n";

export default function NotFound() {
  const segment = usePathname()?.split("/")[1] ?? "";
  const locale = isLocale(segment) ? segment : defaultLocale;
  const t = getDictionary(locale).notFound;
  return (
    <section className="px-5 pb-28 pt-40 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <p className="eyebrow text-[var(--color-ink-soft)]">404</p>
        <h1 className="display text-h1 mt-6 max-w-[16ch]">{t.title}</h1>
        <p className="mt-6 max-w-xl text-lg text-[var(--color-ink-soft)]">{t.body}</p>
        <Link href={href(locale, "home")} className="btn btn-primary mt-10">
          {t.home}
        </Link>
      </div>
    </section>
  );
}
