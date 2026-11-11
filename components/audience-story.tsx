import Link from "next/link";
import { href, type Locale } from "@/content/site";
import { Arrow } from "./icons";

const copy = {
  th: {
    eyebrow: "THE NEXT GENERATION", title: "Gen Z · โอกาสของแบรนด์ในทุกวัน",
    cards: [["ไลฟ์สไตล์ที่กำลังก่อตัว", "ตั้งแต่มื้อโปรด การดูแลตัวเอง ไปจนถึงบริการที่ใช้ประจำ แบรนด์มีโอกาสเข้าไปเป็นส่วนหนึ่งของกิจวัตร"], ["ความคุ้มค่าที่มีความหมาย", "สื่อสารประโยชน์ให้ชัด พร้อมข้อเสนอที่เข้าใจง่ายและเหมาะกับชีวิตจริง"], ["เชื่อมโลกจริงกับออนไลน์", "ใช้จอเป็นจุดเริ่มต้น ให้ผู้ชมค้นหาต่อ ดูรายละเอียด หรือสแกนเพื่อติดต่อแบรนด์"], ["ความสัมพันธ์ระยะยาว", "เริ่มสร้างความคุ้นเคยตั้งแต่ชีวิตมหาวิทยาลัย และพัฒนาไปพร้อมความต้องการในแต่ละช่วงชีวิต"]],
    journey: "จากช่วงเวลาธรรมดา สู่โอกาสให้แบรนด์เป็นที่รู้จัก",
    steps: [["พบเห็น", "ในพื้นที่ที่ใช้ชีวิต"], ["สนใจ", "ด้วยข้อความที่ตรงบริบท"], ["ไปต่อ", "ค้นหา สแกน หรือพูดคุย"]],
    link: "รู้จักกลุ่มผู้ชมของเรา", contact: "วางแผนแคมเปญกับเรา",
  },
  en: {
    eyebrow: "THE NEXT GENERATION", title: "Gen Z. Everyday opportunities for brands.",
    cards: [["Habits taking shape", "From favorite meals to personal care and everyday services, brands can find a place in evolving routines."], ["Value with a purpose", "Make the benefit clear, with an easy-to-understand offer that fits everyday needs."], ["Offline meets online", "Let a screen start the conversation, with a next step to search, explore or scan to connect."], ["A longer relationship", "Build familiarity during university life and adapt as needs change through later life stages."]],
    journey: "Turn everyday moments into brand discovery",
    steps: [["Notice", "In everyday spaces"], ["Explore", "A message that fits the moment"], ["Connect", "Search, scan or start a conversation"]],
    link: "Meet our audience", contact: "Plan a campaign with us",
  },
};

function StoryIcon({ index }: { index: number }) {
  const paths = ["M5 20h22M8 20V9l8-5 8 5v11M13 20v-7h6v7", "m16 4 11 12-11 12L5 16Z M12 16l3 3 6-7", "M7 4h14v24H7zM11 8h6M12 24h4M23 11h6m-3-3 3 3-3 3", "M5 24 13 16l5 4 9-13M20 7h7v7"];
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[index]} /></svg>;
}

export function AudienceStory({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const placeholder = locale === "th" ? "ข้อความตัวอย่าง · รอเนื้อหาฉบับจริง" : "Placeholder · final copy to come";
  return <section className="section audience-story"><div className="wrap">
    <div className="story-heading"><p className="eyebrow">{c.eyebrow}</p><h2>{c.title}</h2><p className="placeholder-copy">{placeholder}</p></div>
    <div className="story-cards">{c.cards.map(([title], i) => <article key={title}><span className="story-icon"><StoryIcon index={i} /></span><h3>{title}</h3><p className="placeholder-copy">{placeholder}</p></article>)}</div>
    <figure className="audience-journey"><figcaption>{c.journey}</figcaption><ol>{c.steps.map(([title], i) => <li key={title}><details><summary><span className="journey-index">0{i + 1}</span><strong>{title}</strong><span className="journey-prompt">{locale === "th" ? "ดูรายละเอียด +" : "Explore +"}</span></summary><p className="placeholder-copy">{placeholder}</p></details></li>)}</ol></figure>
    <Link className="text-link" href={href(locale,"audience")}>{c.link}<Arrow /></Link>
  </div></section>;
}
