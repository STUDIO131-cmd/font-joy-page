

## Plano: Alinhar largura do card do topo com os banners

### Problema
O container dos banners (links) tem `border` e `p-4`, fazendo com que as imagens dos banners fiquem mais estreitas que o card escuro do topo. O card do topo ocupa `w-full` dentro do `max-w-xl`, enquanto as imagens dos banners ficam recuadas pelo padding e borda.

### Solução
Adicionar o mesmo `p-4` e `border border-foreground/[0.08]` ao container externo do card escuro do topo (linha 43), para que ambos os blocos tenham o mesmo recuo interno e a área de conteúdo fique alinhada visualmente.

**Alternativa**: remover `border` e `p-4` do container dos banners para que as imagens fiquem flush com o card do topo. Depende da preferência visual.

### Arquivo: `src/pages/Index.tsx`
- **Card do topo (linha ~43)**: adicionar `p-4 border border-foreground/[0.08]` ao wrapper, ou envolver o card escuro num container com as mesmas propriedades do container dos banners.
- Resultado: ambas as seções terão a mesma largura visual de conteúdo.

