---
description: Cria uma spec (spec-driven development) em docs/specs/ antes de implementar uma feature
---

Crie uma especificação para a feature: $ARGUMENTS

Fluxo spec-driven deste projeto (ver `docs/specs/README.md`):

1. Leia o template `docs/specs/0000-template.md` e as specs existentes para manter o padrão.
2. Descubra o próximo número (`spec-NNN`) e crie `docs/specs/spec-NNN-<slug>.md`.
3. Preencha: objetivo/motivação, escopo (e não-escopo), requisitos funcionais numerados (RF-1...), requisitos não-funcionais (RNF-1...), critérios de aceite verificáveis, impacto em i18n (as duas línguas!), impacto em SEO, e plano de implementação de alto nível.
4. Respeite `.ai/memory/posicionamento-marca.md` para qualquer conteúdo voltado ao público.
5. Status inicial: `rascunho`. **Não implemente nada ainda** — apresente a spec ao usuário, itere até ele aprovar (status `aprovada`) e só então comece o código, marcando a spec como `implementada` ao final.
6. Adicione a spec ao índice em `docs/specs/README.md`.
