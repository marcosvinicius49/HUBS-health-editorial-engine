# Health Editorial Engine

Motor editorial SEO global para revistas digitais multilíngues em múltiplos domínios.

Este repositório contém apenas a **arquitetura inicial de pastas**. Páginas de produto, layouts e código de aplicação ainda não fazem parte deste estágio.

## Arquitetura

```text
templates/     layouts editoriais reutilizáveis (revista, artigo, hub, vídeo)
components/    blocos reutilizáveis de UI e SEO
products/      verticais de produto (sem páginas neste estágio)
languages/     pacotes de idioma, hreflang e cópia local
hubs/          clusters temáticos de conteúdo
videos/        metadados e assets editoriais de vídeo
assets/        imagens, fontes, ícones e mídia estática
config/        domínios, idiomas, SEO e regras globais
```

## Princípios

- Um template serve vários produtos, idiomas e domínios.
- Produtos, hubs e vídeos são conteúdo; templates e components são estrutura.
- Idiomas e domínios são configurados em `config/` e localizados em `languages/`.
- Novas revistas entram como produto, sem duplicar o motor.
