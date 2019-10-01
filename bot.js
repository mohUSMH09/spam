const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("628657187954098189")
setInterval(function() {
channel.send(`mouhamedDZ mouhamedDZ mouhamedDZ`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
