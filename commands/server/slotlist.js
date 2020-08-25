const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "slotlist",
    aliases: ["slotlist", "s"],
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
            .setTitle("Slot List")
            .setDescription(`${say}`)
            .setColor("RANDOM")
            .setTitle("NOTE")
            .setDescription("Id-Pass will be at  3:45 PM & 4:45  to the Leader in Specific Channel ( <#697401222478692352> ) @here <@&705783124503822337>")
            .setFooter("Id-Pass will be at  3:45 PM & 4:45  to the Leader in Specific Channel ( <#697401222478692352> ) @here <@&705783124503822337>")
            //.setThumbnail("https://cdn.discordapp.com/attachments/675632627998523402/722844897576747048/ezgif.com-video-to-gif_7.gif")
            
            message.channel.send(embed)
            
    }
}
