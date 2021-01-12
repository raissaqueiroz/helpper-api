# Helpper API

Essa documentação contem todas as orientações para usar a API de consulta de clientes desenvolvida para o processo seletivo na Helpper.

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
    - Padronização de Cógico com **ESlint**, **Prettier** e **EditorConfig**
    - Banco de Dados não Relacional **MongoDB**, utilizando **Mongoose**
    - "Travando" Requisições pra API com **CORS**
    - Variáveis de Ambiente com **DotEnv**
    - Validações com **YUP**
    - Testando Requisição pra API com **Insominia**
    - Estrutura **MVC**

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

- **URL DA API: http://localhost:3333**

---

## Endpoints
