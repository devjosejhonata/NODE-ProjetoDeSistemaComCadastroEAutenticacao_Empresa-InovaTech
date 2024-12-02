const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/user'); // Modelo de usuário para lidar com dados no MongoDB

// Serialização e desserialização de usuários
passport.serializeUser((user, done) => done(null, user._id)); // Armazenando o ID do usuário na sessão

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id); // Recuperando o usuário a partir do ID
        done(null, user);
    } catch (err) {
        done(err);
    }
});

// Configuração da estratégia de login com o GitHub
passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: process.env.GITHUB_CALLBACK_URL,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // Verifica se o usuário já existe pelo GitHub ID
                let user = await User.findOne({ githubId: profile.id });

                if (!user) {
                    // Cria um novo usuário se não existir
                    user = new User({
                        username: profile.username,
                        email: profile.emails ? profile.emails[0].value : null,
                        githubId: profile.id,
                    });

                    await user.save(); // Salva o novo usuário no banco de dados
                }

                done(null, user); // Autenticação bem-sucedida
            } catch (err) {
                done(err); // Caso haja erro, repassa para o next middleware
            }
        }
    )
);

// Configuração da estratégia de login com o Google
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // Verifica se o usuário já existe pelo Google ID
                let user = await User.findOne({ googleId: profile.id });

                if (!user) {
                    // Cria um novo usuário se não existir
                    user = new User({
                        username: profile.displayName,
                        email: profile.emails ? profile.emails[0].value : null,
                        googleId: profile.id,
                    });

                    await user.save(); // Salva o novo usuário no banco de dados
                }

                done(null, user); // Autenticação bem-sucedida
            } catch (err) {
                done(err); // Caso haja erro, repassa para o next middleware
            }
        }
    )
);

module.exports = passport;
