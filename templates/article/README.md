# Template: article

Contrato do artigo editorial long-form. Fonte: `content/articles/`. Sem HTML neste estágio.

## Objetivo da página

Responder por completo uma query informacional de recorte (guia, explainer, atualização clínica ou contexto de saúde), com autoria e datas. É o spoke padrão do modelo hub-and-spoke.

## Intenção de busca

- **Primária:** informacional (`o que é`, `como funciona`, `guia`, sintomas, mecanismos).
- **Não atende:** avaliação de marca (`review`), monografia de substância (`ingredient`), risco/interação (`safety`), preço/compra (`offer`), listagem do pilar (`category`).

Um article não compete com o H1 do `category` pai.

## Campos obrigatórios

| Campo | Função |
|---|---|
| `title` | Title/H1 únicos no locale + domínio |
| `locale` | BCP 47 da URL |
| `product` | Vertical |
| `hub` | Cluster primário (`category`) |
| `author` | Id em `data/authors/` |
| `datePublished` | Publicação |
| `dateModified` | Revisão (obrigatória se o tema clínico mudou) |
| `description` | Meta única |
| `body` | Markdown suficiente sem depender de JS ou vídeo |
| `draft` | Controle de índice |

Opcional: `keyword` (`data/keywords/`), `related[]` (poucos ids), `video` (mídia interna, sem segunda URL).

## Links internos esperados

- Retorno ao `category` primário (breadcrumb + link editorial).
- 1–3 spokes irmãos só com relação semântica (outro `article`, `ingredient` ou `safety`).
- `offer` só quando a query do artigo não for transacional; o offer não captura o canônico do article.
- Revista: link para a edição que o inclui, se houver, sem duplicar o sumário.

## Requisitos SEO

- Schema primário: `Article` com autor e datas (`seo/schema/`).
- YMYL: sem autor ou sem corpo textual → não gerar ou `noindex` (`docs/seo/content-rules.md`).
- Um intent; um H1; canônico absoluto; hreflang só com tradução completa em `content/translations/`.
- Imagens em `assets/images/` com `alt` descritivo.
- Incluir no sitemap só se publicado e não-draft.
