const { test } = require('node:test');
const assert = require('node:assert/strict');
const { seedBooks, filterBooks, updateBook, parseLibrary, mergeLibrary } = require('../dist/model.js');
test('all fifty-one distinct books are retained and Vibe Coding is deduplicated', () => {
 assert.equal(seedBooks.length, 51);
 assert.equal(seedBooks.filter(b => b.id === 'vibe-coding').length, 1);
 assert.equal(seedBooks.find(b => b.id === 'protocols').status, 'reading');
});
test('purchase dates and listening observations remain separate', () => {
 const vibe = seedBooks.find(b => b.id === 'vibe-coding');
 assert.equal(vibe.addedAt, '2026-06-25');
 assert.deepEqual(vibe.listeningEvents, [{ date: '2026-09-27', status: 'unfinished' }]);
 assert.equal(vibe.status, 'finishing');
 assert.equal(vibe.format, 'audible');
 const goal = seedBooks.find(b => b.id === 'the-goal');
 assert.equal(goal.status, 'finished');
 assert.equal(goal.listeningEvents[0].date, '2025-11-07');
 assert.equal(goal.finishedAt, undefined);
 assert.equal(goal.addedAt, '2024-01-18');
 assert.equal(seedBooks.find(b => b.id === 'titan').status, 'unread');
 assert.equal(seedBooks.find(b => b.id === 'titan').format, 'audible');
});
test('new history appears for existing browser libraries without losing edits', () => {
 const old = [{ ...seedBooks[0], notes: 'Keep this note', status: 'finished', format: 'both' }, seedBooks[1]];
 delete old[0].addedAt; delete old[0].listeningEvents;
 const merged = mergeLibrary(old);
 assert.equal(merged.length, 51);
 assert.equal(merged[0].notes, 'Keep this note');
 assert.equal(merged[0].status, 'finished');
 assert.equal(merged[0].format, 'both');
 assert.equal(merged[0].addedAt, '2026-06-25');
 assert.equal(merged[0].listeningEvents[0].date, '2026-09-27');
 assert.deepEqual(mergeLibrary(merged), merged);
});
test('search and status filters distinguish active, unread and finished', () => {
 assert.equal(filterBooks(seedBooks, 'YEGGE', 'reading').length, 1);
 assert.equal(filterBooks(seedBooks, '', 'reading').length, 3);
 assert.equal(filterBooks(seedBooks, '', 'unfinished').length, 2);
 assert.equal(filterBooks(seedBooks, '', 'unread').length, 17);
 assert.equal(filterBooks(seedBooks, '', 'finished')[0].id, 'the-goal');
});
test('edits preserve identity and history while rejecting invalid fields', () => {
 const updated = updateBook(seedBooks, 'vibe-coding', { status: 'finished', notes: 'Useful', id: 'wrong' });
 assert.equal(updated[0].id, 'vibe-coding'); assert.equal(updated[0].addedAt, '2026-06-25');
 assert.equal(seedBooks[0].status, 'finishing');
 assert.throws(() => updateBook(seedBooks, 'vibe-coding', { format: 'invalid' }));
 assert.throws(() => updateBook(seedBooks, 'vibe-coding', { status: 'invalid' }));
});
test('saved libraries validate old and new records and reject duplicates', () => {
 assert.deepEqual(parseLibrary(JSON.stringify(seedBooks)), seedBooks);
 assert.throws(() => parseLibrary('[{}]'));
 assert.throws(() => parseLibrary(JSON.stringify([seedBooks[0], seedBooks[0]])));
});

test('explicit status corrections migrate old browser records once and preserve later edits', () => {
 const stale = seedBooks.map(b => ({ ...b, statusRevision: 0, notes: 'Keep notes', status: b.id === 'engineering-management' ? 'unfinished' : b.id === 'protocols' ? 'finished' : b.id === 'titan' ? 'unknown' : b.status }));
 const merged = mergeLibrary(stale);
 assert.equal(merged.find(b => b.id === 'engineering-management').status, 'reading');
 assert.equal(merged.find(b => b.id === 'protocols').status, 'reading');
 assert.equal(merged.find(b => b.id === 'titan').status, 'unread');
 assert.ok(merged.every(b => b.notes === 'Keep notes'));
 const edited = updateBook(merged, 'engineering-management', {status:'finished'});
 assert.equal(mergeLibrary(edited).find(b => b.id === 'engineering-management').status, 'finished');
});
test('all author names use consistent published full names', () => {
 const expected = {'vibe-coding':'Gene Kim & Steve Yegge', protocols:'Andrew D. Huberman', kissinger:'Walter Isaacson', titan:'Ron Chernow', 'the-nvidia-way':'Tae Kim', breakneck:'Dan Wang', 'the-comfort-crisis':'Michael Easter', 'engineering-management':'Sarah Drasner', 'the-goal':'Eliyahu M. Goldratt & Jeff Cox', 'elon-musk':'Walter Isaacson', dust:'Hugh Howey', shift:'Hugh Howey', wool:'Hugh Howey'};
 for (const [id, authors] of Object.entries(expected)) assert.equal(seedBooks.find(b => b.id === id).authors, authors);
});
test('long titles reserve room for two readable text columns', () => {
 const { shelfDimensions } = require('../dist/model.js');
 const book = seedBooks.find(b => b.id === 'engineering-management');
 assert.ok(shelfDimensions(book).width >= 46);
});
test('year navigation centers a group and clamps scrolling at the shelf edges', () => {
 const { yearScrollTarget } = require('../dist/model.js');
 assert.equal(yearScrollTarget({scrollLeft:0,viewportLeft:0,viewportWidth:200,groupLeft:150,groupWidth:100,maxScroll:500}),100);
 assert.equal(yearScrollTarget({scrollLeft:100,viewportLeft:0,viewportWidth:200,groupLeft:50,groupWidth:100,maxScroll:500}),100);
 assert.equal(yearScrollTarget({scrollLeft:0,viewportLeft:0,viewportWidth:200,groupLeft:-50,groupWidth:100,maxScroll:500}),0);
 assert.equal(yearScrollTarget({scrollLeft:0,viewportLeft:0,viewportWidth:200,groupLeft:1000,groupWidth:100,maxScroll:500}),500);
});

test('new purchases and explicit completion dates are retained separately', () => {
 const get = id => seedBooks.find(b => b.id === id);
 assert.equal(get('protocols').addedAt, '2026-10');
 assert.equal(get('engineering-management').addedAt, '2025-10-25');
 for (const [id,purchase,finish] of [['elon-musk','2025-08-22','2025-12-12'],['dust','2025-07-21','2025-08-01'],['shift','2025-06-04','2025-06-18'],['wool','2025-01-24','2025-02-19']]) {
  assert.equal(get(id).addedAt,purchase); assert.equal(get(id).finishedAt,finish); assert.equal(get(id).status,'finished');
 }
 const old = seedBooks.map(b => ({...b,notes:'Preserve'}));
 delete old.find(b=>b.id==='protocols').addedAt;
 delete old.find(b=>b.id==='dust').finishedAt;
 const merged=mergeLibrary(old);
 assert.equal(merged.find(b=>b.id==='protocols').addedAt,'2026-10');
 assert.equal(merged.find(b=>b.id==='dust').finishedAt,'2025-08-01');
 assert.ok(merged.every(b=>b.notes==='Preserve'));
});
test('month precision never displays an invented day', () => {
 const {formatBookDate}=require('../dist/model.js');
 assert.equal(formatBookDate('2026-10'),'Oct 2026');
 assert.equal(formatBookDate('2025-12-12'),'Dec 12, 2025');
});


test('sample-only titles are excluded and every reviewed book has its chosen status', () => {
 const review = {
  'the-profiteers':'paused', 'caffeine':'finished', 'the-tales-of-beedle-the-bard':'finished',
  'the-age-of-surveillance-capitalism':'paused', 'an-elegant-puzzle-systems-of-engineering-management':'paused',
  'food-rules':'finished', 'love-pamela':'finished', 'capitalism-in-america':'finished',
  'me':'finished', 'the-revolt-of-the-public-and-the-crisis-of-authority-in-the-new-millennium':'paused',
  'friends-lovers-and-the-big-terrible-thing':'finished', 'thinking-in-systems':'paused',
  'million-dollar-weekend':'finished', 'dune-messiah':'finished', 'what-the-heck-is-eos':'finished',
  'radical-candor-fully-revised-updated-edition':'paused', 'tiny-experiments':'paused'
 };
 assert.equal(seedBooks.length,51);
 for (const [id,status] of Object.entries(review)) assert.equal(seedBooks.find(b=>b.id===id)?.status,status,id);
 for (const id of ['it-s-not-luck','dreamland','invent-and-wander']) {
  assert.equal(seedBooks.find(b=>b.id===id),undefined);
  assert.equal(mergeLibrary([{id,title:id,authors:'Test',status:'unread',format:'audible',notes:'Saved note'}]).find(b=>b.id===id),undefined);
 }
 assert.ok(seedBooks.every(b=>b.status && b.status!=='unknown'));
 const prior={...seedBooks.find(b=>b.id==='the-profiteers'),status:'unfinished',statusRevision:0,notes:'Keep note'};
 const migrated=mergeLibrary([prior]).find(b=>b.id==='the-profiteers');
 assert.equal(migrated.status,'paused'); assert.equal(migrated.notes,'Keep note');
 assert.equal(mergeLibrary(updateBook([migrated],'the-profiteers',{status:'reading'})).find(b=>b.id==='the-profiteers').status,'reading');
 assert.equal(updateBook(seedBooks,'the-profiteers',{status:'paused'}).find(b=>b.id==='the-profiteers').status,'paused');
 assert.deepEqual(parseLibrary(JSON.stringify(seedBooks)),seedBooks);
});
