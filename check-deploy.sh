#!/usr/bin/env sh

echo "Verificando status do deploy..."

# Tenta obter o status das últimas execuções
gh run list --limit 5 --json status,name,conclusion,url | grep -i "pages"

# Se não encontrar nada específico, mostra todas as execuções recentes
if [ $? -ne 0 ]; then
    echo "Buscando todas as execuções recentes..."
    gh run list --limit 5
fi

echo "\nVerificando status das páginas..."
gh api /repos/CiroDornelles/discord-embed-app/pages/deployments --jq '.[] | select(.environment == "github-pages") | {status: .status, environment: .environment}'
