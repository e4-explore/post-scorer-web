import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('config.js exposes a string API_BASE', async () => {
  const cfg = await import('../config.js');
  assert.equal(typeof cfg.API_BASE, 'string');
  assert.ok(cfg.API_BASE.length > 0);
});
