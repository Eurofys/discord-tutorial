# Discord Tutorial
> This repository contains data written for a Discord bot tutorial

## Information

## How To Install
### Software
Before you are able to start working on your bot, you will need certain programs to get you started.
- A code editor such as [Visual Code](https://aka.ms/win32-x64-user-stable)
- [GIT](https://git-scm.com/download/win) to clone this project
- [NodeJS](https://nodejs.org/dist/v12.15.0/node-v12.15.0-x64.msi) to install all the modules and packages that are needed

### Setting up GIT
Open GIT. You can do this by right clicking anywhere on your Desktop and select `Git Bash Here`. Once it opens you would need to set up your username and email address.

1. Type `git config --global user.name "[YOUR_GITHUB_USERNAME]"` and press enter.
2. Type `git config --global user.email "[YOUR_GITHUB_EMAIL]"` and press enter.

### Forking Repository
Once you have downloaded the above you can `fork` this repository. A new window will be opened with a message that its trying to fork a repository. Wait until this is done.

After that you want to `clone` the repository to your computer.
1. Create a new folder wherever you like
2. Right-click in the created folder and click on `Git Bash Here`
3. Type `git clone https://github.com/[YOUR_USERNAME_HERE]/discord-tutorial.git`
4. Navigate in the folder by typing `cd discord-tutorial`
5. Copy paste the following into your Git Bash window `git remote add upstream https://github.com/exqlusive/discord-tutorial.git`

### Installing Project Packages
1. Type `npm install` in your Git Bash window

### Installing PM2
PM2 is a process application that is able to run your project (aka your bot). 
1. Type `npm install pm2 -g` in your Git Bash.

### Bot Token
1. First we would need to register a bot. Head over to [Discords Developer Panel](https://discordapp.com/developers/applications/) and click on `New Application`.
2. Name your bot to whatever you like. This can always be changed in the future
3. Click on `Bot` in the left menu
4. Click on `Add Bot` 

#### Adding your bot to a server
Copy paste the following `https://discordapp.com/oauth2/authorize?&client_id=YOUR_CLIENT_ID_HERE&scope=bot&permissions=0` and replace `YOUR_CLIENT_ID_HERE` with your client id.
You can find your client ID at `General Information`

## First Steps
Before you are able to start the bot, you would need to add some code. Copy paste the following into your `index.js`

```JS
'use strict';

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
client.login('YOUR_TOKEN_HERE').then(() => {
    console.log('\x1b[33mBot is trying to sign in\x1b[0m')
}).catch(() => console.error('Something is wrong'));

```
Replace `YOUR_TOKEN_HERE` with your API token that you can find in your [Discords Developer Panel](https://discordapp.com/developers/applications/)

## Starting Your Bot
1. Open a new Git Bash window (Navigate to your project folder, right click and select `Git Bash Here`).
2. Type the following and press enter `pm2 start index.js --watch --name discord-tutorial`
3. Type the following and press enter `pm2 logs discord-tutorial`
You will now see a window with information about the bot. (Its logs. It should output `Bot has succesfully signed in and is listening to events`)
4. Open Discord and see the magic bot being online!
