# Nome do projeto e objetivos

- O projeto E-Commerce Webcars é um site de anúncios para compra e venda de veículos, que foi desenvolvido para formação no curso de desenvolvimento Fullstack da Kenzie Academy Brasil.

# Principais features da aplicação

- Registro, edição e exclusão de usuários.
- Login
- Registro, listagem, edição e exclusão de anúncios.
- Filtro para busca de anúncios. 
- Redirecionamento para contato do anunciante

# API ultilizada na aplicação

- **[API](https://kenzie-kars.herokuapp.com/)**


# Back-end

## 1. Tecnologias

Principais tecnologias utilizadas.

- **[TypeScript](https://www.typescriptlang.org/)**

- **[Express](https://expressjs.com/)**

- **[Postgres](https://www.postgresql.org/)**

## 2. Diagrama ER

Diagrama ER da API definindo as relações entre as entidades do banco de dados.

- **[Diagrama](https://github.com/web-cars/projeto_full_stack_web_cars/blob/develop/backend/DER.png?raw=true)**

## 3. Rodando localmente

### 3.1 Clone o projeto em sua máquina e instale as depêndencias da aplicação

Instale as dependências de acordo com seu gerenciador de pacotes, exemplo (yarn):

```bash
yarn install
```

### 3.2 Crie e preencha o arquivo .env

```bash
Crie um arquivo .env, seguindo como base o arquivo .env.example e preencha os dados de conexão com o banco de dados
```

### 3.3 Rode as migrations:

```bash
yarn typeorm migration:run -d src/data-source.ts
```

### 3.4 Rodando o servidor localmente

Execute o comando em seu terminal:

```bash
yarn dev
```

### 4. Acessar documentação swagger

http://localhost:3000/api-docs/



# Front-end

## 1. Tecnologias

Principais tecnologias utilizadas.

- **[React (JavaScript)](https://pt-br.legacy.reactjs.org/docs/getting-started.html)**
  (Principais bibliotecas: React-Hook-Form, React-Router-Dom, Zod, Axios)
  
- **[TypeScript](https://www.typescriptlang.org/)**
  
- **[Chakra UI](https://chakra-ui.com/)**

## 2. Figma da aplicação

**[Figma](https://www.figma.com/file/KX3C3fIi8zmCRpNipxIYYF/M6---E-Commerce-Filter?type=design&node-id=45-2&t=Ys3VsYb1TGGubQnr-0)**

## 3. Rodando localmente

### 3.1 Clone o projeto em sua máquina e instale as depêndencias da aplicação

- Instale as dependências de acordo com seu gerenciador de pacotes, exemplo (yarn):

```bash
yarn install
```
- Para rodar a aplicação de acordo com seu gerenciador de pacotes, exemplo:
  
```bash
yarn dev
```

