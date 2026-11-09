"use client";

import Image from "next/image";
import { useState } from "react";
import type { Locale } from "@/content/site";

const customers = [
  { name: "ชาชักโกอิน · KO-IN", image: "customer-koin.png" },
  { name: "OR", image: "customer-or.png" },
  { name: "Me Smile", image: "customer-me-smile.png" },
];

export function CustomerBanner({ locale }: { locale: Locale }) {
  const [paused, setPaused] = useState(false);
  const thai = locale === "th";
  return <section className="customer-banner" aria-labelledby="customer-title">
    <div className="wrap customer-heading">
      <p className="eyebrow">{thai ? "แบรนด์ที่เดินทางไปกับเรา" : "Brands on the journey with us"}</p>
      <h1 id="customer-title">{thai ? "ให้แบรนด์ของคุณ เป็นส่วนหนึ่งของทุกวัน" : "Make your brand part of everyday life."}</h1>
      <p>{thai ? "จากเรื่องราวของแบรนด์ สู่ช่วงเวลาที่คนรุ่นใหม่พบเห็น" : "Bring your brand’s story into the moments that matter to a new generation."}</p>
    </div>
    <div className="customer-marquee" data-paused={paused}>
      <div className="customer-track">
        {[0, 1].map(group => <div className="customer-logo-group" key={group} aria-hidden={group === 1 ? true : undefined}>
          {[...customers, ...customers].map((customer, i) => <div className="customer-logo-item" key={i} aria-hidden={i >= 3 ? true : undefined}>
            <div className="customer-logo-circle"><Image src={"/images/" + customer.image} width={180} height={180} alt={group === 0 && i < 3 ? customer.name : ""} sizes="150px" loading="eager" /></div>
          </div>)}
        </div>)}
      </div>
    </div>
    <button type="button" className="marquee-control" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? (thai ? "เล่นการเคลื่อนไหว" : "Resume animation") : (thai ? "หยุดการเคลื่อนไหว" : "Pause animation")}</button>
  </section>;
}
