# post-scorer-web

Public thin-client UI for the **post-scorer** — a terminal-styled tool that
scores an X (Twitter) draft before you post it. This repo is **presentation
only**: it sends your draft to the hosted API and renders the result. There is
**no scoring algorithm in this repo**.

- Live: _(Cloudflare Pages URL — filled in at deploy)_
- API contract: [API.md](./API.md)

## Local dev
Run the API in the sibling `e4-efficiency` repo (`apps/api`, `npm run dev`, :8787),
then here:
```bash
npx wrangler pages dev .   # serves on http://localhost:8788
```
The UI auto-detects localhost and points at `http://localhost:8787`.

## Tests
```bash
node --test
```
Includes a guard test asserting no scorer algorithm code ever lands here.
