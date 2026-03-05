

## Plano: Layout lado a lado — Texto | Foto

### Alteração em `src/pages/Index.tsx` (linhas 87-119)

Trocar o layout vertical centralizado por duas colunas lado a lado:

- **Container**: `flex flex-col md:flex-row items-center md:items-start gap-8`
- **Coluna 1 (texto)**: `md:w-[55%]` com título e parágrafos em `text-justify`
- **Coluna 2 (foto)**: `md:w-[45%] flex items-center justify-center` com a polaroid centralizada verticalmente

Em mobile, mantém empilhado vertical. Em desktop, fica lado a lado.

```
┌─────────────────────────────────────────┐
│  Prazer, Igor Augusto Gagliardi         │
│                                         │
│  Texto justificado...  │   [Polaroid]   │
│  Texto justificado...  │   [  Foto  ]   │
│  Texto justificado...  │               │
└─────────────────────────────────────────┘
```

### Detalhes
- Título fica acima das duas colunas (`w-full`)
- Texto: `text-justify` (remover `text-center max-w-2xl`)
- Polaroid: centralizada na coluna direita com `sticky top-10` ou apenas `flex items-center justify-center h-full`

