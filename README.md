
# Defesa do Projeto — MOB4AI Dashboard

## Objetivo do Projeto
Criar um dashboard em **React** que consome dados de sensores via API e exibe informações em tempo real através de gráficos, com formatações legíveis e componentes sincronizados.


## 1. Estrutura do Projeto

### Arquitetura: **MVC (Model-View-Controller)**
Separação de responsabilidades:
- **Model**: tratamento e formatação dos dados da API  
  → `batteryModel.js`, `temperatureModel.js`
- **Controller**: consumo de dados usando Axios  
  → `batteryController.js`, `temperatureController.js`
- **View**: interface React (componentes gráficos, sidebar, telas)  
  → `Dashboard.jsx`, `BatteryChart.jsx`, `Sidebar.jsx`, etc.

### Principais pastas (em `src/`):
| Pasta            | Conteúdo Principal                                  |
|------------------|-----------------------------------------------------|
| `components/`    | Gráficos, Sidebar, vídeo de boas-vindas            |
| `controllers/`   | Chamada de APIs com `axios`                         |
| `models/`        | Formatação de dados da API                          |
| `services/`      | Instância do `axios`                                |
| `styles/`        | CSS modular por componente                          |
| `views/`         | Páginas: Welcome e Dashboard                        |
| `App.jsx`        | Roteamento manual entre telas com `useState`       |


## 2. Tecnologias Utilizadas

| Tecnologia       | Finalidade                                          |
|------------------|-----------------------------------------------------|
| React + Vite     | SPA moderna e leve                                  |
| Axios            | Requisições HTTP para o backend                     |
| Recharts         | Gráficos interativos e responsivos                  |
| CSS Modules      | Escopo de estilo isolado por componente             |
| Ktor (Kotlin)    | Backend da API de sensores                          |
| Docker           | Containerização do backend                          |
| CORS             | Liberação de requisições entre front e back         |


## 3. Funcionalidades Implementadas

### Tela Inicial (Welcome)
- Vídeo de fundo animado
- Botão "Entrar" que leva ao dashboard (`setPage("dashboard")`)

### Dashboard
- Consome dados das rotas:
  - `GET /battery`
  - `GET /temperature`
- Exibe **quatro gráficos**:
  - Corrente Instantânea (linha)
  - Nível da Bateria (linha)
  - Temperatura da Bateria (linha)
  - Temperatura da CPU (linha)

### Tooltips customizadas
- Ao passar o mouse no gráfico:
  - Exibe: **data e hora**, **corrente (mAh)**, **capacidade (%)**, **temperaturas (°C)**

### Barra Lateral (Sidebar)
- Sincronizada com os gráficos via `onMouseMove`
- Exibe:
  - Tipo de plug (USB, AC, etc.)
  - Status da bateria (Charging, Full, etc.)
  - Corrente e voltagem
  - Temperaturas em tempo real

### Formatação de Dados
- `plug_type: 2 → "USB"`
- `battery_status: 3 → "Discharging"`
- `timestamp (ms) → DD/MM/AA HH:mm:ss`
- `temperaturas` convertidas de milésimos para graus (ex: `80300 → 80.3°C`)


## 4. Plano de Estudo por Blocos

| Bloco                      | Conteúdo dominado                                 |
|---------------------------|----------------------------------------------------|
| **React (20%)**           | `useState`, `useEffect`, props, reuso de componentes |
| **API / Axios (15%)**     | Criação de instância com `axios.create()`, tratamento de resposta |
| **Recharts (25%)**        | Gráficos, `Tooltip`, `onMouseMove`, `LineChart`     |
| **Arquitetura (20%)**     | Separação MVC, CSS modular, estrutura limpa e reutilizável |
| **Backend / CORS (20%)**  | API com Ktor, leitura de `data.json`, liberação de CORS |


## 5. Porquês e Justificativas

### 1. Por que usei `useState` e `useEffect`?
- `useState`: controle de estado para dados, seleção e navegação
- `useEffect`: chamadas iniciais à API assim que o componente carrega

### 2. Como sincronizei os gráficos com a Sidebar?
- Com o evento `onMouseMove` do Recharts
- Esse evento envia os dados para o `Dashboard`, que atualiza o estado
- Esse estado é passado como `props` para o componente `Sidebar`

### 3. Como funciona a navegação entre telas?
- Estado `page = "welcome"` por padrão
- Ao clicar em "Entrar", a função `setPage("dashboard")` muda o estado
- O JSX alterna entre `<Welcome />` e `<Dashboard />` com base nesse estado

### 4. O que é `axios.create()`?
- Cria uma instância com a `baseURL` do backend
- Evita repetir `"http://localhost:8080"` em toda requisição
- Torna o código mais limpo e reutilizável
