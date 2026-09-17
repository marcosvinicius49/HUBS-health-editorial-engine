# Health Editorial Engine

Motor editorial SEO global para revistas digitais multilíngues em múltiplos domínios.

Este repositório contém apenas a **arquitetura inicial de pastas**. Páginas, layouts visuais e código de aplicação ainda não fazem parte deste estágio.

## Arquitetura

```text
templates/     layouts editoriais reutilizáveis (revista, artigo, hub, vídeo)
components/    blocos reutilizáveis (ainda sem implementação visual)
products/      verticais de produto (sem páginas neste estágio)
languages/     pacotes de idioma, hreflang e cópia de interface
hubs/          clusters temáticos de conteúdo
videos/        metadados e referências editoriais de vídeo
assets/        mídia de origem (imagens, fontes, ícones, vídeo)
content/       fonte editorial (artigos, edições, traduções de corpo)
data/          dados estruturados (taxonomias, autores, keywords)
public/        raiz estática servida (robots, sitemaps, well-known)
seo/           regras e artefatos SEO (schema, canonical, redirects)
docs/          documentação do motor e do fluxo editorial
config/        domínios, idiomas, defaults SEO e regras globais
```

## Princípios

- Um template serve vários produtos, idiomas e domínios.
- `content/` e `data/` alimentam o motor; `templates/` e `components/` descrevem estrutura.
- Idiomas e domínios são configurados em `config/` e localizados em `languages/`.
- SEO operacional vive em `seo/`; defaults globais ficam em `config/`.
- Arquivos prontos para o host vão em `public/`; mídia de origem fica em `assets/`.
- Novas revistas entram como produto, sem duplicar o motor.
