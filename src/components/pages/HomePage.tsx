import Link from "next/link";
import { BrusselsHero } from "@/components/motion/BrusselsHero";
import { InsightsCarousel } from "@/components/motion/InsightsCarousel";
import { MatchedPracticeCards } from "@/components/motion/MatchedPracticeCards";
import { PageIntro } from "@/components/motion/PageIntro";
import { RevealLines } from "@/components/motion/RevealLines";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { ProcessRail } from "@/components/motion/ProcessRail";
import { PracticePanel } from "@/components/cards/PracticePanel";
import { LawyerCard } from "@/components/cards/LawyerCard";
import { ContactCta } from "@/components/sections/ContactCta";
import { SituationLinks } from "@/components/sections/SituationLinks";
import { Section } from "@/components/ui/Section";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { JsonLd } from "@/components/ui/JsonLd";
import { Icon } from "@/components/ui/Icon";
import { insightsByDate, lawyers, practiceAreas, type Dictionary } from "@/content";
import { href, pathFor, type Locale } from "@/lib/i18n";
import { pad } from "@/lib/format";
import { site } from "@/lib/site";

export function HomePage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home;
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

    <Section labelledBy="firm-title">
      <h2 id="firm-title" className="display text-h2">{t.firmTitle}</h2>
      <p className="mt-5 max-w-[70ch] leading-relaxed text-[var(--color-ink-soft)]">{t.firmBody}</p>
      <dl className="mt-10 grid gap-8 md:grid-cols-3">{t.principles.map(p => <div key={p.title} className="border-t border-[var(--color-line)] pt-5"><dt className="display text-h3">{p.title}</dt><dd className="mt-4 leading-relaxed text-[var(--color-ink-soft)]">{p.body}</dd></div>)}</dl>
      <ArrowLink href={href(locale, "about")} className="mt-9">{dict.footer.aboutLink}</ArrowLink>
    </Section>

    <Section labelledBy="team-title">
      <div className="section-heading"><h2 id="team-title" className="display text-h2">{t.teamTitle}</h2><ArrowLink href={href(locale, "team")}>{dict.nav.team}</ArrowLink></div>
      <StaggerGroup className="home-team-grid grid gap-8 md:grid-cols-2">{lawyers.map(lawyer => <LawyerCard key={lawyer.slug} lawyer={lawyer} locale={locale} dict={dict} large />)}</StaggerGroup>
    </Section>

    <Section labelledBy="expertise-title">
      <div className="section-heading"><h2 id="expertise-title" className="display text-h2 max-w-[24ch]">{t.expertiseTitle}</h2><ArrowLink href={href(locale, "expertise")}>{dict.nav.expertise}</ArrowLink></div>
      <MatchedPracticeCards locale={locale}>
        <StaggerGroup className="practice-grid home-practice-grid grid gap-8 md:grid-cols-2">{practiceAreas.map((area, i) => <PracticePanel key={area.id} area={area} locale={locale} index={pad(i + 1)} cta={area.id === "eu-civil-service" ? t.exploreEu : t.explorePrivate} />)}</StaggerGroup>
      </MatchedPracticeCards>
    </Section>

    <Section className="insights-carousel-section" labelledBy="insights-title">
      <InsightsCarousel items={insightsByDate().filter(item => item.courtRecord).slice(0, 5)} locale={locale} dict={dict} title={dict.nav.latestNews} archiveHref={href(locale, "latestNews")} />
    </Section>

    <Section tone="warm" labelledBy="needs-title">
      <SituationLinks locale={locale} dict={dict} />
    </Section>

    <Section tone="forest" labelledBy="eu-title">
      <div className="grid gap-12 lg:grid-cols-2">
        <div><RevealLines id="eu-title" lines={[t.euTitle]} className="display text-h2" /><p className="mt-7 max-w-[58ch] leading-relaxed text-[#c3bdcf]">{t.euBody}</p><ArrowLink href={pathFor(locale, { key: "euCivilService" })} className="mt-8 text-[var(--color-sage)]">{t.euCta}</ArrowLink></div>
        <ProcessRail steps={t.euSteps} />
      </div>
    </Section>

    <ContactCta locale={locale} dict={dict} />
  </>;
}
