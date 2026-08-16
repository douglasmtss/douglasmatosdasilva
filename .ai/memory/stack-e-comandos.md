---
name: stack-e-comandos
description: Fatos duráveis sobre a stack e o fluxo de build que não são óbvios pelo package.json
type: project
updated: 2026-08-16
---

# Stack e comandos

- Gerenciador é **yarn** — os próprios scripts do `package.json` invocam `yarn` internamente (`dev`, `prebuild`), então npm/pnpm quebram no meio.
- Node `>= 24.12.0` (campo `engines`); não existe `.nvmrc`.
- **`yarn build` é o único gate de qualidade real**: roda `prebuild` (copyimages + contentlayer) e o typecheck do Next. Não há testes.
- `.contentlayer/` é gerado e ignorado pelo git. Import de `contentlayer/generated` falhando ⇒ rodar `yarn clb`.
- `public/images/` é **destruído e regerado** por `src/utils/copy-images.mjs` a cada `dev`/`prebuild`. A fonte é `src/assets/images/`.
- Aliases TS: `@/*` → `src/*`, `#/*` → raiz do repo.
- Deploy: Vercel conectada ao GitHub via dashboard (não há vercel.json nem workflow). Push na `main` publica.
