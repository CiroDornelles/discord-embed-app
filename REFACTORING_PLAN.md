# Plano de Refatoração - Discord Embed App

## 0. Análise Detalhada do Estado Atual

### 0.1 Componentes MUI Utilizados
- Box (layout)
- Typography (textos)
- Card/CardContent (containers)
- TextField (inputs)
- Paper (containers)
- Grid (layout)
- Tooltip (UI/UX)
- IconButton (interação)
- Menu/MenuItem (UI)
- Checkbox (formulários)
- ThemeProvider (tema)
- CssBaseline (reset)

### 0.2 Paleta de Cores Atual
- Primária: #8b0000 (vermelho escuro)
- Secundária: #3d0000 (vermelho mais escuro)
- Background: #000000 (preto)
- Texto: #ffffff (branco)
- Variações:
  - Hover/Focus: rgba(139, 0, 0, 0.2) a rgba(139, 0, 0, 0.5)
  - Disabled: rgba(139, 0, 0, 0.1)

### 0.3 Padrões de Estilo Identificados
- Cards com borda vermelha escura
- Títulos em MedievalSharp
- Gradientes em bordas
- Efeitos hover com transform e shadow
- Grid patterns com linhas vermelhas
- Swiper com efeito coverflow

## 1. Sistema de Design Centralizado

### 1.1 Theme Provider (src/theme/index.js)
- [ ] Definir paleta de cores:
  ```javascript
  const colors = {
    primary: {
      main: '#8b0000',
      dark: '#3d0000',
      light: '#a52a2a',
      hover: 'rgba(139, 0, 0, 0.2)',
    },
    background: {
      default: '#000000',
      paper: '#0a0a0a',
      elevated: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
    },
    border: {
      primary: '#3d0000',
      hover: '#8b0000',
    }
  }
  ```

- [ ] Definir tipografia:
  ```javascript
  const typography = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: 'MedievalSharp, cursive',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
    // ... outros níveis
  }
  ```

- [ ] Definir espaçamentos:
  ```javascript
  const spacing = {
    unit: 8,
    card: {
      padding: 24,
      gap: 16,
    },
    section: {
      margin: 32,
      gap: 24,
    }
  }
  ```

- [ ] Definir breakpoints:
  ```javascript
  const breakpoints = {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    }
  }
  ```

### 1.2 Mixins (src/theme/mixins.js)
- [ ] Criar mixins para efeitos comuns:
  ```javascript
  const mixins = {
    cardHover: {
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 12px rgba(139, 0, 0, 0.3)',
      }
    },
    vampireGradient: {
      backgroundImage: 'linear-gradient(rgba(139, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 0, 0, 0.05) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
    },
    // ... outros mixins
  }
  ```

### 1.3 Componentes Base Estilizados (src/components/common/styled)

#### 1.3.1 BaseCard.jsx
```javascript
const BaseCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.palette.border.primary}`,
  height: '100%',
  minWidth: '250px',
  ...theme.mixins.cardHover,
  ...theme.mixins.vampireGradient,
}));
```

#### 1.3.2 BaseTextField.jsx
```javascript
const BaseTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: theme.palette.text.primary,
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.primary.main,
    fontFamily: theme.typography.h1.fontFamily,
  },
  // ... outros estilos
}));
```

## 2. HOCs e Hooks Utilitários

### 2.1 HOCs (src/hocs)

#### 2.1.1 withMobileSwiper.jsx
- [ ] Criar HOC para gerenciar responsividade do Swiper
- [ ] Extrair configurações comuns do Swiper
- [ ] Implementar props customizáveis

#### 2.1.2 withVampireCard.jsx
- [ ] Criar HOC para estilização padrão de cards
- [ ] Implementar props para customização
- [ ] Gerenciar estados comuns

### 2.2 Hooks Customizados (src/hooks)

#### 2.2.1 useFormField.js
- [ ] Gerenciar estado do campo
- [ ] Validação
- [ ] Formatação
- [ ] Integração com context

#### 2.2.2 useCharacterField.js
- [ ] Integração com CharacterContext
- [ ] Lógica de atualização
- [ ] Validações específicas

## 3. Refatoração dos Componentes

### 3.1 Ordem de Refatoração
1. Componentes Base
2. Cards Simples (BasicInfoCard)
3. Cards Complexos (VampireInfoCard)
4. Seções (AttributesSection)
5. Layout Principal

### 3.2 Checklist por Componente
- [ ] Migrar estilos para theme
- [ ] Implementar componentes base
- [ ] Utilizar hooks customizados
- [ ] Testar responsividade
- [ ] Validar acessibilidade
- [ ] Documentar props e uso

## 4. Testes e Validação

### 4.1 Testes Unitários
- [ ] Componentes base
- [ ] Hooks
- [ ] HOCs
- [ ] Utilitários

### 4.2 Testes de Integração
- [ ] Fluxos de formulário
- [ ] Responsividade
- [ ] Temas e estilos

### 4.3 Performance
- [ ] Análise de re-renders
- [ ] Bundle size
- [ ] Lazy loading
- [ ] Code splitting

## 5. Documentação

### 5.1 Storybook (opcional)
- [ ] Configurar Storybook
- [ ] Documentar componentes
- [ ] Criar exemplos de uso

### 5.2 README e Docs
- [ ] Atualizar README
- [ ] Documentar tema
- [ ] Guia de contribuição
- [ ] Exemplos de uso

## Notas de Implementação

1. **Prioridades**:
   - Primeiro estabelecer o tema
   - Depois componentes base
   - Por último refatorar componentes existentes

2. **Compatibilidade**:
   - Manter props existentes
   - Não quebrar funcionalidades
   - Migração gradual

3. **Performance**:
   - Usar memo quando necessário
   - Lazy load para componentes grandes
   - Otimizar imports

4. **Qualidade**:
   - ESLint para consistência
   - Prettier para formatação
   - PropTypes ou TypeScript
   - Testes para componentes críticos

## Benefícios Esperados

1. **Desenvolvimento**:
   - Código mais limpo
   - Menos duplicação
   - Melhor manutenibilidade

2. **Performance**:
   - Bundle menor
   - Menos re-renders
   - Melhor caching

3. **UX**:
   - Consistência visual
   - Melhor responsividade
   - Feedback mais claro

4. **Manutenção**:
   - Documentação clara
   - Código padronizado
   - Testes confiáveis
