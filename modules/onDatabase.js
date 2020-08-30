const mongoose = require('mongoose');

module.exports.run = (client) => {
    // Connect to the DB
    mongoose.connect(process.env.DBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('\n-----------------------------------------------------------------------------\n');
        client.logger.ready('Connected to the database')
        console.log('\n-----------------------------------------------------------------------------\n');
    }).catch((err) => {
        console.log('\n-----------------------------------------------------------------------------\n');
        client.logger.error(err)
        console.log('\n-----------------------------------------------------------------------------\n');
    });
}