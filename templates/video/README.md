# Template: video

Contrato da página de vídeo editorial. Metadados em `videos/`; binário em `assets/video/`. Sem HTML neste estágio. Regras: `docs/seo/video-seo.md`.

## Objetivo da página

Publicar **uma** URL HTML indexável para um vídeo de spoke: contexto, transcrição e metadados. O arquivo de mídia não é canônico.

## Intenção de busca

- **Primária:** informacional com intenção de mídia (`[tema] vídeo`, explainer assistido).
- **Não atende:** artigo longo sem mídia (`article`); se a query for informacional longa, o canônico é o `article` e o vídeo fica embutido, **sem segunda URL**.
- Teaser, corte e outtake não ganham template próprio.

## Campos obrigatórios

| Campo | Função |
|---|---|
| `title` | Title/H1 no idioma da URL |
| `locale` | BCP 47 |
| `product` | Vertical |
| `hub` | Cluster primário |
| `description` | Descrição editorial |
| `transcript` | Transcrição ou legendas completas |
| `thumbnail` | Referência em `assets/` |
| `uploadDate` | Data do vídeo |
| `duration` | ISO 8601 |
| `contentUrl` e/ou `embedUrl` | Origem da mídia |
| `draft` | Controle de índice |

Opcional: `author`, `articleId` (se o vídeo for mídia de um article — nesse caso **não** gerar esta URL).

## Links internos esperados

- `category` primário (spoke de vídeo na lista do cluster).
- Article/ingredient/safety relacionados; sem duplicar o canônico textual.
- Revista: item de sumário aponta a esta URL só se o vídeo for o spoke.
- Sem offer como único CTA da página de vídeo YMYL.

## Requisitos SEO

- Schema primário: `VideoObject` (`name`, `description`, `thumbnailUrl`, `uploadDate`, `duration`, `contentUrl`/`embedUrl`, `inLanguage`, `publisher`). Não inventar campos ausentes.
- HTML estático com poster/thumbnail; transcrição visível sem clique obrigatório.
- Player, quando existir, é enhancement (island), não requisito de indexação.
- Sitemap de páginas + sitemap de vídeo em `public/sitemaps/` se título, thumbnail e duration existirem.
- Hreflang só com transcrição no idioma alvo.
- Sem transcrição/descrição → não indexar.
