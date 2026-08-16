# spec-005: SEO técnico

- **Status:** implementada (retroativa, com desvios)
- **Data:** 2026-08-16 (comportamento observado)

## Objetivo e motivação

O site só cumpre a função de vitrine se for encontrável: SEO técnico correto para as páginas e artigos, nos dois idiomas.

## Requisitos funcionais

- **RF-1:** Toda página define `generateMetadata` (título, descrição, OG image).
- **RF-2:** `sitemap.xml` gerado com todas as páginas e posts, com URLs corretas (incluindo prefixo de locale).
- **RF-3:** `robots.txt` gerado, apontando para o sitemap.
- **RF-4:** Manifest PWA com nome, cores e ícones.
- **RF-5:** Analytics de pageview em todas as páginas.

## Requisitos não-funcionais

- **RNF-1:** URL base única e consistente em todo o site (uma fonte de verdade).
- **RNF-2:** `alternates.languages` (hreflang) ligando as versões br/en; canonical por página.
- **RNF-3:** Twitter card nos metadados.
- **RNF-4:** Headings semânticos nos posts (depende da spec-001/RNF-2).

## Critérios de aceite

- [x] RF-1 (exceto disclaimer), RF-3, RF-4 observáveis
- [ ] RF-2 — **falha hoje** (URLs erradas)
- [ ] RF-5 — parcial (só a home)
- [ ] RNF-1..RNF-4 — **não implementados**

## Desvios registrados

1. **Sitemap com URLs erradas:** monta `/blog/br/x` em vez de `/br/blog/x`; não inclui portfolio/contact/disclaimer; `lastModified` comentado.
2. **Três fontes de verdade da base URL:** `lib/baseUrl.ts` (hardcoded), env `NEXT_PULIC_BASE_URL` (com typo) e o README.
3. Analytics (gtag) injetado apenas na home; nenhuma outra rota é medida.
4. `disclaimer` sem `generateMetadata`; nenhuma página tem twitter card, canonical ou hreflang.
5. `robots.ts` bloqueia `/admin` (rota inexistente).

Todos endereçados na fase 1 do plano de reformulação.
