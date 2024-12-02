: Projeto em Colaboração :

Este projeto é um sistema de cadastro e autenticação de usuários sendo desenvolvido para uma empresa de tecnologia. Trabalhando em colaboração com uma equipe de desenvolvimento, fui responsável por implementar funcionalidades específicas.

# Minhas Responsabilidades no Projeto
- Implementar o cadastro de usuários (nome, e-mail e senha) com armazenamento seguro no banco de dados.
- Desenvolver o login e autenticação de usuários utilizando sessões.
- Implementar criptografia das senhas para acesso e armazenagem de forma segura.
- Implementar proteção de rotas para que apenas usuários autenticados acessem a rota de membros.
- Implementar acesso ao sistema através de conta do Google ou Github.
- Criar integração de login via OAuth para GitHub e Google.

# Tecnologias Utilizadas
- Node.js: Para execução do JavaScript no backend.
- JavaScript: Linguagem de programação principal do projeto.
- Docker: Utilizado para execução do MongoDB.
- MongoDB: Banco de dados para armazenar informações dos usuários.
- Express: Framework para criação de rotas e middleware.
- EJS: Template engine para renderizar páginas dinâmicas.
- Body-parser: Middleware para lidar com requisições no formato JSON ou URL-encoded.

# Principais Bibliotecas e Dependências
- bcrypt: Para criptografar senhas antes de armazená-las no banco de dados.
- Instalação: npm i bcrypt
- express-session: Para gerenciar sessões de usuários e autenticação.
- Instalação: npm i express-session
- dotenv: Para gerenciar variáveis de ambiente sensíveis, como chaves de API.
- Instalação: npm i dotenv
- passport: Middleware de autenticação para integração com GitHub e Google.
- Instalação: npm i passport
- passport-github2: Estratégia para autenticação via GitHub.
- Instalação: npm i passport-github2
- passport-google-oauth20: Estratégia para autenticação via Google.
- Instalação: npm i passport-google-oauth20

# Arquitetura
O projeto segue o padrão de arquitetura MVC (Model-View-Controller), organizando o código em:
- Models: Manipulação de dados e integração com o banco de dados.
- Views: Interfaces renderizadas para o usuário.
- Controllers: Lógica de negócio e intermediação entre rotas e modelos.

# Execução
Pré-requisitos:
- Docker instalado para rodar o MongoDB.
- Node.js e npm instalados.

Passos para rodar o projeto:
- Certifique-se de que o MongoDB está em execução pelo Docker.
- Execute npm install para instalar as dependências.
- Use o comando npm run dev para iniciar o servidor.

Porta do servidor:
- O servidor estará disponível em http://localhost:3000.

# Documentação do Projeto
O projeto inclui documentação detalhada para auxiliar na compreensão e manutenção do sistema.
- Cada pasta principal contém um arquivo README.md com a explicação sobre: Objetivo e estrutura da pasta; Funções e métodos implementados; Interações com outras partes do sistema.
- A documentação descreve rotas, fluxos e dependências de maneira objetiva, tornando mais simples para novos desenvolvedores entenderem o funcionamento do projeto.

# Contribuições da Equipe
Este projeto é desenvolvido em colaboração. Algumas partes do código foram fornecidas previamente, e eu implementei as funcionalidades descritas acima e realizei algumas melhorias no que foi fornecido previamente.
![fotosistema1](https://github.com/user-attachments/assets/ce69dfa1-76e1-4b5e-ac11-cf4cd5a3be1e)
![fotosistema2](https://github.com/user-attachments/assets/6f29f4c2-3372-49fc-89b2-2ef875f8f7ee)
![fotosistema3](https://github.com/user-attachments/assets/3e7a8bfe-53fe-4340-8904-c469aa66e0a1)
![fotosistema4](https://github.com/user-attachments/assets/f3b1a598-7a25-4459-81e1-64e20914fc69)
![fotosistema5](https://github.com/user-attachments/assets/94e59c8d-bb39-4c95-98d9-f13835cad00b)
![fotosistema6](https://github.com/user-attachments/assets/52e10656-264e-4ac9-a873-2a57d4e11899)
