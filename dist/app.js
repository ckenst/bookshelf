(() => {
  const { seedBooks, filterBooks, updateBook, parseLibrary, mergeLibrary, shelfBooks, shelfDimensions } = BookshelfModel;
  const key = 'personal-bookshelf-v1';
  const $ = id => document.getElementById(id);
  const labels = { reading: 'Reading', finishing: 'Nearly finished', finished: 'Finished', 'want-to-read': 'Want to read', unknown: 'Status unknown', unfinished: 'Not finished' };
  let books = mergeLibrary([]);
  let activeId;
  let toastTimer;
  function notify(message) { $('toast').textContent = message; $('toast').classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => $('toast').classList.remove('visible'), 4000); }
  try { const saved = localStorage.getItem(key); if (saved) books = mergeLibrary(parseLibrary(saved)); }
  catch { notify('Saved library could not be loaded. The supplied library is shown.'); }
  function element(tag, className, text) { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; }
  function coverImage(b, className) {
    const image = element('img', className);
    image.src = b.cover;
    image.alt = `${b.title} — published book cover`;
    return image;
  }
  function dateLabel(value) {
    return new Date(value + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
  function historyText(book) {
    const lines = [];
    if (book.addedAt) lines.push('Purchased / added ' + dateLabel(book.addedAt));
    for (const event of book.listeningEvents || []) lines.push('Listening entry ' + dateLabel(event.date) + ' (' + labels[event.status].toLowerCase() + ')');
    return lines.join(' · ');
  }
  function openBook(id) {
    const book = books.find(b => b.id === id); activeId = id;
    $('detail-title').textContent = book.title; $('detail-authors').textContent = book.authors;
    $('detail-subtitle').textContent = book.subtitle || '';
    $('detail-cover').replaceChildren(coverImage(book, 'detail-cover-image'));
    $('detail-history').textContent = historyText(book) || 'No purchase or listening dates supplied.';
    $('art-note').textContent = 'Published cover shown above. Cover edition may differ from your digital edition. Spine artwork is a cover-based reconstruction; thickness is estimated' + (book.pages ? ' from a ' + book.pages + '-page print edition.' : ' using a standard size because the page count is unknown.');
    $('edit-status').value = book.status; $('edit-format').value = book.format; $('edit-notes').value = book.notes;
    const source = seedBooks.find(b => b.id === id)?.source;
    $('publisher-link').hidden = !source; if (source) $('publisher-link').href = source;
    $('book-dialog').showModal();
  }
  function render() {
    const displayBooks = shelfBooks(books);
    $('book-count').textContent = `${displayBooks.length} books`;
    $('spines').replaceChildren(); $('year-nav').replaceChildren();
    const groups = new Map();
    for (const b of [...displayBooks].sort((a, b) => (a.addedAt || '9999').localeCompare(b.addedAt || '9999'))) {
      const year = b.addedAt ? b.addedAt.slice(0, 4) : 'Date unknown';
      if (!groups.has(year)) groups.set(year, []);
      groups.get(year).push(b);
    }
    for (const [year, groupBooks] of groups) {
      const group = element('section', 'year-group');
      group.setAttribute('aria-label', year);
      const bookRow = element('div', 'year-books');
      for (const b of groupBooks) {
        const spine = element('button', 'spine');
        const dims = shelfDimensions(b);
        spine.type = 'button'; spine.setAttribute('aria-label', `${b.title} by ${b.authors}, ${labels[b.status]}`);
        spine.title = `${b.title} — click for cover and details`;
        spine.style.width = dims.width + 'px'; spine.style.height = dims.height + 'px';
        const texture = element('span', 'spine-art');
        texture.setAttribute('aria-hidden', 'true');
        texture.style.backgroundImage = `url('${b.spineAtlas}')`;
        texture.style.backgroundSize = `${b.spineCount * 100}% 100%`;
        texture.style.backgroundPosition = `${b.spineIndex / (b.spineCount - 1) * 100}% top`;
        spine.append(texture);
        spine.addEventListener('click', () => openBook(b.id)); bookRow.append(spine);
      }
      group.append(bookRow, element('h3', 'year-caption', year)); $('spines').append(group);
      const nav = element('button', 'year-link', year);
      nav.addEventListener('click', () => group.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', inline:'center', block:'nearest'}));
      $('year-nav').append(nav);
    }
    const visible = filterBooks(shelfBooks(books), $('search').value, $('filter').value);
    $('journal').replaceChildren();
    if (!visible.length) $('journal').append(element('p', 'empty', 'No books here yet. Try another search or filter.'));
    for (const b of visible) {
      const row = element('article', 'journal-row');
      const cover = coverImage(b, 'mini-cover official-cover'); cover.alt = '';
      const copy = element('div'); const title = element('button', 'row-title', b.title); title.type = 'button'; title.addEventListener('click', () => openBook(b.id));
      const format = { kindle: ' · Kindle', audible: ' · Audible', both: ' · Kindle & Audible', unspecified: '' }[b.format];
      copy.append(title, element('p', 'row-author', b.authors + format));
      if (historyText(b)) copy.append(element('p', 'row-history', historyText(b)));
      row.append(cover, copy, element('span', `status ${b.status}`, labels[b.status])); $('journal').append(row);
    }
  }
  $('close-dialog').addEventListener('click', () => $('book-dialog').close());
  $('book-dialog').addEventListener('click', e => { if (e.target === $('book-dialog')) { const r = e.target.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) e.target.close(); } });
  $('book-form').addEventListener('submit', e => {
    e.preventDefault(); const next = updateBook(books, activeId, { status: $('edit-status').value, format: $('edit-format').value, notes: $('edit-notes').value });
    try { localStorage.setItem(key, JSON.stringify(next)); books = next; $('book-dialog').close(); render(); notify('Saved to your bookshelf.'); }
    catch { notify('Your browser could not save. Keep this window open and export your library.'); books = next; render(); }
  });
  $('search').addEventListener('input', render); $('filter').addEventListener('change', render);
  $('export').addEventListener('click', () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify(books, null, 2)], { type: 'application/json' }));
    const link = element('a'); link.href = url; link.download = 'my-bookshelf.json'; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); notify('Library exported.');
  });
  render();
})();
