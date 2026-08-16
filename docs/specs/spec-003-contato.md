# spec-003: Formulário de contato

- **Status:** implementada (retroativa, com desvios)
- **Data:** 2026-08-16 (comportamento observado)
- **ADRs relacionados:** [ADR-0005](../adr/0005-resend-formulario-contato.md)

## Objetivo e motivação

Permitir que visitantes (recrutadores, leitores) enviem mensagens sem expor o email do autor.

## Requisitos funcionais

- **RF-1:** `/[lang]/pages/contact` exibe formulário com nome, email e mensagem, com textos do dicionário.
- **RF-2:** Submissão envia a mensagem por email ao autor via Resend e mostra feedback (toast) ao visitante.
- **RF-3:** Falha no envio deve ser comunicada ao visitante (não fingir sucesso).

## Requisitos não-funcionais

- **RNF-1:** Chave da API apenas server-side.
- **RNF-2:** Input validado no servidor (formato de email, tamanhos, campos obrigatórios) e sanitizado antes de interpolar no corpo do email.
- **RNF-3:** Proteção mínima anti-abuso (rate limit ou desafio) — o endpoint é público.
- **RNF-4:** Remetente com domínio próprio verificado no Resend.

## Critérios de aceite

- [x] RF-1, RF-2 (caminho feliz) observáveis
- [ ] RF-3 — **falha hoje**
- [ ] RNF-2, RNF-3, RNF-4 — **não implementados**

## Desvios registrados

1. **RF-3 violado:** o handler não faz `await` do `resend.emails.send()` e retorna 200 sempre — falha de envio é invisível para todos.
2. **RNF-2 violado:** sem validação/escape; os campos são interpolados direto no HTML do email.
3. **RNF-4 violado:** remetente é o sandbox `onboarding@resend.dev`.
4. Rota duplicada por idioma (`/{br,en}/pages/contact/api`); o destino correto é `app/api/contact/route.ts` único. Tudo endereçado na fase 1 do plano.
