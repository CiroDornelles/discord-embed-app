# Estilos e Utilitários CSS

Este documento descreve as variáveis CSS e classes utilitárias disponíveis no projeto.

## Variáveis CSS

### Cores
- `--primary-color`: #8b0000 - Cor principal do tema (vermelho escuro)
- `--primary-dark`: #3d0000 - Versão mais escura da cor principal
- `--background`: #000000 - Cor de fundo
- `--text`: #ffffff - Cor do texto

### Sombras
- `--shadow-sm`: Sombra leve para elementos
- `--shadow-md`: Sombra média para elementos em hover

### Transições
- `--transition-fast`: 0.2s ease-in-out
- `--transition-normal`: 0.3s ease-in-out

### Espaçamento
- `--spacing-xs`: 0.25rem
- `--spacing-sm`: 0.5rem
- `--spacing-md`: 1rem
- `--spacing-lg`: 1.5rem
- `--spacing-xl`: 2rem

### Bordas
- `--border-radius-sm`: 0.25rem
- `--border-radius-md`: 0.5rem
- `--border-radius-lg`: 1rem

### Z-index
- `--z-modal`: 1000
- `--z-popup`: 900
- `--z-header`: 800
- `--z-dropdown`: 700

## Classes Utilitárias

### Animações
- `.animate-fade-in`: Fade in suave
- `.animate-slide-in`: Slide in com fade
- `.transition-all`: Transição suave em todas as propriedades

### Performance
- `.gpu-accelerated`: Ativa aceleração de GPU
  ```css
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
  ```

## Boas Práticas

1. **Performance**
   - Use `transform` e `opacity` para animações
   - Evite animar propriedades que causam reflow (como `width`, `height`, `top`, `left`)
   - Utilize a classe `.gpu-accelerated` em elementos que precisam de animações suaves

2. **Responsividade**
   - Use as variáveis de espaçamento para manter consistência
   - Adapte os valores para diferentes breakpoints usando media queries

3. **Manutenção**
   - Sempre use as variáveis CSS ao invés de valores hardcoded
   - Mantenha as animações em arquivos separados
   - Documente novas variáveis e classes neste arquivo

## Compatibilidade

O projeto inclui fallbacks para diferentes navegadores:
- Firefox: Customização de scrollbar usando `scrollbar-width`
- Webkit (Chrome/Safari): Customização usando `::-webkit-scrollbar`
- Edge: Suporte a todas as propriedades modernas

## Exemplos de Uso

```jsx
// Exemplo de card com animação
<Box className="animate-fade-in gpu-accelerated">
  <Card sx={{ 
    backgroundColor: 'var(--background)',
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition-normal)'
  }}>
    {/* Conteúdo do card */}
  </Card>
</Box>
```
