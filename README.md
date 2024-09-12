# Em desenvolvimento: Instapets 

- [ x ] protótipos mobile.
- [ x ] protótipos web.

## 1. Tela de Login

- [ ] **Campos:**
  - Implementar campos de entrada para e-mail e senha no componente de login.
- [ ] **Botão de Login:**
  - Criar um botão de login que aciona a ação `login` no NGRX.
- [ ] **Ações e Efeitos:**
  - Criar ação `login` no NGRX.
  - Criar efeito para a ação `login` que faz a chamada ao backend para autenticação.
  - Se o login for bem-sucedido:
    - Atualizar o estado do usuário no NGRX.
    - Navegar para a tela de Feed.
  - Se o login falhar:
    - Exibir mensagem de erro para usuário não cadastrado ou credenciais inválidas.
- [ ] **Link para Cadastro:**
  - Implementar link para navegar para a tela de cadastro.

## 2. Tela de Cadastro

- [ ] **Campos:**
  - Implementar campos de entrada para nome, e-mail e senha no componente de cadastro.
- [ ] **Botão de Cadastrar:**
  - Criar um botão de cadastrar que aciona a ação `register` no NGRX.
- [ ] **Ações e Efeitos:**
  - Criar ação `register` no NGRX.
  - Criar efeito para a ação `register` que faz a chamada ao backend para registrar o usuário.
  - Se o cadastro for bem-sucedido:
    - Atualizar o estado do NGRX.
    - Exibir mensagem de sucesso e navegar para a tela de login.
  - Se o cadastro falhar:
    - Exibir mensagem de erro para dados inválidos.
- [ ] **Link para Login:**
  - Implementar link para navegar de volta para a tela de login.

## 3. Tela de Feed

- [ ] **Mensagem de Saudação:**
  - Exibir "Olá, [Nome]" com base no nome do usuário logado do estado.
- [ ] **Cards:**
  - Exibir cards com imagem, título e descrição.
- [ ] **Botões:**
  - **Editar:**
    - Criar botão de editar que aciona a ação `updateCard` no NGRX.
    - Criar efeito para a ação `updateCard` que atualiza o card no estado global.
    - Exibir mensagem de erro se a atualização falhar.
  - **Excluir:**
    - Criar botão de excluir que aciona a ação `deleteCard` no NGRX.
    - Criar efeito para a ação `deleteCard` que remove o card do estado global.
    - Exibir mensagem de erro se a exclusão falhar.
- [ ] **Rodapé:**
  - Criar botão "+" que navega para a tela de cadastro de novos cards.

## 4. Tela de Cadastro de Cards

- [ ] **Campos:**
  - Implementar campos para upload de imagem, título e descrição.
- [ ] **Botão Enviar:**
  - Criar botão de enviar que aciona a ação `addCard` no NGRX.
  - Criar efeito para a ação `addCard` que adiciona o novo card ao estado global e navega de volta para o feed.
  - Exibir mensagem de sucesso ou erro conforme o resultado da ação.

## Implementação

### 1. Front-End (Angular)

- [ ] **Componentes:**
  - Criar componentes para tela de login, tela de cadastro, tela de feed e tela de cadastro de cards.
- [ ] **NGRX:**
  - **Store:**
    - Gerenciar estados de autenticação, cards e mensagens.
  - **Actions:**
    - Definir ações para login, cadastro, adicionar, editar e excluir cards.
  - **Reducers:**
    - Atualizar o estado da aplicação com base nas ações.
  - **Effects:**
    - Gerenciar side effects, como chamadas ao back-end via NestJS.
- [ ] **Roteamento:**
  - Configurar navegação entre as telas.

### 2. Back-End (NestJS)

- [ ] **Endpoints de Autenticação:**
  - Implementar endpoint para login (POST `/auth/login`).
  - Implementar endpoint para registro de usuário (POST `/auth/register`).
- [ ] **Endpoints de Cards:**
  - Implementar endpoint para adicionar um novo card (POST `/cards`).
  - Implementar endpoint para listar todos os cards (GET `/cards`).
  - Implementar endpoint para atualizar um card existente (PUT `/cards/:id`).
  - Implementar endpoint para excluir um card (DELETE `/cards/:id`).

### 3. Banco de Dados (Firestore)

- [ ] **Coleções:**
  - Criar coleção para armazenar informações de cards.
  - Criar coleção para armazenar informações de usuários.



<!-- # InstapetAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->
