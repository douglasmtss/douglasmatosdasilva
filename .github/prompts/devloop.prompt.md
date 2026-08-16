<!-- GERADO por scripts/sync-ai-commands.sh a partir de .claude/commands/devloop.md — edite lá e re-rode o script -->
---
description: Executa o ciclo de validação do projeto (lint + build) e reporta o resultado
---

Execute o devloop de validação conforme `.ai/devloop.md`:

1. `yarn lint`
2. `yarn build`

Se algo falhar: mostre o erro relevante, corrija se a causa for a mudança em andamento, e rode de novo até ficar verde. Se a falha for pré-existente (não causada pela mudança atual), NÃO corrija silenciosamente — reporte ao usuário e pergunte.

Ao final, reporte: status do lint, status do build, e o checklist manual pendente (duas línguas, dark/light, mobile) que o usuário deve verificar no browser.

Tarefa/contexto adicional: ${input}
