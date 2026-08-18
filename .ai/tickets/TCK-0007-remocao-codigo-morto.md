---
id: TCK-0007
titulo: Remover código morto do domínio do blog
tipo: debito
prioridade: P1
fase: 1
status: concluido
criado: 2026-08-17
atualizado: 2026-08-17
depende-de: [TCK-0006]
spec: ""
adr: ""
handoffs: []
---

# TCK-0007: Remover código morto do domínio do blog

## Descrição

Remover módulos legados sem consumidores após a convergência para Contentlayer, reduzindo caminhos ambíguos e manutenção desnecessária.

## Critérios de aceite

- [ ] `src/utils/blog/` mantém somente `mountSlugParam.ts`.
- [ ] Utilitários órfãos sem import são removidos.
- [ ] O tipo `Post` usado pelos previews permanece disponível.
- [ ] `yarn lint` e `yarn build` verdes.

## Diário de bordo

### 2026-08-17 — executor

Busca de referências confirmou que os módulos candidatos não têm consumidores no código de produção nem nas ferramentas.

### 2026-08-17 — validação

Os módulos órfãos foram removidos, `Post` foi preservado e `yarn lint`/`yarn build` passaram sem warnings do ESLint. O build continua gerando 39 rotas.
