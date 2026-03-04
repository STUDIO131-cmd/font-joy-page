

## Plano: Expandir a seção bio para preencher mais a largura

### Problema
A seção bio está limitada por `max-w-xl` (container pai) e a foto está pequena (`md:w-[340px] lg:w-[400px]`). Na referência, o texto ocupa ~50% da largura e a foto ocupa ~50%, preenchendo toda a altura do texto.

### Alterações

1. **Quebrar a seção bio para fora do container `max-w-xl`**: Fechar o `div max-w-xl` antes da seção bio e abrir um novo container mais largo (`max-w-6xl`) para que texto e foto ocupem mais a tela.

2. **Ajustar proporções texto/foto**: Mudar de `flex-1` + `md:w-[340px]` para um grid ou flex com proporções ~55%/45%, dando mais espaço à foto. Usar `md:w-[45%]` para a foto e `md:w-[55%]` para o texto.

3. **Foto com altura total**: Usar `object-cover` com `h-full` na imagem para que ela cubra toda a altura do texto, como na referência. Adicionar `rounded-lg` para bordas arredondadas sutis.

4. **Ajustar `items-stretch`** no container flex para que ambas as colunas tenham a mesma altura.

### Estrutura resultante
```text
┌─────────── max-w-xl ───────────┐
│  profile photo + name + desc   │
│  link banners                  │
└────────────────────────────────┘

┌──────────── max-w-6xl ─────────────┐
│  ┌─── 55% ───┐  ┌──── 45% ────┐   │
│  │ "Prazer,   │  │             │   │
│  │  eu sou    │  │  foto Igor  │   │
│  │  Igor."    │  │  (cover,    │   │
│  │            │  │   full h)   │   │
│  │ paragraphs │  │             │   │
│  └────────────┘  └─────────────┘   │
└────────────────────────────────────┘
```

