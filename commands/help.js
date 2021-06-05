const Discord = require("discord.js")

exports.run = async (bot,message,args) => {
    
    let infoembed = new Discord.MessageEmbed()
    .setTitle('Bino Help')
    .setDescription('prefix "`"\n Commands\n Memes = "memes"\n Ban user = "ban @users reason"\n Kick user = "Kick @users reason"\n More commands soon!\n Support for Bino => https://discord.gg/XbvpU5Qgyj ')
    .setColor('#cc3300')
    .setFooter(`Developed by HORIZON`)
    message.channel.send(infoembed)
    


}
exports.help = {
name: 'help'
}