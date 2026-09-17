# Template: offer

Contrato da página de oferta editorial (onde encontrar, condição comercial, alternativa). **Não é PDP** e não vive em `products/`. Sem HTML neste estágio.

## Objetivo da página

Documentar uma oferta concreta (disponibilidade, condição, restrições) ligada a um spoke editorial. O canônico comercial é esta URL; catálogo de produto não é gerado.

## Intenção de busca

- **Primária:** transacional / comercial (`comprar`, `preço`, `cupom`, `onde encontrar`) quando o motor tiver oferta editorial explícita.
- **Não atende:** review completo (`review`), monografia (`ingredient`), pilar (`category`). Queries “melhor X” de listagem pertencem a `category` ou a um `review` comparativo — não a um offer órfão.

## Campos obrigatórios

| Campo | Função |
|---|---|
| `title` | Oferta (H1), sem keyword dump de marca |
| `locale` | BCP 47 |
| `product` | Vertical |
| `hub` | Cluster primário |
| `offerUrl` | Destino da oferta (externo ou path estável) |
| `seller` | Quem oferece |
| `availability` | Estado editorial da oferta |
| `disclosure` | Relação comercial / afiliado |
| `datePublished` | Início da validade editorial |
| `dateModified` | Última checagem da condição |
| `description` | Meta única |
| `body` | Condição, limites, o que não está incluído |
| `draft` | Controle de índice |

Opcional: `price`, `currency`, `validThrough`, `reviewId`, `ingredientIds[]`. Preço ausente ou desatualizado: não inventar no schema.

## Links internos esperados

- Spoke editorial que justifica a oferta (`review` ou `article`) — a oferta não fica órfã.
- `category` primário.
- `safety` se a transação envolver substância com risco material.
- Sem lista de “outros produtos” simulando PDP.
- Magazine só se a oferta fizer parte da edição, apontando ao offer canônico.

## Requisitos SEO

- Schema: `Offer` (com `seller`) no HTML; não emitir `Product` de catálogo completo.
- Disclosure visível. `rel` de link de saída conforme política do domínio (sponsored/nofollow quando aplicável).
- Canônico no host editorial, **nunca** o `offerUrl` externo como `rel=canonical` da revista.
- Oferta expirada: `noindex` ou 301 para o `review`/`article` pai; não deixar thin “indisponível” no índice.
- Hreflang só se a condição comercial for equivalente no locale (preço/seller locais não herdam hreflang automático).
- Fora do sitemap se `draft`, expirada ou sem `body`.
