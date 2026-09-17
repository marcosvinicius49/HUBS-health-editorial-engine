# components/trust

## Objetivo

Tornar auditáveis autoria, datas de revisão, evidência e conflitos de interesse — requisitos YMYL de saúde (`docs/seo/content-rules.md`). Visível no HTML, não só no schema.

## Componentes esperados

- `AuthorCard` — dados de `data/authors/` (credencial, link de perfil interno se existir)
- `ReviewedBadge` — `dateModified` quando o tema clínico ou o risco mudou
- `MedicalDisclaimer` — limite editorial; **não** substitui `body`
- `DisclosureBox` — relação comercial (obrigatório em `review` e `offer`)
- `EvidenceNote` — fonte/qualificação da evidência (ingredient, safety, review)
- `LastChecked` — checagem da oferta ou do alerta de risco

Disclaimer sozinho = peça thin → não indexar.

## Templates que utilizam

| Template | Uso |
|---|---|
| `article` | AuthorCard, ReviewedBadge, MedicalDisclaimer |
| `review` | AuthorCard, DisclosureBox, EvidenceNote, ReviewedBadge |
| `ingredient` | AuthorCard, EvidenceNote, ReviewedBadge, MedicalDisclaimer |
| `safety` | AuthorCard, ReviewedBadge, MedicalDisclaimer, EvidenceNote, LastChecked |
| `offer` | DisclosureBox, LastChecked; autor se a oferta tiver corpo YMYL |
| `video` | AuthorCard se houver; disclaimer se o tema for clínico |
| `magazine` | institucional no footer (Disclaimer curto); sem fingir autoria da edição inteira |
| `category` | Disclaimer de pilar; sem AuthorCard de “hub anônimo” se não houver editor |

`safety` e `ingredient` exigem este grupo para entrar no índice. `offer` exige DisclosureBox junto de `conversion/`.
