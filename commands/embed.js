const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  if(message.author.id !== "395407295867256833") return;

  const cmd = args.join(' ').split(' | ')

  let emb = new Discord.RichEmbed()
  .addField(`Embed Output`, cmd[0], true)
  .setColor(`RANDOM`)
  .setTimestamp()

  message.channel.send(emb)
  
  message.delete();

    }
    module.exports.help = {
        name: "embed"
      }