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
