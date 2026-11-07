const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, 'dist');
const publishedEditsPath = path.join(root, 'library-edits.json');
const maxLibraryBytes = 1024 * 1024;
const allowed = { '/': ['index.html', 'text/html; charset=utf-8'], '/index.html': ['index.html', 'text/html; charset=utf-8'], '/style.css': ['style.css', 'text/css'], '/model.js': ['model.js', 'text/javascript'], '/app.js': ['app.js', 'text/javascript'], '/library-edits.json': ['library-edits.json', 'application/json; charset=utf-8'] };
allowed['/assets/vibe-coding-cover.jpg'] = ['assets/vibe-coding-cover.jpg', 'image/jpeg'];
allowed['/assets/protocols-cover.jpg'] = ['assets/protocols-cover.jpg', 'image/jpeg'];
allowed['/assets/cover-based-spines.png'] = ['assets/cover-based-spines.png', 'image/png'];
allowed['/assets/kissinger-cover.jpg'] = ['assets/kissinger-cover.jpg', 'image/jpeg'];
allowed['/assets/titan-cover.jpg'] = ['assets/titan-cover.jpg', 'image/jpeg'];
allowed['/assets/the-nvidia-way-cover.jpg'] = ['assets/the-nvidia-way-cover.jpg', 'image/jpeg'];
allowed['/assets/breakneck-cover.jpg'] = ['assets/breakneck-cover.jpg', 'image/jpeg'];
allowed['/assets/the-comfort-crisis-cover.jpg'] = ['assets/the-comfort-crisis-cover.jpg', 'image/jpeg'];
allowed['/assets/engineering-management-cover.jpg'] = ['assets/engineering-management-cover.jpg', 'image/jpeg'];
allowed['/assets/the-goal-cover.jpg'] = ['assets/the-goal-cover.jpg', 'image/jpeg'];
allowed['/assets/library-spines-five.png'] = ['assets/library-spines-five.png', 'image/png'];
allowed['/assets/library-spines-two.png'] = ['assets/library-spines-two.png', 'image/png'];
allowed['/assets/elon-musk-cover.jpg'] = ['assets/elon-musk-cover.jpg', 'image/jpeg'];
allowed['/assets/wool-cover.jpg'] = ['assets/wool-cover.jpg', 'image/jpeg'];
allowed['/assets/shift-cover.jpg'] = ['assets/shift-cover.jpg', 'image/jpeg'];
allowed['/assets/dust-cover.jpg'] = ['assets/dust-cover.jpg', 'image/jpeg'];
allowed['/assets/library-spines-four.png'] = ['assets/library-spines-four.png', 'image/png'];
for (const name of ["tiny-experiments-cover.jpg", "digital-minimalism-cover.jpg", "radical-candor-fully-revised-updated-edition-cover.jpg", "what-the-heck-is-eos-cover.jpg", "how-to-talk-so-little-kids-will-listen-cover.jpg", "the-worlds-i-see-cover.jpg", "dune-messiah-cover.jpg", "tiny-humans-big-emotions-cover.jpg", "million-dollar-weekend-cover.jpg", "thinking-in-systems-cover.jpg", "charlie-munger-cover.jpg", "friends-lovers-and-the-big-terrible-thing-cover.jpg", "mastery-cover.jpg", "outlive-cover.jpg", "the-revolt-of-the-public-and-the-crisis-of-authority-in-the-new-millennium-cover.jpg", "dollars-and-sense-cover.jpg", "capitalism-in-america-cover.jpg", "deep-work-cover.jpg", "me-cover.jpg", "cribsheet-cover.jpg", "greenlights-cover.jpg", "economics-in-one-lesson-cover.jpg", "love-pamela-cover.jpg", "alexander-hamilton-cover.jpg", "how-the-post-office-created-america-cover.jpg", "noise-cover.jpg", "food-rules-cover.jpg", "an-elegant-puzzle-systems-of-engineering-management-cover.jpg", "it-s-about-damn-time-cover.jpg", "the-age-of-surveillance-capitalism-cover.jpg", "caffeine-cover.jpg", "the-tales-of-beedle-the-bard-cover.jpg", "the-science-of-sci-fi-cover.jpg", "the-profiteers-cover.jpg", "range-cover.jpg", "good-strategy-bad-strategy-cover.jpg", "the-phoenix-project-cover.jpg"]) allowed['/assets/' + name] = ['assets/' + name, 'image/jpeg'];
allowed['/assets/high-growth-handbook-cover.jpg'] = ['assets/high-growth-handbook-cover.jpg', 'image/jpeg'];
const { seedBooks, shelfBooks, parseLibrary, mergeLibrary, parseLibraryEdits, extractLibraryEdits, applyLibraryEdits } = require('./dist/model.js');
for (const book of shelfBooks(seedBooks)) allowed['/' + book.cover] = [book.cover, 'image/jpeg'];
const securityHeaders = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', 'Content-Security-Policy': "default-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'" };
function sendJson(res, status, value) {
  res.writeHead(status, { ...securityHeaders, 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(value));
}
function apiError(status, code, message) {
  const error = Error(message); error.status = status; error.code = code; return error;
}
function isAllowedHost(host = '') {
  return /^(?:127\.0\.0\.1|localhost|\[::1\])(?::\d+)?$/.test(host);
}
function readBody(req) {
  return new Promise((resolve, reject) => {
    const declared = Number(req.headers['content-length'] || 0);
    if (declared > maxLibraryBytes) { reject(apiError(413, 'PAYLOAD_TOO_LARGE', 'Library data is too large.')); req.resume(); return; }
    const chunks = []; let size = 0; let settled = false;
    req.on('data', chunk => {
      if (settled) return;
      size += chunk.length;
      if (size > maxLibraryBytes) { settled = true; reject(apiError(413, 'PAYLOAD_TOO_LARGE', 'Library data is too large.')); req.resume(); return; }
      chunks.push(chunk);
    });
    req.on('end', () => { if (!settled) resolve(Buffer.concat(chunks).toString('utf8')); });
    req.on('error', error => { if (!settled) reject(error); });
  });
}
async function readPublishedLibrary(libraryPath) {
  try { return applyLibraryEdits(mergeLibrary([]), parseLibraryEdits(await fs.promises.readFile(libraryPath, 'utf8'))); }
  catch (error) { if (error.code === 'ENOENT') return mergeLibrary([]); throw error; }
}
async function writePublishedEdits(libraryPath, edits) {
  await fs.promises.mkdir(path.dirname(libraryPath), { recursive: true });
  const temporaryPath = `${libraryPath}.${process.pid}.${Date.now()}.tmp`;
  try {
    await fs.promises.writeFile(temporaryPath, JSON.stringify(edits, null, 2) + '\n', { mode: 0o644 });
    await fs.promises.rename(temporaryPath, libraryPath);
  } catch (error) {
    await fs.promises.unlink(temporaryPath).catch(() => {});
    throw error;
  }
}
function createServer({ libraryPath = publishedEditsPath } = {}) {
  return http.createServer(async (req, res) => {
    const pathname = req.url.split('?')[0];
    if (pathname === '/api/library') {
      if (!isAllowedHost(req.headers.host)) { sendJson(res, 403, { error: { code: 'FORBIDDEN', message: 'Local access only.' } }); return; }
      if (req.method === 'GET') {
        try { sendJson(res, 200, { books: await readPublishedLibrary(libraryPath) }); }
        catch { sendJson(res, 500, { error: { code: 'READ_FAILED', message: 'Published library edits could not be read.' } }); }
        return;
      }
      if (req.method === 'PUT') {
        try {
          if (req.headers.origin !== `http://${req.headers.host}`) throw apiError(403, 'FORBIDDEN', 'Local access only.');
          if (!String(req.headers['content-type'] || '').toLowerCase().startsWith('application/json')) throw apiError(415, 'UNSUPPORTED_MEDIA_TYPE', 'Expected JSON library data.');
          let payload;
          try { payload = JSON.parse(await readBody(req)); }
          catch (error) { if (error.status) throw error; throw apiError(400, 'INVALID_JSON', 'Library data is not valid JSON.'); }
          if (!payload || !Array.isArray(payload.books) || payload.books.length > 500) throw apiError(422, 'VALIDATION_ERROR', 'Library data is invalid.');
          const books = parseLibrary(JSON.stringify(payload.books));
          if (books.some(book => book.notes.length > 20000)) throw apiError(422, 'VALIDATION_ERROR', 'A book note is too long.');
          const seedIds = new Set(seedBooks.map(book => book.id));
          if (books.length !== seedBooks.length || books.some(book => !seedIds.has(book.id))) throw apiError(422, 'VALIDATION_ERROR', 'Library data must contain the complete published catalog.');
          await writePublishedEdits(libraryPath, extractLibraryEdits(books));
          sendJson(res, 200, { saved: true });
        } catch (error) {
          sendJson(res, error.status || 422, { error: { code: error.code || 'VALIDATION_ERROR', message: error.status ? error.message : 'Library data is invalid.' } });
        }
        return;
      }
      sendJson(res, 405, { error: { code: 'METHOD_NOT_ALLOWED', message: 'Method not allowed.' } });
      return;
    }
    const file = allowed[pathname];
    if (!file || !['GET', 'HEAD'].includes(req.method)) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { ...securityHeaders, 'Content-Type': file[1] });
    if (req.method === 'HEAD') res.end(); else fs.createReadStream(path.join(root, file[0])).pipe(res);
  });
}
const server = createServer();
if (require.main === module) {
  server.listen(4173, '127.0.0.1', () => console.log('Bookshelf: http://127.0.0.1:4173'));
  server.on('error', err => { console.error(err.code === 'EADDRINUSE' ? 'Port 4173 is already in use.' : err.message); process.exitCode = 1; });
}
module.exports = { server, createServer };
