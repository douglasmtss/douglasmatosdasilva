# spec-006: Blog performático e multi-assunto

- **Status:** rascunho
- **Data:** 2026-08-16
- **ADRs relacionados:** [ADR-0002](../adr/0002-contentlayer.md), [ADR-0009](../adr/0009-sistema-de-tickets-multi-agente.md)

## Objetivo e motivação

Substituir o blog de desafios de programação por uma publicação técnica bilíngue que evidencie experiência em IA/LLMs, desenvolvimento, engenharia e arquitetura de software, inglês para devs e carreira. O blog deve ser uma demonstração técnica do próprio posicionamento: conteúdo rápido, indexável, acessível e com JavaScript mínimo.

## Escopo

**Inclui:** modelo editorial com categoria obrigatória e tags em lista; páginas de listagem e artigo; filtro por categoria; busca leve; RSS/Atom por idioma; migração dos 18 artigos existentes; SSG; metadata, canonical e hreflang.

**Não inclui (não-escopo):** CMS, autenticação, comentários, newsletter, busca semântica/RAG, tradução automática, analytics novo e publicação de novos artigos nesta entrega.

## Modelo editorial

- `category`: obrigatório, exatamente uma categoria estável por artigo.
- `tags`: lista livre de strings normalizadas, sem CSV e sem duplicatas.
- `lang`: obrigatório (`br` ou `en`); todo artigo publicado deve ter par nos dois idiomas.
- Categorias iniciais: `ia-llm` (âncora e maioria do volume), `desenvolvimento`, `engenharia`, `arquitetura`, `ingles-para-devs`, `carreira` e `fundamentos`.
- Os 18 artigos antigos migram para `fundamentos`; o typo `chanllenges` vira `challenges` durante a migração. Eles permanecem acessíveis por slug e não ganham destaque na navegação principal.
- O frontmatter deve rejeitar publicação sem `category`, `tags` como lista ou par bilíngue incompleto.

## Requisitos funcionais

- **RF-1:** O sistema gera páginas estáticas para a listagem do blog e para cada artigo publicado em `/br/blog/...` e `/en/blog/...`.
- **RF-2:** A listagem exibe categoria, tags, data, tempo de leitura e links para artigos; a categoria `ia-llm` aparece como categoria editorial prioritária.
- **RF-3:** O visitante pode filtrar por uma categoria via URL (`?category=...`), sem exigir hidratação da página; URL inválida retorna a listagem completa ou resposta equivalente sem erro.
- **RF-4:** O visitante pode pesquisar títulos, descrições e tags com uma interação progressiva; a solução não deve enviar um framework de busca nem hidratar o artigo inteiro.
- **RF-5:** Cada artigo apresenta navegação para artigo anterior/próximo, categoria, tags, data, autor e link para a versão correspondente no outro idioma quando ela existir.
- **RF-6:** O sistema publica feed RSS ou Atom separado por idioma, contendo os artigos publicados daquele idioma, URLs absolutas, título, descrição, data e link canônico.
- **RF-7:** Artigos não publicados não aparecem na listagem, feeds, sitemap ou páginas de categoria.
- **RF-8:** O schema de conteúdo é validado durante o build; erro de frontmatter ou paridade br/en falha o build com mensagem acionável.

## Requisitos não-funcionais

- **RNF-1 — renderização:** páginas de listagem, categoria e artigo são SSG/HTML-first; nenhum componente de interação deve hidratar o documento inteiro.
- **RNF-2 — performance:** em auditoria Lighthouse de produção, `/br/blog`, `/en/blog`, um artigo e uma categoria devem alcançar pelo menos 95 em Performance, SEO e Accessibility, com Core Web Vitals verdes.
- **RNF-3 — JavaScript:** a listagem e o artigo devem funcionar sem JavaScript; o JavaScript próprio enviado para essas páginas deve ser no máximo 30 kB comprimido, excluindo scripts de terceiros explicitamente opt-in.
- **RNF-4 — peso:** sem imagens acima de 200 kB por artigo na primeira dobra; imagens devem usar dimensões/alt e formato otimizado. A resposta HTML inicial deve ser no máximo 100 kB comprimidos para uma página típica.
- **RNF-5 — acessibilidade:** filtros e busca têm labels, foco visível, navegação por teclado e estado anunciado; headings seguem hierarquia sem saltos.
- **RNF-6 — segurança:** conteúdo de frontmatter e busca não pode ser interpolado em HTML sem escape; links externos usam política de `rel` apropriada.
- **RNF-7 — build:** `yarn lint` e `yarn build` são verdes; o build não depende de rede nem de APIs externas.

## i18n

Toda UI nasce em `br` e `en`, com chaves correspondentes nos dois dicionários. Categorias têm rótulos traduzidos, mas slugs estáveis e ASCII (`ia-llm`, `engenharia` etc.). Cada artigo deve ter par bilíngue; o feed, canonical, alternates e links de troca de idioma respeitam o locale da URL. A ausência de tradução não pode fazer o site exibir texto de outro idioma silenciosamente.

## SEO

Cada listagem, categoria e artigo tem `title`, `description`, canonical e Open Graph próprios. Artigos pareados expõem `hreflang` para `pt-BR` e `en`; páginas sem par expõem apenas o locale disponível. O sitemap inclui apenas rotas publicadas e as URLs canônicas `/br/blog/...` e `/en/blog/...`. Feeds têm `<link rel="alternate">` na metadata/layout e URLs absolutas. Artigos incluem JSON-LD `Article` com autor, data, imagem e URL.

## Critérios de aceite

- [ ] `category` obrigatória e `tags` como lista são aceitos pelo schema; frontmatter inválido e par br/en ausente falham o build.
- [ ] Os 18 artigos antigos aparecem em `fundamentos`, com `chanllenges` normalizado para `challenges`, sem quebra dos slugs existentes.
- [ ] Listagem, filtro, busca progressiva, artigo e feeds funcionam em `/br` e `/en`.
- [ ] Feed de cada idioma contém somente seu idioma e links canônicos absolutos.
- [ ] Lighthouse em produção atinge ≥95 em Performance/SEO/Accessibility nas quatro páginas representativas; Core Web Vitals estão verdes.
- [ ] Listagem e artigo funcionam com JavaScript desabilitado e respeitam os limites de JS/peso definidos nos RNFs.
- [ ] `yarn lint` + `yarn build` verdes.
- [ ] Verificado em `/br/...` e `/en/...`, dark/light e mobile (~375px).

## Plano de implementação (alto nível)

1. Criar schema Contentlayer/MDX novo, migrar frontmatter e validar pares, categorias e tags.
2. Convergir os leitores `fs`/Contentlayer para uma única fonte e corrigir rotas canônicas do blog.
3. Implementar listagem HTML-first, categorias, busca progressiva e navegação de artigo.
4. Implementar feeds por idioma, metadata/hreflang, JSON-LD e sitemap.
5. Otimizar imagens e bundle; medir Lighthouse, JavaScript e peso de resposta em build de produção.
6. Criar artigos iniciais em tickets de conteúdo separados, priorizando `ia-llm`.

## Desvios registrados pós-implementação

Preencher somente quando a spec for aprovada e implementada.
