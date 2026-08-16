# C4 — Nível 3: Componentes

Zoom no contêiner **App Next.js**. Agrupamento lógico dos ~24 componentes + libs (o código fonte é flat em `src/components/`).

```mermaid
flowchart TB
    subgraph rotas["Rotas (src/app/[lang]/)"]
        home["page.tsx (home)"]
        blogList["blog/page.tsx"]
        blogPost["blog/[slug]/page.tsx"]
        about["pages/about"]
        portfolio["pages/portfolio"]
        contact["pages/contact + Form"]
        legal["pages/{privacy,disclaimer}"]
    end

    subgraph shell["Shell / navegação"]
        WrapperPage --> TopPageContent
        TopPageContent --> Nav --> Logo
        Nav --> MenuAside --> MenuContent
        TopPageContent --> ToggleTheme
        TopPageContent --> ToggleLanguage
        BreadCrumbs
        Footer --> SocialMedias
    end

    subgraph blog["Blog / conteúdo"]
        LastPosts --> PostPreview
        PostsPreviewList --> PostPreview
        Mdx --> Pre --> CopyButton
        BlogDate
    end

    subgraph fundacao["Fundação (lib/, hooks/, providers/)"]
        dictionary["lib/dictionary.ts<br/>getDictionary(locale)"]
        libBlog["lib/blog.ts<br/>fs + gray-matter ⚠️"]
        contentlayer["contentlayer/generated<br/>allDocs"]
        info["utils/info.tsx<br/>dados pessoais centralizados"]
        theme["providers/themeProvider<br/>next-themes"]
        LinkI18n["LinkI18n ⚠️ localStorage no render"]
        hooks["hooks: useIsClient, useToastify,<br/>useToggleSystemOrAppTheme"]
    end

    home --> WrapperPage
    home --> LastPosts
    blogList --> PostsPreviewList
    blogPost --> Mdx
    blogPost --> BlogDate
    blogList --> libBlog
    LastPosts --> libBlog
    blogPost --> contentlayer
    rotas --> dictionary
    Footer --> info
    SocialMedias --> info
    about --> info
    shell --> LinkI18n
    ToggleTheme --> theme
```

## Componentes por responsabilidade

### Shell / navegação
| Componente | Tipo | Responsabilidade |
|---|---|---|
| `WrapperPage` | server | Casca da home (TopPageContent + children + Footer) |
| `TopPageContent` | server | Header: Nav + toggles de tema/idioma (carregados com `dynamic` + `LoadIcon`) |
| `Nav`, `Logo`, `MenuAside`, `MenuContent` | misto | Menu principal; drawer mobile (client) |
| `BreadCrumbs` | client | Migalhas a partir de `usePathname`, com dicionário inline próprio ⚠️ |
| `Footer`, `SocialMedias` | server | Rodapé com links sociais de `info()` |

### Blog / conteúdo
| Componente | Tipo | Responsabilidade |
|---|---|---|
| `Mdx` | client | Renderiza MDX compilado (`useMDXComponent`); ⚠️ mapeia h2/h3 → `<h1>` e `b` → `<bdo>` (bugs registrados) |
| `Pre` + `CopyButton` | client | Bloco de código com botão copiar |
| `PostsPreviewList`, `PostPreview`, `LastPosts` | misto | Listagens; usam `lib/blog.ts` (caminho fs), não Contentlayer ⚠️ |
| `BlogDate` | server | Formatação de data (date-fns) |

### i18n
| Peça | Responsabilidade |
|---|---|
| `middleware.ts` | Negociação de locale e redirect da raiz |
| `lib/dictionary.ts` | Import dinâmico de `dictionaries/{br,en}.json` (server-only) |
| `LinkI18n` | Link com prefixo de locale — ⚠️ lê `localStorage` durante render (pode gerar `/null/...`) |
| `ToggleLanguage` | Troca de idioma + persistência em `localStorage['lang']` |

### Tema
`ToggleTheme` → `useToggleSystemOrAppTheme` → `themeProvider` (next-themes, `darkMode: 'class'` no Tailwind).

### Código morto conhecido (não construir em cima)
`src/utils/blog/*` (exceto `mountSlugParam.ts`), `lib/redirecti18nPathName.ts` (vazio), `utils/links.ts`, `utils/constants.ts`, `utils/ascii_utf8_binary.ts`. Detalhe em `../../current-state.md`.
