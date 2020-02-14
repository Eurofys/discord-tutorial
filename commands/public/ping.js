'use strict';

module.exports = {
    name: 'ping',
    description: `Game: returns a message with respond time`,
    execute: async function (client, message, args){

        await message.channel.send('pong');
    }
};