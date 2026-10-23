# HiddenTabby landing page

A small static Astro site for the HiddenTabby browser extension. The homepage and privacy policy live in `src/pages/`; shared page chrome and the feature image switcher are Astro components. Images are in `public/assets/`, and Astro generates the deployable site in `dist/`.

## Development

Install dependencies with `npm install`, then run `npm run dev` to preview changes locally.

Run `npm test` to build the static site and check the generated pages, feature switcher, privacy disclosures, and local images. `npm run preview` serves the most recent build.

The build keeps the privacy policy at `/privacy.html` for the Chrome Web Store policy link. The store listing calls to action remain placeholders; replace them with the listing link when it is live.
