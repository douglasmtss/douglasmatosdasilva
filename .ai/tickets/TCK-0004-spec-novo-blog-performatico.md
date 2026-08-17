---
id: TCK-0004
titulo: Spec do novo blog performático multi-assunto
tipo: feature
prioridade: P1
fase: 3
status: review
criado: 2026-08-16
atualizado: 2026-08-16
depende-de: []
spec: "docs/specs/spec-006-blog-performatico-multi-assunto.md"
adr: ""
handoffs: []
---

# TCK-0004: Spec do novo blog performático multi-assunto

## Descrição

Direção editorial redefinida em 2026-08-16 (ver plano, fase 3): o blog deixa de ser "desafios de código" e vira um blog **performático** e **multi-assunto**, com taxonomia por categorias — a maioria do conteúdo sobre **inteligência artificial e LLMs**, mais desenvolvimento de software, engenharia de software, arquitetura de software, inglês para devs, carreira etc. Este ticket produz a **spec-006** (não implementa): modelo de conteúdo novo (categorias como taxonomia de primeira classe, tags como lista), requisitos de performance (SSG puro, JS mínimo, alvo Lighthouse ~100), listagem com filtro por categoria, RSS, destino dos 18 artigos antigos (categoria `fundamentos`).

## Critérios de aceite

- [ ] `docs/specs/spec-006-*.md` criada no template, com RF/RNF numerados e verificáveis
- [ ] Taxonomia de categorias proposta (incluindo `ia-llm` como categoria âncora) e migração dos artigos antigos definida
- [ ] Requisitos de performance quantificados (Lighthouse, peso de página, JS shipped)
- [ ] Impacto em i18n e SEO especificado (paridade br/en, hreflang, RSS por idioma)
- [ ] Spec aprovada pelo Douglas (status `aprovada`) antes de qualquer ticket de implementação

## Triagem

Triagem confirmada: feature P1 da fase 3. Esta entrega é documental e exige aprovação explícita antes de qualquer implementação; não depende de código, mas a execução do blog dependerá da conclusão da fundação P0 da fase 1.

Plano executado: criar spec-006 a partir do template, cobrindo modelo `category`/`tags`, taxonomia, migração dos 18 artigos, SSG, JavaScript/peso/Lighthouse quantificados, i18n, SEO, feeds e critérios verificáveis.

## Diário de bordo

### 2026-08-16 — criação
Ticket criado junto com a mudança de direção editorial do blog (pedido do Douglas em 2026-08-16).

### 2026-08-16 — triagem/executor
Spec criada em `docs/specs/spec-006-blog-performatico-multi-assunto.md`, status `rascunho`. A spec define `ia-llm` como categoria âncora, `fundamentos` para os 18 artigos antigos, paridade br/en obrigatória, feeds por idioma e metas de Lighthouse/JS/peso. Aguarda aprovação do Douglas antes de tickets de implementação.
