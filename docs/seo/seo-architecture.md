# Arquitetura SEO do motor

Regras que o Health Editorial Engine deve seguir ao gerar HTML estático para vários domínios e idiomas. Este documento não descreve implementação de páginas nem de componentes.

## Função do motor

O motor publica revistas digitais de saúde. Cada URL indexável deve ser HTML completo no build (Astro SSG), com um único intent, um canônico e um idioma explícito. JavaScript não é requisito para indexar título, corpo, links, schema ou hreflang.

## Camadas (o que vive onde)

| Camada | Pasta | Papel SEO |
|---|---|---|
| Defaults | `config/` | Hosts, idiomas ativos, `robots` padrão, flag de hreflang |
| Regras operacionais | `seo/` | JSON-LD, mapa canônico, redirects |
| Fonte editorial | `content/` | Artigos, edições, traduções de corpo |
| Grafo temático | `hubs/`, `data/taxonomies/`, `data/keywords/` | Pilares, relações, intenções de busca |
| Mídia de origem | `assets/` | Imagens e vídeo-fonte; não são URLs canônicas |
| Artefatos públicos | `public/` | `robots`, sitemaps, `/.well-known` |
| Runtime | `src/` | Só gera HTML a partir das camadas acima |

`docs/seo/` documenta regras. `seo/` guarda artefatos que o build consome. Não misturar os dois.

## Unidade indexável

Uma URL publicada corresponde a **um** template:

- `category` (cluster / pilar)
- `magazine` (edição)
- `article`, `review`, `ingredient`, `safety`, `offer`, `video` (spokes)

Não indexar produtos como páginas neste estágio. Produto é vertical (`products/`), não URL. Quando houver páginas de produto, elas não podem duplicar o intent de um hub ou artigo.

## Domínios

- Cada host em `config/domains.json` tem um conjunto fechado de produtos e idiomas.
- Não servir o mesmo canônico em dois hosts.
- Sitemap, robots e hreflang são **por domínio**.
- Cross-domain só via hreflang ou link editorial explícito, nunca via canônico compartilhado.

## Idiomas

- Idiomas ativos vêm de `config/languages.json`.
- Cópia de interface e slugs de UI ficam em `languages/`.
- Corpo traduzido fica em `content/translations/`.
- Toda URL tem `locale` explícito. Não inferir idioma só pelo domínio.
- Se `config/seo.json` tiver `"hreflang": true`, cada URL indexável declara o cluster de alternates **somente** entre equivalentes reais. Não apontar hreflang para rascunho, 404 ou idioma inexistente.
- `x-default` aponta para o equivalente no `default` de `config/languages.json`, se existir; senão, omite.

## Canônico, robots e redirect

- Canônico é absoluto, no host da URL, e está em `seo/canonicals/`.
- `rel=canonical` nunca aponta para outro idioma como forma de “consolidar” tradução.
- `draft: true` (collections) implica `noindex,follow` e exclusão de sitemap.
- Redirects vivem em `seo/redirects/`. 301 entre slugs, hubs ou idiomas; não usar meta refresh.
- Defaults de `config/seo.json` (`index,follow`) aplicam-se só a URLs publicáveis e não-draft.

## Schema

Tipos em `seo/schema/`, um primário por template:

| Template | Schema primário |
|---|---|
| `templates/article/` | `Article` (autor e datas) |
| `templates/review/` | `Review` (+ `Article` se long-form) |
| `templates/ingredient/` | `Article` (`about` da substância) |
| `templates/safety/` | `Article` / `MedicalWebPage` |
| `templates/offer/` | `Offer` (sem PDP) |
| `templates/category/` | `CollectionPage` |
| `templates/magazine/` | `CollectionPage` ou `PublicationIssue` |
| `templates/video/` | `VideoObject` |

JSON-LD no HTML gerado. Não depender de schema só no cliente.

## Sitemaps e descoberta

- Sitemaps gerados por domínio (e por idioma, se o volume exigir) em `public/sitemaps/`.
- Incluir apenas URLs canônicas, indexáveis, no ar.
- Vídeos elegíveis entram no sitemap de vídeo (ver `video-seo.md`).
- `robots` do host aponta para o sitemap daquele host.

## Escala

- Um template serve N produtos × N idiomas × N domínios.
- Não gerar URL para combinação inexistente (produto sem locale, hub sem spokes publicados, tradução incompleta).
- Builds devem poder fatiar por domínio; o grafo SEO (canônico, hreflang, hub-spoke) permanece globalmente consistente.

## Saúde / YMYL

Conteúdo de saúde é tratado como YMYL: autoria em `data/authors/`, datas de publicação e revisão no conteúdo, e páginas finas ou sem atribuição não entram no índice.
