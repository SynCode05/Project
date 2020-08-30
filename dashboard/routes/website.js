const router = require('express').Router();
const Bot = require('../../models/bots');
const jwt = require('jsonwebtoken');
module.exports = (client) => { 

    const validateBotForID = async (id) => {
        try {
            const bot = await client.users.fetch(id);
            if (bot.bot) {
                return true
            } else {
                return false;
            };
        } catch (err) {
            return false;
        }
    };

    function checkAuth (req, res, next) {
        if (req.isAuthenticated()) return next();
        req.session.backURL = req.url;
        res.redirect("/auth/login");
      }

    router.get('/', (req, res) => {
        console.log(req.user._id)
        console.log(client.user.username)
        res.render('index', {
            title: 'Project | Home'
        });
    });

    router.get('/bot/new', checkAuth, (req, res) => {
        res.render('templates/bot/new', {
            title: 'Project | Add Bot'
        })
    });

    router.post('/bot/new', checkAuth, async (req, res) => {
        let bodyData = {
            clientID: req.body.clientid,
            prefix: req.body.prefix,
            library: req.body.library,
            tags: req.body.tags,
            owners: {
                mainOwner: req.user._id,
                secondaryOwners: req.body.secondaryOwners
            },
            description: {
                shortDescription: req.body.shortDescription,
                longDescription: req.body.longDescription
            },
            links: {
                inviteURL: req.body.inviteURL,
                supportURL: req.body.supportURL,
                githubURL: req.body.githubURL,
                websiteURL: req.body.websiteURL,
            }
        }

        const validBotID = await validateBotForID(bodyData.clientID );
        if (validBotID === false) return res.send(401);
        const findBot = await Bot.findOne({ _id: bodyData.clientID });
        if(!findBot) {
            const newBot = await Bot.create({
                _id: bodyData.clientID,
                prefix: bodyData.prefix,
                library: bodyData.library,
                tags: bodyData.tags,
                owners: bodyData.owners,
                description: bodyData.description,
                links: {
                    inviteURL: bodyData.links.inviteURL.indexOf("https://discordapp.com/api/oauth2/authorize") !== 0 ? `https://discordapp.com/api/oauth2/authorize?client_id=${bodyData.clientID}&permissions=0&scope=bot` : bodyData.inviteURL,
                    supportURL: bodyData.links.supportURL,
                    githubURL: bodyData.links.githubURL,
                    websiteURL: bodyData.links.websiteURL
                },
                token: jwt.sign({ userID: req.user._id, botID: bodyData.clientID }, process.env.API_TOKEN_SECRET)
            });
            res.redirect('/')
        } else {
            res.send(500);
        }
    });

    router.get('/bot/:id', async (req, res) => {
        const botUser = client.users.get(req.params.id);
        const botData = await Bot.findOne({ _id: req.params.id });
        console.log(botUser)
        console.log(botData)
        res.render('templates/bot/page', {
            title: 'Project | Bot',
            botUser,
            botData
        })
    });

    return router;
}