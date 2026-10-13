"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { isLocale, otherLocale, pathFor, resolvePath, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";
import { Wordmark } from "@/components/ui/Wordmark";

type NavItem = { label: string; href: string };
type Props = { locale: Locale; items: NavItem[]; homeHref: string; cta: NavItem; labels: { menu: string; closeMenu: string; primaryNav: string; switchLanguage: string } };

function LanguageSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const target = otherLocale(locale);
  const [, current, ...rest] = pathname.split("/");
  const ref = isLocale(current) ? resolvePath(locale, rest.filter(Boolean)) : null;
  const altHref = ref ? pathFor(target, ref) : `/${target}`;
  return <div className="flex items-center gap-1 text-xs uppercase">
    <span aria-current="true" className="px-1 py-3 font-semibold"><span className="sr-only">{locale === "fr" ? "Français" : "English"} — </span>{locale}</span>
    <span aria-hidden className="text-[var(--color-line-strong)]">/</span>
    <Link href={altHref} hrefLang={target} lang={target} aria-label={label} className="link-underline px-1 py-3" onClick={() => { document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=31536000; samesite=lax`; }}>{target}</Link>
  </div>;
}

export function Header({ locale, items, homeHref, cta, labels }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); } };
    const onPointer = (event: PointerEvent) => { if (!headerRef.current?.contains(event.target as Node)) setOpen(false); };
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onPointer); window.removeEventListener("resize", onResize); };
  }, [open]);
  const isCurrent = (url: string) => pathname === url || pathname.startsWith(`${url}/`);
  return <header ref={headerRef} className="fixed inset-x-0 top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-paper)]">
    <div className="mx-auto flex h-[78px] max-w-[1600px] items-center justify-between gap-5 px-6 xl:px-12">
      <Link href={homeHref} aria-label="Lexentia"><Wordmark /></Link>
      <nav aria-label={labels.primaryNav} className="hidden lg:block">
        <ul className="flex items-center gap-5 whitespace-nowrap text-sm xl:gap-7">
          {items.map(item => <li key={item.href}><Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined} className={`inline-flex min-h-11 items-center border-b-2 ${isCurrent(item.href) ? "border-[var(--color-bronze)] font-semibold" : "border-transparent hover:border-[var(--color-line-strong)]"}`}>{item.label}</Link></li>)}
        </ul>
      </nav>
      <div className="hidden items-center gap-5 lg:flex"><LanguageSwitch locale={locale} label={labels.switchLanguage} /><Link href={cta.href} className="btn btn-primary !min-h-10 !px-4">{cta.label}<Icon name="arrow" size={17} /></Link></div>
      <button ref={toggleRef} type="button" className="btn btn-secondary !min-h-11 !px-3 lg:hidden" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? labels.closeMenu : labels.menu}<Icon name={open ? "close" : "chevron"} size={17} /></button>
    </div>
    <nav id="mobile-menu" hidden={!open} aria-label={labels.primaryNav} className="absolute inset-x-0 top-full max-h-[calc(100dvh-78px)] overflow-y-auto border-b border-[var(--color-line-strong)] bg-[var(--color-paper)] px-6 pb-6 lg:hidden">
      <ul className="divide-y divide-[var(--color-line)]">{items.map(item => <li key={item.href}><Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined} className={`flex min-h-14 items-center justify-between py-3 ${isCurrent(item.href) ? "font-semibold" : ""}`} onClick={() => setOpen(false)}>{item.label}<Icon name="arrow" size={18} /></Link></li>)}</ul>
      <div className="mt-5 flex items-center justify-between gap-4"><LanguageSwitch locale={locale} label={labels.switchLanguage} /><Link href={cta.href} className="btn btn-primary" onClick={() => setOpen(false)}>{cta.label}<Icon name="arrow" size={17} /></Link></div>
    </nav>
  </header>;
}
