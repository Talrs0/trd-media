import { maps } from "./site";
export const dorm = {
  name: { en: "Ratchapruek Women Dormitory", th: "หอพักสตรีราชพฤกษ์" },
  address: {
    en: "Soi Lat Krabang 52/1, Lat Krabang Road, Lat Krabang, Bangkok",
    th: "ซ.ลาดกระบัง 52/1 ถ.ลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร",
  },
  map: maps("หอพักสตรีราชพฤกษ์ ซอยลาดกระบัง 52/1"),
  screens: null as number | null,
  image: "/images/dorm-entrance.svg",
  placement: "/images/screen-placement.svg",
  rooms: 800,
  residents: 796,
  studentShare: 78,
  passages: 3,
  visibility: 75,
  days: 28,
} as const;

export const restaurant = {
  name: "KO-IN Cha Chuck",
  address: null as string | null,
  map: maps("KO-IN Cha Chuck Lat Krabang Bangkok"),
  screens: null as number | null,
  image: "/images/ko-in-storefront.svg",
  openDays: 24,
  monthlyVisits: 4000,
  studentShare: 60,
  visibility: 75,
} as const;

const dormDaily = dorm.residents * dorm.studentShare / 100 * dorm.passages * dorm.visibility / 100;
export const dormEstimate = { daily: Math.round(dormDaily), campaign: Math.round(dormDaily * dorm.days) };
const restaurantMonthly = restaurant.monthlyVisits * restaurant.studentShare / 100 * restaurant.visibility / 100;
export const restaurantEstimate = {
  dailyVisits: Math.round(restaurant.monthlyVisits / restaurant.openDays),
  daily: Math.round(restaurantMonthly / restaurant.openDays),
  monthly: Math.round(restaurantMonthly),
};
