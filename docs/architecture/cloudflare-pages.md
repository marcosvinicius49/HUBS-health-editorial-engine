# Cloudflare Pages

Deploy do HTML estático gerado pelo Astro. Sem adapter SSR e sem templates de revista neste estágio.

## Projeto

| Campo | Valor |
|---|---|
| Preset | Astro |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node | `22` (`.nvmrc` / `.node-version`) |
| Wrangler | `pages_build_output_dir: ./dist` em `wrangler.jsonc` |

## Variáveis

- `PUBLIC_SITE_URL` — URL canônica do host (ex.: `https://<project>.pages.dev` ou o domínio final). Sem ela o Astro não define `site`.

## Comandos locais

```bash
npm install
npm run build
npm run pages:dev
```

`pages:dev` serve `dist/` com Wrangler Pages (o mesmo tipo de artefato do deploy).

## Primeiro deploy

1. Conectar o repositório em Workers & Pages → Create → Pages.
2. Usar a tabela acima e, se o host já for conhecido, definir `PUBLIC_SITE_URL`.
3. O artefato inicial é a origem do motor (`/` + `404.html`), com `noindex` e `robots.txt` bloqueando crawlers até haver conteúdo editorial.

Não publicar templates (`article`, `category`, etc.) neste passo. Um host = um projeto Pages, conforme `docs/architecture/rendering-flow.md`.
