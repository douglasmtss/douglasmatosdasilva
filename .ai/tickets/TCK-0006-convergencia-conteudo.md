---
id: TCK-0006
titulo: Convergir leitura do blog para Contentlayer
tipo: debito
prioridade: P1
fase: 1
status: concluido
criado: 2026-08-17
atualizado: 2026-08-17
depende-de: [TCK-0005]
spec: "docs/specs/spec-006-blog-performatico-multi-assunto.md"
adr: ""
handoffs: []
---

# TCK-0006: Convergir leitura do blog para Contentlayer

## Descrição

Eliminar a leitura concorrente via `fs` + `gray-matter` e usar os documentos já gerados pelo Contentlayer em todas as listagens e previews do blog. Remover o parser Markdown duplicado quando a descrição puder ser exibida como texto.

## Critérios de aceite

- [ ] Listagem e últimos posts usam `allDocs`.
- [ ] Nenhuma rota de produção importa `gray-matter`, `mdToHtml` ou lê `src/articles` diretamente.
- [ ] Posts publicados continuam ordenados por data e com tempo de leitura.
- [ ] `yarn lint` e `yarn build` verdes.

## Diário de bordo

### 2026-08-17 — executor

O Contentlayer já fornece `body.raw`, frontmatter e slug para os mesmos 18 documentos. A migração será feita mantendo o contrato de `Post` usado pelos componentes, para limitar o diff e permitir rollback simples.

### 2026-08-17 — validação

Listagem, últimos posts e descrição dos artigos passaram a usar Contentlayer. `yarn lint` e `yarn build` passaram; os 18 documentos continuam disponíveis nas duas línguas.
