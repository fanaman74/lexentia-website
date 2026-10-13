import Link from "next/link";
import type { PracticeArea } from "@/content";
import { pathFor, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";
import { PracticeImage } from "@/components/motion/PracticeImage";

export function PracticePanel({ area, locale, cta }: { area: PracticeArea; locale: Locale; cta: string; index: string }) {
  const url = pathFor(locale, { key: area.routeKey });
  const european = area.id === "eu-civil-service";
  return <article data-stagger className={`practice-panel group relative isolate overflow-hidden rounded-xl border ${european ? "practice-panel-europe" : "practice-panel-private"}`}>
    <PracticeImage european={european} locale={locale} />
    <div className="practice-panel-content">
      <h3 className="display"><Link href={url} className="after:absolute after:inset-0 after:z-[1]">{area.title[locale]}</Link></h3>
      <p className="practice-summary text-[var(--color-ink-soft)]">{area.summary[locale]}</p>
      <p className="practice-panel-footer"><span>{cta}</span><Icon name="arrow" size={18} className="arrow" /></p>
    </div>
  </article>;
}
