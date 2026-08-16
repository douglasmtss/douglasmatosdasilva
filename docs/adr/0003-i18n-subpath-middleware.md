# ADR-0003: i18n por sub-path com middleware próprio, sem biblioteca

- **Status:** aceito (retroativo)
- **Data:** 2026-08-16 (documenta decisão de ~2024, branch `i18n`)
- **Decisor:** Douglas Matos da Silva

## Contexto

O site é bilíngue por estratégia (pt-BR para o mercado local, en para o internacional). O App Router do Next não tem i18n nativo (o `i18n` do next.config só vale para o Pages Router). As necessidades são modestas: 2 locales, textos de página e artigos duplicados.

## Decisão

Implementamos i18n **manualmente**: segmento dinâmico `src/app/[lang]/` (`br` | `en`, definidos em `i18n.config.ts`), middleware com `negotiator` + `@formatjs/intl-localematcher` para redirecionar `/` conforme `Accept-Language`, dicionários JSON por locale (`src/dictionaries/`) carregados por `getDictionary()` (server-only), e artigos duplicados por pasta de idioma.

## Alternativas consideradas

- **`next-intl` / `next-i18next`** — descartadas: para 2 locales e conteúdo duplicado por arquivo, uma lib adiciona API e build steps sem eliminar o trabalho real (traduzir tudo).
- **Domínios separados por idioma** (`.com.br` / `.com`) — descartado: dobra a operação; os dois domínios servem o mesmo site.

## Consequências

**Positivas:**
- Zero dependência estrutural de lib de i18n; controle total; URLs limpas (`/br/...`, `/en/...`) boas para SEO.

**Negativas / riscos aceitos:**
- Toda a disciplina é manual: paridade de dicionários e de artigos depende de convenção (hoje garantida por processo, `yarn article-template`, e instruções de agente).
- **Débito real:** o locale tem segunda fonte de verdade em `localStorage` no client (`LinkI18n`, `ToggleLanguage`), lida durante render — frágil (`/null/...`) e causa excesso de `ssr: false`. A reformulação (fase 1) move a fonte de verdade para a URL/cookie.
- Sem `alternates.languages` (hreflang) nas páginas hoje — buscadores não sabem que `/br/x` e `/en/x` são o mesmo conteúdo (item do plano).
