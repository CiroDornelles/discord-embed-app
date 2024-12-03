# Vampire: The Masquerade - Dark Ages Character Sheet

Uma aplicação web para criar e gerenciar fichas de personagem do Vampire: The Masquerade - Dark Ages 20th Anniversary Edition. O projeto visa facilitar a criação e gestão de personagens, oferecendo uma interface intuitiva e moderna, com suporte para exportação para VTTs (Virtual Table Tops) e PDF.

## Objetivos do Projeto

### Segurança e Boas Práticas

#### Autenticação e Autorização
- Implementação de OAuth 2.0 para autenticação
- Sistema de roles (admin, user, guest)
- JWT com rotação de tokens
- Proteção contra session hijacking
- Implementação de 2FA (Two-Factor Authentication)
- Rate limiting para prevenção de força bruta

#### Proteção de Dados
- Criptografia de dados sensíveis em repouso
- Implementação de HTTPS/TLS
- Sanitização de inputs
- Validação de dados com Zod
- Headers de segurança (HSTS, CSP, X-Frame-Options)
- Proteção contra XSS e CSRF

#### Segurança do Código
- Análise estática de código (ESLint com regras de segurança)
- Verificação de dependências (npm audit)
- Secrets management (dotenv, Vault)
- Logging seguro (sem dados sensíveis)
- Testes de segurança automatizados

#### Compliance e Documentação
- Documentação de práticas de segurança
- Política de privacidade
- Termos de uso
- Plano de resposta a incidentes
- GDPR compliance

### Sistema de Atributos 
- Atributos Físicos (Força, Destreza, Vigor)
- Atributos Sociais (Carisma, Manipulação, Aparência)
- Atributos Mentais (Percepção, Inteligência, Raciocínio)

### Sistema de Habilidades 
#### Talentos (Completo)
- [x] Prontidão (Alertness)
- [x] Esportes (Athletics)
- [x] Consciência (Awareness)
- [x] Briga (Brawl)
- [x] Empatia (Empathy)
- [x] Expressão (Expression)
- [x] Intimidação (Intimidation)
- [x] Liderança (Leadership)
- [x] Manha (Subterfuge)
- [x] Lábia (Streetwise)

#### Perícias (Completo)
- [x] Arqueirismo (Archery)
- [x] Ofícios (Crafts)
- [x] Etiqueta (Etiquette)
- [x] Herbalismo (Herbalism)
- [x] Armas de Lâmina (Melee)
- [x] Performance (Performance)
- [x] Cavalgar (Ride)
- [x] Furtividade (Stealth)
- [x] Sobrevivência (Survival)
- [x] Comércio (Commerce)

#### Conhecimentos (Completo)
- [x] Acadêmicos (Academics)
- [x] Sabedoria Popular (Hearth Wisdom)
- [x] Investigação (Investigation)
- [x] Direito (Law)
- [x] Linguística (Linguistics)
- [x] Medicina (Medicine)
- [x] Ocultismo (Occult)
- [x] Política (Politics)
- [x] Senescalia (Seneschal)
- [x] Teologia (Theology)

### Sistema de Backgrounds (Completo)
- [x] Aliados (Allies)
- [x] Identidade Alternativa (Alternate Identity)
- [x] Contatos (Contacts)
- [x] Domínio (Domain)
- [x] Fama (Fame)
- [x] Geração (Generation)
- [x] Rebanho (Herd)
- [x] Influência (Influence)
- [x] Mentor (Mentor)
- [x] Recursos (Resources)
- [x] Servidores (Retainers)
- [x] Status (Status)

### Funcionalidades Planejadas 
- Exportação para diferentes VTTs (Foundry, Roll20)
- Exportação para PDF
- Sistema de tooltips para descrições
- Interface para adicionar especialidades personalizadas
- Validação de dados usando Zod

## Estrutura do Projeto

```
src/
└── data/
    └── wod/
        └── vampire/
            └── v20_dark_ages/
                ├── attributes/
                │   ├── physical.json
                │   ├── social.json
                │   └── mental.json
                └── abilities/
                    ├── talents/
                    ├── skills/
                    └── knowledges/
```

## Formato dos Dados

### Atributos e Habilidades
Cada atributo e habilidade é armazenado em formato JSON com a seguinte estrutura:

```json
{
  "name": "Nome em Português",
  "nameOriginal": "Nome Original em Inglês",
  "flavorText": "Texto descritivo que será exibido em itálico (apenas para habilidades)",
  "description": "Descrição detalhada do atributo/habilidade",
  "levels": {
    "1": {
      "name": "Nome do Nível",
      "description": "Descrição do que é possível neste nível"
    }
  },
  "possessedBy": [
    "Tipo de Personagem 1",
    "Tipo de Personagem 2"
  ],
  "specialties": {
    "default": [
      {
        "id": "specialty-id",
        "name": "Nome da Especialidade",
        "nameOriginal": "Nome Original da Especialidade",
        "description": "Descrição da especialidade"
      }
    ],
    "custom": []
  }
}
```

## Workflow de Desenvolvimento

### Branches

O projeto utiliza um workflow com duas branches principais:

- `main`: Branch principal que contém apenas código estável e testado
- `dev`: Branch de desenvolvimento onde novas features são integradas

### Processo de Desenvolvimento

1. Todo desenvolvimento deve ser feito a partir da branch `dev`
2. Para novas features, criar uma branch específica a partir de `dev`:
   ```bash
   git checkout -b feature/nome-da-feature dev
   ```
3. Após completar a feature, fazer merge na `dev`:
   ```bash
   git checkout dev
   git merge feature/nome-da-feature
   ```
4. Quando `dev` estiver estável, será feito merge na `main`

### Commits

Utilizamos commits semânticos com os seguintes prefixos:
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Alteração em documentação
- `style`: Formatação de código
- `refactor`: Refatoração de código
- `test`: Adição/modificação de testes
- `chore`: Alterações em arquivos de configuração, build, etc.

Exemplo:
```bash
git commit -m "feat: adiciona sistema de especialidades"
```

## Recursos e Links

- [Vampire: The Masquerade - Dark Ages 20th Anniversary](https://www.worldofdarkness.com/dark-ages)
- [World of Darkness](https://www.worldofdarkness.com/)
- [By Night Studios](https://www.bynightstudios.com/)

# Vampire: Dark Ages Character Sheet

A modern, responsive character sheet application for Vampire: The Dark Ages, built with React and Material UI.

![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2016.0.0-brightgreen)
![React Version](https://img.shields.io/badge/react-%5E18.0.0-blue)
![Material UI Version](https://img.shields.io/badge/material--ui-%5E5.0.0-purple)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

- **Modern UI**: Beautiful, responsive design using Material UI
- **Theme System**: Custom Dark Ages vampire theme with consistent styling
- **Interactive Character Sheet**: Dynamic stat tracking and management
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Custom Components**: Themed form controls and card layouts
- **State Management**: Efficient context-based state handling

## Quick Start

### Prerequisites

- Node.js (>= 16.0.0)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/vampire-dark-ages-sheet.git
   cd vampire-dark-ages-sheet
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Technology Stack

- **React**: Frontend library
- **Material UI**: UI component library
- **Vite**: Build tool and development server
- **Context API**: State management
- **Custom Hooks**: Reusable logic
- **CSS-in-JS**: Styled components with Material UI

## Project Structure

```
src/
├── components/
│   ├── characterSheet/    # Character sheet components
│   ├── ui/               # Reusable UI components
│   └── common/           # Shared components
├── contexts/
│   └── character/        # Character state management
├── hooks/                # Custom hooks
├── theme/                # Theme configuration
└── utils/               # Utility functions
```

For detailed documentation, see [Project Structure](./docs/PROJECT_STRUCTURE.md).

## Theming

The application uses a custom Material UI theme designed specifically for Vampire: Dark Ages. Key features include:

- Dark color palette with vampire-themed accents
- Custom typography with medieval-style fonts
- Consistent component styling
- Responsive design utilities

## Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint
- `npm run test`: Run tests

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Follow existing component patterns
- Use Material UI theme variables
- Maintain responsive design
- Write clear component documentation
- Follow commit message conventions

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## Documentation

- [Project Structure](./docs/PROJECT_STRUCTURE.md)
- [Theme System](./docs/THEME_SYSTEM.md)

## Acknowledgments

- Material UI team for the amazing component library
- React team for the excellent frontend library
- The Vampire: Dark Ages community for inspiration and support

```
