

## Plano: Inverter ordem no mobile + reduzir polaroid

### Alterações em `src/pages/Index.tsx`

**1. Inverter ordem no mobile (linha 102)**
- Adicionar `flex-col-reverse` para que no mobile a polaroid apareça antes do texto
- Desktop mantém `md:flex-row` (texto à esquerda, foto à direita)

```
flex flex-col-reverse md:flex-row
```

**2. Reduzir polaroid em 1/3 (linha 120-130)**
- Alterar `max-w-xs` (~320px) para `max-w-[213px]` (~2/3 do original)

