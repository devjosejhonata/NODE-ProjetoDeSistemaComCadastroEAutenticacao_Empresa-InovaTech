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
exports.signup = (req, res, next) => {
    const { username, email, password } = req.body;

    // Exibe os dados no terminal
    console.log('Novo usuário cadastrado:', { username, email, password });

    // Apenas envia uma resposta de sucesso (sem salvar no banco por enquanto)
    res.status(200).send('Cadastro realizado com sucesso! Dados no console.');
};
