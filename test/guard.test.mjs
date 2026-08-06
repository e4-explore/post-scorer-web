import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('config.js exposes a string API_BASE', async () => {
  const cfg = await import('../config.js');
  assert.equal(typeof cfg.API_BASE, 'string');
  assert.ok(cfg.API_BASE.length > 0);
});

test('index.html ships no scorer algorithm code and calls the API', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.ok(!html.includes('packages/scorer'), 'must not reference the scorer package');
  assert.ok(!/import\s*\{[^}]*evaluatePost/.test(html), 'must not import evaluatePost');
  assert.ok(html.includes('/api/v1/score'), 'should POST to the score API');
  assert.ok(html.includes("from './config.js'"), 'should import API_BASE from config');
});
