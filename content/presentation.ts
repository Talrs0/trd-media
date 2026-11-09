import { dictionary, fill } from "./i18n";
import { dorm, dormEstimate, restaurant, restaurantEstimate } from "./locations";
import { format, plays } from "./stats";
import { number, type Locale } from "./site";

export function locationRows(locale: Locale) {
  const d = dictionary(locale).location;
  const campaignLabel = fill(d.campaign, { days: dorm.days });
  return {
    campaignLabel,
    dorm: [
      [d.residents, number(dorm.residents)], [d.share, dorm.studentShare + "%"],
      [d.passages, dorm.passages], [d.visibility, dorm.visibility + "%"], [d.duration, dorm.days + " " + d.days],
      [d.daily, "≈ " + number(dormEstimate.daily)], [campaignLabel, "≈ " + number(dormEstimate.campaign)],
    ],
    restaurant: [
      [d.openDays, restaurant.openDays], [d.monthlyVisits, number(restaurant.monthlyVisits)],
      [d.dailyVisits, "≈ " + number(restaurantEstimate.dailyVisits)], [d.share, restaurant.studentShare + "%"],
      [d.visibility, restaurant.visibility + "%"], [d.openDaily, number(restaurantEstimate.daily)], [d.monthly, number(restaurantEstimate.monthly)],
    ],
  } as const;
}

export function formatCopy(locale: Locale) {
  const d = dictionary(locale).format;
  const resolution = format.resolution.join(" × ") + " px (" + format.ratio + ")";
  const duration = format.slot + " " + d.seconds;
  const values = [
    fill(d.display, { inches: format.inches }), resolution, fill(d.unit, { height: format.height, width: format.width }), duration,
    format.loop + " " + d.minutes, format.hours + " " + d.hours,
    fill(d.plays, plays), plays.share + "%",
  ];
  return {
    rows: d.labels.map((label, index) => [label, values[index]] as const),
    checklist: [format.extensions.join(" / "), resolution, duration, d.audio],
  };
}

