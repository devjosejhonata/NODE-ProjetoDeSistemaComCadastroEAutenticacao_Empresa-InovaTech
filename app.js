const express = require('express')
const routes = require('./routes/routes')
const mongoConnect = require('./util/database').mongoConnect
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const app = express();
const port = 3000;

// Configuração do armazenamento de sessões no MongoDB
const sessionStore = new MongoDBStore({
    uri: 'mongodb://localhost:27017/',  // Altere a URI conforme necessário
    databaseName: 'test',  // Nome do banco de dados
    collection: 'sessions'  // Nome da coleção onde as sessões serão armazenadas
});

// Middleware de sessão
app.use(session({
    secret: 'segredo',  // Use uma chave secreta para a sessão
    resave: false,
    saveUninitialized: false,
    store: sessionStore,  // Usando o MongoDBStore
    cookie: {
        httpOnly: true,
        secure: false  // Defina como true se estiver usando HTTPS
    }
}));

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(routes);

mongoConnect(() => {
    app.listen(port)
})
