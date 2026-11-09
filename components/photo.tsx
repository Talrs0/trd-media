import Image from "next/image";
import { media } from "@/content/media";
import type { Locale } from "@/content/site";

export function Photo({ slot, locale, className = "", priority = false }: {
  slot: keyof typeof media; locale: Locale; className?: string; priority?: boolean;
}) {
  const photo = media[slot];
  return <div className={"photo-slot " + className} data-photo-slot={slot} data-illustration={photo.caption ? "true" : undefined} aria-hidden={photo.src ? undefined : true}>
    {photo.src && <Image src={photo.src} alt={photo.alt[locale]} fill sizes="(max-width: 767px) 100vw, 50vw" priority={priority} />}
    {photo.caption && <span className="photo-caption">{photo.caption[locale]}</span>}
  </div>;
}
