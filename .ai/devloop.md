# Devloop — ciclo de desenvolvimento

O ciclo padrão para qualquer mudança neste repositório. Agentes devem seguir na ordem; humanos também se beneficiam.

## 0. Pré-requisitos

```bash
node -v          # >= 24.12.0 (não há .nvmrc ainda — débito registrado)
yarn --version   # gerenciador oficial; nunca npm/pnpm
yarn             # instalar dependências
cp .env.example .env.local   # preencher (atenção: prefixo NEXT_PULIC_ com typo é o nome real lido pelo código)
```

## 1. Entender antes de mudar

- Leia `.ai/context.md`, `.ai/memory/MEMORY.md` e as lições em `.ai/lessons/LESSONS.md`.
- Feature nova? Escreva/atualize a spec em `docs/specs/` primeiro (template `0000-template.md`).
- Decisão de arquitetura? ADR em `docs/adr/` primeiro.

## 2. Desenvolver

```bash
yarn dev         # roda copyimages + contentlayer build + next dev
```

- Mexeu em `src/articles/`? Rode `yarn clb` para regenerar `.contentlayer/`.
- Imagem nova vai em `src/assets/images/` (o `copyimages` apaga e recopia `public/images/`).
- Texto de UI: adicionar em `src/dictionaries/br.json` **e** `en.json`.
- Artigo novo: `yarn article-template <slug-kebab>` (gera par br/en), preencher frontmatter completo.

## 3. Validar (obrigatório antes de declarar concluído)

```bash
yarn lint        # next lint
yarn build       # inclui typecheck — é o gate principal do projeto
```

Checklist manual mínimo:
- [ ] Testou a rota nas duas línguas (`/br/...` e `/en/...`)?
- [ ] Dark e light mode ok?
- [ ] Mobile (largura ~375px) ok?
- [ ] Nenhum segredo/dado sensível entrou no diff (`git diff` antes de sugerir commit)?

## 4. Entregar

- Commits só com pedido explícito do usuário. Mensagens em inglês, estilo do histórico (`fix:`, `chore:`, `feat:`).
- Tarefa incompleta ao fim da sessão → handoff em `.ai/handoff/`.
- Aprendizado durável → `.ai/memory/` ou `.ai/lessons/LESSONS.md`.

## Fatos do loop que enganam

- Não há suíte de testes: **`yarn build` verde é o critério de "funciona"**, complementado por verificação manual no browser.
- O typecheck só roda dentro do `next build` — erro de tipo não aparece no `yarn lint`.
- `.contentlayer/` é gerado e está no `.gitignore` — se imports de `contentlayer/generated` "não existem", rode `yarn clb`.
