# Portfólio Death Note: Júlio Filho (KiyotakaDv)

Portfólio pessoal de desenvolvedor full stack com tema Death Note: fundo preto, texto branco e destaques vermelhos, com títulos na fonte inspirada no caderno da morte.

O projeto é um único arquivo HTML, com CSS e JavaScript embutidos. Não precisa de build, instalação ou framework.

## Arquivos

| Arquivo | Descrição |
|---|---|
| `portfolio-death-note.html` | Página completa do portfólio |
| `README.md` | Este documento |

Para ver localmente, basta abrir o HTML em qualquer navegador. Para publicar, use qualquer hospedagem estática (GitHub Pages, Netlify, Vercel).

## Tecnologias

- HTML5 e CSS3 puros, sem frameworks
- JavaScript puro, só para a animação de digitação
- SVG inline em forma de sprite (ícones de habilidades, redes e botões)
- Google Fonts: **Butcherman** (títulos, logo e nome) e **Roboto Mono** (corpo do texto)
- Layout mobile-first, com coluna central de no máximo 560px

## Estrutura da página

| Seção | ID | Conteúdo |
|---|---|---|
| Cabeçalho fixo | `.top` | Logo "CADERNO DA MORTE" |
| Hero | `#inicio` | Maçã flutuante, nome digitado, handle, cargo, frase e botão "Ver Projetos" |
| Indicador de rolagem | `.cue` | Seta que sobe e desce, com linha inferior |
| Regras | `#regras` | "REGRAS DO DEATH NOTE", com 4 regras |
| Perfil | sem ID | Card com inicial, nome, handle, bio, localização e e-mail |
| Arsenal | `#arsenal` | "ARSENAL DE ARMAS", com 6 barras de habilidade |
| Projetos | `#projetos` | "LISTA DE ÓBITOS", com 6 cards de projeto |
| Contato | `#contato` | "RITUAL DE CONTATO", 4 redes sociais e rodapé |

## Conteúdo atual

### Habilidades

| Habilidade | Nível |
|---|---|
| HTML5 | 95% |
| CSS3 | 90% |
| JavaScript | 92% |
| Python | 88% |
| Reagir | 90% |
| Node.js | 85% |

### Projetos

| Projeto | Tecnologias | Selo "Apresentou" |
|---|---|---|
| Comércio obscuro | Reagir, Node.js, MongoDB | Sim |
| Pouso Sombrio | HTML5, CSS3, JavaScript | Sim |
| TaskMaster Pro | Reagir, Python, FastAPI | Não |
| Apresentação do Portfólio | JavaScript, CSS3, HTML5 | Não |
| Painel de API | Reagir, Python, MongoDB | Sim |
| Plataforma de blog | Reagir, Node.js, CSS3 | Não |

## Animações

| Elemento | Efeito | Duração |
|---|---|---|
| Maçã do hero | Flutua 14px para cima e para baixo (`float`) | 3,2 s, em loop |
| Nome digitado | Digita "Júlio Filho", apaga e digita de novo | 120 ms por letra ao digitar, 70 ms ao apagar, pausa de 2 s com o nome completo |
| Cursor da digitação | Pisca (`blink`) | 1 s |
| Seta do indicador de rolagem | Sobe e desce 7px (`bounce`) | 1,6 s, em loop |
| Seta do botão "Ver Projetos" | Sobe e desce 7px (`bounce`) | 1,6 s, em loop |

Com `prefers-reduced-motion` ativo no sistema, todas as animações são desligadas.

## Paleta de cores

| Variável | Valor | Uso |
|---|---|---|
| `--red` | `#e53935` | Destaques, bordas, barra lateral das regras |
| `--red-hot` | `#ef4444` | Handle, porcentagens, textos vermelhos |
| `--red-deep` | `#b71c1c` | Fundo do botão "Ver Projetos" |
| `--red-line` | `#3a0d0d` | Bordas discretas e linhas divisórias |
| `--card` | `#0a0d14` | Fundo dos cards |
| `--navy` | `#0f1523` | Fundo dos botões de redes sociais |
| `--text` | `#d4d4d8` | Texto principal |
| `--gray` | `#9ca3af` | Textos secundários |

O fundo da página é `#000`. O hero usa um gradiente de `#000` para `#0b1020` e depois `#121b2d`.

## Como personalizar

### Links dos projetos
Nos botões dentro de `.links`, troque `href="#"` pelo link da demonstração (primeiro botão) e do código (segundo botão).

### Fotos dos projetos
Cada projeto tem uma `div` com a classe `shot` e uma classe de gradiente (`g1` a `g6`). Para usar uma foto, substitua essa `div` por:

```html
<div class="shot" style="background:url('caminho/da-foto.jpg') center/cover"></div>
```

O estilo inline substitui o gradiente. Mantenha o selo "Apresentou" dentro da `div`, se o projeto tiver o selo.

### Foto do perfil
O card de perfil mostra a letra "J" dentro de `.photo`. Para usar uma foto, troque o conteúdo do `div` por uma `<img>` com `width:100%` e `height:100%`, e mantenha o `<span class="eye">` para o selo de olho.

### Redes sociais
Em `#contato`, troque `href="#"` nos quatro links de `.socials` pelos perfis reais (LinkedIn, GitHub, Instagram e WhatsApp).

### Habilidades
Copie um bloco `.skill` inteiro e ajuste três valores: o nome, a porcentagem em `.pct` e a largura em `style="width:XX%"` da barra. Se quiser outro ícone, troque o `href` do `<use>` por um dos símbolos definidos no sprite (`code`, `pal`, `zap`, `term`, `atom`, `srv`) ou adicione um novo símbolo ao sprite no topo do arquivo.

### Projetos
Copie um bloco `<article class="proj">` inteiro. Troque o gradiente da `div.shot`, o título, a descrição, as tags dentro de `.stack` e os links.

### Textos e dados pessoais
Os textos estão diretamente no HTML. O e-mail e a localização ficam no bloco `.meta` do card de perfil.

### Ano do copyright
O rodapé mostra "© 2025". Atualize o ano quando necessário.

## Pendências

- [ ] Substituir os gradientes de fundo dos projetos por fotos reais
- [ ] Adicionar os links reais de demonstração e código de cada projeto
- [ ] Adicionar os perfis reais nas redes sociais
- [ ] Revisar o ano do copyright no rodapé
- [ ] Confirmar se a fonte Butcherman é a mais próxima da fonte original do site

## Observações

- As medidas e cores foram recriadas a partir de capturas de tela, porque o site original é renderizado por JavaScript e não pôde ser copiado diretamente. Pequenas diferenças de espaçamento são esperadas.
- O selo "Feito com Emergent" do site original não foi incluído, porque pertence à plataforma e não ao design.
- O cabeçalho é fixo e respeita a área segura de dispositivos com entalhe ou barra de status translúcida.
