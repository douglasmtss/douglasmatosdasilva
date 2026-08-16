# ADR-0007: Deploy contínuo pela integração Vercel↔GitHub, sem CI no repositório

- **Status:** aceito (retroativo) — **candidato a substituição na fase 1 do plano (adicionar CI)**
- **Data:** 2026-08-16
- **Decisor:** Douglas Matos da Silva

## Contexto

Projeto pessoal de mantenedor único. A Vercel oferece build + deploy + preview por PR nativamente via integração com o GitHub, sem qualquer configuração no repositório.

## Decisão

O deploy é feito **exclusivamente pela integração Vercel↔GitHub** configurada no dashboard: push na `main` publica em produção; não há `vercel.json`, GitHub Actions nem outros pipelines no repo. Variáveis de ambiente vivem só na Vercel.

## Alternativas consideradas

- **GitHub Actions + deploy CLI** — mais controle e gates, mas era esforço além do necessário no início do projeto.

## Consequências

**Positivas:**
- Zero manutenção de pipeline; previews automáticos por branch/PR.

**Negativas / riscos aceitos:**
- **Nenhum gate antes de produção**: um push com erro de lint ou artigo com frontmatter inválido só falha no build da Vercel (ou pior, passa). Sem testes, sem verificação de links, sem Lighthouse.
- Configuração de build invisível no repo (bus factor).
- O plano de reformulação (fase 1) propõe substituir este ADR por: **manter deploy na Vercel + adicionar GitHub Actions com gates (lint, build, typecheck)** — nos moldes do que o autor já pratica em projetos pessoais mais novos.
