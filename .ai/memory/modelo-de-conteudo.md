---
name: modelo-de-conteudo
description: Como artigos MDX funcionam — frontmatter, paridade de idiomas, tags e imagens
type: project
updated: 2026-08-16
---

# Modelo de conteúdo

- Artigos em `src/articles/{br,en}/<slug>.mdx` — **sempre em par** (mesmo slug nos dois idiomas). Scaffold: `yarn article-template <slug>`.
- Frontmatter obrigatório (schema em `contentlayer.config.js`): `title`, `createdAt` (string ISO), `author`, `image`, `lang`, `tags` (**string CSV**, não array). Opcionais: `description`, `lastModified`, `published` (default true).
- Slug computado: `slugAsParams = "br/<slug>"` (inclui o idioma). Cuidado ao montar URLs — o prefixo de locale vem ANTES de `/blog/` na rota real (`/br/blog/<slug>`).
- Taxonomia atual está suja: 16/18 artigos usam a tag com typo `chanllenges`. Unificar para `challenges` é item do plano (fase 1) — até lá, não criar valores novos de tag sem alinhar.
- Existem **dois leitores de conteúdo**: Contentlayer (`allDocs`) e `src/lib/blog.ts` (fs + gray-matter). O destino é convergir para Contentlayer — nunca adicionar um terceiro caminho.
