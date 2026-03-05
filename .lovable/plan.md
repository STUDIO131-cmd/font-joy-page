

## Plano: Fundo cinza vintage com textura e light leak animado

A imagem de referência mostra um tom bege/cinza quente (~`#efe7da`). O objetivo é aplicar esse fundo com textura granulada vintage e um light leak sutil animado com blur.

### 1. Alterar cor de fundo (`src/index.css`)

Trocar `--background` de `0 0% 100%` (branco) para algo próximo de `#efe7da` em HSL: `~35 30% 91%`.

### 2. Adicionar textura noise + light leak ao container principal (`src/pages/Index.tsx`)

No `div` raiz (linha 20), remover `border-4` e adicionar camadas de textura:

```tsx
<div className="min-h-screen bg-background flex flex-col items-center px-4 py-12 relative overflow-hidden">
  {/* Grain/noise texture overlay */}
  <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.08]"
    style={{
      backgroundImage: `url("data:image/svg+xml,...")` // SVG feTurbulence noise
    }}
  />
  {/* Animated light leak */}
  <div className="fixed inset-0 pointer-events-none z-0 light-leak-animation" />
  
  {/* Content with z-10 */}
  <div className="relative z-10 w-full max-w-xl ...">
```

### 3. CSS para light leak e noise (`src/index.css`)

Adicionar keyframes para light leak — gradientes radiais translúcidos que se movem lentamente com blur grande:

```css
@keyframes light-leak {
  0%, 100% { opacity: 0.15; transform: translate(-10%, -10%) scale(1.2); }
  33% { opacity: 0.25; transform: translate(10%, 5%) scale(1.3); }
  66% { opacity: 0.1; transform: translate(-5%, 10%) scale(1.1); }
}

.light-leak-animation {
  background: 
    radial-gradient(ellipse at 20% 20%, rgba(255,245,230,0.3) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 80%, rgba(255,240,220,0.2) 0%, transparent 50%);
  filter: blur(60px);
  animation: light-leak 12s ease-in-out infinite;
}
```

### 4. Textura grain via SVG inline filter

Usar um pseudo-elemento ou div com `feTurbulence` SVG filter para simular grão de filme vintage, com opacidade baixa (~8%).

### Resumo de arquivos alterados
- `src/index.css` — nova cor de fundo + keyframes light-leak + classe noise
- `src/pages/Index.tsx` — reestruturar container com camadas de textura e light leak

