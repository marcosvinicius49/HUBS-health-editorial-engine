# templates

Contratos de página do motor editorial. Um template define objetivo, intent, campos e SEO; o HTML ainda não é implementado.

Não criar páginas reais, produtos nem layout visual nesta pasta.

## Catálogo

| Template | Papel | Intent típico |
|---|---|---|
| `magazine/` | Capa e edição da revista | Navegação / descoberta da edição |
| `article/` | Artigo editorial | Informacional |
| `review/` | Avaliação editorial | Comercial + investigação |
| `ingredient/` | Monografia de ingrediente | Informacional (entidade) |
| `safety/` | Segurança, interações, contraindicações | Informacional (YMYL / risco) |
| `offer/` | Oferta editorial (não é PDP) | Transacional / comercial |
| `video/` | Página de vídeo com texto equivalente | Informacional (mídia) |
| `category/` | Cluster / listagem do pilar | Navegação + pilar |

`templates/hub/` não é um nono layout: o contrato de página de cluster é `category/`. A pasta `hubs/` continua sendo o grafo de pilares.

Campos de identidade comuns a peças publicáveis: `title`, `locale`, `product`, `draft`. Spokes também declaram `hub` (id do cluster `category`). Regras globais em `docs/seo/`.
