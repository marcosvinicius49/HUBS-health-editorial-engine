# components/video

## Objetivo

Exibir mídia editorial e o texto equivalente exigido para indexar (`docs/seo/video-seo.md`). O binário fica em `assets/video/`; metadados em `videos/`. O player é enhancement (island); poster e transcrição são HTML estático.

## Componentes esperados

- `VideoPoster` — thumbnail obrigatório no HTML
- `VideoPlayer` — island opcional (`embedUrl` / `contentUrl`)
- `Transcript` — transcrição ou legendas visíveis sem clique obrigatório
- `VideoMeta` — duration, uploadDate (visível; schema em `seo/`)
- `DurationBadge` — ISO 8601 apresentado ao leitor

Não emitir `VideoObject` aqui (`seo/JsonLd`). Não criar URL: quem publica é `templates/video/`.

## Templates que utilizam

| Template | Uso |
|---|---|
| `video` | Poster, Transcript, VideoMeta, Player opcional — conjunto completo |
| `article` | Player/poster **embutidos** se `video` for mídia interna (sem segunda URL) |
| `magazine` | Poster em SpokeCard de vídeo; a página canônica é `video` |
| `category` | Poster no card do spoke; sem player pesado na listagem |
| `review` | Embed só como evidência; canônico permanece o review |
| `ingredient` / `safety` / `offer` | Uso excepcional; não substituem o corpo textual |

Se o recorte for informacional longo, o canônico é `article` e estes componentes não justificam `templates/video/`.
