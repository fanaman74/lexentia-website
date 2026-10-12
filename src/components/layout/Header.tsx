"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "@/components/motion/gsap";
import { isLocale, otherLocale, pathFor, resolvePath, type Locale } from "@/lib/i18n";
import { prefersReducedMotion } from "@/lib/motion";

type NavItem = { label: string; href: string };

type Props = {
  locale: Locale;
  items: NavItem[];
  homeHref: string;
  cta: NavItem;
  labels: { menu: string; closeMenu: string; primaryNav: string; switchLanguage: string };
};

function useAlternateHref(locale: Locale) {
  const pathname = usePathname();
  const target = otherLocale(locale);
  const [, maybeLocale, ...rest] = pathname.split("/");
  if (!isLocale(maybeLocale)) return `/${target}`;
  const ref = resolvePath(locale, rest.filter(Boolean));
  return ref ? pathFor(target, ref) : `/${target}`;
}

function LanguageSwitch({ locale, label, className = "" }: { locale: Locale; label: string; className?: string }) {
  const altHref = useAlternateHref(locale);
  const target = otherLocale(locale);
  return (
    <div className={`flex items-center gap-1 text-sm ${className}`}>
      <span aria-current="true" className="px-1.5 py-2 font-medium uppercase">
        <span className="sr-only">{locale === "fr" ? "Français" : "English"} – </span>
        {locale}
      </span>
      <span aria-hidden className="opacity-40">/</span>
      <Link
        href={altHref}
        hrefLang={target}
        lang={target}
        aria-label={label}
        onClick={() => {
          document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=31536000; samesite=lax`;
        }}
        className="link-underline px-1.5 py-2 uppercase text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
      >
        {target}
      </Link>
    </div>
  );
}

export function Header({ locale, items, homeHref, cta, labels }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    if (!headerRef.current || prefersReducedMotion()) return;
    const tween = gsap.fromTo(headerRef.current, { y: -12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out" });
    return () => {
      tween.kill();
    };
  }, []);

  // Close the menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const menu = menuRef.current;
    menu?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key !== "Tab" || !menu) return;
      const focusables = Array.from(menu.querySelectorAll<HTMLElement>("a, button"));
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,padding] duration-300 ${
        scrolled
          ? "border-b border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-paper)_88%,transparent)] py-3 backdrop-blur-md"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 md:px-8 lg:px-12">
        <Link href={homeHref} className="display text-[1.85rem] leading-none tracking-tight" aria-label="Lexentia">
          Lexentia
        </Link>

        <nav aria-label={labels.primaryNav} className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[0.95rem]">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className="link-underline py-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitch locale={locale} label={labels.switchLanguage} />
          <Link href={cta.href} className="btn btn-secondary !min-h-10 !py-2">
            {cta.label}
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 flex min-h-11 min-w-11 items-center justify-center gap-3 px-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <span className="text-sm font-medium">{labels.menu}</span>
          <span aria-hidden className="flex w-5 flex-col gap-[5px]">
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
          </span>
        </button>
      </div>
    </header>

      {/* Outside <header>: its backdrop-filter would otherwise trap this fixed overlay. */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label={labels.menu}
        hidden={!open}
        className="on-dark fixed inset-0 z-50 h-dvh overflow-y-auto bg-[var(--color-forest-deep)] text-[var(--color-cream)] lg:hidden"
      >
        <div className="flex min-h-full flex-col px-5 pb-10 pt-5 md:px-8">
          <div className="flex items-center justify-between">
            <Link href={homeHref} className="display text-[1.85rem] leading-none" onClick={() => setOpen(false)}>
              Lexentia
            </Link>
            <button type="button" onClick={close} className="-mr-2 min-h-11 min-w-11 px-2 text-sm font-medium">
              {labels.closeMenu}
            </button>
          </div>
          <nav aria-label={labels.primaryNav} className="mt-14 flex-1">
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    className="display block py-1 text-[clamp(2.75rem,11vw,4.5rem)] leading-[1.05]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-[var(--color-line-dark)] pt-6">
            <Link href={cta.href} className="btn btn-primary">
              {cta.label}
            </Link>
            <LanguageSwitch locale={locale} label={labels.switchLanguage} className="[&_a]:text-[var(--color-sage)]" />
          </div>
        </div>
      </div>
    </>
  );
}
