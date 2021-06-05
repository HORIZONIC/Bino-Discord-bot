//ODUwNDI3MjAwMTU4MDQwMDc1.YLpkDA.f0SbHuHrezATypBm9TdYhWucI7A
//under construction
//HORIZON™#0001

const Discord = require('discord.js')
const bot = new Discord.Client({ws: {intents: Discord.Intents.ALL}});
const fs = require("fs")
bot.commands = new Discord.Collection();

bot.on('ready', () => {
    console.log('Yay Bot Is Rocking on Your Server Now')
    bot.user.setPresence({ activity: { name: '[`]help' }, status: 'dnd' })
    

    fs.readdir('./commands', (err, files) => {
        if(err) return console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() == 'js');


        if (jsfile.length <= 0) return console.log("Could not find commands!")

        jsfile.forEach(f => {
            let props = require(`./commands/${f}`);
            bot.commands.set(props.help.name, props)
        })
    })
})

bot.on('message', (message) => {
    if(message.author.bot)return;
    if(message.channel.type !== 'text')return;
    let prefix = '`';


    let MessageArray = message.content.split(' ')
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;


    let commandfile = bot.commands.get(cmd);
    if(commandfile) {commandfile.run(bot,message,args)}


})

bot.on('guildMemberUpdate', (oldMember, newMember) => {
    if(oldMember.nickname !== newMember.nickname) {
        newMember.send('you nick name was changed!')
    }
    let oldAvatar = oldMember.user.avatarURL() // https://link.com
    let newAvatar = newMember.user.avatarURL(); // https://link.com
    if(oldAvatar !== newAvatar) {
        newMember.send('you changed your porofile picture!')
    }
    
    
})

bot.on('guildMemberAdd', (member) => {
    let embed = new Discord.MessageEmbed()
    .setTitle('Welcome to my server!')
    .setDescription(`Thank you for joining my server! Make sure to stay active and talk to the other members!\n**Current Member Count:** ${member.guild.memberCount}\n**Owner:** ${member.guild.owner.user.tag}`)
    .setColor('#cc3300')
    .setAuthor(member.guild.owner.user.tag, member.guild.owner.user.avatarURL())
    .setFooter(member.guild.name, member.guild.iconURL())
    .setThumbnail(member.user.avatarURL());

    member.send(embed)
})





bot.login("ODUwNDI3MjAwMTU4MDQwMDc1.YLpkDA.f0SbHuHrezATypBm9TdYhWucI7A")