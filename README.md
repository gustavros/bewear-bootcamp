# 🏃‍♂️ BEWEAR Bootcamp

Uma aplicação de e-commerce moderna para roupas e acessórios esportivos, construída com Next.js 15, TypeScript, Tailwind CSS e Drizzle ORM.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Banco de Dados](#estrutura-do-banco-de-dados)
- [Funcionalidades](#funcionalidades)
- [Contribuição](#contribuição)

## 🎯 Sobre o Projeto

O BEWEAR Bootcamp é uma plataforma de e-commerce especializada em roupas e acessórios esportivos. O projeto foi desenvolvido como parte de um bootcamp, demonstrando as melhores práticas de desenvolvimento moderno com React, TypeScript e banco de dados PostgreSQL.

### Características Principais

- **Interface Moderna**: Design responsivo com Tailwind CSS
- **Performance Otimizada**: Next.js 15 com App Router
- **Type Safety**: TypeScript em todo o projeto
- **Banco de Dados Robusto**: PostgreSQL com Drizzle ORM
- **Componentes Reutilizáveis**: UI components com Radix UI

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 15.4.1** - Framework React com App Router
- **React 19.1.0** - Biblioteca de interface
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones modernos

### Backend & Banco de Dados
- **Drizzle ORM** - ORM type-safe para TypeScript
- **PostgreSQL** - Banco de dados relacional
- **Node.js** - Runtime JavaScript

### Ferramentas de Desenvolvimento
- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **Drizzle Kit** - Ferramentas para migração e seeding

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

## 🚀 Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd bewear-bootcamp
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env.local
   ```
   
   Edite o arquivo `.env.local` e adicione:
   ```env
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/bewear_db"
   ```

4. **Execute o projeto em desenvolvimento**
   ```bash
   npm run dev
   ```

## 🗄️ Configuração do Banco de Dados

### Pré-requisitos
- PostgreSQL instalado e rodando
- Banco de dados criado

### Configuração

1. **Crie o banco de dados**
   ```sql
   CREATE DATABASE bewear_db;
   ```

2. **Execute as migrações**
   ```bash
   npx drizzle-kit push
   ```

3. **Popule o banco com dados iniciais**
   ```bash
   npx tsx src/db/seed.ts
   ```

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento

# Build e Produção
npm run build        # Cria build de produção
npm run start        # Inicia servidor de produção

# Qualidade de Código
npm run lint         # Executa ESLint
```

## 🗂️ Estrutura do Banco de Dados

### Tabelas Principais

#### `user`
- `id` (UUID) - Identificador único
- `name` (TEXT) - Nome do usuário

#### `category`
- `id` (UUID) - Identificador único
- `name` (TEXT) - Nome da categoria
- `slug` (TEXT) - Slug único para URLs
- `created_at` (TIMESTAMP) - Data de criação

#### `product`
- `id` (UUID) - Identificador único
- `name` (TEXT) - Nome do produto
- `slug` (TEXT) - Slug único para URLs
- `description` (TEXT) - Descrição do produto
- `category_id` (UUID) - Referência à categoria
- `created_at` (TIMESTAMP) - Data de criação

#### `product_variant`
- `id` (UUID) - Identificador único
- `product_id` (UUID) - Referência ao produto
- `name` (TEXT) - Nome da variante
- `color` (TEXT) - Cor da variante
- `slug` (TEXT) - Slug único para URLs
- `price_in_cents` (INTEGER) - Preço em centavos
- `image_url` (TEXT) - URL da imagem
- `created_at` (TIMESTAMP) - Data de criação

### Relacionamentos
- Uma categoria pode ter muitos produtos
- Um produto pertence a uma categoria
- Um produto pode ter muitas variantes
- Uma variante pertence a um produto

## 🎨 Funcionalidades

### Categorias de Produtos
- **Acessórios**: Mochilas, bonés, meias
- **Bermuda & Shorts**: Shorts esportivos e bermudas
- **Calças**: Calças casuais e esportivas
- **Camisetas**: Camisetas casuais e esportivas
- **Jaquetas & Moletons**: Jaquetas e corta-ventos
- **Tênis**: Tênis casuais e esportivos

### Dados Iniciais
O projeto inclui um script de seeding com:
- 6 categorias principais
- 24 produtos diferentes
- Múltiplas variantes por produto (cores)
- Imagens de produtos hospedadas no AWS S3
- Preços em centavos para precisão

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto foi desenvolvido como parte de um bootcamp educacional.

---

**Desenvolvido com ❤️ usando Next.js, TypeScript e Drizzle ORM**
