# Relatório de Melhorias e Vulnerabilidades

## Sugestões de Melhorias
- **Validação de formulário de contato**: Adicionar validação mais robusta (ex: regex para email, feedback de erro por campo).
- **Tratamento de erros globais**: Implementar página de erro customizada para falhas inesperadas.
- **Testes automatizados**: Adicionar testes unitários e de integração (Jest, Testing Library).
- **Acessibilidade**: Garantir contraste, navegação por teclado e uso de ARIA nos componentes.
- **Lazy loading de imagens**: Garantir que todas as imagens usem lazy loading.
- **SEO avançado**: Melhorar OpenGraph, Twitter Cards, e rich snippets.
- **Monitoramento**: Integrar ferramentas como Sentry para rastreamento de erros em produção.
- **Documentação técnica**: Expandir docs para onboarding de novos devs.

## Possíveis Vulnerabilidades
- **Exposição de variáveis de ambiente**: Revisar uso de `process.env` no client-side (ex: GTAG_ID pode vazar).
- **Validação insuficiente no backend**: Endpoint de contato pode ser alvo de spam/abuso.
- **Dependências desatualizadas**: Manter dependências sempre atualizadas para evitar CVEs.
- **Falhas de CORS**: Garantir que endpoints estejam protegidos contra requisições externas indevidas.
- **XSS em MDX**: Garantir sanitização de conteúdo renderizado via MDX.
