const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const controller = require('../controllers/index');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', controller.showIndex);

// Rota de cadastro
router.get('/signup', controller.showPageSignUp);

// Rota de membros (protegida por autenticação)
router.get('/members', controller.isAuthenticated, controller.showMembersPage);

// Rota de logout
router.get('/logout', controller.logout);

// Rota para processar o formulário de cadastro
router.post('/signup', controller.signup);

// Rota para login de usuário
router.post('/login', controller.login);

// Página de erro 404
router.use(controller.get404Page);

module.exports = router;
