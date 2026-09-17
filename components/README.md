# components

Biblioteca de blocos reutilizáveis montados pelos templates. **Neste estágio não há implementação visual, páginas nem produtos.**

| Grupo | Função |
|---|---|
| `layout/` | Casca da página (chrome, grid, regiões) |
| `navigation/` | Orientação e despacho (nav, breadcrumb, menus) |
| `editorial/` | Corpo jornalístico (byline, cards, related, sumário) |
| `seo/` | Metadados e sinais no HTML (schema, hreflang, head) |
| `product/` | Identidade de entidade citada (não é PDP) |
| `video/` | Player, poster, transcrição |
| `conversion/` | CTA e oferta editorial |
| `trust/` | Autoria, YMYL, disclosure, evidência |

Um componente não gera URL. Quem gera URL é o template (`templates/`).
