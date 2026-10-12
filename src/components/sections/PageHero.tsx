import type { ReactNode } from "react";
import { PageIntro } from "@/components/motion/PageIntro";

type Props = {
  eyebrow: string;
  lines: string[];
  intro?: string;
  children?: ReactNode;
  aside?: ReactNode;
  top?: ReactNode;
};

/** Standard page hero: eyebrow, line-masked H1, intro and optional actions/aside. */
export function PageHero({ eyebrow, lines, intro, children, aside, top }: Props) {
  return (
    <section className="px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40 lg:px-12">
      <PageIntro className="mx-auto max-w-[1440px]">
        {top}
        <div className="grid gap-12 lg:grid-cols-12">
          <div className={aside ? "lg:col-span-8" : "lg:col-span-11"}>
            <p data-intro="label" className="eyebrow text-[var(--color-ink-soft)]">
              {eyebrow}
            </p>
            <h1 className="display text-h1 mt-6">
              {lines.map((line, i) => (
                <span key={i} data-intro="line" className="line-mask">
                  <span className="line-inner">{line}</span>
                  {i < lines.length - 1 ? " " : null}
                </span>
              ))}
            </h1>
            {intro ? (
              <p data-intro="body" className="mt-8 max-w-[60ch] text-xl leading-relaxed text-[var(--color-ink-soft)] md:text-[1.375rem]">
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
