const Users = require('../../models/users');

module.exports.run = async (client, message, args) => {

    let userdata = await Users.findOne({ _id: message.author.id });
    if (userdata.admin != true) return client.createMessage(message.channel.id, { embed: client.functions.embedUtils.permError(this.help.permissions) });
    await client.createMessage(message.channel.id, { embed: client.functions.embedUtils.success('Restarting in 3 seconds.') }).catch(err => client.createMessage(message.channel.id, { embed: client.functions.embedUtils.error(err) }))
    process.exit(1);
}


module.exports.help = {
    name: "restart",
    aliases: ["res"],
    syntax: "m!restart",
    description: "Restart the bot.",
    category: "developer",
    permissions: ["Bot Developer"]
}