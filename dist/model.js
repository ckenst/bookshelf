(function () {
  const statuses = ['reading', 'finishing', 'finished', 'want-to-read', 'unknown', 'unfinished'];
  const formats = ['unspecified', 'kindle', 'audible', 'both'];
  const seedBooks = [
    { id: 'vibe-coding', title: 'Vibe Coding', authors: 'Gene Kim & Steve Yegge', status: 'finishing', format: 'audible', notes: '', theme: 'vibe', addedAt: '2026-06-25', listeningEvents: [{ date: '2026-09-27', status: 'unfinished' }], subtitle: 'Building Production-Grade Software With GenAI, Chat, Agents, and Beyond', source: 'https://www.simonandschuster.com/books/Vibe-Coding/Gene-Kim/9781966280026' },
    { id: 'protocols', title: 'Protocols', authors: 'Andrew Huberman', status: 'reading', format: 'unspecified', notes: '', theme: 'protocols', subtitle: 'An Operating Manual for the Human Body', source: 'https://www.simonandschuster.com/books/Protocols/Andrew-D-Huberman/9781668032145' },
    {"id": "kissinger", "title": "Kissinger", "authors": "Walter Isaacson", "addedAt": "2026-07-27", "status": "unknown", "format": "unspecified", "notes": ""},
    {"id": "titan", "title": "Titan", "authors": "Ron Chernow", "addedAt": "2026-06-25", "status": "unknown", "format": "unspecified", "notes": ""},
    {"id": "the-nvidia-way", "title": "The Nvidia Way", "authors": "Tae Kim", "addedAt": "2026-03-21", "status": "unknown", "format": "unspecified", "notes": ""},
    {"id": "breakneck", "title": "Breakneck", "authors": "Dan Wang", "addedAt": "2026-03-06", "status": "unknown", "format": "unspecified", "notes": ""},
    {"id": "the-comfort-crisis", "title": "The Comfort Crisis", "authors": "Michael Easter", "addedAt": "2025-11-22", "status": "unknown", "format": "unspecified", "notes": ""},
    {"id": "engineering-management", "title": "Engineering Management for the Rest of Us", "authors": "Author not specified", "status": "unfinished", "format": "audible", "notes": "", "listeningEvents": [{"date": "2026-02-12", "status": "unfinished"}]},
    {"id": "the-goal", "title": "The Goal", "authors": "Goldratt", "status": "finished", "format": "audible", "notes": "", "listeningEvents": [{"date": "2025-11-07", "status": "finished"}]}
  ];
  const artwork = {
  "kissinger": {
    "cover": "assets/kissinger-cover.jpg",
    "coverSource": "https://d28hgpri8am2if.cloudfront.net/book_images/cvr9780743286978_9780743286978_hr.jpg",
    "pages": 896,
    "source": "https://www.simonandschuster.com/books/Kissinger/Walter-Isaacson/9780743286978",
    "spineAtlas": "assets/library-spines-five.png",
    "spineIndex": 0,
    "spineCount": 5
  },
  "titan": {
    "cover": "assets/titan-cover.jpg",
    "coverSource": "https://images2.penguinrandomhouse.com/cover/9781400077304",
    "pages": 832,
    "source": "https://www.penguinrandomhouse.com/books/26804/titan-by-ron-chernow/",
    "spineAtlas": "assets/library-spines-five.png",
    "spineIndex": 1,
    "spineCount": 5
  },
  "the-nvidia-way": {
    "cover": "assets/the-nvidia-way-cover.jpg",
    "coverSource": "https://cdn2.wwnorton.com/wwnproducts/TRADE/0/1/9781324086710/9781324086710_198.jpg",
    "pages": 272,
    "source": "https://wwnorton.co.uk/books/9781324086710-the-nvidia-way",
    "spineAtlas": "assets/library-spines-five.png",
    "spineIndex": 2,
    "spineCount": 5
  },
  "breakneck": {
    "cover": "assets/breakneck-cover.jpg",
    "coverSource": "https://cdn2.wwnorton.com/wwnproducts/TRADE/6/3/9781324106036/9781324106036_300.jpg",
    "source": "https://wwnorton.co.uk/books/9781324106036-breakneck",
    "spineAtlas": "assets/library-spines-five.png",
    "spineIndex": 3,
    "spineCount": 5
  },
  "the-comfort-crisis": {
    "cover": "assets/the-comfort-crisis-cover.jpg",
    "coverSource": "https://images3.penguinrandomhouse.com/cover/9780593138762",
    "pages": 320,
    "source": "https://www.penguinrandomhouse.com/books/634446/the-comfort-crisis-by-michael-easter/",
    "spineAtlas": "assets/library-spines-five.png",
    "spineIndex": 4,
    "spineCount": 5
  },
  "engineering-management": {
    "cover": "assets/engineering-management-cover.jpg",
    "coverSource": "https://cdn.kobo.com/book-images/055f57a1-a648-4ce0-a18b-ed5e054b90bb/1200/1200/False/engineering-management-for-the-rest-of-us.jpg",
    "source": "https://www.engmanagement.dev/",
    "spineAtlas": "assets/library-spines-two.png",
    "spineIndex": 0,
    "spineCount": 2
  },
  "the-goal": {
    "cover": "assets/the-goal-cover.jpg",
    "coverSource": "https://is1-ssl.mzstatic.com/image/thumb/Publication6/v4/be/ef/8e/beef8e8d-4ef4-e5b5-112f-74ebdec85c7b/TheGOAL.jpg/1200x900wz.jpg",
    "pages": 408,
    "source": "https://books.apple.com/no/book/the-goal/id669145472",
    "spineAtlas": "assets/library-spines-two.png",
    "spineIndex": 1,
    "spineCount": 2
  },
  "vibe-coding": {
    "cover": "assets/vibe-coding-cover.jpg",
    "coverSource": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781966280026/vibe-coding-9781966280026_hr.jpg",
    "pages": 384,
    "spineAtlas": "assets/cover-based-spines.png",
    "spineIndex": 0,
    "spineCount": 2
  },
  "protocols": {
    "cover": "assets/protocols-cover.jpg",
    "coverSource": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668032145/protocols-9781668032145_xlg.jpg",
    "pages": 688,
    "spineAtlas": "assets/cover-based-spines.png",
    "spineIndex": 1,
    "spineCount": 2
  }
};
  for (const book of seedBooks) Object.assign(book, artwork[book.id]);
  seedBooks.find(b => b.id === "engineering-management").authors = "Sarah Drasner";
  seedBooks.find(b => b.id === "the-goal").authors = "Eliyahu M. Goldratt & Jeff Cox";
  function filterBooks(books, query = '', status = 'all') {
    const search = query.trim().toLowerCase();
    return books.filter(b => `${b.title} ${b.authors}`.toLowerCase().includes(search) &&
      (status === 'all' || (status === 'reading' ? ['reading', 'finishing'].includes(b.status) : b.status === status)));
  }
  function updateBook(books, id, patch) {
    if (patch.status !== undefined && !statuses.includes(patch.status)) throw Error('Unknown reading status');
    if (patch.format !== undefined && !formats.includes(patch.format)) throw Error('Unknown book format');
    return books.map(b => b.id !== id ? b : { ...b, status: patch.status ?? b.status, format: patch.format ?? b.format, notes: typeof patch.notes === 'string' ? patch.notes : b.notes });
  }
  function parseLibrary(text) {
    const books = JSON.parse(text);
    const ids = new Set();
    if (!Array.isArray(books) || !books.length) throw Error('Expected a library of books');
    for (const b of books) {
      if (!b || typeof b.id !== 'string' || ids.has(b.id) || typeof b.title !== 'string' || typeof b.authors !== 'string' || !statuses.includes(b.status) || !formats.includes(b.format) || typeof b.notes !== 'string') throw Error('Invalid library record');
      ids.add(b.id);
    }
    return books;
  }
  function mergeLibrary(saved) {
    const existing = new Map(saved.map(b => [b.id, b]));
    const merged = seedBooks.map(seed => {
      const old = existing.get(seed.id);
      if (!old) return { ...seed };
      const book = { ...seed, ...old, ...artwork[seed.id], authors: seed.authors };
      if (seed.addedAt) book.addedAt = seed.addedAt;
      if (seed.listeningEvents) book.listeningEvents = seed.listeningEvents.map(e => ({ ...e }));
      if (old.format === 'unspecified' && seed.format !== 'unspecified') book.format = seed.format;
      return book;
    });
    return merged.concat(saved.filter(b => !seedBooks.some(seed => seed.id === b.id)));
  }
  function shelfBooks(books) {
    return books.filter(b => typeof b.cover === 'string' && /^assets\/[a-z0-9-]+-cover\.jpg$/.test(b.cover) && typeof b.coverSource === 'string' && b.coverSource.startsWith('https://'));
  }
  function shelfDimensions(book) {
    const pages = Number.isFinite(book.pages) && book.pages > 0 ? book.pages : 320;
    return { width: Math.max(18, Math.min(52, Math.round(8 + pages * 0.045))), height: 260, estimated: true };
  }
  const api = { seedBooks, filterBooks, updateBook, parseLibrary, mergeLibrary, shelfBooks, shelfDimensions };
  if (typeof module !== 'undefined') module.exports = api;
  else globalThis.BookshelfModel = api;
})();
