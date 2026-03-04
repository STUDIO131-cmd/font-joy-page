

## Problema
Com `items-stretch` e `h-full object-cover`, a imagem está sendo esticada para cobrir toda a altura do texto, ficando distorcida/fina porque a proporção natural da foto não comporta essa altura.

## Solução
Trocar `items-stretch` por `items-start` no container flex, e na imagem remover `h-full` — mantendo apenas `w-full h-auto object-cover`. Para que a foto ainda acompanhe razoavelmente o texto sem distorcer, usar `object-top` e limitar a altura máxima com `max-h-[700px]` dentro de um container com `overflow-hidden`.

### Alterações em `src/pages/Index.tsx`:

1. **Linha ~57**: Mudar `items-stretch` para `items-start` no container flex da bio
2. **Linha ~113**: Adicionar `overflow-hidden rounded-lg` no div da foto  
3. **Linha ~117**: Mudar a classe da img de `w-full h-full object-cover rounded-lg` para `w-full h-auto object-cover object-top`

Isso mantém a foto em proporção natural, alinhada ao topo, sem esticar.

