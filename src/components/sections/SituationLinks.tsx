import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { Dictionary } from "@/content";
import { href, type Locale } from "@/lib/i18n";

const destinations = [
  { page: "euCivilService", section: "career", image: "brussels-palace-of-justice.png" },
  { page: "euCivilService", section: "investigations", image: "landmark-cinquantenaire.png" },
  { page: "euCivilService", section: "medical", image: "landmark-atomium.png" },
  { page: "euCivilService", section: "career", image: "practice-european-institutions.png" },
  { page: "privateLaw", section: "business", image: "practice-brussels-private-law.png" },
  { page: "privateLaw", section: "private-international", image: "landmark-bruges-belfry.png" },
] as const;

export function SituationLinks({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const fr = locale === "fr";

  return <div className="situation-browser">
    <div className="situation-copy">
      <h2 id="needs-title" className="display text-h2">{dict.home.needsTitle}</h2>
    </div>
    <div id="situation-links" className="situation-grid">
      {dict.home.needs.map((need, i) => <Link key={need.title} href={href(locale, destinations[i].page, destinations[i].section)} className="situation-link">
        <div className={`situation-image situation-image-${i}`}><Image src={`/images/${destinations[i].image}`} alt="" fill sizes="(min-width: 1200px) 366px, (min-width: 1024px) calc(33vw - 32px), (min-width: 768px) calc(50vw - 36px), calc(100vw - 48px)" /></div>
        <h3 className="display">{need.title}</h3>
        <p>{need.body}</p>
        <span className="situation-action">{fr ? "Explorer" : "Explore"}<Icon name="arrow" size={18} /></span>
      </Link>)}
    </div>
  </div>;
}
