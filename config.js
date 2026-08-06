// The only per-environment knob. On localhost the UI talks to `wrangler dev`
// (:8787); everywhere else it talks to the deployed Worker. `globalThis.location`
// is undefined under Node (tests), so API_BASE falls back to the prod URL there.
const PROD_API_BASE = 'https://post-scorer-api.REPLACE_ME.workers.dev'; // set in Task 8
const host = globalThis.location?.hostname;
export const API_BASE =
  host === 'localhost' || host === '127.0.0.1' ? 'http://localhost:8787' : PROD_API_BASE;
