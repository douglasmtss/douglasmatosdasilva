# spec-001: Blog MDX bilíngue

- **Status:** implementada (retroativa, com desvios)
- **Data:** 2026-08-16 (comportamento observado)
- **ADRs relacionados:** [ADR-0002](../adr/0002-contentlayer2-mdx.md)

## Objetivo e motivação

Publicar artigos técnicos versionados em git, nos dois idiomas do site, com syntax highlight e zero infraestrutura de CMS. O blog é a principal ferramenta de produção de conteúdo da marca pessoal.

## Escopo

**Inclui:** listagem de posts por idioma, página de post, preview de últimos posts na home, scaffolding de artigo.
**Não inclui:** comentários, busca, RSS, filtro por tag (candidatos na reformulação).

## Requisitos funcionais

- **RF-1:** Artigos vivem em `src/articles/{br,en}/<slug>.mdx`, sempre em par de idiomas com o mesmo slug.
- **RF-2:** Frontmatter validado em build: `title`, `createdAt`, `author`, `image`, `lang`, `tags` (CSV); opcionais `description`, `lastModified`, `published` (default true).
- **RF-3:** `/[lang]/blog` lista todos os posts do idioma, ordenados por data decrescente, com título, excerpt, data e tempo de leitura.
- **RF-4:** `/[lang]/blog/[slug]` renderiza o MDX com highlight de código (tema github-dark), headings com anchor link e botão de copiar em blocos de código. Slug inexistente ⇒ 404.
- **RF-5:** A home mostra os 6 posts mais recentes do idioma.
- **RF-6:** `yarn article-template <slug>` gera o par de arquivos com frontmatter preenchível.
- **RF-7:** Posts são pré-renderizados (SSG) via `generateStaticParams`.

## Requisitos não-funcionais

- **RNF-1:** Frontmatter inválido deve falhar o build (nunca publicar artigo malformado).
- **RNF-2:** Hierarquia de headings semântica na página do post (um único `<h1>`).

## i18n

Conteúdo duplicado por pasta de idioma; a UI da listagem vem dos dicionários.

## SEO

Título/descrição/OG image por post via `generateMetadata`; posts no sitemap.

## Critérios de aceite

- [x] RF-1..RF-7 observáveis no site atual
- [ ] RNF-2 — **falha hoje** (ver desvios)

## Desvios registrados

1. **RNF-2 violado:** `Mdx.tsx` mapeia `h2`/`h3` para `<h1>` — todo post tem múltiplos H1. Correção na fase 1 do plano.
2. **RF-3 usa leitor paralelo:** a listagem lê via `fs`+`gray-matter` (`src/lib/blog.ts`) em vez de Contentlayer; convergência planejada.
3. Taxonomia suja: tag com typo `chanllenges` em 16/18 artigos.
4. Imagens de artigo renderizadas com dimensões fixas 370×210 e sem `alt` propagado corretamente (`Mdx.tsx`).
