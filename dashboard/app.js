require('./strategies/discord');

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session');
const Store = require('connect-mongo')(session);

const app = express();
const PORT = process.env.PORT || 3000;

module.exports = (client) => {

    // Session
    app.use(session({
        secret: 'Project',
        cookie: { maxAge: (((1000 * 60) * 60) * 24) * 7 },
        resave: false,
        saveUninitialized: false,
        store: new Store({ mongooseConnection: mongoose.connection })
    }))

    // Authentication
    app.use(passport.initialize());
    app.use(passport.session());

    // Dev Tools
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());


    // Set the view engine to ejs
    app.set('view engine', 'ejs');

    // Routes
    const routes = require('./routes')(client);
    app.use('/', routes);

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requestd-With, Content-Type, Accept, Authorization');
        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Method', 'PUT, POST, PATCH, DELETE, GET');
            res.status(200).json({});
        }
        next();
    });

    app.use((req, res, next) => {
        const error = new Error('Not found');
        error.status = 404;
        next(error);
    });
    
    app.use((error, req, res, next) => {
        res.status(error.status || 500);
        res.json({
            error: {
                message: error.message
            }
        })
    });

    app.listen(PORT, () => {
        console.log('\n-----------------------------------------------------------------------------\n');
        client.logger.ready(`Dashboard ready on port: ${PORT}`);
        console.log('\n-----------------------------------------------------------------------------\n');
    });
}