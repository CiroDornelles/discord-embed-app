#!/usr/bin/env sh

# aborta em caso de erros
set -e

# garante que estamos na branch dev
git checkout dev

# remove a pasta dist se existir
rm -rf dist

# build
npm run build

# navega até o diretório de build
cd dist

# inicializa um novo repositório git
git init
git add -A
git commit -m 'deploy from dev branch'

# força o push para o branch gh-pages
git push -f git@github.com:CiroDornelles/discord-embed-app.git master:gh-pages

cd -

echo "Deploy concluído! Seu site estará disponível em alguns minutos em https://cirodornelles.github.io/discord-embed-app/"
