# ADR-0005: Resend para o email do formulário de contato

- **Status:** aceito (retroativo)
- **Data:** 2026-08-16 (documenta decisão de ~jan/2024)
- **Decisor:** Douglas Matos da Silva

## Contexto

A página de contato precisa entregar mensagens de visitantes no email do autor sem expor o endereço a spam e sem backend próprio para SMTP.

## Decisão

Usamos a API do **Resend** a partir de um route handler do Next (`.../contact/api/route.ts`), com a chave em variável de ambiente server-side.

## Alternativas consideradas

- **`mailto:` direto** — descartado: expõe o email, UX ruim.
- **Formspree/Getform (SaaS de formulário)** — terceirizam também o frontend do form; menos controle.
- **Nodemailer + SMTP próprio** — exige credenciais SMTP e manutenção de entregabilidade.

## Consequências

**Positivas:**
- Envio confiável com API mínima; chave nunca vai ao client (route handler server-side).

**Negativas / riscos aceitos (todos são débitos da fase 1 do plano):**
- Remetente ainda é o sandbox `onboarding@resend.dev` — falta verificar o domínio próprio no Resend.
- Handler sem validação de input, sem rate limit, sem escape de HTML e **sem `await`/tratamento de erro** no envio (200 sempre).
- Rota aninhada sob `[lang]` gera dois endpoints idênticos; deveria ser `app/api/contact/route.ts`.
