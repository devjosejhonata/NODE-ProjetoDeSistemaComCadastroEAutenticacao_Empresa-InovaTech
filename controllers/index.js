const User = require('../models/user'); // Importa o modelo User

exports.showIndex = (req, res, next) => {
    res.render('index');
};

exports.showPageSignUp = (req, res, next) => {
    res.render('signUp');
};

exports.showMembersPage = (req, res) => {
    res.render('members');
};

exports.get404Page = (req, res, next) => {
    res.status(404).render('404');
};

// Novo controlador para processar o cadastro
exports.signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    // Cria uma instância do modelo User
    const user = new User(username, email, password);

    try {
        // Salva o usuário no banco de dados
        await user.save();

        console.log('Usuário cadastrado com sucesso:', { username, email });

        // Redireciona para a página de login após o sucesso
        res.redirect('/');
    } catch (err) {
        // Exibe o erro no console
        console.error('Erro ao cadastrar o usuário:', err);

        // Redireciona/recarrega a página de cadastro
        res.redirect('/signup');
    }
};
