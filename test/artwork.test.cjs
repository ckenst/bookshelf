const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { seedBooks, shelfBooks, shelfDimensions, isLocalLibrary, mergeLibrary, updateBook } = require('../dist/model.js');
test('every displayed book has a real cover file and a source', () => {
  assert.equal(shelfBooks(seedBooks).length, 175);
  for (const b of shelfBooks(seedBooks)) {
    assert.ok(b.coverSource.startsWith('https://'));
    assert.ok(fs.existsSync(path.join(__dirname, '../dist', b.cover)));
    assert.ok(fs.statSync(path.join(__dirname, '../dist', b.cover)).size > 1000);
  }
  assert.equal(shelfBooks([{id:'missing',title:'No artwork'}, {id:'synthetic',cover:'assets/fake.svg'}]).length, 0);
});
test('shelf thickness is bounded, scales with pages and is explicitly estimated', () => {
  assert.ok(shelfDimensions({pages:832}).width > shelfDimensions({pages:272}).width);
  for (const pages of [undefined, 1, 272, 832, 10000, NaN, -10]) {
    const d = shelfDimensions({pages});
    assert.ok(d.width >= 38 && d.width <= 64);
    assert.ok(d.height >= 224 && d.height <= 304);
    assert.equal(d.estimated, true);
  }
});

test('spine heights vary by reference pages and stable book identity', () => {
  const short = shelfDimensions({id:'short',pages:272});
  const long = shelfDimensions({id:'short',pages:832});
  assert.ok(long.height > short.height);
  assert.deepEqual(shelfDimensions({id:'short'}),shelfDimensions({id:'short'}));
  assert.ok(new Set(seedBooks.map(b=>shelfDimensions(b).height)).size >= 8);
});

test('only local addresses enable private journal and edits', () => {
  assert.equal(isLocalLibrary({protocol:'http:',hostname:'127.0.0.1'}),true);
  assert.equal(isLocalLibrary({protocol:'http:',hostname:'localhost'}),true);
  assert.equal(isLocalLibrary({protocol:'file:',hostname:''}),true);
  assert.equal(isLocalLibrary({protocol:'https:',hostname:'ckenst.org'}),false);
  assert.equal(isLocalLibrary({protocol:'https:',hostname:'bookshelf.kenst.com'}),false);
  assert.equal(isLocalLibrary({protocol:'https:',hostname:'ckenst.github.io'}),false);
});

test('decade shelves use compact edge gutters so books fill the viewport', () => {
  const css = fs.readFileSync(path.join(__dirname, '../dist/style.css'), 'utf8');
  assert.doesNotMatch(css, /padding-(?:left|right):calc\(50vw/);
  assert.match(css, /\.spines\{padding-left:32px;padding-right:32px/);
});

test('book details show public notes, hide published status and keep local editing controls', () => {
  const html = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');
  const app = fs.readFileSync(path.join(__dirname, '../dist/app.js'), 'utf8');
  const css = fs.readFileSync(path.join(__dirname, '../dist/style.css'), 'utf8');
  assert.match(html, /id="detail-status"/);
  assert.match(html, /id="detail-notes"/);
  assert.match(html, /id="edit-source" type="url"/);
  assert.match(html, /href="style\.css\?v=20261107-status"/);
  assert.match(css, /html:not\(\.local-library\)[^{]*\.detail-status-line[^{]*\{display:none\}/);
  assert.doesNotMatch(html, /id="art-note"|Published cover shown above|visual estimates/);
  assert.match(app, /library-edits\.json/);
});

test('local server exposes the tracked library persistence API', async () => {
  const { server } = require('../server.cjs');
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    const response = await fetch(`http://127.0.0.1:${server.address().port}/api/library`);
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /^application\/json/);
    assert.equal((await response.json()).books.length, seedBooks.length);
    const published = await fetch(`http://127.0.0.1:${server.address().port}/library-edits.json`);
    assert.equal(published.status, 200);
    assert.ok(Array.isArray(await published.json()));
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});

test('library API validates and atomically persists tracked public edits', async () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'bookshelf-library-'));
  const libraryPath = path.join(directory, 'library.json');
  const { createServer } = require('../server.cjs');
  const privateServer = createServer({ libraryPath });
  await new Promise(resolve => privateServer.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${privateServer.address().port}`;
  const books = updateBook(mergeLibrary([]), 'protocols', { status:'finished', format:'kindle', notes:'Public note', source:'https://www.amazon.com/protocols' });
  const expectedEdits = [{ id:'protocols', status:'finished', format:'kindle', notes:'Public note', source:'https://www.amazon.com/protocols' }];
  try {
    const saved = await fetch(`${base}/api/library`, { method:'PUT', headers:{ 'Content-Type':'application/json', Origin:base }, body:JSON.stringify({ books }) });
    assert.equal(saved.status, 200);
    assert.deepEqual(await saved.json(), { saved:true });
    assert.deepEqual(JSON.parse(fs.readFileSync(libraryPath, 'utf8')), expectedEdits);
    assert.equal(fs.statSync(libraryPath).mode & 0o777, 0o644);
    const loaded = await fetch(`${base}/api/library`);
    const loadedBooks = (await loaded.json()).books;
    assert.equal(loadedBooks.length, seedBooks.length);
    assert.equal(loadedBooks.find(book => book.id === 'protocols').notes, 'Public note');
    const rejected = await fetch(`${base}/api/library`, { method:'PUT', headers:{ 'Content-Type':'application/json', Origin:'https://example.com' }, body:JSON.stringify({ books:[] }) });
    assert.equal(rejected.status, 403);
    assert.deepEqual(JSON.parse(fs.readFileSync(libraryPath, 'utf8')), expectedEdits);
  } finally {
    await new Promise(resolve => privateServer.close(resolve));
    fs.rmSync(directory, { recursive:true });
  }
});

test('local server serves every catalog cover', async () => {
  const { server } = require('../server.cjs');
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    const base = `http://127.0.0.1:${server.address().port}`;
    for (const book of shelfBooks(seedBooks)) {
      const response = await fetch(`${base}/${book.cover}`, { method: 'HEAD' });
      assert.equal(response.status, 200, book.id);
      assert.equal(response.headers.get('content-type'), 'image/jpeg', book.id);
    }
    assert.equal((await fetch(`${base}/assets/unknown-cover.jpg`)).status, 404);
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});
