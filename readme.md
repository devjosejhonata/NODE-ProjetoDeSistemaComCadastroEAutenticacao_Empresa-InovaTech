: PROJETO EM FASE DE DESENVOLVIMENTO :

Nesse projeto, estou trabalhando em um sistema que contém cadastro e tratamento de dados de usuários para uma empresa. Projeto sendo desenvolvido em colaboração com uma equipe de desenvolvimento, onde uma parte do código já foi fornecida pronta e eu fiquei responsável por desenvolver a minha parte implementando algumas funcionalidades. Fiquei responsável por programar a parte de cadastro do usuário para acessar o sistema, pegando nome, email, senha, guardar as informações no banco de dados, programar o login no sistema, implementar a autenticação. Também, fiquei responsável por implementar a proteção de rotas na aplicação, para somente quem é membro do sistema conseguir acessar a rota de membros, e criar a autenticação com o OAauth para o GitHub.

- Tecnologias empregadas no Projeto: Node, Javascript, Docker, MongoDB, Express, ejs, body-parser. 

- Estou executando o MongoDB através do Docker. 

- Subir o servidor atraves de npm run dev, sera executado na porta 3000.

- Arquitetura utilizada no projeto: MVC;

- Estou utilizando a biblioteca "node.bcrypt.js" para gerar as hashs das senhas salvas no banco de dados, para as senhas criptografadas: npm i bcrypt ;

- Estou utilizando a biblioteca express-session para gerencias as sessões de usuarios para autenticação, npm i express-session;

- Estou utilizando o OAuth 2.0 para realizar a autenticação para fazer a integração do sistema com conta do Google ou GitHub, permitindo o login no sistema através de conta do google ou github;

- Utilizando o Passport-github2 para login com o github, npm i passport passport-github2;

- Utilizando a biblioteca dotenv para armazenar arquivos sensíveis da aplicação com ., npm i dotenv;

- Dependências instaladas para integrar o login com o Google: npm install passport-google-oauth20
