const Users = require('../../models/users');

module.exports.run = async (client, message, args) => {
    let userdata = await Users.findOne({ _id: message.author.id });
    if (userdata.admin != true) return;

    client.createMessage(message.channel.id, { 
        embed: {
            color: 0x303136, 
            image: {
                url: 'https://gyazo.com/718d12e39f560fcb676d2adc43e9ffd1.png'
            }
        }
    });

    client.createMessage(message.channel.id, { 
        embed: { 
            color: 0x303136,
            author: {
                name: `${message.channel.guild.name} | Rules`, 
                icon_url: message.channel.guild.iconURL
            },
            description: `I highly recommend you read the rules to help prevent any cause for punishment.`
        }
    });

    client.createMessage(message.channel.id, { 
        embed: { 
            color: 0x303136,
            author: {
                name: `${message.channel.guild.name}`, 
                icon_url: message.channel.guild.iconURL
            },
            title: `1️⃣ | Descrimination.`,
            description: `The server doesn't allow any descrimination towards members of the LGBT+ community or towards rasism.`
        }
    });

    client.createMessage(message.channel.id, { 
        embed: { 
            color: 0x303136,
            author: {
                name: `${message.channel.guild.name}`, 
                icon_url: message.channel.guild.iconURL
            },
            title: `2️⃣ | Threats.`,
            description: `DDoS and DDoX is not permitted on this server.`
        }
    });

    client.createMessage(message.channel.id, { 
        embed: { 
            color: 0x303136,
            author: {
                name: `${message.channel.guild.name}`, 
                icon_url: message.channel.guild.iconURL
            },
            title: `3️⃣ | Selfbots.`,
            description: `Selfbots are againt the Discord ToS. Anything which requires the entry of a personal token is not permitted.`
        }
    });

    client.createMessage(message.channel.id, { 
        embed: { 
            color: 0x303136,
            author: {
                name: `${message.channel.guild.name}`, 
                icon_url: message.channel.guild.iconURL
            },
            title: `4️⃣ | Advertising.`,
            description: `Advertising your or anyone elses content without permission from a higher staff is not permitted.`
        }
    });

    client.createMessage(message.channel.id, { 
        embed: { 
            color: 0x303136,
            author: {
                name: `${message.channel.guild.name}`, 
                icon_url: message.channel.guild.iconURL
            },
            title: `5️⃣ | Spam.`,
            description: `Spamming on this server is not allowed.`
        }
    });

    client.createMessage(message.channel.id, { 
        embed: { 
            color: 0x303136,
            author: {
                name: `${message.channel.guild.name}`, 
                icon_url: message.channel.guild.iconURL
            },
            title: `6️⃣ | Nicknames.`,
            description: `Racist, homophobic, NSFW and sexist nicknames are not allowed on the server.`
        }
    });

    client.createMessage(message.channel.id, { 
        embed: { 
            color: 0x303136,
            author: {
                name: `${message.channel.guild.name}`, 
                icon_url: message.channel.guild.iconURL
            },
            title: `7️⃣ | Avatars.`,
            description: `Racist, homophobic, NSFW and sexist profile pictures are not allowed on the server.`
        }
    });

    client.createMessage(message.channel.id, { 
        embed: { 
            color: 0x303136,
            author: {
                name: `${message.channel.guild.name}`, 
                icon_url: message.channel.guild.iconURL
            },
            title: `8️⃣ | Earrape.`,
            description: `Earrape in voice channels is not allowed on this server.`
        }
    });

    client.createMessage(message.channel.id, { 
        embed: { 
            color: 0x303136,
            author: {
                name: `${message.channel.guild.name}`, 
                icon_url: message.channel.guild.iconURL
            },
            title: `#️⃣ | Discord ToS.`,
            description: `Follow every rule on the discord ToS.`
        }
    });

    client.createMessage(message.channel.id, { 
        embed: {
            color: 0x303136, 
            image: {
                url: 'https://gyazo.com/e94022e7ee795edf1fdb62be1d903f42.png'
            }
        }
    });

    client.createMessage(message.channel.id, { 
        embed: { 
            color: 0x303136,
            author: {
                name: `${message.channel.guild.name} | Information`, 
                icon_url: message.channel.guild.iconURL
            },
            description: `I highly recommend you read the information provided under here before asking a question.`
        }
    });

    client.createMessage(message.channel.id, { 
        embed: { 
            color: 0x303136,
            author: {
                name: `${message.channel.guild.name}`, 
                icon_url: message.channel.guild.iconURL
            },
            title: `1️⃣ | Roles.`,
            description: `${client.functions.roleTag('739887243530862715')} - Developers who work on the voice system on the bot.\n${client.functions.roleTag('739886884200906782')} - People who work on the website.\n${client.functions.roleTag('739887177324036166')} - People who work the API.\n${client.functions.roleTag('720692300145098853')} - Head Developers of the bot.\n${client.functions.roleTag('739891467400642681')} - Server admins.\n${client.functions.roleTag('739887331796058162')} - Active developers, contributed many hours into the bot.\n${client.functions.roleTag('739891636984742009')} - Server moderators.\n${client.functions.roleTag('720694213938905139')} - People who have contributed to the bot.\n${client.functions.roleTag('720701707914444973')} - People who assist's the bot to have a contsant uptime.\n${client.functions.roleTag('739892175554215978')} - Moderators who're being trained.\n${client.functions.roleTag('741550981627510796')} - People who assist with the bot if there's an issue.\n${client.functions.roleTag('741551061927591996')} - Support team in training.\n${client.functions.roleTag('739886969966035036')} - People who helped us test the bot.\n`
        }
    });

    client.createMessage(message.channel.id, { 
        embed: { 
            color: 0x303136,
            author: {
                name: `${message.channel.guild.name}`, 
                icon_url: message.channel.guild.iconURL
            },
            title: `2️⃣ | Channels.`,
            description: `${client.functions.channelTag('721348638143676536')} - View the list on new members.\n${client.functions.channelTag('720760094320754861')} - Verify yourself to chat in channels.\n${client.functions.channelTag('721352433153867836')} - List of rules and information you should totally read!\n${client.functions.channelTag('740437283915825232')} - Get notified when a new announcement is released. You should really follow this channel!\n${client.functions.channelTag('738626667953651722')} - A place to check before asking help from the support team.\n${client.functions.channelTag('721352609042268170')} - This is the channel to get a chance at winning free stuff.\n${client.functions.channelTag('738013163496144916')} - View the recent users who've voted for the bot.\n${client.functions.channelTag('740437514191634493')} - Get a full list of new and removed commands from the bot.\n${client.functions.channelTag('740437610467688478')} - Let us know what you'd rather by voting on the polls.\n${client.functions.channelTag('740544247307960372')} - Get a live status of the bot, any downtime will be mentioned here. You can also follow this channel!\n${client.functions.channelTag('719498057686974507')} - General chat for everyone to enjoy.\n${client.functions.channelTag('738627154539053151')} - Funny memes for people to enjoy. Note some memes may be innapopriate or not safe for work (NSFW).\n${client.functions.channelTag('738627520919765043')} - A place to test the bot.\n${client.functions.channelTag('738627571629031536')} - A place to ask help from our friendly support team.\n${client.functions.channelTag('739900294921453749')} - A place to test the music function of the bot.\n${client.functions.channelTag('739900366409171117')} - A place to test the radio function of the bot.\n${client.functions.channelTag('737566972254093372')} - A place to view user suggestions.\n${client.functions.channelTag('738627392960069706')} - A place to give your opinion on a suggestion.\n${client.functions.channelTag('738627470403698721')} - A place to submit your suggestion.\n`
        }
    });
}

module.exports.help = {
    name: "rules-info",
    aliases: ["rules", "info", "information"],
    syntax: "m!test",
    description: "Send the rules and info from the support server.",
    category: "developer",
    permissions: ["Bot Developer"]
}