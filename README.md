# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Vampire: The Masquerade - Dark Ages Character Sheet

Uma aplicação para gerenciar fichas de personagem do Vampire: The Masquerade - Dark Ages 20th Anniversary Edition.

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

- [Discord Developer Portal](https://discord.com/developers/applications)
- [Discord Developer Documentation](https://discord.com/developers/docs)
- [Discord SDK Reference](https://discord.com/developers/docs/activities/sdk-starter-kit)
