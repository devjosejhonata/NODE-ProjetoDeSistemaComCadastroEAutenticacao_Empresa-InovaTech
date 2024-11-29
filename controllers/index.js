const bcrypt = require('bcrypt'); // Importa o bcrypt
const User = require('../models/user'); // Importa o modelo User

exports.showIndex = (req, res, next) => {
    res.render('index');
};

exports.showPageSignUp = (req, res, next) => {
    res.render('signUp');
};

// Função para verificar se o usuário está autenticado
exports.isAuthenticated = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/'); // Redireciona para a página de login se o usuário não estiver autenticado
    }
    next(); // Caso o usuário esteja autenticado, continua para a rota
};

exports.showMembersPage = (req, res) => {
    res.render('members');
};

exports.get404Page = (req, res, next) => {
    res.status(404).render('404');
};

// Metodo para cadastrar usuario
exports.signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        // Gera o hash da senha usando bcrypt
        const hashedPassword = await bcrypt.hash(password, 10); // Sal com fator de custo 10

        // Cria uma instância do modelo User com a senha criptografada
        const user = new User(username, email, hashedPassword);

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

//Metodo para realizar o Login do usuário no sistema
exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Busca o usuário pelo e-mail
        const user = await User.findByEmail(email);

        if (!user) {
            console.error('Usuário não cadastrado.');
            return res.redirect('/'); // Redireciona para a página de login
        }

        // Compara a senha digitada com o hash armazenado
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            console.error('Senha incorreta.');
            return res.redirect('/'); // Redireciona para a página de login
        }

        console.log('Login realizado com sucesso:', user);

        // Armazena a informação do usuário na sessão
        req.session.user = user;

        // Redireciona para a rota de membros
        res.redirect('/members');
    } catch (err) {
        console.error('Erro ao realizar login:', err);
        res.redirect('/'); // Redireciona para a página de login
    }
};

// Função para fazer o logout
exports.logout = (req, res, next) => {
    req.session.destroy((err) => {
        if (err) {
            return console.error('Erro ao destruir a sessão:', err);
        }

        // Remover o cookie explicitamente
        res.clearCookie('connect.sid'); // 'connect.sid' é o nome padrão do cookie de sessão, pode variar dependendo da configuração

        res.redirect('/'); // Redireciona para a página de login após o logout
    });
};

