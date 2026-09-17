# Template: ingredient

Contrato da monografia de ingrediente ou substância. Spoke de entidade. Sem HTML neste estágio.

## Objetivo da página

Explicar **o que é** a substância: nomenclatura, usos relatados, evidência, formas e limites — sem virar review de marca nem alerta isolado de segurança.

## Intenção de busca

- **Primária:** informacional de entidade (`o que é [ingrediente]`, nome INCI/DCI, “para que serve”).
- **Não atende:** `[marca] review` (`review`), `[ingrediente] perigo` como recorte exclusivo (`safety`), comprar (`offer`), listar todos os ingredientes (`category`).

Uma substância = uma monografia canônica por locale e domínio.

## Campos obrigatórios

| Campo | Função |
|---|---|
| `title` | Nome preferido no locale (H1) |
| `locale` | BCP 47 |
| `product` | Vertical |
| `hub` | Cluster primário |
| `author` | Id em `data/authors/` |
| `substanceId` | Id estável da entidade (sinônimos não geram URL) |
| `datePublished` | Publicação |
| `dateModified` | Revisão da evidência |
| `description` | Meta única |
| `body` | Monografia textual |
| `draft` | Controle de índice |

Opcional: `synonyms[]`, `cas`, `inn`, `relatedSafety` (id `safety`), `relatedReviews[]`.

## Links internos esperados

- `category` primário da classe (ex.: “ômega-3”, “probióticos”).
- `safety` canônico da substância, se existir, em vez de repetir contraindicações longas.
- Reviews que avaliam fórmulas contendo o ingrediente (poucos, editoriais).
- `article` de contexto (mecanismo, condição) sem duplicar a monografia.
- Sem grade de ofertas; `offer` só se houver uma oferta editorial claramente secundária.

## Requisitos SEO

- Schema primário: `Article` com `about` da substância. Não usar `Drug`/`DietarySupplement` sem dados suficientes em `seo/schema/`.
- Sinônimos: redirects ou texto na página; **não** N URLs.
- YMYL: evidência datada; sem corpo clínico mínimo → não indexar.
- Canônico único por `substanceId` + locale + domínio.
- Hreflang entre monografias equivalentes, não entre o ingrediente e um review da marca.
