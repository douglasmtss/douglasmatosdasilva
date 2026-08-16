# ADR-0001: Next.js 14 com App Router como framework do site

- **Status:** aceito (retroativo)
- **Data:** 2026-08-16 (documenta decisão de ~dez/2023)
- **Decisor:** Douglas Matos da Silva

## Contexto

O site precisa de: páginas majoritariamente estáticas com bom SEO, blog compilado de MDX, i18n por rota, uma única rota de API (contato) e deploy simples. O autor trabalha profissionalmente com React/TypeScript, e o site também serve de vitrine dessa stack. Havia experimentos anteriores com Vite (branch `vite` remota).

## Decisão

Usamos **Next.js com App Router** (server components, `generateStaticParams`, metadata API, route handlers) como framework único do site, em TypeScript strict.

## Alternativas consideradas

- **SSG puro (Astro, Eleventy, Hugo)** — descartado: o site também é vitrine de competência React/TS do autor, e a rota de API de contato + middleware de locale se beneficiam de um framework fullstack.
- **Vite + React SPA** (experimento anterior) — descartado: SEO e SSG de blog exigiriam remontar o que o Next dá pronto.
- **Pages Router** — descartado: App Router é o caminho atual do Next e habilita server components e metadata API.

## Consequências

**Positivas:**
- SSG do blog, metadata/sitemap/robots programáticos, middleware edge e API route no mesmo projeto.
- Alinhamento com a stack profissional do autor (React/TS).

**Negativas / riscos aceitos:**
- Acoplamento ao ritmo de releases do Next; a versão fixada (14.0.4) envelheceu e hoje há CVEs conhecidas corrigidas em versões posteriores — a atualização de major é item da fase 1 do plano de reformulação.
- App Router impõe disciplina server/client components que o código atual nem sempre segue (excesso de `ssr: false` — débito registrado).
