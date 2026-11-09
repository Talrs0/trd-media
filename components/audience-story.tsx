import Image from "next/image";
import Link from "next/link";
import { href, type Locale } from "@/content/site";
import { Arrow } from "./icons";

const copy = {
  th: {
    eyebrow: "THE NEXT GENERATION", title: "Gen Z · โอกาสของแบรนด์ในทุกวัน",
    body: "เราโฟกัสคนรุ่นใหม่ที่กำลังสร้างไลฟ์สไตล์ เลือกสิ่งที่ใช่ และก้าวสู่โลกการทำงาน เป็นช่วงเวลาที่แบรนด์สามารถเริ่มสร้างความคุ้นเคยและเติบโตไปด้วยกัน",
    cards: [["ไลฟ์สไตล์ที่กำลังก่อตัว", "ตั้งแต่มื้อโปรด การดูแลตัวเอง ไปจนถึงบริการที่ใช้ประจำ แบรนด์มีโอกาสเข้าไปเป็นส่วนหนึ่งของกิจวัตร"], ["ความคุ้มค่าที่มีความหมาย", "สื่อสารประโยชน์ให้ชัด พร้อมข้อเสนอที่เข้าใจง่ายและเหมาะกับชีวิตจริง"], ["เชื่อมโลกจริงกับออนไลน์", "ใช้จอเป็นจุดเริ่มต้น ให้ผู้ชมค้นหาต่อ ดูรายละเอียด หรือสแกนเพื่อติดต่อแบรนด์"], ["ความสัมพันธ์ระยะยาว", "เริ่มสร้างความคุ้นเคยตั้งแต่ชีวิตมหาวิทยาลัย และพัฒนาไปพร้อมความต้องการในแต่ละช่วงชีวิต"]],
    journey: "จากช่วงเวลาธรรมดา สู่โอกาสให้แบรนด์เป็นที่รู้จัก",
    steps: [["พบเห็น", "ในพื้นที่ที่ใช้ชีวิต"], ["สนใจ", "ด้วยข้อความที่ตรงบริบท"], ["ไปต่อ", "ค้นหา สแกน หรือพูดคุย"]],
    note: "แนวทางออกแบบการสื่อสารของ TRD · ผลตอบรับขึ้นอยู่กับทำเล ชิ้นงาน และข้อเสนอของแต่ละแคมเปญ",
    launch: "เริ่มที่ KMITL เติบโตไปกับ Gen Z", launchBody: "KMITL และชุมชนโดยรอบคือพื้นที่เริ่มต้นของเราในระยะนี้ เพื่อเรียนรู้จากทำเลจริงและพัฒนารูปแบบสื่อให้เหมาะกับชีวิตคนรุ่นใหม่ ก่อนวางแผนขยายไปยังชุมชนอื่นในอนาคต",
    now: "พื้นที่เริ่มต้น", next: "ทิศทางในอนาคต", future: "ชุมชนคนรุ่นใหม่เพิ่มเติม", link: "รู้จักกลุ่มผู้ชมของเรา", contact: "วางแผนแคมเปญกับเรา",
  },
  en: {
    eyebrow: "THE NEXT GENERATION", title: "Gen Z. Everyday opportunities for brands.",
    body: "We focus on young people building their routines, finding their preferences and taking their first career steps. This is an opportunity for brands to build familiarity and grow alongside them.",
    cards: [["Habits taking shape", "From favorite meals to personal care and everyday services, brands can find a place in evolving routines."], ["Value with a purpose", "Make the benefit clear, with an easy-to-understand offer that fits everyday needs."], ["Offline meets online", "Let a screen start the conversation, with a next step to search, explore or scan to connect."], ["A longer relationship", "Build familiarity during university life and adapt as needs change through later life stages."]],
    journey: "Turn everyday moments into brand discovery",
    steps: [["Notice", "In everyday spaces"], ["Explore", "A message that fits the moment"], ["Connect", "Search, scan or start a conversation"]],
    note: "TRD’s communication approach. Responses depend on the venue, creative and offer in each campaign.",
    launch: "Starting at KMITL. Growing with Gen Z.", launchBody: "KMITL and its surrounding community are our initial focus at this stage. We are learning from local venues and developing media around young people’s routines, before planning expansion into further communities.",
    now: "Initial focus", next: "Future direction", future: "More young-adult communities", link: "Meet our audience", contact: "Plan a campaign with us",
  },
};

function StoryIcon({ index }: { index: number }) {
  const paths = ["M5 20h22M8 20V9l8-5 8 5v11M13 20v-7h6v7", "m16 4 11 12-11 12L5 16Z M12 16l3 3 6-7", "M7 4h14v24H7zM11 8h6M12 24h4M23 11h6m-3-3 3 3-3 3", "M5 24 13 16l5 4 9-13M20 7h7v7"];
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[index]} /></svg>;
}

export function AudienceStory({ locale, home = false }: { locale: Locale; home?: boolean }) {
  const c = copy[locale];
  return <section className={"section audience-story" + (home ? "" : " illustrated-audience")}><div className="wrap">
    <div className="story-heading"><p className="eyebrow">{c.eyebrow}</p><h2>{c.title}</h2><p>{c.body}</p></div>
    <div className="story-cards">{c.cards.map(([title, body], i) => <article key={title}>{home ? <span className="story-icon"><StoryIcon index={i} /></span> : <div className="story-art"><Image src={"/images/gen-z-" + ["habits", "value", "connection", "growth"][i] + ".png"} alt="" fill sizes="(max-width: 767px) 90vw, 45vw" /></div>}<h3>{title}</h3><p>{body}</p></article>)}</div>
    <figure className="audience-journey"><figcaption>{c.journey}</figcaption><ol>{c.steps.map(([title, body], i) => <li key={title}>{!home && <div className="journey-art"><Image src={"/images/" + ["students-screen-flat.png", "gen-z-value.png", "gen-z-connection.png"][i]} alt="" fill sizes="(max-width: 767px) 85vw, 28vw" /></div>}<strong>{title}</strong><span>{body}</span></li>)}</ol><p>{c.note}</p></figure>
    {home && <Link className="text-link" href={href(locale,"audience")}>{c.link}<Arrow /></Link>}
  </div></section>;
}

export function LaunchStory({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return <section className="section launch-story"><div className="wrap feature-row"><div><p className="eyebrow">OUR FIRST CHAPTER</p><h2>{c.launch}</h2><p>{c.launchBody}</p><Link className="button primary" href={href(locale,"contact")}>{c.contact}<Arrow /></Link></div><div className="launch-path"><div><span>{c.now}</span><strong>KMITL</strong></div><Arrow /><div><span>{c.next}</span><strong>{c.future}</strong></div></div></div></section>;
}
