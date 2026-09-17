# Modelo hub-and-spoke

O grafo editorial é um conjunto de hubs (pilares) e spokes (peças). O motor não publica clusters órfãos nem artigos sem hub primário.

## Definições

- **Hub:** cluster temático em `hubs/`, com taxonomia em `data/taxonomies/` e intent de pilar em `data/keywords/`. Template: `templates/hub/`.
- **Spoke:** artigo (`content/articles/`), vídeo (`videos/`) ou peça de edição que aprofunda **um** recorte do hub. Templates: `templates/article/`, `templates/video/`.
- **Revista:** `content/magazines/` agrupa spokes de uma edição; não substitui o hub. Uma edição pode atravessar vários hubs, mas cada spoke continua com um hub primário.

## Cardinalidade

- Cada spoke tem **um** `hub` primário (campo já previsto nas collections).
- Spoke pode citar hubs secundários só como links contextuais, não como segundo canônico nem segundo h1.
- Hub sem pelo menos um spoke indexável **não** é publicado.
- Dois hubs não compartilham o mesmo intent de keyword principal.

## Ligação interna

1. Hub lista os spokes publicados daquele idioma e domínio (não misturar locales na mesma lista).
2. Todo spoke aponta de volta ao hub primário (breadcrumb e link no corpo ou no cabeçalho editorial).
3. Spokes irmãos ligam-se entre si só quando há relação semântica; teto editorial: poucos links related, todos visíveis no HTML.
4. Não ligar em massa todos os artigos a todos os hubs (“footer blast”).
5. Vídeo é spoke: entra na lista do hub e recebe o mesmo retorno ao pilar.

## Canibalização

- Keyword de pilar = só o hub.
- Keyword de recorte = só um spoke.
- Se dois spokes competem, um redireciona ou vira seção do outro; não ficar os dois no índice.
- Hub não reescreve o artigo longo: o hub resume e despacha.

## URL e descoberta

- Slug de hub é estável e curto; spokes não repetem o slug do pilar.
- Mudança de hub primário atualiza links internos e, se a URL mudar, registra 301 em `seo/redirects/`.
- Sitemap lista hubs e spokes canônicos; o hub não é substituto do sitemap.

## Schema e recorte

- Hub: `CollectionPage` com `hasPart` (ou equivalente) para spokes indexáveis.
- Spoke artigo: `Article` com `isPartOf` apontando ao hub quando houver URL de hub.
- Spoke vídeo: ver `video-seo.md`.

## Produtos e domínios

- O mesmo tema pode existir em produtos diferentes só se a intenção e o público forem distintos; senão, um canônico e hreflang/redirect.
- Hub é por idioma. Não reutilizar HTML de um locale em outro.
- Cross-links entre domínios não criam um hub “global” indexável; cada host tem seus hubs.

## O que o motor não faz

- Não gera página de hub a partir só de uma keyword em `data/keywords/` sem registro em `hubs/`.
- Não promove revista, tag ou autor a hub, salvo se existir cluster explícito.
- Não cria páginas de produto para simular pilares.
