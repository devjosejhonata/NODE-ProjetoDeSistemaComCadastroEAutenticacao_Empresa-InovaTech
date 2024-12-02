A pasta models contém as definições das entidades do projeto e os métodos necessários para interagir com o banco de dados. Este diretório é essencial para gerenciar as operações relacionadas aos dados no MongoDB.

## arquivos
Arquivo: user.js

O arquivo user.js define o modelo User, que representa os usuários cadastrados no sistema. Ele inclui métodos para criar, salvar e buscar usuários na base de dados, utilizando o MongoDB como armazenamento.

## Classe: User
Propriedades
- username: Nome do usuário.
- email: Endereço de e-mail do usuário.
- password: Senha armazenada de forma segura (criptografada).
- githubId: ID único do GitHub (caso o login seja realizado por GitHub).
- googleId: ID único do Google (caso o login seja realizado por Google).

Métodos Principais
- save(): Salva o usuário na coleção users do banco de dados.
- findByEmail(email): Busca um usuário pelo e-mail cadastrado.
- findById(id): Busca um usuário pelo identificador único do MongoDB.
- findOne(query): Realiza uma busca personalizada utilizando critérios específicos, como googleId ou githubId.

## Banco de Dados
Os dados dos usuários são armazenados na coleção users do MongoDB. Cada documento contém as informações necessárias para autenticação e identificação dos usuários no sistema.
Exemplo de estrutura no banco:
- Nome de usuário.
- E-mail.
- Senha criptografada.
- IDs para login via provedores externos (opcionais).

## Dependências
- MongoDB: Banco de dados utilizado para armazenar os documentos de usuários.
- Utilitário getDb: Função para gerenciar a conexão com o banco.