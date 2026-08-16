---
name: debitos-conhecidos
description: Armadilhas que parecem bug novo mas são débito conhecido e registrado — não "corrigir" isoladamente
type: project
updated: 2026-08-16
---

# Débitos conhecidos (não tropeçar duas vezes)

Lista completa e priorizada em `docs/current-state.md` e `docs/plan/reformulation-plan.md` (fase 1). Os que mais enganam agentes:

- **`NEXT_PULIC_*` (sem o B) é o nome real das env vars** — o typo está no `.env.example` E no código E na Vercel. Renomear exige migração coordenada nos três lugares; nunca corrigir só um.
- **Dependências fantasma:** `gray-matter`, `unified`, `remark-parse`, `remark-rehype`, `rehype-stringify` são importados mas não declarados no `package.json`.
- **`"tailwind": "^4.0.0"` em dependencies NÃO é o Tailwind CSS** — é um pacote npm homônimo abandonado. O Tailwind real é `tailwindcss` (devDependencies).
- **`src/utils/blog/` é quase todo morto** — só `mountSlugParam.ts` é usado. `getDocFromParams.ts` foi duplicado inline em `[slug]/page.tsx` (a versão viva é a inline).
- **`Mdx.tsx` renderiza h2/h3 como `<h1>`** e `b` como `<bdo>` — bug real de SEO/a11y, correção planejada na fase 1.
- **Sitemap gera URLs erradas** (`/blog/br/x` em vez de `/br/blog/x`) e a base URL tem 3 fontes de verdade (`baseUrl.ts` hardcoded, env var, README).
- **`localStorage` é lido durante render** em `LinkI18n`, `MenuContent` e `ToggleLanguage` — pode gerar `href="/null/..."`. Não copiar esse padrão em componentes novos.
- A fonte `font-ranga` nunca carrega (`@fontsource/ranga` não é importado em lugar nenhum) — o H1 da home usa fallback `cursive`.
- Rota de API do contato está aninhada sob `[lang]` (`/{br,en}/pages/contact/api`), sem validação de input nem `await` no envio do Resend.
