# Instruções para Push no GitHub

## Problema Atual

O token fornecido está associado à conta `andersonsouzaia` que não tem permissão para acessar o repositório `geonai/live-consorcios`.

## Soluções

### Opção 1: Criar um novo token (Recomendado)

1. Acesse: https://github.com/settings/tokens
2. Clique em "Generate new token" → "Generate new token (classic)"
3. Configure:
   - **Note**: "Live Consorcios Deploy"
   - **Expiration**: Escolha uma data (ou "No expiration")
   - **Scopes**: Marque `repo` (acesso completo aos repositórios)
4. Clique em "Generate token"
5. Copie o token gerado

### Opção 2: Usar token existente da organização geonai

Se você tem acesso à organização `geonai`, use um token dessa conta.

### Opção 3: Conceder acesso à conta andersonsouzaia

Nas configurações do repositório `geonai/live-consorcios`, adicione a conta `andersonsouzaia` como colaborador.

## Como fazer o push

### Método 1: Usando o script de deploy

```bash
# Configure o token na URL do remote
git remote set-url origin https://SEU_TOKEN_AQUI@github.com/geonai/live-consorcios.git

# Execute o script
./deploy.sh
```

### Método 2: Push manual

```bash
# Configure o remote com o token
git remote set-url origin https://SEU_TOKEN_AQUI@github.com/geonai/live-consorcios.git

# Faça o push
git push -u origin main
```

### Método 3: Usando SSH (Recomendado para produção)

```bash
# Configure SSH key no GitHub
# Depois configure o remote
git remote set-url origin git@github.com:geonai/live-consorcios.git

# Faça o push
git push -u origin main
```

## Status Atual

✅ Repositório Git inicializado
✅ Todos os arquivos commitados
✅ README profissional criado
✅ Script de deploy criado
⏳ Aguardando token com permissões corretas para push

