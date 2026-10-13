import { Icon } from "@/components/ui/Icon";
import Link from "next/link";
import { practiceAreas, type Dictionary } from "@/content";
import { href, pathFor, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Wordmark } from "@/components/ui/Wordmark";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.footer;
  const columns = [
    { title: t.expertise, links: practiceAreas.map(p => ({ label: p.title[locale], href: pathFor(locale, { key: p.routeKey }) })) },
    { title: t.firm, links: [{ label: t.aboutLink, href: href(locale, "about") }, { label: dict.nav.team, href: href(locale, "team") }, { label: dict.nav.insights, href: href(locale, "insights") }, { label: dict.nav.latestNews, href: href(locale, "latestNews") }, { label: dict.nav.contact, href: href(locale, "contact") }] },
    { title: t.legal, links: [{ label: t.legalLinks.legalNotices, href: href(locale, "legalNotices") }, { label: t.legalLinks.privacy, href: href(locale, "privacy") }, { label: t.legalLinks.terms, href: href(locale, "terms") }, { label: t.legalLinks.fees, href: href(locale, "fees") }] },
  ];
  return <footer className="site-footer">
    <div className="section-inner">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_2fr_1.2fr]">
        <div><Link href={href(locale, "home")} aria-label="Lexentia"><Wordmark /></Link><p className="mt-5 max-w-[30ch] text-sm leading-relaxed text-[var(--color-ink-soft)]">{t.tagline}</p><p className="mt-4 max-w-[34ch] text-xs leading-relaxed text-[var(--color-ink-soft)]">{t.disclaimer}</p></div>
        <nav aria-label={dict.a11y.footerNav} className="grid grid-cols-2 gap-8 sm:col-span-2 sm:grid-cols-3 lg:col-span-1">{columns.map(column => <div key={column.title}><p className="text-xs font-medium text-[var(--color-ink-soft)]">{column.title}</p><ul className="mt-4 space-y-3 text-xs leading-relaxed">{column.links.map(link => <li key={link.href}><Link className="link-underline" href={link.href}>{link.label}</Link></li>)}</ul></div>)}</nav>
        <div><p className="text-xs font-medium text-[var(--color-ink-soft)]">{t.contact}</p><address className="mt-4 space-y-3 text-xs leading-relaxed not-italic"><p><a className="link-underline" href={`tel:${site.phone.tel}`}>{site.phone.display}</a></p><p><a className="link-underline break-all" href={`mailto:${site.email}`}>{site.email}</a></p><p>{site.address.street}<br />{site.address.postalCode} {site.address.locality[locale]}</p><p><a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-2">{dict.common.map}<Icon name="external" size={14} /></a></p></address></div>
      </div>
      <div className="mt-16 flex flex-wrap items-end justify-between gap-8"><p aria-hidden="true" className="footer-name">LEXENTIA</p><p className="display pb-2 text-xl text-[var(--color-ink-soft)]">{t.tagline}</p></div>
      <p className="mt-10 border-t border-[var(--color-line)] pt-5 text-xs leading-relaxed text-[var(--color-ink-soft)]">© {new Date().getFullYear()} {site.legalName} · {t.vat} {site.vat} · {site.bar[locale]}</p>
    </div>
  </footer>;
}
