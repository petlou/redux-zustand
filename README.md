# 🛒 Comparação de Gerenciamento de Estado com Redux e Zustand

> Status do Projeto: :warning: (em desenvolvimento).

## 🚀 Sobre

Este repositório contém uma aplicação **React** que compara o uso de duas das bibliotecas mais populares para gerenciamento de estado global: **Redux** e **Zustand**. A aplicação permite alternar entre essas duas abordagens para gerenciar o **carrinho de compras** e utiliza **React Query** para consumir dados de uma API externa.

O objetivo é fornecer uma comparação prática entre as duas soluções, facilitando a escolha de qual utilizar em seu próximo projeto!

## 🎯 Funcionalidades

- **Alternância entre Redux e Zustand**: Troque facilmente entre as duas soluções de gerenciamento de estado em tempo real.
- **Carrinho de Compras**: Gerencie o carrinho com funcionalidades de adicionar e remover produtos.
- **React Query**: Consome dados de produtos de uma API externa e gerencia o estado assíncrono de maneira eficiente.
- **Interface Intuitiva**: Visualize os produtos e o estado do carrinho de maneira simples e clara.

## 🧑‍💻 Estrutura do Projeto

```
/src
  /components
    Header.js               # Componente de cabeçalho com alternância entre Redux e Zustand
    ProductList.js          # Exibe a lista de produtos
    ProductItem.js          # Componente para exibição de um único produto
    Cart.js                 # Componente que exibe os itens do carrinho
  /redux
    store.js                # Configuração da store Redux
    cartSlice.js            # Slice para gerenciamento do carrinho com Redux
  /zustand
    useCartStore.js         # Store Zustand para gerenciamento do carrinho
    ZustandCartProvider.js  # Wrapper opcional para Zustand
  /hooks
    useProducts.js          # Hook com React Query para busca de produtos
  /api
    productApi.js           # Funções para interação com a API de produtos
  App.js                    # Componente principal que integra a aplicação
  index.js                  # Ponto de entrada da aplicação React
```

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface de usuário.
- **Redux**: Gerenciamento de estado global com store e slices.
- **Zustand**: Alternativa leve e simples ao Redux para gerenciamento de estado.
- **React Query**: Gerenciamento eficiente de dados assíncronos e caching.
- **Axios**: Cliente HTTP para consumo da API externa.

## 💻 Como Executar Localmente

### Pré-requisitos

Antes de começar, você precisa ter o seguinte instalado em sua máquina:

- **Node.js** (versão recomendada: 16.x ou superior).
- **pnpm** (recomendado) para gerenciamento de dependências.

### Passos para Execução

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/petlou/redux-zustand.git
   ```

2. **Instale as dependências**:

   ```bash
   pnpm install
   ```

3. **Inicie o servidor local**:

   ```bash
   pnpm run dev
   ```

4. Abra a aplicação no navegador em: [http://localhost:5173](http://localhost:5173).

## 📜 Licença

Este projeto foi desenvolvido para fins educacionais. Sinta-se à vontade para estudar, utilizar e adaptar!

