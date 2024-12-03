#!/bin/bash

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Iniciando instalação do Penpot...${NC}"

# Criar diretório para o Penpot
echo -e "${BLUE}Criando diretório para o Penpot...${NC}"
mkdir -p ~/penpot
cd ~/penpot

# Download do docker-compose.yaml oficial do Penpot
echo -e "${BLUE}Baixando arquivo docker-compose.yaml oficial...${NC}"
wget https://raw.githubusercontent.com/penpot/penpot/main/docker/docker-compose.yaml

# Verificar se o Docker está instalado
if ! command -v docker &> /dev/null; then
    echo -e "${BLUE}Docker não encontrado. Instalando Docker...${NC}"
    # Instalar dependências necessárias
    sudo apt-get update
    sudo apt-get install -y \
        ca-certificates \
        curl \
        gnupg \
        lsb-release

    # Adicionar chave GPG oficial do Docker
    sudo mkdir -p /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

    # Configurar repositório
    echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

    # Instalar Docker Engine
    sudo apt-get update
    sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

    # Iniciar e habilitar Docker
    sudo systemctl start docker
    sudo systemctl enable docker

    # Adicionar usuário atual ao grupo docker
    sudo usermod -aG docker $USER
    echo -e "${BLUE}Por favor, faça logout e login novamente para que as mudanças do grupo docker tenham efeito.${NC}"
fi

# Verificar se o Docker Compose está instalado
if ! command -v docker-compose &> /dev/null; then
    echo -e "${BLUE}Docker Compose não encontrado. Instalando...${NC}"
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
fi

# Iniciar os containers
echo -e "${BLUE}Iniciando containers do Penpot...${NC}"
docker-compose up -d

# Verificar se os containers estão rodando
echo -e "${BLUE}Verificando status dos containers...${NC}"
docker-compose ps

echo -e "${GREEN}Instalação concluída!${NC}"
echo -e "${GREEN}O Penpot estará disponível em: http://localhost:9001${NC}"
echo -e "${GREEN}Aguarde alguns minutos para que todos os serviços iniciem completamente.${NC}"
