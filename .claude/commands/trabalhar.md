---
description: Executa o pipeline completo de um ticket - triagem (se preciso), execução com devloop e revisão, com handoff de contexto entre agentes
---

Execute o pipeline completo de trabalho de um ticket, orquestrando os agentes e garantindo a passagem de contexto entre eles (o contexto viaja pelo ARQUIVO do ticket — cada agente lê o diário do anterior e escreve o seu):

1. **Seleção:** $ARGUMENTS (um `TCK-NNNN`) ou, se vazio, o ticket de maior prioridade com status `pronto` no `.ai/tickets/BOARD.md` (se não houver `pronto`, o mais antigo em `backlog`).
2. **Triagem (se necessário):** se o status for `backlog`, lance primeiro o agente **triagem** (subagent type `triagem`) com o ID do ticket. Se ele devolver `bloqueado`, apresente a pergunta ao usuário e pare.
3. **Execução:** lance o agente **executor** (subagent type `executor`) com o ID do ticket, informando a política de commit vigente da sessão (se o usuário autorizou commits incrementais, repasse essa autorização explicitamente no prompt).
4. **Revisão:** quando o executor mover para `review`, lance o agente **revisor** (subagent type `revisor`) com o ID do ticket.
   - **Reprovado** → relance o executor (ele lerá os apontamentos no diário). Máximo de 2 ciclos executor↔revisor; no terceiro, pare e traga os apontamentos ao usuário.
   - **Aprovado** → ticket `concluido`.
5. **Fechamento:** confirme que `BOARD.md` e o frontmatter do ticket estão consistentes; se a política de commit da sessão autorizar, faça commit (e push) das mudanças do ticket com mensagem referenciando o ID (`feat: ... (TCK-NNNN)`).
6. Relate ao usuário: o que foi entregue, evidências de validação, lições registradas e o próximo ticket sugerido no board.
