# 🏃‍♂️ BEWEAR Bootcamp

<div align="center">

![BEWEAR Bootcamp](https://img.shields.io/badge/BEWEAR-Bootcamp-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.4.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-316192?style=for-the-badge&logo=postgresql)

**Uma aplicação de e-commerce moderna e performática para roupas e acessórios esportivos**

*Construída com as melhores práticas de desenvolvimento usando Next.js 15, TypeScript, Tailwind CSS e Drizzle ORM*

[🚀 Demo](#-demonstração) •
[📖 Documentação](#-índice) •
[🛠️ Instalação](#-instalação) •
[🤝 Contribuição](#-contribuição)

</div>

---

## 📋 Índice

- [🎯 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [⚡ Pré-requisitos](#-pré-requisitos)
- [🚀 Instalação](#-instalação)
- [🗄️ Configuração do Banco de Dados](#️-configuração-do-banco-de-dados)
- [📜 Scripts Disponíveis](#-scripts-disponíveis)
- [🗂️ Estrutura do Banco de Dados](#️-estrutura-do-banco-de-dados)
- [🌐 Deploy](#-deploy)
- [🧪 Testes](#-testes)
- [🔧 Troubleshooting](#-troubleshooting)
- [🤝 Contribuição](#-contribuição)
- [📝 Licença](#-licença)
- [👥 Equipe](#-equipe)

## 🎯 Sobre o Projeto

O **BEWEAR Bootcamp** é uma plataforma de e-commerce de nova geração, especializada em roupas e acessórios esportivos. Desenvolvido como projeto de bootcamp, demonstra as melhores práticas de desenvolvimento web moderno, focando em performance, escalabilidade e experiência do usuário.

### 🌟 Características Principais

- **🎨 Interface Moderna**: Design responsivo e acessível com Tailwind CSS
- **⚡ Performance Otimizada**: Next.js 15 com App Router e React 19
- **🔒 Type Safety**: TypeScript completo em todo o projeto
- **🗄️ Banco de Dados Robusto**: PostgreSQL com Drizzle ORM type-safe
- **🧩 Componentes Reutilizáveis**: UI components baseados em Radix UI
- **📱 Mobile-First**: Design responsivo para todos os dispositivos
- **♿ Acessibilidade**: Componentes seguindo padrões WCAG
- **🔧 Desenvolvimento Moderno**: ESLint, Prettier e TypeScript configurados

## 🚀 Demonstração

> 🚧 **Em breve**: Screenshots e demonstração ao vivo serão adicionados

### 📸 Capturas de Tela

*Capturas de tela da aplicação serão adicionadas aqui*

### 🔗 Links Úteis

- **Demo Live**: *Em desenvolvimento*
- **Storybook**: *Em desenvolvimento*
- **Documentação API**: *Em desenvolvimento*

## 🛠️ Tecnologias Utilizadas

### 🎨 Frontend
| Tecnologia | Versão | Descrição |
|------------|---------|-----------|
| **Next.js** | `15.4.1` | Framework React com App Router |
| **React** | `19.1.0` | Biblioteca de interface com Server Components |
| **TypeScript** | `5.x` | Tipagem estática para JavaScript |
| **Tailwind CSS** | `4.x` | Framework CSS utilitário |
| **Radix UI** | `latest` | Componentes acessíveis sem estilo |
| **Lucide React** | `0.536.0` | Ícones modernos e customizáveis |
| **Class Variance Authority** | `0.7.1` | Utilidades para classes condicionais |

### 🗄️ Backend & Banco de Dados
| Tecnologia | Versão | Descrição |
|------------|---------|-----------|
| **Drizzle ORM** | `0.44.2` | ORM type-safe para TypeScript |
| **PostgreSQL** | `latest` | Banco de dados relacional |
| **Node.js** | `20.x` | Runtime JavaScript |
| **pg** | `8.16.3` | Driver PostgreSQL para Node.js |

### 🔧 Ferramentas de Desenvolvimento
| Ferramenta | Versão | Descrição |
|------------|---------|-----------|
| **ESLint** | `9.x` | Linting de código JavaScript/TypeScript |
| **Prettier** | `3.6.2` | Formatação automática de código |
| **Drizzle Kit** | `0.31.4` | Ferramentas para migração e seeding |
| **TSX** | `4.20.3` | Executor TypeScript para desenvolvimento |

### 📦 Dependências Principais
```json
{
  "next": "15.4.1",
  "react": "19.1.0",
  "typescript": "^5",
  "tailwindcss": "^4",
  "drizzle-orm": "^0.44.2",
  "pg": "^8.16.3"
}
```

## 📁 Estrutura do Projeto

```
bewear-bootcamp/
├── src/
│   ├── app/                 # App Router do Next.js
│   │   ├── layout.tsx      # Layout principal
│   │   ├── page.tsx        # Página inicial
│   │   └── globals.css     # Estilos globais
│   ├── components/         # Componentes React
│   │   └── ui/            # Componentes de UI
│   ├── db/                # Configuração do banco de dados
│   │   ├── index.ts       # Conexão com banco
│   │   ├── schema.ts      # Schema do banco
│   │   └── seed.ts        # Dados iniciais
│   └── lib/               # Utilitários
│       └── utils.ts       # Funções utilitárias
├── public/                # Arquivos estáticos
├── drizzle.config.ts      # Configuração do Drizzle
├── package.json           # Dependências do projeto
└── README.md             # Este arquivo
```

## ⚡ Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

### 🔧 Ferramentas Essenciais
- **Node.js** `≥ 18.17.0` ([Download](https://nodejs.org/))
- **npm** `≥ 9.0.0` (incluído com Node.js)
- **PostgreSQL** `≥ 14.0` ([Download](https://www.postgresql.org/download/))
- **Git** ([Download](https://git-scm.com/))

### 📋 Verificação da Instalação
```bash
# Verificar versões instaladas
node --version    # deve retornar v18.17.0 ou superior
npm --version     # deve retornar 9.0.0 ou superior
psql --version    # deve retornar PostgreSQL 14.0 ou superior
git --version     # verificar se Git está instalado
```

### 🐳 Alternativa com Docker (Opcional)
Se preferir usar Docker para o PostgreSQL:
```bash
# Iniciar PostgreSQL com Docker
docker run --name bewear-postgres \
  -e POSTGRES_PASSWORD=senha123 \
  -e POSTGRES_DB=bewear_db \
  -p 5432:5432 \
  -d postgres:15
```

## 🚀 Instalação

### 1️⃣ Clone o Repositório
```bash
git clone https://github.com/gustavros/bewear-bootcamp.git
cd bewear-bootcamp
```

### 2️⃣ Instale as Dependências
```bash
# Usando npm
npm install

# Ou usando yarn (se preferir)
yarn install
```

### 3️⃣ Configure as Variáveis de Ambiente
```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Ou crie manualmente
touch .env.local
```

Adicione as seguintes variáveis no arquivo `.env.local`:
```env
# Configuração do Banco de Dados
DATABASE_URL="postgresql://usuario:senha@localhost:5432/bewear_db"

# Configurações de Desenvolvimento (opcional)
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"

# Configurações de Upload (se aplicável)
# AWS_ACCESS_KEY_ID="sua_access_key"
# AWS_SECRET_ACCESS_KEY="sua_secret_key"
# AWS_REGION="us-east-1"
# AWS_BUCKET_NAME="bewear-images"
```

### 4️⃣ Configure o Banco de Dados
Siga as instruções na [seção de configuração do banco de dados](#️-configuração-do-banco-de-dados).

### 5️⃣ Execute o Projeto
```bash
# Desenvolvimento
npm run dev

# A aplicação estará disponível em http://localhost:3000
```

### 🎉 Sucesso!
Se tudo ocorreu bem, você deverá ver:
- ✅ Servidor rodando em `http://localhost:3000`
- ✅ Banco de dados conectado
- ✅ Hot reload funcionando

## 🗄️ Configuração do Banco de Dados

### 📊 Pré-requisitos do Banco
- PostgreSQL 14.0 ou superior instalado e rodando
- Usuário com permissões para criar banco de dados
- Porta 5432 disponível (ou configurar porta customizada)

### 🛠️ Setup Passo a Passo

#### 1️⃣ Criar o Banco de Dados
```sql
-- Conecte ao PostgreSQL como superusuário
sudo -u postgres psql

-- Criar usuário (opcional)
CREATE USER bewear_user WITH PASSWORD 'senha_segura_123';

-- Criar banco de dados
CREATE DATABASE bewear_db OWNER bewear_user;

-- Conceder privilégios
GRANT ALL PRIVILEGES ON DATABASE bewear_db TO bewear_user;

-- Sair do psql
\q
```

#### 2️⃣ Configurar URL de Conexão
Atualize o arquivo `.env.local`:
```env
# Para usuário local
DATABASE_URL="postgresql://bewear_user:senha_segura_123@localhost:5432/bewear_db"

# Para desenvolvimento com usuário postgres padrão
DATABASE_URL="postgresql://postgres:sua_senha@localhost:5432/bewear_db"
```

#### 3️⃣ Executar Migrações
```bash
# Verificar conexão
npm run db:check

# Aplicar schema do banco
npx drizzle-kit push

# Verificar se as tabelas foram criadas
npx drizzle-kit introspect
```

#### 4️⃣ Popular com Dados Iniciais
```bash
# Executar script de seed
npx tsx src/db/seed.ts

# Verificar dados inseridos
psql $DATABASE_URL -c "SELECT COUNT(*) FROM category;"
psql $DATABASE_URL -c "SELECT COUNT(*) FROM product;"
psql $DATABASE_URL -c "SELECT COUNT(*) FROM product_variant;"
```

### 🐳 Usando Docker (Alternativa)
```bash
# Criar e iniciar container PostgreSQL
docker run --name bewear-postgres \
  -e POSTGRES_USER=bewear_user \
  -e POSTGRES_PASSWORD=senha_segura_123 \
  -e POSTGRES_DB=bewear_db \
  -p 5432:5432 \
  -d postgres:15

# Configurar URL de conexão
DATABASE_URL="postgresql://bewear_user:senha_segura_123@localhost:5432/bewear_db"
```

### ✅ Verificação da Configuração
```bash
# Testar conexão
npm run dev

# Verificar logs para confirmar conexão com banco
# Deve aparecer: "✅ Database connected successfully"
```

## 📜 Scripts Disponíveis

### 🚀 Desenvolvimento
```bash
# Iniciar servidor de desenvolvimento com hot reload
npm run dev

# Servidor estará disponível em http://localhost:3000
```

### 🏗️ Build e Produção
```bash
# Criar build otimizado para produção
npm run build

# Iniciar servidor de produção (após build)
npm run start

# Build + Start em um comando
npm run build && npm run start
```

### 🔍 Qualidade de Código
```bash
# Executar ESLint (verificar problemas)
npm run lint

# Executar ESLint com correção automática
npm run lint:fix

# Formatar código com Prettier
npm run format

# Verificar formatação sem alterar arquivos
npm run format:check
```

### 🗄️ Banco de Dados
```bash
# Aplicar mudanças do schema ao banco
npx drizzle-kit push

# Gerar migrações
npx drizzle-kit generate

# Visualizar schema do banco
npx drizzle-kit introspect

# Popular banco com dados iniciais
npx tsx src/db/seed.ts

# Verificar conexão com banco
npx tsx -e "import './src/db'; console.log('✅ Conexão OK')"
```

### 🔧 Utilitários
```bash
# Verificar versões das dependências
npm outdated

# Auditar vulnerabilidades
npm audit

# Limpar cache do npm
npm cache clean --force

# Reinstalar dependências
rm -rf node_modules package-lock.json && npm install
```

### 🧪 Testes (Quando Implementados)
```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch

# Executar testes com coverage
npm run test:coverage

# Executar testes e2e
npm run test:e2e
```

## 🗂️ Estrutura do Banco de Dados

### 📊 Diagrama de Relacionamentos
```
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│    category     │       │     product     │       │ product_variant │
├─────────────────┤       ├─────────────────┤       ├─────────────────┤
│ id (UUID) PK    │◄──────┤ id (UUID) PK    │◄──────┤ id (UUID) PK    │
│ name (TEXT)     │       │ name (TEXT)     │       │ product_id (FK) │
│ slug (TEXT)     │       │ slug (TEXT)     │       │ name (TEXT)     │
│ created_at      │       │ description     │       │ color (TEXT)    │
└─────────────────┘       │ category_id(FK) │       │ slug (TEXT)     │
                          │ created_at      │       │ price_in_cents  │
                          └─────────────────┘       │ image_url       │
                                                    │ created_at      │
┌─────────────────┐                                 └─────────────────┘
│      user       │
├─────────────────┤
│ id (UUID) PK    │
│ name (TEXT)     │
└─────────────────┘
```

### 🏗️ Tabelas Detalhadas

#### 📂 `category` - Categorias de Produtos
| Campo | Tipo | Descrição | Constraints |
|-------|------|-----------|-------------|
| `id` | `UUID` | Identificador único | **PK**, DEFAULT RANDOM |
| `name` | `TEXT` | Nome da categoria | **NOT NULL** |
| `slug` | `TEXT` | Slug para URLs amigáveis | **NOT NULL**, **UNIQUE** |
| `created_at` | `TIMESTAMP` | Data de criação | DEFAULT NOW() |

**Exemplos de dados:**
- Acessórios (`acessorios`)
- Camisetas (`camisetas`)
- Tênis (`tenis`)

#### 🛍️ `product` - Produtos
| Campo | Tipo | Descrição | Constraints |
|-------|------|-----------|-------------|
| `id` | `UUID` | Identificador único | **PK**, DEFAULT RANDOM |
| `name` | `TEXT` | Nome do produto | **NOT NULL** |
| `slug` | `TEXT` | Slug para URLs amigáveis | **NOT NULL**, **UNIQUE** |
| `description` | `TEXT` | Descrição detalhada | **NOT NULL** |
| `category_id` | `UUID` | Referência à categoria | **FK** → `category.id` |
| `created_at` | `TIMESTAMP` | Data de criação | **NOT NULL**, DEFAULT NOW() |

#### 🎨 `product_variant` - Variações de Produtos
| Campo | Tipo | Descrição | Constraints |
|-------|------|-----------|-------------|
| `id` | `UUID` | Identificador único | **PK**, DEFAULT RANDOM |
| `product_id` | `UUID` | Referência ao produto | **FK** → `product.id` |
| `name` | `TEXT` | Nome da variação | **NOT NULL** |
| `color` | `TEXT` | Cor da variação | **NOT NULL** |
| `slug` | `TEXT` | Slug único | **NOT NULL**, **UNIQUE** |
| `price_in_cents` | `INTEGER` | Preço em centavos | **NOT NULL** |
| `image_url` | `TEXT` | URL da imagem | **NOT NULL** |
| `created_at` | `TIMESTAMP` | Data de criação | **NOT NULL**, DEFAULT NOW() |

#### 👤 `user` - Usuários (Base)
| Campo | Tipo | Descrição | Constraints |
|-------|------|-----------|-------------|
| `id` | `UUID` | Identificador único | **PK**, DEFAULT RANDOM |
| `name` | `TEXT` | Nome do usuário | **NOT NULL** |

### 🔗 Relacionamentos

#### Um para Muitos (1:N)
- **Categoria → Produtos**: Uma categoria possui muitos produtos
- **Produto → Variações**: Um produto possui muitas variações

#### Consultas Exemplo
```sql
-- Produtos por categoria
SELECT p.name, c.name as category 
FROM product p 
JOIN category c ON p.category_id = c.id;

-- Variações com preços
SELECT pv.name, pv.color, pv.price_in_cents/100.0 as price 
FROM product_variant pv;

-- Produtos mais caros por categoria
SELECT c.name, MAX(pv.price_in_cents) as max_price 
FROM category c 
JOIN product p ON c.id = p.category_id 
JOIN product_variant pv ON p.id = pv.product_id 
GROUP BY c.name;
```

### 📈 Dados de Exemplo
O script de seed popula o banco com:
- **6 categorias** principais de produtos esportivos
- **24 produtos** distribuídos pelas categorias
- **Múltiplas variações** por produto (diferentes cores)
- **Preços realistas** armazenados em centavos
- **Imagens** hospedadas no AWS S3

## ✨ Funcionalidades

### 🛍️ Catálogo de Produtos
- **Navegação por Categorias**: 6 categorias principais de produtos esportivos
- **Variações de Produtos**: Múltiplas cores e opções por produto
- **Busca Avançada**: *Em desenvolvimento*
- **Filtros Inteligentes**: *Em desenvolvimento*

### 🛒 E-commerce
- **Carrinho de Compras**: *Em desenvolvimento*
- **Checkout Seguro**: *Em desenvolvimento*
- **Gestão de Pedidos**: *Em desenvolvimento*
- **Histórico de Compras**: *Em desenvolvimento*

### 👤 Gestão de Usuários
- **Cadastro e Login**: *Em desenvolvimento*
- **Perfil do Usuário**: *Em desenvolvimento*
- **Wishlist**: *Em desenvolvimento*

### 📊 Administração
- **Dashboard Admin**: *Em desenvolvimento*
- **Gestão de Produtos**: *Em desenvolvimento*
- **Relatórios**: *Em desenvolvimento*

### 🏷️ Categorias Disponíveis
- **👜 Acessórios**: Mochilas, bonés, meias e mais
- **🩳 Bermuda & Shorts**: Shorts esportivos e bermudas
- **👖 Calças**: Calças casuais e esportivas
- **👕 Camisetas**: Camisetas casuais e esportivas
- **🧥 Jaquetas & Moletons**: Jaquetas e corta-ventos
- **👟 Tênis**: Tênis casuais e esportivos

## 🌐 Deploy

### 🚀 Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy com configuração automática
vercel

# Deploy de produção
vercel --prod
```

**Configurações necessárias no Vercel:**
- Adicionar variável `DATABASE_URL` nas configurações
- Configurar domínio customizado (opcional)
- Habilitar Analytics (opcional)

### 🐳 Docker
```dockerfile
# Dockerfile básico
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build e execução
docker build -t bewear-bootcamp .
docker run -p 3000:3000 -e DATABASE_URL="sua_url" bewear-bootcamp
```

### ☁️ Outras Plataformas
- **Netlify**: Suporte nativo para Next.js
- **Railway**: Deploy simples com PostgreSQL incluído
- **Heroku**: Com add-on PostgreSQL
- **AWS**: EC2 + RDS ou App Runner

## 🧪 Testes

> 🚧 **Em desenvolvimento**: Sistema de testes será implementado

### 📋 Plano de Testes
- **Unit Tests**: Componentes React e funções utilitárias
- **Integration Tests**: APIs e banco de dados
- **E2E Tests**: Fluxos completos de usuário
- **Performance Tests**: Core Web Vitals

### 🛠️ Ferramentas Planejadas
- **Jest**: Testes unitários
- **React Testing Library**: Testes de componentes
- **Playwright**: Testes E2E
- **MSW**: Mock de APIs para testes

## 🔧 Troubleshooting

### ❌ Problemas Comuns

#### Erro de Conexão com Banco
```bash
# Erro: "Connection refused"
# Solução: Verificar se PostgreSQL está rodando
sudo service postgresql start

# Ou com Docker
docker start bewear-postgres
```

#### Erro de Módulos Não Encontrados
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

#### Erro de Build do Next.js
```bash
# Limpar cache do Next.js
rm -rf .next
npm run build
```

#### Problema com ESLint
```bash
# Executar com autofix
npm run lint -- --fix

# Ou desabilitar regra específica temporariamente
// eslint-disable-next-line rule-name
```

### 🐛 Reportar Bugs
1. Verificar [issues existentes](https://github.com/gustavros/bewear-bootcamp/issues)
2. Criar nova issue com:
   - Descrição detalhada do problema
   - Passos para reproduzir
   - Versões do Node.js, npm e OS
   - Screenshots (se aplicável)

### 💡 Obter Ajuda
- **Documentação**: Este README
- **Issues**: [GitHub Issues](https://github.com/gustavros/bewear-bootcamp/issues)
- **Discussões**: [GitHub Discussions](https://github.com/gustavros/bewear-bootcamp/discussions)

## 🤝 Contribuição

Contribuições são muito bem-vindas! Este projeto segue as melhores práticas de desenvolvimento colaborativo.

### 🌟 Como Contribuir

#### 1️⃣ Fork e Clone
```bash
# 1. Faça um fork do repositório no GitHub
# 2. Clone seu fork
git clone https://github.com/SEU_USERNAME/bewear-bootcamp.git
cd bewear-bootcamp

# 3. Adicione o repositório original como upstream
git remote add upstream https://github.com/gustavros/bewear-bootcamp.git
```

#### 2️⃣ Configurar Ambiente
```bash
# Instalar dependências
npm install

# Configurar banco de dados
cp .env.example .env.local
# Editar .env.local com suas configurações

# Executar migrações
npx drizzle-kit push
npx tsx src/db/seed.ts
```

#### 3️⃣ Criar Branch
```bash
# Sempre criar branch a partir da main atualizada
git checkout main
git pull upstream main
git checkout -b feature/nome-da-funcionalidade

# Ou para correção de bug
git checkout -b fix/correcao-do-problema
```

#### 4️⃣ Desenvolver
```bash
# Executar em modo desenvolvimento
npm run dev

# Executar linting durante desenvolvimento
npm run lint

# Formatar código antes de commit
npm run format
```

#### 5️⃣ Commit e Push
```bash
# Commit com mensagem descritiva
git add .
git commit -m "feat: adicionar funcionalidade X"

# Ou para correções
git commit -m "fix: corrigir problema Y"

# Push para seu fork
git push origin feature/nome-da-funcionalidade
```

#### 6️⃣ Pull Request
1. Acesse seu fork no GitHub
2. Clique em "Compare & pull request"
3. Preencha a descrição detalhada
4. Aguarde review e feedback

### 📋 Guidelines de Contribuição

#### 🎨 Padrões de Código
```bash
# Sempre executar antes de commit
npm run lint      # Verificar problemas
npm run format    # Formatar código
npm run build     # Testar build
```

#### 📝 Padrões de Commit
Seguimos o [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Funcionalidades
git commit -m "feat: adicionar carrinho de compras"

# Correções
git commit -m "fix: corrigir cálculo de preço"

# Documentação
git commit -m "docs: atualizar README"

# Estilo/Formatação
git commit -m "style: aplicar formatação prettier"

# Refatoração
git commit -m "refactor: reorganizar componentes"

# Testes
git commit -m "test: adicionar testes para produto"

# Performance
git commit -m "perf: otimizar consulta de produtos"
```

#### 🏗️ Estrutura de Código
- **Componentes**: `src/components/` (PascalCase)
- **Páginas**: `src/app/` (kebab-case para pastas)
- **Utilitários**: `src/lib/` (camelCase)
- **Tipos**: `src/types/` (PascalCase para interfaces)
- **Hooks**: `src/hooks/` (use + PascalCase)

#### 🔍 Checklist de Pull Request
- [ ] Código segue os padrões do projeto
- [ ] Executou `npm run lint` sem erros
- [ ] Executou `npm run build` com sucesso
- [ ] Adicionou testes (quando aplicável)
- [ ] Atualizou documentação (quando necessário)
- [ ] Testou funcionalidade em diferentes navegadores
- [ ] Verificou responsividade (mobile/desktop)

### 🎯 Áreas que Precisam de Contribuição

#### 🚀 Funcionalidades Prioritárias
- [ ] Sistema de autenticação
- [ ] Carrinho de compras
- [ ] Checkout e pagamento
- [ ] Busca e filtros
- [ ] Sistema de reviews
- [ ] Dashboard administrativo

#### 🧪 Testes
- [ ] Testes unitários para componentes
- [ ] Testes de integração para APIs
- [ ] Testes E2E para fluxos principais
- [ ] Setup do ambiente de testes

#### 📚 Documentação
- [ ] Documentação de componentes (Storybook)
- [ ] Guias de desenvolvimento
- [ ] Documentação de API
- [ ] Tutoriais para novos contribuidores

#### 🎨 Design e UX
- [ ] Melhorias de acessibilidade
- [ ] Otimizações de performance
- [ ] Design system completo
- [ ] Animações e micro-interações

### 🏆 Reconhecimento
Todos os contribuidores são reconhecidos no projeto! Suas contribuições aparecerão:
- Na seção [Contributors](#-equipe) deste README
- No histórico de commits
- Nas release notes (quando aplicável)

## 📝 Licença

Este projeto foi desenvolvido como parte de um bootcamp educacional e está disponível sob a licença **MIT**.

```
MIT License

Copyright (c) 2024 BEWEAR Bootcamp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 👥 Equipe

### 💻 Desenvolvimento
- **[@gustavros](https://github.com/gustavros)** - Desenvolvedor Principal

### 🤝 Contribuidores
Agradecemos a todos que contribuíram para este projeto:

<!-- Será atualizado automaticamente -->
<a href="https://github.com/gustavros/bewear-bootcamp/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=gustavros/bewear-bootcamp" />
</a>

### 🎓 Bootcamp
Este projeto foi desenvolvido como parte do programa educacional de desenvolvimento web.

---

<div align="center">

**🌟 Se este projeto foi útil, considere dar uma ⭐ no repositório!**

**Desenvolvido com ❤️ usando Next.js, TypeScript e Drizzle ORM**

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)
![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black.svg)
![Powered by TypeScript](https://img.shields.io/badge/Powered%20by-TypeScript-blue.svg)

</div>
