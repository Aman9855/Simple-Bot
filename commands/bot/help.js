const discord = require("discord.js");


module.exports = {
    name: "help",
    category: "bot",
    description: "Get Bot work information",
    run: async(client, message, args) => {
        let embed = new discord.MessageEmbed()
            .setAuthor("Omega Help Commands", `${client.user.displayAvatarURL()}`)
            .setColor("#44ff00")
            .setDescription(
                `__**Our Website:-**__ [CLICK HERE FOR LINK](https://omega-gg.glitch.me/)
            
__**Help Command:-**__ [CLICK HERE FOR LINK](https://omega-gg.glitch.me/Nav-bar/Commands.html)
            
__**Support Server:-**__ [CLICK HERE TO JOIN](https://discord.gg/svfEXd96MC)
            
__**Give your Feedback/Suggestions:-**__ [CLICK HERE FOR LINK](https://omega-gg.glitch.me/Nav-bar/Feedback.html)

__**INVITE ME:-**__ Type [CLICK HERE FOR LINK](https://discord.com/api/oauth2/authorize?client_id=796019810252488754&permissions=2134207679&scope=bot)`

            )
            .setThumbnail(client.user.displayAvatarURL())
            .setFooter('Omega', client.user.displayAvatarURL())
            .setTimestamp();

        message.channel.send(embed);
    }
}
