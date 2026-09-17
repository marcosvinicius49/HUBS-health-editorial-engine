# Template: safety

Contrato da página de segurança (risco, interação, contraindicação, população especial). Sem HTML neste estágio.

## Objetivo da página

Deixar explícito **quando não usar, com o que interage e quem deve evitar**, com atribuição editorial. Não é monografia completa nem review de marca.

## Intenção de busca

- **Primária:** informacional de risco (`efeitos colaterais`, `interações`, `é seguro`, `contraindicações`, gravidez, dosagem de alerta).
- **Não atende:** “o que é” (`ingredient`), “vale a pena” (`review`), compra (`offer`), pilar (`category`).

Se o risco for um parágrafo curto, pode viver no `ingredient`; esta URL só existe quando o intent de segurança é o recorte principal.

## Campos obrigatórios

| Campo | Função |
|---|---|
| `title` | Recorte de risco (H1) |
| `locale` | BCP 47 |
| `product` | Vertical |
| `hub` | Cluster primário |
| `author` | Id em `data/authors/` |
| `subject` | Ingrediente, classe ou protocolo alvo |
| `riskType` | Efeito adverso, interação, população, dosagem |
| `datePublished` | Publicação |
| `dateModified` | Revisão (obrigatória; conteúdo YMYL de risco) |
| `description` | Meta única |
| `body` | Texto de risco suficiente sem JS |
| `disclaimer` | Limite editorial (não substitui corpo) |
| `draft` | Controle de índice |

Opcional: `ingredientIds[]`, `interactions[]`, `populations[]`.

## Links internos esperados

- Monografia `ingredient` do sujeito (a página “o que é”).
- `category` primário.
- `article` de contexto clínico, se existir, sem copiar a tabela de interações.
- `review` só se o risco mudar o veredito; o safety não é anexo do review.
- Sem `offer` como CTA principal em página de contraindicação.

## Requisitos SEO

- Schema: `Article` (ou `MedicalWebPage` quando o artefato em `seo/schema/` existir) com autor e `dateModified`.
- YMYL estrito: sem autor, sem data de revisão ou corpo só com disclaimer → `noindex` ou não gerar.
- Um recorte de risco por URL; não fundir “interações” e “gravidez” se as queries forem distintas e o volume justificar duas peças — senão uma página com âncoras e um canônico.
- Hreflang só com tradução completa do texto de risco.
- Nunca marcar `index` se o HTML minimizar o risco para favorecer `offer`.
