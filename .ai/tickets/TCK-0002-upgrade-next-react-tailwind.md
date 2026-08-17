---
id: TCK-0002
titulo: Upgrade Next 14→15, React 19 e Tailwind
tipo: debito
prioridade: P0
fase: 1
status: review
criado: 2026-08-16
atualizado: 2026-08-16
depende-de: [TCK-0001]
spec: ""
adr: ""
handoffs: []
---

# TCK-0002: Upgrade Next 14→15, React 19 e Tailwind

## Descrição

Next 14.0.4 (dez/2023) está 2 majors atrás, com CVEs conhecidas (incl. bypass de middleware — crítico porque nosso i18n depende de middleware). Junto: React 18→19 e avaliação do Tailwind 3→4. O bloqueador potencial é o `contentlayer2` (fork comunitário) — se ele travar o upgrade, avaliar migração para `velite` ou MDX nativo e registrar em ADR substituindo o ADR-0002.

## Critérios de aceite

- [ ] Next atualizado para a última versão estável do major 15+ sem CVEs abertas
- [ ] Blog, i18n (middleware!), tema, form de contato e build SSG funcionando (verificação manual nas duas línguas)
- [ ] Se o Contentlayer2 foi trocado: ADR novo aceito substituindo o 0002
- [ ] `yarn lint` + `yarn build` verdes

## Triagem

Triagem confirmada: débito P0 da fase 1. TCK-0001 já teve implementação validada e foi publicado; não há mudança de arquitetura aprovada para substituir Contentlayer neste ticket. O alvo foi atualizado para a linha estável atual compatível com Node 24: Next 16, React 19 e Tailwind 4. O Contentlayer2 continua gerando conteúdo, mas `next-contentlayer2` declara peer apenas até Next 14; a convergência/remoção desse adapter permanece débito arquitetural.

Plano executado: atualizar versões em um commit isolado; adaptar PostCSS/Tailwind 4, ESLint 9, `params` assíncronos do Next 16, componentes dinâmicos sem `ssr:false`, SSR sem `localStorage` e `generateStaticParams`; validar lint/build e rotas br/en. A migração do Contentlayer foi deixada para ADR/ticket próprio por causa do peer range.

## Diário de bordo

### 2026-08-16 — criação
Ticket criado a partir de `docs/current-state.md` (P0 #3). Depende do saneamento (TCK-0001) para não atualizar pacotes que serão removidos.

### 2026-08-16 — triagem/executor
Versões instaladas: Next 16.3.1, React 19.2.8, Tailwind CSS 4.3.3, ESLint 9.39.5 e `eslint-config-next` 16.3.1. Build gerou 39 rotas estáticas; lint passou com um warning preexistente sobre diretiva `camelcase` não utilizada. Avisos não bloqueantes: middleware precisa migrar para `proxy`, `next-contentlayer2` tem peer até Next 14 e `shikiji` está depreciado.
