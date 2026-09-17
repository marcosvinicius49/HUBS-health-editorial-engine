# SEO de vídeo

Vídeo é spoke editorial com URL HTML própria, não um arquivo solto em CDN. Metadados em `videos/`; binário em `assets/video/`; template futuro `templates/video/`.

## O que pode ser indexado

Uma página de vídeo entra no índice só se tiver, no HTML gerado:

1. Title e H1 no idioma da URL
2. Hub primário (`hub-spoke-model.md`)
3. Texto equivalente: descrição editorial **e** transcrição (ou legendas completas) em `videos/`
4. Thumbnail referenciável
5. `VideoObject` em JSON-LD (`seo/schema/`)
6. `draft` diferente de `true`

Player, embed ou JS não substituem os itens acima. Sem transcrição/descrição, a URL não é indexável (`content-rules.md`).

## Identidade e arquivos

- Catálogo e metadados: `videos/` (Markdown/JSON das collections).
- Arquivo de mídia: `assets/video/` — não é canônico.
- Página: URL no host do produto/idioma; canônico em `seo/canonicals/`.
- Não publicar a mesma mídia em duas URLs indexáveis. Reuso = embed na peça canônica ou `rel=canonical` para ela.

## `VideoObject` (mínimo)

JSON-LD deve incluir, quando conhecido:

- `name`, `description` (idioma da página)
- `thumbnailUrl`
- `uploadDate`
- `duration` (ISO 8601)
- `contentUrl` e/ou `embedUrl`
- `inLanguage`
- `publisher` do domínio

Se houver artigo equivalente na mesma URL, `Article` + `VideoObject` (ou `hasPart`). Se a peça for só vídeo + texto de apoio, `VideoObject` é o tipo primário.

## Descoberta

- Incluir a URL HTML no sitemap do domínio.
- Incluir markup de vídeo no sitemap de vídeo em `public/sitemaps/` quando duração, thumbnail e título existirem.
- Não listar o binário de `assets/video/` como URL de item no sitemap de páginas.

## Hub, idioma e duplicata

- Vídeo é spoke: aparece no hub do locale e aponta de volta ao pilar.
- Tradução = nova entrada em `content/translations/` **e** metadados de vídeo no locale (title, description, transcrição). Hreflang só com transcrição no idioma alvo.
- Não usar hreflang de um vídeo em `en` para uma página em `pt-BR` que ainda mostra áudio/texto em inglês sem equivalente textual.
- Corte curto, teaser ou outtake não ganham URL própria.

## Performance e indexação

- HTML da página é estático (SSG). O player, quando existir, é enhancement.
- Poster/thumbnail no HTML mesmo sem autoplay.
- Não bloquear transcrição atrás de interação.
- Vídeo não substitui artigo quando a query é informacional longa; nesse caso o spoke primário é o artigo e o vídeo é mídia interna, sem segunda URL.

## O que o motor não faz

- Não gera páginas de produto para hospedar vídeos.
- Não indexa playlists vazias nem hubs só com vídeo sem texto.
- Não inventa duration, uploadDate ou thumbnail no schema se o metadado não estiver em `videos/`.
