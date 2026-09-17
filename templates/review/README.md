# Template: review

Contrato da avaliação editorial (investigação de marca, fórmula, protocolo ou produto citado). Não é página de produto em `products/`. Sem HTML neste estágio.

## Objetivo da página

Julgar com critério editorial uma entidade comercial ou fórmula: o que foi avaliado, evidência, limites e veredito. O leitor sai com uma decisão informada, não com um reprint do fabricante.

## Intenção de busca

- **Primária:** comercial / investigação (`review`, `vale a pena`, `vs`, avaliação de marca).
- **Secundária:** informacional só como contexto; o recorte canônico de “o que é o ingrediente” fica em `ingredient`.
- **Não atende:** ficha de compra (`offer`), listagem de categoria (`category`), alerta de segurança puro (`safety`).

## Campos obrigatórios

| Campo | Função |
|---|---|
| `title` | Title/H1 da avaliação |
| `locale` | BCP 47 |
| `product` | Vertical |
| `hub` | Cluster primário |
| `author` | Id em `data/authors/` |
| `itemReviewed` | Entidade avaliada (nome + tipo) |
| `rating` | Veredito editorial (escala documentada) |
| `datePublished` | Publicação |
| `dateModified` | Revisão do veredito |
| `description` | Meta única |
| `body` | Critérios, evidência, limitações |
| `disclosure` | Relação comercial / afiliado, se houver |
| `draft` | Controle de índice |

Opcional: `pros[]`, `cons[]`, `ingredientIds[]`, `offerId` (uma oferta canônica, não um grid de PDPs).

## Links internos esperados

- `category` primário.
- Monografias `ingredient` citadas na fórmula (não copiar a monografia no review).
- `safety` se houver risco material (interação, população especial).
- No máximo um `offer` canônico para “onde encontrar”; o review não vira vitrine.
- Não linkar em massa outros reviews só por marca.

## Requisitos SEO

- Schema: `Review` (e `Article` se o corpo for long-form) sobre `itemReviewed`. Não marcar `Product` de catálogo se não houver PDP.
- Disclosure visível no HTML, não só no JSON-LD.
- Um review por entidade + locale; duplicata → canônico ou 301 (`seo/redirects/`).
- YMYL: veredito sem critério ou sem autor → não indexar.
- Hreflang só com avaliação traduzida (não com o mesmo rating em inglês).
