# components/navigation

## Objetivo

Orientar o leitor no domínio, no idioma e no cluster. Todo link deste grupo é visível no HTML (SSG). Não substitui sitemap nem hreflang (`seo/`).

## Componentes esperados

- `SiteNav` — seções da revista / idioma (cópia em `languages/`)
- `LanguageSwitch` — locales com URL equivalente real (não aponta para draft)
- `Breadcrumb` — revista → `category` → spoke
- `HubNav` — despacho do pilar para spokes publicados do mesmo locale
- `Pagination` — só listagens (category/magazine), nunca artigo quebrado em pageviews SEO
- `Toc` — âncoras no long-form (`article`, `ingredient`, `safety`, `review`)

## Templates que utilizam

| Template | Uso |
|---|---|
| `magazine` | SiteNav, LanguageSwitch, sumário (despacho; cards em `editorial/`) |
| `article` | Breadcrumb, Toc, retorno ao category |
| `review` | Breadcrumb, retorno ao category |
| `ingredient` | Breadcrumb, Toc |
| `safety` | Breadcrumb, Toc |
| `offer` | Breadcrumb (spoke pai + category) |
| `video` | Breadcrumb, retorno ao category |
| `category` | SiteNav, HubNav, LanguageSwitch, Pagination se necessário |

`offer` e `safety` não usam HubNav como vitrine. `category` é o único template cuja navegação principal é a lista de spokes.
