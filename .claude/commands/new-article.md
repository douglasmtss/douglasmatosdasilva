---
description: Cria um novo artigo bilíngue do blog (par br/en) com frontmatter completo
---

Crie um novo artigo do blog sobre: $ARGUMENTS

Processo:

1. Derive um slug kebab-case curto do tema.
2. Rode `yarn article-template <slug>` para gerar o par `src/articles/br/<slug>.mdx` e `src/articles/en/<slug>.mdx`.
3. Preencha o frontmatter completo nos DOIS arquivos: `title`, `description`, `createdAt` (data de hoje, ISO), `author: Douglas Matos da Silva`, `image` (existente em `src/assets/images/` ou avise que falta), `lang`, `tags` (CSV; use `challenges` — nunca o typo `chanllenges`; alinhe tags novas com o usuário).
4. Escreva o conteúdo primeiro em pt-BR, depois a versão em inglês (tradução fiel, não literal).
5. Respeite as regras de `.ai/memory/posicionamento-marca.md` — nada de nomes internos de empregador, títulos de senioridade, etc.
6. Rode `yarn clb` e depois `yarn build` para validar.
7. Reporte os caminhos criados e lembre o usuário de revisar antes de publicar (push = deploy).
