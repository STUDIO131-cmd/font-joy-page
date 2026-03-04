

## Plano: Background glassmorphism na seção de biografia

### Alterações

**1. `src/pages/Index.tsx` (linha 58-59)**
Adicionar classes de glassmorphism no container da bio:
- Trocar o div wrapper atual por um com `bg-black/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden` 
- Manter `max-w-6xl` mas adicionar margem interna com padding
- A foto precisa ter `rounded-r-2xl` para acompanhar o arredondamento do container

**2. `src/index.css`**
Adicionar uma animação sutil de gradiente no fundo do bloco bio:
- Keyframe `bio-glow` que move um gradiente radial suave, criando um efeito de luz pulsante atrás do glass
- Classe `.bio-glass-bg` com a animação

### Detalhes das mudanças:

**Container bio (Index.tsx linhas 57-58):**
```
<div className="w-full max-w-6xl px-4 mt-16">
```
→
```
<div className="w-full max-w-6xl px-4 mt-16">
  <div className="relative rounded-2xl overflow-hidden">
    <div className="absolute inset-0 bio-glass-bg" />
    <div className="relative bg-black/[0.03] backdrop-blur-sm border border-black/[0.08] rounded-2xl overflow-hidden">
```

**Fechar os novos divs** após o fechamento do flex container (linha 112).

**index.css:** Adicionar keyframe `bio-glow` — gradiente radial que se desloca lentamente (8-10s loop), com opacidade muito baixa para criar um efeito luminoso sutil.

