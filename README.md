# Codeburger-Back-End

## Descrição

Este é o back-end do projeto Codeburger, uma aplicação de pedidos online para uma hamburgueria desenvolvido em Node.js que utiliza PostgreSQL e MongoDB como bancos de dados, todos configurados em containers Docker.


## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)
- [Docker](https://www.docker.com/)

## Instalação

Siga os passos abaixo para configurar e rodar o projeto localmente.

### 1. Clone o repositório  do backend

```bash
git clone https://github.com/IgorTorquatto/Codeburger-Back-End.git
cd Codeburger-Back-End
```

### 2. Crie os containers Docker

```bash
docker run --name codeburger -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres

docker run --name mongo -p 27017:27017 -d -t mongo
```

### 3. Instale as dependências do backend

```bash
yarn install
```
### 4. Execute o backend

```bash
yarn dev
```

O backend estará disponível em http://localhost:3001

