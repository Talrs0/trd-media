import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { About, Advertise, Audience, Contact, Home, Locations } from "@/components/pages";
import { Shell } from "@/components/ui";
import { dictionary } from "@/content/i18n";
import { href, locales, pages, site, type Locale, type Page } from "@/content/site";

const screens = { home: Home, locations: Locations, audience: Audience, advertise: Advertise, about: About, contact: Contact };

type Props = { params: Promise<{ slug?: string[] }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap(locale => pages.map(page => ({
    slug: [...(locale === "en" ? ["en"] : []), ...(page === "home" ? [] : [page])],
  })));
}

async function resolve(params: Props["params"]) {
  const { slug = [] } = await params;
  const locale: Locale = slug[0] === "en" ? "en" : "th";
  const parts = locale === "en" ? slug.slice(1) : slug;
  const page = (parts[0] ?? "home") as Page;
  if (parts.length > 1 || (parts.length && page === "home") || !pages.includes(page)) notFound();
  return { locale, page };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, page } = await resolve(params);
  const d = dictionary(locale);
  const [heading, description] = d.intro[page];
  const title = heading + " | " + site.name;
  const canonical = href(locale, page);
  return {
    metadataBase: new URL(site.origin), title, description,
    alternates: { canonical, languages: { th: href("th", page), en: href("en", page), "x-default": href("th", page) } },
    openGraph: {
      title, description, url: canonical, siteName: site.name, type: "website", locale: locale === "th" ? "th_TH" : "en_US",
      alternateLocale: [locale === "th" ? "en_US" : "th_TH"],
      images: [{ url: "/images/social-card.png", width: 1200, height: 630, alt: site.name + " · " + d.intro.home[0] }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/social-card.png"] },
    icons: { icon: "/images/icon.svg" },
  };
}

export default async function PageView({ params }: Props) {
  const { locale, page } = await resolve(params);
  const View = screens[page];
  const business = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": site.origin + "/#organization", name: site.name, url: site.origin, email: site.email, telephone: site.tel, logo: site.origin + "/images/trd-wordmark.png" },
      { "@type": "LocalBusiness", "@id": site.origin + "/#business", name: site.name, url: site.origin, email: site.email, telephone: site.tel,
        parentOrganization: { "@id": site.origin + "/#organization" },
        areaServed: { "@type": "Place", name: site.area[locale] } },
    ],
  };
  return <Shell locale={locale} page={page}><View locale={locale} />
    {page === "home" && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business).replace(/</g, "\\u003c") }} />}
  </Shell>;
}
