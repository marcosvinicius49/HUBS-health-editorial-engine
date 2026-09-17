# components/editorial

## Objetivo

Renderizar o jornalismo: autoria visual no corpo, cards, related, sumário de edição e blocos de texto. Não marca JSON-LD (`seo/`) nem CTA comercial (`conversion/`).

## Componentes esperados

- `Byline` — nome a partir de `data/authors/` (o selo YMYL completo é `trust/`)
- `Dateline` — `datePublished` / `dateModified`
- `ArticleBody` — Markdown/MDX do `body`
- `SpokeCard` — card de article, review, ingredient, safety ou video
- `RelatedList` — irmãos semânticos (poucos; HTML visível)
- `MagazineToc` — sumário da edição apontando a canônicos
- `PullQuote` / `Callout` — destaque editorial (não disclaimer legal)

## Templates que utilizam

| Template | Uso |
|---|---|
| `magazine` | MagazineToc, SpokeCard |
| `article` | Byline, Dateline, ArticleBody, RelatedList |
| `review` | Byline, Dateline, ArticleBody, RelatedList |
| `ingredient` | Byline, Dateline, ArticleBody, RelatedList |
| `safety` | Byline, Dateline, ArticleBody |
| `offer` | ArticleBody (condição); cards só para o spoke pai |
| `video` | Dateline, descrição; transcrição em `video/` |
| `category` | intro + SpokeCard (listagem, não long-form de artigo) |

`category` não usa `ArticleBody` longo (canibaliza o pilar). `safety` evita RelatedList agressiva para `offer`.
