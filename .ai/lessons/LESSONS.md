# LESSONS.md — lições aprendidas

> Append-only. Nova lição no **topo**. Formato: data, contexto, lição, como aplicar. Registre erros que custaram tempo e abordagens confirmadas como corretas — não registre trivialidades.

---

## 2026-08-16 — Não confiar no nome "tailwind" nas dependencies

**Contexto:** auditoria inicial do projeto para a documentação C4/ADR.
**Lição:** o `package.json` declara `"tailwind": "^4.0.0"`, que é um pacote npm homônimo abandonado — o Tailwind CSS de verdade é `tailwindcss` (devDependencies, v3). Um agente que "atualize o Tailwind" mexendo no pacote errado não muda nada e polui o lockfile.
**Como aplicar:** qualquer trabalho envolvendo Tailwind opera sobre `tailwindcss`; o pacote `tailwind` deve ser removido (plano fase 1).

## 2026-08-16 — O typo NEXT_PULIC_ é sistêmico, não pontual

**Contexto:** auditoria inicial de SEO/env vars.
**Lição:** o prefixo com typo existe no `.env.example`, em 4 pontos do código e (presumivelmente) nas envs da Vercel. Corrigir só o código quebra produção silenciosamente, porque a env "certa" não existe lá.
**Como aplicar:** a renomeação é uma migração coordenada (código + .env.example + Vercel no mesmo deploy), tratada como item explícito do plano — nunca como drive-by fix.

## 2026-08-16 — Conteúdo tem dois leitores concorrentes

**Contexto:** mapeamento da arquitetura de conteúdo.
**Lição:** `blog/page.tsx` e `LastPosts.tsx` leem MDX via `fs`+`gray-matter` (`src/lib/blog.ts`), enquanto `[slug]/page.tsx` e `sitemap.ts` usam Contentlayer. Mudanças no frontmatter/schema precisam ser verificadas nos DOIS caminhos até a convergência (plano fase 1).
**Como aplicar:** ao mexer em listagem/preview de posts, verifique também o caminho Contentlayer (e vice-versa).
