const discord = require("discord.js");

module.exports = {
    name: "invite",
    category: "bot",
    description: "Invite Me",
    run: async(client, message, args) => {
        let embed = new discord.MessageEmbed()
            .setColor("#050505")
            .setTitle("**🤖 HERE INVITE LINK OF BOT 🤖**")
            .setDescription(":beginner:[CLICK HERE TO INVITE](https://discord.com/api/oauth2/authorize?client_id=796019810252488754&permissions=2134207679&scope=bot) :beginner:")
            .setThumbnail(client.user.displayAvatarURL())
            .setFooter('Omega V2 | Version: 0.1.0', client.user.displayAvatarURL());

        message.channel.send(embed);


    }
}
