(() => {
  const { seedBooks, filterBooks, updateBook, parseLibrary, mergeLibrary, shelfBooks, shelfDimensions, isLocalLibrary, yearScrollTarget, formatBookDate } = BookshelfModel;
  const key = 'personal-bookshelf-v1';
  const localMode = isLocalLibrary(location);
  document.documentElement.classList.toggle('local-library', localMode);
  const $ = id => document.getElementById(id);
  const tooltip = $('spine-tooltip');
  const shelfRoom = document.querySelector('.shelf-room');
  const labels = { reading: 'Reading', finishing: 'Nearly finished', paused: 'Paused', finished: 'Finished', 'want-to-read': 'Want to read', unknown: 'Unread', unread: 'Unread', unfinished: 'Not finished' };
  let books = mergeLibrary([]);
  let activeId;
  let activeYear = 'all';
  let toastTimer;
  let tooltipTarget;
  function notify(message) { $('toast').textContent = message; $('toast').classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => $('toast').classList.remove('visible'), 4000); }
  if (localMode) {
    try { const saved = localStorage.getItem(key); if (saved) books = mergeLibrary(parseLibrary(saved)); localStorage.setItem(key, JSON.stringify(books)); }
    catch { notify('Saved library could not be loaded. The supplied library is shown.'); }
    $('footer-note').textContent = 'Edits and notes are saved only in this browser.';
  }
  function element(tag, className, text) { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; }
  function hideTooltip() { tooltip.hidden = true; tooltipTarget = undefined; }
  function positionTooltip(spine) {
    const spineRect = spine.getBoundingClientRect(), roomRect = shelfRoom.getBoundingClientRect();
    tooltip.style.left = Math.max(12, Math.min(shelfRoom.clientWidth - tooltip.offsetWidth - 12, spineRect.left - roomRect.left + spineRect.width / 2 - tooltip.offsetWidth / 2)) + 'px';
    tooltip.style.top = Math.max(8, spineRect.top - roomRect.top - tooltip.offsetHeight - 12) + 'px';
  }
  function showTooltip(spine, book) {
    tooltipTarget = spine;
    tooltip.replaceChildren(element('span', 'tooltip-title', book.title), element('span', 'tooltip-author', book.authors));
    tooltip.hidden = false;
    positionTooltip(spine);
  }
  function coverImage(b, className) {
    const image = element('img', className);
    image.src = b.cover;
    image.alt = `${b.title} — published book cover`;
    return image;
  }
  function dateLabel(value) {
    return formatBookDate(value);
  }
  function historyText(book, includeReadingHistory = true) {
    const lines = [];
    if (book.addedAt) lines.push('Added ' + dateLabel(book.addedAt));
    if (!includeReadingHistory) return lines.join(' · ');
    if (book.finishedAt) lines.push('Finished ' + dateLabel(book.finishedAt));
    for (const event of book.listeningEvents || []) lines.push('Listening entry ' + dateLabel(event.date) + ' (' + labels[event.status].toLowerCase() + ')');
    if (book.audibleObservation) {
      const observation = book.audibleObservation;
      lines.push('Audible activity ' + dateLabel(observation.observedAt) + ' (' + observation.progressPercent + '%; ' + observation.displayedProgress.toLowerCase() + '). Activity date is not a completion date.');
    }
    return lines.join(' · ');
  }
  function openBook(id) {
    const book = books.find(b => b.id === id); activeId = id;
    $('detail-title').textContent = book.title; $('detail-authors').textContent = book.authors;
    $('detail-subtitle').textContent = book.subtitle || '';
    $('detail-cover').replaceChildren(coverImage(book, 'detail-cover-image'));
    $('detail-history').textContent = historyText(book, localMode) || 'No added date supplied.';
    $('art-note').textContent = 'Published cover shown above. Cover edition may differ from your digital edition. Spine artwork is reconstructed from the real cover, with a title tooltip on hover or keyboard focus; width and height are visual estimates' + (book.pages ? ' informed by a ' + book.pages + '-page print edition.' : ' using a standard page-count baseline with stable visual variation.');
    if (localMode) { $('edit-status').value = book.status; $('edit-format').value = book.format; $('edit-notes').value = book.notes; }
    const source = seedBooks.find(b => b.id === id)?.source;
    $('publisher-link').hidden = !source; if (source) $('publisher-link').href = source;
    $('book-dialog').showModal();
  }
  function render() {
    const allDisplayBooks = shelfBooks(books);
    const displayBooks = allDisplayBooks;
    $('book-count').textContent = `${allDisplayBooks.length} books`;
    $('shelf-heading').textContent = activeYear === 'all' ? 'The collection' : activeYear === 'unknown' ? 'Added date unknown' : 'Added in ' + activeYear;
    hideTooltip(); $('spines').replaceChildren(); $('year-nav').replaceChildren();
    const groups = new Map();
    for (const b of [...displayBooks].sort((a, b) => (a.addedAt || '9999').localeCompare(b.addedAt || '9999'))) {
      const year = b.addedAt ? b.addedAt.slice(0, 4) : 'Date unknown';
      if (!groups.has(year)) groups.set(year, []);
      groups.get(year).push(b);
    }
    for (const [year, groupBooks] of groups) {
      const group = element('section', 'year-group');
      group.setAttribute('aria-label', year);
      group.dataset.year = year === 'Date unknown' ? 'unknown' : year;
      const bookRow = element('div', 'year-books');
      for (const b of groupBooks) {
        const spine = element('button', b.spineAtlas ? 'spine' : 'spine imported');
        const dims = shelfDimensions(b);
        spine.type = 'button'; spine.setAttribute('aria-label', `${b.title} by ${b.authors}${localMode ? ', ' + labels[b.status] : ''}`);
        spine.style.width = dims.width + 'px'; spine.style.height = dims.height + 'px';
        const texture = element('span', 'spine-art');
        texture.setAttribute('aria-hidden', 'true');
        // Cover-derived artwork stays visible; the title is shown in a separate tooltip.
        texture.style.backgroundImage = `url('${b.spineAtlas || b.cover}')`;
        texture.style.backgroundSize = b.spineAtlas ? `${b.spineCount * 100}% 100%` : 'auto 100%';
        texture.style.backgroundPosition = b.spineAtlas ? `${b.spineIndex / (b.spineCount - 1) * 100}% top` : 'center';
        spine.append(texture);
        spine.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch') showTooltip(spine, b); });
        spine.addEventListener('pointerleave', hideTooltip);
        spine.addEventListener('focus', () => showTooltip(spine, b));
        spine.addEventListener('blur', hideTooltip);
        spine.addEventListener('click', () => { hideTooltip(); openBook(b.id); });
        bookRow.append(spine);
      }
      group.append(bookRow, element('h3', 'year-caption', year)); $('spines').append(group);
    }
    const years = [...new Set(allDisplayBooks.filter(b => b.addedAt).map(b => b.addedAt.slice(0, 4)))].sort();
    const options = [['all', 'All books'], ...years.map(y => [y,y])];
    if (allDisplayBooks.some(b => !b.addedAt)) options.push(['unknown','Date unknown']);
    for (const [value, label] of options) {
      const nav = element('button', 'year-link', label);
      nav.dataset.year = value;
      nav.type = 'button'; nav.setAttribute('aria-pressed', String(value === activeYear));
      nav.addEventListener('click', () => {
        selectYear(value);
      });
      $('year-nav').append(nav);
    }
    requestAnimationFrame(() => selectYear(activeYear, true));
    if (!localMode) return;
    const visible = filterBooks(displayBooks, $('search').value, $('filter').value);
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
  function selectYear(year, instant = false) {
    hideTooltip(); activeYear = year;
    const groups = [...$('spines').children];
    const scroller = document.querySelector('.shelf-content');
    $('spines').classList.toggle('has-selection', year !== 'all');
    for (const group of groups) group.classList.toggle('is-selected', group.dataset.year === year);
    for (const button of $('year-nav').children) button.setAttribute('aria-pressed', String(button.dataset.year === year));
    $('shelf-heading').textContent = year === 'all' ? 'The collection' : year === 'unknown' ? 'Added date unknown' : 'Added in ' + year;
    const target = groups.find(group => group.dataset.year === year);
    const viewport = scroller.getBoundingClientRect();
    const first = groups[0]?.getBoundingClientRect(), last = groups.at(-1)?.getBoundingClientRect();
    if (!first || !last) return;
    const bounds = target ? target.getBoundingClientRect() : {left:first.left, width:last.right-first.left};
    scroller.scrollTo({left:yearScrollTarget({scrollLeft:scroller.scrollLeft,viewportLeft:viewport.left,viewportWidth:viewport.width,groupLeft:bounds.left,groupWidth:bounds.width,maxScroll:scroller.scrollWidth-scroller.clientWidth}),behavior:instant || matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  }
  const scroller = document.querySelector('.shelf-content');
  let drag = null, suppressClick = false;
  scroller.addEventListener('scroll', () => { if (!tooltip.hidden && tooltipTarget?.isConnected) positionTooltip(tooltipTarget); }, { passive: true });
  scroller.addEventListener('pointerdown', event => {
    if (event.button !== 0 || event.pointerType === 'touch') return;
    drag = {x:event.clientX, scroll:scroller.scrollLeft, moved:false}; suppressClick = false;
  });
  scroller.addEventListener('pointermove', event => {
    if (!drag) return;
    const delta = event.clientX - drag.x;
    if (Math.abs(delta) > 5) { drag.moved = true; suppressClick = true; scroller.classList.add('dragging'); }
    if (drag.moved) { event.preventDefault(); scroller.scrollLeft = drag.scroll - delta; }
  });
  const endDrag = () => { drag = null; scroller.classList.remove('dragging'); };
  window.addEventListener('pointerup', endDrag); window.addEventListener('pointercancel', endDrag);
  scroller.addEventListener('click', event => { if (suppressClick) { event.preventDefault(); event.stopPropagation(); suppressClick = false; } }, true);
  window.addEventListener('resize', () => selectYear(activeYear, true));
  $('close-dialog').addEventListener('click', () => $('book-dialog').close());
  $('book-dialog').addEventListener('click', e => { if (e.target === $('book-dialog')) { const r = e.target.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) e.target.close(); } });
  if (localMode) {
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
  }
  render();
})();
