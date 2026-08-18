# ADR-0009: Sistema de tickets com pipeline de agentes (triagem → execução → revisão)

- **Status:** aceito
- **Data:** 2026-08-16
- **Decisor:** Douglas Matos da Silva

## Contexto

Com a infraestrutura de IA do ADR-0008, o trabalho passou a ser executado por agentes em múltiplas CLIs, mas faltava uma unidade de trabalho rastreável: tarefas viviam na cabeça do Douglas ou na conversa de uma sessão, sem fila, sem priorização e sem trilha do que cada agente fez. O handoff (`.ai/handoff/`) resolve interrupções, mas não organiza o fluxo de ponta a ponta.

## Decisão

Toda atividade do projeto vira um **ticket** em `.ai/tickets/` (`TCK-NNNN-<slug>.md`), com frontmatter de estado (tipo, prioridade P0–P3, fase do plano, status) e um **diário de bordo append-only** — o mecanismo de passagem de contexto entre agentes. Um `BOARD.md` indexa os tickets por status.

O fluxo é um pipeline de três papéis de agente, definidos em `.claude/agents/`:

1. **`triagem`** — classifica, prioriza, verifica duplicidade/dependências, decide se exige spec/ADR, escreve o plano de execução no ticket e o move para `pronto`. Nunca implementa.
2. **`executor`** — implementa seguindo o plano e o devloop (`.ai/devloop.md`), valida (`yarn lint`+`yarn build`), registra tudo no diário e move para `review`. Interrupção gera handoff linkado ao ticket.
3. **`revisor`** — revalida de forma independente contra os critérios de aceite e as regras editoriais; aprova (`concluido`) ou devolve com apontamentos numerados (`em-andamento`).

Comandos: `/ticket` (criar), `/triagem` (triar), `/trabalhar` (pipeline completo com até 2 ciclos executor↔revisor). O contexto viaja **pelo arquivo do ticket**, nunca pela memória da conversa — qualquer CLI pode assumir qualquer etapa.

## Alternativas consideradas

- **GitHub Issues como fila** — descartado por ora: agentes locais operam melhor sobre arquivos versionados (leitura/escrita sem API/token), e o diário de bordo precisa de escrita livre e barata. Uma sincronização tickets↔Issues pode ser adicionada depois sem mudar o modelo.
- **Um único agente faz-tudo por tarefa** — descartado: sem separação triagem/execução/revisão não há verificação independente, e o histórico de decisão se perde na conversa.
- **Contexto passado via prompt entre agentes** — descartado: não sobrevive a trocas de sessão/CLI; o arquivo do ticket sobrevive e é revisável em PR.

## Consequências

**Positivas:**
- Fila priorizada e rastreável; qualquer sessão de 30 minutos avança o plano (`/trabalhar` e pronto).
- Verificação independente (revisor roda lint/build por conta própria) e checklist de sanitização aplicado antes de concluir.
- Trilha completa de quem fez o quê, versionada no git.

**Negativas / riscos aceitos:**
- Overhead de processo para mudanças triviais — mitigação: correções de 1 linha podem pular o pipeline a critério do Douglas; o padrão continua sendo ticket.
- `BOARD.md` pode divergir dos frontmatters se um agente esquecer de sincronizar — o protocolo exige a atualização dupla, e o revisor confere.
- Diários crescem — aceitável; tickets concluídos são histórico frio.
