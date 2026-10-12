import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { lawyers, type Dictionary } from "@/content";
import { href, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

export function ContactPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.contact;
  return (
    <>
      <PageHero eyebrow={t.eyebrow} lines={[t.title]} intro={t.intro} />
      <Section className="!pt-0">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-10 max-w-[60ch] border-l-2 border-[var(--color-bronze)] pl-4 text-sm leading-relaxed text-[var(--color-ink-soft)]">
              {t.confidentiality}
            </p>
            <ContactForm dict={t.form} privacyHref={href(locale, "privacy")} defaultLanguage={locale} />
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <dl className="space-y-8 border-t border-[var(--color-line-strong)] pt-6">
              <div>
                <dt className="eyebrow text-[var(--color-ink-soft)]">{dict.common.phone}</dt>
                <dd className="display mt-2 text-[2rem] leading-tight">
                  <a href={`tel:${site.phone.tel}`} className="link-underline">{site.phone.display}</a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[var(--color-ink-soft)]">{dict.common.email}</dt>
                <dd className="mt-2 space-y-1">
                  {lawyers.filter((l) => l.email).map((l) => (
                    <p key={l.slug}>
                      <a href={`mailto:${l.email}`} className="link-underline break-all">{l.email}</a>
                    </p>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[var(--color-ink-soft)]">{dict.common.address}</dt>
                <dd className="mt-2">
                  <address className="not-italic">
                    {site.legalName}
                    <br />
                    {site.address.street}
                    <br />
                    {site.address.postalCode} {site.address.locality[locale]}
                  </address>
                  <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="group mt-3 inline-flex min-h-11 items-center gap-2 font-medium">
                    <span className="link-underline">{dict.common.map}</span>
                    <span aria-hidden className="arrow">↗</span>
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[var(--color-ink-soft)]">{dict.common.hours}</dt>
                <dd className="mt-2">{site.hours[locale]}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>
    </>
  );
}
