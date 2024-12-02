A pasta routes contém as definições das rotas da aplicação. Este diretório gerencia o fluxo de requisições e respostas, conectando os endpoints às respectivas funcionalidades nos controllers.

## Arquivos: 

- routes.js
Descrição: O arquivo routes.js define todas as rotas disponíveis na aplicação, organizando as ações que cada endpoint deve realizar. Ele utiliza o Express.js para gerenciar as rotas e o Passport.js para autenticação de usuários com provedores externos como Google e GitHub.

## Principais Rotas
Rotas Públicas:
- GET /
Exibe a página inicial da aplicação.

- GET /signup
Exibe a página de cadastro de usuários.

- POST /signup
Processa o formulário de cadastro de usuários.

- POST /login
Processa o login de usuários por e-mail e senha.

## Rotas de Autenticação com Provedores Externos
- GET /auth/github
Inicia o fluxo de autenticação com o GitHub.

- GET /auth/github/callback
Callback para autenticação com o GitHub. Redireciona para /members em caso de sucesso ou / em caso de falha.

- GET /auth/google
Inicia o fluxo de autenticação com o Google.

- GET /auth/google/callback
Callback para autenticação com o Google. Redireciona para /members em caso de sucesso ou / em caso de falha.

## Rotas Protegidas
- GET /members
Exibe a página de membros.

- Proteção: Só é acessível por usuários autenticados.
GET /logout
Realiza o logout do usuário e limpa a sessão.

- Rota de Erro
GET *
Exibe a página de erro 404 para rotas inexistentes.

## Middleware e Configurações
- Body Parser
Utilizado para processar formulários enviados via POST.

- Passport.js
Gerencia a autenticação de usuários com provedores externos como Google e GitHub.

- Controllers
As rotas delegam a lógica de negócios para os métodos exportados pelos controllers, mantendo o código organizado e modular.

## Observações
- Autenticação Protegida
A rota /members usa o middleware isAuthenticated para verificar se o usuário está autenticado antes de conceder acesso.

- Fluxo de Autenticação Externa
Certifique-se de que as chaves de autenticação (clientID, clientSecret, callbackURL) estão corretamente configuradas nos provedores externos e no arquivo de ambiente.

- Erros de Rota
Qualquer rota inexistente será redirecionada para a página 404 definida.

## Dependências
- Express.js: Framework de aplicação para gerenciar rotas e middleware.
- Passport.js: Middleware de autenticação para integração com provedores como Google e GitHub.