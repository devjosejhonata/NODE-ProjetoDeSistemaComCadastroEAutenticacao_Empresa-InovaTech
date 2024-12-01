const express = require('express');
const routes = require('./routes/routes');
const mongoConnect = require('./util/database').mongoConnect;
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
require('dotenv').config(); // Carrega as variáveis de ambiente
const passport = require('./auth'); // Configuração do Passport.js

const app = express();
const port = process.env.PORT || 3000; // Usando variável de ambiente para a porta

// Configuração do armazenamento de sessões no MongoDB
const sessionStore = new MongoDBStore({
    uri: process.env.MONGO_URI, // A URI do MongoDB no .env
    databaseName: process.env.DB_NAME || 'test', // Nome do banco de dados
    collection: 'sessions' // Nome da coleção onde as sessões serão armazenadas
});

// Tratamento de erros do MongoDB Store
sessionStore.on('error', (error) => {
    console.error('Erro no MongoDB Store:', error);
});

// Middleware de sessão
app.use(
    session({
        secret: process.env.SESSION_SECRET || 'segredo', // Usando chave secreta no .env
        resave: false,
        saveUninitialized: false,
        store: sessionStore, // Usando o MongoDBStore
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Apenas envia cookies em HTTPS em produção
            maxAge: 1000 * 60 * 60 * 24, // Definindo expiração do cookie de sessão
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
