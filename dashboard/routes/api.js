const router = require('express').Router();
const Bot = require('../../models/bots'); 
const checkAuth = require('../middleware/check-auth');

router.get('/bots', (req, res) => {
    Bot.find({ verified: true })
    .select('_id owners votes stats description')
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            bots: docs.map(doc => {
                return {
                    id: doc._id,
                    owners: doc.owners,
                    shortDescription: doc.description.shortDescription,
                    votes: doc.votes,
                    stats: doc.stats
                }
            })
        });
    })
});

router.get('/bots/:id', (req, res) => {
    Bot.findOne({ _id: req.params.id })
    .select('_id owners links votes stats tags library description verified')
    .then(doc => {
        if (!doc || doc.verified == false) {
            res.status(404).json({
                message: 'Bot not found.',
            })
        } else {
            res.status(200).json({
                botData: doc
            });
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        });
    })
});

router.patch('/bots/:id', checkAuth, async (req, res) => {
    let guildCount = req.body.guildCount 
    let shardCount = req.body.shardCount
    let findBot = await Bot.findOneAndUpdate({ _id: req.params.id }, {
        stats: { 
            guildCount, 
            shardCount
        }
    }, { new: true });
    if (!findBot) {
        res.status(404).json({
            message: 'Bot not found.'
        });
    } else {
        res.status(201).json({
            message: 'Stats updated.'
        })
    }
});

module.exports = router;