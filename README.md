# InfoSmart - Plataforma de Agentes de IA

A InfoSmart é uma empresa especializada na criação de agentes de inteligência artificial personalizados para negócios. Este projeto contém o website institucional e o painel de controle para gerenciamento dos agentes.

## Estrutura do Projeto

- **frontend**: Aplicação React com TypeScript e TailwindCSS
- **backend**: API em FastAPI (Python)

## Requisitos

### Frontend
- Node.js 16+
- NPM ou Yarn

### Backend
- Python 3.9+
- Poetry (recomendado) ou Pip

## Configuração

### Frontend

1. Instale as dependências:
```bash
cd frontend
npm install
```

2. Crie o arquivo de variáveis de ambiente:
```bash
cp .env.example .env.local
```

3. Configure as variáveis no arquivo `.env.local`

### Backend

1. Instale as dependências:
```bash
cd backend
pip install -r requirements.txt
```

2. Crie o arquivo de variáveis de ambiente:
```bash
cp .env.example .env
```

3. Configure as variáveis no arquivo `.env` (especialmente OPENROUTER_API_KEY e SMTP)

## Execução

### Frontend

```bash
cd frontend
npm run dev
```

O frontend estará disponível em: http://localhost:3000

### Backend

```bash
cd backend
python -m uvicorn main:app --reload
```

A API estará disponível em: http://localhost:8000

## Desenvolvimento

### Estrutura de pastas (Frontend)

- `src/components`: Componentes reutilizáveis
- `src/pages`: Páginas da aplicação
- `src/hooks`: React hooks customizados
- `src/utils`: Funções utilitárias

### Estrutura de pastas (Backend)

- `app/routers`: Endpoints da API
- `app/models`: Modelos de dados (Pydantic)
- `app/services`: Serviços (email, IA, etc.)

## Contato

Para dúvidas ou sugestões, entre em contato pelo email: contato@infosmart.com.br
