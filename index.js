const { prefix, token } = require('./config.json')
const discord = require("discord.js");
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const db = require("quick.db");
const client = new discord.Client({
  disableEveryone: false
});

require("./uptime.js");
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

let statuses = [
    "Working with One8 Esports",
    "Made By: AmanOP"
]

client.once('ready', () => {
  console.log('One8 Esport is Online!');

  setInterval(function(){
      let status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setActivity(status, {type:'PLAYING'})
  }, 5000)
});

client.on("message", async message => {
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`My prefix is \`${prefix}\``);
  }

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
});

client.login(process.env.token);
