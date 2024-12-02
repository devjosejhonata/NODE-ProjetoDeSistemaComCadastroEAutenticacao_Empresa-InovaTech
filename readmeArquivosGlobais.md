A pasta raiz do projeto contém arquivos fundamentais para a inicialização e configuração da aplicação. Estes arquivos abrangem desde a configuração de dependências até a definição de variáveis de ambiente e estratégias de autenticação.

## Arquivos Principais

# app.js
- Descrição: Arquivo principal da aplicação. Configura o servidor Express, gerencia middleware, autenticação, armazenamento de sessões e conecta ao banco de dados MongoDB.
- Funcionalidades: Configuração de rotas; Gerenciamento de sessões com express-session e connect-mongodb-session; Inicialização do Passport.js para autenticação via GitHub e Google; Utilização de templates EJS para renderização.

# auth.js
- Descrição: Configuração de estratégias de autenticação com GitHub e Google usando Passport.js.
- Funcionalidades: Serialização e desserialização de usuários para sessões; Registro ou recuperação de usuários autenticados no MongoDB.

# .env
- Descrição: Contém as variáveis de ambiente sensíveis e configuráveis.
- Exemplos de configurações: Credenciais e URLs para OAuth (GitHub e Google); URI e nome do banco de dados MongoDB; Segredo para sessões; Porta da aplicação e ambiente de execução.

# .gitignore
- Descrição: Define arquivos e diretórios que não devem ser versionados pelo Git.
- Principais exclusões: Diretório node_modules/; Arquivos de ambiente como .env; Logs, caches e builds gerados durante o desenvolvimento.

