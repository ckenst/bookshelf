const {test}=require('node:test');
const assert=require('node:assert/strict');
const {seedBooks,mergeLibrary}=require('../dist/model.js');
test('Audible observations preserve confirmed status and never invent completion dates',()=>{
 const get=id=>seedBooks.find(b=>b.id===id);
 assert.equal(get('the-goal').addedAt,'2024-01-18');
 assert.equal(get('the-goal').finishedAt,undefined);
 assert.equal(get('the-goal').audibleObservation.progressPercent,99);
 assert.equal(get('elon-musk').audibleObservation.progressPercent,0);
 assert.equal(get('elon-musk').status,'finished');
 assert.equal(get('elon-musk').finishedAt,'2025-12-12');
 assert.equal(get('engineering-management').audibleObservation.observedAt,'2026-06-12');
 assert.equal(get('engineering-management').listeningEvents[0].date,'2026-02-12');
 assert.equal(get('engineering-management').status,'reading');
 assert.equal(get('titan').status,'unread');
 assert.equal(get('titan').format,'audible');
});
test('history enrichment reaches saved libraries while preserving local notes and status edits',()=>{
 const original=seedBooks.map(b=>({...b,notes:'Personal note',status:'finished',format:'both'}));
 for(const b of original){delete b.audibleObservation; if(b.id==='the-goal')delete b.addedAt;}
 const merged=mergeLibrary(original);
 assert.equal(merged.find(b=>b.id==='the-goal').addedAt,'2024-01-18');
 assert.equal(merged.find(b=>b.id==='engineering-management').audibleObservation.observedAt,'2026-06-12');
 assert.ok(merged.every(b=>b.notes==='Personal note'&&b.format==='both'));
 assert.equal(merged.find(b=>b.id==='tiny-experiments').status,'finished');
 assert.deepEqual(mergeLibrary(merged),merged);
});
test('new Audible titles have real cover provenance and preserve uncertain status',()=>{
 const get=id=>seedBooks.find(b=>b.id===id);
 assert.equal(get('digital-minimalism').status,'finished');
 assert.equal(get('digital-minimalism').finishedAt,undefined);
 assert.equal(get('tiny-experiments').status,'paused');
 assert.equal(get('tiny-experiments').audibleObservation.progressPercent,0);
 assert.equal(get('goodnight-moon'),undefined);
 assert.equal(get('high-growth-handbook').format,'kindle');
 assert.ok(seedBooks.filter(b=>b.coverSource?.includes('m.media-amazon.com')).length>=38);
});

test('removed titles stay absent when merging an older saved browser library',()=>{
 const removedIds=['goodnight-moon','harry-potter-and-the-order-of-the-phoenix-full-cast-edition','harry-potter-and-the-goblet-of-fire-full-cast-edition','harry-potter-and-the-prisoner-of-azkaban-full-cast-edition','harry-potter-and-the-chamber-of-secrets-full-cast-edition','harry-potter-and-the-sorcerer-s-stone-full-cast-edition','it-s-not-luck','dreamland','invent-and-wander'];
 const stale=seedBooks.map(b=>({...b}));
 const merged=mergeLibrary(stale);
 for(const id of removedIds){assert.equal(seedBooks.some(b=>b.id===id),false);assert.equal(merged.some(b=>b.id===id),false);}
});

test('High Growth Handbook is a Kindle book with the supplied date and status',()=>{
 const book=seedBooks.find(b=>b.id==='high-growth-handbook');
 assert.equal(book.title,'High Growth Handbook');
 assert.equal(book.authors,'Elad Gil');
 assert.equal(book.addedAt,'2019-12-24');
 assert.equal(book.format,'kindle');
 assert.equal(book.status,'paused');
 assert.equal(book.audibleObservation,undefined);
 const prior={...book,notes:'Keep my note',status:'finished',format:'both'};
 const merged=mergeLibrary([prior]).find(b=>b.id===book.id);
 assert.equal(merged.notes,'Keep my note');
 assert.equal(merged.status,'finished');
 assert.equal(merged.format,'both');
});
