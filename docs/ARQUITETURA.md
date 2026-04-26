# Documentação de Arquitetura

## Visão Geral
Este projeto é um site pessoal/blog multilíngue (pt-BR/en-US) desenvolvido em Next.js, com estrutura modular, suporte a temas (dark/light), internacionalização, e artigos em MDX. Utiliza Contentlayer para geração de conteúdo dinâmico e integrações com Google Analytics.

## Estrutura de Pastas
- **src/app**: Rotas, páginas, layouts e middlewares.
- **src/components**: Componentes reutilizáveis (UI, navegação, posts, etc).
- **src/hooks**: Hooks customizados para temas, toasts, etc.
- **src/lib**: Funções utilitárias, manipulação de dados, integração com Contentlayer, etc.
- **src/utils**: Scripts, constantes, helpers.
- **src/assets/images**: Imagens do projeto.
- **articles/**: Artigos em MDX, organizados por idioma.
- **public/**: Assets públicos (imagens, manifest, etc).

## Rotas Principais
- `/[lang]` — Home multilíngue.
- `/[lang]/blog` — Listagem de artigos.
- `/[lang]/blog/[slug]` — Artigo individual.
- `/[lang]/pages/about` — Sobre.
- `/[lang]/pages/contact` — Contato (formulário).
- `/[lang]/pages/portfolio` — Portfólio.
- `/[lang]/pages/privacy` — Privacidade.
- `/[lang]/pages/disclaimer` — Aviso legal.

## Funcionalidades
- Renderização SSR/SSG.
- Internacionalização automática via middleware.
- Formulário de contato com feedback visual.
- Listagem dinâmica de posts via Contentlayer.
- Suporte a temas (dark/light).
- SEO e metadados dinâmicos.
- Sitemap e robots configurados.

## Principais Componentes
- Navegação, Footer, ToggleTheme, ToggleLanguage, ScrollToTopButton, BlogDate, PostPreview, Mdx, etc.

## Integrações
- Google Analytics.
- Contentlayer para MDX.
- React Toastify para notificações.

## Fluxos
- Middleware redireciona para idioma correto.
- Páginas consomem dicionários e posts conforme idioma.
- Formulário de contato faz POST para endpoint local.

## Dependências Relevantes
- next, react, contentlayer, react-toastify, next-themes, framer-motion, remark, rehype, etc.

## Observações
- Estrutura modular e escalável.
- Separação clara de responsabilidades.
- Suporte a múltiplos idiomas e temas.
