# Eventos de Analytics - Documentação

## 📊 Visão Geral

Este documento lista todos os eventos customizados rastreados no site Chalés do Rio Grande, seus parâmetros e como visualizá-los no Google Analytics 4.

---

## 🎯 Eventos Implementados

### 1. WhatsApp Click

**Nome do Evento:** `whatsapp_click`

**Quando dispara:** Quando o usuário clica no botão flutuante do WhatsApp

**Parâmetros:**
- `event_category`: `contact`
- `event_label`: `floating_button`
- `contact_method`: `whatsapp`

**Uso:**
- Medir interesse em contato
- Principal conversão do site
- Otimizar campanhas Google Ads

**Como visualizar no GA4:**
1. Relatórios > Engajamento > Eventos
2. Filtrar por `whatsapp_click`
3. Ver detalhes por origem/mídia

---

### 2. Check Availability

**Nome do Evento:** `check_availability`

**Quando dispara:** Quando o usuário interage com a seção de disponibilidade

**Parâmetros:**
- `event_category`: `engagement`
- `event_label`: Data selecionada ou `calendar_opened`
- `interaction_type`: `availability`

**Uso:**
- Medir interesse em reserva
- Identificar datas mais procuradas
- Micro-conversão importante

**Como visualizar no GA4:**
1. Relatórios > Engajamento > Eventos
2. Filtrar por `check_availability`
3. Analisar `event_label` para ver datas populares

---

### 3. Gallery View

**Nome do Evento:** `gallery_view`

**Quando dispara:** Quando o usuário clica em uma foto da galeria

**Parâmetros:**
- `event_category`: `engagement`
- `event_label`: URL da imagem
- `image_index`: Índice da imagem (0-29)

**Uso:**
- Medir engajamento com conteúdo visual
- Identificar fotos mais atrativas
- Indicador de interesse

**Como visualizar no GA4:**
1. Relatórios > Engajamento > Eventos
2. Filtrar por `gallery_view`
3. Ver quais imagens são mais visualizadas

---

### 4. Gallery Interaction

**Nome do Evento:** `gallery_interaction`

**Quando dispara:** Quando o usuário abre/fecha o lightbox da galeria

**Parâmetros:**
- `event_category`: `engagement`
- `event_label`: `open` ou `close`
- `interaction_type`: `gallery`

**Uso:**
- Medir profundidade de engajamento
- Tempo gasto visualizando fotos

---

### 5. CTA Click

**Nome do Evento:** `cta_click`

**Quando dispara:** Quando o usuário clica em botões de Call-to-Action

**Parâmetros:**
- `event_category`: `navigation`
- `event_label`: Texto do botão (ex: "Verificar Disponibilidade")
- `cta_location`: Localização do botão (ex: "hero")

**Uso:**
- Medir efetividade dos CTAs
- Otimizar posicionamento de botões
- A/B testing

**CTAs rastreados:**
- "Verificar Disponibilidade" (Hero)
- "Conhecer o Rancho" (Hero)

**Como visualizar no GA4:**
1. Relatórios > Engajamento > Eventos
2. Filtrar por `cta_click`
3. Segmentar por `cta_location`

---

### 6. Phone Click

**Nome do Evento:** `phone_click`

**Quando dispara:** Quando o usuário clica em link de telefone

**Parâmetros:**
- `event_category`: `contact`
- `event_label`: Origem do clique (ex: "footer")
- `contact_method`: `phone`

**Uso:**
- Medir preferência de contato
- Comparar com WhatsApp

---

### 7. Email Click

**Nome do Evento:** `email_click`

**Quando dispara:** Quando o usuário clica em link de email

**Parâmetros:**
- `event_category`: `contact`
- `event_label`: Origem do clique
- `contact_method`: `email`

**Uso:**
- Medir preferência de contato
- Identificar usuários que preferem email

---

### 8. Scroll Depth

**Nome do Evento:** `scroll_depth`

**Quando dispara:** Quando o usuário rola a página (25%, 50%, 75%, 100%)

**Parâmetros:**
- `event_category`: `engagement`
- `event_label`: Porcentagem (ex: "75%")
- `scroll_percentage`: Valor numérico

**Uso:**
- Medir engajamento com conteúdo
- Identificar onde usuários param de ler
- Otimizar layout da página

---

## 📈 Conversões no Google Ads

### Conversão Principal

**Evento:** `whatsapp_click`

**Configuração no Google Ads:**
1. Ferramentas > Conversões > + Nova conversão
2. Tipo: Site
3. Nome: Contato WhatsApp
4. Categoria: Envio de formulário
5. Valor: R$ 50,00 (estimado)
6. Contagem: Uma por clique

**Função no código:**
```typescript
trackConversion('whatsapp_contact');
```

---

## 🔍 Como Criar Relatórios Personalizados

### Relatório de Funil de Conversão

1. No GA4, vá em **Explorar** > **Análise de funil**
2. Configure as etapas:
   - Etapa 1: `page_view` (Homepage)
   - Etapa 2: `gallery_view` (Visualizou galeria)
   - Etapa 3: `check_availability` (Verificou disponibilidade)
   - Etapa 4: `whatsapp_click` (Converteu)

### Relatório de Engajamento

1. **Explorar** > **Exploração livre**
2. Dimensões: `event_name`, `event_label`
3. Métricas: `event_count`, `total_users`
4. Filtro: `event_category` = `engagement`

### Relatório de Métodos de Contato

1. **Explorar** > **Exploração livre**
2. Dimensões: `contact_method`
3. Métricas: `event_count`
4. Filtro: `event_category` = `contact`

---

## 🛠️ Debug e Testes

### Verificar Eventos em Tempo Real

1. No GA4, vá em **Relatórios** > **Tempo real**
2. Navegue pelo site em outra aba
3. Veja os eventos aparecendo em tempo real

### Usar Google Tag Assistant

1. Instale a extensão [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Abra o site
3. Clique na extensão > **Enable** > **Record**
4. Navegue pelo site
5. Veja todos os eventos sendo disparados

### Console do Navegador

Em modo desenvolvimento, os eventos são logados no console:

```
📊 Analytics Event: whatsapp_click {event_category: "contact", ...}
```

---

## 📊 KPIs Recomendados

### Engajamento
- **Taxa de visualização de galeria**: % de visitantes que clicam na galeria
- **Profundidade de scroll**: % média de scroll
- **Tempo médio na página**: Quanto tempo passam no site

### Conversão
- **Taxa de conversão WhatsApp**: % de visitantes que clicam no WhatsApp
- **Taxa de verificação de disponibilidade**: % que interagem com calendário
- **Funil de conversão**: Visualizações → Galeria → Disponibilidade → WhatsApp

### Comparação de Canais
- **Método de contato preferido**: WhatsApp vs. Phone vs. Email
- **CTA mais efetivo**: Qual botão gera mais cliques

---

## 🔄 Manutenção

### Adicionar Novos Eventos

1. Adicione o evento em `src/lib/analytics-utils.ts`
2. Importe e use no componente relevante
3. Documente aqui neste arquivo
4. Configure como conversão no Google Ads (se aplicável)

### Modificar Eventos Existentes

1. Atualize a função em `analytics-utils.ts`
2. Teste em desenvolvimento
3. Atualize esta documentação
4. Comunique mudanças à equipe

---

## 📞 Suporte

Para dúvidas sobre eventos de analytics:
- Consulte `src/lib/analytics-utils.ts` para implementação
- Veja Google Analytics 4 documentation: [support.google.com/analytics](https://support.google.com/analytics)
