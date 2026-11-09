import { dictionary } from "./i18n";
import { dorm, restaurant } from "./locations";
import { formatCopy, locationRows } from "./presentation";
import { href, site, type Locale } from "./site";

export const files = ["media-kit", "spec-sheet"] as const;
type File = (typeof files)[number];

const escapeHtml = (value: string | number) => String(value).replace(/[&<>"']/g, char =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] ?? char);

function table(title: string, headers: string[], rows: readonly (readonly [string, string | number])[]) {
  const header = headers.map(value => "<th scope=\"col\">" + escapeHtml(value) + "</th>").join("");
  const body = rows.map(([label, value]) => "<tr><th scope=\"row\">" + escapeHtml(label) + "</th><td>" + escapeHtml(value) + "</td></tr>").join("");
  return "<table><caption>" + escapeHtml(title) + "</caption><thead><tr>" + header + "</tr></thead><tbody>" + body + "</tbody></table>";
}

export function serveDownload(locale: Locale, file: string) {
  if (!files.includes(file as File)) return new Response(null, { status: 404 });
  const d = dictionary(locale);
  const isKit = file === "media-kit";
  const title = isKit ? d.intro.home[0] : d.format.specs;
  const location = locationRows(locale);
  const format = formatCopy(locale);
  const p = (value: string) => "<p>" + escapeHtml(value) + "</p>";
  const note = (value: string) => "<p class=\"note\">" + escapeHtml(value) + "</p>";
  const venues = isKit
    ? p(d.intro.home[1]) + table(dorm.name[locale], [d.location.input, d.location.value], location.dorm) + note(d.notes.dorm) +
      table(restaurant.name, [d.location.input, d.location.value], location.restaurant) + note(d.notes.restaurant)
    : "";
  const list = "<ul>" + format.checklist.map(item => "<li>" + escapeHtml(item) + "</li>").join("") + "</ul>";
  const html = "<!doctype html><html lang=\"" + locale + "\"><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>" + escapeHtml(title) + " | TRD Media</title>" +
    "<style>body{margin:3rem auto;padding:0 1.5rem;max-width:48rem;color:#30283d;background:#faf4f8;font:16px/1.65 system-ui,sans-serif}h1{line-height:1.2}table{border-collapse:collapse;width:100%;margin:1.5rem 0 .5rem}caption{text-align:left;font-weight:700;font-size:1.25rem}td,th{text-align:left;padding:.45rem;border-bottom:1px solid #ae9cc4}thead{background:#e7ddeb}.note{font-size:.875rem;color:#625771}a{color:#60426f}@media print{body{background:white;margin:0}tr{break-inside:avoid}}</style>" +
    "<main><b>TRD MEDIA</b><h1>" + escapeHtml(title) + "</h1>" + venues +
    table(d.format.specs, [d.location.input, d.format.detail], format.rows) + note(d.notes.format) +
    "<h2>" + escapeHtml(d.format.checklist) + "</h2>" + list +
    "<h2>" + escapeHtml(d.ctaTitle) + "</h2>" + p(d.ctaBody) + p(site.person) +
    "<a href=\"tel:" + site.tel + "\">" + site.phone + "</a> · <a href=\"mailto:" + site.email + "\">" + site.email +
    "</a> · <a href=\"" + site.origin + href(locale, "contact") + "\">trdmedia.co</a></main></html>";
  return new Response(html, { headers: {
    "Content-Type": "text/html; charset=utf-8",
    "Content-Disposition": "attachment; filename=\"trd-" + file + "-" + locale + ".html\"",
    "X-Content-Type-Options": "nosniff",
  } });
}
