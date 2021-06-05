exports.run = async (bot,message,args) => {
    
        let member = message.mentions.members.first();
        if(!member){ message.channel.send('Hello');} else{
            message.channel.send(`Hello How are you? ${member.user.tag}`)
        }
       
    
}
exports.help = {
    name: 'hello'
}