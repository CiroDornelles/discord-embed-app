# Sistema de Temas - Documentação Técnica

## Visão Geral
O sistema de temas da aplicação Vampire Dark Ages é construído sobre o Material-UI com personalizações específicas para criar uma atmosfera medieval e gótica. O sistema utiliza o Context API do React para gerenciar o estado global do tema, permitindo mudanças dinâmicas e imediatas em toda a aplicação.

## Componentes Principais

### 1. ThemeContext
- **Localização**: `src/context/ThemeContext.jsx`
- **Propósito**: Gerencia o estado global do tema usando Context API
- **Funcionalidades**:
  - Provê o tema atual para toda a aplicação
  - Gerencia a mudança de temas
  - Persiste a escolha do usuário no localStorage
- **API**:
  ```javascript
  const {
    theme,            // Objeto do tema atual (MUI theme)
    currentThemeType, // String identificando o tema ('light', 'dark', 'vampireDarkAges')
    setTheme,         // Função para alterar o tema
    availableThemes   // Array de temas disponíveis
  } = useThemeContext();
  ```

### 2. ThemeSwitcher
- **Localização**: `src/components/common/ThemeSwitcher.jsx`
- **Propósito**: Interface para troca de temas
- **Funcionalidades**:
  - Exibe o tema atual
  - Permite a seleção de um novo tema
  - Atualiza o tema imediatamente ao selecionar

## Temas Disponíveis

### 1. Tema Light
- **Arquivo**: `src/theme/themes/light.js`
- **Características**:
  - Paleta de cores clara e profissional
  - Criado com MUI createTheme
  - Otimizado para legibilidade

### 2. Tema Dark
- **Arquivo**: `src/theme/themes/dark.js`
- **Características**:
  - Paleta de cores escura
  - Alto contraste
  - Redução de fadiga visual

### 3. Tema Vampire Dark Ages
- **Arquivo**: `src/theme/themes/vampireDarkAges.js`
- **Características**:
  - Paleta gótica medieval
  - Cores principais em tons de vermelho sangue
  - Fonte MedievalSharp para títulos
  - Elementos estilizados para atmosfera vampírica

## Estrutura de Arquivos
```
src/
├── context/
│   └── ThemeContext.jsx    # Contexto global do tema
├── theme/
│   ├── themes/
│   │   ├── index.js        # Exporta todos os temas
│   │   ├── light.js        # Tema claro
│   │   ├── dark.js         # Tema escuro
│   │   └── vampireDarkAges.js # Tema principal
│   └── colors.js           # Definições de cores
└── components/
    └── common/
        └── ThemeSwitcher.jsx # Componente de troca de tema
```

## Uso do Tema

### Em Componentes
```jsx
import { useThemeContext } from '../../context/ThemeContext';

const MyComponent = () => {
  const { theme, currentThemeType } = useThemeContext();
  
  return (
    <Box sx={{ 
      bgcolor: 'background.default',
      color: 'text.primary'
    }}>
      Conteúdo
    </Box>
  );
};
```

### Mudança de Tema
```jsx
import { useThemeContext } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { setTheme } = useThemeContext();
  
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };
  
  return (
    <Button onClick={() => handleThemeChange('dark')}>
      Mudar para Tema Escuro
    </Button>
  );
};
```

## Boas Práticas
1. **Uso do Contexto**:
   - Sempre use o hook useThemeContext para acessar o tema
   - Evite prop drilling de propriedades do tema
   - Mantenha a lógica de tema no nível mais alto possível

2. **Estilização**:
   - Use as propriedades do tema MUI (sx prop)
   - Evite estilos inline ou hardcoded
   - Mantenha consistência com o sistema de design

3. **Performance**:
   - Evite recálculos desnecessários de tema
   - Use React.memo quando apropriado
   - Mantenha os componentes puros

## Troubleshooting
1. **Tema não atualiza imediatamente**:
   - Verifique se está usando useThemeContext
   - Confirme que o componente está dentro do ThemeProvider
   - Verifique se não há múltiplos ThemeProviders

2. **Estilos inconsistentes**:
   - Use sempre as propriedades do tema
   - Verifique a ordem dos providers
   - Confirme que está usando as cores corretas do tema

## Futuras Melhorias
1. **Temas Adicionais**:
   - Temas específicos para clãs
   - Temas sazonais
   - Temas customizáveis pelo usuário

2. **Performance**:
   - Lazy loading de temas
   - Otimização de re-renderizações
   - Melhor cache de preferências
