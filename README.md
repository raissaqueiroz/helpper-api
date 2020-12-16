# Blog API

Essa documentação contem todas as orientações para usar a API do blog da Fluência Corporal.

- **STACK PRINCIPAL**

    - JavaScript
    - NodeJS com Express
    - MongoDB com Mongoose
    - Padrões REST
    -
- **O QUE FOI UTILIZADO E ABSORVIDO DURANTE O PROJETO**

    - Criação de API's
    - Padrões **REST**
    - Verbos **HTTPS**
    - Status Code
    - Endpoints Amigáveis
    - Params, Querys e afins
    - Autenticação com **JWT**
    - Criptografias & Hashs com **Bcrypt**
    - Padronização de Cógico com **ESlint**, **Prettier** e **EditorConfig**
    - Banco de Dados não Relacional **MongoDB**, utilizando **Mongoose**
    - "Travando" Requisições pra API com **CORS**
    - Variáveis de Ambiente com **DotEnv**
    - Validações com **YUP**
    - Testando Requisição pra API com **Insominia**
    - Estrutura **MVC**
    - Upload com **Multer**

- **INSTALAÇÃO**
    1. Será necessário uma string de conexão com o MongoDB. Caso você não tenha uma ainda, você pode criar no atlas através [desse link](https://www.mongodb.com/cloud/atlas/register)
    2. Você irá precisar ter o NodeJS e o NPM instalados no seu computador. [Clique aqui](https://nodejs.org/en/) para baixar o NodeJS. O NPM já vem com o NodeJS.
    3. Baixe o repositório deste projeto no seu computador. Você poderá fazer isso através do botão "code" que tem ali em cima, basta clicar nele e em seguida em download ZIP.
    4. Localize o arquivo recem baixado no seu computador e descompate-o.
    5. Abra a pasta que descompactou e localize o arquivo .env
    6. Abra o arquivo .env e add a vaiavel de ambiente MONGO_URL.
    7. O valor dessa variável deve ser correspondente a string de conexão do MongoDB que você criou na etapa 00. Ficará assim: MONGO_URL=string_de_conexao
    8. Abra o Prompt de Comando do seu computador (CMD)
    9. Através do Prompt navegue até a pasta que você acabou de descompactar.
    10. Digite o comando `npm install` e aperte enter
    11. Aguarde terminar de instalar todas as dependências
    12. Digite o comando `npm start` e aperte enter (Caso esteja desenvolvendo e deseje ver as alterações refletidas em tempo real utilize `npm run dev` ao invés do `npm start`)
    13. Pronto! a API estará rodando na porta 3333. Caso você deseje alterar para outra porta, basta adicionar ao aquivo .env do projeto como no exemplo a seguir: `PORT=3333`.

- **URL PRODUÇÃO**

    **URL API EM PRODUÇÃO: *https://dev.fluenciacorporal.com***

## Endpoints

- **Autenticação**

    *Método para logar usuário. Ele retorna o id, nome, telefone, foto, status e email e token de acesso.*

    **POST */sessions***

    ```jsx
    {
    	"email": "examplo@gmail.com",
    	"senha": "exemplo123"
    }
    ```

- **Recuperar Conta**

    *Método para recuperar senha do usuário. Ele altera a senha do usuário pra uma senha aleatória e encaminha um e-mail para o usuário contendo essa senha*

    **PATCH */sessions***

    ```jsx
    { "email": "examplo@gmail.com" }
    ```

- **Exibir Dados de Usuário Autenticado**

    *Método para exibir dados do usuário que está autenticado no momento da requisição. Ele retorna o id, nome e email.*

    **GET */sessions***

- **Editar Dados de Usuário Autenticado**

    *Método para exibir dados do usuário que está autenticado no momento da requisição.*

    **PUT */sessions***

    ```jsx
    {
    	"nome": "Exemplo Nome",
    	"email": "examplo@gmail.com",
    	"senha_anterior": "senhaAnterior123",
    	"senha": "novaSenha123",
      "senha_confirme": "novaSenha123",
      "
    }
    ```

- **Criar Usuários**

    *Método para logar usuário. Ele retorna o id, nome, telefone, foto, status e email e token de acesso.*

    **POST */users***

    ```jsx
    {
    	"nome": "Exemplo Nome",
    	"email": "examplo@gmail.com",
    	"senha": "exemplo123"
    }
    ```

- **Listar Usuários**

    Método para listar usuários. É necessário o token de acesso gerado na rota de `/sessions`. Além disso, É possivel adicionar filtros nas buscas através do Router Query, como por exemplo `GET /users?status=false`.

    Veja a seguir uma lista de filtros disponíveis:

    - `?status=[true_or_false]` -> Status do Usuário
    - `?email=[string_email_de_usuario]` -> Email de Acesso do Usuário
    - `?nome=[string_nome_de_usuario]` -> Nome de Usuário

    **GET */users***

    *Token de Autorização em Headers*

    ```jsx
    { "Authorization": "Bearer Token" }
    ```

- **Exibir Dados de um Usuário**

    Método para listar usuário especifico. É necessário o token de acesso gerado na rota de `/sessions`. Além disso, É possivel adicionar filtros nas buscas através do Router Query, como por exemplo `GET /users?status=false`.

    Veja a seguir uma lista de filtros disponíveis:

    - `?status=[true_or_false]` -> Status do Usuário
    - `?email=[string_email_de_usuario]` -> Email de Acesso do Usuário
    - `?nome=[string_nome_de_usuario]` -> Nome de Usuário

    **GET */users/:user_id***

    *Token de Autorização em Headers*

    ```jsx
    { "Authorization": "Bearer Token" }
    ```

- **Editar Usuário**

    Método para editar usuário especifico. É necessário o token de acesso gerado na rota de `/sessions`.

    **GET */users/:user_id***

    *Corpo da Requisição*

    ```jsx
    {
    	"nome": "Exemplo Nome",
    	"email": "examplo@gmail.com",
    	"senha": "exemplo123",
    	"senha_confirme": "exemplo123"
    }
    ```

    *Token de Autorização em Headers*

    ```jsx
    { "Authorization": "Bearer Token" }
    ```

- **Criar Postagem**

    Método para cadastrar novo Post. É necessário, além do corpo da requisição, o token de acesso gerado na rota de `/sessions`. Importante enviar formulário do tipo Multiform/Data.

    **POST */posts***

    ```jsx
    {
    	"titulo": "Exemplo de Titulo",
    	"descricao": "Descrição da Postagem",
    	"conteudo": "<p> HTML da sua Postagem </p>",
    	"url": "exemplo-de-titulo",
    	"autor": "Nome Autor da Postagem",
    	"categoria_id": ["id_categoria"],
    	"palavrasChaves": ["esporte", "educação"],
    	"like": 0,
    	"deslike": 0
    	"status": true,
    	"thumbnail": <FILE>,

    }
    ```

    *Token de Autorização em Headers*

    ```jsx
    { "Authorization": "Bearer Token" }
    ```

- **Listar Postagens**

    Método para listar postagens. É necessário o token de acesso gerado na rota de `/sessions`. Além disso, É possivel adicionar filtros nas buscas através do Router Query, como por exemplo `GET /posts?status=false`.

    Veja a seguir uma lista de filtros disponíveis:

    - `?status=[true_or_false]` -> Status da Postagem
    - `?categoria=[string_categoria]` -> ID da Categoria da Postagem
    - `?palavra_chave=[string_palavra_chave]` -> Palavra Chave da Postagem
    - `?url=[string_url_de_postagem]` -> Titulo da URL da Postagem

    **GET */posts***

    *Token de Autorização em Headers*

    ```jsx
    { "Authorization": "Bearer Token" }
    ```

- **Exibir Dados de uma Postagem**

    Método para exibir dados de uma postagem especifica. É necessário o token de acesso gerado na rota de `/sessions`. Além disso, É possivel adicionar filtros nas buscas através do Router Query, como por exemplo `GET /posts?status=false`.

    Veja a seguir uma lista de filtros disponíveis:

    - `?status=[true_or_false]` -> Status da Postagem
    - `?categoria=[string_categoria]` -> ID da Categoria da Postagem
    - `?palavra_chave=[string_palavra_chave]` -> Palavra Chave da Postagem
    - `?url=[string_url_de_postagem]` -> Titulo da URL da Postagem

    **GET */posts/:post_id***

    *Token de Autorização em Headers*

    ```jsx
    { "Authorization": "Bearer Token" }
    ```

- **Editar Postagem**

    Método para editar Post. É necessário, além do corpo da requisição, o token de acesso gerado na rota de `/sessions`.

    **PUT */posts/:post_id***

    ```jsx
    {
    	"titulo": "Exemplo de Titulo",
    	"descricao": "Descrição da Postagem",
    	"conteudo": "<p> HTML da sua Postagem </p>",
    	"url": "exemplo-de-titulo",
    	"autor": "Nome Autor da Postagem",
    	"categoria_id": ["id_categoria"],
    	"palavrasChaves": ["esporte", "educação"],
    	"like": 0,
    	"deslike": 0
    	"status": true,
    	"thumbnail": <FILE>,
    }
    ```

    *Token de Autorização em Headers*

    ```jsx
    { "Authorization": "Bearer Token" }
    ```

- **Criar Comentário**

    Método para Criar Comentário no Post. Não é necessárop estar autenticado

    **POST */comments***

    ```jsx
    {
    	"name": "Raissa Queiroz",
    	"email": "raifreelas@gmail.com",
    	"content": "Post Maravilhoso!",
    	"post_id": "<id_do_post>",
    	"like": 0,
    	"deslike": 0,
    	"denouce": 0,
    	"status": true,
    }
    ```

- **Editar Comentário**

    Método para editar Comentário do Post. É necessário, além do corpo da requisição, o token de acesso gerado na rota de `/sessions`.

    **PUT */comments/:comment_id***

    ```jsx
    {
    	"name": "Raissa Queiroz",
    	"email": "raifreelas@gmail.com",
    	"content": "Post Maravilhoso!",
    	"post_id": "<id_do_post>",
    	"like": 0,
    	"deslike": 0,
    	"denouce": 0,
    	"status": true,
    }
    ```

    *Token de Autorização em Headers*

    ```jsx
    { "Authorization": "Bearer Token" }
    ```

- **Listar Comentário**

    Método para listar Todos os Comentários. Não é necessário estar autenticado. Além disso, É possível adicionar filtros nas buscas através do Router Query, como por exemplo `GET /comments?status=false`.

    Veja a seguir uma lista de filtros disponíveis:

    - `?status=[true_or_false]` -> Status do Comentário
    - `?post_id=[string_id_post]` -> ID da Postagem
    - `?email=[string_email]` -> Palavra Chave da Postagem
    - `?name=[string_name]` -> Titulo da URL da Postagem

    **GET */comments***

- **Exibir Dados de um Comentário**

    Método para exibir informações de um comentário específico. Não é necessário estar autenticado. Além disso, É possível adicionar filtros nas buscas através do Router Query, como por exemplo `GET /comments/comment_id?status=false`.

    Veja a seguir uma lista de filtros disponíveis:

    - `?status=[true_or_false]` -> Status do Comentário
    - `?post_id=[string_id_post]` -> ID da Postagem
    - `?email=[string_email]` -> Palavra Chave da Postagem
    - `?name=[string_name]` -> Titulo da URL da Postagem

    **GET */comments/comment_id***

- **Criar Categoria**

    Método para criar uma Categoria. É necessário, além do corpo da requisição, o token de acesso gerado na rota de `/sessions`.

    **POST */categories***

    ```jsx
    {
    	"titulo": "Saúde",
    	"descricao": "Descrição da Categoria",
    	"status": true,
    }
    ```

    *Token de Autorização em Headers*

    ```jsx
    { "Authorization": "Bearer Token" }
    ```

- **Editar Categoria**

    Método para editar uma Categoria. É necessário, além do corpo da requisição, o token de acesso gerado na rota de `/sessions`.

    **PUT */categories/:category_id***

    ```jsx
    {
    	"titulo": "Saúde",
    	"descricao": "Descrição da Categoria",
    	"status": true,
    }
    ```

    *Token de Autorização em Headers*

    ```jsx
    { "Authorization": "Bearer Token" }
    ```

- **Listar Categoria**

    Método para editar Post. É necessário, além do corpo da requisição, o token de acesso gerado na rota de `/sessions`.

    **PUT */posts/:post_id***

    ```jsx
    {
    	"titulo": "Exemplo de Titulo",
    	"descricao": "Descrição da Postagem",
    	"conteudo": "<p> HTML da sua Postagem </p>",
    	"url": "exemplo-de-titulo",
    	"autor": "Nome Autor da Postagem",
    	"categorias": ["esporte", "educação"],
    	"palavrasChaves": ["esporte", "educação"],
    	"comentarios": [
    		{
    			"status": true,
    			"nome": "Exemplo Nome",
          "conteudo": "Exemplo de Comentário. Ficou Otimo!"
    		}
    	],
    	"status": true,
    	"img": "exemplo-de-titulo.png",

    }
    ```

    *Token de Autorização em Headers*

    ```jsx
    { "Authorization": "Bearer Token" }
    ```

- **Exibir Informações de uma Categoria**

    Método para exibir dados de uma postagem especifica. É necessário o token de acesso gerado na rota de `/sessions`. Além disso, É possivel adicionar filtros nas buscas através do Router Query, como por exemplo `GET /posts?status=false`.

    Veja a seguir uma lista de filtros disponíveis:

    - `?status=[true_or_false]` -> Status da Postagem
    - `?titulo=[string_titulo]` -> Titulo da Categoria

    **GET */categories***

- **Listar Titulo e URL de Post por Nome de Categoria**

    Método para exibir dados de uma postagem especifica. É necessário o token de acesso gerado na rota de `/sessions`. Além disso, É necessário passar o nome da categoria ao qual gostaria de listar os posts vinculados assim: `?category_name=saude`

    **GET */categories/posts***
