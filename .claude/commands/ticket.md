---
description: Cria um novo ticket em .ai/tickets/ a partir de uma descrição de atividade
---

Crie um novo ticket para a atividade: $ARGUMENTS

1. Leia `.ai/tickets/README.md` (convenções) e `.ai/tickets/TEMPLATE.md`.
2. Descubra o próximo ID sequencial (`TCK-NNNN`) olhando os arquivos existentes e o `BOARD.md`.
3. Crie `.ai/tickets/TCK-NNNN-<slug-kebab>.md` a partir do template: descrição clara do quê e do porquê, critérios de aceite iniciais (a triagem pode refinar), `status: backlog`, datas de hoje. Deixe tipo/prioridade/fase com seu melhor palpite — a triagem confirma.
4. Adicione a linha do ticket no `BOARD.md` (seção Backlog).
5. Se a atividade for claramente grande (várias entregas), crie UM ticket só mesmo assim — a triagem decide se divide.
6. Mostre o caminho criado e pergunte se o usuário quer triar agora (`/triagem TCK-NNNN`).
