const Users = require('../../models/users');
const Bots = require('../../models/bots');

module.exports.run = async (client, message, args) => {

    let userdata = await Users.findOne({ _id: message.author.id });
    if (userdata.mod != true) return client.createMessage(message.channel.id, { embed: client.functions.embedUtils.permError(this.help.permissions) });
    Bots.find({ verified: false })
    .then(async docs => {
        console.log(docs)
        if (!docs[0]) {
            await client.createMessage(message.channel.id, {
                embed: {
                    title: 'Queue on Project',
                    description: 'The queue is empty.' 
                }
            });
        } else {
            await client.createMessage(message.channel.id, { 
                embed: {
                    title: 'Queue on Project',
                    description: docs.map(doc => `ID: ${doc._id} | Name: ${client.users.get(doc._id).username} | OwnerID: ${doc.owners.mainOwner}`).join('\n')
                }
            });
        }
    })
    .catch()
}


module.exports.help = {
    name: "queue",
    aliases: ["q"],
    syntax: "m!queue",
    description: "View bots in the queue.",
    category: "verification",
    permissions: ["Website Mod."]
}