# components/seo

## Objetivo

Emitir no HTML os sinais de indexação: head, canônico, hreflang, robots e JSON-LD. Consome `config/seo.json`, `seo/canonicals/`, `seo/schema/` e `languages/`. Sem JS obrigatório para o crawler.

## Componentes esperados

- `HeadMeta` — title, description, robots, viewport
- `CanonicalLink` — URL absoluta do host
- `HreflangLinks` — só equivalentes publicados
- `JsonLd` — bloco por template (`Article`, `Review`, `Offer`, `VideoObject`, `CollectionPage`, `PublicationIssue`)
- `SocialMeta` — Open Graph / Twitter (não substitui canônico)

Não incluir markup de breadcrumb visível (isso é `navigation/`); o JSON-LD de `BreadcrumbList` pode viver aqui.

## Templates que utilizam

Todos os templates publicáveis:

| Template | JSON-LD primário |
|---|---|
| `magazine` | `CollectionPage` / `PublicationIssue` |
| `article` | `Article` |
| `review` | `Review` (+ `Article` se long-form) |
| `ingredient` | `Article` (`about`) |
| `safety` | `Article` / `MedicalWebPage` |
| `offer` | `Offer` |
| `video` | `VideoObject` |
| `category` | `CollectionPage` (`hasPart`) |

Draft: `HeadMeta` com `noindex`; sem hreflang; fora de sitemap. Não inventar campos de schema ausentes na peça.
