const { readdirSync } = require('fs')

module.exports = (client) => {
    // Read every commands subfolder
    readdirSync("./commands/").forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));

        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
    
            if (pull.help.name) {
                client.commands.set(pull.help.name, pull);
                client.logger.cmd(`${file} ✅ -> was loaded successfully.`);
            } else {
                client.logger.cmd(`${file} ❌  -> missing a help.name, or help.name is not a string.`);
                continue;
            }
            
            if (pull.help.aliases && Array.isArray(pull.help.aliases)) pull.help.aliases.forEach(alias => client.aliases.set(alias, pull.help.name));
        }
    });
}