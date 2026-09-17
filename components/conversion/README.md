# components/conversion

## Objetivo

Encaminhar o leitor a uma ação comercial **já justificada** por um spoke (`offer` ou `review`). Disclosure visível. Não transformar `safety` nem `category` em vitrine.

## Componentes esperados

- `OfferCta` — destino `offerUrl`, texto da condição
- `DisclosureLine` — afiliado/patrocínio (espelha `trust/`, obrigatório junto ao CTA)
- `PriceNote` — preço só se existir no conteúdo; nunca inventar
- `ValidThrough` — validade editorial da oferta
- `OutboundRel` — `sponsored` / `nofollow` conforme política do domínio

Não incluir: checkout, carrinho, grade de PDPs, canonical apontando ao destino externo.

## Templates que utilizam

| Template | Uso |
|---|---|
| `offer` | Conjunto completo (CTA principal) |
| `review` | No máximo um OfferCta para o `offerId` canônico |
| `magazine` | CTA só se um item da edição for `offer` (card, não vitrine) |
| `article` | CTA raro e secundário; não captura o canônico informacional |
| `category` | **não** como grid de ofertas |
| `ingredient` | **não** como CTA principal |
| `safety` | **proibido** como CTA principal |
| `video` | não como único CTA em peça YMYL |

Oferta expirada: estes componentes não sustentam `index` (`templates/offer/`).
