const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('./models/user'); // Modelo de usuário para lidar com dados no MongoDB

// Serialização e desserialização de usuários
passport.serializeUser((user, done) => {
    done(null, user._id); // Armazenando o ID do usuário na sessão
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id); // Recuperando o usuário a partir do ID
        done(null, user);
    } catch (err) {
        done(err);
    }
});

// Configurando a estratégia do GitHub
passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: process.env.GITHUB_CALLBACK_URL
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // Verificar se o usuário já existe no banco de dados usando o GitHub ID
                let user = await User.findOne({ githubId: profile.id });

                if (!user) {
                    // Se o usuário não existir, cria um novo usuário
                    user = new User({
                        username: profile.username,
                        email: profile.emails ? profile.emails[0].value : null,
                        githubId: profile.id
                    });
                    await user.save(); // Salva o usuário no banco de dados
                }

                done(null, user); // Chama o done() para indicar que a autenticação foi bem-sucedida
            } catch (err) {
                done(err); // Caso haja erro, passa para a próxima função
            }
        }
    )
);

module.exports = passport;
