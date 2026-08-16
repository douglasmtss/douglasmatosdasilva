<!-- GERADO por scripts/sync-ai-commands.sh a partir de .claude/commands/handoff.md — edite lá e re-rode o script -->
---
description: Registra um handoff da tarefa atual em .ai/handoff/ para outro agente/sessão retomar
---

A tarefa atual vai ser interrompida. Crie um handoff:

1. Copie a estrutura de `.ai/handoff/TEMPLATE.md`.
2. Crie `.ai/handoff/<data-de-hoje>-<slug-da-tarefa>.md` preenchendo TODAS as seções com o estado real desta sessão: objetivo, o que foi feito (com caminhos), próximos passos concretos, decisões (marcando o que foi confirmado pelo usuário), armadilhas e caminhos descartados.
3. Status inicial: `aberto`. Agente: `claude-code`.
4. Se algo aprendido é durável além desta tarefa, registre também em `.ai/lessons/LESSONS.md` ou `.ai/memory/`.
5. Mostre ao usuário o caminho do arquivo criado e um resumo de 3 linhas do que ficou pendente.

Contexto adicional: ${input}
