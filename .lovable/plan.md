

## Plano: Unificar fontes e reduzir tamanho do texto na bio

### Alterações em `src/pages/Index.tsx`

1. **Remover todos os `<strong>` e `<em>`** dos parágrafos (linhas 66-108), substituindo por texto simples sem bold/itálico. Manter o texto mas remover as tags de formatação e classes `text-foreground` associadas.

2. **Remover estilo especial das frases em itálico** (linhas 99-104): as duas frases "A fotografia segue..." e "A estratégia..." perdem `font-display italic text-foreground text-base md:text-lg` e ficam como parágrafos normais.

3. **Reduzir tamanho da fonte dos parágrafos**: Mudar de `text-sm md:text-base` para `text-xs md:text-sm` (linha 65) para compactar o bloco de texto e igualar à altura da foto.

4. **Reduzir título**: Mudar de `text-3xl md:text-4xl lg:text-5xl` para `text-2xl md:text-3xl lg:text-4xl` (linha 62) e `mb-6` para `mb-4`.

5. **Reduzir espaçamento**: Mudar `space-y-4` para `space-y-3` (linha 65).

