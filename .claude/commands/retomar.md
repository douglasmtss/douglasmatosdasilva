---
description: Retoma um handoff aberto de .ai/handoff/
---

Retome trabalho pendente:

1. Liste os arquivos de `.ai/handoff/` com status `aberto` ou `em-andamento` (leia o frontmatter de cada um).
2. Se $ARGUMENTS indicar qual, use-o; senão, se houver mais de um, pergunte ao usuário qual retomar; se houver só um, retome-o direto.
3. Leia o handoff escolhido por completo, mude o status para `em-andamento` e siga os "Próximos passos" na ordem, respeitando as decisões já tomadas e os caminhos descartados.
4. Ao concluir tudo: valide com `yarn build`, mude o status para `concluido` e registre o resultado final no próprio arquivo.
