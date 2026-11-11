# TRD Media

A Thai-first, bilingual marketing site for TRD Media. The Next.js App Router prerenders all 12 localized pages. Visitors contact TRD directly by phone, email or the supplied LINE QR code. The project uses TypeScript, Tailwind CSS, and self-hosted variable fonts for Inter and Noto Sans Thai.

## Run locally

Use Node.js 22 or later and npm. Extract the project and run these commands from the directory that contains `package.json`.

```sh
npm ci
npm run dev
```

Open [the local site](http://localhost:3000). The Thai homepage is `/` and the English homepage is `/en`. Each language switch keeps visitors on the equivalent page. To verify a production build locally, run `npm run build`, then `npm run start`.

## Edit content

| File | What to edit |
| --- | --- |
| `content/i18n/th.ts` and `content/i18n/en.ts` | Translated copy, labels, page descriptions, and footnotes |
| `content/locations.ts` | Venue details, installed screen counts, traffic and contact model inputs |
| `content/stats.ts` | University snapshot, third-party research, salary ranges and screen specifications |
| `content/survey.ts` | TRD survey counts, spending bands and appendix |
| `content/site.ts` | Contact details, canonical origin and research links |

The contact estimates use unrounded inputs. The site calculates survey percentages from counts and scheduled plays from the format inputs. The downloadable media kit and spec sheet are printable, offline HTML documents in both languages. They use the same data as the web pages. Open a downloaded file and select Print to save a PDF.

## Layout and photo slots

The layout follows the Focus Media Thailand reference, adapted for TRD's purple palette. It uses a wide hero, centered introduction, rounded statistic cards, alternating photo and text sections, and a centered contact footer.

The homepage combines a generated tilted aerial Bangkok concept map, flat illustrations and supplied venue images. The original TRD logo is used in the header and footer. Supplied dormitory and KO-IN screen images appear on Home, Locations and About; two KO-IN creatives appear in an Advertise gallery with full-size links. The map’s markers illustrate expansion opportunities, not an inventory of operating locations. Generation details and the final map prompt are in `public/images/GENERATED-ARTWORK.md`. Asset provenance is in `public/images/SUPPLIED-MATERIALS.md`.

| Slot | Photo needed |
| --- | --- |
| `hero` | Generated oblique Bangkok expansion concept |
| `pageBanner` | Wide background for inner page titles |
| `network` | TRD's screen network or university surroundings |
| `venueOverview` | Archived illustration; homepage now uses dorm and restaurant photos |
| `dorm` | Supplied Ratchapruek screen image |
| `restaurant` | Supplied KO-IN screen image |
| `placement` | Supplied laundry-area screen image |
| `campaign` | Campaign display photo, composed for the left half of a banner |
| `audience` | University student community |
| `formats` | Actual portrait screen unit |
| `about` | TRD's university advertising service |
| `community` | University neighborhood or shared space |
| `footer` | Wide neighborhood or skyline photo |

The slots reserve space before images load. The technical scale diagram remains on the Advertise page. `social-card.png` provides the branded social preview.

## Direct contact

The contact page provides phone and email links and the original supplied LINE QR code, with a download link for mobile visitors. The inquiry form and submission endpoint have been removed. Contact details are in `content/site.ts`. The QR asset is `public/images/line-contact-qr.png`.

## Deploy to Vercel

1. Commit the project to your Git repository and import it as a new project in Vercel. Select the **Next.js** framework preset. If the project sits inside another repository, set the root directory to the folder containing this README.
2. Deploy and verify both languages, downloads, phone/email links and LINE QR scanning on the preview URL.
3. Open **Settings → Domains** and add `trdmedia.co`. Add `www.trdmedia.co` if you use it and set it to redirect to the apex domain.
4. Copy the records shown by Vercel into the domain’s authoritative DNS provider. Vercel typically assigns an A record for the apex and a CNAME for `www`. Use the exact values shown for the project. Remove conflicting records for those hostnames and preserve email and other unrelated records.
5. Wait for Vercel to verify the records and issue TLS. Open the HTTPS domain and check the language toggle, contact options, and `/sitemap.xml`.

[Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs) · [Vercel domain setup](https://vercel.com/docs/domains/working-with-domains/add-a-domain)

## Content to confirm

- Dorm room count, occupancy and student share with dorm management. Confirm installed screen counts for both venues.
- KO-IN’s exact address and pin. The location card links to a Google Maps search while its pin is pending.
- Enrollment year and campus coverage for the QS snapshot in the brief. The current QS profile shows different enrollment figures. [QS university profile](https://www.topuniversities.com/universities/king-mongkuts-institute-technology-ladkrabang-kmitl)
- Actual campaign reporting scope, location photos, and the verified LINE contact link.

The weekly spending chart uses the five respondent counts embedded in slide 9 of the supplied company profile. Source links and qualifications appear alongside published statistics.

## Audience presentation

The Home and Audience pages now use a qualitative Gen Z story, icon cards and a notice–explore–connect infographic. KMITL is positioned as the initial launch focus, with further communities described as a future direction. Detailed source data remains in the content modules and planning materials. The audience page no longer presents statistical tables or percentages. Edit bilingual story copy in `components/audience-story.tsx`.

## Website revision — November 2026

The website uses the rose / plum / ivory palette in `app/globals.css`. The header stays visible on scroll. The concept caption, welcome strip, creative-preparation homepage teaser, launch story and global closing CTA have been removed. The Audience page retains its route and now hosts the interactive campaign highlights instead of the illustrated four-card story.

Pending copy is explicit in both languages:

- `components/audience-story.tsx`: compact homepage cards and expandable Notice → Explore → Connect journey.
- `components/revision-interactions.tsx`: everyday-space selector and Audience / Locations / Engagement statistics selector. Replace the pending labels with verified statistics and their periods/sources when supplied; no numerical demo data is used.

Venue pages use balanced, uncropped imagery and restyled tables. Student share is hidden only in the venue presentation. The underlying model inputs, estimates and downloadable planning documents are preserved. Dormitory estimates remain approximately 1,397 daily contacts and 39,115 contacts per 28 days; restaurant estimates remain 75 per open day and 1,800 per month. These are estimated contacts, not unique audience measurements.

The two campaign screenshots in the revision PDF refer to the same visual treatment. The repository contains one original campaign banner; it is retained once per relevant page as an interactive highlights section.

## Cloudflare Pages deployment

For the existing `trd-media.pages.dev` site, run `npm install` followed by `npm run build:cloudflare`. Upload the **contents** of `out/` as a new production deployment in the existing Cloudflare Pages project. The static build includes all localized routes, images, fonts, and downloadable HTML planning documents. `public/_headers` preserves download response headers on Cloudflare Pages. The default Next.js server build remains available with `npm run build`.

For a Git-connected Cloudflare Pages project, set the production branch to `main`, the build command to `npm run build:cloudflare`, and the output directory to `out`. A direct-upload project requires a fresh upload for each release.
