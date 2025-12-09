# Estratégia Google Ads - Chalés do Rio Grande

## 📋 Índice

1. [Configuração Inicial](#configuração-inicial)
2. [Estrutura de Campanhas](#estrutura-de-campanhas)
3. [Palavras-chave Estratégicas](#palavras-chave-estratégicas)
4. [Textos de Anúncios](#textos-de-anúncios)
5. [Orçamento e Lances](#orçamento-e-lances)
6. [Públicos e Remarketing](#públicos-e-remarketing)
7. [Otimização Contínua](#otimização-contínua)

---

## 🚀 Configuração Inicial

### 1. Criar Conta Google Ads

1. Acesse [ads.google.com](https://ads.google.com)
2. Clique em "Começar agora"
3. Configure informações da empresa:
   - Nome: Chalés do Rio Grande
   - Site: https://chalesdoriogrande.com.br
   - Fuso horário: (UTC-03:00) Brasília
   - Moeda: Real brasileiro (BRL)

### 2. Configurar Conversões

> [!IMPORTANT]
> As conversões já estão implementadas no site via código. Você só precisa configurá-las no painel do Google Ads.

**Passo a passo:**

1. No Google Ads, vá em **Ferramentas e Configurações** > **Conversões**
2. Clique em **+ Nova ação de conversão**
3. Selecione **Site**
4. Configure a conversão principal:
   - **Nome**: Contato WhatsApp
   - **Categoria**: Envio de formulário de contato
   - **Valor**: Usar o mesmo valor para cada conversão = R$ 50,00 (estimativa)
   - **Contagem**: Uma por clique
   - **Janela de conversão**: 30 dias
   - **Modelo de atribuição**: Baseado em dados (recomendado)

5. Copie o **ID de conversão** (formato: `AW-XXXXXXXXXX`)
6. Adicione ao arquivo `.env.local`:
   ```
   NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
   ```

### 3. Vincular Google Analytics

1. Em **Ferramentas e Configurações** > **Contas vinculadas**
2. Encontre **Google Analytics (GA4)** e clique em **Detalhes**
3. Vincule sua propriedade GA4
4. Ative a importação de conversões do GA4

---

## 🎯 Estrutura de Campanhas

### Campanha 1: Pesquisa - Intenção Alta

**Objetivo**: Capturar pessoas procurando ativamente por chalés/ranchos

**Configurações:**
- **Tipo**: Pesquisa
- **Meta**: Conversões (Contato WhatsApp)
- **Rede**: Apenas Pesquisa Google (desabilitar parceiros)
- **Localização**: 
  - Miguelópolis, SP (raio de 50km)
  - Ribeirão Preto, SP
  - Franca, SP
  - São José do Rio Preto, SP
  - Barretos, SP
- **Idioma**: Português
- **Estratégia de lance**: Maximizar conversões (depois migrar para CPA desejado)

**Grupos de Anúncios:**

1. **Aluguel Chalés - Genérico**
   - Palavras-chave de intenção geral
   
2. **Aluguel Chalés - Localização**
   - Palavras-chave com localização específica
   
3. **Fim de Semana/Feriado**
   - Palavras-chave sazonais

4. **Eventos/Família**
   - Palavras-chave para eventos específicos

---

### Campanha 2: Performance Max

**Objetivo**: Alcançar usuários em todos os canais Google (YouTube, Gmail, Display, etc.)

> [!TIP]
> Performance Max usa IA do Google para otimizar automaticamente. É a campanha mais recomendada atualmente.

**Configurações:**
- **Tipo**: Performance Max
- **Meta**: Conversões
- **Orçamento**: 50% do orçamento total
- **Localização**: Mesma da Campanha 1

**Assets necessários:**
- **Títulos** (15): Veja seção [Textos de Anúncios](#textos-de-anúncios)
- **Descrições** (5): Veja seção [Textos de Anúncios](#textos-de-anúncios)
- **Imagens**: Use fotos da galeria do site
  - 4 imagens landscape (1.91:1) - 1200x628px
  - 4 imagens quadradas (1:1) - 1200x1200px
  - 1 logo (1:1) - 1200x1200px
- **Vídeos** (opcional): Crie um vídeo curto (15-30s) mostrando o rancho

**Sinais de público:**
- Interesses: Turismo, Viagens, Pesca, Natureza
- Dados demográficos: Famílias, 25-54 anos
- Segmentos personalizados: Visitantes do site (remarketing)

---

### Campanha 3: Display - Remarketing

**Objetivo**: Reengajar visitantes do site que não converteram

**Configurações:**
- **Tipo**: Display
- **Meta**: Conversões
- **Orçamento**: 20% do orçamento total
- **Público**: Visitantes do site nos últimos 30 dias (excluir conversões)

---

## 🔑 Palavras-chave Estratégicas

### Grupo 1: Aluguel Chalés - Genérico

**Correspondência Ampla:**
```
aluguel de chalés
aluguel de rancho
rancho para alugar
chalé para alugar
casa de campo para alugar
```

**Correspondência de Frase:**
```
"aluguel de chalés"
"rancho com piscina"
"chalé para fim de semana"
"rancho beira rio"
```

**Correspondência Exata:**
```
[aluguel chalé]
[rancho para alugar]
[chalé fim de semana]
```

---

### Grupo 2: Localização Específica

```
chalé miguelópolis
rancho miguelópolis
aluguel chalé pontal
rancho rio grande sp
chalé ribeirão preto região
rancho para alugar miguelópolis
chalé beira rio miguelópolis
```

---

### Grupo 3: Fim de Semana/Feriado

```
chalé fim de semana
rancho feriado prolongado
chalé carnaval
rancho reveillon
chalé ano novo
rancho feriado
fim de semana no campo
```

---

### Grupo 4: Eventos/Família

```
rancho para confraternização
chalé para família
rancho para eventos
chalé para aniversário
rancho para pescaria
chalé para descanso
rancho para churrasco
```

---

### ❌ Palavras-chave Negativas

> [!WARNING]
> Adicione estas palavras negativas para evitar cliques irrelevantes:

```
gratis
gratuito
barato
venda
comprar
construir
projeto
planta
emprego
vaga
trabalho
curso
```

---

## 📝 Textos de Anúncios

### Anúncios Responsivos de Pesquisa (RSA)

**Títulos (máx. 30 caracteres):**

1. Chalés do Rio Grande | Miguelópolis
2. Rancho Completo Beira Rio
3. 4 Chalés + Piscina Aquecida
4. Lazer Total para 24 Pessoas
5. Aluguel de Rancho em SP
6. Fim de Semana Inesquecível
7. Piscina, Churrasqueira e Mais
8. Acesso Direto ao Rio Grande
9. Internet Starlink Disponível
10. Reserve Agora pelo WhatsApp
11. Chalés Climatizados
12. Área Gourmet Completa
13. Privacidade e Tranquilidade
14. Rancho para Sua Família
15. Confraternização Perfeita

**Descrições (máx. 90 caracteres):**

1. Rancho completo em Miguelópolis com 4 chalés climatizados, piscina aquecida e área gourmet.
2. Lazer total às margens do Rio Grande. Rampa para barcos, churrasqueira e internet Starlink.
3. O refúgio perfeito para sua família. Acomoda até 24 pessoas com todo conforto e privacidade.
4. Reserve agora via WhatsApp. Disponibilidade limitada para fins de semana e feriados.

---

### Extensões de Anúncios

**Sitelinks:**
- Galeria de Fotos → https://chalesdoriogrande.com.br#galeria
- Verificar Disponibilidade → https://chalesdoriogrande.com.br#disponibilidade
- Localização → https://chalesdoriogrande.com.br#localizacao
- Comodidades → https://chalesdoriogrande.com.br#comodidades

**Snippets Estruturados:**
- Comodidades: Piscina Aquecida, Churrasqueira, Internet Starlink, Ar Condicionado
- Acomodações: 4 Chalés, 24 Pessoas, Banheiros Privativos, Área Gourmet

**Chamadas:**
- Número: +55 16 98119-0106
- Texto: "Reserve pelo WhatsApp"

**Texto de Destaque:**
- Piscina Aquecida e Acesso ao Rio
- Internet Starlink de Alta Velocidade
- Rampa Própria para Barcos

---

## 💰 Orçamento e Lances

### Orçamento Recomendado

**Investimento Inicial (Teste - 30 dias):**
- **Total mensal**: R$ 1.500,00 a R$ 3.000,00
- **Diário**: R$ 50,00 a R$ 100,00

**Distribuição:**
- Campanha Pesquisa: 40% (R$ 600 - R$ 1.200)
- Campanha Performance Max: 50% (R$ 750 - R$ 1.500)
- Campanha Display/Remarketing: 10% (R$ 150 - R$ 300)

> [!TIP]
> **Sazonalidade**: Aumente o orçamento em 50-100% durante:
> - Feriados prolongados
> - Temporada de férias (dezembro, janeiro, julho)
> - Véspera de fins de semana longos

---

### Estratégias de Lance

**Fase 1 - Aprendizado (primeiros 15-30 dias):**
- Usar: **Maximizar conversões**
- Objetivo: Coletar dados e treinar o algoritmo
- Mínimo: 30-50 conversões para otimização eficaz

**Fase 2 - Otimização (após 30 dias):**
- Migrar para: **CPA desejado** (Custo por Aquisição)
- CPA alvo inicial: R$ 50,00 - R$ 100,00
- Ajustar conforme ROI real

**Fase 3 - Escala (após 60 dias):**
- Considerar: **ROAS desejado** (Retorno sobre investimento em anúncios)
- Se souber o valor médio de reserva, use ROAS
- Exemplo: Reserva média = R$ 2.000, ROAS alvo = 10:1 (R$ 10 de receita para cada R$ 1 gasto)

---

## 👥 Públicos e Remarketing

### Públicos Personalizados

**1. Visitantes do Site (Remarketing)**
- Todos os visitantes - últimos 30 dias
- Visitantes que viram galeria - últimos 30 dias
- Visitantes que clicaram em disponibilidade - últimos 30 dias
- **Excluir**: Quem já converteu (clicou no WhatsApp)

**2. Públicos Semelhantes (Lookalike)**
- Baseado em conversões (após ter 100+ conversões)
- Similaridade: 5-10% (mais restrito = melhor qualidade)

**3. Públicos de Interesse**
- Turismo e viagens
- Atividades ao ar livre
- Pesca esportiva
- Eventos familiares
- Proprietários de barcos

**4. Públicos Demográficos**
- Idade: 25-65 anos
- Renda familiar: 30% superior
- Status parental: Com filhos (prioridade)

---

### Configurar Remarketing

1. No Google Ads: **Ferramentas** > **Biblioteca compartilhada** > **Gerenciador de público**
2. Clique em **+ Público**
3. Selecione **Visitantes do site**
4. Configure:
   - **Nome**: Visitantes Site - 30 dias
   - **Origem**: Google Analytics (GA4)
   - **Duração**: 30 dias
   - **Pré-preenchimento**: Ativado

5. Crie listas adicionais:
   - Visitantes que viram galeria (evento: `gallery_view`)
   - Visitantes que verificaram disponibilidade (evento: `check_availability`)
   - Visitantes engajados (tempo no site > 2 min)

---

## 📊 Otimização Contínua

### KPIs Principais

**Métricas de Performance:**
- **CTR (Taxa de Cliques)**: Meta > 3%
- **Taxa de Conversão**: Meta > 5%
- **CPA (Custo por Aquisição)**: Meta < R$ 100
- **Índice de Qualidade**: Meta > 7/10

**Métricas de Negócio:**
- Número de contatos WhatsApp
- Taxa de conversão WhatsApp → Reserva (rastrear manualmente)
- Valor médio de reserva
- ROI real (receita / investimento em ads)

---

### Cronograma de Otimização

**Diário:**
- ✅ Verificar orçamento e gastos
- ✅ Pausar anúncios com CTR < 1%
- ✅ Verificar novos termos de pesquisa

**Semanal:**
- ✅ Analisar palavras-chave com melhor performance
- ✅ Adicionar palavras-chave negativas
- ✅ Testar novos textos de anúncios (A/B test)
- ✅ Ajustar lances por dispositivo/localização

**Mensal:**
- ✅ Revisar estrutura de campanhas
- ✅ Analisar públicos e ajustar segmentação
- ✅ Avaliar ROI e ajustar orçamento
- ✅ Criar relatório de performance

---

### Testes A/B Recomendados

**Teste 1: Títulos**
- Variação A: Foco em localização ("Rancho em Miguelópolis")
- Variação B: Foco em benefícios ("Piscina Aquecida + 4 Chalés")

**Teste 2: Descrições**
- Variação A: Foco em comodidades
- Variação B: Foco em experiência/emoção

**Teste 3: Páginas de Destino**
- Variação A: Homepage
- Variação B: Seção #disponibilidade

**Teste 4: Extensões**
- Com vs. sem extensões de chamada
- Diferentes sitelinks

---

## 🎓 Recursos Adicionais

### Ferramentas Úteis

- **Google Keyword Planner**: Pesquisa de palavras-chave
- **Google Trends**: Identificar sazonalidade
- **Google Analytics**: Análise de comportamento
- **Google Tag Assistant**: Debug de tags

### Suporte Google

- Central de Ajuda: [support.google.com/google-ads](https://support.google.com/google-ads)
- Suporte por chat/telefone: Disponível após ativar campanhas
- Google Skillshop: Cursos gratuitos de certificação

---

## ✅ Checklist de Lançamento

Antes de ativar suas campanhas, confirme:

- [ ] Conta Google Ads criada e configurada
- [ ] Conversões configuradas no Google Ads
- [ ] ID de conversão adicionado ao `.env.local`
- [ ] Google Analytics vinculado
- [ ] Método de pagamento configurado
- [ ] Campanhas criadas (Pesquisa + Performance Max)
- [ ] Palavras-chave adicionadas
- [ ] Palavras-chave negativas configuradas
- [ ] Anúncios criados (mínimo 3 por grupo)
- [ ] Extensões de anúncios configuradas
- [ ] Públicos de remarketing criados
- [ ] Orçamento definido
- [ ] Localização configurada corretamente
- [ ] Site testado e conversões funcionando

---

## 🚨 Dicas Finais

> [!IMPORTANT]
> **Paciência é fundamental**: O algoritmo do Google precisa de 30-50 conversões para otimizar efetivamente. Não faça mudanças drásticas nos primeiros 15 dias.

> [!TIP]
> **Comece pequeno**: É melhor começar com orçamento menor e escalar conforme vê resultados do que gastar muito sem dados.

> [!WARNING]
> **Cuidado com cliques fraudulentos**: Configure alertas para picos anormais de cliques. O Google tem proteção automática, mas monitore.

**Boa sorte com suas campanhas! 🎉**
