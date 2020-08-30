const { readdirSync } = require('fs')

module.exports = (client) => {

    readdirSync(("./modules/")).forEach((file) => {
        (require(`../modules/${file}`)).run(client)
        file ? client.logger.mod(`${file} ✅ -> was loaded successfully.`) : client.logger.mod(`${file} ❌  -> was not loaded.`);    
    });
}