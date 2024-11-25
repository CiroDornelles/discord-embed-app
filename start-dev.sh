#!/bin/bash

# Cores e estilos
PURPLE='\033[0;35m'
BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m'
BOLD='\033[1m'

# Função para a barra de progresso
progress_bar() {
    local duration=$1
    local width=50
    local progress=0
    local bar_char="■"
    local empty_char="□"
    
    while [ $progress -lt $width ]; do
        echo -ne "\r[${CYAN}"
        for ((i=0; i<$progress; i++)); do
            echo -n "${bar_char}"
        done
        for ((i=$progress; i<$width; i++)); do
            echo -n "${empty_char}"
        done
        echo -ne "${NC}] $((($progress*100/$width)))%"
        progress=$((progress+1))
        sleep $(echo "scale=3; ${duration}/${width}" | bc)
    done
    echo
}

# Arte ASCII
clear
cat << "EOF"
${PURPLE}
    ____  _                          __   ______          __              __
   / __ \(_)___  _________  _______/ /  / ____/___ ___  / /_  ___  ____/ /
  / / / / / __ \/ ___/ __ \/ ___/ _ \ / __/ / __ '__ \/ __ \/ _ \/ __  / 
 / /_/ / / /_/ (__  ) /_/ / /  /  __// /___/ / / / / / /_/ /  __/ /_/ /  
/_____/_/\____/____/\____/_/   \___//_____/_/ /_/ /_/_.___/\___/\__,_/   
                                                                          
${NC}
EOF

echo -e "${YELLOW}${BOLD}Iniciando ambiente de desenvolvimento...${NC}\n"

# Inicia o Vite
echo -e "${WHITE}${BOLD}[1/2]${NC} ${BLUE}Iniciando servidor Vite...${NC}"
npm run dev &
VITE_PID=$!
progress_bar 2

# Espera o Vite iniciar
sleep 1

# Inicia o Cloudflared
echo -e "\n${WHITE}${BOLD}[2/2]${NC} ${BLUE}Iniciando tunnel Cloudflare...${NC}\n"
echo -e "${YELLOW}${BOLD}Aguardando URL do tunnel...${NC}\n"

# Inicia o cloudflared e captura a URL
cloudflared tunnel --url http://localhost:5173 2>&1 | while read line; do
    if [[ $line == *"trycloudflare.com"* ]]; then
        echo -e "\n${GREEN}${BOLD}✓ Tunnel estabelecido com sucesso!${NC}"
        echo -e "${WHITE}${BOLD}URL do app:${NC} ${CYAN}$(echo $line | grep -o 'https://[^ ]*trycloudflare.com')${NC}\n"
    else
        echo "$line"
    fi
done

# Se pressionar Ctrl+C, mata o processo do Vite também
trap 'echo -e "\n${RED}Encerrando processos...${NC}"; kill $VITE_PID; exit' INT TERM
