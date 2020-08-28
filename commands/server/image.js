const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "image",
    aliases: ["image", "i"],
    category: "Server",
    usage: "image <utl> <tessage/title>",
    description: "Returns provided text in Embed form.",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send(`YOU DO NOT HAVE PERMISSION `)
        await message.delete()
        let say = args[0]
        let say1 = args.slice(1).join(" ");
        if(!say) return message.channel.send(`❌ | `+"I Cannot Repeat Blank Message formate (image <utl> <tessage/title>)")
        let embed = new MessageEmbed()
            .setAuthor(message.guild, message.guild.iconURL())
            .setTitle(`${say1}`)
            .setImage(`${say}`)
            .setColor("RANDOM")
            
            message.channel.send(embed)
            
    }
}
