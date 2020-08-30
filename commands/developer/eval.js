const { inspect } = require('util');
const Users = require('../../models/users');

module.exports.run = async (client, message, args) => {

    let userData = await Users.findOne({ _id: message.author.id });
    if (userData.admin != true) return client.createMessage(message.channel.id, { embed: client.functions.embedUtils.permError(this.help.permissions) });
    // command async block
    try {
        const result = await execute(message, args);
        if (result.length > 1900) {
            console.log(`Evaluate: ${args.join(' ')}\n${result}`);
            return client.createMessage(message.channel.id, '\`\`\`js\nResult is too long and has been sent to console.\`\`\`');
        }
            client.createMessage(message.channel.id, `\`\`\`js\n${result}\`\`\``);
        } catch (error) {
            client.createMessage(message.channel.id, `\`ERROR\` \`\`\`xl\n${error}\`\`\``)
                .catch(() => {
                    console.error(`Evaluate: ${args.join(' ')}\n${error}`);
                    client.createMessage(message.channel.id, '`ERROR` \`\`\`js\nError is too long and has been sent to console.\`\`\`');
            });
        }

    async function execute(message, args) {
        let result = await eval(args.join(' '));
        if (result && result.constructor.name === 'Promise') result = await result;
        if (typeof result !== 'string') result = inspect(result, { depth: 1 });
        
        return result.replace(client.token, `Don't try this I won't give you ${client.user.username}'s token.`)
    }
}


module.exports.help = {
    name: "eval",
    aliases: ["e"],
    syntax: "m!eval <evaluation>",
    description: "A developer tool. Do not touch!!!",
    category: "developer",
    permissions: ["Bot Developer"]
}