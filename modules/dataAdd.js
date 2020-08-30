const Users = require('../models/users');

module.exports.run = (client) => {
    
    client.on('ready', async () => {
        client.on('messageCreate', async (message) => {
            if (message.author.bot) return;
            let userdata = await Users.findOne({ _id: message.author.id });
            if (!userdata) {
                const user = new Users({
                    _id: message.author.id,
                    bots: [] 
                });
                await user.save().catch(err => client.logger.error(err));
            };
        });
    });
};