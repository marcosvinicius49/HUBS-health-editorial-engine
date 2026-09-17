# components/product

## Objetivo

Mostrar **identidade de entidade citada** (nome, tipo, atributos factuais) dentro de um spoke editorial. **Não é biblioteca de PDP** e não gera páginas em `products/`.

## Componentes esperados

- `EntityLabel` — nome + tipo (`itemReviewed`, substância, seller)
- `AttributeList` — fatos (CAS/INN, disponibilidade editorial, escala de rating)
- `ProsCons` — listas do `review` (conteúdo editorial, não catálogo)
- `ComparedItem` — linha “vs” limitada; sem grid de SKUs
- `SpecNote` — nota factual curta reutilizada em `ingredient` e `review`

Proibido neste grupo: galeria de compra, preço como CTA (isso é `conversion/`), estoque, variantes de e-commerce.

## Templates que utilizam

| Template | Uso |
|---|---|
| `review` | EntityLabel, AttributeList, ProsCons, ComparedItem |
| `ingredient` | EntityLabel, AttributeList, SpecNote |
| `offer` | EntityLabel + seller (preço/CTA em `conversion/`) |
| `safety` | EntityLabel do `subject` apenas |
| `article` | EntityLabel pontual se citar substância/marca |
| `magazine` | não (sumário usa SpokeCard) |
| `video` | só se o vídeo for sobre uma entidade explícita |
| `category` | **não** — listagem é SpokeCard, não vitrine de produto |

Nenhum template deste grupo cria URL de produto.
