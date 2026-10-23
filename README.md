# HiddenTabby landing page

A buildless, static landing page for the HiddenTabby browser extension. The deployable files are in `dist/`; the matching HTML, CSS, JavaScript, and supplied images are kept at the project root as the editable source.

To preview the static files locally, run `python3 -m http.server 4173 --directory dist` from this directory and open `http://localhost:4173`.

The Chrome Web Store calls to action are placeholders for now. When the listing is live, replace the “coming soon” status in `index.html` with the listing link.
