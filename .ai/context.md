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

1. Fundação: corrigir débitos críticos (fase 1 do plano) antes de features novas.
2. Reformular portfólio com cases reais sanitizados (fase 2–3 do plano).
3. Retomar produção de conteúdo (blog) com os temas fortes: E2E/Playwright, RAG/MCP, dados em tempo real.
