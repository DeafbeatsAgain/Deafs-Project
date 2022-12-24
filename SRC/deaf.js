// Importing this allows you to access the environment variables of the running node process
require('dotenv').config();
// require the discord.js module
const Discord = require('discord.js');
// create a new Discord client
const client = new Discord.Client(process.env.TOKEN);

//login to Discord with your app's token
client.login()

client.on('message', msg => {
    if (msg.author.id != client.user.id) {
        if (msg.content.toLowerCase().includes('hello')) {
            msg.channel.send('Hello ' + msg.author.user.name)
        } 
    }
});