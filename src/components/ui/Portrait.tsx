import Image from "next/image";

type Props = {
  name: string;
  src?: string;
  alt?: string;
  pendingLabel: string;
  className?: string;
  priority?: boolean;
};

/**
 * Portrait frame. Until commissioned photography exists (brief §28) it shows
 * an editorial monogram rather than stock imagery.
 */
export function Portrait({ name, src, alt, pendingLabel, className = "", priority }: Props) {
  const initials = name
    .split(" ")
    .filter((p) => p[0] === p[0].toUpperCase())
    .map((p) => p[0])
    .join("");
  return (
    <div className={`relative aspect-[4/5] overflow-hidden rounded-xl bg-[var(--color-paper-warm)] ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          unoptimized={src.startsWith("https://")}
          preload={priority}
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover object-[center_20%] transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:scale-[1.02]"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col justify-between p-6" role="img" aria-label={`${name}, ${pendingLabel.toLowerCase()}`}>
          <span className="display relative text-[clamp(4rem,10vw,9rem)] text-[var(--color-bronze)] transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:scale-[1.02] origin-bottom-left">
            {initials}
          </span>
          <span className="meta relative self-end text-[var(--color-ink-soft)]">{pendingLabel}</span>
        </div>
      )}
    </div>
  );
}
