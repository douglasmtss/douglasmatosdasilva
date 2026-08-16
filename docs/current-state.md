# Estado atual do projeto

> Fotografia de **2026-08-16**, produzida por auditoria completa do repositório. Arquitetura detalhada em [`architecture/c4/`](architecture/c4/); decisões em [`adr/`](adr/); comportamento por feature em [`specs/`](specs/).

## Resumo executivo

O site funciona e está no ar (`douglasmatosdasilva.com.br` / `douglasmatosdev.com`), mas está **congelado desde o início de 2024**: último artigo em fev/2024, Next.js 14.0.4 (dez/2023, 2 majors atrás, com CVEs conhecidas), portfólio exibindo projetos de estudo antigos que não representam mais o nível profissional do autor. A base de código é enxuta e legível, porém acumulou débito: dependências fantasma e erradas, código morto, bugs de SEO/a11y e zero automação de qualidade (sem testes, sem CI).

## O que existe e funciona

- Home, about, portfolio, contact (Resend), privacy, disclaimer e blog com 18 artigos MDX (9 × 2 idiomas), tudo bilíngue via sub-path `/br` `/en`.
- Dark/light mode persistido; layout responsivo; SSG dos posts.
- Fluxo de autoria: `yarn article-template` + Contentlayer2 com validação de frontmatter em build.
- Deploy contínuo via Vercel↔GitHub (push na `main` publica).

## Débitos priorizados

### P0 — corrigir antes de qualquer feature (quebram confiança/produção)

| # | Débito | Onde |
|---|---|---|
| 1 | Dependências fantasma: `gray-matter`, `unified`, `remark-parse`, `remark-rehype`, `rehype-stringify` importados sem declaração | `src/lib/blog.ts`, `src/lib/mdToHtml.ts` |
| 2 | `"tailwind": "^4.0.0"` é pacote homônimo errado (o real é `tailwindcss`) | `package.json` |
| 3 | Next 14.0.4 com CVEs conhecidas (incl. bypass de middleware) → atualizar major | `package.json` |
| 4 | Form de contato: envio sem `await`, sem validação, sem escape de HTML, 200 sempre | `src/app/[lang]/pages/contact/api/route.ts` |
| 5 | Sitemap gera URLs erradas (`/blog/br/x` em vez de `/br/blog/x`) | `src/app/sitemap.ts` |
| 6 | `h2`/`h3` renderizam `<h1>` e `b` vira `<bdo>` nos posts (SEO/a11y) | `src/components/Mdx.tsx:13-20` |
| 7 | `localStorage` lido no render → risco de `href="/null/..."` | `LinkI18n.tsx:16`, `MenuContent.tsx:11`, `ToggleLanguage.tsx:13` |

### P1 — higiene estrutural

| # | Débito |
|---|---|
| 8 | Typo sistêmico `NEXT_PULIC_*` → migração coordenada (código + .env.example + Vercel) para `NEXT_PUBLIC_*`/vars server |
| 9 | Dois leitores de conteúdo (Contentlayer vs fs+gray-matter) → convergir para Contentlayer e apagar `lib/blog.ts`/`mdToHtml.ts` |
| 10 | Código morto: `src/utils/blog/*` (exceto `mountSlugParam.ts`), `lib/redirecti18nPathName.ts` (vazio), `utils/{links,constants,ascii_utf8_binary}.ts`, tipos órfãos em `types/blog.d.ts` |
| 11 | Dependências não usadas: `react-router-dom` (+types), `cookies-next`, `shiki`, `shikiji`, `unist-util-visit`, `@fontsource/*` (não importados — `font-ranga` cai em `cursive`), `@types/react-icons` |
| 12 | 3 fontes de verdade da base URL (`lib/baseUrl.ts` hardcoded, env var, README) |
| 13 | Layouts `blog/` e `pages/` duplicados → um `[lang]/layout.tsx` |
| 14 | Tag `chanllenges` (typo) em 16/18 artigos |
| 15 | Sem CI, sem testes, sem `.nvmrc`/`packageManager`, README de boilerplate incorreto (sugere npm/pnpm/bun) |

### P2 — qualidade e alcance

| # | Débito |
|---|---|
| 16 | Analytics só na home; sem hreflang/canonical/twitter card; `disclaimer` sem metadata |
| 17 | Excesso de `dynamic(..., {ssr:false})` em componentes que poderiam ser server components |
| 18 | `tailwind.config.ts` com `content` apontando para `src/pages/**` inexistente; bloco dark no-op no `globals.css`; CSS acoplado a artigo específico |
| 19 | Datas hardcoded expiradas em `utils/info.tsx` (`inCollegeNow` sempre falso desde 2026; idade ignora mês) |
| 20 | Imagens duplicadas no git (`src/assets/images` E `public/images` versionados); 10 branches remotas obsoletas |
| 21 | Portfólio hardcoded com projetos de estudo antigos — desalinhado do posicionamento atual (ver plano) |

## Métricas rápidas

- **Código:** ~24 componentes, 8 libs, 3 hooks; TS strict; zero testes.
- **Conteúdo:** 18 artigos (2023-12-25 a 2024-02-13); 3 combinações de tags, todas de desafios de código.
- **Dependências:** 6+ nunca usadas, 5 fantasma, maioria 1–2 majors atrás.

## Onde isso vai dar

Todos os débitos acima estão sequenciados na **fase 1** do [plano de reformulação](plan/reformulation-plan.md), que também redefine conteúdo e posicionamento do site.
