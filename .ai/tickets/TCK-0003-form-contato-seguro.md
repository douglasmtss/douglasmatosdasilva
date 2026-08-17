---
id: TCK-0003
titulo: Corrigir e endurecer o formulário de contato
tipo: bug
prioridade: P0
fase: 1
status: review
criado: 2026-08-16
atualizado: 2026-08-16
depende-de: []
spec: "docs/specs/spec-003-contato.md"
adr: "docs/adr/0005-resend-formulario-contato.md"
handoffs: []
---

# TCK-0003: Corrigir e endurecer o formulário de contato

## Descrição

O handler atual (`src/app/[lang]/pages/contact/api/route.ts`) não faz `await` do envio (retorna 200 mesmo com falha), não valida nem sanitiza input (injeção de HTML no email), está duplicado por idioma e usa o remetente sandbox `onboarding@resend.dev`. Desvios formalizados na spec-003 (RF-3, RNF-2, RNF-3, RNF-4).

## Critérios de aceite

- [ ] Rota única `src/app/api/contact/route.ts` (fora de `[lang]`), antiga removida, form apontando para a nova
- [ ] `await` + tratamento de erro: falha do Resend retorna erro ao cliente e o toast comunica (nas duas línguas)
- [ ] Validação server-side (campos obrigatórios, formato de email, limites de tamanho) e escape de HTML antes da interpolação
- [ ] Proteção anti-abuso mínima (rate limit simples ou honeypot)
- [ ] Remetente com domínio próprio verificado no Resend (passo manual do Douglas — bloquear se pendente)
- [ ] `yarn lint` + `yarn build` verdes

## Triagem

Triagem confirmada: bug P0 da fase 1, sem dependência técnica. A implementação pode ser validada localmente, mas o aceite RNF-4 depende da configuração manual do domínio verificado no Resend; o ticket ficará em review com esse item explicitamente pendente.

Plano executado: rota única fora de `[lang]`; validação/limites e escape HTML; honeypot e rate limit em memória; `await` e propagação de falhas do Resend; formulário usando endpoint relativo e verificando `response.ok`; remetente vindo de `NEXT_PULIC_RESEND_FROM_EMAIL`.

## Diário de bordo

### 2026-08-16 — criação
Ticket criado a partir de `docs/current-state.md` (P0 #4) e spec-003.

### 2026-08-16 — executor
Implementado o endpoint seguro em `src/app/api/contact/route.ts`, removida a rota duplicada por idioma e atualizado o formulário com `name` nos campos, honeypot, tratamento de status HTTP e endpoint relativo. O envio recusa execução quando a API key ou o remetente verificado não estão configurados, evitando o sandbox `onboarding@resend.dev`. Falta apenas o passo manual do Douglas no Resend para cumprir RNF-4.
