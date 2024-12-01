const express = require('express');
const passport = require('passport'); // Importação do Passport
const router = express.Router();
const bodyParser = require('body-parser');
const controller = require('../controllers/index');

router.use(bodyParser.urlencoded({ extended: true }));

// Rota inicial
router.get('/', controller.showIndex);

// Rotas de autenticação com GitHub
router.get('/auth/github',
    passport.authenticate('github', { scope: ['user:email'] }) // Middleware do Passport para autenticação
);

router.get('/auth/github/callback',
    passport.authenticate('github', {
        failureRedirect: '/', // Redireciona para a página inicial em caso de falha
        failureMessage: 'Falha ao autenticar com o GitHub' // Mensagem de erro
    }),
    (req, res) => res.redirect('/members') // Redireciona para a página de membros em caso de sucesso
);

// Rota para a página de cadastro
router.get('/signup', controller.showPageSignUp);

// Rota para a página de membros (protegida por autenticação)
router.get('/members', controller.isAuthenticated, controller.showMembersPage);

// Rota de logout
router.get('/logout', controller.logout);

// Rota para processar o formulário de cadastro
router.post('/signup', controller.signup);

// Rota para login de usuário
router.post('/login', controller.login);

// Página de erro 404 (rota catch-all para rotas inexistentes)
router.use(controller.get404Page);

module.exports = router;
