const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { seedBooks, shelfBooks, shelfDimensions } = require('../dist/model.js');
test('every displayed book has a real cover file and a source', () => {
  assert.equal(shelfBooks(seedBooks).length, 13);
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
    assert.equal(d.height, 260);
    assert.equal(d.estimated, true);
  }
});
