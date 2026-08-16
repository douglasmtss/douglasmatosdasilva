# ADR-0004: Tailwind CSS + next-themes para estilo e dark mode

- **Status:** aceito (retroativo)
- **Data:** 2026-08-16 (documenta decisão de ~dez/2023)
- **Decisor:** Douglas Matos da Silva

## Contexto

Projeto de uma pessoa só, sem design system formal; precisa de velocidade de iteração visual, dark mode e bundle enxuto.

## Decisão

Usamos **Tailwind CSS 3** (utility-first, `darkMode: 'class'`, paleta própria `dmds-1..5` no `tailwind.config.ts`) e **next-themes** para alternância dark/light/system persistida, via `providers/themeProvider.tsx` e `ToggleTheme`.

## Alternativas consideradas

- **CSS Modules / styled-components** — descartados: mais cerimônia para um projeto solo; CSS-in-JS conflita com server components.
- **Biblioteca de componentes (MUI, Chakra)** — descartada: o site é vitrine de frontend do autor; visual próprio importa.

## Consequências

**Positivas:**
- Iteração rápida; dark mode com classe + persistência resolvidos por lib madura e minúscula.

**Negativas / riscos aceitos:**
- Tokens de design vivem só no config do Tailwind; sem documentação visual (aceitável no tamanho atual).
- **Débitos reais registrados:** o pacote npm `tailwind@^4` nas dependencies é um homônimo errado (o real é `tailwindcss`); o bloco dark do `globals.css` é no-op; `content` do config aponta para `src/pages/**` inexistente; fontes `@fontsource` declaradas e nunca importadas (a `font-ranga` cai em `cursive`). Correções na fase 1 do plano.
