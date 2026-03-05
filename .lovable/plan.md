

## Plano: Animação de entrada com efeito glass bar ao scroll

### Abordagem
Criar um hook `useScrollReveal` com `IntersectionObserver` e aplicar em cada seção da página. Os elementos entram com fade-in + scale sutil + um brilho glass shimmer que percorre o elemento ao aparecer.

### 1. Criar hook `src/hooks/use-scroll-reveal.tsx`
- Hook que retorna um `ref` para aplicar em elementos
- Usa `IntersectionObserver` com `threshold: 0.1`
- Ao entrar em viewport, adiciona classe `revealed` ao elemento
- Opção de `delay` para escalonar animações entre elementos

### 2. Adicionar CSS em `src/index.css`
- Classe `.scroll-reveal`: estado inicial com `opacity: 0`, `translateY(20px)`, `scale(0.97)`
- Classe `.scroll-reveal.revealed`: transição para `opacity: 1`, `translateY(0)`, `scale(1)` com `transition` suave (~0.6s ease-out)
- Pseudo-elemento `::after` na classe `.scroll-reveal.revealed` com efeito glass shimmer (brilho diagonal que percorre uma vez ao aparecer) usando a mesma lógica do `glass-shimmer` existente, mas com `animation-iteration-count: 1`

### 3. Atualizar `src/pages/Index.tsx`
- Importar o hook
- Aplicar `ref` + classe `scroll-reveal` nas seções principais:
  - Bloco perfil + assinatura
  - Box escuro (dark bar)
  - Cada banner de link (com delay escalonado: `i * 100ms`)
  - Seção bio
  - Footer

### Detalhes técnicos
- Keyframe `glass-reveal-shine`: shimmer diagonal que roda uma vez em 0.8s ao ser revelado
- `IntersectionObserver` com `once: true` (não re-anima ao sair/entrar novamente)
- Delays escalonados nos banners para efeito cascata

