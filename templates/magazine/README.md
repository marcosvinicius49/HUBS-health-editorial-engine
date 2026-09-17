# Template: magazine

Contrato da capa e da edição. Fonte: `content/magazines/`. Sem HTML neste estágio.

## Objetivo da página

Apresentar **uma edição** da revista digital: contexto da edição, sumário e despacho para as peças canônicas. Não republicar o corpo dos artigos.

## Intenção de busca

- **Primária:** navegação / descoberta (`[nome da revista] [mês/edição]`, marca + “revista”).
- **Não atende:** queries de recorte (isso é `article`, `review`, `ingredient` ou `safety`) nem transacional (`offer`).

Sem spokes publicados na edição, a URL não é gerada.

## Campos obrigatórios

| Campo | Função |
|---|---|
| `title` | Nome da edição (H1) |
| `locale` | BCP 47 da URL |
| `product` | Vertical da revista (não gera PDP) |
| `issue` | Identificador da edição (número, mês ou slug estável) |
| `datePublished` | Data da edição |
| `description` | Meta description única da capa |
| `items[]` | Lista de spokes da edição (ids canônicos) |
| `draft` | `true` exclui do índice |

Opcional: `cover` (asset em `assets/images/`), `dateModified`.

## Links internos esperados

- Cada item do sumário aponta ao **spoke canônico** (`article`, `review`, `ingredient`, `safety`, `video`, `offer`), nunca a uma cópia na edição.
- Breadcrumb: revista → edição.
- Não substituir o cluster: cada spoke no sumário mantém link ao seu `category` primário.
- Edição pode atravessar vários clusters; a magazine não vira um segundo hub.

## Requisitos SEO

- Schema primário: `CollectionPage` ou `PublicationIssue` (`seo/schema/`).
- Um H1; canônico no host da edição; hreflang só entre edições equivalentes traduzidas.
- Não indexar edição vazia ou só com drafts.
- Corpo da capa é curto: editorial de abertura + sumário. Duplicar artigo na magazine é canibalização.
- Sitemap: URL da edição, não as URLs “internas” de âncora do sumário.
