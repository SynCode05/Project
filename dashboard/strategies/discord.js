const passport = require('passport');
const DiscordStrategy = require('passport-discord');
const config = require('../../config');
const User = require('../../models/users');
const axios = require('axios');

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (_id, done) => {
    try {
        const user = await User.findOne({ _id });
        return user ? done(null, user) : done(null, null);
    } catch (err) {
        console.log(err);
        done(err, null);
    }
});
passport.use(
    new DiscordStrategy({
        clientID: process.env.DASHBOARD_CLIENT_ID,
        clientSecret: process.env.DASHBOARD_CLIENT_SECRET,
        callbackURL: process.env.DASHBOARD_CALLBACK_URL,
        scope: ['identify', "guilds.join"], 
    }, async (accessToken, refreshToken, profile, done) => {
        const { id } = profile;

        const requestConfig = {
            method: 'put',
            url: `https://discordapp.com/api/guilds/${config.general.guildID}/members/${id}`,
            headers: {
                'Authorization': `Bot ${config.secret.token}`,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({ "access_token": accessToken })
        }
    
        await axios(requestConfig).catch(err => console.log(err));

        try {
            const findUser = await User.findOne({ _id: id });
            if (findUser) {
                console.log('User was found!');
                done(null, findUser);
            } else {
                const newUser = await User.create({ _id: id });
                done(null, newUser);
            }
        } catch (err) {
            console.log(err);
            done(err, null)
        }
    })
)