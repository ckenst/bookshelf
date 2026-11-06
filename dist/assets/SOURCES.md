# Artwork provenance

The book covers were downloaded from the official publisher on November 5, 2026. The website serves them locally without contacting the publisher.

- `vibe-coding-cover.jpg`: https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781966280026/vibe-coding-9781966280026_hr.jpg
- `protocols-cover.jpg`: https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668032145/protocols-9781668032145_xlg.jpg

Publisher pages:

- https://www.simonandschuster.com/books/Vibe-Coding/Gene-Kim/9781966280026
- https://www.simonandschuster.com/books/Protocols/Andrew-D-Huberman/9781668032145

`cover-based-spines.png` is a two-column texture sheet made with the built-in image generation tool, using those two cover files as image references. The left half is Vibe Coding; the right half is Protocols. These are reconstructions, not verified photographs or scans of the physical spines. The official cover images are shown separately in the journal and detail dialog.

Prompt: Create two flat book spine textures side by side, no gaps or margins, no perspective or scene, edge-to-edge and equal-sized. Reconstruct plausible spine designs faithfully from the official front-cover references. Left: Vibe Coding, black with rainbow binary streams, glowing green-white VIBE and white condensed CODING, Gene Kim & Steve Yegge, IT Revolution. Right: Protocols, warm off-white, cyan-blue bold title, orange-red gradient sphere, Andrew D. Huberman, PhD, Simon Element. Crisp text down the long axis; preserve the cover identities. Do not claim verification of physical spine designs.


## Additional real covers — November 6, 2026

`cover-sources.json` records the exact download URL for all nine real front covers. The seven new covers were visually inspected and all nine were verified to load in the browser. Kissinger is from Simon & Schuster; Titan and The Comfort Crisis from Penguin Random House; Breakneck and The Nvidia Way from W. W. Norton; Engineering Management for the Rest of Us from Kobo; The Goal from Apple Books. These are real published reference editions, not necessarily the user's exact digital editions.

`library-spines-five.png` and `library-spines-two.png` were made with the built-in image generation tool using those real covers as references. The five-column sheet is Kissinger, Titan, The Nvidia Way, Breakneck, The Comfort Crisis. The two-column sheet is Engineering Management for the Rest of Us and The Goal. These reconstructed spines are not verified scans. Real front covers are never generated.

Prompt set: Generate aligned flat vertical spine textures based faithfully on the supplied real covers, preserving each cover's colors, title typography, motifs and exact authors. No margins, gaps, perspective, front covers or scene. Five-column atlas: brown/white Kissinger; sage/black Titan; blue electric rays The Nvidia Way; gray-green/white/yellow Breakneck; white/black/blue mountain-door The Comfort Crisis. Two-column atlas: slate/copper ornate Engineering Management; light/dark blue, white serif and red accents The Goal. Explicitly reconstruct plausible spines without claiming physical scan authenticity.

Reference page counts used for thickness: Vibe Coding 384, Protocols 688, Kissinger 896 (Simon & Schuster); Titan 832 and The Comfort Crisis 320 (Penguin Random House); The Nvidia Way 272 (Norton); The Goal 408 (25th anniversary reference edition listed by retailers). Breakneck and Engineering Management currently use the standard display baseline; no page count is claimed. Source book URLs are in each record's `source` field.


Readability update: the active shelf now renders native text over lightly tinted, undistorted crops of the real covers. Generated spine atlases remain on disk for provenance but are no longer rendered. Published author credits were checked against the publisher/author sources recorded in the model; Protocols uses Andrew D. Huberman.


## Four additional books — November 6, 2026

The real front cover of Elon Musk comes from Simon & Schuster. Wool, Shift and Dust use publisher covers from Penguin; the older author-site image URLs returned 404. Exact sources are recorded in cover-sources.json and each book record. These reference editions may differ from the user's own editions. Reference page counts are 688, 576, 592 and 416 respectively, from the linked publisher pages.

library-spines-four.png is a built-in ImageGen reconstruction using those four real cover references, not a scan. Left to right: Elon Musk, Wool, Shift, Dust. Prompt brief: produce four equal-width flat vertical spine textures in one square atlas, edge-to-edge with no gaps, margins, perspective or front covers. Preserve each supplied cover's palette and motif: black/silver portrait Elon Musk; teal misty valley Wool; icy cyan corridor Shift; ochre desert Dust. Use the exact titles, Walter Isaacson for Elon Musk and Hugh Howey for the trilogy. Clearly treat these as cover-based reconstructions.
