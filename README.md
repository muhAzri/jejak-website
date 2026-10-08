# jejak-website

The landing page and privacy policy for **Jejak**, an Android app that records your runs and walks (distance, duration, pace and route) and keeps every session on your phone. No account, no server.

- App: [Jejak on Google Play](https://play.google.com/store/apps/details?id=com.muhazri.jejak)
- Site: [jejak.zrifapps.my.id](https://jejak.zrifapps.my.id)

## Pages

The site is bilingual. Indonesian is the default language and English lives under `/en`.

| Page           | Indonesian | English       |
| -------------- | ---------- | ------------- |
| Landing        | `/`        | `/en`         |
| Privacy policy | `/privacy` | `/en/privacy` |

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router, `cacheComponents` enabled)
- React 19
- Tailwind CSS 4, loaded through Turbopack
- TypeScript

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Configuration

| Variable               | Default            | Purpose                                                                 |
| ---------------------- | ------------------ | ----------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | `https://jejak.zrifapps.my.id` | Public origin used for canonical URLs, hreflang, sitemap, robots.txt and Open Graph |

Set it in production if the site is served from a different domain.

## Project structure

```
app/
├── (id)/              Indonesian routes: /, /privacy
├── (en)/en/           English routes: /en, /en/privacy
├── _components/       Page components (landing, privacy, phone mockups, icons)
├── _content/          All page copy, per language (landing.ts, privacy.ts, og.ts)
├── _lib/
│   ├── seo.ts         Site URL, routes and shared metadata helpers
│   ├── og.tsx         Open Graph image renderer
│   └── og-fonts/      Fonts bundled for OG image generation
├── manifest.ts        Web app manifest
├── robots.ts          robots.txt
└── sitemap.ts         sitemap.xml with hreflang alternates
```

Each language has its own route group and root layout, so `<html lang>` is correct per page.

## Editing copy

All text lives in `app/_content/`, with one object per language (`id` and `en`). When you change copy, update both languages.

- `landing.ts`: landing page text, including the copy inside the phone mockups
- `privacy.ts`: privacy policy sections and the contact email
- `og.ts`: short copy for the social share images

If the privacy policy changes in substance, also update its effective date (`updated`) in both languages.

## SEO

- Canonical and hreflang links for every page
- Open Graph and Twitter metadata
- Generated Open Graph images per page and language (`opengraph-image.tsx`)
- `sitemap.xml`, `robots.txt` and a web manifest
- JSON-LD structured data (`WebSite` and `MobileApplication`) on the landing page

## Author

Built by [Muhammad Azri](https://github.com/muhAzri).
