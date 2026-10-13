import type { Metadata, Viewport } from "next";
import { Fraunces, Geist } from "next/font/google";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getDictionary } from "@/content";
import { href, isLocale, locales } from "@/lib/i18n";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const sans = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
};

export const viewport: Viewport = {
  themeColor: "#fafcfb",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Marks JS as available (so intro elements can start hidden) and reveals them
// anyway if the GSAP intro has not finished after 2.5 s.
const bootScript = `document.documentElement.classList.add('js');setTimeout(function(){document.documentElement.classList.add('intro-done')},2500);`;

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const items = [
    { label: dict.nav.expertise, href: href(locale, "expertise") },
    { label: dict.nav.team, href: href(locale, "team") },
    { label: dict.nav.about, href: href(locale, "about") },
    { label: dict.nav.insights, href: href(locale, "insights") },
    { label: dict.nav.latestNews, href: href(locale, "latestNews") },
    { label: dict.nav.contact, href: href(locale, "contact") },
  ];

  return (
    <html lang={locale} className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="min-h-dvh">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-[var(--color-forest)] focus:px-4 focus:py-3 focus:text-[var(--color-cream)]"
        >
          {dict.a11y.skip}
        </a>
        <Header
          locale={locale}
          items={items}
          homeHref={href(locale, "home")}
          cta={{ label: dict.nav.cta, href: href(locale, "contact") }}
          labels={{
            menu: dict.a11y.menu,
            closeMenu: dict.a11y.closeMenu,
            primaryNav: dict.a11y.primaryNav,
            switchLanguage: dict.a11y.switchLanguage,
          }}
        />
        <main id="content" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
