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
                // Captura o email, verificando se está disponível
                const email = profile.emails && profile.emails.length > 0
                    ? profile.emails[0].value
                    : null;

                // Verifica se o usuário já existe pelo GitHub ID
                let user = await User.findOne({ githubId: profile.id });

                if (!user) {
                    // Cria um novo usuário se não existir
                    user = new User(
                        profile.username || 'Usuário Sem Nome',
                        email,
                        null, // Sem senha, pois é autenticação via GitHub
                        profile.id // GitHub ID
                    );

                    await user.save(); // Salva o novo usuário no banco de dados
                }

                console.log(
                    `Login com GitHub realizado com sucesso: Nome: ${user.username}, Email: ${user.email || 'Não disponível'}`
                );
                done(null, user); // Autenticação bem-sucedida
            } catch (err) {
                done(err); // Caso haja erro, repassa para o próximo middleware
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
            const name = profile.displayName || `${profile.name.givenName} ${profile.name.familyName}`;
            const email = profile.emails && profile.emails.length > 0 ? profile.emails[0].value : 'Email não disponível';

            // Exibe os dados no console
            console.log(`Login com Google realizado com sucesso: Nome: ${name}, Email: ${email}`);

            // Encontra ou cria o usuário com o Google ID
            let user = await User.findOne({ googleId: profile.id });

            if (!user) {
                // Cria um novo usuário se não existir
                user = new User({
                    username: name,
                    email: email,
                    googleId: profile.id,
                });

                await user.save(); // Salva o novo usuário no banco de dados
            }

            done(null, user); // Autenticação bem-sucedida
        }
    )
);


module.exports = passport;
