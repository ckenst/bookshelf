# My bookshelf

A personal bookshelf with thirteen books, including **Vibe Coding** (nearly finished) and **Protocols** (reading). Known purchase dates and listening entries are recorded separately; missing details are left unset.

## Open

Run `npm start` in this folder, then visit http://127.0.0.1:4173. The server binds only to your own computer. Node.js is the only dependency; no installation step is needed.

You can also open `dist/index.html` directly. Use a consistent browser and address so saved notes remain available. Browser storage can be cleared; use **Export library** to keep a JSON backup.

The main view is a visual shelf grouped by purchase year. Click a narrow spine for the real published cover and history; expand the edit controls to update status, format, or notes. The searchable reading journal is collapsed beneath the shelf. Changes are stored in this browser's local storage.

There are no external fonts, image requests, analytics, cloud storage, or account connections. Publisher links open only when clicked. Spines are cover-based reconstructions made with the built-in image generation tool using the official covers as references; they are not verified physical-spine scans. The journal and detail dialog display actual published cover images from publishers, ebook retailers, or Audible, stored locally. New Audible spines crop their real cover images and use HTML lettering. Cover editions are reference editions and may differ from your Kindle or Audible editions. Books without a cover asset and source are excluded from display. See dist/assets/SOURCES.md for provenance. Book subtitles and publisher links were checked against the official publisher pages.

## Checks

`npm test` runs the library model tests using Node's built-in test runner.

## Publish at bookshelf.kenst.com

The site is static: GitHub Pages serves `dist/` directly. `server.cjs` is only for local preview. The workflow in `.github/workflows/pages.yml` runs the tests and deploys `dist/` on pushes to `main`, or when run manually from GitHub Actions. No build command, dependencies, or deployment secrets are needed.

1. Put the project in a GitHub repository with a `main` branch. A public repository supports Pages on GitHub Free; private repositories require an eligible paid plan. Review the files before committing; `private-data/`, `work/`, `outputs/`, and local `.env` files are ignored.
2. In repository **Settings → Pages**, select **GitHub Actions** as the source.
3. Push to `main` or run **Deploy bookshelf** from the Actions tab. Confirm the initial Pages deployment succeeds.
4. Verify ownership of `kenst.com` in your GitHub account's Pages settings using the TXT record GitHub supplies. In the repository's Pages settings, set the custom domain to `bookshelf.kenst.com` before pointing DNS at GitHub.
5. At your DNS provider, add a `CNAME` with host `bookshelf` and target `<github-account>.github.io` (replace the placeholder with the repository owner's account). Do not include a protocol, repository name, or path. Leave the root domain and `www` records pointing to Ghost.
6. Once GitHub validates DNS and provisions the certificate, enable **Enforce HTTPS**. Check `https://bookshelf.kenst.com`, including covers and book details. Add a Bookshelf navigation link in Ghost pointing to this address.

GitHub Actions deployments use the custom domain in Pages settings; a `CNAME` file in `dist/` is not required. DNS and certificate provisioning may take up to 24 hours.

Published book records live in `dist/model.js`. To publish an update for everyone, edit those records and push to `main`. Edits made through the website remain in that visitor's browser; they do not update the repository or sync between devices. Existing browser edits can override later published status and notes on that browser. Export local notes before moving from localhost to the hosted address: browser storage does not transfer between addresses, and an import UI is not implemented.

The deployed site and all files committed to a public repository are public. Keep personal exports and unpublished notes in the ignored folders. GitHub Pages logs visitors' IP addresses for security even though the app adds no analytics.

References: [custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), and [Pages availability and data collection](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

## When exports arrive

Keep raw Kindle/Audible exports in an ignored `private-data/` folder. They must be inspected before an importer is written. A one-time manual Audible history scan was imported in November 2026; no automatic sync is implemented. The signed-in Chrome tab was saved locally to collect the published Audible covers. Audible activity dates are observations, not inferred start or finish dates. One returned purchase and one sample were excluded. Current seed records live in `dist/model.js`; the UI is `dist/index.html`, `dist/style.css`, and `dist/app.js`.

The initial shelf records what you reported on November 5, 2026. This is not a purchase or reading-start date. The shelf groups known purchase dates into 2025 and 2026; books without purchase dates stay in a separate Date unknown group. Listening observations never determine purchase-year placement.

## Spine sizing and navigation

Spine lettering is native HTML text, never squeezed bitmap text. Real front covers are cropped without distortion and lightly tinted behind the text; the click-through cover remains intact. Author credits use the complete published names.

Spine thickness is a visual estimate: `round(25 + pages * 0.035)` CSS pixels, limited to 38–64 pixels, with at least 46 pixels for long titles. Unknown page counts use a disclosed 320-page baseline. Heights stay at 260 pixels. These are readability-oriented display sizes, not physical measurements.

Year buttons slide the selected purchase-year group to the center and highlight it. Every book stays on the shelf; All books restores equal emphasis. The shelf also supports mouse dragging and native horizontal touch scrolling.

User corrections on November 6, 2026 set previously unknown statuses to Unread and Engineering Management and Protocols to Reading. A one-time per-record status revision applies these corrections to old browser saves while preserving notes and subsequent status edits.


## Additional reading history

Protocols has purchase month 2026-10 with no exact day; month-only dates display without an invented day. Engineering Management was purchased 2025-10-25. Elon Musk was purchased 2025-08-22 and finished 2025-12-12 (the year is interpreted from the user's surrounding 2025 context). Wool, Shift and Dust each have separate exact 2025 purchase and completion dates. Only The Goal still lacks a purchase date. Explicit completion dates are distinct from listening-history observations.
