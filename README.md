# 🏦 FinanceAI

Dashboard de ações brasileiro com IA integrada. Acompanhe suas ações favoritas em tempo real e faça perguntas em linguagem natural sobre o mercado financeiro.

🔗 **App ao vivo:** (em breve)
📂 **Código-fonte:** ([https://github.com/felipenewplayer/FinanceAI](https://github.com/felipenewplayer/FinanceAI))

---

## 📋 Sobre o projeto

O FinanceAI combina dados reais do mercado brasileiro (via BRAPI) com um assistente de IA que responde perguntas sobre ações em linguagem natural — com base nos dados atuais, não em informações inventadas.

O projeto foi construído com foco em arquitetura de software de produção: autenticação segura com JWT, frontend desacoplado do backend, banco de dados relacional, integração com API externa e deploy com CI/CD.

### Funcionalidades

- 🔐 Autenticação com JWT (registro, login, rotas protegidas)
- 📈 Acompanhamento de ações favoritas com preço e variação em tempo real
- 🔍 Busca de qualquer ação por ticker (PETR4, VALE3, ITUB4...)
- 🤖 Assistente de IA que responde perguntas sobre ações com base em dados reais
- 📊 Histórico de perguntas por usuário
- ✅ Testes automatizados e pipeline CI/CD

---

## 🛠️ Stack técnica

| Camada | Tecnologia |
|---|---|
| Frontend | React + Tailwind CSS |
| Backend | FastAPI |
| Banco de dados | PostgreSQL |
| Autenticação | JWT |
| Dados de ações | BRAPI (API gratuita de ações BR) |
| IA | LangChain + Groq (LLaMA 3.3 70B) |
| Deploy backend | Railway |
| Deploy frontend | Vercel |
| CI/CD | GitHub Actions |

---

## 🏗️ Arquitetura

```mermaid
flowchart LR
    subgraph Frontend
        A[React\nTailwind CSS]
    end

    subgraph Backend
        B[FastAPI]
        C[(PostgreSQL\nusuários · favoritos · histórico)]
        B <--> C
    end

    subgraph Externo
        D[BRAPI\nDados de ações]
        E[Groq\nLLaMA 3.3 70B]
    end

    A -->|JWT + REST| B
    B -->|preço · variação| D
    B -->|contexto + pergunta| E
```

### Decisões de design

**IA com contexto dinâmico:** diferente de chatbots RAG tradicionais (que buscam contexto em documentos estáticos), o assistente do FinanceAI injeta dados reais e atuais da ação no prompt antes de chamar o LLM — garantindo respostas baseadas no mercado de agora, não em informações desatualizadas.

**Backend como intermediário:** o frontend nunca chama APIs externas (BRAPI, Groq) diretamente. Todas as chamadas passam pelo backend, que controla autenticação, rate limiting e cache — padrão de segurança adotado em sistemas de produção.

**Autenticação stateless com JWT:** o servidor não guarda sessão. O token JWT carrega as informações do usuário assinadas com uma chave secreta — o backend valida a assinatura a cada requisição sem consultar o banco, garantindo escalabilidade.

---

## ✅ Testes

```bash
pytest tests/ -v
```

| Módulo | Cenários cobertos |
|---|---|
| Auth | Registro, login, token inválido, rota protegida sem token |
| Favoritos | Adicionar, listar, remover, duplicata |
| IA | Resposta com dados reais mockados, pergunta sem contexto |

---

## 🔒 Segurança

- Senhas com hash via `bcrypt` (nunca texto puro no banco)
- JWT com expiração configurada
- Queries via SQLAlchemy ORM (previne SQL injection)
- Inputs validados com Pydantic em todos os endpoints
- Rate limiting por IP
- CORS configurado só pro domínio do frontend em produção
- Chaves de API gerenciadas via variáveis de ambiente

---

## 🔄 CI/CD

A cada push na branch `main`:
1. **CI:** testes rodam em ambiente Linux limpo
2. **CD:** se os testes passarem, deploy automático pro Railway (backend) e Vercel (frontend)

---

## 🚀 Rodando localmente

### Pré-requisitos

- Python 3.11+
- Node.js 18+
- PostgreSQL instalado localmente

### Backend

```bash
cd backend
python -m venv venv
.\venv\Scripts\activate  # Windows
pip install -r requirements.txt
```

Crie um `.env` em `backend/`:

```
DATABASE_URL=postgresql://usuario:senha@localhost:5432/financeai
SECRET_KEY=sua_chave_secreta_aqui
GROQ_API_KEY=sua_chave_groq_aqui
BRAPI_TOKEN=seu_token_brapi_aqui
```

Rode o backend:

```bash
uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Acesse `http://localhost:5173`

---

## 👤 Autor

Felipe — [GitHub](https://github.com/felipenewplayer) · [LinkedIn](https://www.linkedin.com/in/felipe-pereira-6a7828255/)

> Veja também: [DocMind](https://github.com/felipenewplayer/DocMind) — AI Document Chatbot com pipeline RAG completo