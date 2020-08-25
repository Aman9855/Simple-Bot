const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "announce",
    aliases: ["announce", "a"],
    category: "Server",
    usage: "embed <text to say>",
    description: "Returns provided text in Embed form.",
    run: async(client, message, args) => {
        //if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send(`YOU DO NOT HAVE PERMISSION `)
        await message.delete()
        let say = message.content.split(" ").slice(1).join(" ")
        if(!say) return message.channel.send(`❌ | `+"I Cannot Repeat Blank Message")
        let embed = new MessageEmbed()
            .setAuthor(message.guild, message.guild.iconURL())
            .setDescription(`${say}`)
            .setColor("RANDOM")
            .setThumbnail("https://cdn.discordapp.com/attachments/675632627998523402/722844897576747048/ezgif.com-video-to-gif_7.gif")
            //.setFooter(`${message.author.username}`, `${message.author.avatarURL()}`)
            
            message.channel.send(embed)
            
    }
}
