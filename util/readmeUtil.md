A pasta utils contém módulos auxiliares que oferecem suporte às funcionalidades principais do projeto. Esses utilitários ajudam a gerenciar conexões com o banco de dados e o armazenamento de sessões.

## Arquivos
- 1. database.js
- Este módulo gerencia a conexão com o banco de dados MongoDB.

- Função mongoConnect(callback): Estabelece a conexão com o MongoDB utilizando o URI configurado (mongodb://localhost:27017/) e executa o callback ao conectar com sucesso.

- Função getDb():^Retorna a instância do banco de dados conectada.

- Erro: Lança uma exceção caso a conexão ainda não tenha sido estabelecida.

- Observação: Este módulo é essencial para interações diretas com o MongoDB no projeto.

## 2. sessionStorage.js
- Este módulo configura o armazenamento de sessões utilizando a biblioteca connect-mongodb-session integrada ao express-session.

- Armazena sessões na coleção sessions do banco de dados.

- Configurado para o banco de dados test no MongoDB local (mongodb://localhost:27017/).

- Uso: Garante persistência e gerenciamento de sessões de usuários durante sua interação com a aplicação.

## Dependências
- MongoDB: Utilizado para o armazenamento de dados e sessões.

- express-session e connect-mongodb-session: Gerenciam sessões de forma segura e persistente no MongoDB.