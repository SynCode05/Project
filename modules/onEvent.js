const dashboard = require('../dashboard/app');

module.exports.run = (client) => {
    client.on('ready', async () => {
        
        dashboard(client);

        client.editStatus('online', {
            name: `syn coding me.`, 
            type: 3,
        });

        console.log('\n-----------------------------------------------------------------------------\n');
        client.logger.ready(`Logged in as ${client.user.username} | Users: ${client.users.size} | Guilds: ${client.guilds.size}`);
        console.log('\n-----------------------------------------------------------------------------\n');
    
    });

    client.on('disconnect', () => client.logger.disconnect(`Disconnected from ${client.user.username}`));
    client.on('reconnect', () => client.logger.reconnect(`Reconnected as ${client.user.username}`))
}