---
id: TCK-0005
titulo: Corrigir sitemap e semântica dos posts
tipo: bug
prioridade: P0
fase: 1
status: concluido
criado: 2026-08-17
atualizado: 2026-08-17
depende-de: []
spec: ""
adr: ""
handoffs: []
---

# TCK-0005: Corrigir sitemap e semântica dos posts

## Descrição

Corrigir URLs canônicas do sitemap para incluir o locale, garantir que as páginas públicas bilíngues estejam representadas e reparar os elementos HTML renderizados incorretamente pelo componente MDX.

## Critérios de aceite

- [ ] Sitemap usa `/br/...` e `/en/...` e inclui apenas URLs públicas válidas.
- [ ] Headings MDX preservam `h1`, `h2` e `h3`; negrito renderiza `b`.
- [ ] `yarn lint` e `yarn build` verdes.

## Diário de bordo

### 2026-08-17 — executor

Auditoria dos débitos P0 restantes encontrou sitemap sem locale e mapeamentos MDX que transformavam `h2`/`h3` em `h1` e `b` em `bdo`. A correção será publicada em incremento isolado.

### 2026-08-17 — validação

`yarn lint` e `yarn build` passaram. O build gera 39 rotas estáticas, incluindo sitemap e as páginas bilíngues.
