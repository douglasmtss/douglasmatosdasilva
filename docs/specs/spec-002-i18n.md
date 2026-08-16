# spec-002: Internacionalização por sub-path

- **Status:** implementada (retroativa, com desvios)
- **Data:** 2026-08-16 (comportamento observado)
- **ADRs relacionados:** [ADR-0003](../adr/0003-i18n-subpath-middleware.md)

## Objetivo e motivação

Servir todo o site em pt-BR e inglês sob URLs distintas (`/br/*`, `/en/*`), para alcançar tanto o mercado brasileiro quanto o internacional.

## Requisitos funcionais

- **RF-1:** Acesso a `/` redireciona para `/br` ou `/en` conforme `Accept-Language`; fallback `br`.
- **RF-2:** Toda página existe nos dois idiomas com o mesmo path relativo.
- **RF-3:** Textos de UI vêm de `src/dictionaries/{br,en}.json` via `getDictionary(locale)` (server-only); chaves sempre presentes nos dois arquivos.
- **RF-4:** O visitante pode alternar o idioma em qualquer página (`ToggleLanguage`), permanecendo na página equivalente.
- **RF-5:** Links internos preservam o locale corrente.

## Requisitos não-funcionais

- **RNF-1:** A fonte de verdade do locale é a URL; nenhum link pode ser gerado com locale indefinido.
- **RNF-2:** Buscadores devem entender a relação entre as versões (`hreflang`/`alternates.languages`).

## Critérios de aceite

- [x] RF-1..RF-4 observáveis
- [ ] RNF-1 — **falha hoje** (ver desvios)
- [ ] RNF-2 — **não implementado**

## Desvios registrados

1. **RNF-1 violado:** `LinkI18n`/`MenuContent` leem `localStorage['lang']` durante o render; sem a chave, geram `href="/null/..."`. `ToggleLanguage` grava em `localStorage` como efeito colateral do render. Correção (fase 1): derivar locale de `useParams()`/URL e eliminar `localStorage` como fonte.
2. **RNF-2 ausente:** nenhuma página declara `alternates.languages` (item da fase 1).
3. O matcher do middleware exclui `api` apenas no início do path — a rota de contato aninhada passa pelo middleware.
