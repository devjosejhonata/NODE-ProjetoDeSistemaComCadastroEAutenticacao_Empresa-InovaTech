const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const controller = require('../controllers/index');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', controller.showIndex);
router.get('/signup', controller.showPageSignUp);
router.get('/members', controller.showMembersPage);

// Nova rota para processar o formulário de cadastro
router.post('/signup', controller.signup);

router.use(controller.get404Page);

module.exports = router;
