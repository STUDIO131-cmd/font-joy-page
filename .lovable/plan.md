

## Plano: Glass bar sobreposta ao box escuro

### Alteração em `src/pages/Index.tsx`

**Linha 42**: Aumentar o valor negativo de `-mt-8` para `-mt-12`, puxando o box escuro mais para cima. Como o bloco do perfil/assinatura já tem `z-10`, a glass bar ficará visualmente sobreposta ao topo do box escuro.

```
-mt-8  →  -mt-12
```

Se necessário ajustar mais, pode-se usar `-mt-14`.

