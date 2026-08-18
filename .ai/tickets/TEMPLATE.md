---
id: TCK-NNNN
titulo: <título curto>
tipo: feature   # feature | bug | debito | conteudo | doc | infra
prioridade: P2  # P0 | P1 | P2 | P3
fase: <fase do plano de reformulação, se aplicável>
status: backlog # backlog | triagem | pronto | em-andamento | review | bloqueado | concluido
criado: AAAA-MM-DD
atualizado: AAAA-MM-DD
depende-de: []      # IDs de tickets bloqueantes
spec: ""            # docs/specs/spec-NNN, se exigida pela triagem
adr: ""             # docs/adr/NNNN, se exigido pela triagem
handoffs: []        # links para .ai/handoff/*, se houver
---

# TCK-NNNN: <título>

## Descrição

<O que precisa ser feito e por quê. Escrito pelo criador do ticket.>

## Critérios de aceite

- [ ] <verificável>
- [ ] `yarn lint` + `yarn build` verdes
- [ ] Verificado em br/en, dark/light, mobile (quando UI)

## Triagem

<Preenchido pelo agente de triagem: classificação justificada, análise de duplicidade/dependências, precisa de spec/ADR?, plano de execução em passos com arquivos.>

## Diário de bordo

> Append-only, entrada mais nova por último. Formato: `### AAAA-MM-DD HH:MM — <agente>`

### AAAA-MM-DD — <agente>
<o que fez, o que descobriu, o que falta>
