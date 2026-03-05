

## Plano: Ajustar bloco de texto escuro

### Alterações em `src/pages/Index.tsx` (linhas 33-45)

1. **Espaçamento do topo**: adicionar `mt-6` no container para distanciar do nome
2. **Largura igual aos banners**: trocar `px-6` por `px-4` no container interno (alinhando com o `p-4` do container de links)
3. **Texto quebrado em múltiplas linhas centralizadas**: adicionar `max-w-[280px] mx-auto` nos parágrafos
4. **Hierarquia de fonte decrescente**: 
   - Linha 1 ("Estrategista..."): mantém `text-sm`
   - Linha 2 ("Fundador..."): `text-xs` + `text-primary-foreground/70`
   - Linha 3 ("Nos links..."): `text-[10px]` + `text-primary-foreground/50`

Resultado:
```tsx
<div className="w-full relative rounded-2xl overflow-hidden mt-6 mb-10">
  <div className="absolute inset-0 dusty-film-bg" />
  <div className="relative bg-foreground/90 rounded-2xl px-4 py-5 text-center">
    <p className="text-primary-foreground text-sm font-body tracking-wide max-w-[280px] mx-auto mb-1">
      Estrategista de Marca & Marketing | Fotógrafo | Artista
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

