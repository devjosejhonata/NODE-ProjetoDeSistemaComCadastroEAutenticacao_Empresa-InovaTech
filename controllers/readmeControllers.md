A pasta controllers contém a lógica de controle do sistema, gerenciando a interação entre as rotas e as funções do backend.  
Cada método implementado nesta pasta é responsável por processar as requisições e retornar respostas apropriadas.

## Arquivo: `controllers/index.js`

# * Funções Exportadas * 

# 1. **showIndex**
- **Descrição:** Renderiza a página inicial.
- **Rota:** `/`
- **Método HTTP:** GET
- **Resposta:** Página `index`.

# 2. **showPageSignUp**
- **Descrição:** Renderiza a página de cadastro e exibe mensagens de erro, caso existam.
- **Rota:** `/signup`
- **Método HTTP:** GET
- **Parâmetros:**
  - `error` (Query String): Mensagem de erro a ser exibida.
- **Resposta:** Página `signUp`.

# 3. **showMembersPage**
- **Descrição:** Renderiza a página de membros, disponível apenas para usuários autenticados.
- **Rota:** `/members`
- **Método HTTP:** GET
- **Resposta:** Página `members`.

# 4. **get404Page**
- **Descrição:** Renderiza uma página personalizada para erros 404.
- **Rota:** Qualquer rota não encontrada.
- **Método HTTP:** GET
- **Resposta:** Página `404`.

# 5. **isAuthenticated**
- **Descrição:** Middleware para verificar se o usuário está autenticado.
- **Uso:** Inserido antes de rotas que requerem autenticação.
- **Comportamento:**
  - Redireciona para `/` se o usuário não estiver autenticado.
  - Permite a execução da próxima rota caso autenticado.

# 6. **signup**
- **Descrição:** Realiza o cadastro de novos usuários.
- **Rota:** `/signup`
- **Método HTTP:** POST
- **Fluxo:**
  - Verifica se o e-mail já está cadastrado.
  - Criptografa a senha utilizando `bcrypt`.
  - Salva os dados do novo usuário no banco de dados.
  - Redireciona para a página de login ou retorna erro.
- **Parâmetros (Body):**
  - `username` (String): Nome do usuário.
  - `email` (String): E-mail do usuário.
  - `password` (String): Senha do usuário.

# 7. **login**
- **Descrição:** Autentica um usuário usando e-mail e senha.
- **Rota:** `/login`
- **Método HTTP:** POST
- **Fluxo:**
  - Verifica se o e-mail existe no banco de dados.
  - Valida a senha utilizando `bcrypt`.
  - Usa o método `req.login` do Passport para gerenciar a sessão.
  - Redireciona para `/members` em caso de sucesso.
  - Retorna erro em caso de falha.
- **Parâmetros (Body):**
  - `email` (String): E-mail do usuário.
  - `password` (String): Senha do usuário.

# 8. **logout**
- **Descrição:** Realiza o logout do usuário.
- **Rota:** `/logout`
- **Método HTTP:** GET
- **Fluxo:**
  - Encerra a sessão do usuário usando `req.logout`.
  - Limpa o cookie de sessão.
  - Redireciona para a página inicial.

# * Observações* 

- A autenticação é gerenciada usando o middleware Passport.
- A senha dos usuários é armazenada de forma segura, utilizando o algoritmo de hashing `bcrypt`.
- As mensagens de erro são exibidas no terminal e, em alguns casos, redirecionadas para a interface do usuário.

# * Dependências *
- **bcrypt:** Para criptografar e validar senhas.
- **Passport:** Para gerenciamento de sessões e autenticação.

