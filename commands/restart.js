const Discord = require('discord.js');
const config = require("../config.json")

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Restart")
    .setDescription("u bukan developer :)")
    .setColor(`#FA4106`);
    if(message.author.id !== '707503577731432529') return message.channel.send(embed);
    message.channel.send(`>>> Restarted in ${Math.floor(client.ping / 100)}ms`).then(() => {
        process.exit(1);
    })
}

exports.conf ={
  aliases: ['r']
}
exports.help ={
  name: 'restart'
}