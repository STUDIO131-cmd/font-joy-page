

## Plano: Atualizar bio — texto, título e foto polaroid

### 1. Atualizar título (linha 90-92)
Trocar "Prazer, eu\<br/\>sou Igor." por "Prazer, Igor Augusto Gagliardi" em uma única linha, com tamanho maior (`text-3xl md:text-4xl lg:text-5xl`).

### 2. Atualizar textos da bio (linhas 94-127)
Substituir todos os parágrafos pelo novo conteúdo fornecido pelo usuário (12 parágrafos).

### 3. Foto em polaroid vintage (linhas 131-139)
Transformar o container da foto em um efeito polaroid:
- Fundo branco/creme (`bg-[#f5f0e8]`) com padding assimétrico (mais embaixo, como polaroid real): `p-3 pb-10`
- Sombra suave e rotação leve (`rotate-1 shadow-lg`)
- Bordas arredondadas no container externo (`rounded-sm`)
- Foto com bordas levemente arredondadas (`rounded-sm`)
- Textura de papel antigo via pseudo-elemento com grain sutil

### 4. Layout — centralizar e reduzir foto
Mudar de layout lado-a-lado (55%/45%) para layout empilhado vertical centralizado:
- Texto ocupa `w-full text-center` (ou `text-left` mantendo o estilo atual)
- Polaroid centralizada abaixo do texto, com `max-w-xs` para ser menor

### Alterações em arquivos

**`src/pages/Index.tsx`** — linhas 87-140:
- Layout: `flex-col items-center` (remover `md:flex-row`)
- Texto: conteúdo atualizado, título em linha única e maior
- Foto: envolver em div polaroid com styling vintage

**`src/index.css`** — adicionar classe `.polaroid-texture` com grain sutil para simular papel antigo.

