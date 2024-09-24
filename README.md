# 🛒 Comparação de Gerenciamento de Estado com Redux e Zustand

## Sobre

Este repositório contém o código para uma aplicação **React** que compara o gerenciamento de estado utilizando **Redux** e **Zustand**. A aplicação permite alternar entre essas duas soluções para gerenciar o estado global do carrinho de compras e utiliza **React Query** para consumo de uma API externa de produtos.

## Funcionalidades Principais

- **Alternância entre Redux e Zustand**: O usuário pode alternar entre Redux e Zustand em tempo real.
- **Carrinho de Compras**: Os produtos podem ser adicionados ou removidos do carrinho.
- **React Query**: O consumo da API de produtos é gerenciado pelo React Query.
- **Interface Simples**: Uma interface básica para visualizar produtos e o carrinho.

## Estrutura de Pastas

```bash
/src
  /components
    Header.js           # Componente de cabeçalho com título e botão de alternância entre Redux e Zustand
    ProductList.js      # Exibe a lista de produtos
    ProductItem.js      # Componente para cada produto individual
    Cart.js             # Exibe os produtos no carrinho
  /redux
    store.js            # Configuração da store Redux
    cartSlice.js        # Slice para gerenciamento do estado do carrinho em Redux
  /zustand
    useCartStore.js     # Store Zustand para gerenciamento do carrinho
    ZustandCartProvider.js # Wrapper opcional para Zustand
  /hooks
    useProducts.js      # Hook que utiliza React Query para buscar produtos
  /api
    productApi.js       # Funções para consumo da API de produtos
  App.js                # Componente principal que integra todas as funcionalidades
  index.js              # Entrada da aplicação React
```

## Tecnologias Utilizadas

- **React**: Construção da interface de usuário.
- **Redux**: Gerenciamento de estado global com store e slices.
- **Zustand**: Alternativa ao Redux para gerenciamento de estado global.
- **React Query**: Gerenciamento de estado assíncrono e cache de dados da API.
- **Axios**: Cliente HTTP para consumo da API externa.

## Como Executar o Projeto Localmente

### Pré-requisitos:

- **Node.js** instalado.
- **pnpm** instalado (recomendado).

### Passos:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/usuario/redux-zustand.git
   ```

2. **Instale as dependências**:
   Navegue até o diretório do projeto e execute:

   ```bash
   pnpm install
   ```

3. **Inicie o servidor**:
   Execute o seguinte comando para iniciar o servidor localmente:

   ```bash
   pnpm run dev
   ```

4. **Acesse a aplicação**:
   Acesse [http://localhost:5173](http://localhost:5173) no seu navegador para ver a aplicação rodando.

## Como Alternar entre Redux e Zustand

Na página principal, há um botão que permite alternar entre **Redux** e **Zustand**. Esse botão, localizado no cabeçalho, altera dinamicamente o gerenciamento de estado utilizado no carrinho de compras.

## Testes

Testes unitários foram implementados para testar a lógica dos hooks e o gerenciamento de estado com Redux e Zustand.

<!-- ### Para rodar os testes:

Execute o seguinte comando:

```bash
npm test
# ou
yarn test
```
 -->

## Documentação Adicional

- **Redux**: [Documentação Oficial](https://redux.js.org/)
- **Zustand**: [Documentação Oficial](https://docs.pmnd.rs/zustand/getting-started/introduction)
- **React Query**: [Documentação Oficial](https://react-query.tanstack.com/overview)

## Contribuição

Contribuições são bem-vindas! Para contribuir com este repositório:

1. Faça um fork deste repositório.
2. Crie uma nova branch: `git checkout -b minha-feature`.
3. Commit suas alterações: `git commit -m 'Minha nova feature'`.
4. Push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](./LICENSE).

---
