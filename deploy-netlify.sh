#!/usr/bin/env sh

# aborta em caso de erros
set -e

# build
npm run build

# deploy para o netlify
echo "Fazendo deploy para o Netlify..."
netlify deploy --prod

echo "Deploy concluído! Verifique a URL acima para acessar seu site."
