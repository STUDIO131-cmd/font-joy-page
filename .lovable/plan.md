

## Plano: Sobreposição sutil foto+assinatura sobre bloco escuro + assinatura menor

### 1. Reduzir margem entre os 3 blocos e criar sobreposição

Atualmente o bloco profile+assinatura tem `mb-4` e o bloco escuro tem `mt-6`. Vou:
- Remover `mb-4` do container da foto/assinatura
- Trocar `mt-6` por `-mt-8` no bloco escuro para que ele suba e fique parcialmente atrás do bloco da foto
- Adicionar `pt-12` ao conteúdo interno do bloco escuro para compensar a sobreposição e manter o texto visível
- Garantir que o bloco da foto tenha `z-10` e o bloco escuro fique atrás com `z-0`

### 2. Reduzir tamanho da assinatura

Trocar `h-10 md:h-12` por `h-7 md:h-8` para alinhar melhor com o tamanho da frase "Estrategista de Marca & Marketing".

### Alterações em `src/pages/Index.tsx`

**Linha 23** — remover `mb-4`, adicionar `z-10 relative`:
```tsx
<div className="relative flex flex-col items-center z-10">
```

**Linha 32** — reduzir altura da assinatura:
```tsx
className="relative h-7 md:h-8 w-auto brightness-0 invert ..."
```

**Linha 37** — sobreposição no bloco escuro:
```tsx
<div className="w-full relative rounded-2xl overflow-hidden -mt-8 mb-10">
```

**Linha 39** — padding-top extra para compensar sobreposição:
```tsx
<div className="relative bg-foreground/90 rounded-2xl px-4 pt-10 pb-5 text-center">
```

