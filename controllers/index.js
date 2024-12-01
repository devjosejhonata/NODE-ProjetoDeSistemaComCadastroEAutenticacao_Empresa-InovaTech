const bcrypt = require('bcrypt'); // Importa o bcrypt
const User = require('../models/user'); // Importa o modelo User

// Funções de renderização
exports.showIndex = (req, res) => res.render('index');
exports.showPageSignUp = (req, res) => res.render('signUp');
exports.showMembersPage = (req, res) => res.render('members');
exports.get404Page = (req, res) => res.status(404).render('404');

// Função para verificar se o usuário está autenticado
exports.isAuthenticated = (req, res, next) => {
    if (!req.isAuthenticated()) return res.redirect('/'); // Redireciona para o login se não autenticado
    next(); // Usuário autenticado, segue para a rota
};

// Método para cadastrar usuário
exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Criptografa a senha
        const user = new User(username, email, hashedPassword);
        await user.save();
        console.log('Usuário cadastrado com sucesso:', { username, email });
        res.redirect('/'); // Redireciona para a página de login
    } catch (err) {
        console.error('Erro ao cadastrar o usuário:', err);
        res.redirect('/signup'); // Redireciona para a página de cadastro
    }
};

// Método para realizar o login do usuário (via email e senha)
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findByEmail(email);
        if (!user) return res.redirect('/'); // Redireciona para o login se não encontrado

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.redirect('/'); // Redireciona para o login se a senha for inválida

        console.log('Login realizado com sucesso:', user); // Exibe os dados do usuário no terminal

        req.login(user, (err) => { // Usando req.login do Passport
            if (err) return res.redirect('/'); // Em caso de erro, redireciona para o login
            res.redirect('/members'); // Redireciona para a página de membros após login
        });
    } catch (err) {
        console.error('Erro ao realizar login:', err);
        res.redirect('/'); // Redireciona para a página de login em caso de erro
    }
};

// Função para fazer o logout
exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) return console.error('Erro ao destruir a sessão:', err);
        res.clearCookie('connect.sid'); // Limpa o cookie de sessão
        res.redirect('/'); // Redireciona para a página de login após o logout
    });
};
