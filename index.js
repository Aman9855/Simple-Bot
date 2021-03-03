const { prefix, token } = require('./config.json')
const discord = require("discord.js");
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const db = require("quick.db");
const client = new discord.Client({
  disableEveryone: false
});

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

let statuses = [
    "Made By: Aman Bhai"
]

client.once('ready', () => {
  console.log('Bot is Online!');

  setInterval(function(){
      let status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setActivity(status, {type:'PLAYING'})
  }, 5000)
});

client.login(config.token);
