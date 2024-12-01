const express = require('express');
const routes = require('./routes/routes');
const mongoConnect = require('./util/database').mongoConnect;
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
require('dotenv').config(); // Carrega as variáveis de ambiente
const passport = require('./auth'); // Configuração do Passport.js

const app = express();
const port = 3000;

// Configuração do armazenamento de sessões no MongoDB
const sessionStore = new MongoDBStore({
    uri: 'mongodb://localhost:27017/', // Altere a URI conforme necessário
    databaseName: 'test', // Nome do banco de dados
    collection: 'sessions' // Nome da coleção onde as sessões serão armazenadas
});

// Middleware de sessão
app.use(
    session({
        secret: 'segredo', // Use uma chave secreta forte para proteger as sessões
        resave: false,
        saveUninitialized: false,
        store: sessionStore, // Usando o MongoDBStore
        cookie: {
            httpOnly: true,
            secure: false // Defina como true se estiver usando HTTPS
        }
    })
);

// Middleware para inicializar o Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Configuração do middleware para servir arquivos estáticos
app.use(express.static('public'));

// Configuração do motor de templates
app.set('view engine', 'ejs');

// Middleware para tratar requisições URL-encoded
app.use(express.urlencoded({ extended: true }));

// Middleware de rotas
app.use(routes);

// Conexão ao MongoDB e inicialização do servidor
mongoConnect(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });
});
