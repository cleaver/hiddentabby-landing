# HiddenTabby landing page

A small static Astro site for the HiddenTabby browser extension. The homepage and privacy policy live in `src/pages/`; shared page chrome and the feature image switcher are Astro components. Images are in `public/assets/`, and Astro generates the deployable site in `dist/`.

## Development

Install dependencies with `npm install`, then run `npm run dev` to preview changes locally.

Run `npm test` to build the static site and check the generated pages, feature switcher, privacy disclosures, and local images. `npm run preview` serves the most recent build.

The public page URLs are `/`, `/privacy`, and `/support`. The site emits canonical links and a sitemap for those HTTPS URLs. Submit `https://hiddentabby.com/sitemap.xml` in Google Search Console after deployment. The store listing calls to action remain placeholders; replace them with the listing link when it is live.
