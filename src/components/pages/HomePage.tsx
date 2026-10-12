import Link from "next/link";
import { PageIntro } from "@/components/motion/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { RevealLines } from "@/components/motion/RevealLines";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { ProcessRail } from "@/components/motion/ProcessRail";
import { PracticePanel } from "@/components/cards/PracticePanel";
import { LawyerCard } from "@/components/cards/LawyerCard";
import { InsightCard } from "@/components/cards/InsightCard";
import { ContactCta } from "@/components/sections/ContactCta";
import { Section, SectionLabel } from "@/components/ui/Section";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { JsonLd } from "@/components/ui/JsonLd";
import { featuredInsights, lawyers, practiceAreas, type Dictionary } from "@/content";
import { href, pathFor, type Locale } from "@/lib/i18n";
import { pad } from "@/lib/format";
import { site } from "@/lib/site";

export function HomePage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home;
  const selected = featuredInsights(3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: site.legalName,
          url: `${site.url}${href(locale, "home")}`,
          telephone: site.phone.tel,
          email: site.email,
          vatID: site.vat,
          foundingDate: String(site.founded),
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.street,
            postalCode: site.address.postalCode,
            addressLocality: "Schaerbeek",
            addressRegion: "Brussels",
            addressCountry: site.address.country,
          },
          openingHours: "Mo-Fr 08:30-17:00",
          areaServed: "EU",
          knowsLanguage: ["fr", "en", "nl", "es"],
          employee: lawyers.map((l) => ({ "@type": "Person", name: l.name, jobTitle: l.role[locale] })),
          sameAs: [site.linkedin],
        }}
      />

      {/* Hero — option C, pure editorial (brief §6.2) */}
      <section className="relative overflow-hidden px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44 lg:px-12">
        <div aria-hidden className="pointer-events-none absolute inset-0 mx-auto hidden max-w-[1440px] grid-cols-12 px-12 lg:grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="border-l border-[var(--color-line)] opacity-60 last:border-r" />
          ))}
        </div>
        <PageIntro className="relative mx-auto max-w-[1440px]">
          <p data-intro="label" className="eyebrow text-[var(--color-ink-soft)]">
            {t.eyebrow}
          </p>
          <h1 className="display text-hero mt-8 max-w-[13ch]">
            {t.headline.map((line, i) => (
              <span key={i} data-intro="line" className="line-mask">
                <span className={`line-inner ${i === 1 ? "italic text-[var(--color-forest)]" : ""}`}>{line}</span>
                {i < t.headline.length - 1 ? " " : null}
              </span>
            ))}
          </h1>
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <p data-intro="body" className="max-w-[54ch] text-xl leading-relaxed text-[var(--color-ink-soft)] md:text-[1.375rem] lg:col-span-6">
              {t.intro}
            </p>
            <div className="flex flex-wrap items-start gap-3 lg:col-span-6 lg:justify-end">
              <Link data-intro="cta" href={href(locale, "expertise")} className="btn btn-primary">
                {t.ctaPrimary} <span aria-hidden>→</span>
              </Link>
              <Link data-intro="cta" href={href(locale, "contact")} className="btn btn-secondary">
                {t.ctaSecondary}
              </Link>
            </div>
          </div>
          <ul data-intro="body" className="meta mt-16 grid gap-3 border-t border-[var(--color-line)] pt-5 text-[var(--color-ink-soft)] sm:grid-cols-3">
            {t.proof.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--color-bronze)]" />
                {item}
              </li>
            ))}
          </ul>
        </PageIntro>
      </section>

      {/* Expertise split */}
      <Section labelledBy="expertise-title" className="!pt-8">
        <SectionLabel index="01">{t.expertiseLabel}</SectionLabel>
        <RevealLines id="expertise-title" lines={[t.expertiseTitle]} className="display text-h2 mt-8 max-w-[18ch]" />
        <StaggerGroup className="mt-14 grid gap-5 lg:grid-cols-2">
          {practiceAreas.map((area, i) => (
            <PracticePanel
              key={area.id}
              area={area}
              locale={locale}
              index={pad(i + 1)}
              cta={area.id === "eu-civil-service" ? t.exploreEu : t.explorePrivate}
            />
          ))}
        </StaggerGroup>
      </Section>

      {/* Client needs */}
      <Section tone="warm" labelledBy="needs-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="02">{t.needsLabel}</SectionLabel>
          </div>
          <div className="lg:col-span-8">
            <RevealLines id="needs-title" lines={[t.needsTitle]} className="display text-h3 max-w-[24ch] !text-[clamp(2rem,3.6vw,3.5rem)]" />
          </div>
        </div>
        <StaggerGroup as="ul" className="mt-16 grid border-l border-t border-[var(--color-line-strong)] sm:grid-cols-2 lg:grid-cols-3">
          {t.needs.map((need, i) => (
            <li key={need.title} data-stagger className="border-b border-r border-[var(--color-line-strong)] p-7 md:p-9">
              <p className="meta tabular-nums text-[var(--color-bronze)]">{pad(i + 1)}</p>
              <h3 className="mt-8 text-[1.35rem] font-medium leading-snug">{need.title}</h3>
              <p className="mt-3 text-[var(--color-ink-soft)]">{need.body}</p>
            </li>
          ))}
        </StaggerGroup>
      </Section>

      {/* EU civil service signature section */}
      <Section tone="forest" labelledBy="eu-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionLabel index="03" dark>
                {t.euLabel}
              </SectionLabel>
            </div>
          </div>
          <div className="lg:col-span-8">
            <RevealLines id="eu-title" lines={[t.euTitle]} className="display text-h2 max-w-[18ch]" />
            <Reveal>
              <p className="mt-8 max-w-[58ch] text-xl leading-relaxed text-white/80">{t.euBody}</p>
            </Reveal>
            <ProcessRail steps={t.euSteps} />
            <ArrowLink href={pathFor(locale, { key: "euCivilService" })} className="mt-14 text-[var(--color-cream)]">
              {t.euCta}
            </ArrowLink>
          </div>
        </div>
      </Section>

      {/* Human-scale firm */}
      <Section labelledBy="firm-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="04">{t.firmLabel}</SectionLabel>
          </div>
          <div className="lg:col-span-8">
            <RevealLines id="firm-title" lines={[t.firmTitle]} className="display text-h2 max-w-[16ch]" />
            <Reveal>
              <p className="mt-8 max-w-[58ch] text-xl leading-relaxed text-[var(--color-ink-soft)]">{t.firmBody}</p>
            </Reveal>
            <StaggerGroup as="dl" className="mt-14 grid gap-10 md:grid-cols-3">
              {t.principles.map((p) => (
                <div key={p.title} data-stagger className="border-t border-[var(--color-line-strong)] pt-5">
                  <dt className="display text-[2rem] leading-none">{p.title}</dt>
                  <dd className="mt-4 text-[var(--color-ink-soft)]">{p.body}</dd>
                </div>
              ))}
            </StaggerGroup>
            <ArrowLink href={href(locale, "about")} className="mt-12">
              {dict.footer.aboutLink}
            </ArrowLink>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section tone="cream" labelledBy="team-title">
        <SectionLabel index="05">{t.teamLabel}</SectionLabel>
        <RevealLines id="team-title" lines={[t.teamTitle]} className="display text-h2 mt-8 max-w-[18ch]" />
        <StaggerGroup className="mt-14 grid gap-14 md:grid-cols-2 lg:gap-20">
          {lawyers.map((lawyer, i) => (
            <div key={lawyer.slug} className={i === 1 ? "md:mt-24" : ""}>
              <LawyerCard lawyer={lawyer} locale={locale} dict={dict} />
            </div>
          ))}
        </StaggerGroup>
      </Section>

      {/* Selected insights — evergreen, never a "latest news" block */}
      <Section labelledBy="insights-title">
        <SectionLabel index="06">{t.insightsLabel}</SectionLabel>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <RevealLines id="insights-title" lines={[t.insightsTitle]} className="display text-h2 max-w-[16ch]" />
          <ArrowLink href={href(locale, "insights")}>{dict.common.allInsights}</ArrowLink>
        </div>
        <StaggerGroup className="mt-14 grid gap-10 md:grid-cols-3">
          {selected.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} locale={locale} dict={dict} />
          ))}
        </StaggerGroup>
      </Section>

      <ContactCta locale={locale} dict={dict} />
    </>
  );
}
