const Users = require('../../models/users');


module.exports.run = async (client, message, args) => {

    let userdata = await Users.findOne({ _id: message.author.id });
    if (userdata.admin != true) return client.createMessage(message.channel.id, { embed: client.functions.embedUtils.permError(this.help.permissions) });
    if (!args[1]) return client.createMessage(message.channel.id, { embed: client.functions.embedUtils.syntaxError(this.help.syntax) });

    let dirPath = args[0].toLowerCase()
    let commandName = args[1].toLowerCase()

    try {
        delete require.cache[require.resolve(`../${dirPath}/${commandName}.js`)] // usage !reload <name>
        client.commands.delete(commandName)
        const pull = require(`../${dirPath}/${commandName}.js`)
        client.commands.set(commandName, pull)
    } catch(err) {
        console.log(err)
        return client.createMessage(message.channel.id, { embed: client.functions.embedUtils.error(client.functions.errorMessage(client), `Could not reload: \`${args[1].toUpperCase()}\`.`) });
    }

    await client.createMessage(message.channel.id, { embed: client.functions.embedUtils.success(`The command \`${args[1].toUpperCase()}\` has been reloaded!`) }).catch(err => client.createMessage(message.channel.id, { embed: client.functions.embedUtils.error(err) }))
}


module.exports.help = {
    name: "reload",
    aliases: ["rl"],
    syntax: "m!reload <dir> <command name>",
    description: "Reload a command.",
    category: "developer",
    permissions: ["Bot Developer"]
}