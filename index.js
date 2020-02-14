'use strict';

const dotenv = require('dotenv');

// Defining Discord and including the Discord.js module
const Discord = require('discord.js');
const client = new Discord.Client({
    partials: [
        'MESSAGE',
        'CHANNEL',
        'REACTION'
    ]
});
client.commands = new Discord.Collection();
const fs = require('fs');

try {
    const registerCommandFolders = [
        ["public", "Public Commands"]
    ];

    for (let i = 0; i < registerCommandFolders.length; i++){
        const commandFiles = fs.readdirSync('./commands/' + registerCommandFolders[i][0])
            .filter(file => file.endsWith('.js'));

        for (const file of commandFiles){
            const command = require('./commands/' + registerCommandFolders[i][0] + '/' + file);
            client.commands.set(command.name, command);
        }
    }
} catch (e) {
    console.error(e);
}

// Verify login and a steady connection to Discord their API
client.on('ready', async () => {
    console.log('\x1b[32mBot has succesfully signed in and is listening to events\x1b[0m');
});

// Request permissions to sign in the bot with Discord
dotenv.config();
client.login(process.env.API_TOKEN).then(() => {
    console.log('\x1b[33mBot is trying to sign in\x1b[0m');
}).catch(() => console.error('Api-token is invalid'));

client.on('message', async (message) => {    
    let prefix = '!';

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(client, message, args);
    } catch (error) {
        console.error(error);
    }
});

