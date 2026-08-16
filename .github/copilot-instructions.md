# Instruções para GitHub Copilot (CLI, chat e coding agent)

As instruções canônicas deste projeto estão em **`AGENTS.md`** (raiz do repositório). Leia aquele arquivo primeiro e siga tudo que está lá.

Resumo operacional:

- Site pessoal/portfólio bilíngue (pt-BR/en) — Next.js 14 App Router + TypeScript + Contentlayer2 + Tailwind CSS 3.
- Gerenciador de pacotes: **yarn** (nunca npm/pnpm). Node >= 24.12.0.
- Valide qualquer mudança com `yarn build` (não há testes automatizados).
- Contexto de IA em `.ai/` (leia `.ai/context.md` e `.ai/memory/MEMORY.md` antes de codar).
- Prompts reutilizáveis em `.github/prompts/*.prompt.md` (equivalentes aos slash commands do Claude Code em `.claude/commands/`).
- Texto de UI novo entra nos dois dicionários (`src/dictionaries/br.json` e `en.json`); artigo novo entra nos dois idiomas (`yarn article-template <slug>`).
- Nunca commit/push, publicação de conteúdo ou envio de email sem pedido explícito.
- Decisão de arquitetura ⇒ ADR em `docs/adr/`. Funcionalidade nova ⇒ spec em `docs/specs/` antes do código.
- Atenção às armadilhas conhecidas listadas no `AGENTS.md` (prefixo `NEXT_PULIC_` com typo é intencional até migração coordenada; `public/images/` é gerado — a fonte é `src/assets/images/`).
