# 🚀 Guia de Deploy para Produção

Este guia mostra como fazer o deploy do site com todas as configurações de analytics (Google Analytics 4, Google Ads e Google Tag Manager).

---

## 📋 Pré-requisitos

Antes de fazer o deploy, certifique-se de que:

- ✅ Todas as variáveis de ambiente estão configuradas
- ✅ O código foi testado localmente
- ✅ O servidor VPS está acessível (45.63.90.69)

---

## 🔐 Variáveis de Ambiente para Produção

Você precisa configurar as seguintes variáveis de ambiente no servidor de produção:

```bash
NEXT_PUBLIC_GTM_ID=GTM-K27KCPRM
NEXT_PUBLIC_GA_ID=G-1QWTG63QQS
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-1779234799
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=NW32CNvD6s4bEJfdhqRC
```

---

## 🐳 Deploy com Docker (Método Atual)

### Passo 1: Commit e Push das Alterações

```bash
# Verificar arquivos modificados
git status

# Adicionar arquivos
git add .

# Commit
git commit -m "feat: add Google Analytics, Google Ads and GTM tracking"

# Push para o repositório
git push origin main
```

### Passo 2: Conectar ao Servidor VPS

```bash
ssh root@45.63.90.69
```

### Passo 3: Navegar até o Diretório do Projeto

```bash
cd /path/to/site-chales-do-rio-grande
```

### Passo 4: Atualizar o Código

```bash
git pull origin main
```

### Passo 5: Configurar Variáveis de Ambiente

Crie ou edite o arquivo `.env.local` no servidor:

```bash
nano .env.local
```

Cole as variáveis de ambiente:

```env
NEXT_PUBLIC_GTM_ID=GTM-K27KCPRM
NEXT_PUBLIC_GA_ID=G-1QWTG63QQS
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-1779234799
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=NW32CNvD6s4bEJfdhqRC
```

Salve e feche (Ctrl+O, Enter, Ctrl+X).

### Passo 6: Rebuild e Restart do Container Docker

```bash
# Parar o container atual
docker-compose down

# Rebuild da imagem
docker-compose build --no-cache

# Iniciar o container
docker-compose up -d
```

### Passo 7: Verificar os Logs

```bash
docker-compose logs -f
```

Aguarde até ver a mensagem:
```
✓ Ready in XXXms
```

---

## ✅ Verificação Pós-Deploy

### 1. Testar o Site

Acesse: https://chalesdoriogrande.com.br

### 2. Verificar Scripts de Tracking

Abra o DevTools (F12) e verifique:

1. **Console**: Procure por logs de eventos analytics
2. **Network**: Verifique se há requisições para:
   - `googletagmanager.com/gtm.js?id=GTM-K27KCPRM`
   - `google-analytics.com/g/collect`
   - `googleadservices.com`

### 3. Testar Eventos

1. Clique no botão do WhatsApp
2. Verifique no console se aparece:
   ```
   📊 Analytics Event: whatsapp_click
   🎯 Conversion tracked: whatsapp_contact
   ```

### 4. Verificar no Google Analytics (Tempo Real)

1. Acesse: https://analytics.google.com
2. Vá em **Relatórios** → **Tempo real**
3. Navegue pelo site e veja se os eventos aparecem

### 5. Verificar no Google Tag Manager

1. Acesse: https://tagmanager.google.com
2. Selecione o container `chalesdoriogrande.com.br`
3. Clique em **Preview** (modo de visualização)
4. Digite a URL do site: `https://chalesdoriogrande.com.br`
5. Navegue e veja os eventos sendo disparados

---

## 🔧 Troubleshooting

### Problema: Scripts não estão carregando

**Solução:**
1. Verifique se as variáveis de ambiente estão corretas no servidor
2. Faça rebuild do container: `docker-compose build --no-cache`
3. Limpe o cache do navegador (Ctrl+Shift+Delete)

### Problema: Eventos não aparecem no GA4

**Solução:**
1. Aguarde até 24 horas (pode haver delay)
2. Verifique se o GTM está publicado (não apenas em Preview)
3. Configure as tags no GTM seguindo `docs/gtm-setup.md`

### Problema: Porta 3001 em vez de 3000

**Solução:**
1. Verifique se há outro processo usando a porta 3000
2. Atualize o `docker-compose.yml` se necessário

---

## 📊 Próximos Passos Após Deploy

1. **Configurar Google Tag Manager**
   - Seguir o guia: `docs/gtm-setup.md`
   - Criar tags para GA4 e Google Ads
   - Publicar o container

2. **Criar Campanhas Google Ads**
   - Seguir o guia: `docs/google-ads-strategy.md`
   - Configurar campanhas de Pesquisa
   - Definir orçamento e lances

3. **Monitorar Resultados**
   - Verificar relatórios no GA4 diariamente
   - Acompanhar conversões no Google Ads
   - Otimizar campanhas baseado em dados

---

## 📝 Notas Importantes

- ⚠️ **NUNCA** commite o arquivo `.env.local` no Git
- ⚠️ As variáveis `NEXT_PUBLIC_*` são expostas no cliente (isso é normal)
- ⚠️ Aguarde 24-48h para dados completos no GA4
- ✅ O GTM precisa ser configurado E publicado para funcionar completamente

---

## 🆘 Suporte

Se encontrar problemas:

1. Verifique os logs: `docker-compose logs -f`
2. Consulte a documentação:
   - `docs/gtm-setup.md`
   - `docs/analytics-events.md`
   - `docs/google-ads-strategy.md`
3. Teste localmente primeiro: `npm run dev`
