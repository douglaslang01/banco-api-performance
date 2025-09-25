# Banco API Performance  

Repositório destinado à realização de testes de performance utilizando **JavaScript** e **K6**.  
O projeto tem como objetivo avaliar o desempenho, resiliência e estabilidade de endpoints da API do Banco.  

---

## 🚀 Tecnologias Utilizadas  

- [Node.js](https://nodejs.org/) – suporte para execução e gerenciamento de dependências  
- [K6](https://k6.io/) – ferramenta de carga e performance testing  
- [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) – linguagem para escrita dos testes  

---

## 📁 Estrutura do Repositório

```
banco-api-performance/
├── fixtures/               # Dados de entrada para os testes (ex: usuários, payloads)
├── helpers/            # Funções utilitárias reutilizáveis para interação com a API
├── tests/              # Casos de teste organizados por módulo da API
├── utils /              # Funções utilitárias reutilizáveis
├── config/        # Arquivos de configuração de variáveis de ambiente
└── README.md           # Este documento
```

---

## 🗂️ Objetivo de Cada Grupo de Arquivos

- **`fixtures/`**: Dados de entrada para os testes (ex: usuários, payloads).
- **`helpers/`**: Funções utilitárias reutilizáveis para interação com a API.
- **`tests/`**: Casos de teste organizados por módulo da API
- **`utils/`**: Funções utilitárias reutilizáveis.
- **`config/`**: Arquivos de configuração de variáveis de ambiente  

---

## ⚙️ Instalação e Configuração  

1. Clone o repositório:  
   ```bash 
   git clone https://github.com/douglaslang01/banco-api-performance.git
   cd banco-api-performance
   ```

2. Instale as dependências:  
   ```bash
   npm install
   ```

3. Configure a variável de ambiente `BASE_URL` (exemplo em Powershell):  
   ```powershell
   $env:BASE_URL="https://sua-api.com"
   ```

---

## ▶️ Execução dos Testes  

### Execução simples no K6  
```Powershell
k6 run .\scripts\nomeDoTeste.js
```

### Execução com relatório em tempo real  
O K6 possui um **dashboard web** que pode ser habilitado via variáveis de ambiente:  

```Powershell
$env:BASE_URL="https://sua-api.com" ; $env:K6_WEB_DASHBOARD="true" ; k6 run .\scripts\nomeDoTeste.js
```

Acompanhe no navegador em: **http://localhost:5665/**  

### Execução com exportação do relatório em HTML  
Também é possível exportar o relatório automaticamente:  

```powershell
$env:BASE_URL="https://sua-api.com" ; $env:K6_WEB_DASHBOARD="true" ; $env:K6_WEB_DASHBOARD_EXPORT="html-report.html" ; k6 run .\scripts\nomeDoTeste.js
```

O arquivo **`html-report.html`** será gerado dentro do diretório atual ou em `reports/`, dependendo da configuração.  

---

👉 [Acesse o repositório no GitHub](https://github.com/douglaslang01/banco-api-performance)  
