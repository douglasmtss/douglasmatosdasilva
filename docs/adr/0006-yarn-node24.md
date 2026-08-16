# ADR-0006: Yarn como gerenciador de pacotes e Node >= 24

- **Status:** aceito (retroativo)
- **Data:** 2026-08-16
- **Decisor:** Douglas Matos da Silva

## Contexto

Os scripts do projeto encadeiam sub-comandos (`dev` chama `copyimages` e `clb`) e o lockfile presente é `yarn.lock`. O campo `engines` exige Node `>= 24.12.0`.

## Decisão

**Yarn (classic)** é o gerenciador oficial — os scripts invocam `yarn` internamente, então npm/pnpm quebram no meio da execução. Node mínimo 24.12.0.

## Alternativas consideradas

- **npm** — funcionaria com ajuste dos scripts (usar `npm run` internamente), mas o lockfile e o hábito do autor são yarn.
- **pnpm** — ganho de disco irrelevante num projeto único.

## Consequências

**Positivas:**
- Uma fonte de verdade de instalação (`yarn.lock`).

**Negativas / riscos aceitos:**
- O README atual ainda sugere npm/pnpm/bun (herança do create-next-app) — corrigir é item do plano.
- Falta `.nvmrc`/`packageManager` (Corepack) para travar versões — item da fase 1.
- Requisito Node 24 é agressivo para colaboradores ocasionais; aceito por ser projeto pessoal.
