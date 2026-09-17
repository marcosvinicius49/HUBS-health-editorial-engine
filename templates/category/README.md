# Template: category

Contrato da página de cluster (pilar / listagem temática). Grafo em `hubs/` e `data/taxonomies/`. Sem HTML neste estágio. É o template de página do modelo hub-and-spoke.

## Objetivo da página

Cobrir o **intent de pilar**: definir o tema, despachar para spokes publicados e não reescrever os artigos. Sem spoke indexável no locale, a category não é publicada.

## Intenção de busca

- **Primária:** navegação + informacional ampla (`[tema]`, `guia de [tema]`, head da taxonomia).
- **Não atende:** recorte de um spoke (`article`, `ingredient`, `safety`, `review`), transacional fino (`offer`), edição da revista (`magazine`).

Keyword de pilar = só esta URL. Recortes = spokes.

## Campos obrigatórios

| Campo | Função |
|---|---|
| `title` | Nome do pilar (H1), distinto dos spokes |
| `locale` | BCP 47 (um cluster por idioma) |
| `product` | Vertical |
| `hub` | Id do cluster (auto-referência em `hubs/`) |
| `description` | Meta e resumo do pilar |
| `intro` | Texto curto de despacho (não long-form de artigo) |
| `spokes[]` | Ids dos spokes publicados neste locale/domínio |
| `keyword` | Intent de pilar em `data/keywords/` |
| `draft` | Controle de índice |

Opcional: `parent` (hierarquia de taxonomia), `children[]`. `parent` não gera um segundo H1 de pilar.

## Links internos esperados

- Lista só de spokes **publicados** do mesmo `locale` e domínio: `article`, `review`, `ingredient`, `safety`, `video` (e `offer` só se forem ofertas do cluster, sem transformar a category em vitrine).
- Cada spoke aponta de volta a esta category (breadcrumb).
- Ligações entre irmãos ficam nos spokes, não um “footer blast” na category.
- Magazine: link opcional para edições que tocam o pilar; a edição não substitui a category.
- Sem páginas de produto na listagem.

## Requisitos SEO

- Schema: `CollectionPage` com `hasPart` (ou equivalente) para spokes indexáveis (`seo/schema/`).
- Não gerar a partir só de `data/keywords/` sem registro em `hubs/`.
- Não promover tag, autor ou revista a category.
- Canônico por host; hreflang entre clusters equivalentes traduzidos; `x-default` conforme `docs/seo/seo-architecture.md`.
- Dois clusters não compartilham a mesma keyword principal.
- Sitemap inclui a category e os spokes; a category não substitui o sitemap.

`templates/hub/` é alias documental deste contrato, não um layout paralelo.
