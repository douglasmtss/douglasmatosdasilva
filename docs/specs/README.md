# Specs — Spec-Driven Development

Neste projeto, **funcionalidade nova começa por uma spec, não por código**. A spec captura o quê e o porquê; o código captura o como. As specs 001–005 são **retroativas**: especificam o comportamento atual (2026-08-16), incluindo desvios conhecidos, e servem de baseline para a reformulação.

## Fluxo

1. Escrever a spec com o template [`0000-template.md`](0000-template.md) (Claude Code: `/spec <feature>`). Status `rascunho`.
2. Revisar com o dono do projeto até `aprovada`.
3. Implementar. Critérios de aceite viram o checklist de validação.
4. Marcar `implementada` (com data) e registrar desvios, se houver.

Regras: requisitos numerados (RF-n / RNF-n) e critérios de aceite **verificáveis**; toda spec considera i18n (br+en), SEO e as regras de `.ai/memory/posicionamento-marca.md`.

## Índice

| Spec | Título | Status |
|---|---|---|
| [spec-001](spec-001-blog-mdx.md) | Blog MDX bilíngue | implementada (retroativa, com desvios) |
| [spec-002](spec-002-i18n.md) | Internacionalização por sub-path | implementada (retroativa, com desvios) |
| [spec-003](spec-003-contato.md) | Formulário de contato | implementada (retroativa, com desvios) |
| [spec-004](spec-004-tema-e-ui.md) | Tema (dark/light) e shell de UI | implementada (retroativa) |
| [spec-005](spec-005-seo.md) | SEO técnico (metadata, sitemap, robots) | implementada (retroativa, com desvios) |
