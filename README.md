# 🏡 Chalés do Rio Grande - Website Oficial

Site institucional dos Chalés do Rio Grande, desenvolvido com Next.js 16, React 19 e Tailwind CSS 4.

## 📋 Sobre o Projeto

Website moderno e responsivo para divulgação dos chalés, com integração completa de analytics e tracking de conversões para Google Ads.

### ✨ Funcionalidades

- 🎨 Interface moderna e responsiva
- 🖼️ Galeria de imagens otimizada
- 📱 Botão de contato direto via WhatsApp
- 📊 Tracking completo com Google Analytics 4
- 🎯 Conversões configuradas para Google Ads
- 🏷️ Gerenciamento via Google Tag Manager

## 🚀 Tecnologias

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **UI**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Ícones**: [Lucide React](https://lucide.dev)
- **Deploy**: Docker + VPS

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 20+ 
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/lmteixeira17/site-chales-do-rio-grande.git

# Entrar no diretório
cd site-chales-do-rio-grande

# Instalar dependências
npm install

# Copiar variáveis de ambiente
cp .env.example .env.local
```

### Configuração

Edite o arquivo `.env.local` com suas credenciais:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=XXXXXXXXXXXX
```

### Executar em Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de Produção

```bash
npm run build
npm start
```

### Testes

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm test -- --watch

# Executar testes com coverage
npm test -- --coverage
```

## 🐳 Deploy com Docker

```bash
# Build da imagem
docker-compose build

# Iniciar container
docker-compose up -d

# Ver logs
docker-compose logs -f
```

## 📚 Documentação

- [📖 Guia de Deploy](docs/deployment-guide.md) - Instruções completas de deploy
- [🏷️ Configuração GTM](docs/gtm-setup.md) - Setup do Google Tag Manager
- [📊 Eventos Analytics](docs/analytics-events.md) - Documentação de eventos
- [🎯 Estratégia Google Ads](docs/google-ads-strategy.md) - Guia de campanhas

## 🗂️ Estrutura do Projeto

```
site-chales-do-rio-grande/
├── src/
│   ├── app/              # App Router (Next.js 16)
│   ├── components/       # Componentes React
│   ├── lib/              # Utilitários e helpers
│   └── utils/            # Funções auxiliares
├── public/               # Arquivos estáticos
├── docs/                 # Documentação
├── Dockerfile            # Configuração Docker
├── docker-compose.yml    # Orquestração Docker
└── package.json          # Dependências
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa linter
- `npm test` - Executa testes automatizados

## 📊 Analytics e Tracking

O site possui integração completa com:

- **Google Analytics 4 (GA4)**: Análise de comportamento
- **Google Tag Manager (GTM)**: Gerenciamento de tags
- **Google Ads**: Tracking de conversões

Eventos rastreados:
- `page_view` - Visualização de página
- `whatsapp_click` - Clique no botão WhatsApp
- `whatsapp_contact` - Conversão de contato

## 🌐 Deploy em Produção

O site está hospedado em VPS próprio (45.63.90.69) e acessível em:
**https://chalesdoriogrande.com.br**

Para instruções detalhadas de deploy, consulte [deployment-guide.md](docs/deployment-guide.md).

## 📝 Licença

Este projeto é privado e proprietário.

## 👤 Autor

**LM Teixeira**
- GitHub: [@lmteixeira17](https://github.com/lmteixeira17)

---

**Desenvolvido com ❤️ para Chalés do Rio Grande**
