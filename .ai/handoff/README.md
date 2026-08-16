# Handoff — passagem de bastão entre agentes/sessões

Quando uma tarefa fica incompleta ao fim de uma sessão (de qualquer CLI — Claude Code, Codex, Copilot), o agente cria um arquivo aqui para que **qualquer outro agente** (ou humano) retome sem re-descobrir o contexto.

## Convenção

- Nome do arquivo: `AAAA-MM-DD-<slug-da-tarefa>.md`
- Conteúdo: copie `TEMPLATE.md` e preencha tudo.
- Status: `aberto` → `em-andamento` (alguém retomou) → `concluido`. Handoffs concluídos ficam como histórico.

## Fluxo

1. **Ao encerrar incompleto:** crie o arquivo (Claude Code: comando `/handoff` automatiza).
2. **Ao iniciar sessão:** verifique se há handoffs com status `aberto`/`em-andamento` e ofereça retomá-los (Claude Code: `/retomar`).
3. **Ao concluir:** atualize o status, registre o resultado final e mova aprendizados duráveis para `.ai/memory/` ou `.ai/lessons/`.

## Regra de ouro

O handoff deve permitir retomar **sem ler o histórico da conversa anterior**: estado exato, próximos passos concretos (com caminhos de arquivo), decisões já tomadas (e por quê) e armadilhas encontradas.
