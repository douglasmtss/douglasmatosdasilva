# Como Funciona o Projeto

## Internacionalização
- Middleware detecta idioma do navegador e redireciona para `/[lang]`.
- Dicionários em JSON para cada idioma.
- Componentes e páginas consomem textos via hook/async.

## Blog/Artigos
- Artigos em MDX, organizados por idioma.
- Contentlayer gera tipos e integra posts ao build.
- Listagem e visualização de posts dinâmicas.

## Temas (Dark/Light)
- Hook customizado detecta tema do sistema ou preferências do usuário.
- ToggleTheme altera tema global via next-themes.

## Formulário de Contato
- Envia dados via fetch para endpoint local.
- Feedback visual com react-toastify.

## SEO
- Metadados dinâmicos por página.
- Sitemap e robots.txt automáticos.

## Imagens
- Script copia imagens de assets para public.
- Otimização automática via next/image.

## Portfólio
- Lista projetos com links, imagens e descrições.

## Componentização
- Componentes reutilizáveis para UI, navegação, posts, etc.

## Build/Deploy
- Build Next.js padrão.
- Deploy recomendado: Vercel.
