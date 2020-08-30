const router = require('express').Router();

module.exports = (client) => { 

    // Routes
    const auth = require('./auth');
    const api = require('./api');
    const website = require('./website')(client);

    router.use('/auth', auth);
    router.use('/api', api);
    router.use('/', website);
    return router;
}