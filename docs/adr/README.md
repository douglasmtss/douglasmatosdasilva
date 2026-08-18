# ADRs — Architecture Decision Records

Registro das decisões de arquitetura do projeto. ADRs `0001`–`0007` são **retroativos**: documentam decisões já presentes no código em 2026-08-16, reconstituindo o contexto da melhor forma possível.

## Regras

- Um ADR por decisão. Numeração sequencial de 4 dígitos.
- Status: `proposto` → `aceito` | `rejeitado`; um ADR aceito só muda para `substituido por NNNN` (nunca é editado no mérito).
- Template: [`0000-template.md`](0000-template.md). No Claude Code: `/adr <decisão>`.

## Índice

| Nº | Título | Status |
|---|---|---|
| [0001](0001-nextjs-14-app-router.md) | Next.js 14 com App Router como framework do site | aceito (retroativo) |
| [0002](0002-contentlayer2-mdx.md) | Contentlayer2 + MDX como sistema de conteúdo | aceito (retroativo) |
| [0003](0003-i18n-subpath-middleware.md) | i18n por sub-path com middleware próprio, sem biblioteca | aceito (retroativo) |
| [0004](0004-tailwind-next-themes.md) | Tailwind CSS + next-themes para estilo e dark mode | aceito (retroativo) |
| [0005](0005-resend-formulario-contato.md) | Resend para o email do formulário de contato | aceito (retroativo) |
| [0006](0006-yarn-node24.md) | Yarn como gerenciador de pacotes e Node >= 24 | aceito (retroativo) |
| [0007](0007-deploy-vercel-sem-ci.md) | Deploy contínuo pela integração Vercel↔GitHub, sem CI no repo | aceito (retroativo) |
| [0008](0008-infraestrutura-de-ia-no-repo.md) | Infraestrutura de contexto para agentes de IA versionada no repo | aceito |
| [0009](0009-sistema-de-tickets-multi-agente.md) | Sistema de tickets com pipeline de agentes (triagem → execução → revisão) | aceito |
