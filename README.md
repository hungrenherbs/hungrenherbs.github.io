# Hung-Ren Ginseng & Herbs

Bilingual website for Hung-Ren Ginseng & Herbs Inc (宏仁堂), Doraville, Georgia. GitHub repository: https://github.com/hungrenherbs/hungrenherbs.github.io. This project contains only the store website and its store assets.

## Pages

- Home: introduction, the store's history since 1985, herbs, and acupuncture.
- Ginseng & Herbs: two product categories with current availability and prices available by phone.
- Acupuncture: Ling Liu, L.Ac., her biography, credentials, approach, and phone appointments. Her title is Licensed Acupuncturist.
- Visit Us: store hours, address, directions, contact number, and common questions.

Each page has an English and Chinese version. Language switching preserves the current page. Mobile visitors have persistent call and directions buttons. The current contact method is phone: **(770) 452-8289**.

## Run locally

Requires Node.js, with no packages to install.

```sh
npm run build
npm run check
npm start
```

Open http://127.0.0.1:4173/. All deployable files are in `dist/`.

## Edit

- `site-content.mjs`: reviewed English and Simplified Chinese copy.
- `build.mjs`: HTML templates and page generation. Rebuild after editing either file.
- `dist/styles.css`: responsive visual styles.
- `dist/site.js`: mobile navigation and product category filters.
- `dist/assets/`: supplied store photos and original logo, copied without altering the originals.

The repository does not contain customer information, account credentials, or the owner's unrelated personal documents. Original Word documents remain outside the website project.

## Hosting

The intended website address is https://hungrenherbs.github.io/. GitHub Pages builds and publishes the `dist/` directory on each push to `main` using `.github/workflows/pages.yml`. In the repository's Pages settings, the source is GitHub Actions. The site presents store information; it does not process online purchases, payments, bookings, or customer data.

To use another host, set `SITE_URL` when running `node build.mjs`, then upload `dist/`. This updates canonical links, social metadata, and the sitemap. `.openai/hosting.json` records the earlier Sites deployment.

## Online appointments

The first version uses **Call to book**, as requested. It does not collect appointment requests, send email or SMS, or claim to reserve time slots. For a later online booking phase, connect a business scheduling account, set appointment durations and availability, and provide its public booking URL. Only then should the booking link be added to the site.

Store hours are from the supplied introduction; practitioner availability is confirmed by phone. Product categories reflect the information and photos supplied, not a live stock inventory. No product prices or treatment guarantees have been invented.

## Language and credential review

The English uses U.S. customer-facing language; the Chinese is localized rather than translated word for word. Place names retain Doraville and Buford Highway for recognition and navigation. Phone, address, license numbers, store hours, and the 1985 founding date match the supplied materials. “Licensed Acupuncturist” / “持照针灸师” is used consistently. Store hours are distinguished from appointment availability.

NCBAHM's 2026 update states that NCCAOM is now NCBAHM, and the former Oriental Medicine credential is now Acupuncture and Herbal Medicine, with prior OM Diplomates automatically recognized under AHM. The website uses the updated name and includes “formerly NCCAOM.” This terminology check does not independently verify Ling Liu's current individual license or certification status.

- https://www.ncbahm.org/about-us/press/ncbahm-newsletter-summer-2026/
- https://medicalboard.georgia.gov/licensure-information/acupuncturist
