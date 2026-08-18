# .ai/ — Infraestrutura de contexto para agentes de IA

Esta pasta é a **fonte de verdade de contexto** para qualquer CLI/agente de IA que trabalhe neste repositório (Claude Code, Codex CLI, GitHub Copilot, Cursor, etc.). Os arquivos de instrução de cada ferramenta apontam para cá.

## Como cada CLI se conecta

| Ferramenta | Arquivo de entrada | Como funciona |
|---|---|---|
| **Claude Code** | `CLAUDE.md` (raiz) | Importa `AGENTS.md` via `@AGENTS.md`. Slash commands em `.claude/commands/*.md` (ex.: `/devloop`, `/new-article`). |
| **Codex CLI** | `AGENTS.md` (raiz) | Lido nativamente pelo Codex. Prompts customizados são globais (`~/.codex/prompts/`) — use `scripts/sync-ai-commands.sh` para copiá-los da fonte canônica. |
| **GitHub Copilot** (CLI/chat/agent) | `.github/copilot-instructions.md` | Aponta para `AGENTS.md`. Prompts reutilizáveis em `.github/prompts/*.prompt.md` (no chat: `/nome-do-prompt`). |

**Fonte canônica dos comandos:** `.claude/commands/*.md`. Os prompts do Copilot em `.github/prompts/` são espelhos gerados/mantidos por `scripts/sync-ai-commands.sh`. Ao criar ou editar um comando, edite em `.claude/commands/` e rode o script.

## Estrutura

```
.ai/
├── README.md      # este arquivo
├── context.md     # contexto vivo do projeto: o que é, estado, prioridades
├── devloop.md     # ciclo de desenvolvimento: instalar → rodar → validar → entregar
├── memory/        # fatos duráveis (um arquivo por tema) + MEMORY.md (índice)
├── lessons/       # lições aprendidas por agentes/humanos (LESSONS.md, append-only)
├── tickets/       # unidade de trabalho: TCK-NNNN + BOARD.md (quadro) — ver tickets/README.md
└── handoff/       # passagem de bastão entre sessões/agentes (um arquivo por handoff)
```

## Pipeline de trabalho (tickets)

Atividades viram tickets (`/ticket`) e passam por três papéis de agente definidos em `.claude/agents/`: **triagem** (classifica, prioriza, planeja) → **executor** (implementa com devloop) → **revisor** (valida de forma independente). `/trabalhar` orquestra o pipeline completo. O contexto entre agentes viaja pelo **diário de bordo do ticket** — funciona entre sessões e entre CLIs diferentes. Detalhes: `tickets/README.md` e ADR-0009.

## Protocolo para agentes

1. **Início de sessão:** leia `context.md` e `memory/MEMORY.md`. Se houver handoff aberto em `handoff/` (status `aberto`), pergunte ao usuário se deve retomá-lo.
2. **Durante o trabalho:** siga `devloop.md`. Consulte `lessons/LESSONS.md` antes de repetir uma abordagem que pode já ter falhado.
3. **Fim de sessão / tarefa incompleta:** crie `handoff/AAAA-MM-DD-<slug>.md` com o template de `handoff/TEMPLATE.md`.
4. **Aprendeu algo durável?** Fato do projeto → arquivo em `memory/` + linha no índice `MEMORY.md`. Erro/acerto de processo → entrada em `lessons/LESSONS.md`.
5. **Decisão de arquitetura** → ADR (`docs/adr/`). **Feature nova** → spec (`docs/specs/`) antes do código.

## Regras de higiene

- Memória guarda **fatos**, não histórico de conversa. Uma informação por arquivo, com data.
- Nada de segredos, dados sensíveis ou informação interna de empregador em nenhum arquivo desta pasta (este repositório é público).
- Handoffs concluídos mudam o status para `concluido` — não apague, é histórico útil.
