---
description: Aciona o agente de triagem para classificar e planejar um ticket (ou o próximo do backlog)
---

Acione o pipeline de triagem de tickets:

1. Identifique o alvo: $ARGUMENTS (um `TCK-NNNN`) ou, se vazio, o ticket mais antigo com status `backlog` no `.ai/tickets/BOARD.md`. Se não houver nenhum, informe e pare.
2. Lance o agente **triagem** (subagent type `triagem`) passando no prompt: o ID/caminho do ticket e a instrução de seguir o protocolo definido em sua própria definição.
3. Quando o agente terminar, relate ao usuário: classificação atribuída, decisão (pronto | bloqueado | dividido em filhos) e o plano de execução resumido.
4. Se o ticket ficou `pronto`, ofereça iniciar a execução com `/trabalhar TCK-NNNN`.
