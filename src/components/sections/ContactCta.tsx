import Link from "next/link";
import { RevealLines } from "@/components/motion/RevealLines";
import type { Dictionary } from "@/content";
import { href, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";

export function ContactCta({ locale, dict, title, body }: { locale: Locale; dict: Dictionary; title?: string; body?: string }) {
  return <section className="site-section bg-[var(--color-lime-soft)]" aria-labelledby="contact-cta-title">
    <div className="section-inner grid gap-12 lg:grid-cols-[1fr_320px]">
      <div><RevealLines id="contact-cta-title" lines={[title ?? dict.home.contactTitle]} className="display text-h2 max-w-[25ch]" /><p className="mt-5 max-w-[60ch] leading-relaxed text-[var(--color-ink-soft)]">{body ?? dict.home.contactBody}</p><div className="mt-8 flex flex-wrap gap-3"><Link href={href(locale, "contact")} className="btn btn-primary">{dict.nav.cta}<Icon name="arrow" size={18} /></Link><a href={`tel:${site.phone.tel}`} className="btn btn-secondary">{site.phone.display}</a></div></div>
      <dl className="space-y-6 border-t border-[#cbdcac] pt-6 text-sm lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"><div><dt className="font-medium">{dict.common.address}</dt><dd className="mt-3 leading-relaxed text-[var(--color-ink-soft)]">{site.address.street}<br />{site.address.postalCode} {site.address.locality[locale]}</dd></div><div><dt className="font-medium">{dict.common.hours}</dt><dd className="mt-3 leading-relaxed text-[var(--color-ink-soft)]">{site.hours[locale]}</dd></div></dl>
    </div>
  </section>;
}
