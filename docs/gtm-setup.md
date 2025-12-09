# Configuração do Google Tag Manager (GTM)

## 📋 Visão Geral

Este guia mostra como configurar o Google Tag Manager para o site Chalés do Rio Grande, incluindo tags do Google Analytics 4 e Google Ads.

---

## 🚀 Passo 1: Criar Container GTM

### 1.1 Acessar Google Tag Manager

1. Acesse [tagmanager.google.com](https://tagmanager.google.com)
2. Faça login com sua conta Google
3. Clique em **Criar conta**

### 1.2 Configurar Conta

- **Nome da conta**: Chalés do Rio Grande
- **País**: Brasil
- **Compartilhamento de dados**: Conforme preferência

### 1.3 Configurar Container

- **Nome do container**: chalesdoriogrande.com.br
- **Plataforma de destino**: **Web**
- Aceite os Termos de Serviço

### 1.4 Copiar ID do Container

Após criar, você verá um código de instalação com um ID no formato: `GTM-XXXXXXX`

**Copie este ID** - você precisará dele!

---

## 🔧 Passo 2: Configurar Variáveis

### 2.1 Variáveis Integradas

1. No GTM, vá em **Variáveis**
2. Clique em **Configurar** nas Variáveis integradas
3. Marque as seguintes variáveis:
   - ✅ Page URL
   - ✅ Page Path
   - ✅ Page Hostname
   - ✅ Referrer
   - ✅ Click Element
   - ✅ Click Classes
   - ✅ Click ID
   - ✅ Click URL
   - ✅ Click Text

### 2.2 Criar Variável do Google Analytics

1. Clique em **Nova** em Variáveis definidas pelo usuário
2. Escolha tipo: **Configurações do Google Analytics - GA4**
3. Configure:
   - **Nome**: GA4 - Config
   - **ID de avaliação**: Seu ID GA4 (formato: `G-XXXXXXXXXX`)
4. Salve

### 2.3 Criar Variável do Google Ads

1. Clique em **Nova**
2. Escolha tipo: **Constante**
3. Configure:
   - **Nome**: Google Ads - Conversion ID
   - **Valor**: Seu ID Google Ads (formato: `AW-XXXXXXXXXX`)
4. Salve

---

## 🏷️ Passo 3: Configurar Tags

### 3.1 Tag do Google Analytics 4

**Tag 1: GA4 - Configuração**

1. Vá em **Tags** > **Nova**
2. Clique em **Configuração da tag**
3. Escolha: **Google Analytics: Evento GA4**
4. Configure:
   - **Tag de configuração**: Selecione "GA4 - Config" (criada anteriormente)
   - **Nome do evento**: `page_view`
5. Em **Acionamento**, escolha: **All Pages**
6. Nomeie a tag: **GA4 - Page View**
7. Salve

---

**Tag 2: GA4 - WhatsApp Click**

1. **Tags** > **Nova**
2. Tipo: **Google Analytics: Evento GA4**
3. Configure:
   - **Tag de configuração**: GA4 - Config
   - **Nome do evento**: `whatsapp_click`
   - **Parâmetros do evento**:
     - `event_category`: `contact`
     - `contact_method`: `whatsapp`
4. **Acionamento**: Criar novo (veja seção 4.1)
5. Nome: **GA4 - WhatsApp Click**
6. Salve

---

**Tag 3: GA4 - Gallery Interaction**

1. **Tags** > **Nova**
2. Tipo: **Google Analytics: Evento GA4**
3. Configure:
   - **Tag de configuração**: GA4 - Config
   - **Nome do evento**: `gallery_view`
   - **Parâmetros**:
     - `event_category`: `engagement`
4. **Acionamento**: Criar novo (veja seção 4.2)
5. Nome: **GA4 - Gallery View**
6. Salve

---

### 3.2 Tag do Google Ads

**Tag 4: Google Ads - Conversion**

1. **Tags** > **Nova**
2. Tipo: **Acompanhamento de conversões do Google Ads**
3. Configure:
   - **ID de conversão**: {{Google Ads - Conversion ID}} (variável criada)
   - **Rótulo de conversão**: Obtenha no Google Ads (formato: `xxxxx-xxxxx`)
4. **Acionamento**: Mesmo do WhatsApp Click
5. Nome: **Google Ads - WhatsApp Conversion**
6. Salve

> [!NOTE]
> Para obter o rótulo de conversão:
> 1. Vá no Google Ads > Ferramentas > Conversões
> 2. Clique na conversão "Contato WhatsApp"
> 3. Copie o código de tag
> 4. Procure por `send_to: 'AW-XXXXXXXXXX/xxxxx-xxxxx'`
> 5. A parte após a `/` é o rótulo

---

## ⚡ Passo 4: Configurar Acionadores (Triggers)

### 4.1 Acionador: WhatsApp Click

1. Vá em **Acionadores** > **Novo**
2. Tipo: **Clique - Apenas links**
3. Configure:
   - **Este acionador é disparado em**: Alguns cliques em links
   - **Condição**: 
     - `Click URL` contém `wa.me`
4. Nome: **Click - WhatsApp Button**
5. Salve

### 4.2 Acionador: Gallery Click

1. **Acionadores** > **Novo**
2. Tipo: **Clique - Todos os elementos**
3. Configure:
   - **Este acionador é disparado em**: Alguns cliques
   - **Condição**:
     - `Click Classes` contém `gallery` OU
     - `Click Element` corresponde ao seletor CSS `.gallery img`
4. Nome: **Click - Gallery Image**
5. Salve

### 4.3 Acionador: CTA Buttons

1. **Acionadores** > **Novo**
2. Tipo: **Clique - Apenas links**
3. Configure:
   - **Condição**:
     - `Click URL` contém `#disponibilidade` OU `#galeria`
4. Nome: **Click - CTA Buttons**
5. Salve

---

## 🧪 Passo 5: Testar Configuração

### 5.1 Modo de Visualização

1. No GTM, clique em **Visualizar** (canto superior direito)
2. Digite a URL do seu site: `https://chalesdoriogrande.com.br`
3. Clique em **Connect**

### 5.2 Testar Tags

Uma nova janela abrirá com o site + painel de debug do GTM.

**Teste cada interação:**

1. ✅ **Page View**: Deve disparar automaticamente
   - Verifique tag "GA4 - Page View" no painel

2. ✅ **WhatsApp Click**: Clique no botão do WhatsApp
   - Verifique tags "GA4 - WhatsApp Click" e "Google Ads - WhatsApp Conversion"

3. ✅ **Gallery**: Clique em uma foto
   - Verifique tag "GA4 - Gallery View"

4. ✅ **CTAs**: Clique em "Verificar Disponibilidade"
   - Verifique eventos correspondentes

### 5.3 Verificar no GA4

1. Abra Google Analytics 4
2. Vá em **Relatórios** > **Tempo real**
3. Faça as interações no site
4. Veja os eventos aparecendo em tempo real

---

## 🚀 Passo 6: Publicar Container

### 6.1 Enviar Versão

1. No GTM, clique em **Enviar** (canto superior direito)
2. Configure:
   - **Nome da versão**: `v1.0 - Configuração inicial`
   - **Descrição**: `GA4, Google Ads e eventos customizados`
3. Clique em **Publicar**

### 6.2 Adicionar ID ao Site

1. Copie o ID do container (formato: `GTM-XXXXXXX`)
2. No projeto, crie/edite o arquivo `.env.local`:
   ```
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```
3. Reinicie o servidor de desenvolvimento

---

## 📊 Passo 7: Configurações Avançadas (Opcional)

### 7.1 Variáveis de DataLayer

O site já envia eventos via `dataLayer`. Para capturá-los:

1. **Variáveis** > **Nova**
2. Tipo: **Variável da camada de dados**
3. Nome da variável: `eventCategory`
4. Nome da variável de camada de dados: `event_category`

Repita para outros parâmetros customizados.

### 7.2 Acionador de Evento Customizado

1. **Acionadores** > **Novo**
2. Tipo: **Evento personalizado**
3. Nome do evento: `whatsapp_click` (do dataLayer)
4. Use este acionador nas tags

### 7.3 Tag de Scroll Depth

1. **Tags** > **Nova**
2. Tipo: **Google Analytics: Evento GA4**
3. Nome do evento: `scroll`
4. Acionador: **Profundidade de rolagem** (integrado)
   - Porcentagens verticais: 25, 50, 75, 100

---

## 🔍 Troubleshooting

### Tags não disparam

1. ✅ Verifique se o GTM está instalado (inspecione o código fonte)
2. ✅ Use o modo de visualização para debug
3. ✅ Verifique se os acionadores estão corretos
4. ✅ Confirme que a versão foi publicada

### Eventos não aparecem no GA4

1. ✅ Aguarde 24-48h para dados históricos
2. ✅ Use "Tempo real" para verificação imediata
3. ✅ Confirme que o ID do GA4 está correto
4. ✅ Verifique se o GA4 está vinculado ao GTM

### Conversões não aparecem no Google Ads

1. ✅ Verifique ID de conversão e rótulo
2. ✅ Aguarde até 24h para primeira conversão aparecer
3. ✅ Use Google Tag Assistant para debug
4. ✅ Confirme que a conversão está ativa no Google Ads

---

## 📚 Recursos Adicionais

- [Documentação oficial GTM](https://support.google.com/tagmanager)
- [Guia de implementação GA4](https://support.google.com/analytics/answer/9304153)
- [Google Tag Assistant](https://tagassistant.google.com/)
- [GTM Community Template Gallery](https://tagmanager.google.com/gallery/)

---

## ✅ Checklist Final

Antes de considerar a configuração completa:

- [ ] Container GTM criado
- [ ] ID do GTM adicionado ao `.env.local`
- [ ] Variáveis configuradas (GA4, Google Ads)
- [ ] Tag GA4 Page View criada e testada
- [ ] Tag GA4 WhatsApp Click criada e testada
- [ ] Tag Google Ads Conversion criada e testada
- [ ] Acionadores configurados
- [ ] Testes realizados em modo de visualização
- [ ] Eventos aparecendo no GA4 Tempo Real
- [ ] Versão publicada
- [ ] Site em produção com GTM funcionando

**Parabéns! Seu Google Tag Manager está configurado! 🎉**
