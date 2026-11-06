const { test } = require('node:test');
const assert = require('node:assert/strict');
const { seedBooks, filterBooks, updateBook, parseLibrary, mergeLibrary } = require('../dist/model.js');
test('all nine distinct books are retained and Vibe Coding is deduplicated', () => {
 assert.equal(seedBooks.length, 9);
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
 assert.equal(goal.addedAt, undefined);
 assert.equal(seedBooks.find(b => b.id === 'titan').status, 'unknown');
 assert.equal(seedBooks.find(b => b.id === 'titan').format, 'unspecified');
});
test('new history appears for existing browser libraries without losing edits', () => {
 const old = [{ ...seedBooks[0], notes: 'Keep this note', status: 'finished', format: 'both' }, seedBooks[1]];
 delete old[0].addedAt; delete old[0].listeningEvents;
 const merged = mergeLibrary(old);
 assert.equal(merged.length, 9);
 assert.equal(merged[0].notes, 'Keep this note');
 assert.equal(merged[0].status, 'finished');
 assert.equal(merged[0].format, 'both');
 assert.equal(merged[0].addedAt, '2026-06-25');
 assert.equal(merged[0].listeningEvents[0].date, '2026-09-27');
 assert.deepEqual(mergeLibrary(merged), merged);
});
test('search and status filters distinguish active, unfinished, unknown and finished', () => {
 assert.equal(filterBooks(seedBooks, 'YEGGE', 'reading').length, 1);
 assert.equal(filterBooks(seedBooks, '', 'reading').length, 2);
 assert.equal(filterBooks(seedBooks, '', 'unfinished').length, 1);
 assert.equal(filterBooks(seedBooks, '', 'unknown').length, 5);
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
