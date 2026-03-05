

## Plano: Reunir todas as frases no mesmo bloco escuro

O usuário quer que "Estrategista de Marca & Marketing", "Fotógrafo | Artista", "Fundador do Studio 131..." e "Nos links abaixo..." estejam todos dentro do mesmo bloco escuro, com espaçamento leve entre os parágrafos e hierarquia de fonte decrescente.

### Alteração em `src/pages/Index.tsx` (linhas 33-54)

Remover o bloco `{/* Tagline */}` separado (linhas 33-41) e mover o texto para dentro do bloco escuro. Resultado:

```tsx
{/* Dark bar - all text together */}
<div className="w-full relative rounded-2xl overflow-hidden mt-6 mb-10">
  <div className="absolute inset-0 dusty-film-bg" />
  <div className="relative bg-foreground/90 rounded-2xl px-4 py-5 text-center">
    <p className="text-primary-foreground text-sm font-body tracking-wide max-w-[280px] mx-auto mb-1">
      Estrategista de Marca & Marketing
    </p>
    <p className="text-primary-foreground text-sm font-body tracking-wide max-w-[280px] mx-auto mb-4">
      Fotógrafo | Artista
    </p>
    <p className="text-primary-foreground/70 text-xs font-body tracking-wide max-w-[260px] mx-auto mb-3">
      Fundador do Studio 131 onde construímos uma Jornada de Ascensão.
    </p>
    <p className="text-primary-foreground/50 text-[10px] font-body tracking-wide max-w-[240px] mx-auto">
      Nos links abaixo compartilho diversos conteúdos sobre o nosso universo:
    </p>
  </div>
</div>
```

Hierarquia: `text-sm` → `text-sm` → `text-xs` (70% opacidade) → `text-[10px]` (50% opacidade). Espaçamento entre "Fotógrafo | Artista" e "Fundador" levemente maior (`mb-4`).

