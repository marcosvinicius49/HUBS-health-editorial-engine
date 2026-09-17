# Astro SSG

O motor publica HTML estático (`output: "static"`). Não usa adapter Cloudflare de SSR.

## Comandos

- `npm run build` — gera `dist/`
- `npm run pages:dev` — preview local no Wrangler Pages
- Cloudflare Pages: build `npm run build`, output `dist`, Node 22

## Pastas

A árvore editorial na raiz permanece. `src/` é só o runtime do SSG (`content.config.ts` e páginas futuras).

Collections leem Markdown/JSON em `content/`, `data/` e `videos/` quando esses arquivos existirem. Pastas vazias geram um aviso de glob no build; isso é esperado até o primeiro arquivo `.md`/`.json`. Páginas de produto não são geradas neste estágio.

## Domínio

`PUBLIC_SITE_URL` define `site` no build. Sem essa variável, o Astro não assume um host.

O pipeline completo (produto → conteúdo → template → HTML → domínio) está em `rendering-flow.md`.
