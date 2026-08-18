# Contexto do projeto

> Atualizado em: 2026-08-16. Mantenha este arquivo curto e vivo — é a primeira leitura de qualquer agente.

## O que é

Site pessoal/portfólio de Douglas Matos da Silva (`douglasmatosdasilva.com.br` / `douglasmatosdev.com`): vitrine de trabalhos, habilidades e experiência, com blog técnico bilíngue (pt-BR/en).

## Estado atual (resumo)

- **Stack:** Next.js 14.0.4 (App Router) + TS strict + Contentlayer2 + Tailwind 3 + next-themes. Deploy Vercel via dashboard, **sem CI**.
- **Conteúdo:** 18 artigos MDX (9 títulos × 2 idiomas) sobre desafios Java/JavaScript (HackerRank/Beecrowd), parados desde fev/2024.
- **Páginas:** home, blog, post, about, portfolio (projetos hardcoded), contact (Resend), privacy, disclaimer.
- **Qualidade:** sem testes, lint mínimo, sem typecheck dedicado. Validação = `yarn build`.
- **Débito técnico relevante** mapeado em `docs/current-state.md` (dependências fantasma, código morto, typo `NEXT_PULIC_`, sitemap com URLs erradas, h2/h3 renderizando `<h1>`, etc.).

## Direção (de onde vem o roadmap)

O plano de reformulação completo está em `docs/plan/reformulation-plan.md`. Norte estratégico:

- Posicionamento: **fullstack de dados em tempo real para operações industriais (O&G) + IA aplicada à engenharia (RAG/MCP/agents em produção)**.
- Título público: **"Fullstack Developer"** — nunca usar "Sênior", "III" ou numeração de nível.
- Conteúdo do trabalho descrito sempre de forma genérica: "plataforma de agregação e análise de KPIs operacionais para o setor de energia". Nunca citar nomes internos (repos, tickets, clientes, colegas).
- Site é bilíngue por estratégia (preparação para mercado internacional) — tudo nasce em pt-BR **e** en.

Regras completas de posicionamento/sanitização: `.ai/memory/posicionamento-marca.md`.

## Prioridades correntes

1. **Trabalho flui por tickets**: `.ai/tickets/BOARD.md` é a fonte de verdade do andamento (pipeline triagem → executor → revisor, ADR-0009).
2. Fundação: corrigir débitos críticos (fase 1 do plano, TCK-0001..0003) antes de features novas.
3. Reformular portfólio com cases reais sanitizados (fase 2 do plano).
4. **Blog novo (fase 3, revisado em 2026-08-16):** performático (SSG, JS mínimo, Lighthouse ~100) e multi-assunto com categorias — maioria do conteúdo sobre **IA/LLMs**, mais desenvolvimento/engenharia/arquitetura de software, inglês para devs e carreira. O formato antigo (desafios de código) foi descontinuado; espec. em elaboração (TCK-0004 → spec-006).

## Política de commit vigente

O Douglas autorizou (2026-08-16) **commits e pushes incrementais direto na `main`** para o trabalho deste plano. Commits pequenos e temáticos, mensagens em inglês (`feat:`/`fix:`/`chore:`), referenciando o ticket quando houver (`(TCK-NNNN)`).
