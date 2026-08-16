# Documentação do projeto

Documentação do site pessoal/portfólio `douglasmatosdasilva`, organizada em três padrões complementares:

| Padrão | Pasta | Responde a |
|---|---|---|
| **C4 Model** | [`architecture/c4/`](architecture/c4/) | *Como o sistema é estruturado?* — 4 níveis de zoom (Contexto → Contêineres → Componentes → Código) |
| **ADR** (Architecture Decision Records) | [`adr/`](adr/) | *Por que é assim?* — decisões de arquitetura, com contexto, alternativas e consequências |
| **SDD** (Spec-Driven Development) | [`specs/`](specs/) | *O que cada funcionalidade deve fazer?* — especificações escritas antes (ou, retroativamente, a partir) do código |

Documentos transversais:

- [`current-state.md`](current-state.md) — fotografia do estado atual: o que existe, o que funciona, débitos técnicos priorizados.
- [`plan/reformulation-plan.md`](plan/reformulation-plan.md) — plano de reformulação completo do site, em fases.

## Regras de manutenção

- **Decisão nova de arquitetura ⇒ ADR novo** (use `/adr` no Claude Code ou o template `adr/0000-template.md`). ADRs nunca são editados após aceitos — são substituídos.
- **Feature nova ⇒ spec primeiro** (use `/spec`). Código só começa com a spec aprovada.
- Diagramas em **Mermaid** dentro do próprio Markdown (renderizam no GitHub) — nada de imagens binárias de diagrama.
- Estes docs são públicos: valem as regras de sanitização de `.ai/memory/posicionamento-marca.md`.
