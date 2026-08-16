# ADR-0002: Contentlayer2 + MDX como sistema de conteúdo

- **Status:** aceito (retroativo)
- **Data:** 2026-08-16 (documenta decisão de ~dez/2023–2024)
- **Decisor:** Douglas Matos da Silva

## Contexto

O blog precisa de artigos versionados em git, com frontmatter validado, código com syntax highlight e tipos TypeScript para o conteúdo. O projeto `contentlayer` original foi abandonado; a comunidade mantém o fork `contentlayer2`.

## Decisão

Usamos **Contentlayer2** compilando MDX de `src/articles/{br,en}/` em build (`yarn clb`), com schema único `Doc` (frontmatter: `title`, `createdAt`, `author`, `image`, `lang`, `tags` CSV; opcionais `description`, `lastModified`, `published`) e pipeline remark/rehype (`remark-gfm`, `rehype-slug`, `rehype-pretty-code` tema `github-dark`, `rehype-autolink-headings`).

## Alternativas consideradas

- **`next-mdx-remote` / leitura manual com `gray-matter`** — sem validação de schema nem tipos gerados. (Ironicamente, um caminho manual paralelo existe em `src/lib/blog.ts` — ver consequências.)
- **CMS headless (Contentful, Sanity)** — descartado: custo/complexidade desnecessários; o repositório é o CMS.
- **Velite / MDX nativo do Next** — alternativas mais novas; migração pode ser reavaliada em ADR futuro se o contentlayer2 estagnar.

## Consequências

**Positivas:**
- Frontmatter inválido quebra o build (validação na origem); conteúdo tipado via `contentlayer/generated`.

**Negativas / riscos aceitos:**
- Dependência de um fork comunitário com manutenção esporádica — risco de ficar preso a um Next antigo.
- **Débito real:** coexistência de um segundo leitor (`src/lib/blog.ts`, fs+gray-matter, com dependências fantasma) usado na listagem do blog. Decisão derivada: **convergir tudo para Contentlayer** (plano fase 1); um novo ADR deve substituir este se optarmos por trocar de ferramenta.
- `tags` como string CSV (em vez de lista) empobrece a taxonomia — candidata a mudança de schema na reformulação.
