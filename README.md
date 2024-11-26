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
#### Talentos (em progresso)
- Prontidão (Alertness)
- Esportes (Athletics)
- Consciência (Awareness)
- Briga (Brawl)
- Empatia (Empathy)
- Expressão (Expression)
- Intimidação (Intimidation)
- Liderança (Leadership)
- Manha (Subterfuge)
- Lábia (Streetwise)

#### Perícias (pendente)
- Arqueirismo (Archery)
- Ofícios (Crafts)
- Etiqueta (Etiquette)
- Herbalismo (Herbalism)
- Armas de Lâmina (Melee)
- Performance (Performance)
- Cavalgar (Ride)
- Furtividade (Stealth)
- Sobrevivência (Survival)
- Comércio (Commerce)

#### Conhecimentos (pendente)
- Acadêmicos (Academics)
- Sabedoria Popular (Hearth Wisdom)
- Investigação (Investigation)
- Direito (Law)
- Linguística (Linguistics)
- Medicina (Medicine)
- Ocultismo (Occult)
- Política (Politics)
- Senescalia (Seneschal)
- Teologia (Theology)

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
