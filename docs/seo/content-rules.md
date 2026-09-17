# Regras de conteúdo

Critérios para uma peça entrar no índice. Fonte: `content/`, metadados nas collections, autores e keywords em `data/`. Sem páginas inventadas pelo motor.

## Identidade da peça

Toda peça publicável declara:

- `title`
- `locale` (BCP 47 alinhado a `config/languages.json`)
- `product` (vertical; não gera URL de produto)
- `hub` primário
- estado `draft` (ausente ou `false` para publicar)

Tradução de corpo vive em `content/translations/` e aponta para a peça origem. Cópia de UI não substitui tradução de corpo.

## Uma URL, um intent

- Um H1, igual em substância ao title (não duplicar keyword stuffing no H1).
- Title único por domínio + idioma.
- Description única; não reutilizar entre spokes.
- Corpo resolve a query mapeada em `data/keywords/` para aquele `id` de peça.
- Proibido publicar o mesmo corpo em dois slugs, dois hubs ou dois produtos com canônicos distintos.

## Qualidade mínima (saúde / YMYL)

- Autor existente em `data/authors/`.
- Data de publicação; data de revisão quando o tema clínico mudar.
- Texto suficiente para responder a intenção sem depender de vídeo, infográfico ou JS.
- Páginas só com título, lista de links ou transcrição vazia são thin: `noindex` ou não gerar.
- Não publicar aconselhamento médico sem atribuição e ressalva editorial; o motor não inventa disclaimer no lugar de conteúdo.

## Idioma e tradução

- Não indexar locale se o corpo ainda é o idioma default.
- Hreflang só entre traduções completas (mesmo intent, mesmo hub, corpo no idioma da URL).
- Slug pode localizar-se; o `id` da peça permanece estável.
- Misturar idiomas no H1/title é inválido.

## Markdown e JSON

Collections aceitam `.md`, `.mdx` e `.json`. Regras iguais para os três:

- Frontmatter/JSON deve validar o schema editorial (`title`, `locale`, `product`, `hub`, `draft`).
- Corpo longo em Markdown; JSON é para metadados ou peças estruturadas curtas, não para artigos YMYL sem texto.
- `README.md` nas pastas de arquitetura **não** é conteúdo.

## Draft, noindex e exclusão

| Estado | HTML | robots | sitemap |
|---|---|---|---|
| `draft: true` | opcional (preview interno) | `noindex` | não |
| thin / incompleto | não gerar ou `noindex` | `noindex` | não |
| publicado | gerar | `index,follow` (default) | sim, canônico |

## Links e mídia no corpo

- Links internos seguem hub-and-spoke (`hub-spoke-model.md`).
- Imagens: arquivo em `assets/images/`, `alt` descritivo, não keyword dump.
- Não usar imagem ou vídeo como único portador da informação indexável.
- URLs relativas resolvem no host da peça; não hardcodar outro domínio como canônico.

## Revistas

- Edição em `content/magazines/` é capa/sumário, não duplicata dos artigos.
- Cada item do sumário aponta ao spoke canônico, não a uma cópia na edição.
- Edição sem artigos publicados não vai ao índice.

## O que o motor não gera

- Páginas de produto
- Arquivos de tag/categoria além dos hubs explícitos
- URLs para combinações produto × idioma sem conteúdo
- Conteúdo só para preencher volume (“páginas satélite”)
