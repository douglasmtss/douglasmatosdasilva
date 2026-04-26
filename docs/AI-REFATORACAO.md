# Guia para Modelos de AI — Refatoração

## Contexto do Projeto
- Next.js, TypeScript, Contentlayer, React, TailwindCSS, multilíngue, temas, artigos MDX.
- Estrutura modular, separação clara de responsabilidades.

## Convenções
- Componentes em PascalCase.
- Hooks em camelCase, prefixo `use`.
- Funções utilitárias em snake_case ou camelCase.
- Pastas por domínio (ex: blog, pages, components, hooks, lib, utils).
- Artigos em `/articles/[lang]/*.mdx`.

## Pontos de Atenção para Refatoração
- Manter SSR/SSG e internacionalização.
- Garantir tipagem forte (TypeScript).
- Evitar lógica duplicada entre idiomas.
- Centralizar textos em dicionários.
- Garantir acessibilidade e responsividade.
- Separar lógica de apresentação e dados.
- Testar componentes isoladamente.
- Validar entradas do usuário.
- Sanitizar conteúdo dinâmico (MDX).

## Sugestões para AI
- Propor extração de hooks e componentes reutilizáveis.
- Sugerir melhorias de performance e acessibilidade.
- Identificar dead code e dependências não utilizadas.
- Propor modularização de funções utilitárias.
- Sugerir testes automatizados para fluxos críticos.
