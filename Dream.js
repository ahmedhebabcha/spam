const Discord = require('467043625620996106');
const client = new Discord.Client(506567713661911040);
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("498233231922036756")
setInterval(function() {
channel.send(`youtube`);
}, 25)
})
 
 
client.login('"NDg1NTEwNzI1Njc1MjUzNzYy.DrnTIg.qFioY6_AqoGtsrSXvRX8U3IrzSQ"');
