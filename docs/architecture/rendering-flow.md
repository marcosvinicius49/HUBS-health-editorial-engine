# Fluxo de renderização

Como o motor transforma dados editoriais em HTML estático e o publica em vários domínios. Este documento descreve o pipeline; não implementa páginas, componentes nem produtos.

O runtime é **Astro SSG** (`output: "static"`). Não há renderização por request na borda. Cloudflare Pages só entrega `dist/` (e redirects/sitemaps já gerados).

## Visão geral

```text
products + config + data + hubs
        ↓
content / videos / translations
        ↓
template (contrato de URL)
        ↓
components (blocos, ainda sem UI neste estágio)
        ↓
Astro SSG  →  dist/
        ↓
Cloudflare Pages (build por domínio)
        ↓
host em config/domains.json
```

Cada etapa **filtra**. Combinação produto × idioma × template sem peça publicada, `draft: true`, tradução incompleta ou cluster sem spoke **não** vira arquivo em `dist/`.

## 1. Dados dos produtos

`products/` é a **vertical** (marca / linha editorial), não uma URL e não um catálogo PDP.

No build, o produto entra como filtro e contexto:

- Quais hosts em `config/domains.json` publicam essa vertical
- Quais `locale`s de `config/languages.json` estão ativos nela
- Qual `product` as peças em `content/` e `videos/` devem declarar
- Defaults de `config/seo.json` (robots, hreflang) daquele host

Dados estruturados compartilhados (`data/taxonomies/`, `data/authors/`, `data/keywords/`) e o grafo de pilares (`hubs/`) não pertencem a um único produto, mas toda URL gerada carrega um `product` explícito.

Páginas de produto **não** são emitidas neste fluxo. Componentes em `components/product/` só identificam entidades citadas dentro de um template editorial (`review`, `ingredient`, `offer`).

## 2. Content

Fonte das peças. O SSG lê Markdown/JSON via collections (`src/content.config.ts`):

| Origem | Papel no fluxo |
|---|---|
| `content/articles/` | Spokes `article` |
| `content/magazines/` | Edições `magazine` |
| `content/translations/` | Corpo no locale da URL |
| `videos/` | Metadados do spoke `video` |
| `data/` | Autores, taxonomias, keywords (join, não URL) |
| `hubs/` | Registro do cluster `category` |
| `assets/` | Mídia de origem; não é canônico |
| `languages/` | Cópia de interface e slugs de UI |

Regras aplicadas **antes** de escolher template (`docs/seo/content-rules.md`):

- Identidade: `title`, `locale`, `product`, `hub` (spokes), `draft`
- Locale com corpo ainda no idioma default → não gerar
- Thin / sem autor YMYL → não gerar ou `noindex`
- `README.md` de pasta não é conteúdo

O output desta etapa é um **conjunto de peças elegíveis** para um par domínio + idioma, não HTML.

## 3. Templates

O template decide **que tipo de URL** a peça é e quais campos/links/SEO valem. Contratos em `templates/`:

| Peça | Template |
|---|---|
| Cluster / pilar | `category` |
| Edição | `magazine` |
| Recorte informacional | `article` |
| Avaliação | `review` |
| Monografia | `ingredient` |
| Risco | `safety` |
| Oferta editorial | `offer` |
| Vídeo com transcrição | `video` |

`templates/hub/` não entra no fluxo de render: é alias de `category`.

O template não busca na rede. Ele recebe a peça + joins (`author`, `hub`, `keyword`, canônico em `seo/canonicals/`) e declara o JSON-LD primário (`docs/seo/seo-architecture.md`). Uma peça = uma URL = um template. Sem peça, o template não materializa rota.

## 4. Components

O template monta a página com blocos de `components/`. Componentes **não** geram rotas.

| Grupo | Entra no HTML como |
|---|---|
| `layout` | Casca (todas as URLs) |
| `navigation` | Nav, breadcrumb, HubNav, idioma |
| `editorial` | Corpo, cards, sumário, related |
| `seo` | Head, canônico, hreflang, JSON-LD |
| `product` | Rótulo de entidade citada (não PDP) |
| `video` | Poster, transcrição; player só como island |
| `conversion` | CTA de `offer` / `review` |
| `trust` | Autor, disclaimer, disclosure |

No estágio atual estes grupos são contratos (READMEs), não UI. O fluxo de renderização já os posiciona: o SSG, quando houver implementação, só interpola dados já filtrados nas etapas 1–3. JavaScript no cliente não é requisito para title, corpo, links, schema ou hreflang.

## 5. Astro SSG

`src/` é o runtime: collections + rotas futuras. Build:

1. Lê `config/languages.json` (i18n) e `PUBLIC_SITE_URL` (host deste build).
2. Sincroniza collections a partir das pastas da raiz (não duplica conteúdo em `src/`).
3. Para o domínio do build, itera peças elegíveis e emite HTML em `dist/` (`build.format: directory`, `trailingSlash: always`).
4. Copia `public/` (sitemaps, well-known, robots) para `dist/`.
5. Não sobe adapter Cloudflare de SSR. `output: "static"`.

Artefatos operacionais em `seo/schema/`, `seo/canonicals/` e `seo/redirects/` são consumidos no build (links, JSON-LD, mapa de 301), não no request.

Sitemaps em `public/sitemaps/` listam só canônicos indexáveis daquele host. Draft não entra.

## 6. Cloudflare Pages

Cada **domínio** é um projeto Pages (ou um build com `PUBLIC_SITE_URL` desse host):

- Build command: `npm run build`
- Output: `dist/`
- Node 22 (`.nvmrc` / `.node-version`)
- Wrangler: `pages_build_output_dir: ./dist`

Pages não monta templates. Serve arquivos. Preview (`wrangler pages dev ./dist`) reflete o mesmo artefato estático.

Redirects definidos em `seo/redirects/` devem materializar-se no artefato de deploy (ex.: `_redirects` / regras do projeto), sempre 301 de slug — não meta refresh, não Worker por artigo.

Escala: fatiar o grafo **por domínio** para o build caber; hreflang e canônicos permanecem consistentes no repo inteiro.

## 7. Publicação nos domínios

`config/domains.json` fecha, para cada host:

- produto(s) visíveis
- idiomas servidos
- `site` / `PUBLIC_SITE_URL` daquele deploy

Publicar um host significa: build estático da fatia → Pages daquele projeto → certificado e DNS do domínio.

Regras na borda:

- Canônico absoluto **daquele** host; nunca o mesmo canônico em dois hosts
- Hreflang e sitemap **por domínio**
- Cross-domain só como alternate real ou link editorial, não como canônico compartilhado
- Locale na peça, não inferido só pelo host
- `x-default` conforme idioma default de `config/languages.json`, se o equivalente existir

O HTML no CDN é a revista. Recrawl após o deploy do `dist/`; não há hydration obrigatória para indexar.

## O que este fluxo não faz

- Não renderiza PDP a partir de `products/`
- Não gera URL para template vazio, hub sem spoke, offer expirada ou vídeo sem transcrição
- Não usa Next.js nem HTML escrito à mão como fonte de verdade
- Não consulta CMS no GET da página
- Não mistura `docs/` (regras) com `seo/` (artefatos de build)
