"use client";

import { useState } from "react";
import Link from "next/link";
import { href, type Locale } from "@/content/site";
import { dictionary } from "@/content/i18n";
import { Photo } from "./photo";
import { Arrow } from "./icons";

// Pending editorial content lives here; no sample numbers are presented as facts.
const copy = {
  en: {
    everyday: "Part of everyday university life", choose: "Explore everyday spaces",
    places: ["Restaurants", "Cafés", "Gyms", "Shared spaces"],
    placeholder: "Placeholder · final copy to come",
    stats: "Campaign highlights", topics: ["Audience", "Locations", "Engagement"],
    pending: "Statistics coming soon", value: "Pending", detail: "Placeholder · verified figures will be added here.",
    select: "Choose a highlight",
  },
  th: {
    everyday: "ส่วนหนึ่งของชีวิตมหาวิทยาลัยในทุกวัน", choose: "สำรวจพื้นที่ในชีวิตประจำวัน",
    places: ["ร้านอาหาร", "คาเฟ่", "ยิม", "พื้นที่ส่วนกลาง"],
    placeholder: "ข้อความตัวอย่าง · รอเนื้อหาฉบับจริง",
    stats: "ไฮไลต์แคมเปญ", topics: ["กลุ่มผู้ชม", "ทำเล", "การมีส่วนร่วม"],
    pending: "รอสถิติฉบับยืนยัน", value: "รอข้อมูล", detail: "ข้อความตัวอย่าง · จะเพิ่มตัวเลขที่ยืนยันแล้วที่นี่",
    select: "เลือกไฮไลต์",
  },
};

export function EverydayLife({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const [selected, setSelected] = useState(0);
  const d = dictionary(locale);
  return <section className="section network-section"><div className="wrap network-panel">
    <div className="everyday-visual"><Photo locale={locale} slot="network" className="network-photo" /><span className="place-badge" key={selected}>{c.places[selected]}</span></div>
    <div className="network-copy"><p className="eyebrow">TRD MEDIA</p><h2>{c.everyday}</h2>
      <div className="choice-group" role="group" aria-label={c.choose}>{c.places.map((place, i) => <button key={place} type="button" aria-pressed={selected === i} onClick={() => setSelected(i)}>{place}</button>)}</div>
      <div className="everyday-response" role="status"><h3>{c.places[selected]}</h3><p className="placeholder-copy">{c.placeholder}</p></div>
      <Link className="text-link" href={href(locale, "about")}>{d.nav.about}<Arrow /></Link>
    </div>
  </div></section>;
}

export function CampaignHighlights({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const d = dictionary(locale);
  const [selected, setSelected] = useState(0);
  return <section className="section campaign-highlights" aria-labelledby="highlights-title"><div className="wrap highlights-grid">
    <Photo locale={locale} slot="campaign" />
    <div className="highlights-copy"><p className="eyebrow">{c.stats}</p><h2 id="highlights-title">{d.heroSubtitle}</h2>
      <div className="choice-group" role="group" aria-label={c.select}>{c.topics.map((topic, i) => <button type="button" key={topic} aria-pressed={selected === i} onClick={() => setSelected(i)}>{topic}</button>)}</div>
      <div className="highlight-result" role="status"><p className="eyebrow">{c.topics[selected]}</p><p className="pending-value">{c.value}</p><h3>{c.pending}</h3><p className="placeholder-copy">{c.detail}</p></div>
      <Link className="button primary" href={href(locale, "contact")}>{d.quote}<Arrow /></Link>
    </div>
  </div></section>;
}
