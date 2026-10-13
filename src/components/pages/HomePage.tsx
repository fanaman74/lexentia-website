import Link from "next/link";
import { BrusselsHero } from "@/components/motion/BrusselsHero";
import { InsightsCarousel } from "@/components/motion/InsightsCarousel";
import { PageIntro } from "@/components/motion/PageIntro";
import { RevealLines } from "@/components/motion/RevealLines";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { ProcessRail } from "@/components/motion/ProcessRail";
import { PracticePanel } from "@/components/cards/PracticePanel";
import { LawyerCard } from "@/components/cards/LawyerCard";
import { ContactCta } from "@/components/sections/ContactCta";
import { Section } from "@/components/ui/Section";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { JsonLd } from "@/components/ui/JsonLd";
import { Icon } from "@/components/ui/Icon";
import { insightsByDate, lawyers, practiceAreas, type Dictionary } from "@/content";
import { href, pathFor, type Locale } from "@/lib/i18n";
import { formatDate, pad } from "@/lib/format";
import { site } from "@/lib/site";

export function HomePage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home;
  const feed = insightsByDate().slice(0, 3);
  const quickLinks = [
    { icon: "scales" as const, label: dict.nav.expertise, copy: dict.expertise.intro, route: "expertise" as const, action: t.ctaPrimary },
    { icon: "people" as const, label: dict.nav.team, copy: t.teamTitle, route: "team" as const, action: dict.common.viewProfile },
    { icon: "book" as const, label: dict.nav.insights, copy: t.insightsTitle, route: "insights" as const, action: dict.common.allInsights },
    { icon: "mail" as const, label: dict.nav.contact, copy: t.contactBody, route: "contact" as const, action: dict.nav.cta },
  ];
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "LegalService", name: site.legalName, url: `${site.url}${href(locale, "home")}`, telephone: site.phone.tel, email: site.email, vatID: site.vat, foundingDate: String(site.founded), address: { "@type": "PostalAddress", streetAddress: site.address.street, postalCode: site.address.postalCode, addressLocality: "Schaerbeek", addressRegion: "Brussels", addressCountry: site.address.country }, openingHours: "Mo-Fr 08:30-17:00", areaServed: "EU", knowsLanguage: ["fr", "en", "nl", "es"], employee: lawyers.map(l => ({ "@type": "Person", name: l.name, jobTitle: l.role[locale] })), sameAs: [site.linkedin] }} />

    <section className="home-hero">
      <BrusselsHero locale={locale} />
      <PageIntro className="section-inner">
        <div className="hero-copy">
          <h1 data-intro="line" className="display text-hero">{t.headline.join(" ")}</h1>
          <p data-intro="body" className="mt-7 text-[var(--color-ink-soft)]">{t.intro}</p>
          <div data-intro="cta" className="mt-8 flex flex-wrap gap-3 max-md:justify-center">
            <Link href={href(locale, "expertise")} className="btn btn-primary">{t.ctaPrimary}<Icon name="arrow" size={18} /></Link>
            <Link href={href(locale, "contact")} className="btn btn-secondary">{t.ctaSecondary}</Link>
          </div>
        </div>
      </PageIntro>
    </section>

    <Section labelledBy="welcome-title" className="!pb-0">
      <div className="grid gap-8 border-t border-[var(--color-line)] pt-9 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <h2 id="welcome-title" className="display text-h2">{t.welcomeTitle}</h2>
        <div className="max-w-[70ch] space-y-5 text-lg leading-relaxed text-[var(--color-ink-soft)]">
          {t.welcomeBody.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          <ArrowLink href={href(locale, "about")} className="text-sm text-[var(--color-ink)]">{dict.footer.aboutLink}</ArrowLink>
        </div>
      </div>
    </Section>

    <Section labelledBy="team-title">
      <div className="section-heading"><h2 id="team-title" className="display text-h2">{t.teamTitle}</h2><ArrowLink href={href(locale, "team")}>{dict.nav.team}</ArrowLink></div>
      <StaggerGroup className="grid gap-8 md:grid-cols-2">{lawyers.map(lawyer => <LawyerCard key={lawyer.slug} lawyer={lawyer} locale={locale} dict={dict} large />)}</StaggerGroup>
    </Section>

    <Section labelledBy="expertise-title">
      <div className="section-heading"><h2 id="expertise-title" className="display text-h2 max-w-[24ch]">{t.expertiseTitle}</h2><ArrowLink href={href(locale, "expertise")}>{dict.nav.expertise}</ArrowLink></div>
      <StaggerGroup className="grid gap-5 md:grid-cols-2">{practiceAreas.map((area, i) => <PracticePanel key={area.id} area={area} locale={locale} index={pad(i + 1)} cta={area.id === "eu-civil-service" ? t.exploreEu : t.explorePrivate} />)}</StaggerGroup>
    </Section>

    <Section className="!pt-4 !pb-12" labelledBy="feed-title">
      <div className="home-feed">
        <div className="flex items-center justify-between gap-4 border-b border-[var(--color-line)] bg-[var(--color-paper-warm)] px-6 py-3 text-xs"><span>Lexentia / {dict.nav.insights}</span><span className="text-[var(--color-ink-soft)]">{t.insightsLabel}</span></div>
        <div className="px-6 py-6 md:px-9">
          <h2 id="feed-title" className="display text-h3">{t.insightsTitle}</h2>
          <div className="mt-3">{feed.map(insight => <Link key={insight.slug} href={pathFor(locale, { key: "insight", slug: insight.slug })} className="feed-row group">
            <p className="meta text-[var(--color-ink-soft)]"><time dateTime={insight.publishedAt}>{formatDate(insight.publishedAt, locale)}</time></p>
            <div className="mt-2 flex items-start justify-between gap-6"><h3 className="max-w-[95ch] text-sm font-medium" lang={insight.language}>{insight.title}</h3><Icon name="arrow" size={17} className="arrow text-[var(--color-bronze)]" /></div>
          </Link>)}</div>
          <ArrowLink href={href(locale, "insights")} className="mt-4 text-sm">{dict.common.allInsights}</ArrowLink>
        </div>
      </div>
      <ul className="mt-7 grid gap-x-10 gap-y-4 md:grid-cols-3">{t.proof.map(item => <li key={item} className="border-b border-[var(--color-line)] py-4 text-sm text-[var(--color-ink-soft)]">{item}</li>)}</ul>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{quickLinks.map(item => <Link className="quick-link group" key={item.route} href={href(locale, item.route)}>
        <Icon name={item.icon} size={25} /><h2 className="text-sm font-semibold">{item.label}</h2><p className="text-sm leading-relaxed text-[var(--color-ink-soft)]">{item.copy}</p><span className="mt-auto flex items-center justify-between gap-2 pt-3 text-xs font-medium">{item.action}<Icon name="arrow" size={17} className="arrow" /></span>
      </Link>)}</div>
    </Section>

    <Section tone="warm" className="insights-carousel-section" labelledBy="insights-title">
      <InsightsCarousel items={insightsByDate().slice(0, 5)} locale={locale} dict={dict} title={t.insightsTitle} archiveHref={href(locale, "insights")} />
    </Section>

    <Section className="!pt-0" labelledBy="needs-title">
      <h2 id="needs-title" className="display text-h3 max-w-[42ch]">{t.needsTitle}</h2>
      <div className="mt-8 grid gap-x-12 md:grid-cols-2">{t.needs.map(need => <details key={need.title} className="group border-t border-[var(--color-line)] py-5">
        <summary className="flex min-h-11 list-none items-center justify-between gap-6 text-lg font-medium [&::-webkit-details-marker]:hidden">{need.title}<Icon name="chevron" size={18} className="transition-transform group-open:rotate-180" /></summary>
        <p className="mt-3 max-w-[60ch] leading-relaxed text-[var(--color-ink-soft)]">{need.body}</p>
      </details>)}</div>
    </Section>

    <Section tone="forest" labelledBy="eu-title">
      <div className="grid gap-12 lg:grid-cols-2">
        <div><RevealLines id="eu-title" lines={[t.euTitle]} className="display text-h2" /><p className="mt-7 max-w-[58ch] leading-relaxed text-[#c3bdcf]">{t.euBody}</p><ArrowLink href={pathFor(locale, { key: "euCivilService" })} className="mt-8 text-[var(--color-sage)]">{t.euCta}</ArrowLink></div>
        <ProcessRail steps={t.euSteps} />
      </div>
    </Section>

    <Section className="!pt-0" labelledBy="firm-title">
      <h2 id="firm-title" className="display text-h2">{t.firmTitle}</h2>
      <p className="mt-5 max-w-[70ch] leading-relaxed text-[var(--color-ink-soft)]">{t.firmBody}</p>
      <dl className="mt-10 grid gap-8 md:grid-cols-3">{t.principles.map(p => <div key={p.title} className="border-t border-[var(--color-line)] pt-5"><dt className="display text-h3">{p.title}</dt><dd className="mt-4 leading-relaxed text-[var(--color-ink-soft)]">{p.body}</dd></div>)}</dl>
      <ArrowLink href={href(locale, "about")} className="mt-9">{dict.footer.aboutLink}</ArrowLink>
    </Section>
    <ContactCta locale={locale} dict={dict} />
  </>;
}
