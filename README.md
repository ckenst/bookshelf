# My bookshelf

A personal, visual bookshelf of 175 books from Kindle and Audible. Narrow spines are grouped by added year across two stacked decade shelves, with the 2020s above the 2010s; selecting a book reveals its real published cover and added date. The local preview also has reading statuses, known completion dates, and editing controls. Completion dates appear only when explicitly supplied.

## Inspiration

This project was inspired by Ben Tossell’s [“Craft and taste” essay](https://www.bensbites.com/p/craft-and-taste) and the [scrollable bookshelf he built from his book history](https://bentossell.com/books/). This is a personal adaptation using my Kindle and Audible library.

## Open

Run `npm start` in this folder, then visit http://127.0.0.1:4173. The server binds only to your own computer. Node.js is the only dependency; no installation step is needed.

You can also open `dist/index.html` directly, but file mode cannot write repository files. Run the local server when editing so notes, statuses, formats, and Publisher Details links are written to the tracked `dist/library-edits.json` file. Use **Export library** for an additional JSON backup.

The main view has a current-decade shelf on top and an older-decade shelf below, with books grouped by added year inside each shelf. Click a narrow spine for the real published cover, reading status, notes, and added date. On the local preview, the searchable reading journal is collapsed beneath the shelf and the book dialog can edit status, format, notes, and the Publisher Details URL. The published site displays the committed status and notes without the journal or editing controls. The local server saves edits to `dist/library-edits.json` and keeps a browser copy as a fallback. On first use, existing browser edits are merged into that tracked file.

There are no external fonts, image requests, analytics, cloud storage, or account connections. Publisher links open only when clicked. Spines are cover-based reconstructions made with the built-in image generation tool using the official covers as references; they are not verified physical-spine scans. The journal and detail dialog display actual published cover images from publishers, ebook retailers, or Audible, stored locally. New Audible spines crop their real cover images and show titles in separate tooltips. Cover editions are reference editions and may differ from your Kindle or Audible editions. Books without a cover asset and source are excluded from display. See dist/assets/SOURCES.md for provenance. Book subtitles and publisher links were checked against the official publisher pages.

## Checks

`npm test` runs the library model tests using Node's built-in test runner.

## When exports arrive

Keep raw Kindle/Audible exports in an ignored `private-data/` folder. They must be inspected before an importer is written. A one-time manual Audible history scan was imported in November 2026; no automatic sync is implemented. The signed-in Chrome tab was saved locally to collect the published Audible covers. Audible activity dates are observations, not inferred start or finish dates. One returned Audible purchase, one explicit sample, and three listening-only titles that appeared to be samples were excluded. Current seed records live in `dist/model.js`; the UI is `dist/index.html`, `dist/style.css`, and `dist/app.js`.

The first shelf records were based on details supplied November 5, 2026; that reporting date is not a purchase or reading-start date. The current shelf spans purchase years 2019–2026. Listening observations never determine purchase-year placement.

## Spine sizing and navigation

Real front covers are cropped without distortion for the narrow spines. Hovering or focusing a spine shows its title and full author names in a separate tooltip; selecting it opens the intact published cover. The artwork is not a verified physical spine scan.

Spine width is a visual estimate: `round(25 + pages * 0.035)` CSS pixels, limited to 38–64 pixels, with at least 46 pixels for long titles. Height is estimated from the square root of the reference page count plus a stable variation by book, limited to 224–304 pixels. Unknown page counts use a 320-page baseline. The sizes add visual variety; they are not physical measurements of Kindle or Audible editions.

Year buttons slide the selected purchase-year group to the center and highlight it. Every book stays on the shelf; All books restores equal emphasis. The shelf also supports mouse dragging and native horizontal touch scrolling.

User corrections on November 6, 2026 set previously unknown statuses to Unread and Engineering Management and Protocols to Reading. A one-time per-record status revision applies these corrections to old browser saves while preserving notes and subsequent status edits.
