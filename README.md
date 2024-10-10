# Calculadora React

## 📃 Descrição

Este projeto é uma calculadora básica desenvolvida utilizando a biblioteca React.js. Ela permite realizar operações matemáticas simples, como adição, subtração, multiplicação, divisão e cálculo de porcentagem.

## 🚀 Tecnologias Utilizadas

- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **HTML**: Linguagem de marcação para estruturação do conteúdo.
- **CSS**: Linguagem de estilo para apresentação visual do conteúdo.
- **Styled Components (opcional)**: Biblioteca para criação de componentes React com estilos personalizados e reusáveis.

## 🚧 Pré-requisitos

- **Node.js e npm (ou yarn)**: Certifique-se de ter o Node.js e o gerenciador de pacotes npm (ou yarn) instalados em seu sistema.

## 📥 Instalação

1. Clone o repositório: `git clone <url_do_repositorio>`
2. Acesse a pasta do projeto: `cd calculadora-react`
3. Instale as dependências: `npm install`

## 💻 Execução

1. Inicie o servidor de desenvolvimento: `npm start`

- A aplicação será aberta em seu navegador padrão, geralmente em <http://localhost:3000>.

## 📌 Funcionalidades

- **Limpar (C)**: Limpa o visor e reinicia a calculadora.
- **Modo Escuro/Claro**: Alterna entre os temas claro e escuro.
- **Porcentagem (%)**: Calcula a porcentagem de um valor armazenado.
- **Operações Aritméticas**:
  - `+`, `-`, `x`, `÷`: Realizam as respectivas operações.
  - `=`: Avalia a operação pendente.
- **Entrada de Números**:
  - Botões numéricos (0-9): Adicionam dígitos ao visor.
  - `.`: Adiciona um ponto decimal ao visor.
  - `+/-`: Inverte o sinal do número no visor.

## 🔧 Estrutura do Código

- **Componentes**: A aplicação é dividida em componentes funcionais, como `Button` e `Input`, facilitando a organização e reutilização do código.
- **Estado**: Variáveis de estado gerenciam o valor atual no visor, o primeiro número da operação, a operação em curso e o tema atual.
- **Lógica**: As funções de manipulação de eventos (como `handleClick`, `handleClear`, etc.) implementam a lógica da calculadora, atualizando o estado conforme necessário.
