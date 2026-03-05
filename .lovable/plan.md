

## Plano: Rodapé preto com "Voltar ao topo" e créditos

### Estrutura do rodapé (ao final de `src/pages/Index.tsx`)

1. **Container**: `bg-foreground` (preto), full-width, padding, flex column centralizado
2. **Botão "Voltar ao topo"**: estilo glass bar (similar à glass bar da assinatura), com `font-body` (TikTok Sans), tracking expandido (`tracking-[0.3em]`), texto uppercase. Ao clicar, `window.scrollTo({ top: 0, behavior: 'smooth' })`
3. **Linha de créditos abaixo**: texto pequeno (`text-[10px]`) em `text-primary-foreground/50`, centralizado, layout inline:
   - "Feito com muita estratégia por" — texto
   - Separador `—`
   - Imagem `assinatura.png` inline (altura ~14px), com `brightness-0 invert` para ficar branca

### Arquivo: `src/pages/Index.tsx`
- Adicionar seção `<footer>` após o container da bio, fora do `max-w-6xl`
- Botão glass bar com efeito shimmer reutilizando a classe `.glass-shimmer` existente

