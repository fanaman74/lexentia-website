import Link from "next/link";
import { RevealLines } from "@/components/motion/RevealLines";
import type { Dictionary } from "@/content";
import { href, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

/** Closing contact pathway used at the end of every major page (brief §49.19). */
export function ContactCta({ locale, dict, title, body }: { locale: Locale; dict: Dictionary; title?: string; body?: string }) {
  return (
    <section className="on-dark bg-[var(--color-forest)] px-5 py-24 text-[var(--color-cream)] md:px-8 md:py-32 lg:px-12" aria-labelledby="contact-cta-title">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <RevealLines id="contact-cta-title" lines={[title ?? dict.home.contactTitle]} className="display text-h2" />
          <p className="mt-6 max-w-[56ch] text-lg text-white/80">{body ?? dict.home.contactBody}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={href(locale, "contact")} className="btn btn-primary">
              {dict.nav.cta} <span aria-hidden>→</span>
            </Link>
            <a href={`tel:${site.phone.tel}`} className="btn btn-secondary">
              {site.phone.display}
            </a>
          </div>
        </div>
        <dl className="space-y-6 border-t border-[var(--color-line-dark)] pt-6 text-white/85 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <div>
            <dt className="eyebrow text-[var(--color-sage)]">{dict.common.address}</dt>
            <dd className="mt-2">
              {site.address.street}, {site.address.postalCode} {site.address.locality[locale]}
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-[var(--color-sage)]">{dict.common.hours}</dt>
            <dd className="mt-2">{site.hours[locale]}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
