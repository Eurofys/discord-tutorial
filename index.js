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

// Verify login and a steady connection to Discord their API
client.on('ready', async () => {
    console.log('\x1b[32mBot has succesfully signed in and is listening to events\x1b[0m');
});

// Request permissions to sign in the bot with Discord
dotenv.config();
client.login(process.env.API_TOKEN).then(() => {
    console.log('\x1b[33mBot is trying to sign in\x1b[0m');
}).catch(() => console.error('Api-token is invalid'));