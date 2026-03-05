

## Plano: Bio mobile — foto pequena como ícone + texto centralizado

### Alteração em `src/pages/Index.tsx` (linhas 96-131)

**Mobile (default):**
- Reordenar: foto vem **primeiro**, texto **abaixo**
- Foto: tamanho pequeno tipo ícone (~`w-20 h-20`), sem padding de polaroid, `rounded-full` ou mantém polaroid mas bem menor (`max-w-[80px]`), centralizada
- Texto: `text-center` (remover `text-justify` no mobile)

**Desktop (`md:`):**
- Mantém layout atual lado a lado (55% texto | 45% foto com polaroid grande)

### Implementação

Na div container (linha 102):
- Manter `flex-col md:flex-row`
- Inverter ordem no mobile usando `order`: foto com `order-first md:order-last`

Na polaroid (linhas 120-130):
- Mobile: `w-20 h-20 rounded-full overflow-hidden` com `p-0 pb-0` — sem moldura polaroid
- Desktop: mantém polaroid com `p-3 pb-10 max-w-xs rotate-1`
- Usar classes responsivas: `w-20 h-20 md:w-auto md:h-auto rounded-full md:rounded-sm p-0 md:p-3 pb-0 md:pb-10`

No texto (linha 104):
- `text-center md:text-justify`

