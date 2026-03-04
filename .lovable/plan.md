

## Plano: Centralizar foto e distribuir texto na mesma altura

### Problema atual
- A foto está alinhada ao topo (`items-start`) e tem `max-h-[700px]`, ficando "colada" no canto superior direito
- O texto ocupa mais altura que a foto, criando espaço vazio embaixo da imagem
- Na referência, a foto está mais centralizada verticalmente e o texto se distribui na mesma altura

### Alterações em `src/pages/Index.tsx`

1. **Centralizar verticalmente**: Mudar `items-start` para `items-center` no container flex (linha 59), para que a foto fique centralizada em relação ao texto

2. **Reduzir tamanho do título**: Diminuir de `text-4xl md:text-5xl lg:text-6xl` para `text-3xl md:text-4xl lg:text-5xl` (linha 62), compactando o bloco de texto

3. **Reduzir espaçamento entre parágrafos**: Mudar `space-y-5` para `space-y-4` e `mb-8` do titulo para `mb-6` (linhas 62, 65)

4. **Reduzir padding do texto**: Mudar `p-6 md:p-10` para `p-4 md:p-8` (linha 61)

5. **Ajustar tamanho da foto**: Remover `max-h-[700px]`, deixar a foto com proporção natural. Adicionar `max-w-full` para garantir que não ultrapasse o container

Resultado: texto e foto ficam com alturas semelhantes, foto centralizada verticalmente, layout equilibrado.

