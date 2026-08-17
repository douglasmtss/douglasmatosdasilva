---
id: TCK-0001
titulo: Saneamento de dependências do package.json
tipo: debito
prioridade: P0
fase: 1
status: review
criado: 2026-08-16
atualizado: 2026-08-16
depende-de: []
spec: ""
adr: ""
handoffs: []
---

# TCK-0001: Saneamento de dependências do package.json

## Descrição

O `package.json` tem 5 dependências fantasma (importadas sem declaração: `gray-matter`, `unified`, `remark-parse`, `remark-rehype`, `rehype-stringify`), o pacote homônimo errado `"tailwind": "^4.0.0"` (o real é `tailwindcss`), e 8+ dependências declaradas e nunca usadas (`react-router-dom` + types, `cookies-next`, `shiki`, `shikiji`, `unist-util-visit`, `@fontsource/open-sans`, `@fontsource/ranga`, `@types/react-icons`). Detalhe em `docs/current-state.md` (débitos 1, 2, 11).

Nota: as fantasmas podem morrer junto com `src/lib/blog.ts`/`mdToHtml.ts` se a convergência para Contentlayer (débito 9) for feita antes ou junto — a triagem decide a ordem.

## Critérios de aceite

- [ ] Nenhum import no código sem dependência declarada (verificável com `yarn build` a partir de node_modules limpo)
- [ ] Pacote `tailwind` removido; nenhuma dependência não usada restante
- [ ] Decisão registrada sobre as fontes (`@fontsource/*`): importar de fato ou remover e trocar a `font-ranga` no Tailwind config
- [ ] `yarn lint` + `yarn build` verdes

## Triagem

Classificação confirmada: débito P0 da fase 1. Não há duplicidade nem dependência bloqueante. Não exige spec nem ADR, pois a entrega fica restrita ao manifesto/lockfile e a uma decisão explícita sobre fontes.

Plano de execução:

1. Auditar imports e referências para separar dependências diretas usadas, fantasmas e não usadas.
2. Remover do manifesto/lockfile `tailwind`, `react-router-dom`/types, `cookies-next`, `shiki`, `shikiji`, `unist-util-visit` e as fontes não carregadas.
3. Manter `tailwindcss` e `tailwind-merge`; manter `@fontsource/ranga` somente se passar a ser importado de fato, caso contrário substituir a classe/configuração por uma fonte CSS disponível sem dependência fantasma.
4. Declarar as dependências usadas por `src/lib/blog.ts` e `src/lib/mdToHtml.ts` enquanto esses leitores ainda existirem; a remoção desses leitores fica para a convergência de conteúdo posterior.
5. Rodar `yarn lint` e `yarn build`, revisar o diff e registrar o resultado.

## Diário de bordo

### 2026-08-16 — criação
Ticket criado a partir da auditoria de `docs/current-state.md` (P0 #1, #2 e P1 #11).

### 2026-08-16 — triagem/executor
Auditoria confirmou que `tailwind-merge`, `date-fns`, plugins remark/rehype, `resend` e demais dependências usadas permanecem necessárias. `@fontsource/ranga` foi carregado de fato no layout; `@fontsource/open-sans` não tinha uso e foi removido. `shikiji` permaneceu por ser peer de `rehype-pretty-code`. As cinco dependências fantasma foram declaradas enquanto os leitores atuais não forem convergidos. Lint e build passaram; ticket enviado para review.
