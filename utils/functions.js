module.exports = {

    errorMessage: function(client) {
        var error = [
            `${client.user.username} has run into an issue!`,
            `${client.user.username} did an oopsie!`,
            "Discord? Error? Beep Boop!",
            "Hmm, that didn't work lets try again."
        ];
        return error[Math.floor(Math.random() * error.length)];
    },

    embedUtils: {
        bar: '**[' + `[Invite](https://discordapp.com/api/oauth2/authorize?client_id=717034854012813404&permissions=8&scope=bot)` + '] [' + '[Support](https://discord.gg/YUf6su7)' + '] [' + '[Vote](https://top.gg/bot/717034854012813404/vote)' + ']**\n',
        timestamp: new Date().toISOString(),
        permError: function (Permission) {
            embed = {
                title: "<:Error:746741668606377984> Permission Error!",
                description: `Required permission: \`${Permission}\``,
                color: 0xDC3C3C
            }
            return embed;
        },

        syntaxError: function (Syntax) {
            embed = {
                title: "<:Error:746741668606377984> Syntax Error!",
                description: `Syntax: \`${Syntax}\``,
                color: 0xDC3C3C,
                footer: { 
                    text: "<> = required | [] = optional"
                }
            }
            return embed;
        },

        error: function (Error, issue) {
            embed = {
                title: `<:Error:746741668606377984> \`${Error}\``,
                description: issue,
                color: 0xDC3C3C,
            }
            return embed;
        },

        logs: function (client, message) {

        },

        success: function (string) {
            embed = {
                title: `<:Success:746741668241211504> Success`,
                description: `${string}`,
                color: 0x3CC83C,
            }
            return embed;
        },
    },

    getMember: async function (client, message, string) {
        let id = true;
        let match = string.match(/^<@(\d{17,19})>$/); 
        if (!match) match = string.match(/^(\d{17,19})$/); 
        if (!match) match = string.match(/^<@!(\d{17,19})>$/); 
        if (!match) id = false; 
        if (!match) match = client.users.find(u => u.id === string); 
        if (!match) match = client.users.find(u => u.tag === string);
        if (!match) match = client.users.find(u => u.username === string); 
        if (!match) match = client.users.find(u => u.username.toLowerCase() === string.toLowerCase()); 
        if (message.mentions.length > 0 && !match) match = message.mentions[0]; 
        if (!match) return { user: undefined, member: undefined }; 
        if (id) { 
            const user = await client.getRESTUser(match[1]).catch((err) => client.logger.error(err));
            let member; 
            if (user) member = await message.channel.guild.getRESTMember(match[1]).catch((err) => client.logger.error(err)); 
            return { user, member }; 
        } else {
            const user = await client.getRESTUser(match.id).catch((err) => client.logger.error(err)); 
            let member; 
            if (user) member = await message.channel.guild.getRESTMember(match.id).catch((err) => client.logger.error(err)); 
            return { user, member }; 
        }
    },

    randomColor: function () {
        var letters = '0123456789';
        var color = '0x';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 10)];
        }
        return parseInt(color);
    },

    roleTag: function (id) {
        let roleTag = `<@&${id}>`;
        return roleTag;
    },

    channelTag: function (id) {
        let channelTag = `<#${id}>`;
        return channelTag;
    }
};