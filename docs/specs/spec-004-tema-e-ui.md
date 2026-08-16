# spec-004: Tema (dark/light) e shell de UI

- **Status:** implementada (retroativa)
- **Data:** 2026-08-16 (comportamento observado)
- **ADRs relacionados:** [ADR-0004](../adr/0004-tailwind-next-themes.md)

## Objetivo e motivação

Identidade visual própria com dark mode — o site é vitrine de frontend do autor.

## Requisitos funcionais

- **RF-1:** Alternância dark/light persistida entre visitas, com respeito à preferência do sistema como padrão (next-themes).
- **RF-2:** Shell consistente em todas as páginas: header (logo, menu, toggles de tema/idioma), breadcrumbs nas páginas internas, footer com links sociais e copyright com ano corrente.
- **RF-3:** Menu responsivo: drawer com hambúrguer no mobile.
- **RF-4:** Botão "voltar ao topo" em páginas longas.

## Requisitos não-funcionais

- **RNF-1:** Sem flash de tema errado no primeiro paint (resolvido pelo script do next-themes).
- **RNF-2:** Estilo exclusivamente via Tailwind (paleta `dmds-*`); sem CSS acoplado a conteúdo específico.

## Critérios de aceite

- [x] RF-1..RF-4 observáveis
- [ ] RNF-2 — parcialmente violado (regra CSS para uma imagem de um artigo específico em `globals.css:51`)

## Desvios registrados

1. `globals.css` tem bloco `@media (prefers-color-scheme: dark)` que redefine as mesmas variáveis do `:root` (no-op) e uma regra acoplada a um artigo específico.
2. A fonte display `font-ranga` nunca carrega (`@fontsource/ranga` não importado) — H1 da home cai em `cursive`.
3. Dois layouts internos (`blog/layout.tsx`, `pages/layout.tsx`) são duplicatas quase exatas — deveriam ser um único `[lang]/layout.tsx`.
