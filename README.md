# Health Editorial Engine

Motor editorial SEO global para revistas digitais multilíngues em múltiplos domínios.

Base técnica: **Astro SSG** (`output: "static"`) para Cloudflare Pages. A árvore editorial na raiz permanece. Ainda não há páginas de produto nem layout visual.

## Arquitetura

```text
src/           runtime do SSG (config de collections e página raiz mínima)
templates/     contratos de página (magazine, article, review, ingredient, safety, offer, video, category)
components/    blocos reutilizáveis (ainda sem implementação visual)
products/      verticais de produto (sem páginas neste estágio)
languages/     pacotes de idioma, hreflang e cópia de interface
hubs/          clusters temáticos de conteúdo
videos/        metadados e referências editoriais de vídeo
assets/        mídia de origem (imagens, fontes, ícones, vídeo)
content/       fonte editorial Markdown/JSON (artigos, edições, traduções)
data/          dados estruturados Markdown/JSON (taxonomias, autores, keywords)
public/        raiz estática copiada para dist (robots, sitemaps, well-known)
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

## Comandos

```bash
npm install
npm run build
```

Cloudflare Pages: build `npm run build`, output `dist`, Node 22. Detalhes em `docs/architecture/astro.md`.
