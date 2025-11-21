#!/bin/bash

# Script de Deploy Profissional para GitHub
# Live Consórcios - Geonai

set -e

echo "🚀 Iniciando deploy para GitHub..."

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar se está em um repositório git
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${RED}❌ Erro: Não é um repositório Git${NC}"
    exit 1
fi

# Verificar se há mudanças não commitadas
if ! git diff-index --quiet HEAD --; then
    echo -e "${YELLOW}⚠️  Há mudanças não commitadas. Deseja continuar? (s/n)${NC}"
    read -r response
    if [[ ! "$response" =~ ^[sS]$ ]]; then
        echo "Deploy cancelado."
        exit 0
    fi
fi

# Verificar branch
CURRENT_BRANCH=$(git branch --show-current)
echo -e "${GREEN}✓ Branch atual: ${CURRENT_BRANCH}${NC}"

# Fazer push
echo -e "${GREEN}📤 Fazendo push para GitHub...${NC}"
if git push -u origin "$CURRENT_BRANCH"; then
    echo -e "${GREEN}✅ Deploy realizado com sucesso!${NC}"
    echo -e "${GREEN}🔗 Repositório: https://github.com/geonai/live-consorcios${NC}"
else
    echo -e "${RED}❌ Erro ao fazer push${NC}"
    echo -e "${YELLOW}💡 Dica: Verifique se o token tem permissões corretas${NC}"
    exit 1
fi

