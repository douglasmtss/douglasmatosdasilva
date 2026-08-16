# AGENTS.md — Instruções canônicas para agentes de IA

> Este é o arquivo **canônico** de instruções para qualquer agente de IA (Codex CLI lê este arquivo nativamente; Claude Code entra via `CLAUDE.md`; GitHub Copilot via `.github/copilot-instructions.md` — ambos apontam para cá).

## O que é este projeto

Site pessoal/portfólio de **Douglas Matos da Silva** — vitrine de trabalhos, habilidades e experiência profissional, com blog técnico bilíngue (pt-BR e en).

- Domínios: `www.douglasmatosdasilva.com.br` e `www.douglasmatosdev.com`
- Stack: **Next.js 14 (App Router) + TypeScript + Contentlayer2 (MDX) + Tailwind CSS 3 + next-themes**
- Gerenciador de pacotes: **yarn** (os scripts chamam `yarn` internamente — não use npm/pnpm)
- Node: `>= 24.12.0`
- Deploy: Vercel (integração via dashboard; **não há CI no repositório**)

## Onde está o contexto de IA

| Recurso | Caminho |
|---|---|
| Contexto do projeto (leia primeiro) | `.ai/context.md` |
| Memória persistente (fatos duráveis) | `.ai/memory/MEMORY.md` (índice) + `.ai/memory/*.md` |
| Lições aprendidas (erros/acertos) | `.ai/lessons/LESSONS.md` |
| Dev loop (como rodar/validar) | `.ai/devloop.md` |
| Handoff entre agentes/sessões | `.ai/handoff/` |
| Slash commands (Claude Code) | `.claude/commands/*.md` |
| Prompts reutilizáveis (Copilot) | `.github/prompts/*.prompt.md` |
| Arquitetura (C4) | `docs/architecture/c4/` |
| Decisões (ADRs) | `docs/adr/` |
| Especificações (SDD) | `docs/specs/` |
| Estado atual + débitos | `docs/current-state.md` |
| Plano de reformulação | `docs/plan/reformulation-plan.md` |

**Protocolo mínimo de qualquer sessão:**
1. Leia `.ai/context.md` e `.ai/memory/MEMORY.md` antes de mexer no código.
2. Ao terminar trabalho relevante, atualize memória/lições se aprendeu algo durável e crie um handoff em `.ai/handoff/` se a tarefa ficou incompleta.
3. Mudança de arquitetura ⇒ novo ADR em `docs/adr/`. Funcionalidade nova ⇒ spec em `docs/specs/` **antes** do código (spec-driven development).

## Comandos essenciais

```bash
yarn                    # instalar dependências
yarn dev                # copia imagens + build do contentlayer + next dev
yarn build              # next build (prebuild roda copyimages + contentlayer)
yarn lint               # next lint (next/core-web-vitals)
yarn clb                # rebuild do .contentlayer (rode após mexer em src/articles)
yarn article-template <slug-kebab>   # cria artigo .mdx em br/ e en/
```

Não há testes automatizados nem script de typecheck dedicado — o typecheck acontece no `next build`. **Antes de declarar uma tarefa concluída, rode `yarn build`.**

## Convenções do código

- TypeScript `strict`; aliases `@/*` → `src/*`, `#/*` → raiz, `contentlayer/generated` → `.contentlayer/generated`.
- Componentes em `src/components/` (flat, PascalCase). Estilo: 4 espaços, sem ponto-e-vírgula — siga o código vizinho.
- i18n por sub-path (`/br/...`, `/en/...`) via `src/middleware.ts` + dicionários em `src/dictionaries/{br,en}.json`. **Todo texto de UI novo entra nos DOIS dicionários.**
- Artigos MDX em `src/articles/{br,en}/` — sempre criar o par nos dois idiomas (use `yarn article-template`). Frontmatter obrigatório: `title`, `createdAt`, `author`, `image`, `lang`, `tags` (CSV).
- Imagens: fonte em `src/assets/images/` (o script `copyimages` **apaga e recopia** `public/images/` — nunca adicione imagem direto em `public/images/`).
- Dados pessoais centralizados em `src/utils/info.tsx` — não duplique nome/links/emails em outros lugares.

## Armadilhas conhecidas (leia antes de "corrigir")

- As variáveis de ambiente usam o prefixo **`NEXT_PULIC_`** (typo histórico, sem o B). O código lê esse nome. Não "corrija" só um lado — renomear exige mudar `.env.example`, o código e as envs na Vercel juntos (há ADR/débito registrado em `docs/current-state.md`).
- Existem **dois caminhos de leitura de conteúdo**: Contentlayer (`allDocs`) e leitura manual via `fs`+`gray-matter` em `src/lib/blog.ts`. Convergir para Contentlayer é débito planejado — não crie um terceiro.
- `src/utils/blog/` é quase todo código morto (só `mountSlugParam.ts` é usado). Não construa em cima dele.
- 16 dos 18 artigos têm a tag com typo `chanllenges`. Unificação de taxonomia é débito registrado.
- `gray-matter`, `unified`, `remark-parse`, `remark-rehype`, `rehype-stringify` são importados mas **não declarados** no `package.json` (dependências fantasma).

## Limites

- Não faça commit/push sem pedido explícito do usuário.
- Não publique conteúdo, envie emails ou toque em configuração da Vercel sem confirmação.
- Segredos nunca entram no repositório (Resend API key etc. vivem só na Vercel/`.env.local`).
