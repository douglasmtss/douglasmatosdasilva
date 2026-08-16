# CLAUDE.md

As instruções canônicas deste projeto estão em **@AGENTS.md** — leia e siga aquele arquivo.

## Específico do Claude Code

- Slash commands do projeto em `.claude/commands/` (`/contexto`, `/devloop`, `/new-article`, `/handoff`, `/retomar`, `/licao`, `/adr`, `/spec`).
- Comece sessões de trabalho com `/contexto` (carrega `.ai/context.md` + memória) ou `/retomar` (continua de um handoff).
- Antes de encerrar uma tarefa grande incompleta, rode `/handoff` para registrar o estado em `.ai/handoff/`.
- Lições duráveis (erro que custou tempo, decisão confirmada pelo usuário) → `/licao` registra em `.ai/lessons/LESSONS.md`.
