const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { seedBooks, shelfBooks, shelfDimensions, isLocalLibrary } = require('../dist/model.js');
test('every displayed book has a real cover file and a source', () => {
  assert.equal(shelfBooks(seedBooks).length, 51);
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
