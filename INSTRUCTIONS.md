# Discord Embedded App - Instruções

## Links Importantes
- Documentação Oficial: https://discord.com/developers/docs/activities/building-an-activity
- SDK do Discord: https://discord.com/developers/docs/activities/sdk-starter-kit

## Configuração Inicial

### 1. Configuração do Projeto
```bash
# Instalar dependências
npm install @discord/embedded-app-sdk

# Iniciar o ambiente de desenvolvimento (usando script automatizado)
./start-dev.sh
```

O script `start-dev.sh` automaticamente:
- Inicia o servidor Vite
- Cria o túnel HTTPS com cloudflared
- Exibe a URL pública do seu app
- Gerencia o encerramento dos processos quando você pressionar Ctrl+C

> Nota: A URL do cloudflared será exibida no terminal após o script iniciar. Use esta URL para configurar no Portal do Discord.

### 2. Configuração no Portal do Discord
1. Acesse [Discord Developer Portal](https://discord.com/developers/applications)
2. Selecione sua aplicação
3. Em "Activities":
   - Vá em "Settings"
   - Configure "Activity Type" como "Embedded App"
   - Defina um "Activity Name"
   - (Opcional) Adicione um ícone e imagem de fundo

4. Em "URL Mappings":
   - Adicione um novo mapeamento
   - Base URL: sua URL do cloudflared (ex: https://xxxx-xxxx-xxxx.trycloudflare.com)
   - Path Pattern: /*

### 3. Adicionar App ao Servidor
1. No Portal do Desenvolvedor:
   - Vá em "OAuth2"
   - Em "Scopes", selecione "applications.commands"
   - Copie a URL gerada
   - Use a URL para adicionar o app ao seu servidor

### 4. Iniciar a Atividade
1. Entre em um canal de voz no Discord
2. Clique no ícone "+" ao lado do nome do canal
3. Selecione seu app da lista de atividades

## Dicas Importantes
- A URL do cloudflared muda a cada reinício do tunnel
- Atualize a URL no Portal do Discord sempre que ela mudar
- O SDK só inicializa quando o app está rodando dentro do Discord
- Use o parâmetro frame_id na URL para detectar se está no Discord

## Código Básico
```javascript
import { DiscordSDK } from '@discord/embedded-app-sdk'

// Inicializa o SDK apenas se estiver no Discord
let sdk = null
if (new URLSearchParams(window.location.search).has('frame_id')) {
  sdk = new DiscordSDK('SEU_CLIENT_ID')
}
```

## Troubleshooting
- Se o app não aparecer na lista de atividades:
  1. Verifique se o app está adicionado ao servidor
  2. Confirme se "Activity Type" está como "Embedded App"
  3. Verifique se o URL Mapping está correto
  4. Confirme suas permissões no servidor

## Recursos Adicionais
- [Discord Developer Portal](https://discord.com/developers/applications)
- [Discord Developer Documentation](https://discord.com/developers/docs)
- [Discord SDK Reference](https://discord.com/developers/docs/activities/sdk-starter-kit)

## Objetivos do Projeto

### 1. Sistema de Atributos 
- [x] Atributos Físicos (Força, Destreza, Vigor)
- [x] Atributos Sociais (Carisma, Manipulação, Aparência)
- [x] Atributos Mentais (Percepção, Inteligência, Raciocínio)

### 2. Sistema de Habilidades 
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

### 3. Sistema de Backgrounds (Completo)
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

### 4. Estrutura de Dados 
- [x] Formato JSON para atributos
- [x] Formato JSON para habilidades incluindo:
  - História de exemplo (flavor text)
  - Descrição da habilidade
  - Níveis de proficiência (1-5)
  - Tipos de personagens que a possuem
  - Especialidades padrão
- [ ] Sistema para especialidades personalizadas

### 5. Funcionalidades Planejadas 
- [ ] Exportação para diferentes VTTs (Foundry, Roll20)
- [ ] Exportação para PDF
- [ ] Sistema de tooltips para descrições
- [ ] Interface para adicionar especialidades personalizadas
- [ ] Validação de dados usando Zod

### 6. Organização do Projeto 
- [x] Estrutura de diretórios para diferentes jogos do World of Darkness
- [x] Separação por versões (V20, Dark Ages)
- [x] Organização modular dos componentes

## Estrutura de Diretórios

```
src/
└── data/
    └── wod/
        └── vampire/
            ├── v20/
            │   └── attributes/
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
  "flavorText": "Texto descritivo que será exibido em itálico",
  "description": "Descrição detalhada do atributo/habilidade",
  "levels": {
    "1": {
      "name": "Nome do Nível",
      "description": "Descrição do que é possível neste nível"
    }
    // ... níveis 2-5
  },
  "possessedBy": [
    "Tipo de Personagem 1",
    "Tipo de Personagem 2"
  ],
  "specialties": [
    {
      "name": "Nome da Especialidade",
      "nameOriginal": "Nome Original da Especialidade"
    }
  ]
}
```

## Próximos Passos
1. Resolver problemas com o arquivo alertness.json
2. Continuar a implementação das habilidades de Talentos
3. Desenvolver o sistema de especialidades personalizadas
4. Começar a implementação das funcionalidades planejadas
