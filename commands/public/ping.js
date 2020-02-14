'use strict';

module.exports = {
    name: 'ping',
    description: 'returns a message with a response time',
    execute: async function (client, message){
   //     await message.channel.send(`🏓 Pong - ${Math.floor(client.ws.ping).toLocaleString()} milliseconds`);
        message.channel.send({
            embed: {
                color:'#FF6000',
                description: `🏓 Pong - ${Math.floor(client.ws.ping).toLocaleString()} milliseconds`,
            }
        });
    }
};
