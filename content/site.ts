export const site = {
  name: "TRD Media",
  origin: "https://trdmedia.co",
  area: { en: "Lat Krabang, Bangkok, Thailand", th: "ลาดกระบัง กรุงเทพฯ ประเทศไทย" },
  person: "Kirakorn Damnoenwong",
  phone: "098 830 8006",
  tel: "+66988308006",
  email: "kirakorn@trdmedia.co",
} as const;

export const locales = ["th", "en"] as const;
export type Locale = (typeof locales)[number];
export const pages = ["home", "locations", "audience", "advertise", "about", "contact"] as const;
export type Page = (typeof pages)[number];
export const href = (locale: Locale, page: Page) => (locale === "en" ? "/en" : "") + (page === "home" ? "" : "/" + page) || "/";
export const download = (locale: Locale, kind: "media-kit" | "spec-sheet") => (locale === "en" ? "/en" : "") + "/downloads/" + kind;
export const number = (value: number) => value.toLocaleString("en-US");
export const maps = (query: string) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
export const source = {
  qs: "https://www.topuniversities.com/universities/king-mongkuts-institute-technology-ladkrabang-kmitl",
  kmitl: "https://www.eng.kmitl.ac.th/20530/",
  lazada: "https://www.bangkokbiznews.com/business/business/1145729",
  icsc: "https://www.icsc.com/uploads/about/2023ICSC_Gen_Z_Report.pdf",
  adecco: "https://www.adecco.com/-/jssmedia/Project/Adecco/AdeccoTH/adeccothailand_salaryguide2026",
  belink: "https://www.marketingoops.com/media-ads/thai-university-students-consumer-insights-research/",
  oaaa: "https://oaaa.org/wp-content/uploads/2024/04/Digital-OOH-Place-Based-Ads-4.29.2024.pdf",
} as const;
