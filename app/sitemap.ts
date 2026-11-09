import type { MetadataRoute } from "next";
import { href, locales, pages, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap(locale => pages.map(page => ({
    url: site.origin + href(locale, page),
    alternates: { languages: { th: site.origin + href("th", page), en: site.origin + href("en", page), "x-default": site.origin + href("th", page) } },
  })));
}
