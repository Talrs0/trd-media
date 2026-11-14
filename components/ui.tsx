import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { dictionary } from "@/content/i18n";
import { href, site, type Locale, type Page } from "@/content/site";
import { AnimatedNumber } from "./motion";
import { Photo } from "./photo";
import { media } from "@/content/media";
import { ThemeToggle } from "./theme-toggle";

import { Arrow } from './icons';
export { Arrow } from './icons';

export function Logo() {
  return <Image className="logo-image" src="/images/trd-wordmark.png" alt="TRD Media" width={2169} height={725} sizes="(max-width: 767px) 112px, 140px" priority />;
}

export function Shell({ locale, page, children }: { locale: Locale; page: Page; children: ReactNode }) {
  const d = dictionary(locale);
  const other = locale === "th" ? "en" : "th";
  const navigation = ["home", "about", "audience", "advertise", "locations", "contact"] as const;
  return <>
    <svg width="0" height="0" className="wordmark-filter" aria-hidden="true">
      <defs>
        {/* Use the green channel to make the supplied image's white backdrop transparent. */}
        <filter id="trd-wordmark-cutout" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 -5 0 0 4.9" />
          <feComposite in2="SourceGraphic" operator="in" result="wordmark-alpha" />
          <feFlood className="logo-tint" floodColor="var(--rose)" />
          <feComposite in2="wordmark-alpha" operator="in" />
        </filter>
      </defs>
    </svg>
    <a className="skip" href="#main">{d.skip}</a>
    <header className="header" data-page={page}>
      <div className="wrap header-inner">
        <Link className="brand-link" href={href(locale, "home")}><Logo /></Link>
        <nav className="main-nav" aria-label={d.navLabel}>
          {navigation.map(item => <Link key={item} href={href(locale, item)} aria-current={item === page ? "page" : undefined}>{d.nav[item]}</Link>)}
        </nav>
        <ThemeToggle locale={locale} />
        <Link className="locale" href={href(other, page)} hrefLang={other} aria-label={"TH / EN · " + d.language}><span className={locale === "th" ? "selected" : ""}>TH</span><span className="locale-divider" aria-hidden="true">/</span><span className={locale === "en" ? "selected" : ""}>EN</span></Link>
      </div>
      <details className="mobile-menu">
        <summary><span className="mobile-menu-label">{d.menu}</span><span aria-hidden="true">☰</span></summary>
        <nav className="mobile-nav wrap" aria-label={d.navLabel}>
          {navigation.map(item => <Link key={item} href={href(locale, item)} aria-current={item === page ? "page" : undefined}>{d.nav[item]}</Link>)}
        </nav>
      </details>
    </header>
    <main id="main">{children}</main>
    {media.footer.src && <Photo locale={locale} slot="footer" className="footer-photo" />}
    <footer className="footer"><div className="wrap footer-inner">
      <Link className="brand-link" href={href(locale, "home")}><Logo /></Link>
      <p>{d.footer}</p>
      <h2>{d.nav.contact}</h2>
      <address>{site.person}<br /><a href={"tel:" + site.tel}>{site.phone}</a><br /><a href={"mailto:" + site.email}>{site.email}</a></address>
      <nav aria-label={d.navLabel}>{navigation.map(item => <Link key={item} href={href(locale, item)}>{d.nav[item]}</Link>)}</nav>
    </div></footer>
  </>;
}

export function Intro({ locale, page }: { locale: Locale; page: Exclude<Page, "home"> }) {
  const d = dictionary(locale);
  return <section className="intro dark"><Photo locale={locale} slot="pageBanner" className="intro-photo" /><div className="wrap">
    <p className="eyebrow"><span className="status-dot" />{d.nav[page]}</p>
    <h1>{d.intro[page][0]}</h1><p className="intro-copy">{d.intro[page][1]}</p>
  </div></section>;
}

export function Footnote({ children, links, id }: { children: ReactNode; links?: readonly (readonly [string, string])[]; id?: string }) {
  return <p className="footnote" id={id}><span aria-hidden="true" className="note-mark">↳</span><span>{children}{links?.map(([label, url]) => <span key={url}> <a href={url}>{label}</a></span>)}</span></p>;
}

export type Metric = { value: string | number; label: string; note?: ReactNode; prefix?: string; suffix?: string };
export function Metrics({ items }: { items: readonly Metric[] }) {
  return <dl className="metrics" style={{ "--metric-count": items.length } as React.CSSProperties}>
    {items.map(({ value, label, note, prefix, suffix }) => <div className="metric" key={label}>
      <dt>{label}</dt><dd>{typeof value === "number" ? <AnimatedNumber value={value} prefix={prefix} suffix={suffix} /> : value}</dd>
      {note && <dd className="metric-note">{note}</dd>}
    </div>)}
  </dl>;
}

export function Table({ caption, headers, rows, outputs = 0 }: { caption: string; headers: readonly string[]; rows: readonly (readonly (string | number)[])[]; outputs?: number }) {
  return <table className="data-table"><caption>{caption}</caption>
    <thead><tr>{headers.map(item => <th key={item} scope="col">{item}</th>)}</tr></thead>
    <tbody>{rows.map(([first, ...values], i) => <tr key={first} className={i >= rows.length - outputs ? "output" : undefined}>
      <th scope="row">{first}</th>{values.map((value, j) => <td key={j}>{value}</td>)}
    </tr>)}</tbody>
  </table>;
}

export function SectionTitle({ label, children }: { label?: string; children: ReactNode }) {
  return <div className="section-title">{label && <p className="eyebrow">{label}</p>}<h2>{children}</h2></div>;
}




