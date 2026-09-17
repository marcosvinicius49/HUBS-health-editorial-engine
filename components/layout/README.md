# components/layout

## Objetivo

Definir a casca estável de toda página: regiões, largura, header/footer estruturais e o encaixe do conteúdo. Não decide intent nem grafo de links.

## Componentes esperados

- `PageShell` — documento: header, main, footer
- `HeaderBar` / `FooterBar` — faixas institucionais (sem itens de menu; isso é `navigation/`)
- `Grid` / `ContentWidth` — colunas (corpo + rail)
- `Section` / `Stack` — ritmos verticais
- `SkipToContent` — âncora de acessibilidade

Não incluir aqui: breadcrumbs, schema, CTAs, player.

## Templates que utilizam

| Template | Uso |
|---|---|
| `magazine` | Capa: shell + grid de sumário |
| `article` | Corpo + rail |
| `review` | Corpo + rail de veredito |
| `ingredient` | Monografia em content width |
| `safety` | Corpo de risco, rail mínimo |
| `offer` | Corpo + região de condição comercial |
| `video` | Poster/player na região principal |
| `category` | Intro + listagem em grid |

Todos os templates indexáveis passam por `PageShell`.
