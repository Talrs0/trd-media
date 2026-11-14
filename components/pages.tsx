import { CustomerBanner } from "./customer-banner";
import { AudienceStory } from "./audience-story";
import { EverydayLife, CampaignHighlights } from "./revision-interactions";
import Link from "next/link";
import { dictionary, fill } from "@/content/i18n";
import { dorm, dormEstimate, restaurant, restaurantEstimate } from "@/content/locations";
import { formatCopy, locationRows } from "@/content/presentation";
import { download, href, site, type Locale } from "@/content/site";
import { format } from "@/content/stats";
import { survey } from "@/content/survey";
import { Arrow, Footnote, Intro, Metrics, SectionTitle, Table } from "./ui";
import Image from "next/image";
import { Photo } from "./photo";

type Props = { locale: Locale };

export function Home({ locale }: Props) {
  const d = dictionary(locale);
  return <>
    <section className="hero dark">
      <Photo locale={locale} slot="hero" className="hero-background" priority />
      <div className="wrap hero-grid"><div className="hero-copy">
        <p className="eyebrow">{d.eyebrow}</p>
        <h1>{d.heroTitle.map((line, i) => <span key={line} className={i === 2 ? "accent-line" : ""}>{line}</span>)}</h1>
        <p className="hero-subtitle">{d.heroSubtitle}</p>
        <div className="actions">
          <Link className="button primary" href={href(locale, "contact")}>{d.visit}<Arrow direction="out" /></Link>
          <a className="button outline" href={download(locale, "media-kit")} download>{d.kit}<Arrow direction="down" /></a>
        </div>
      </div></div>
    </section>
    <EverydayLife locale={locale} />
    <AudienceStory locale={locale} />
    <section className="section light home-feature"><div className="wrap feature-row">
      <div className="venue-preview venue-photos">
        <figure><Photo locale={locale} slot="dorm" /><figcaption>{dorm.name[locale]}</figcaption></figure>
        <figure><Photo locale={locale} slot="restaurant" /><figcaption>{restaurant.name}</figcaption></figure>
      </div>
      <div className="feature-copy"><SectionTitle label={d.plan}>{d.nav.locations}</SectionTitle>
        {d.homeSections.locations.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <Link className="text-link" href={href(locale, "locations")}>{d.nav.locations}<Arrow /></Link>
      </div>
    </div></section>
    <CampaignHighlights locale={locale} />
    <section className="section light home-feature"><div className="wrap feature-row">
      <Photo locale={locale} slot="audience" /><div className="feature-copy"><SectionTitle>{d.nav.audience}</SectionTitle>
        {d.homeSections.audience.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<Link className="text-link" href={href(locale, "audience")}>{d.nav.audience}<Arrow /></Link>
      </div>
    </div></section>
  </>;
}

export function Locations({ locale }: Props) {
  const d = dictionary(locale);
  const l = d.location;
  const rows = locationRows(locale);
  const venues = [
    {
      kind: l.dorm, name: dorm.name[locale], address: dorm.address[locale], screens: dorm.screens, map: dorm.map, image: dorm.image, placement: dorm.placement,
      stats: [{ value: dorm.rooms, suffix: "+", label: l.rooms }, { value: dorm.residents, label: l.residents }],
      estimate: { value: dormEstimate.campaign, prefix: "≈", label: rows.campaignLabel }, rows: rows.dorm.filter(([label]) => label !== l.share),
    },
    {
      kind: l.restaurant, name: restaurant.name, address: restaurant.address, screens: restaurant.screens, map: restaurant.map, image: restaurant.image, placement: null,
      stats: [], estimate: { value: restaurantEstimate.monthly, label: l.monthly }, rows: rows.restaurant.filter(([label]) => label !== l.share),
    },
  ];
  return <><Intro locale={locale} page="locations" />
    <section className="section light"><div className="wrap venues">
      {venues.map(venue => <article className="venue" key={venue.name}>
        <div className="venue-visuals">
          <Photo locale={locale} slot={venue.kind === l.dorm ? "dorm" : "restaurant"} />
          {venue.placement && <Photo locale={locale} slot="placement" />}
        </div>
        <div className="venue-info">
          <p className="eyebrow">{venue.kind}</p><h2>{venue.name}</h2>
          <p>{venue.address ?? l.missingAddress}</p>
          <p>{venue.screens === null ? l.missingScreens : l.screens + " · " + venue.screens}</p>
          <a className="text-link" href={venue.map}>{venue.address ? l.map : l.mapSearch}<Arrow direction="out" /></a>
          <Metrics items={[venue.estimate]} />
          {venue.stats.length > 0 && <Metrics items={venue.stats} />}
        </div>
        <div className="venue-table"><Table caption={l.model} headers={[l.input, l.value]} rows={venue.rows} outputs={2} /></div>
      </article>)}
    </div></section>
  </>;
}

export function Audience({ locale }: Props) {
  return <><Intro locale={locale} page="audience" /><CampaignHighlights locale={locale} /></>;
}

export function Advertise({ locale }: Props) {
  const d = dictionary(locale);
  const f = d.format;
  const spec = formatCopy(locale);
  // The device diagram uses centimetres as its coordinate system.
  const diagonal = format.inches * 2.54;
  const [rw, rh] = format.resolution;
  const displayWidth = diagonal * rw / Math.hypot(rw, rh);
  const displayHeight = diagonal * rh / Math.hypot(rw, rh);
  return <><Intro locale={locale} page="advertise" />
    <section className="section light"><div className="wrap formats-grid">
      <figure className="device-figure"><svg viewBox="-21 -10 104 200" role="img" aria-label={f.visual}>
        <path d="M-11 0V170M-14 0h6m-6 170h6M0 179h55m-55-3v6m55-6v6" stroke="var(--muted)" strokeWidth=".5" fill="none" />
        <rect width={format.width} height={format.height} rx="2" fill="var(--ink)" stroke="var(--muted)" strokeWidth=".5"/>
        <rect x={(format.width - displayWidth) / 2} y="9" width={displayWidth} height={displayHeight} rx="0.8" fill="var(--muted)" />
        <circle cx="36" cy="49" r="10" fill="var(--pink)" /><path d="M9 63 46 42v37H9z" fill="var(--muted)" opacity=".7"/>
        <text x="27.5" y="72" fill="white" textAnchor="middle" fontSize="6">{format.ratio}</text>
        <text transform="translate(-15 85) rotate(-90)" fill="var(--ivory)" textAnchor="middle" fontSize="5">{format.height} cm</text>
        <text x="27.5" y="187" fill="var(--ivory)" textAnchor="middle" fontSize="5">{format.width} cm</text>
      </svg><figcaption>{f.visual}</figcaption></figure>
      <div><Table caption={f.specs} headers={[d.location.input, f.detail]} rows={spec.rows} />
        <Footnote>{d.notes.format}</Footnote>
        <div className="checklist"><h2>{f.checklist}</h2><ul>{spec.checklist.map(item => <li key={item}>{item}</li>)}</ul>
          <a className="button outline light-outline" href={download(locale, "spec-sheet")} download>{f.sheet}<Arrow direction="down" /></a>
        </div>
      </div>
    </div></section>

    <section className="section pale creative-section"><div className="wrap creative-layout">
      <div className="feature-copy">
        <SectionTitle label={locale === "th" ? "ชิ้นงานโฆษณา" : "Campaign creative"}>{locale === "th" ? "จากชิ้นงาน สู่จอในพื้นที่" : "From artwork to the screen"}</SectionTitle>
        <p>{locale === "th" ? "ตัวอย่างชิ้นงานของชาชักโกอิน ออกแบบในสัดส่วนแนวตั้งเพื่อแสดงเมนู สินค้า และข้อความของแบรนด์บนจอดิจิทัล" : "KO-IN Cha Chuck artwork uses a portrait format to present its menu, products and brand message on a digital screen."}</p>
        <p>{locale === "th" ? "เลือกภาพเพื่อดูชิ้นงานเต็มขนาด และติดต่อเราเพื่อวางแผนรูปแบบโฆษณาที่เหมาะกับธุรกิจของคุณ" : "Select an image to view the full artwork, or contact us to plan a screen campaign for your business."}</p>
        <Link className="text-link" href={href(locale, "contact")}>{d.quote}<Arrow /></Link>
      </div>
      <div className="creative-gallery">
        <a href="/images/koin-ad-food.png" target="_blank" rel="noopener noreferrer"><Photo locale={locale} slot="adFood" /></a>
        <a href="/images/koin-ad-menu.png" target="_blank" rel="noopener noreferrer"><Photo locale={locale} slot="adMenu" /></a>
      </div>
    </div></section>
    <section className="section pale"><div className="wrap">
      <SectionTitle>{f.report}</SectionTitle>
      <ol className="steps">{f.steps.map(([title, body], index) => <li key={title}><span className="ordinal" aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol>
      <Footnote>{d.notes.reporting}</Footnote>
    </div></section>
  </>;
}

export function About({ locale }: Props) {
  const d = dictionary(locale);
  return <><Intro locale={locale} page="about" />
    {d.whatCards.map(([title, body], index) => <section className="section light" key={title}>
      <div className={"wrap feature-row about-row" + (index === 0 ? " reverse" : "")}>
        <Photo locale={locale} slot={index === 0 ? "about" : "community"} />
        <div className="feature-copy"><h2>{title}</h2><p>{body}</p></div>
      </div>
    </section>)}
  </>;
}

export function Contact({ locale }: Props) {
  const d = dictionary(locale);
  const c = d.contact;
  return <><CustomerBanner locale={locale} />
    <section className="section light"><div className="wrap contact-grid direct-contact" id="contact-options">
      <aside className="contact-card">
        <p className="eyebrow">{c.direct}</p><h2>{site.person}</h2>
        <address><a href={"mailto:" + site.email}>{site.email}</a><br /><a href={"tel:" + site.tel}>{site.phone}</a></address>
        <div className="actions"><a className="button primary" href={"tel:" + site.tel}>{c.call}<Arrow /></a>
          <a className="button outline light-outline" href={"mailto:" + site.email}>{locale === "th" ? "ส่งอีเมล" : "Email us"}<Arrow /></a>
        </div>
      </aside>
      <div className="line-contact">
        <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
          <defs><filter id="brand-qr" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="0.638554 0 0 0 0.361446 0.759036 0 0 0 0.240964 0.578313 0 0 0 0.421687 0 0 0 1 0" />
          </filter></defs>
        </svg>
        <h2>{locale === "th" ? "เพิ่มเพื่อนบน LINE" : "Add us on LINE"}</h2>
        <p>{locale === "th" ? "สแกน QR Code เพื่อติดต่อเราและสอบถามเกี่ยวกับแคมเปญ" : "Scan the QR code to contact us about your campaign."}</p>
        <Image src="/images/line-contact-qr.png" alt={locale === "th" ? "QR Code สำหรับเพิ่มเพื่อนบน LINE" : "QR code to add us on LINE"} width={540} height={540} unoptimized className="line-qr" />
        <a className="text-link" href="/images/line-contact-qr.png" download="TRD-Media-LINE.png">{locale === "th" ? "บันทึก QR Code" : "Save QR code"}<Arrow direction="down" /></a>
      </div>
    </div></section>
    <section className="section pale"><div className="wrap">
      <details className="appendix"><summary>{c.appendix}</summary>
        <div className="appendix-grid">{c.groups.map((group, index) => <Table key={group} caption={group} headers={[c.response, d.audience.count]}
          rows={survey.appendix[index].map((count, row) => [c.responses[index][row], count])} />)}</div>
        <Footnote>{fill(d.notes.appendix, { n: survey.responses, sources: survey.collectionSources })}</Footnote>
      </details>
    </div></section>
  </>;
}



