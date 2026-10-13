import type { ReactNode } from "react";
import { PageIntro } from "@/components/motion/PageIntro";

type Props = {
  eyebrow: string;
  lines: string[];
  intro?: string;
  children?: ReactNode;
  aside?: ReactNode;
  top?: ReactNode;
  contentLanguage?: string;
};

/** Standard page hero: eyebrow, line-masked H1, intro and optional actions/aside. */
export function PageHero({ eyebrow, lines, intro, children, aside, top, contentLanguage }: Props) {
  return (
    <section className="page-hero">
      <PageIntro className="section-inner">
        {top}
        <div className="grid gap-12 lg:grid-cols-12">
          <div className={aside ? "lg:col-span-8" : "lg:col-span-11"}>
            <h1 lang={contentLanguage} className="display text-h1">
              {lines.map((line, i) => (
                <span key={i} data-intro="line" className="line-mask">
                  <span className="line-inner">{line}</span>
                  {i < lines.length - 1 ? " " : null}
                </span>
              ))}
            </h1>
            {intro ? (
              <p lang={contentLanguage} data-intro="body" className="mt-8 max-w-[60ch] leading-relaxed text-[var(--color-ink-soft)]">
                {intro}
              </p>
            ) : null}
            {children ? (
              <div data-intro="cta" className="mt-10 flex flex-wrap gap-3">
                {children}
              </div>
            ) : null}
          </div>
          {aside ? (
            <div data-intro="body" className="lg:col-span-4 lg:pt-14">
              {aside}
            </div>
          ) : null}
        </div>
      </PageIntro>
    </section>
  );
}
