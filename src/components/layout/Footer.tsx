import Link from "next/link";
import { practiceAreas, type Dictionary } from "@/content";
import { href, pathFor, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.footer;
  const columns = [
    {
      title: t.expertise,
      links: practiceAreas.map((p) => ({ label: p.title[locale], href: pathFor(locale, { key: p.routeKey }) })),
    },
    {
      title: t.firm,
      links: [
        { label: t.aboutLink, href: href(locale, "about") },
        { label: dict.nav.team, href: href(locale, "team") },
        { label: dict.nav.insights, href: href(locale, "insights") },
        { label: dict.nav.contact, href: href(locale, "contact") },
      ],
    },
    {
      title: t.legal,
      links: [
        { label: t.legalLinks.legalNotices, href: href(locale, "legalNotices") },
        { label: t.legalLinks.privacy, href: href(locale, "privacy") },
        { label: t.legalLinks.terms, href: href(locale, "terms") },
        { label: t.legalLinks.fees, href: href(locale, "fees") },
      ],
    },
  ];

  return (
    <footer className="on-dark bg-[var(--color-forest-deep)] px-5 pb-10 pt-20 text-[var(--color-cream)] md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 border-b border-[var(--color-line-dark)] pb-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="display text-5xl">Lexentia</p>
            <p className="mt-4 max-w-xs text-white/75">{t.tagline}</p>
          </div>
          <nav aria-label={dict.a11y.footerNav} className="grid gap-10 sm:grid-cols-3 lg:col-span-5">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="eyebrow text-[var(--color-sage)]">{col.title}</p>
                <ul className="mt-5 space-y-3 text-[0.95rem]">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="link-underline text-white/85 hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          <div className="lg:col-span-3">
            <p className="eyebrow text-[var(--color-sage)]">{t.contact}</p>
            <address className="mt-5 space-y-3 text-[0.95rem] not-italic text-white/85">
              <p>
                <a href={`tel:${site.phone.tel}`} className="link-underline">
                  {site.phone.display}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="link-underline break-all">
                  {site.email}
                </a>
              </p>
              <p>
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.locality[locale]}
              </p>
              <p className="text-white/70">{site.hours[locale]}</p>
              <p>
                <a href={site.mapUrl} className="link-underline" rel="noopener noreferrer" target="_blank">
                  {dict.common.map} ↗
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-8 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName} · {t.vat} {site.vat} · {site.bar[locale]}
          </p>
          <p>{t.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
