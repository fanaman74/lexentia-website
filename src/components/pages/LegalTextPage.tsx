import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/content";
import type { LegalPage } from "@/content/legal";
import type { Locale } from "@/lib/i18n";

export function LegalTextPage({ locale, dict, page }: { locale: Locale; dict: Dictionary; page: LegalPage }) {
  return (
    <>
      <PageHero eyebrow={dict.footer.legal} lines={[page.title[locale]]} intro={page.intro[locale]} />
      <Section className="!pt-0">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-paper-warm)] p-5 text-sm leading-relaxed lg:sticky lg:top-28">
              <p className="font-medium">{dict.common.draftNotice}</p>
              <p className="mt-2">
                <a href={page.legacyUrl[locale]} className="link-underline" rel="noopener">
                  {page.legacyUrl[locale].replace("https://", "")}
                </a>
              </p>
            </div>
          </aside>
          <div className="lg:col-span-8">
            {page.sections.map((s) => (
              <section key={s.title.en} className="border-t border-[var(--color-line-strong)] py-10 first:pt-6">
                <h2 className="display text-[2rem] leading-tight">{s.title[locale]}</h2>
                <div className="prose-legal mt-5">
                  {s.body[locale].map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
